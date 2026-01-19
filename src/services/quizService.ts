import { Question, PersonaStage } from "../types";
import { QUESTIONS_BANK } from "../questionsBank";

export class QuizService {
  /**
   * Fetches a batch of questions from the Python Exercises bank.
   * Logic: Filters by level, excludes already completed IDs,
   * and returns a randomized slice.
   */
  async getBatch(
    level: number, 
    count: number = 15,
    completedIds: number[] = []
  ): Promise<Question[]> {
    // 1. Filter by requested level (should have 100 questions per level)
    const levelQuestions = QUESTIONS_BANK.filter(q => q.level === level);
    
    // 2. Exclude already completed questions to prevent repeats
    const available = levelQuestions.filter(q => !completedIds.includes(q.id));
    
    // 3. Only use available (uncompleted) questions - never repeat until all are done
    // If we have fewer than requested, return what's available
    const source = available.length > 0 ? available : levelQuestions; // Fallback only if somehow all are marked completed
    
    // 4. Robust shuffle (Fisher-Yates style for better randomness)
    const shuffled = [...source];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    // 5. Return up to count questions (may be fewer if not enough available)
    return shuffled.slice(0, Math.min(count, shuffled.length));
  }
}

export const quizService = new QuizService();