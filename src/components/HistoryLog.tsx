import React from 'react';
import { QuestionAttempt } from '../types';

interface HistoryLogProps {
  history: QuestionAttempt[];
  onBack: () => void;
}

export const HistoryLog: React.FC<HistoryLogProps> = ({ history, onBack }) => {
  const sortedHistory = [...history].sort((a, b) => b.timestamp - a.timestamp);

  return (
    <div className="space-y-6 animate-in slide-in-from-right duration-500">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-black text-white flex items-center gap-3">
          <i className="fas fa-book-open text-indigo-400"></i> LEARNING LOG
        </h2>
        <button 
          onClick={onBack}
          className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-xl text-sm font-bold transition-colors"
        >
          BACK TO HUB
        </button>
      </div>

      {sortedHistory.length === 0 ? (
        <div className="glass rounded-3xl p-12 text-center space-y-4">
          <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto text-slate-500 text-2xl">
            <i className="fas fa-ghost"></i>
          </div>
          <p className="text-slate-500 font-medium">Your learning log is empty. Start evolving to record your journey!</p>
        </div>
      ) : (
        <div className="grid gap-4">
          {sortedHistory.map((attempt) => (
            <div 
              key={`${attempt.id}-${attempt.timestamp}`}
              className={`glass rounded-2xl p-5 border-l-4 transition-all hover:translate-x-1 ${
                attempt.isCorrect ? 'border-l-emerald-500' : 'border-l-rose-500'
              }`}
            >
              <div className="flex justify-between items-start mb-3">
                <span className={`text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-widest ${
                  attempt.isCorrect ? 'bg-emerald-500/10 text-emerald-500' : 'bg-rose-500/10 text-rose-500'
                }`}>
                  Level {attempt.level} • {attempt.isCorrect ?'Correct' : 'Incorrect'}
                </span>
                <span className="text-[10px] text-slate-500 font-mono">
                  {new Date(attempt.timestamp).toLocaleDateString()}
                </span>
              </div>
              
              <p className="text-slate-200 font-bold mb-3 leading-tight">
                {attempt.question}
              </p>
              
              <div className="space-y-2 mb-4">
                <div className={`text-xs p-2 rounded-lg flex items-center gap-2 ${
                  attempt.isCorrect ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'
                }`}>
                  <i className={`fas ${attempt.isCorrect ? 'fa-check' : 'fa-times'}`}></i>
                  <span>Your Answer: {attempt.selectedOption}</span>
                </div>
                {!attempt.isCorrect && (
                  <div className="text-xs p-2 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center gap-2">
                    <i className="fas fa-check"></i>
                    <span>Correct: {attempt.correctOption}</span>
                  </div>
                )}
              </div>

              <div className="pt-3 border-t border-white/5">
                <p className="text-[11px] text-slate-400 leading-relaxed italic">
                  {attempt.explanation}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};