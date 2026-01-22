#!/usr/bin/env python3
"""
Generate questions_solution.md with all 1000 questions and their correct solutions.
Improved parser that handles all question formats including arrow functions with return statements.
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

def parse_questions_from_ts(content):
    """Parse questions from TypeScript file, handling all formats."""
    questions = []
    
    # Find all level pattern arrays
    level_patterns = {}
    level_names = ['level1Patterns', 'level2Patterns', 'level3Patterns', 'level4Patterns', 
                   'level5Patterns', 'level6Patterns', 'level7Patterns', 'level8Patterns',
                   'level9Patterns', 'level10Patterns']
    
    # Extract patterns for each level - handle both formats:
    # Format 1: (_i: number) => ({ q: `...`, o: [...], c: ... })
    # Format 2: (_i: number) => { return { q: `...`, o: [...], c: ... }; }
    
    for level_idx, level_name in enumerate(level_names, 1):
        # Find the pattern array for this level
        pattern_start = content.find(f'const {level_name} = [')
        if pattern_start == -1:
            continue
        
        # Find the end of this array (next const declaration or export)
        pattern_end = content.find('];', pattern_start)
        if pattern_end == -1:
            continue
        
        level_content = content[pattern_start:pattern_end]
        
        # Extract all question patterns - handle both formats
        # Pattern 1: Direct object: q: `...`, o: [...], c: ...
        pattern1 = r'q:\s*`([^`]+)`[^o]*o:\s*\[([^\]]+)\][^c]*c:\s*(\d+)'
        matches1 = list(re.finditer(pattern1, level_content, re.DOTALL))
        
        # Pattern 2: In return statement: return { q: `...`, o: [...], c: ... }
        pattern2 = r'return\s*\{[^}]*q:\s*`([^`]+)`[^}]*o:\s*\[([^\]]+)\][^}]*c:\s*(\d+)'
        matches2 = list(re.finditer(pattern2, level_content, re.DOTALL))
        
        # Combine matches, avoiding duplicates
        all_matches = []
        seen_positions = set()
        
        for match in matches1 + matches2:
            pos = match.start()
            if pos not in seen_positions:
                all_matches.append(match)
                seen_positions.add(pos)
        
        # Sort by position in file
        all_matches.sort(key=lambda m: m.start())
        
        level_patterns[level_idx] = all_matches
        print(f"Level {level_idx}: Found {len(all_matches)} question patterns")
    
    # Now map to actual IDs based on generateLevel logic
    question_id = 1
    
    for level in range(1, 11):
        if level not in level_patterns:
            continue
        
        matches = level_patterns[level]
        if not matches:
            continue
        
        # generateLevel cycles through patterns: patterns[i % patterns.length]
        for i in range(100):  # 100 questions per level
            pattern_idx = i % len(matches)
            match = matches[pattern_idx]
            
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
                    'id': question_id,
                    'level': level,
                    'question': question_text,
                    'options': options,
                    'correct_index': correct_index,
                    'marked_answer': options[correct_index]
                })
                question_id += 1
    
    return questions

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
    
    mismatch_count = 0
    
    md_content.append(f"**Total Questions:** {len(questions)}")
    md_content.append("")
    md_content.append("---")
    md_content.append("")
    
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
        
        # Try to evaluate the question code
        code = extract_code_from_question(q['question'])
        if code:
            evaluated = evaluate_python_code(code)
            md_content.append(f"**Evaluated Result:** `{evaluated}`")
            
            # Check for mismatch (but ignore placeholder cases)
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
    
    # Update summary at top
    md_content.insert(4, f"**Potential Mismatches Found:** {mismatch_count}")
    md_content.insert(4, "")
    
    return "\n".join(md_content)

# Main execution
if __name__ == "__main__":
    print("Generating questions_solution.md...")
    print("=" * 60)
    
    print("Reading questionsBank.ts...")
    with open('src/questionsBank.ts', 'r', encoding='utf-8') as f:
        content = f.read()
    
    print("Parsing questions from all levels...")
    questions = parse_questions_from_ts(content)
    
    if len(questions) != 1000:
        print(f"⚠️ Warning: Expected 1000 questions, found {len(questions)}")
        print("Some questions may be in a format not captured by the parser.")
    else:
        print(f"✅ Found all {len(questions)} questions")
    
    print("Generating markdown...")
    md_content = generate_markdown(questions)
    
    print("Writing questions_solution.md...")
    with open('questions_solution.md', 'w', encoding='utf-8') as f:
        f.write(md_content)
    
    print(f"✅ Generated questions_solution.md with {len(questions)} questions")
    print("\nFile ready for verification!")
    if len(questions) < 1000:
        print(f"\n⚠️ Note: Only {len(questions)} questions extracted. Manual review needed for missing questions.")
