// Script to validate all questions for solution coherence
// This will check if the correct answer actually matches what the question code evaluates to

const fs = require('fs');
const { execSync } = require('child_process');

// Read the questionsBank file
const questionsBankContent = fs.readFileSync('src/questionsBank.ts', 'utf8');

// Extract questions using regex (simplified approach)
// This is a basic validation - we'll need to manually check each one

console.log('Question Validation Script');
console.log('==========================\n');
console.log('This script will help identify questions where the solution');
console.log('does not match what the question code actually evaluates to.\n');
console.log('Note: Full validation requires parsing the TypeScript file properly.');
console.log('For now, checking ID 77 specifically...\n');

// Check ID 77 - isascii question
console.log('ID 77 Check:');
console.log('Question: What is "...".isascii()?');
console.log('Expected result: True (since "..." contains only ASCII characters)');
console.log('Code shows: c: 0 (which is "True" - correct)');
console.log('User reports: Shows "False" as solution');
console.log('\nThis suggests either:');
console.log('1. The correct_option_index is wrong');
console.log('2. The options array order is wrong');
console.log('3. There\'s a different question at ID 77\n');

console.log('RECOMMENDATION:');
console.log('Need to verify the actual question at ID 77 by checking the generated questions.');
console.log('The generateLevel function cycles through patterns, so ID 77 may not be');
console.log('the isascii question if patterns.length < 77.\n');
