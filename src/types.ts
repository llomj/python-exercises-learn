export interface Question {
  id: number;
  level: number;
  persona_stage: string;
  concept: string;
  difficulty: number;
  question: string;
  options: string[];
  correct_option_index: number;
  explanation: string;
}

export interface QuestionAttempt {
  id: number;
  question: string;
  selectedOption: string;
  correctOption: string;
  isCorrect: boolean;
  explanation: string;
  level: number;
  timestamp: number;
}

export enum PersonaStage {
  PLANKTON = "Plankton",
  SHRIMP = "Shrimp",
  CRAB = "Crab",
  SMALL_FISH = "Small Fish",
  OCTOPUS = "Octopus",
  SEAL = "Seal",
  DOLPHIN = "Dolphin",
  SHARK = "Shark",
  WHALE = "Whale",
  GOD_WHALE = "God Whale"
}

export interface UserStats {
  currentLevel: number;
  xp: number;
  completedQuestionIds: number[];
  highestUnlockedLevel: number;
  levelProgress: Record<number, number>; 
  history: QuestionAttempt[];
  lastSessionScore?: number;
  lastSessionTotal?: number;
}

export interface LevelInfo {
  level: number;
  persona: PersonaStage;
  concepts: string[];
  description: string;
  color: string;
}