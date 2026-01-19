// This script generates questions_1000.md with all actual questions
// Run with: npx tsx generate-questions-from-source.ts

import { QUESTIONS_BANK } from './src/questionsBank';
import { writeFileSync } from 'fs';

let markdown = '# All 1000 Python Exercise Questions\n\n';
markdown += 'This file contains all 1000 questions from the Python Exercises Learn app.\n\n';
markdown += '---\n\n';

// Group by level
const questionsByLevel: Record<number, typeof QUESTIONS_BANK> = {};
QUESTIONS_BANK.forEach(q => {
  if (!questionsByLevel[q.level]) {
    questionsByLevel[q.level] = [];
  }
  questionsByLevel[q.level].push(q);
});

// Write questions by level
Object.keys(questionsByLevel).sort((a, b) => parseInt(a) - parseInt(b)).forEach(levelStr => {
  const level = parseInt(levelStr);
  const levelQuestions = questionsByLevel[level];
  markdown += `## Level ${level} (${levelQuestions.length} questions)\n\n`;
  
  levelQuestions.forEach((q) => {
    markdown += `### Question ${q.id}\n\n`;
    markdown += `**Question:** ${q.question}\n\n`;
    markdown += `**Options:**\n`;
    q.options.forEach((opt, idx) => {
      const marker = idx === q.correct_option_index ? '✓' : ' ';
      markdown += `${marker} ${String.fromCharCode(65 + idx)}. ${opt}\n`;
    });
    markdown += `\n**Explanation:** ${q.explanation}\n\n`;
    markdown += `---\n\n`;
  });
});

markdown += `\n## Summary\n\n`;
markdown += `Total Questions: ${QUESTIONS_BANK.length}\n\n`;
Object.keys(questionsByLevel).sort((a, b) => parseInt(a) - parseInt(b)).forEach(levelStr => {
  const level = parseInt(levelStr);
  markdown += `- Level ${level}: ${questionsByLevel[level].length} questions\n`;
});

writeFileSync('questions_1000.md', markdown, 'utf-8');
console.log(`✅ Generated questions_1000.md with ${QUESTIONS_BANK.length} actual questions!`);
