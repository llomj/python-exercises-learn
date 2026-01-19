import React, { useState, useEffect, useRef } from 'react';
import { Question, QuestionAttempt } from '../types';
import { quizService } from '../services/quizService';
import { ProgressBar } from './ProgressBar';
import { LEVELS } from '../constants';

interface QuizViewProps {
  level: number;
  currentProgress: number;
  completedIds: number[];
  onAttempt: (attempt: QuestionAttempt) => void;
  onComplete: (score: number) => void;
  onExit: () => void;
  randomizeTrigger?: number; // Add trigger to force re-randomization
  randomMode?: boolean; // Random mode: questions from all levels
}

export const QuizView: React.FC<QuizViewProps> = ({ 
  level, 
  currentProgress, 
  completedIds, 
  onAttempt, 
  onComplete, 
  onExit,
  randomizeTrigger,
  randomMode = false
}) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [loading, setLoading] = useState(true);
  const [score, setScore] = useState(0);
  const [showDetailedExplanation, setShowDetailedExplanation] = useState(false);

  // We use a ref to capture completedIds at the START of the quiz session.
  // This prevents the quiz from re-fetching if completedIds updates mid-quiz.
  const initialCompletedIds = useRef(completedIds);

  // Helper function to shuffle array and track original index of correct answer
  const shuffleOptions = (question: Question): Question => {
    const options = [...question.options];
    const correctValue = options[question.correct_option_index];
    
    // Fisher-Yates shuffle
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [options[i], options[j]] = [options[j], options[i]];
    }
    
    // Find new position of correct answer
    const newCorrectIndex = options.findIndex(opt => opt === correctValue);
    
    return {
      ...question,
      options,
      correct_option_index: newCorrectIndex
    };
  };

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        setLoading(true);
        // Fetch questions based on mode: level-specific or random from all levels
        const data = await quizService.getBatch(level, 15, initialCompletedIds.current, randomMode);
        // Shuffle options for each question so correct answer isn't always first
        const shuffledQuestions = data.map(shuffleOptions);
        setQuestions(shuffledQuestions);
        // Reset quiz state when questions are re-randomized
        setCurrentIndex(0);
        setSelectedOption(null);
        setIsAnswered(false);
        setScore(0);
        setShowDetailedExplanation(false);
      } catch (err) {
        console.error("Failed to load genome batch:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchQuestions();
    // Dependency on 'level', 'randomizeTrigger', and 'randomMode'. If any changes, we reset.
    // If completedIds (passed from props) changes, we do NOT re-run this.
  }, [level, randomizeTrigger, randomMode]);

  const handleOptionClick = (index: number) => {
    if (isAnswered) return;
    
    const currentQuestion = questions[currentIndex];
    const isCorrect = index === currentQuestion.correct_option_index;
    
    setSelectedOption(index);
    setIsAnswered(true);
    
    if (isCorrect) {
      setScore(s => s + 1);
    }

    onAttempt({
      id: currentQuestion.id,
      question: currentQuestion.question,
      selectedOption: currentQuestion.options[index],
      correctOption: currentQuestion.options[currentQuestion.correct_option_index],
      isCorrect,
      explanation: currentQuestion.explanation,
      level: level,
      timestamp: Date.now()
    });
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(c => c + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      setShowDetailedExplanation(false);
    } else {
      onComplete(score);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] space-y-6 text-center">
        <div className="relative">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-indigo-500"></div>
          <div className="absolute inset-0 flex items-center justify-center">
             <i className="fas fa-dna text-indigo-400 animate-pulse"></i>
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-slate-200 font-bold text-lg">Stabilizing Genome...</p>
          <p className="text-slate-500 text-xs max-w-xs mx-auto">
            Sequencing 15 unique logic patterns for Stage {level}.
          </p>
        </div>
      </div>
    );
  }

  if (questions.length === 0) return (
    <div className="text-center p-12 glass rounded-3xl">
      <p className="text-rose-400 font-bold mb-4">Sequence Error</p>
      <p className="text-slate-400 text-sm mb-6">Could not retrieve questions for this level.</p>
      <button onClick={onExit} className="px-6 py-2 bg-indigo-500 rounded-xl font-bold">Return to Hub</button>
    </div>
  );

  const currentQuestion = questions[currentIndex];

  return (
    <div className="max-w-2xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex justify-between items-center bg-white/5 p-4 rounded-2xl border border-white/5">
        <button onClick={onExit} className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-800 text-slate-400 hover:text-white transition-colors border border-white/5">
          <i className="fas fa-times"></i>
        </button>
        <div className="flex-1 px-6">
          <div className="flex justify-between text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em] mb-1.5">
            <span>MUTATION {currentIndex + 1} OF {questions.length}</span>
            <span>{Math.round(((currentIndex + 1) / questions.length) * 100)}%</span>
          </div>
          <ProgressBar current={currentIndex + 1} total={questions.length} colorClass="bg-indigo-500" />
        </div>
      </div>

      <div className="glass rounded-3xl p-6 md:p-10 space-y-8 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
          <i className={`fas fa-brain text-8xl`}></i>
        </div>

        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em] border border-indigo-500/20">
            <i className="fas fa-microchip text-[8px]"></i>
            {currentQuestion.concept}
          </div>
          <h2 className="text-xl md:text-2xl font-bold leading-tight text-white">
            {currentQuestion.question}
          </h2>
        </div>

        <div className="grid gap-3">
          {currentQuestion.options.map((option, idx) => {
            let colorClass = "bg-slate-800/50 border-white/5 hover:border-indigo-500/50 hover:bg-slate-800";
            if (isAnswered) {
              if (idx === currentQuestion.correct_option_index) {
                colorClass = "bg-emerald-500/20 border-emerald-500 text-emerald-400 shadow-lg shadow-emerald-500/10";
              } else if (idx === selectedOption) {
                colorClass = "bg-rose-500/20 border-rose-500 text-rose-400 shadow-lg shadow-rose-500/10";
              } else {
                colorClass = "bg-slate-900/40 border-white/5 text-slate-500";
              }
            }

            return (
              <button
                key={idx}
                disabled={isAnswered}
                onClick={() => handleOptionClick(idx)}
                className={`group w-full p-4 md:p-5 rounded-2xl border-2 text-left transition-all duration-300 flex items-center justify-between ${colorClass} ${!isAnswered && 'active:scale-[0.98]'}`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold transition-colors ${
                    isAnswered && idx === currentQuestion.correct_option_index ? 'bg-emerald-500 text-white' : 
                    isAnswered && idx === selectedOption ? 'bg-rose-500 text-white' : 'bg-white/5 text-slate-400 group-hover:bg-indigo-500 group-hover:text-white'
                  }`}>
                    {String.fromCharCode(65 + idx)}
                  </div>
                  <span className="font-semibold text-sm md:text-base">{option}</span>
                </div>
                {isAnswered && idx === currentQuestion.correct_option_index && (
                  <i className="fas fa-check-circle text-emerald-500 animate-in zoom-in duration-300"></i>
                )}
                {isAnswered && idx === selectedOption && idx !== currentQuestion.correct_option_index && (
                  <i className="fas fa-times-circle text-rose-500 animate-in zoom-in duration-300"></i>
                )}
              </button>
            );
          })}
        </div>

        {isAnswered && (
          <div className="animate-in slide-in-from-bottom-4 duration-500 space-y-6 pt-4">
            <div className="p-6 rounded-2xl bg-indigo-500/10 border border-indigo-500/20">
              <button
                onClick={() => setShowDetailedExplanation(!showDetailedExplanation)}
                className="w-full flex items-center justify-between gap-2 mb-3 text-indigo-400 hover:text-indigo-300 transition-colors group"
              >
                <div className="flex items-center gap-2">
                  <i className="fas fa-lightbulb text-sm"></i>
                  <h4 className="font-black text-[10px] uppercase tracking-[0.2em]">Codon Explanation</h4>
                  {currentQuestion.detailedExplanation && (
                    <span className="text-[9px] text-indigo-500/70 font-normal normal-case">
                      {showDetailedExplanation ? '(Click to collapse)' : '(Click for detailed explanation)'}
                    </span>
                  )}
                </div>
                {currentQuestion.detailedExplanation && (
                  <i className={`fas fa-chevron-${showDetailedExplanation ? 'up' : 'down'} text-xs transition-transform group-hover:scale-110`}></i>
                )}
              </button>
              <div className="space-y-4">
                <p className="text-slate-300 leading-relaxed text-sm font-medium whitespace-pre-wrap">
                  {currentQuestion.explanation}
                </p>
                {showDetailedExplanation && currentQuestion.detailedExplanation && (
                  <div className="animate-in slide-in-from-top-4 duration-300 pt-4 border-t border-indigo-500/20">
                    <div className="space-y-3">
                      <h5 className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em] flex items-center gap-2">
                        <i className="fas fa-graduation-cap text-xs"></i>
                        In-Depth Explanation
                      </h5>
                      <div className="text-slate-200 leading-relaxed text-sm whitespace-pre-wrap">
                        {currentQuestion.detailedExplanation}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <button
              onClick={handleNext}
              className="w-full py-5 bg-indigo-500 hover:bg-indigo-600 rounded-2xl font-black text-lg text-white transition-all transform active:scale-95 shadow-2xl shadow-indigo-500/30 flex items-center justify-center gap-3"
            >
              {currentIndex === questions.length - 1 ? "FINISH EVOLUTION" : "CONTINUE MUTATION"}
              <i className="fas fa-arrow-right text-sm"></i>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};