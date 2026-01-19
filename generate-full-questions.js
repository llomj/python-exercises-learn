import { writeFileSync } from 'fs';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

// We'll need to compile TypeScript or replicate the logic
// For now, let's replicate the question generation logic directly

const PersonaStage = {
  PLANKTON: 'PLANKTON',
  SHRIMP: 'SHRIMP',
  CRAB: 'CRAB',
  SMALL_FISH: 'SMALL_FISH',
  OCTOPUS: 'OCTOPUS',
  SEAL: 'SEAL',
  DOLPHIN: 'DOLPHIN',
  SHARK: 'SHARK',
  WHALE: 'WHALE',
  GOD_WHALE: 'GOD_WHALE'
};

const varNames = ['data', 'val', 'item', 'result', 'count', 'node', 'point', 'user', 'speed', 'temp', 'alpha', 'beta', 'gamma', 'delta', 'omega', 'phi', 'zeta', 'mu', 'nu', 'pi'];

// Replicate all the pattern functions from questionsBank.ts
// This is a large file, so we'll import the actual logic

// Since we can't easily import TypeScript, let's read the file and extract patterns
import { readFileSync } from 'fs';

const questionsBankContent = readFileSync('src/questionsBank.ts', 'utf8');

// We need to actually execute the TypeScript or replicate it
// For now, let's create a Node script that uses ts-node or we replicate the logic

// Actually, the best approach is to use the build output or replicate the exact logic
// Let me create a comprehensive script that replicates the question generation

let markdown = '# All 1000 Python Exercise Questions\n\n';
markdown += 'This file contains all 1000 questions from the Python Exercises Learn app.\n\n';
markdown += '---\n\n';

// We'll need to actually run the TypeScript code to get the questions
// For now, let's try a different approach - use tsx or ts-node if available
// Or we can manually replicate the key patterns

console.log('Note: To generate the full questions, we need to execute the TypeScript code.');
console.log('Creating a script that will extract questions from the compiled JS or use tsx...');

// Let's try using a simpler approach - read the patterns and generate questions
// We'll create a script that can be run with tsx

const scriptContent = `
import { QUESTIONS_BANK } from './src/questionsBank.ts';

let markdown = '# All 1000 Python Exercise Questions\\n\\n';
markdown += 'This file contains all 1000 questions from the Python Exercises Learn app.\\n\\n';
markdown += '---\\n\\n';

const questionsByLevel = {};
QUESTIONS_BANK.forEach(q => {
  if (!questionsByLevel[q.level]) {
    questionsByLevel[q.level] = [];
  }
  questionsByLevel[q.level].push(q);
});

Object.keys(questionsByLevel).sort((a, b) => parseInt(a) - parseInt(b)).forEach(level => {
  const levelQuestions = questionsByLevel[level];
  markdown += \`## Level \${level} (\${levelQuestions.length} questions)\\n\\n\`;
  
  levelQuestions.forEach((q) => {
    markdown += \`### Question \${q.id}\\n\\n\`;
    markdown += \`**Question:** \${q.question}\\n\\n\`;
    markdown += \`**Options:**\\n\`;
    q.options.forEach((opt, idx) => {
      const marker = idx === q.correct_option_index ? '✓' : ' ';
      markdown += \`\${marker} \${String.fromCharCode(65 + idx)}. \${opt}\\n\`;
    });
    markdown += \`\\n**Explanation:** \${q.explanation}\\n\\n\`;
    markdown += \`---\\n\\n\`;
  });
});

markdown += \`\\n## Summary\\n\\n\`;
markdown += \`Total Questions: \${QUESTIONS_BANK.length}\\n\\n\`;
Object.keys(questionsByLevel).sort((a, b) => parseInt(a) - parseInt(b)).forEach(level => {
  markdown += \`- Level \${level}: \${questionsByLevel[level].length} questions\\n\`;
});

import { writeFileSync } from 'fs';
writeFileSync('questions_1000.md', markdown, 'utf-8');
console.log(\`Generated questions_1000.md with \${QUESTIONS_BANK.length} questions\`);
`;

writeFileSync('generate-questions-from-ts.ts', scriptContent, 'utf-8');
console.log('Created generate-questions-from-ts.ts - run with: npx tsx generate-questions-from-ts.ts');
