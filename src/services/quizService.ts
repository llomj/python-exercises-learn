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
    completedIds: number[] = [],
    randomMode: boolean = false
  ): Promise<Question[]> {
    // 1. Filter by requested level OR all levels if random mode
    const levelQuestions = randomMode 
      ? QUESTIONS_BANK // Get questions from all levels in random mode
      : QUESTIONS_BANK.filter(q => q.level === level);
    
    // 2. Exclude already completed questions to prevent repeats
    const available = levelQuestions.filter(q => !completedIds.includes(q.id));
    
    // 3. Only use available (uncompleted) questions - never repeat until all are done
    // If we have fewer than requested, return what's available
    const source = available.length > 0 ? available : levelQuestions; // Fallback only if somehow all are marked completed
    
    // 4. Remove any duplicate IDs (safety check - shouldn't happen but ensures uniqueness)
    const uniqueById = source.filter((q, index, self) => 
      index === self.findIndex((q2) => q2.id === q.id)
    );
    
    // 5. Robust shuffle (Fisher-Yates style for better randomness)
    const shuffled = [...uniqueById];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    // 6. Ensure no duplicate question texts within the batch (extra safety)
    const selected: Question[] = [];
    const seenTexts = new Set<string>();
    
    for (const question of shuffled) {
      if (selected.length >= count) break;
      // Only add if we haven't seen this exact question text in this batch
      if (!seenTexts.has(question.question)) {
        selected.push(question);
        seenTexts.add(question.question);
      }
    }

    // 7. Return up to count questions (may be fewer if not enough available)
    return selected;
  }
}

export const quizService = new QuizService();