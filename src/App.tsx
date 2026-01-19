import React, { useState, useEffect } from 'react';
import { UserStats, PersonaStage, QuestionAttempt } from './types';
import { EvolutionHub } from './components/EvolutionHub';
import { QuizView } from './components/QuizView';
import { HistoryLog } from './components/HistoryLog';
import { GlossaryView } from './components/GlossaryView';
import { LEVELS, XP_PER_QUESTION, QUESTIONS_PER_LEVEL } from './constants';

const LOCAL_STORAGE_KEY = 'python_exercises_learn_stats_v3_offline';

const INITIAL_STATS: UserStats = {
  currentLevel: 1,
  xp: 0,
  completedQuestionIds: [],
  highestUnlockedLevel: 1,
  levelProgress: {},
  history: []
};

const App: React.FC = () => {
  const [stats, setStats] = useState<UserStats>(INITIAL_STATS);
  const [view, setView] = useState<'hub' | 'quiz' | 'log' | 'glossary'>('hub');
  const [showResult, setShowResult] = useState<{score: number, total: number} | null>(null);
  const [randomizeTrigger, setRandomizeTrigger] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (!parsed.history) parsed.history = [];
        if (!parsed.completedQuestionIds) parsed.completedQuestionIds = [];
        setStats(parsed);
      } catch (e) {
        console.error("Corrupted state, resetting", e);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(stats));
  }, [stats]);

  const currentLevelInfo = LEVELS.find(l => l.level === stats.currentLevel) || LEVELS[0];
  const currentPersona = currentLevelInfo.persona;
  const currentProgress = stats.levelProgress[stats.currentLevel] || 0;

  const handleStartEvolution = () => {
    setView('quiz');
    setShowResult(null);
  };

  const recordAttempt = (attempt: QuestionAttempt) => {
    setStats(prev => ({
      ...prev,
      history: [attempt, ...prev.history].slice(0, 1000),
      completedQuestionIds: attempt.isCorrect && !prev.completedQuestionIds.includes(attempt.id) 
        ? [...prev.completedQuestionIds, attempt.id] 
        : prev.completedQuestionIds
    }));
  };

  const handleQuizComplete = (score: number) => {
    const total = 15; 
    const xpGained = score * XP_PER_QUESTION;
    
    setStats(prev => {
      const newXp = prev.xp + xpGained;
      const currentLevelProgress = prev.levelProgress[prev.currentLevel] || 0;
      const newLevelProgress = Math.min(QUESTIONS_PER_LEVEL, currentLevelProgress + total);
      
      const updatedLevelProgress = {
        ...prev.levelProgress,
        [prev.currentLevel]: newLevelProgress
      };

      let newLevel = prev.currentLevel;
      if (newLevelProgress >= QUESTIONS_PER_LEVEL && newLevel < 10) {
        newLevel += 1;
      }

      return {
        ...prev,
        xp: newXp,
        currentLevel: newLevel,
        highestUnlockedLevel: Math.max(prev.highestUnlockedLevel, newLevel),
        levelProgress: updatedLevelProgress,
        lastSessionScore: score,
        lastSessionTotal: total
      };
    });

    setShowResult({ score, total });
    setView('hub');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-indigo-500/30">
      <nav className="p-4 flex items-center justify-between border-b border-white/5 sticky top-0 z-50 glass">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setView('hub')}>
            <div className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <i className="fas fa-terminal text-white text-xs"></i>
            </div>
            <span className="font-bold text-lg tracking-tight hidden sm:inline">PYTHON<span className="text-indigo-400">EXERCISES</span></span>
          </div>
          
          <div className="h-8 w-[1px] bg-white/10 mx-2 hidden sm:block"></div>
          
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-3 bg-white/5 px-3 py-1.5 rounded-2xl border border-white/10">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-sm">
                 <i className={`fas ${currentPersona === PersonaStage.PLANKTON ? 'fa-microbe' : 
                   currentPersona === PersonaStage.SHRIMP ? 'fa-shrimp' : 'fa-fish'} text-white`}></i>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-none">Rank</span>
                <span className="text-sm font-bold text-slate-200 leading-tight">{currentPersona}</span>
              </div>
            </div>

            <div className="flex gap-1.5 items-center">
              <div className="flex flex-col items-center gap-1.5">
                <button 
                  onClick={() => setView('glossary')}
                  className={`flex items-center justify-center w-9 h-9 rounded-xl border transition-all ${
                    view === 'glossary' ? 'bg-indigo-500 border-indigo-400 text-white' : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:border-white/20'
                  }`}
                  title="Glossary"
                >
                  <i className="fas fa-circle-info text-sm"></i>
                </button>
                {view === 'quiz' && (
                  <button
                    onClick={() => setRandomizeTrigger(prev => prev + 1)}
                    className="flex items-center justify-center w-7 h-7 rounded-lg bg-green-500 hover:bg-green-600 border border-green-400 text-white transition-all shadow-lg shadow-green-500/30 hover:scale-110 active:scale-95"
                    title="Randomize questions"
                  >
                    <i className="fas fa-shuffle text-xs"></i>
                  </button>
                )}
              </div>

              <button 
                onClick={() => setView('log')}
                className={`flex items-center gap-2 px-3 py-1.5 h-9 rounded-xl border transition-all ${
                  view === 'log' ? 'bg-indigo-500 border-indigo-400 text-white' : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:border-white/20'
                }`}
              >
                <i className="fas fa-book-open text-xs"></i>
                <span className="text-xs font-bold uppercase tracking-wider hidden xs:inline">Log</span>
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-sm font-bold bg-indigo-500/10 text-indigo-400 px-4 py-2 rounded-xl border border-indigo-500/20 shadow-inner">
            <i className="fas fa-bolt text-amber-400 mr-2"></i>
            {stats.xp.toLocaleString()}
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8 max-w-4xl min-h-[calc(100dvh-160px)]">
        {view === 'quiz' ? (
          <QuizView 
            level={stats.currentLevel} 
            currentProgress={currentProgress}
            completedIds={stats.completedQuestionIds}
            onAttempt={recordAttempt}
            onComplete={handleQuizComplete} 
            onExit={() => setView('hub')}
            randomizeTrigger={randomizeTrigger}
          />
        ) : view === 'log' ? (
          <HistoryLog history={stats.history} onBack={() => setView('hub')} />
        ) : view === 'glossary' ? (
          <GlossaryView onBack={() => setView('hub')} />
        ) : showResult ? (
          <div className="max-w-md mx-auto p-10 glass rounded-3xl text-center space-y-6 animate-in zoom-in duration-500 shadow-2xl">
            <div className="w-24 h-24 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center text-5xl mx-auto shadow-2xl shadow-emerald-500/20 border border-emerald-500/30">
              <i className="fas fa-arrow-up-right-dots"></i>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-2">Mutations Complete!</h2>
              <p className="text-slate-400">Genetics stabilized for {showResult.score} concepts.</p>
            </div>
            <div className="py-4 px-6 bg-white/5 rounded-2xl flex justify-around border border-white/5">
              <div>
                <div className="text-xs text-slate-500 uppercase font-bold mb-1 tracking-wider">Evolution Gain</div>
                <div className="text-2xl font-black text-amber-400">+{showResult.score * XP_PER_QUESTION} XP</div>
              </div>
              <div>
                <div className="text-xs text-slate-500 uppercase font-bold mb-1 tracking-wider">Success Rate</div>
                <div className="text-2xl font-black text-sky-400">{Math.round((showResult.score / showResult.total) * 100)}%</div>
              </div>
            </div>
            <button 
              onClick={() => setShowResult(null)}
              className="w-full py-4 bg-indigo-500 hover:bg-indigo-600 rounded-2xl font-bold text-white transition-all transform active:scale-95 shadow-xl shadow-indigo-500/30"
            >
              BACK TO HUB
            </button>
          </div>
        ) : (
          <EvolutionHub 
            stats={stats} 
            onStartQuiz={handleStartEvolution} 
          />
        )}
      </main>

      <footer className="mt-auto border-t border-white/5 p-8 text-center text-slate-600 text-sm">
        <p>&copy; 2024 Python Exercises Learn. Interactive Learning Platform.</p>
      </footer>
    </div>
  );
};

export default App;