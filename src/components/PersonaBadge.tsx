import React from 'react';
import { PersonaStage } from '../types';

interface PersonaBadgeProps {
  stage: PersonaStage;
  size?: 'sm' | 'md' | 'lg';
}

const personaIcons: Record<PersonaStage, string> = {
  [PersonaStage.PLANKTON]: "fa-microbe",
  [PersonaStage.SHRIMP]: "fa-shrimp",
  [PersonaStage.CRAB]: "fa-hand-peace",
  [PersonaStage.SMALL_FISH]: "fa-fish",
  [PersonaStage.OCTOPUS]: "fa-octopus-deploy",
  [PersonaStage.SEAL]: "fa-water",
  [PersonaStage.DOLPHIN]: "fa-dolphin",
  [PersonaStage.SHARK]: "fa-shield-halved",
  [PersonaStage.WHALE]: "fa-cloud",
  [PersonaStage.GOD_WHALE]: "fa-crown",
};

export const PersonaBadge: React.FC<PersonaBadgeProps> = ({ stage, size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-12 h-12 text-xl',
    lg: 'w-20 h-20 text-4xl',
  };

  return (
    <div className={`flex flex-col items-center justify-center`}>
      <div className={`${sizeClasses[size]} rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20`}>
        <i className={`fas ${personaIcons[stage] || 'fa-fish'} text-white`}></i>
      </div>
    </div>
  );
};