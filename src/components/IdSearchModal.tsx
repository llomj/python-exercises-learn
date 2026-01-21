import React, { useState } from 'react';
import { Question } from '../types';
import { QUESTIONS_BANK } from '../questionsBank';
import { useLanguage } from '../contexts/LanguageContext';

interface IdSearchModalProps {
  onClose: () => void;
  onSaveToLog: (entry: { id: number; question: string; correctAnswer: string; explanation: string }) => void;
}

export const IdSearchModal: React.FC<IdSearchModalProps> = ({ onClose, onSaveToLog }) => {
  const { t } = useLanguage();
  const [idInput, setIdInput] = useState('');
  const [question, setQuestion] = useState<Question | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = () => {
    const id = parseInt(idInput.trim());
    if (isNaN(id) || id < 1 || id > 1000) {
      setError('Please enter a valid ID between 1 and 1000');
      setQuestion(null);
      return;
    }

    const found = QUESTIONS_BANK.find(q => q.id === id);
    if (!found) {
      setError(`Question with ID ${id} not found`);
      setQuestion(null);
      return;
    }

    setError(null);
    setQuestion(found);
  };

  const handleSave = () => {
    if (!question) return;
    
    onSaveToLog({
      id: question.id,
      question: question.question,
      correctAnswer: question.options[question.correct_option_index],
      explanation: question.explanation
    });
    
    // Show confirmation
    const confirmBtn = document.getElementById('save-confirm');
    if (confirmBtn) {
      confirmBtn.textContent = 'Saved!';
      setTimeout(() => {
        if (confirmBtn) confirmBtn.textContent = 'Save to Log';
      }, 2000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="glass rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto space-y-6 animate-in zoom-in duration-300 shadow-2xl border border-white/10">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-black text-white flex items-center gap-3">
            <i className="fas fa-hashtag text-indigo-400"></i> Search by ID
          </h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className="space-y-4">
          <div className="flex gap-2">
            <input
              type="number"
              value={idInput}
              onChange={(e) => setIdInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Enter question ID (1-1000)"
              className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              min="1"
              max="1000"
            />
            <button
              onClick={handleSearch}
              className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl font-bold transition-all"
            >
              <i className="fas fa-search mr-2"></i>Search
            </button>
          </div>

          {error && (
            <div className="p-4 bg-rose-500/10 border border-rose-500/20 rounded-xl text-rose-400 text-sm">
              <i className="fas fa-exclamation-circle mr-2"></i>{error}
            </div>
          )}

          {question && (
            <div className="space-y-4 p-6 bg-white/5 rounded-2xl border border-white/10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-indigo-500/10 text-indigo-400 rounded-lg text-xs font-bold">
                    ID: {question.id}
                  </span>
                  <span className="px-3 py-1 bg-slate-800 text-slate-300 rounded-lg text-xs font-bold">
                    Level {question.level}
                  </span>
                </div>
                <button
                  id="save-confirm"
                  onClick={handleSave}
                  className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-xl text-sm font-bold transition-all flex items-center gap-2"
                >
                  <i className="fas fa-bookmark"></i> Save to Log
                </button>
              </div>

              <div className="pt-4 border-t border-white/10">
                <p className="text-lg font-bold text-white mb-4 leading-relaxed">
                  {question.question}
                </p>

                <div className="space-y-2 mb-4">
                  <p className="text-sm font-bold text-slate-400 mb-2">Options:</p>
                  {question.options.map((option, idx) => (
                    <div
                      key={idx}
                      className={`p-3 rounded-lg ${
                        idx === question.correct_option_index
                          ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400'
                          : 'bg-slate-800/50 border border-white/5 text-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {idx === question.correct_option_index && (
                          <i className="fas fa-check-circle text-emerald-400"></i>
                        )}
                        <span className="font-mono text-xs mr-2">{String.fromCharCode(65 + idx)}.</span>
                        <span>{option}</span>
                        {idx === question.correct_option_index && (
                          <span className="ml-auto text-xs font-bold">Correct</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/10">
                  <p className="text-sm font-bold text-slate-400 mb-2">Explanation:</p>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {question.explanation}
                  </p>
                  {question.detailedExplanation && (
                    <details className="mt-3">
                      <summary className="cursor-pointer text-sm text-indigo-400 hover:text-indigo-300 font-bold">
                        Show Detailed Explanation
                      </summary>
                      <p className="mt-2 text-sm text-slate-400 leading-relaxed whitespace-pre-line">
                        {question.detailedExplanation}
                      </p>
                    </details>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
