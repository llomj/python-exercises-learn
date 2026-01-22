import React, { useState } from 'react';
import { IdLogEntry } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import { QUESTIONS_BANK } from '../questionsBank';

interface IdLogViewProps {
  entries: IdLogEntry[];
  onClose: () => void;
}

export const IdLogView: React.FC<IdLogViewProps> = ({ entries, onClose }) => {
  const { t } = useLanguage();
  const [expandedIds, setExpandedIds] = useState<Set<number>>(new Set());
  const sortedEntries = [...entries].sort((a, b) => b.timestamp - a.timestamp);

  const toggleCodonExplanation = (id: number) => {
    setExpandedIds(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const getQuestionDetailedExplanation = (id: number): string | null => {
    const question = QUESTIONS_BANK.find(q => q.id === id);
    return question?.detailedExplanation || null;
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="glass rounded-3xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto space-y-6 animate-in zoom-in duration-300 shadow-2xl border border-white/10">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-black text-white flex items-center gap-3">
            <i className="fas fa-list text-indigo-400"></i> ID Log
          </h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>

        {sortedEntries.length === 0 ? (
          <div className="glass rounded-2xl p-12 text-center space-y-4">
            <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto text-slate-500 text-2xl">
              <i className="fas fa-bookmark"></i>
            </div>
            <p className="text-slate-500 font-medium">No saved questions yet. Search by ID and save questions for reference.</p>
          </div>
        ) : (
          <div className="grid gap-4">
            {sortedEntries.map((entry) => (
              <div 
                key={`${entry.id}-${entry.timestamp}`}
                className="glass rounded-2xl p-5 border-l-4 border-l-indigo-500 transition-all hover:translate-x-1"
              >
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => toggleCodonExplanation(entry.id)}
                      className="px-3 py-1 bg-indigo-500/10 text-indigo-400 rounded-lg text-xs font-bold hover:bg-indigo-500/20 transition-all cursor-pointer flex items-center gap-2 group"
                      title="Click to view codon explanation"
                    >
                      ID: {entry.id}
                      <i className={`fas fa-chevron-${expandedIds.has(entry.id) ? 'up' : 'down'} text-[8px] transition-transform group-hover:scale-110`}></i>
                    </button>
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono">
                    {new Date(entry.timestamp).toLocaleDateString()}
                  </span>
                </div>
                
                {expandedIds.has(entry.id) && getQuestionDetailedExplanation(entry.id) && (
                  <div className="mb-4 p-6 bg-indigo-500/10 rounded-xl border border-indigo-500/20 animate-in slide-in-from-top duration-200">
                    <div className="flex items-center gap-2 mb-3">
                      <i className="fas fa-lightbulb text-indigo-400 text-sm"></i>
                      <h4 className="font-black text-[10px] uppercase tracking-[0.2em] text-indigo-400">Codon Explanation</h4>
                    </div>
                    <div className="space-y-3">
                      <div className="space-y-2">
                        <h5 className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em] flex items-center gap-2">
                          <i className="fas fa-graduation-cap text-xs"></i>
                          In-Depth Explanation
                        </h5>
                        <div className="text-slate-200 leading-relaxed text-sm whitespace-pre-wrap">
                          {getQuestionDetailedExplanation(entry.id)}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                <p className="text-slate-200 font-bold mb-3 leading-tight">
                  {entry.question}
                </p>
                
                <div className="mb-4">
                  <div className="text-xs p-2 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center gap-2">
                    <i className="fas fa-check-circle"></i>
                    <span>Correct Answer: {entry.correctAnswer}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/5">
                  <p className="text-[11px] text-slate-400 leading-relaxed italic">
                    {entry.explanation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
