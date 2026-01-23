import React from 'react';
import { LEVELS } from '../constants';
import { PersonaStage } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import { formatTranslation } from '../translations';

interface LevelSelectorModalProps {
  currentLevel: number;
  highestUnlockedLevel: number;
  onSelectLevel: (level: number) => void;
  onClose: () => void;
}

export const LevelSelectorModal: React.FC<LevelSelectorModalProps> = ({
  currentLevel,
  highestUnlockedLevel,
  onSelectLevel,
  onClose
}) => {
  const { t } = useLanguage();

  const handleLevelSelect = (level: number) => {
    if (level <= highestUnlockedLevel) {
      onSelectLevel(level);
      onClose();
    }
  };

  const getPersonaIcon = (persona: PersonaStage): string => {
    const personaIcons: Record<PersonaStage, string> = {
      [PersonaStage.PLANKTON]: "fa-microbe",
      [PersonaStage.SHRIMP]: "fa-shrimp",
      [PersonaStage.CRAB]: "fa-crab",
      [PersonaStage.SMALL_FISH]: "fa-fish",
      [PersonaStage.OCTOPUS]: "fa-octopus",
      [PersonaStage.SEAL]: "fa-seal",
      [PersonaStage.DOLPHIN]: "fa-dolphin",
      [PersonaStage.SHARK]: "fa-shark",
      [PersonaStage.WHALE]: "fa-whale",
      [PersonaStage.GOD_WHALE]: "fa-globe",
    };
    return personaIcons[persona] || 'fa-circle';
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="glass rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto space-y-6 animate-in zoom-in duration-300 shadow-2xl border border-white/10">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-black text-white flex items-center gap-3">
            <i className="fas fa-layer-group text-indigo-400"></i> {t('levelSelector.selectLevel')}
          </h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {LEVELS.map((levelInfo) => {
            const isLocked = levelInfo.level > highestUnlockedLevel;
            const isCurrent = levelInfo.level === currentLevel;
            const isUnlocked = levelInfo.level <= highestUnlockedLevel;

            return (
              <button
                key={levelInfo.level}
                onClick={() => handleLevelSelect(levelInfo.level)}
                disabled={isLocked}
                className={`
                  relative p-4 rounded-2xl border-2 transition-all
                  ${isCurrent 
                    ? 'bg-indigo-500/20 border-indigo-400 shadow-lg shadow-indigo-500/20' 
                    : isUnlocked
                    ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 cursor-pointer'
                    : 'bg-slate-800/50 border-slate-700/50 opacity-50 cursor-not-allowed'
                  }
                `}
              >
                {isLocked && (
                  <div className="absolute top-2 right-2">
                    <i className="fas fa-lock text-slate-500 text-xs"></i>
                  </div>
                )}
                {isCurrent && (
                  <div className="absolute top-2 right-2">
                    <i className="fas fa-check-circle text-indigo-400 text-xs"></i>
                  </div>
                )}
                <div className="flex flex-col items-center gap-2">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl ${
                    isCurrent 
                      ? 'bg-indigo-500' 
                      : isUnlocked
                      ? 'bg-slate-700'
                      : 'bg-slate-800'
                  }`}>
                    <i className={`fas ${getPersonaIcon(levelInfo.persona)} ${
                      isCurrent ? 'text-white' : isUnlocked ? 'text-slate-400' : 'text-slate-600'
                    }`}></i>
                  </div>
                  <div className="text-center">
                    <div className={`text-sm font-black ${
                      isCurrent ? 'text-indigo-400' : isUnlocked ? 'text-white' : 'text-slate-500'
                    }`}>
                      {formatTranslation(t('levelSelector.level'), { level: levelInfo.level })}
                    </div>
                    <div className={`text-[10px] font-bold uppercase tracking-wider mt-1 ${
                      isCurrent ? 'text-indigo-300' : isUnlocked ? 'text-slate-400' : 'text-slate-600'
                    }`}>
                      {levelInfo.persona}
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <div className="pt-4 border-t border-white/10">
          <p className="text-xs text-slate-400 text-center">
            {currentLevel === highestUnlockedLevel 
              ? formatTranslation(t('levelSelector.youAreOnLevel'), { level: currentLevel })
              : formatTranslation(t('levelSelector.currentLevelInfo'), { current: currentLevel, highest: highestUnlockedLevel })
            }
          </p>
        </div>
      </div>
    </div>
  );
};
