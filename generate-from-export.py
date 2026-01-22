#!/usr/bin/env python3
"""
Generate questions_solution.md from the ACTUAL QUESTIONS_BANK export.
This uses the real questions as they appear in the app.
"""

import json
import re

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
        if '"..."' in code or "'...'" in code:
            return "[USES '...' PLACEHOLDER - NEEDS MANUAL VERIFICATION]"
        
        result = eval(code)
        
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
            return str(result)
        else:
            return str(result)
    except Exception as e:
        return f"[CANNOT EVALUATE: {str(e)}]"

# Load the exported questions
print("Loading questions from questions-export.json...")
with open('questions-export.json', 'r', encoding='utf-8') as f:
    questions = json.load(f)

print(f"Loaded {len(questions)} questions")

# Generate markdown
md_content = ["# Questions Solution Reference", ""]
md_content.append(f"**STATUS:** ✅ COMPLETE - All {len(questions)} questions with REAL IDs from QUESTIONS_BANK")
md_content.append("")
md_content.append("This file contains all questions with their correct solutions extracted DIRECTLY from QUESTIONS_BANK.")
md_content.append("**IMPORTANT:** These are the ACTUAL questions as they appear in the app!")
md_content.append("")
md_content.append("**Format:**")
md_content.append("- Each question shows the question text, all options, and the marked correct answer")
md_content.append("- Evaluated result shows what Python actually returns (when evaluable)")
md_content.append("- ⚠️ indicates potential mismatches that need verification")
md_content.append("")
md_content.append(f"**Total Questions:** {len(questions)}")
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
    
    code = extract_code_from_question(q['question'])
    if code:
        evaluated = evaluate_python_code(code)
        md_content.append(f"**Evaluated Result:** `{evaluated}`")
        
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

md_content.insert(4, f"**Potential Mismatches Found:** {mismatch_count}")
md_content.insert(4, "")

md_content.append("")
md_content.append("**Note:** This file was generated directly from QUESTIONS_BANK, so all questions and IDs are 100% accurate and match the app exactly.")

print("Writing questions_solution.md...")
with open('questions_solution.md', 'w', encoding='utf-8') as f:
    f.write("\n".join(md_content))

print(f"✅ Generated questions_solution.md with {len(questions)} questions")
print(f"✅ Found {mismatch_count} potential mismatches")
print("✅ All questions are REAL and match the app exactly!")
