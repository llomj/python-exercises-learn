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
    // 1. Filter by requested level
    const levelQuestions = QUESTIONS_BANK.filter(q => q.level === level);
    
    // 2. Exclude already completed
    const available = levelQuestions.filter(q => !completedIds.includes(q.id));
    
    // 3. If we don't have enough "new" questions (user finished most), reuse the level pool
    const source = available.length >= count ? available : levelQuestions;
    
    // 4. Robust shuffle (Fisher-Yates style for better randomness)
    const shuffled = [...source];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    // 5. Slice and return
    return shuffled.slice(0, count);
  }
}

export const quizService = new QuizService();