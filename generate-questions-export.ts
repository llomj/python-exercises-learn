// Script to export all questions to JSON for solution generation
import { QUESTIONS_BANK } from './src/questionsBank';
import { writeFileSync } from 'fs';

interface QuestionExport {
  id: number;
  level: number;
  question: string;
  options: string[];
  correct_option_index: number;
  correct_answer: string;
}

const questions: QuestionExport[] = QUESTIONS_BANK.map(q => ({
  id: q.id,
  level: q.level,
  question: q.question,
  options: q.options,
  correct_option_index: q.correct_option_index,
  correct_answer: q.options[q.correct_option_index]
}));

writeFileSync('questions-export.json', JSON.stringify(questions, null, 2));
console.log(`Exported ${questions.length} questions to questions-export.json`);
