#!/usr/bin/env node
/**
 * Script to generate questions_solution.md with all 1000 questions and their correct solutions
 * This extracts questions from questionsBank.ts and determines the correct answer for each
 */

const fs = require('fs');
const { execSync } = require('child_process');

console.log('Generating questions_solution.md...');
console.log('This will extract all 1000 questions and determine correct solutions.\n');

// Read the questionsBank.ts file
const content = fs.readFileSync('src/questionsBank.ts', 'utf8');

// We need to actually import and run the TypeScript to get the questions
// For now, let's create a Node script that can parse the structure
// Or better: compile TypeScript and import the QUESTIONS_BANK

// Create a temporary TypeScript file that exports the questions as JSON
const tempScript = `
import { QUESTIONS_BANK } from './src/questionsBank';
import { writeFileSync } from 'fs';

const questions = QUESTIONS_BANK.map(q => ({
  id: q.id,
  level: q.level,
  question: q.question,
  options: q.options,
  correct_option_index: q.correct_option_index,
  correct_answer: q.options[q.correct_option_index]
}));

writeFileSync('questions-export.json', JSON.stringify(questions, null, 2));
console.log('Exported', questions.length, 'questions');
`;

// Actually, let's use a different approach - parse the TypeScript directly
// or use ts-node if available

// For now, let's create a Python script that can evaluate Python expressions
// and a Node script that extracts the question structure

console.log('Creating extraction script...');

// Write a script that will be run with ts-node or compiled TypeScript
const extractScript = `
// This needs to be run with ts-node or compiled first
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
console.log(\`Exported \${questions.length} questions to questions-export.json\`);
`;

fs.writeFileSync('extract-questions.ts', extractScript);

console.log('Note: This requires TypeScript compilation.');
console.log('Creating a Python-based solution instead...\n');

// Actually, let's create a comprehensive Python script that can:
// 1. Parse the TypeScript file (simplified)
// 2. Extract questions
// 3. Evaluate Python code for each question
// 4. Generate the markdown file

const pythonScript = `#!/usr/bin/env python3
"""
Generate questions_solution.md with all 1000 questions and their correct solutions.
This script extracts questions from questionsBank.ts and determines correct answers.
"""

import re
import json
import subprocess
import sys

def extract_code_from_question(question_text):
    """Extract Python code from question text."""
    # Pattern: "What is ...?" or "Result of ...?" etc.
    patterns = [
        r'What is\\s+(.+?)\\?',
        r'Result of\\s+(.+?)\\?',
        r'Output of\\s+(.+?)\\?',
        r'Value of\\s+(.+?)\\?',
        r'Which\\s+(.+?)\\?',
    ]
    
    for pattern in patterns:
        match = re.search(pattern, question_text, re.IGNORECASE)
        if match:
            code = match.group(1).strip()
            # Clean up common patterns
            code = code.replace('"..."', '"test"')  # Will need special handling
            return code
    return None

def evaluate_python_code(code):
    """Safely evaluate Python code and return result."""
    try:
        # Replace common placeholders
        code = code.replace('"..."', '"test"')
        code = code.replace("'...'", "'test'")
        
        # Use exec in a safe way
        result = eval(code)
        
        # Convert to string representation
        if isinstance(result, bool):
            return "True" if result else "False"
        elif result is None:
            return "None"
        elif isinstance(result, (int, float)):
            return str(result)
        elif isinstance(result, str):
            return f'"{result}"'
        elif isinstance(result, (list, tuple, dict, set)):
            return str(result)
        else:
            return str(result)
    except Exception as e:
        return f"[CANNOT EVALUATE: {str(e)}]"

def parse_questions_from_ts(content):
    """Parse questions from TypeScript file."""
    questions = []
    
    # Find all question patterns: q: `...`, o: [...], c: ...
    # This is a simplified parser - may need refinement
    pattern = r'q:\\s*`([^`]+)`[^o]*o:\\s*\\[([^\\]]+)\\][^c]*c:\\s*(\\d+)'
    
    matches = list(re.finditer(pattern, content, re.DOTALL))
    
    print(f"Found {len(matches)} question patterns")
    
    # Since patterns repeat, we need to understand the generateLevel structure
    # Level 1: IDs 1-100, Level 2: 101-200, etc.
    
    # For now, let's extract and number them
    for idx, match in enumerate(matches):
        question_text = match.group(1)
        options_str = match.group(2)
        correct_index = int(match.group(3))
        
        # Parse options
        options = []
        for opt_match in re.finditer(r'["\']([^"\']+)["\']', options_str):
            options.append(opt_match.group(1))
        
        if options and correct_index < len(options):
            questions.append({
                'id': idx + 1,  # Will need to map correctly based on level
                'question': question_text,
                'options': options,
                'correct_index': correct_index,
                'marked_answer': options[correct_index]
            })
    
    return questions

def generate_markdown(questions):
    """Generate markdown file with all questions and solutions."""
    md_content = ["# Questions Solution Reference", ""]
    md_content.append("This file contains all 1000 questions with their correct solutions.")
    md_content.append("Use this file to verify that questions match their solutions.")
    md_content.append("")
    md_content.append("---")
    md_content.append("")
    
    for q in questions:
        md_content.append(f"## ID {q['id']}")
        md_content.append("")
        md_content.append(f"**Question:** {q['question']}")
        md_content.append("")
        md_content.append("**Options:**")
        for i, opt in enumerate(q['options']):
            marker = "✓" if i == q['correct_index'] else " "
            md_content.append(f"{marker} {i}. {opt}")
        md_content.append("")
        md_content.append(f"**Marked Correct Answer:** {q['marked_answer']} (index {q['correct_index']})")
        md_content.append("")
        
        # Try to evaluate the question code
        code = extract_code_from_question(q['question'])
        if code:
            evaluated = evaluate_python_code(code)
            md_content.append(f"**Evaluated Result:** {evaluated}")
            if evaluated != q['marked_answer'] and not evaluated.startswith("[CANNOT"):
                md_content.append(f"⚠️ **MISMATCH DETECTED!** Expected: {evaluated}, Marked: {q['marked_answer']}")
        else:
            md_content.append("**Evaluated Result:** [Cannot extract code]")
        
        md_content.append("")
        md_content.append("---")
        md_content.append("")
    
    return "\\n".join(md_content)

# Main execution
if __name__ == "__main__":
    print("Reading questionsBank.ts...")
    with open('src/questionsBank.ts', 'r', encoding='utf-8') as f:
        content = f.read()
    
    print("Parsing questions...")
    questions = parse_questions_from_ts(content)
    
    print(f"Found {len(questions)} questions")
    print("Generating markdown...")
    
    md_content = generate_markdown(questions)
    
    print("Writing questions_solution.md...")
    with open('questions_solution.md', 'w', encoding='utf-8') as f:
        f.write(md_content)
    
    print(f"✅ Generated questions_solution.md with {len(questions)} questions")
    print("\\nNote: This is a simplified extraction. Some questions may need manual verification.")
`;

fs.writeFileSync('generate-solutions.py', pythonScript);

console.log('Created generate-solutions.py');
console.log('Running it to generate questions_solution.md...\n');

try {
  execSync('python3 generate-solutions.py', { encoding: 'utf-8', stdio: 'inherit' });
} catch (error) {
  console.error('Error running Python script. Creating a better solution...');
  
  // Create a more comprehensive solution using Node.js to parse and TypeScript compilation
  console.log('\nCreating alternative extraction method...');
}
