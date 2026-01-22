#!/usr/bin/env python3
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
        r'What is\s+(.+?)\?',
        r'Result of\s+(.+?)\?',
        r'Output of\s+(.+?)\?',
        r'Value of\s+(.+?)\?',
        r'Which\s+(.+?)\?',
    ]
    
    for pattern in patterns:
        match = re.search(pattern, question_text, re.IGNORECASE)
        if match:
            code = match.group(1).strip()
            return code
    return None

def evaluate_python_code(code):
    """Safely evaluate Python code and return result."""
    try:
        # Handle special cases
        if '"..."' in code or "'...'" in code:
            # For string methods with "...", we need to test with actual strings
            # This will be marked for manual verification
            return "[NEEDS MANUAL VERIFICATION - uses '...']"
        
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
    # More comprehensive pattern
    pattern = r'q:\s*`([^`]+)`[^o]*o:\s*\[([^\]]+)\][^c]*c:\s*(\d+)'
    
    matches = list(re.finditer(pattern, content, re.DOTALL))
    
    print(f"Found {len(matches)} question patterns")
    
    # Extract questions
    for idx, match in enumerate(matches):
        question_text = match.group(1)
        options_str = match.group(2)
        correct_index = int(match.group(3))
        
        # Parse options - handle both single and double quotes
        options = []
        # Try double quotes first
        for opt_match in re.finditer(r'"([^"]+)"', options_str):
            options.append(opt_match.group(1))
        # Then single quotes if no double quotes found
        if not options:
            for opt_match in re.finditer(r"'([^']+)'", options_str):
                options.append(opt_match.group(1))
        
        if options and correct_index < len(options):
            questions.append({
                'id': idx + 1,  # Will be corrected based on actual ID mapping
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
    md_content.append("**Note:** Questions are extracted from questionsBank.ts.")
    md_content.append("Some questions may need manual verification, especially those using '...' placeholders.")
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
            if evaluated != q['marked_answer'] and not evaluated.startswith("[CANNOT") and not evaluated.startswith("[NEEDS"):
                md_content.append(f"⚠️ **POTENTIAL MISMATCH!** Evaluated: {evaluated}, Marked: {q['marked_answer']}")
        else:
            md_content.append("**Evaluated Result:** [Cannot extract code from question]")
        
        md_content.append("")
        md_content.append("---")
        md_content.append("")
    
    return "\n".join(md_content)

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
    print("\nNote: This is a simplified extraction. Some questions may need manual verification.")
    print("The actual ID mapping depends on how generateLevel cycles through patterns.")
