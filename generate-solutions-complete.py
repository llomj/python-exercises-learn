#!/usr/bin/env python3
"""
Generate questions_solution.md with all 1000 questions and their correct solutions.
This script reads questions from questions-export.json (generated from TypeScript)
and creates a comprehensive markdown file.
"""

import json
import re
import sys

def extract_code_from_question(question_text):
    """Extract Python code from question text."""
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
            return match.group(1).strip()
    return None

def evaluate_python_code(code):
    """Safely evaluate Python code and return result."""
    try:
        # Handle special placeholder cases
        if '"..."' in code or "'...'" in code:
            return "[USES '...' PLACEHOLDER - NEEDS MANUAL VERIFICATION]"
        
        result = eval(code)
        
        # Convert to string representation matching Python output
        if isinstance(result, bool):
            return "True" if result else "False"
        elif result is None:
            return "None"
        elif isinstance(result, (int, float)):
            return str(result)
        elif isinstance(result, str):
            return f'"{result}"'
        elif isinstance(result, (list, tuple)):
            return str(result)
        elif isinstance(result, dict):
            return str(result)
        elif isinstance(result, set):
            return str(result)
        elif hasattr(result, '__name__'):
            # Type objects
            return str(result)
        else:
            return str(result)
    except Exception as e:
        return f"[CANNOT EVALUATE: {str(e)}]"

def generate_markdown(questions):
    """Generate markdown file with all questions and solutions."""
    md_content = ["# Questions Solution Reference", ""]
    md_content.append("This file contains all 1000 questions with their correct solutions.")
    md_content.append("Use this file to verify that questions match their solutions.")
    md_content.append("")
    md_content.append("**Format:**")
    md_content.append("- Each question shows the question text, all options, and the marked correct answer")
    md_content.append("- Evaluated result shows what Python actually returns (when evaluable)")
    md_content.append("- ⚠️ indicates potential mismatches that need verification")
    md_content.append("")
    md_content.append("---")
    md_content.append("")
    
    mismatch_count = 0
    
    for q in questions:
        md_content.append(f"## ID {q['id']} (Level {q['level']})")
        md_content.append("")
        md_content.append(f"**Question:** {q['question']}")
        md_content.append("")
        md_content.append("**Options:**")
        for i, opt in enumerate(q['options']):
            marker = "✓" if i == q['correct_option_index'] else " "
            md_content.append(f"{marker} {i}. {opt}")
        md_content.append("")
        md_content.append(f"**Marked Correct Answer:** `{q['correct_answer']}` (index {q['correct_option_index']})")
        md_content.append("")
        
        # Try to evaluate the question code
        code = extract_code_from_question(q['question'])
        if code:
            evaluated = evaluate_python_code(code)
            md_content.append(f"**Evaluated Result:** `{evaluated}`")
            
            # Check for mismatch (but ignore placeholder cases)
            if (not evaluated.startswith("[") and 
                evaluated != q['correct_answer'] and
                evaluated.strip('"\'') != q['correct_answer'].strip('"\'')):
                md_content.append("")
                md_content.append(f"⚠️ **POTENTIAL MISMATCH!**")
                md_content.append(f"- Evaluated: `{evaluated}`")
                md_content.append(f"- Marked: `{q['correct_answer']}`")
                mismatch_count += 1
        else:
            md_content.append("**Evaluated Result:** [Cannot extract code from question]")
        
        md_content.append("")
        md_content.append("---")
        md_content.append("")
    
    # Add summary at the top
    summary = f"**Total Questions:** {len(questions)}\n"
    summary += f"**Potential Mismatches Found:** {mismatch_count}\n\n"
    
    md_content.insert(2, summary)
    
    return "\n".join(md_content)

# Main execution
if __name__ == "__main__":
    print("Generating questions_solution.md...")
    print("=" * 60)
    
    # Try to read from JSON export first
    try:
        print("Reading questions-export.json...")
        with open('questions-export.json', 'r', encoding='utf-8') as f:
            questions = json.load(f)
        print(f"✅ Loaded {len(questions)} questions from JSON")
    except FileNotFoundError:
        print("❌ questions-export.json not found.")
        print("Please run: npx ts-node generate-questions-export.ts")
        print("Or compile TypeScript and run the export script.")
        sys.exit(1)
    
    if len(questions) != 1000:
        print(f"⚠️ Warning: Expected 1000 questions, found {len(questions)}")
    
    print("Generating markdown...")
    md_content = generate_markdown(questions)
    
    print("Writing questions_solution.md...")
    with open('questions_solution.md', 'w', encoding='utf-8') as f:
        f.write(md_content)
    
    print(f"✅ Generated questions_solution.md with {len(questions)} questions")
    print("\nFile ready for verification!")
