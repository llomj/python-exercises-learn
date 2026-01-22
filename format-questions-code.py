#!/usr/bin/env python3
"""
Format code snippets in questions_solution.md to use proper Python indentation (4 spaces).
Processes **Question:** lines that contain semicolon-separated or class/def-style code.
"""

import re


def colon_outside_brackets(s: str, idx: int) -> bool:
    """True if the colon at idx is outside brackets/parens (i.e. control flow)."""
    before = s[:idx]
    depth = 0
    for c in before:
        if c in '([{':
            depth += 1
        elif c in ')]}':
            depth -= 1
    return depth == 0


def _split_semicolons(s: str, top_level_only: bool) -> list[str]:
    """Split on semicolons at depth 0. If top_level_only, split only before id=, id(, import, from."""
    parts = []
    start = 0
    depth = 0
    i = 0
    n = len(s)
    while i < n:
        c = s[i]
        if c in '([{\'"':
            if c in '([{':
                depth += 1
            else:
                end = i + 1
                while end < n:
                    if s[end] == '\\':
                        end += 2
                        continue
                    if s[end] == c:
                        end += 1
                        break
                    end += 1
                i = end - 1
            i += 1
            continue
        if c in ')]}':
            depth -= 1
            i += 1
            continue
        if c == ';' and depth == 0:
            do_split = True
            if top_level_only:
                j = i + 1
                while j < n and s[j] in ' \t':
                    j += 1
                if j < n:
                    rest = s[j:].lstrip()
                    # id=, id(, id.id(..., import , from , or keywords: while, for, if, with, try, class.
                    # Do NOT split before def or @ (those are typically inside class body).
                    do_split = bool(
                        re.match(r'^[a-zA-Z_][a-zA-Z0-9_.]*\s*[=(]', rest)
                        or rest.startswith('import ')
                        or rest.startswith('from ')
                        or re.match(r'^\b(while|for|if|with|try|class)\b', rest)
                    )
            if do_split:
                part = s[start:i].strip()
                if part:
                    parts.append(part)
                start = i + 1
        i += 1
    part = s[start:].strip()
    if part:
        parts.append(part)
    return parts


def split_top_level_semicolons(s: str) -> list[str]:
    """Split on semicolons only before top-level statements (keeps class/def bodies together)."""
    return _split_semicolons(s, top_level_only=True)


def split_body_semicolons(s: str) -> list[str]:
    """Split on all semicolons at depth 0 (for class/def body)."""
    return _split_semicolons(s, top_level_only=False)


def process_part(p: str, indent: int, indent_size: int = 4) -> list[str]:
    """Process one semicolon-separated part; return list of formatted lines."""
    lines = []
    pre = ' ' * (indent * indent_size)
    p = p.strip()
    if not p:
        return lines

    if p.startswith('@'):
        lines.append(pre + p)
        return lines

    # Find first control-flow colon (not in brackets)
    colon_idx = -1
    for i, c in enumerate(p):
        if c == ':' and colon_outside_brackets(p, i):
            colon_idx = i
            break

    if colon_idx >= 0:
        before = p[:colon_idx].strip()
        after = p[colon_idx + 1:].strip()
        lines.append(pre + before + ':')
        if after:
            # Body: split on all semicolons (class/def body)
            subparts = split_body_semicolons(after)
            for sub in subparts:
                lines.extend(process_part(sub, indent + 1, indent_size))
    else:
        lines.append(pre + p)
    return lines


def format_code_snippet(code: str) -> str:
    """Format inline Python code (semicolon-separated) to multi-line with 4-space indent."""
    code = code.strip()
    if not code:
        return code

    # Simple expressions: no ; and no class/def/while/for/etc. → leave as-is
    if ';' not in code and not re.search(
        r'\b(class|def|if|for|while|with|try|except|finally|else|elif)\b', code
    ):
        return code

    parts = split_top_level_semicolons(code)
    all_lines = []
    for part in parts:
        all_lines.extend(process_part(part, 0, 4))
    return '\n'.join(all_lines)


def extract_question_parts(line: str):
    """
    Extract prefix (e.g. 'What is '), code/content, and trailing '?' from a **Question:** line.
    Returns (prefix, code, suffix) or (None, None, None) if not a question line.
    """
    m = re.match(r'^\*\*Question:\*\*\s*(.+)$', line)
    if not m:
        return None, None, None
    text = m.group(1).strip()

    # Match common prefixes
    prefix_match = re.match(
        r'^(What is\s+|Result of\s+|Output of\s+|Value of\s+|Which\s+)',
        text,
        re.IGNORECASE,
    )
    if prefix_match:
        prefix = prefix_match.group(1)
        rest = text[len(prefix):].strip()
    else:
        prefix = ''
        rest = text

    # Trailing ?
    suffix = ''
    if rest.endswith('?'):
        rest = rest[:-1].strip()
        suffix = '?'

    # Code might be in quotes: What is 'x = 0; while...' result?
    quote_match = re.match(r"^(['\"])(.+)\1\s*(result)?\s*$", rest, re.DOTALL)
    if quote_match:
        code = quote_match.group(2)
        if quote_match.group(3):
            suffix = ' result' + suffix
        return prefix, code, suffix
    return prefix, rest, suffix


def needs_formatting(code: str) -> bool:
    """True if this code looks like multi-statement Python that should be formatted."""
    if ';' in code:
        return True
    if re.search(r'\bclass\s+\w+\s*:', code) or re.search(r'\bdef\s+\w+\s*\(', code):
        return True
    if re.search(r'\b(if|for|while|with|try)\s+.*:', code):
        return True
    return False


def format_question_line(line: str) -> str:
    """
    If the line is a **Question:** line with formatable code, return a replacement
    (possibly multi-line). Otherwise return the original line.
    """
    prefix, code, suffix = extract_question_parts(line)
    if code is None:
        return line
    if not needs_formatting(code):
        return line

    formatted = format_code_snippet(code)
    if formatted == code:
        return line

    # Build new **Question:** block: prefix, then code block (4-space indent), then suffix (e.g. ? or  result?)
    block = ['**Question:** ' + prefix.rstrip()]
    block.append('')
    for ln in formatted.splitlines():
        block.append('    ' + ln)
    if suffix.strip():
        block.append('')
        block.append(suffix.strip())
    return '\n'.join(block)


def process_file(path: str) -> None:
    """Read questions_solution.md, format code in **Question:** lines, write back."""
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    lines = content.split('\n')
    output = []
    i = 0
    while i < len(lines):
        line = lines[i]
        if line.strip().startswith('**Question:**'):
            replacement = format_question_line(line)
            if '\n' in replacement:
                # Multi-line replacement: add all lines
                output.extend(replacement.split('\n'))
            else:
                output.append(replacement)
            i += 1
            continue
        output.append(line)
        i += 1

    with open(path, 'w', encoding='utf-8') as f:
        f.write('\n'.join(output))


if __name__ == '__main__':
    process_file('questions_solution.md')
    print('Done. Formatted code snippets in questions_solution.md')
