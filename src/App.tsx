import React, { useState, useEffect } from 'react';
import { UserStats, PersonaStage, QuestionAttempt } from './types';
import { EvolutionHub } from './components/EvolutionHub';
import { QuizView } from './components/QuizView';
import { HistoryLog } from './components/HistoryLog';
import { GlossaryView } from './components/GlossaryView';
import { OperationsView } from './components/OperationsView';
import { IdSearchModal } from './components/IdSearchModal';
import { IdLogView } from './components/IdLogView';
import { IdLogEntry } from './types';
import { LEVELS, XP_PER_QUESTION, QUESTIONS_PER_LEVEL } from './constants';
import { useLanguage } from './contexts/LanguageContext';
import { formatTranslation } from './translations';

const LOCAL_STORAGE_KEY = 'python_exercises_learn_stats_v3_offline';

const INITIAL_STATS: UserStats = {
  currentLevel: 1,
  xp: 0,
  completedQuestionIds: [],
  highestUnlockedLevel: 1,
  levelProgress: {},
  history: [],
  idLog: []
};

const App: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [stats, setStats] = useState<UserStats>(INITIAL_STATS);
  const [view, setView] = useState<'hub' | 'quiz' | 'log' | 'glossary'>('hub');
  const [showResult, setShowResult] = useState<{score: number, total: number} | null>(null);
  const [randomizeTrigger, setRandomizeTrigger] = useState(0);
  const [randomMode, setRandomMode] = useState(false);
  const [showRandomModeModal, setShowRandomModeModal] = useState(false);
  const [showOperations, setShowOperations] = useState(false);
  const [showIdSearch, setShowIdSearch] = useState(false);
  const [showIdLog, setShowIdLog] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  useEffect(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (!parsed.history) parsed.history = [];
        if (!parsed.completedQuestionIds) parsed.completedQuestionIds = [];
        if (!parsed.idLog) parsed.idLog = [];
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
    setRandomMode(false); // Reset to level mode when starting new quiz
  };

  const handleRandomModeToggle = () => {
    if (!randomMode) {
      // Show modal to confirm random mode
      setShowRandomModeModal(true);
    } else {
      // Show modal to confirm going back to level mode
      setShowRandomModeModal(true);
    }
  };

  const confirmRandomMode = () => {
    setRandomMode(true);
    setShowRandomModeModal(false);
    setRandomizeTrigger(prev => prev + 1); // Trigger question refresh
  };

  const confirmLevelMode = () => {
    setRandomMode(false);
    setShowRandomModeModal(false);
    setRandomizeTrigger(prev => prev + 1); // Trigger question refresh
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

  const saveToIdLog = (entry: { id: number; question: string; correctAnswer: string; explanation: string }) => {
    const idLogEntry: IdLogEntry = {
      ...entry,
      timestamp: Date.now()
    };
    
    setStats(prev => ({
      ...prev,
      idLog: [idLogEntry, ...prev.idLog.filter(e => e.id !== entry.id)].slice(0, 1000)
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
    setRandomMode(false); // Reset to level mode when quiz completes
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-indigo-500/30">
      <nav className="p-4 flex items-center justify-between border-b border-white/5 sticky top-0 z-50 glass">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setView('hub')}>
            <div className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <i className="fas fa-terminal text-white text-xs"></i>
            </div>
            <span className="font-bold text-lg tracking-tight hidden sm:inline">{t('app.title')}<span className="text-indigo-400">{t('app.subtitle')}</span></span>
          </div>
          
          <div className="h-8 w-[1px] bg-white/10 mx-2 hidden sm:block"></div>
          
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-3 bg-white/5 px-3 py-1.5 rounded-2xl border border-white/10">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-sm">
                 <i className={`fas ${currentPersona === PersonaStage.PLANKTON ? 'fa-microbe' : 
                   currentPersona === PersonaStage.SHRIMP ? 'fa-shrimp' : 'fa-fish'} text-white`}></i>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-none">{t('app.rank')}</span>
                <span className="text-sm font-bold text-slate-200 leading-tight">{currentPersona}</span>
              </div>
            </div>

            <div className="flex gap-1.5 items-center">
              <div className="flex flex-col gap-1">
                {/* Top row icons */}
                <div className="flex items-center gap-1.5">
                  <button 
                    onClick={() => setView('glossary')}
                    className={`flex items-center justify-center w-9 h-9 rounded-xl border transition-all ${
                      view === 'glossary' ? 'bg-indigo-500 border-indigo-400 text-white' : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:border-white/20'
                    }`}
                    title={t('app.glossary')}
                  >
                    <i className="fas fa-circle-info text-sm"></i>
                  </button>
                  <button 
                    onClick={() => setShowIdSearch(true)}
                    className="flex items-center justify-center w-9 h-9 rounded-xl border bg-white/5 border-white/10 text-slate-400 hover:text-white hover:border-white/20 transition-all"
                    title="Search by ID"
                  >
                    <i className="fas fa-hashtag text-xs"></i>
                  </button>
                  {view === 'quiz' && (
                    <button
                      onClick={handleRandomModeToggle}
                      className={`flex items-center justify-center w-9 h-9 rounded-xl border transition-all ${
                        randomMode 
                          ? 'bg-green-500 hover:bg-green-600 border-green-400 text-white' 
                          : 'bg-white/5 hover:bg-white/10 border-white/10 text-slate-400 hover:text-white'
                      }`}
                      title={randomMode ? "Switch to level mode" : "Switch to random mode"}
                    >
                      <i className="fas fa-shuffle text-sm"></i>
                    </button>
                  )}
                  <div className="flex items-center gap-2">
                    <i className="fas fa-bolt text-amber-400 text-sm"></i>
                    <span className="text-sm font-bold text-indigo-400">{stats.xp.toLocaleString()}</span>
                  </div>
                </div>
                {/* Bottom row icons */}
                <div className="flex items-center gap-1.5">
                  <button 
                    onClick={() => setView('log')}
                    className={`flex items-center justify-center w-9 h-9 rounded-xl border transition-all ${
                      view === 'log' ? 'bg-indigo-500 border-indigo-400 text-white' : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:border-white/20'
                    }`}
                    title={t('app.learningLog')}
                  >
                    <i className="fas fa-book-open text-xs"></i>
                  </button>
                  <button 
                    onClick={() => setShowIdLog(true)}
                    className="flex items-center justify-center w-9 h-9 rounded-xl border bg-white/5 border-white/10 text-slate-400 hover:text-white hover:border-white/20 transition-all"
                    title="ID Log"
                  >
                    <i className="fas fa-list text-xs"></i>
                  </button>
                  {view === 'quiz' && (
                    <button
                      onClick={() => setShowOperations(true)}
                      className="flex items-center justify-center w-9 h-9 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all"
                      title={t('app.operations')}
                    >
                      <i className="fas fa-calculator text-sm"></i>
                    </button>
                  )}
                  <button
                    onClick={toggleLanguage}
                    className="w-9 h-9 flex items-center justify-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all text-xs"
                    title={language === 'en' ? 'Français' : 'English'}
                  >
                    <i className="fas fa-language"></i>
                  </button>
                </div>
              </div>
            </div>
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
            onExit={() => {
              setView('hub');
              setRandomMode(false); // Reset to level mode when exiting quiz
            }}
            randomizeTrigger={randomizeTrigger}
            randomMode={randomMode}
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
              <h2 className="text-3xl font-bold mb-2">{t('result.mutationsComplete')}</h2>
              <p className="text-slate-400">{formatTranslation(t('result.geneticsStabilized'), { score: showResult.score })}</p>
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
              {t('result.backToHub')}
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
        <p>{t('footer.copyright')}</p>
      </footer>

      {/* Operations View Modal */}
      {showOperations && (
        <div className="fixed inset-0 z-[100] bg-slate-950 overflow-y-auto">
          <div className="container mx-auto px-4 py-8 max-w-4xl">
            <OperationsView onBack={() => setShowOperations(false)} />
          </div>
        </div>
      )}

      {/* Random Mode Confirmation Modal */}
      {showRandomModeModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass rounded-3xl p-8 max-w-md w-full space-y-6 animate-in zoom-in duration-300 shadow-2xl border border-white/10">
            <div className="text-center space-y-4">
              <div className={`w-16 h-16 rounded-full mx-auto flex items-center justify-center text-3xl ${
                randomMode ? 'bg-indigo-500/20 text-indigo-400' : 'bg-green-500/20 text-green-400'
              }`}>
                <i className={`fas ${randomMode ? 'fa-layer-group' : 'fa-shuffle'}`}></i>
              </div>
              <h2 className="text-2xl font-black text-white">
                {randomMode ? t('randomMode.switchToLevel') : t('randomMode.switchToRandom')}
              </h2>
              <p className="text-slate-400 leading-relaxed">
                {randomMode ? t('randomMode.levelModeDesc') : t('randomMode.randomModeDesc')}
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setShowRandomModeModal(false)}
                className="flex-1 py-3 bg-white/5 hover:bg-white/10 rounded-xl font-bold text-white transition-all border border-white/10"
              >
                {t('randomMode.cancel')}
              </button>
              <button
                onClick={randomMode ? confirmLevelMode : confirmRandomMode}
                className={`flex-1 py-3 rounded-xl font-bold text-white transition-all ${
                  randomMode 
                    ? 'bg-indigo-500 hover:bg-indigo-600 shadow-xl shadow-indigo-500/30' 
                    : 'bg-green-500 hover:bg-green-600 shadow-xl shadow-green-500/30'
                }`}
              >
                {randomMode ? t('randomMode.levelMode') : t('randomMode.randomMode')}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ID Search Modal */}
      {showIdSearch && (
        <IdSearchModal 
          onClose={() => setShowIdSearch(false)}
          onSaveToLog={saveToIdLog}
        />
      )}

      {/* ID Log View */}
      {showIdLog && (
        <IdLogView 
          entries={stats.idLog}
          onClose={() => setShowIdLog(false)}
        />
      )}
    </div>
  );
};

export default App;