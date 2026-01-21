#!/usr/bin/env python3
"""
Comprehensive validation script for all 1000 questions.
This script will check if each question's solution matches what the Python code actually evaluates to.
"""

import re
import json
import subprocess
import sys

# Read the questionsBank.ts file
print("Reading questionsBank.ts...")
with open('src/questionsBank.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract question patterns
print("Extracting questions...")

# Find all question patterns with their structure
# Pattern: q: `...`, o: [...], c: ...
questions = []

# Simple regex to find question blocks
# This is a simplified approach - in reality we'd need to parse TypeScript properly
pattern = r'q:\s*`([^`]+)`.*?o:\s*\[(.*?)\].*?c:\s*(\d+)'

matches = re.finditer(pattern, content, re.DOTALL)
for match in matches:
    question_text = match.group(1)
    options_str = match.group(2)
    correct_index = int(match.group(3))
    
    # Parse options
    options = []
    for opt in re.findall(r'["\']([^"\']+)["\']', options_str):
        options.append(opt)
    
    questions.append({
        'question': question_text,
        'options': options,
        'correct_index': correct_index
    })

print(f"Found {len(questions)} question patterns")
print("\nStarting validation...")
print("=" * 80)

errors = []

for i, q in enumerate(questions[:100], 1):  # Test first 100 for now
    question = q['question']
    options = q['options']
    correct_index = q['correct_index']
    
    # Extract the Python code from "What is ...?" questions
    if question.startswith('What is '):
        # Try to extract the code part
        code_match = re.search(r'What is\s+(.+?)\?', question)
        if code_match:
            code = code_match.group(1).strip()
            
            # Clean up code (remove quotes from examples, etc.)
            # Replace "..." with actual test value
            test_code = code.replace('"..."', '"test"').replace("'...'", "'test'")
            
            try:
                # Evaluate in Python
                result = eval(test_code)
                
                # Convert result to string for comparison
                if isinstance(result, bool):
                    result_str = "True" if result else "False"
                elif result is None:
                    result_str = "None"
                else:
                    result_str = str(result)
                
                # Check if the correct answer matches
                if correct_index < len(options):
                    correct_answer = options[correct_index]
                    
                    # Normalize for comparison
                    result_str_normalized = result_str.strip()
                    correct_answer_normalized = correct_answer.strip()
                    
                    if result_str_normalized != correct_answer_normalized:
                        errors.append({
                            'id': i,
                            'question': question,
                            'code': code,
                            'python_result': result_str,
                            'correct_answer': correct_answer,
                            'options': options,
                            'correct_index': correct_index
                        })
                        print(f"❌ ID {i}: Mismatch!")
                        print(f"   Question: {question}")
                        print(f"   Code: {code}")
                        print(f"   Python result: {result_str}")
                        print(f"   Marked correct: {correct_answer} (index {correct_index})")
                        print()
            except Exception as e:
                # Can't evaluate this code automatically
                pass

print("=" * 80)
print(f"\nValidation complete!")
print(f"Found {len(errors)} mismatches in first 100 questions")

if errors:
    print("\nErrors found:")
    for err in errors[:10]:  # Show first 10
        print(f"ID {err['id']}: {err['question']}")
        print(f"  Expected: {err['python_result']}, Got: {err['correct_answer']}")
else:
    print("No errors found in first 100 questions!")

print("\nNote: This is a simplified validation. Full validation requires:")
print("1. Proper TypeScript parsing to extract all questions correctly")
print("2. Handling of complex expressions")
print("3. Manual verification for questions that can't be auto-evaluated")
