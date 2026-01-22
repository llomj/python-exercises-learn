// ES Module script to export QUESTIONS_BANK to JSON
import { createRequire } from 'module';
import { writeFileSync } from 'fs';

const require = createRequire(import.meta.url);

// We need to compile TypeScript first or use tsx/ts-node
// For now, let's try a different approach - use the build output

console.log('Exporting questions from QUESTIONS_BANK...');

// Try to import from the source (will need tsx or similar)
try {
  // Use dynamic import with tsx if available
  const { QUESTIONS_BANK } = await import('./src/questionsBank.ts');
  
  const exportData = QUESTIONS_BANK.map(q => ({
    id: q.id,
    level: q.level,
    question: q.question,
    options: q.options,
    correct_option_index: q.correct_option_index,
    correct_answer: q.options[q.correct_option_index]
  }));
  
  writeFileSync('questions-export.json', JSON.stringify(exportData, null, 2));
  console.log(`✅ Exported ${exportData.length} questions to questions-export.json`);
} catch (error) {
  console.error('Error:', error.message);
  console.log('\nTrying alternative: using tsx to run TypeScript...');
  process.exit(1);
}
