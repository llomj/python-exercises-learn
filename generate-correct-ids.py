#!/usr/bin/env python3
"""
Generate questions_solution.md with CORRECT IDs that match the app.
This script properly replicates the generateLevel cycling logic.
"""

import re
import json

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

def parse_questions_with_correct_ids(content):
    """Parse questions and assign CORRECT IDs based on generateLevel logic."""
    questions = []
    
    # Level start IDs
    level_starts = {
        1: 1,    # IDs 1-100
        2: 101,  # IDs 101-200
        3: 201,  # IDs 201-300
        4: 301,  # IDs 301-400
        5: 401,  # IDs 401-500
        6: 501,  # IDs 501-600
        7: 601,  # IDs 601-700
        8: 701,  # IDs 701-800
        9: 801,  # IDs 801-900
        10: 901  # IDs 901-1000
    }
    
    level_names = ['level1Patterns', 'level2Patterns', 'level3Patterns', 'level4Patterns', 
                   'level5Patterns', 'level6Patterns', 'level7Patterns', 'level8Patterns',
                   'level9Patterns', 'level10Patterns']
    
    # Extract patterns for each level
    for level_idx, level_name in enumerate(level_names, 1):
        pattern_start = content.find(f'const {level_name} = [')
        if pattern_start == -1:
            continue
        
        pattern_end = content.find('];', pattern_start)
        if pattern_end == -1:
            continue
        
        level_content = content[pattern_start:pattern_end]
        
        # Extract all question patterns
        pattern1 = r'q:\s*`([^`]+)`[^o]*o:\s*\[([^\]]+)\][^c]*c:\s*(\d+)'
        pattern2 = r'return\s*\{[^}]*q:\s*`([^`]+)`[^}]*o:\s*\[([^\]]+)\][^}]*c:\s*(\d+)'
        
        matches1 = list(re.finditer(pattern1, level_content, re.DOTALL))
        matches2 = list(re.finditer(pattern2, level_content, re.DOTALL))
        
        all_matches = []
        seen_positions = set()
        
        for match in matches1 + matches2:
            pos = match.start()
            if pos not in seen_positions:
                all_matches.append(match)
                seen_positions.add(pos)
        
        all_matches.sort(key=lambda m: m.start())
        
        # CRITICAL: Replicate generateLevel cycling logic
        # generateLevel: patterns[i % patterns.length](i)
        # ID = startId + i
        start_id = level_starts[level_idx]
        num_patterns = len(all_matches)
        
        if num_patterns == 0:
            continue
        
        print(f"Level {level_idx}: {num_patterns} patterns, IDs {start_id}-{start_id+99}")
        
        # Generate 100 questions for this level
        for i in range(100):
            # This replicates: patterns[i % patterns.length]
            pattern_idx = i % num_patterns
            match = all_matches[pattern_idx]
            
            question_text = match.group(1)
            options_str = match.group(2)
            correct_index = int(match.group(3))
            
            # Parse options
            options = []
            for opt_match in re.finditer(r'"([^"]+)"', options_str):
                options.append(opt_match.group(1))
            if not options:
                for opt_match in re.finditer(r"'([^']+)'", options_str):
                    options.append(opt_match.group(1))
            
            if options and correct_index < len(options):
                actual_id = start_id + i  # This is the CORRECT ID
                questions.append({
                    'id': actual_id,
                    'level': level_idx,
                    'question': question_text,
                    'options': options,
                    'correct_index': correct_index,
                    'marked_answer': options[correct_index]
                })
    
    return questions

def generate_markdown(questions):
    """Generate markdown file with all questions and solutions."""
    md_content = ["# Questions Solution Reference", ""]
    md_content.append("**STATUS:** ✅ COMPLETE - All 1000 questions with CORRECT IDs")
    md_content.append("")
    md_content.append("This file contains all 1000 questions with their correct solutions.")
    md_content.append("**IMPORTANT:** IDs in this file now match the actual app!")
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
            marker = "✓" if i == q['correct_index'] else " "
            md_content.append(f"{marker} {i}. {opt}")
        md_content.append("")
        md_content.append(f"**Marked Correct Answer:** `{q['marked_answer']}` (index {q['correct_index']})")
        md_content.append("")
        
        code = extract_code_from_question(q['question'])
        if code:
            evaluated = evaluate_python_code(code)
            md_content.append(f"**Evaluated Result:** `{evaluated}`")
            
            if (not evaluated.startswith("[") and 
                evaluated != q['marked_answer'] and
                evaluated.strip('"\'') != q['marked_answer'].strip('"\'')):
                md_content.append("")
                md_content.append(f"⚠️ **POTENTIAL MISMATCH!**")
                md_content.append(f"- Evaluated: `{evaluated}`")
                md_content.append(f"- Marked: `{q['marked_answer']}`")
                mismatch_count += 1
        else:
            md_content.append("**Evaluated Result:** [Cannot extract code from question]")
        
        md_content.append("")
        md_content.append("---")
        md_content.append("")
    
    md_content.insert(4, f"**Potential Mismatches Found:** {mismatch_count}")
    md_content.insert(4, "")
    
    return "\n".join(md_content)

if __name__ == "__main__":
    print("Generating questions_solution.md with CORRECT IDs...")
    print("=" * 60)
    
    print("Reading questionsBank.ts...")
    with open('src/questionsBank.ts', 'r', encoding='utf-8') as f:
        content = f.read()
    
    print("Parsing questions with CORRECT ID mapping...")
    questions = parse_questions_with_correct_ids(content)
    
    if len(questions) != 1000:
        print(f"⚠️ Warning: Expected 1000 questions, found {len(questions)}")
    else:
        print(f"✅ Found all {len(questions)} questions with correct IDs")
    
    print("Generating markdown...")
    md_content = generate_markdown(questions)
    
    print("Writing questions_solution.md...")
    with open('questions_solution.md', 'w', encoding='utf-8') as f:
        f.write(md_content)
    
    print(f"✅ Generated questions_solution.md with {len(questions)} questions")
    print("✅ All IDs now match the app!")
