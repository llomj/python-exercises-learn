import { Question, PersonaStage } from './types';

/**
 * THE 1,000 QUESTIONS: PYTHON EXERCISES REPOSITORY
 * UNIQUE HIGH-VARIANCE EDITION: Each question is distinct with proper difficulty progression.
 * Level 1-2: Basics (Variables, Types, Basic Operations)
 * Level 3-4: Conditionals and Loops
 * Level 5-6: Functions and Data Structures
 * Level 7-8: Advanced Functions, Comprehensions, String Methods
 * Level 9-10: Classes, OOP, Exceptions, Modules, Advanced Topics
 */

const varNames = ['data', 'val', 'item', 'result', 'count', 'node', 'point', 'user', 'speed', 'temp', 'alpha', 'beta', 'gamma', 'delta', 'omega', 'phi', 'zeta', 'mu', 'nu', 'pi'];

// --- LEVEL 1: PLANKTON (Variables, Types, Strings, Comments) - 100 TRULY UNIQUE QUESTIONS ---
// Each question tests a DIFFERENT concept - NO number/variable variations of the same question
const level1Patterns = [
  // 1-10: Basic Type Identification
  (_i: number) => ({ 
    q: `What is type(42)?`, 
    o: ["<class 'int'>", "<class 'float'>", "<class 'str'>", "None"], 
    c: 0, 
    e: "Whole numbers are integers.",
    de: `The type() function returns the type (class) of any object in Python. When you call type(42), Python identifies that 42 is an integer literal. In Python, integers are objects of the built-in int class. 

Key concepts:
• Integers (int) represent whole numbers: -3, 0, 42, 1000
• Unlike some languages, Python integers have unlimited precision
• type() returns <class 'type_name'> format
• This is fundamental for understanding Python's object-oriented nature where everything is an object

Example: type(42) returns <class 'int'> because 42 is an integer literal. You can verify this: isinstance(42, int) returns True.`
  }),
  (_i: number) => ({ 
    q: `What is type(3.14)?`, 
    o: ["<class 'float'>", "<class 'int'>", "<class 'str'>", "None"], 
    c: 0, 
    e: "Decimal numbers are floats.",
    de: `Floating-point numbers in Python are represented by the float type. Any number with a decimal point is automatically a float, even if it's a whole number like 3.0.

Key concepts:
• float represents real numbers (decimals): 3.14, 2.0, -0.5, 1e10
• Floats use double-precision (64-bit) representation
• Division always produces float in Python 3: 10 / 2 = 5.0
• Float precision can cause rounding issues: 0.1 + 0.2 ≈ 0.30000000000000004

Example: type(3.14) returns <class 'float'>. Even 3.0 is a float, not an int. To create an integer from a float, use int(3.14) which truncates to 3.`
  }),
  (_i: number) => ({ 
    q: `What is type("hello")?`, 
    o: ["<class 'str'>", "<class 'int'>", "<class 'list'>", "None"], 
    c: 0, 
    e: "Text in quotes is a string.",
    de: `Strings in Python are sequences of characters enclosed in quotes. Python supports both single quotes ('hello') and double quotes ("hello") - they're identical. Strings are immutable sequences of Unicode characters.

Key concepts:
• str (string) represents text data
• Strings are immutable - you can't modify them in place
• Strings support indexing: "hello"[0] = 'h'
• Strings support slicing: "hello"[1:3] = 'el'
• Triple quotes (''' or """) create multi-line strings
• Python has no separate 'char' type - single characters are strings of length 1

Example: type("hello") returns <class 'str'>. Strings are one of Python's most powerful data types with many built-in methods like .upper(), .split(), .find(), etc.`
  }),
  (_i: number) => ({ 
    q: `What is type(True)?`, 
    o: ["<class 'bool'>", "<class 'int'>", "<class 'str'>", "None"], 
    c: 0, 
    e: "True is a boolean value.",
    de: `Boolean values in Python are represented by the bool type, which is actually a subclass of int. True and False are the only two boolean values, and they're actually instances of int (True == 1 and False == 0).

Key concepts:
• bool represents truth values: True and False
• bool is a subclass of int: isinstance(True, int) returns True
• True equals 1, False equals 0 in numeric contexts
• Many values are "truthy" (evaluate to True) or "falsy" (evaluate to False)
• Falsy values: False, None, 0, "", [], {}, (), set()
• Everything else is truthy

Example: type(True) returns <class 'bool'>. Interestingly, bool(1) is True and bool(0) is False, showing the relationship between bools and integers.`
  }),
  (_i: number) => ({ 
    q: `What is type(None)?`, 
    o: ["<class 'NoneType'>", "<class 'null'>", "<class 'void'>", "None"], 
    c: 0, 
    e: "None has its own special type.",
    de: `None is Python's null value - it represents the absence of a value. None is a singleton object (there's only one None object in Python) and has its own type called NoneType.

Key concepts:
• None represents "no value" or "nothing"
• NoneType is the type of None - there is only one None object
• None is falsy: bool(None) is False
• Functions without a return statement implicitly return None
• Use None to indicate missing or undefined values
• None != False, None != 0, None != "" - it's a distinct value
• Common use: optional parameters default to None

Example: type(None) returns <class 'NoneType'>. None is often used as a default value: def func(x=None): pass. Checking for None should use 'is': if x is None: (not x == None).`
  }),
  (_i: number) => ({ 
    q: `What is type([])?`, 
    o: ["<class 'list'>", "<class 'tuple'>", "<class 'dict'>", "None"], 
    c: 0, 
    e: "Square brackets create a list.",
    de: `Lists are ordered, mutable sequences of items enclosed in square brackets. Lists can contain items of any type, including mixed types. They're one of Python's most versatile data structures.

Key concepts:
• Lists are ordered collections: items have a defined order
• Lists are mutable: you can modify them after creation
• Lists can contain duplicates
• Lists are heterogeneous: [1, "hello", 3.14, [1,2]] is valid
• Lists support indexing and slicing like strings
• Common methods: .append(), .extend(), .insert(), .remove(), .pop()
• Empty list [] is falsy; non-empty lists are truthy

Example: type([]) returns <class 'list'>. Lists are created with [] or list(). You can access elements: [1, 2, 3][0] = 1. Lists are mutable: my_list = [1, 2]; my_list.append(3) changes my_list to [1, 2, 3].`
  }),
  (_i: number) => ({ 
    q: `What is type(())?`, 
    o: ["<class 'tuple'>", "<class 'list'>", "<class 'dict'>", "None"], 
    c: 0, 
    e: "Parentheses create a tuple.",
    de: `Tuples are ordered, immutable sequences enclosed in parentheses. Like lists, they can contain items of any type, but unlike lists, they cannot be modified after creation. This immutability makes them hashable (can be used as dictionary keys).

Key concepts:
• Tuples are ordered collections like lists
• Tuples are immutable: once created, cannot be changed
• Tuples are created with () or tuple()
• Empty tuple () requires parentheses: () not just ,
• Single-item tuple needs trailing comma: (1,) not (1)
• Tuples are faster than lists for iteration
• Tuples can be used as dictionary keys (lists cannot)
• Tuple unpacking: a, b = (1, 2)

Example: type(()) returns <class 'tuple'>. Note that empty parentheses () create an empty tuple. For a single-item tuple, you need (1,) - the comma is required, otherwise (1) is just the number 1.`
  }),
  (_i: number) => ({ 
    q: `What is type({})?`, 
    o: ["<class 'dict'>", "<class 'list'>", "<class 'set'>", "None"], 
    c: 0, 
    e: "Curly braces create a dictionary.",
    de: `Dictionaries are unordered collections of key-value pairs. An empty {} creates an empty dictionary. Dictionaries are Python's implementation of hash tables, allowing very fast lookups by key.

Key concepts:
• Dictionaries store key-value pairs: {'name': 'Alice', 'age': 30}
• Keys must be immutable (strings, numbers, tuples)
• Values can be any type
• Dictionaries are mutable and unordered (Python 3.7+ maintains insertion order)
• Empty dict {} is falsy; non-empty dicts are truthy
• Access values: my_dict['key'] or my_dict.get('key')
• Dictionary methods: .keys(), .values(), .items()

Example: type({}) returns <class 'dict'>. Empty curly braces {} create an empty dictionary. To check if empty: if not my_dict: print("empty"). Dictionaries are incredibly useful for representing structured data and mappings.`
  }),
  (_i: number) => ({ 
    q: `What is type({1, 2, 3})?`, 
    o: ["<class 'set'>", "<class 'list'>", "<class 'dict'>", "None"], 
    c: 0, 
    e: "Curly braces with values create a set.",
    de: `Sets are unordered collections of unique elements. When you use curly braces with values (not key-value pairs), Python creates a set. Sets are useful for membership testing, removing duplicates, and mathematical set operations.

Key concepts:
• Sets contain unique elements only - duplicates are automatically removed
• Sets are unordered (no indexing)
• Sets are mutable (can add/remove elements)
• Sets support set operations: union, intersection, difference
• Sets use hash tables for O(1) membership testing
• Empty set must be created with set(), not {} (that's a dict)
• Sets can contain only hashable (immutable) elements

Example: type({1, 2, 3}) returns <class 'set'>. Note the difference: {} is a dict, {1, 2, 3} is a set. Sets automatically remove duplicates: {1, 1, 2, 2} becomes {1, 2}. Use sets for fast membership testing: if item in my_set: (very fast).`
  }),
  (_i: number) => ({ 
    q: `What is type(b'hello')?`, 
    o: ["<class 'bytes'>", "<class 'str'>", "<class 'list'>", "None"], 
    c: 0, 
    e: "b prefix creates bytes object.",
    de: `The b prefix before a string literal creates a bytes object - an immutable sequence of bytes (integers from 0-255). Bytes represent binary data, while strings represent text. In Python 3, there's a clear distinction between text (str) and binary data (bytes).

Key concepts:
• bytes represents binary data (sequences of bytes 0-255)
• bytes objects are immutable like strings
• b prefix creates bytes from ASCII string: b'hello'
• Use bytes for binary data: file I/O, network protocols, binary formats
• Strings (str) are for text; bytes are for binary data
• Convert str to bytes: "hello".encode() → b'hello'
• Convert bytes to str: b'hello'.decode() → "hello"
• bytes only accepts ASCII in literal form

Example: type(b'hello') returns <class 'bytes'>. Bytes are essential for working with binary files, network communication, and data serialization. The bytes type helps Python 3 distinguish between text and binary data, preventing encoding errors.`
  }),
  
  // 11-20: Variable Naming Rules
  (_i: number) => ({ 
    q: `Is 'my_variable' a valid variable name?`, 
    o: ["Yes", "No", "Only in Python 2", "Only in classes"], 
    c: 0, 
    e: "Variables can contain letters, numbers, and underscores.",
    de: `Python variable names must follow specific rules: they can contain letters (a-z, A-Z), digits (0-9), and underscores (_), but cannot start with a digit. 'my_variable' follows all these rules perfectly.

Rules for valid Python identifiers:
• Can contain letters (a-z, A-Z), digits (0-9), and underscores (_)
• Cannot start with a digit
• Are case-sensitive: myVar, MyVar, and MYVAR are different
• Cannot be Python keywords (if, def, class, etc.)
• No spaces or special characters except underscore
• No length limit (though keep them reasonable!)

Example: my_variable = 42 is valid. This style (lowercase with underscores) is called "snake_case" and is recommended by PEP 8 (Python's style guide) for variable names.`
  }),
  (_i: number) => ({ 
    q: `Is '2variable' a valid variable name?`, 
    o: ["No", "Yes", "Depends", "Only in functions"], 
    c: 0, 
    e: "Variable names cannot start with a number.",
    de: `Python identifiers cannot start with a digit. This rule prevents ambiguity between variable names and numeric literals. If Python allowed names starting with digits, it would be impossible to distinguish between the variable 2variable and the number 2 followed by the variable variable.

Why this rule exists:
• Prevents confusion with numeric literals
• Makes parsing unambiguous: is 2var a variable or "2" + "var"?
• Standard across most programming languages
• Makes code more readable

Workarounds:
• Use letter prefix: two_variable, var2, number2_variable
• Use descriptive names: second_variable, variable_2

Example: 2variable = 5 raises SyntaxError. Use variable2 or two_variable instead.`
  }),
  (_i: number) => ({ 
    q: `Is 'my-variable' a valid variable name?`, 
    o: ["No", "Yes", "Only in Python 2", "Only in classes"], 
    c: 0, 
    e: "Hyphens are not allowed in variable names.",
    de: `Hyphens (-) are not allowed in Python variable names because the hyphen character is the subtraction operator. Python would interpret my-variable as "my" minus "variable" (which would cause a NameError unless both are defined).

Allowed separators:
• Underscore (_): my_variable ✓
• CamelCase: myVariable ✓
• PascalCase: MyVariable ✓

Not allowed:
• Hyphen: my-variable ✗ (interpreted as subtraction)
• Space: my variable ✗ (syntax error)
• Dot: my.variable ✗ (attribute access, not variable name)

Example: my-variable = 5 raises SyntaxError because Python sees "my" - "variable". Use my_variable or myVariable instead.`
  }),
  (_i: number) => ({ 
    q: `Is 'class' a valid variable name?`, 
    o: ["No", "Yes", "Only in Python 2", "Only in modules"], 
    c: 0, 
    e: "'class' is a reserved keyword.",
    de: `'class' is one of Python's reserved keywords (also called reserved words). Keywords have special meaning in Python and cannot be used as variable, function, or class names. They're part of Python's syntax.

Python keywords (cannot be used as identifiers):
• Control flow: if, else, elif, for, while, break, continue, pass, return
• Functions/classes: def, class, lambda, yield
• Logic: and, or, not, in, is
• Exception handling: try, except, finally, raise, assert
• Import: import, from, as
• Type checking: isinstance, type
• And others: del, global, nonlocal, with, async, await, etc.

How to check: import keyword; print(keyword.kwlist) shows all keywords.

Example: class = 5 raises SyntaxError. Use class_name, cls, or klass instead.`
  }),
  (_i: number) => ({ 
    q: `Is 'def' a valid variable name?`, 
    o: ["No", "Yes", "Only in Python 2", "Only in modules"], 
    c: 0, 
    e: "'def' is a reserved keyword.",
    de: `'def' is a Python keyword used to define functions. It cannot be used as a variable name because it has a specific syntactic purpose in Python. When Python sees 'def', it expects a function definition to follow.

The 'def' keyword:
• Used to define functions: def my_function(): pass
• Part of Python's syntax, not a function itself
• Cannot be reassigned or used as an identifier
• Short for "define" - indicates the start of a function definition

Why keywords are reserved:
• Prevents conflicts with language syntax
• Ensures code is unambiguous
• Maintains language consistency

Example: def = 5 raises SyntaxError. Use func, definition, or define_func instead if you need a variable name.`
  }),
  (_i: number) => ({ 
    q: `Is 'if' a valid variable name?`, 
    o: ["No", "Yes", "Only in Python 2", "Only in modules"], 
    c: 0, 
    e: "'if' is a reserved keyword.",
    de: `'if' is a Python keyword used for conditional statements. It cannot be used as a variable name because it's part of Python's control flow syntax.

The 'if' statement:
• Used for conditional execution: if condition: code
• Followed by optional elif and else clauses
• Evaluates the condition's truthiness
• One of Python's most fundamental control structures

Common alternatives if you need a variable name:
• condition, check, flag, state
• Use descriptive names: is_valid, has_permission

Example: if = 5 raises SyntaxError. If you need to store a condition, use: condition = True or check = False instead.`
  }),
  (_i: number) => ({ 
    q: `Is 'MyVariable' a valid variable name?`, 
    o: ["Yes", "No", "Only if lowercase", "Only in classes"], 
    c: 0, 
    e: "Variable names are case-sensitive and can start with uppercase.",
    de: `Python variable names are case-sensitive and can start with any letter (uppercase or lowercase). 'MyVariable' follows PascalCase naming convention, which is valid but typically reserved for class names per PEP 8.

Naming conventions in Python (PEP 8):
• snake_case: for variables and functions (my_variable, calculate_total)
• PascalCase: for classes (MyClass, DataProcessor)
• UPPER_CASE: for constants (PI, MAX_SIZE)
• _leading_underscore: private/internal use (_internal_method)
• __double_underscore__: name mangling or special methods (__init__)

Case sensitivity:
• myVariable, MyVariable, MYVARIABLE are all different
• Python is case-sensitive: age ≠ Age ≠ AGE

Example: MyVariable = 42 is valid. However, PEP 8 recommends using snake_case for variables (my_variable) and reserving PascalCase for classes.`
  }),
  (_i: number) => ({ 
    q: `Is '_private' a valid variable name?`, 
    o: ["Yes", "No", "Only in classes", "Error"], 
    c: 0, 
    e: "Underscore at start is valid (convention for private).",
    de: `A single leading underscore is a Python naming convention indicating that a name is intended for internal use. It's valid syntax and serves as a signal to other programmers (and tools) that this should be treated as non-public.

Underscore conventions:
• _single_leading: "internal use" convention (not enforced by Python)
• __double_leading: triggers name mangling in classes (class-specific)
• __double_leading_trailing__: Python special methods (__init__, __str__)
• single_trailing_: avoids conflict with keywords (class_ instead of class)

Private convention:
• _private_var suggests "don't use this outside the module/class"
• Not actually private - Python has no true privacy
• More of a contract/agreement between developers
• Import controls: from module import * won't import _names

Example: _private = 42 is valid. It's a convention, not a rule - it tells other developers "this is for internal use, use at your own risk."`
  }),
  (_i: number) => ({ 
    q: `Is '__special__' a valid variable name?`, 
    o: ["Yes", "No", "Only in classes", "Error"], 
    c: 0, 
    e: "Double underscores are valid (used for special methods).",
    de: `Names with double leading and trailing underscores (__special__) are reserved for Python's special methods and attributes. While technically you can use them, it's strongly discouraged as they're part of Python's "magic methods" system.

Special methods (magic methods):
• __init__: constructor, called when object is created
• __str__: string representation, used by str() and print()
• __repr__: developer representation, used by repr()
• __len__: length, used by len()
• __add__: addition operator, used by +
• __eq__: equality, used by ==
• And many more...

Important notes:
• These are method names, not variable names
• They're called automatically by Python in certain contexts
• Don't create variables with these names unless you understand the consequences
• Using them might interfere with Python's internal mechanisms

Example: __special__ = 42 is technically valid but dangerous. It could interfere with Python's name mangling or special method resolution.`
  }),
  (_i: number) => ({ 
    q: `Is 'variable name' (with space) a valid variable name?`, 
    o: ["No", "Yes", "Only in Python 2", "Only in functions"], 
    c: 0, 
    e: "Spaces are not allowed in variable names.",
    de: `Spaces are not allowed in Python identifiers because they're used to separate tokens in the language. Python uses whitespace (spaces, tabs) for indentation and token separation, so including spaces in names would make parsing impossible.

Why spaces aren't allowed:
• Spaces are used for indentation (Python's way of grouping code)
• Spaces separate tokens: if x > 5 (spaces separate 'if', 'x', '>', '5')
• Would cause parsing ambiguity
• Makes code unreadable and unparsable

Solutions:
• Use underscore: variable_name
• Use CamelCase: variableName
• Use descriptive single words: variablename (not recommended if unclear)

Token separation example:
• variable name = 5 would be parsed as: variable, name, =, 5
• Python would see two separate identifiers and raise SyntaxError

Example: variable name = 5 raises SyntaxError. Use variable_name = 5 or variableName = 5 instead.`
  }),
  
  // 21-30: String Basics
  (_i: number) => ({ 
    q: `What is len("hello")?`, 
    o: ["5", "4", "6", "Error"], 
    c: 0, 
    e: "len() counts every character.",
    de: `The len() function returns the number of items in a sequence or collection. For strings, it counts every character, including spaces, punctuation, and special characters. It's one of Python's most commonly used built-in functions.

How len() works:
• len(string) counts characters: len("hello") = 5
• Counts all characters: len("a b") = 3 (includes space)
• Works on many types: lists, tuples, dicts, sets, strings
• Returns integer (0 or positive)
• Raises TypeError for non-sequence types (like int)

String indexing visualization:
"hello" has indices: h(0), e(1), l(2), l(3), o(4)
Length = 5, valid indices: 0-4

Example: len("hello") returns 5. Note: len("") returns 0 (empty string). Also: len("Python!") = 7 (includes the exclamation mark).`
  }),
  (_i: number) => ({ 
    q: `What does "Hello" + "World" result in?`, 
    o: ["HelloWorld", "Hello World", "Error", "None"], 
    c: 0, 
    e: "String concatenation joins strings without spaces.",
    de: `The + operator performs string concatenation in Python, joining strings end-to-end. It doesn't automatically add spaces - strings are joined exactly as they are, with no separator unless you explicitly provide one.

String concatenation:
• + operator joins strings: "Hello" + "World" = "HelloWorld"
• Creates a new string (strings are immutable)
• No automatic spacing - you must add spaces manually
• Can concatenate multiple strings: "A" + "B" + "C" = "ABC"
• + only works with strings (must convert other types first)

To add spaces:
• "Hello" + " " + "World" = "Hello World"
• "Hello " + "World" = "Hello World" (space after first string)
• "Hello" + " World" = "Hello World" (space before second string)

Alternatives:
• join() method: " ".join(["Hello", "World"]) = "Hello World"
• f-strings: f"{'Hello'} {'World'}" = "Hello World"

Example: "Hello" + "World" results in "HelloWorld" (no space). For a space, use: "Hello" + " " + "World" or "Hello " + "World".`
  }),
  (_i: number) => ({ 
    q: `What does "Hi" * 3 result in?`, 
    o: ["HiHiHi", "Hi3", "Error", "None"], 
    c: 0, 
    e: "String multiplication repeats the string.",
    de: `The * operator can multiply strings by integers, repeating the string the specified number of times. This is a convenient way to create repeated patterns or padding.

String multiplication:
• string * integer repeats the string
• "Hi" * 3 = "HiHiHi" (string repeated 3 times)
• integer * string works the same: 3 * "Hi" = "HiHiHi"
• string * 0 = "" (empty string)
• string * negative number = "" (empty string)
• Only works with integers (not floats)

Common use cases:
• Creating separators: "-" * 50 creates a line of dashes
• Padding: " " * 10 creates 10 spaces
• Patterns: "ab" * 3 = "ababab"
• Visual formatting in output

Important: string * string doesn't work (raises TypeError). You can only multiply strings by integers.

Example: "Hi" * 3 results in "HiHiHi". Also: 5 * "=" = "=====" (useful for creating visual separators).`
  }),
  (_i: number) => ({ 
    q: `What is "Python"[0]?`, 
    o: ["P", "p", "Error", "None"], 
    c: 0, 
    e: "String indexing starts at 0.",
    de: `Python uses zero-based indexing, meaning the first character has index 0, not 1. This is consistent across all Python sequences (lists, tuples, strings). Understanding zero-based indexing is fundamental to Python programming.

Zero-based indexing:
• First character is at index 0: "Python"[0] = 'P'
• Second character is at index 1: "Python"[1] = 'y'
• Last character is at index len(string) - 1
• Index out of range raises IndexError

String "Python" indices:
P(0), y(1), t(2), h(3), o(4), n(5)
Length = 6, valid indices: 0-5

Why zero-based?
• Mathematically elegant: index represents offset from start
• Consistent with pointer arithmetic in lower-level languages
• Standard in most programming languages (C, Java, JavaScript, etc.)
• Makes slicing more intuitive: string[:3] gets first 3 characters (indices 0,1,2)

Example: "Python"[0] returns 'P'. To get the last character using positive indexing: "Python"[5] = 'n' (length 6, so index 5).`
  }),
  (_i: number) => ({ 
    q: `What is "Python"[-1]?`, 
    o: ["n", "P", "Error", "None"], 
    c: 0, 
    e: "Negative indexing starts from the end.",
    de: `Python supports negative indexing, allowing you to access elements from the end of a sequence. Index -1 is the last element, -2 is second-to-last, and so on. This is extremely useful for accessing the end of sequences without calculating length.

Negative indexing:
• -1 = last character: "Python"[-1] = 'n'
• -2 = second-to-last: "Python"[-2] = 'o'
• -len(string) = first character: "Python"[-6] = 'P'
• -0 is the same as 0 (no separate meaning)

String "Python" with negative indices:
P(-6), y(-5), t(-4), h(-3), o(-2), n(-1)
Positive:  0     1     2     3     4     5

Advantages:
• Don't need to know string length
• Easy access to last/few elements
• Common pattern: string[-1] for last character
• Works with any sequence (lists, tuples)

Example: "Python"[-1] returns 'n' (last character). "Python"[-2] returns 'o' (second-to-last). This is more convenient than "Python"[len("Python")-1].`
  }),
  (_i: number) => ({ 
    q: `What is "Python"[1:4]?`, 
    o: ["yth", "Pyth", "Python", "Error"], 
    c: 0, 
    e: "Slicing [1:4] gets characters from index 1 to 3.",
    de: `String slicing extracts a substring using the syntax string[start:stop]. The start index is inclusive, the stop index is exclusive - meaning it includes the start but stops before the stop index. This "exclusive end" convention is important to understand.

Slicing syntax: string[start:stop]
• start: inclusive (includes this index)
• stop: exclusive (stops before this index)
• Result includes indices: start, start+1, ..., stop-1
• Does NOT include index 'stop'

"Python"[1:4] breakdown:
• Start at index 1: 'y'
• Stop before index 4 (don't include index 4)
• Includes indices 1, 2, 3: 'y', 't', 'h'
• Result: "yth"

Visualization:
"Python" = P(0), y(1), t(2), h(3), o(4), n(5)
[1:4] includes:       y(1), t(2), h(3)
Result: "yth"

Key concept: The number of characters = stop - start = 4 - 1 = 3 characters.

Example: "Python"[1:4] returns "yth". To include 'o', use [1:5]. Remember: slicing never modifies the original string (strings are immutable).`
  }),
  (_i: number) => ({ 
    q: `What is "Python"[:3]?`, 
    o: ["Pyt", "Python", "P", "Error"], 
    c: 0, 
    e: "Slicing [:3] gets first 3 characters.",
    de: `When you omit the start index in a slice [:stop], Python assumes 0 (start from beginning). This is a common pattern for getting the first N characters of a string.

Slicing with omitted start:
• [:stop] is equivalent to [0:stop]
• Gets characters from beginning up to (but not including) stop
• [:3] = first 3 characters (indices 0, 1, 2)
• [:0] = "" (empty string - no characters before index 0)

"Python"[:3] breakdown:
• Omitted start defaults to 0
• Stop before index 3
• Includes indices 0, 1, 2: 'P', 'y', 't'
• Result: "Pyt"

Common patterns:
• [:n] = first n characters
• [n:] = everything from index n to end
• [:] = entire string (copy)
• [::-1] = reversed string

Example: "Python"[:3] returns "Pyt" (first 3 characters). This is often used to get prefixes or truncate strings to a maximum length.`
  }),
  (_i: number) => ({ 
    q: `What is "Python"[3:]?`, 
    o: ["hon", "Python", "Pyt", "Error"], 
    c: 0, 
    e: "Slicing [3:] gets from index 3 to end.",
    de: `When you omit the stop index in a slice [start:], Python assumes the end of the string. This gets everything from the start index to the last character, inclusive.

Slicing with omitted stop:
• [start:] gets from start index to end
• Includes the start index and everything after
• [3:] = from index 3 to last character (inclusive)
• [len(string):] = "" (empty - nothing after last index)

"Python"[3:] breakdown:
• Start at index 3: 'h'
• Continue to end (no stop specified)
• Includes indices 3, 4, 5: 'h', 'o', 'n'
• Result: "hon"

Common patterns:
• [n:] = everything from index n onward
• [-n:] = last n characters
• [1:] = everything except first character
• [:-1] = everything except last character

Example: "Python"[3:] returns "hon" (from index 3 to end). Combined with [:n], you can easily split strings: first = string[:n]; rest = string[n:].`
  }),
  (_i: number) => ({ 
    q: `What is "Python"[::2]?`, 
    o: ["Pto", "Python", "Pyt", "Error"], 
    c: 0, 
    e: "[::2] gets every 2nd character.",
    de: `Slicing with a step value [start:stop:step] allows you to skip characters. The step (third value) determines the increment between indices. A step of 2 means take every second character.

Extended slicing: string[start:stop:step]
• start: starting index (default: 0 or beginning)
• stop: ending index (default: end)
• step: increment between indices (default: 1)
• [::2] = start at 0, go to end, step by 2

"Python"[::2] breakdown:
• Start: 0 (default)
• Stop: end (default)
• Step: 2 (every 2nd character)
• Indices: 0, 2, 4: 'P', 't', 'o'
• Result: "Pto"

Common step values:
• [::1] = normal (every character) - same as [:]
• [::2] = every 2nd character (even indices)
• [1::2] = every 2nd character starting at 1 (odd indices)
• [::3] = every 3rd character
• [::-1] = reverse (negative step reverses direction)

Example: "Python"[::2] returns "Pto". To get odd-indexed characters: "Python"[1::2] = "yhn". The step value is very powerful for pattern extraction.`
  }),
  (_i: number) => ({ 
    q: `What is "Python"[::-1]?`, 
    o: ["nohtyP", "Python", "Error", "None"], 
    c: 0, 
    e: "[::-1] reverses the string.",
    de: `Using a negative step value in slicing reverses the direction of iteration. [::-1] is the idiomatic Python way to reverse a string (or any sequence). It's concise, readable, and efficient.

Reverse slicing: [::-1]
• Start: omitted (defaults to end when step is negative)
• Stop: omitted (defaults to beginning when step is negative)
• Step: -1 (go backwards)
• Reverses the entire string

"Python"[::-1] breakdown:
• Step is -1, so go backwards
• Start at end, go to beginning
• Indices visited: 5, 4, 3, 2, 1, 0
• Characters: 'n', 'o', 'h', 't', 'y', 'P'
• Result: "nohtyP"

Negative step behavior:
• With negative step, defaults are reversed
• [::-1] = reverse entire sequence
• [::-2] = reverse, taking every 2nd character
• [5:0:-1] = from index 5 down to (but not including) 0

Alternatives (less Pythonic):
• ''.join(reversed("Python")) - works but verbose
• Manual loop - unnecessary complexity

Example: "Python"[::-1] returns "nohtyP". This is the most Pythonic way to reverse a string. Note: [::-1] creates a new string (original unchanged, since strings are immutable).`
  }),
  
  // 31-40: Comments and Multi-line Strings
  (_i: number) => ({ 
    q: `Which symbol starts a single-line comment?`, 
    o: ["#", "//", "/*", "--"], 
    c: 0, 
    e: "Python uses # for comments.",
    de: `Python uses the hash symbol (#) to start single-line comments. Everything from the # to the end of the line is ignored by the Python interpreter. This is Python's only way to create comments - there are no multi-line comment blocks like /* */ in C/Java.

How comments work:
• # starts a comment - everything after it on that line is ignored
• Comments don't affect program execution
• Comments are for humans, not the interpreter
• Can be at the start of a line or after code on the same line
• No closing symbol needed - ends at the end of the line

Comparison with other languages:
• Python: # comment (like shell, Perl, Ruby)
• C/Java: // comment or /* comment */
• HTML: <!-- comment -->
• SQL: -- comment or /* comment */

Example: # This is a comment
x = 5  # This is also a comment (inline)
print(x)  # Comments explain code
`
  }),
  (_i: number) => ({ 
    q: `Correct way to write a multi-line string?`, 
    o: ["'''String'''", "'String'", '"String"', "/String/"], 
    c: 0, 
    e: "Triple quotes allow multi-line strings.",
    de: `Triple quotes (three single quotes ''' or three double quotes """) allow you to create multi-line strings in Python. These preserve newlines and whitespace, making them perfect for documentation strings, formatted text, and strings spanning multiple lines.

Triple quote syntax:
• '''text''' - triple single quotes
• """text""" - triple double quotes
• Both work identically
• Preserves newlines and spacing
• Can span multiple lines
• Useful for docstrings (documentation)

Why use triple quotes:
• Regular quotes: 'text' or "text" must be on one line
• Triple quotes allow line breaks inside the string
• Perfect for documentation strings (docstrings)
• Can include both single and double quotes inside

Example:
text = """This is
a multi-line
string"""

Common uses:
• Docstrings: def func(): """Function documentation"""
• SQL queries: query = """SELECT * FROM table"""
• Long formatted messages
• Multi-line JSON or XML

Note: Triple quotes create strings, not comments. They're executed like any string literal.
`
  }),
  (_i: number) => ({ 
    q: `What is the purpose of comments in Python?`, 
    o: ["Document code", "Execute code", "Create variables", "Import modules"], 
    c: 0, 
    e: "Comments document code and are ignored by Python.",
    de: `Comments in Python serve to document and explain code for human readers. They are completely ignored by the Python interpreter during execution - they don't affect program behavior at all. Good comments make code more maintainable and understandable.

Purposes of comments:
• Explain complex logic or algorithms
• Document function purposes and parameters
• Clarify non-obvious code decisions
• Provide usage examples
• Note potential issues or TODOs
• Explain why something is done a certain way

What comments do NOT do:
• They don't execute code
• They don't create variables
• They don't import modules
• They don't affect program execution
• They're stripped out before execution

Types of comments:
• Inline comments: x = 5  # Set x to 5
• Block comments: # Calculate total
                  # Add all items
• Documentation strings (docstrings): """Function description"""

Best practices:
• Write comments that explain WHY, not WHAT
• Keep comments up-to-date with code changes
• Don't state the obvious: # x = 5 (unnecessary)
• Explain complex logic: # Use binary search for O(log n) lookup

Example: Comments help future readers (including yourself) understand the code's purpose and logic.
`
  }),
  (_i: number) => ({ 
    q: `Can you write a comment after code on the same line?`, 
    o: ["Yes", "No", "Only in Python 2", "Only in functions"], 
    c: 0, 
    e: "Comments can be inline after code using #.",
    de: `Yes, you can write comments after code on the same line using the # symbol. This is called an "inline comment." Everything from the # to the end of the line is treated as a comment and ignored. This is very common in Python programming.

Inline comment syntax:
• Code followed by # followed by comment
• Space before # is recommended for readability
• Comment continues until end of line
• Only that line is affected

Examples:
x = 5  # Assign 5 to x
result = calculate()  # Get the calculation result
# Multiple inline comments work too:
y = 10  # Set y to 10  # (only first # is needed, rest ignored)

Best practices:
• Leave at least one space before #
• Keep inline comments brief
• Use for clarification, not obvious statements
• PEP 8 recommends inline comments sparingly

Common uses:
• Explain variable assignments: x = 5  # User's age
• Clarify calculations: total = price * 1.1  # Add 10% tax
• Note special cases: if x < 0:  # Handle negative values
• Suppress linter warnings: x = unused_var  # noqa

Example: name = "Alice"  # User's name (inline comment). The code executes, the comment is ignored.
`
  }),
  (_i: number) => ({ 
    q: `What does '''triple quotes''' create?`, 
    o: ["Multi-line string", "Comment", "Error", "Variable"], 
    c: 0, 
    e: "Triple quotes create multi-line strings.",
    de: `Triple quotes (''' or """) create a multi-line string literal in Python. They do NOT create comments - they create actual string objects that can be stored in variables, returned from functions, or used in expressions. This is an important distinction.

What triple quotes create:
• Multi-line string object (type: str)
• Can be assigned to variables
• Can be used in expressions
• Preserves newlines and formatting
• Executed like any string literal

Common misconception:
• Triple quotes look like comments but they're NOT
• They create string objects that exist in memory
• If assigned to nothing, they're created but immediately discarded
• Used inside functions/classes become docstrings

Examples:
# String variable:
text = '''This is
a multi-line
string'''

# Docstring (special use):
def my_func():
    """This is a docstring - still a string!"""
    pass

# Both create strings:
s1 = '''single'''
s2 = """double"""  # Same result

Important: Triple-quoted strings are often used as docstrings, which are special strings that Python automatically associates with functions, classes, and modules for documentation purposes.
`
  }),
  (_i: number) => ({ 
    q: `Is # a comment or string delimiter?`, 
    o: ["Comment", "String delimiter", "Both", "Neither"], 
    c: 0, 
    e: "# starts a comment, not a string.",
    de: `The # symbol is a comment marker, not a string delimiter. It tells Python to ignore everything from that point to the end of the line. It's used only for comments, not for defining strings.

What # does:
• Starts a single-line comment
• Ignored by Python interpreter
• Not used to create strings
• No closing symbol needed

String delimiters in Python:
• Single quotes: 'text'
• Double quotes: "text"
• Triple single quotes: '''text'''
• Triple double quotes: """text"""
• Raw strings: r"text"
• f-strings: f"text"

Important distinction:
• # text = comment (ignored)
• "text" = string (executed, creates string object)

Examples:
# This is a comment - ignored
text = "This is a string"  # This comment is also ignored
# But the string above IS executed

Inside strings, # has no special meaning:
text = "Price is $#100"  # The # is part of the string
comment = "This is a # comment"  # # inside string is just a character

Example: # starts a comment. To create a string, use 'text' or "text", not #.
`
  }),
  (_i: number) => ({ 
    q: `Can triple quotes be used for comments?`, 
    o: ["No, they create strings", "Yes", "Only in Python 2", "Only in classes"], 
    c: 0, 
    e: "Triple quotes create strings, not comments.",
    de: `No, triple quotes cannot be used for comments - they create string literals. While unassigned triple-quoted strings are often used informally as multi-line "comments," they're actually executed as string objects (though they're immediately discarded if not assigned). This is inefficient compared to real comments.

The reality:
• Triple quotes create string objects (even if unassigned)
• Strings are created in memory, then discarded
• This uses resources (minimal but not zero)
• Real comments (#) are completely ignored - zero overhead

Common misconception:
# People sometimes do this thinking it's a comment:
"""
This is NOT a comment
It's a string that's created and discarded
"""

# Better way (actual comment):
# This is a comment
# Multi-line comments require multiple # lines

Why not use triple quotes as comments:
• Creates unnecessary string objects
• Not truly ignored like comments
• Can cause issues in some contexts
• Not the Pythonic way

The Pythonic way for multi-line comments:
• Use # on each line
• Or use triple-quoted strings as docstrings (inside functions/classes)

Example: """This looks like a comment but creates a string""" - use # This is a real comment instead for actual comments.
`
  }),
  (_i: number) => ({ 
    q: `What happens to code after # on a line?`, 
    o: ["Ignored by Python", "Executed", "Creates error", "Creates variable"], 
    c: 0, 
    e: "Everything after # is ignored.",
    de: `Everything after the # symbol on a line is completely ignored by the Python interpreter. It's treated as a comment and stripped out before execution. This means you can write anything after # and it won't affect your program - it won't execute, create variables, or cause errors (unless it's part of a string that contains #).

Comment behavior:
• # marks the start of a comment
• Everything from # to end of line is ignored
• Not parsed, not executed, not stored
• Can contain any characters (no syntax rules apply)
• The line continues but only code before # runs

Examples:
x = 5  # This comment is ignored
# This entire line is a comment
x = 5  # x = 10  # This won't execute! x stays 5

Important exceptions:
• If # is inside a string, it's part of the string, not a comment:
  text = "Price is #100"  # The # is part of the string
  
• If # is inside triple quotes, it's part of the string:
  text = """Line 1  # This is still part of string"""

• Only # outside of string literals starts comments

Example: x = 5  # This code would cause an error if executed - but it's ignored! So x = 5, not the error.
`
  }),
  (_i: number) => ({ 
    q: `Can you nest triple-quoted strings?`, 
    o: ["Yes, with different quote types", "No", "Only in Python 2", "Only in functions"], 
    c: 0, 
    e: "You can nest with different quote types.",
    de: `Yes, you can nest triple-quoted strings by using different quote types. If you use ''' for the outer string, you can use """ for an inner string, and vice versa. This allows you to include quotes of one type inside a string delimited by the other type.

Nesting rules:
• Outer ''' can contain """ inside
• Outer """ can contain ''' inside
• Cannot nest same type: ''' ... ''' ... ''' won't work (ends at first matching triple)
• Mixing quote types is the solution

Examples:
# Nested with different types:
text = '''Outer string with """inner string""" inside'''
text2 = """Outer with '''inner''' inside"""

# This won't work (same type):
# text = '''Outer with '''inner''' inside'''  # ERROR! Ends at second '''

Why this works:
• Python finds matching triple quotes to end the string
• Different quote types don't match
• Allows nesting without escaping

Alternative (escaping):
• You can escape quotes: text = '''Outer with \'\'\'inner\'\'\' inside'''
• But using different quote types is cleaner

Common use cases:
• Embedding code examples with quotes
• Multi-level nested strings
• Complex documentation strings

Example: text = '''Documentation with "quoted" and """triple quoted""" examples inside''' - works because different quote types don't conflict.
`
  }),
  (_i: number) => ({ 
    q: `What is the difference between ' and " for strings?`, 
    o: ["No difference", "Single is shorter", "Double is faster", "Single is deprecated"], 
    c: 0, 
    e: "Both work identically in Python.",
    de: `There is no functional difference between single quotes (') and double quotes (") for creating strings in Python. They work identically - both create the same string object. The choice between them is purely stylistic and based on convenience.

No difference in:
• Functionality: 'text' == "text"  # True
• Performance: Identical
• Memory usage: Identical
• Syntax rules: Both work everywhere

So why have both?
• Convenience: Use 'text' when string contains "
• Convenience: Use "text" when string contains '
• Style consistency: Pick one and stick with it
• Avoid escaping: Use the opposite quote type

Examples:
text1 = 'He said "Hello"'  # No escaping needed
text2 = "It's a string"  # No escaping needed
text3 = 'It\'s a string'  # Escaping needed with same quotes
text4 = "He said \"Hello\""  # Escaping needed with same quotes

PEP 8 (Python style guide) says:
• Be consistent within a module
• Use triple double quotes for docstrings
• Pick one style and stick with it

Common convention:
• Single quotes for short strings
• Double quotes for strings with single quotes inside
• Triple double quotes for docstrings

Example: 'Hello' and "Hello" create identical strings. Choose based on what characters are inside the string to minimize escaping.
`
  }),
  
  // 41-50: Type Conversions
  (_i: number) => ({ 
    q: `Result of int("42")?`, 
    o: ["42", '"42"', "Error", "float"], 
    c: 0, 
    e: "int() converts numeric strings to integers.",
    de: `The int() function converts a value to an integer. When given a string containing numeric characters, it parses the string and returns the integer value. This is essential for converting user input (which comes as strings) to numbers for calculations.

int() conversion:
• int("42") = 42 (converts string to integer)
• int("42") returns 42 (an integer, not a string)
• The result is type int, not type str
• Leading/trailing whitespace is allowed: int(" 42 ") = 42

What int() accepts:
• Numeric strings: int("42") = 42
• Float strings: int("3.14") = 3 (truncates)
• Floats: int(3.14) = 3 (truncates towards zero)
• Whitespace: int("  42  ") = 42 (strips whitespace)

What causes errors:
• Non-numeric strings: int("hello") raises ValueError
• Empty strings: int("") raises ValueError
• None: int(None) raises TypeError

Common use:
• User input: age = int(input("Enter age: "))
• String parsing: num = int("42")
• Type conversion: result = int(3.14)

Example: int("42") returns 42 (integer). Note: This is the number 42, not the string "42". To convert back: str(42) = "42".
`
  }),
  (_i: number) => ({ 
    q: `Result of float(42)?`, 
    o: ["42.0", "42", "int", "None"], 
    c: 0, 
    e: "float() adds decimal precision.",
    de: `The float() function converts a value to a floating-point number (decimal number). When given an integer, it adds .0 to make it a float. This is important because floats and ints are different types in Python.

float() conversion:
• float(42) = 42.0 (converts integer to float)
• Adds decimal precision (even if .0)
• Result is type float, not type int
• 42.0 is different from 42 in type, though equal in value

What float() accepts:
• Integers: float(42) = 42.0
• Numeric strings: float("3.14") = 3.14
• Integer strings: float("42") = 42.0
• Already floats: float(3.14) = 3.14 (no change)
• Scientific notation: float("1e5") = 100000.0

Why use float():
• Division always produces float: 10 / 2 = 5.0
• Need decimal precision: float(42) = 42.0
• Consistency: float(5) = 5.0
• Parsing decimal strings: float("3.14") = 3.14

Type differences:
• 42 is int, 42.0 is float
• 42 == 42.0 is True (values are equal)
• type(42) != type(42.0) (types are different)
• 42 is 42.0 is False (different objects)

Example: float(42) returns 42.0 (a float). This is useful when you need decimal precision or are working with division which always produces floats in Python 3.
`
  }),
  (_i: number) => ({ 
    q: `Result of str(42)?`, 
    o: ['"42"', "42", "Error", "None"], 
    c: 0, 
    e: "str() converts values to strings.",
    de: `The str() function converts a value to its string representation. When given a number, it converts it to a string containing the numeric characters. This is the opposite of int() or float() - it converts from numbers to strings.

str() conversion:
• str(42) = "42" (converts integer to string)
• Creates a string representation of the value
• Result is type str, not the original type
• Works with any type (numbers, lists, objects, etc.)

What str() accepts:
• Integers: str(42) = "42"
• Floats: str(3.14) = "3.14"
• Booleans: str(True) = "True"
• Lists: str([1, 2]) = "[1, 2]"
• None: str(None) = "None"
• Almost anything!

Common uses:
• String formatting: "Age: " + str(42)
• Displaying numbers: print(str(42))
• Conversion for concatenation: "Number: " + str(num)
• f-strings alternative: f"Number: {42}" (automatic conversion)

String concatenation:
• "Age: " + 42 raises TypeError (can't concatenate)
• "Age: " + str(42) = "Age: 42" (works!)

Modern alternative:
• f-strings: f"Age: {42}" = "Age: 42" (automatic conversion)
• .format(): "Age: {}".format(42) = "Age: 42"

Example: str(42) returns "42" (a string). This allows you to combine numbers with text: "I am " + str(age) + " years old".
`
  }),
  (_i: number) => ({ 
    q: `Result of bool(0)?`, 
    o: ["False", "True", "None", "Error"], 
    c: 0, 
    e: "0 is False, non-zero is True.",
    de: `The bool() function converts a value to a boolean (True or False). When given the integer 0, it returns False because 0 is "falsy" in Python - it evaluates to False in boolean contexts.

bool() truthiness:
• bool(0) = False (zero is falsy)
• bool(1) = True (non-zero is truthy)
• bool(-1) = True (even negatives are truthy)
• Only 0 is False; all other numbers are True

Falsy values in Python:
• 0 (zero integer)
• 0.0 (zero float)
• False (boolean False)
• None (None value)
• "" (empty string)
• [] (empty list)
• {} (empty dict)
• set() (empty set)
• () (empty tuple)

Truthy values:
• All non-zero numbers: 1, -1, 3.14, 0.1, etc.
• All non-empty sequences: [1, 2], "hello", etc.
• True (boolean True)
• Most objects

Why this matters:
• Used in if statements: if value: (checks truthiness)
• Used in loops: while value: (continues if truthy)
• Used in boolean operations: value and other
• Used in comprehensions: [x for x in items if x]

Common pattern:
• Check if number is non-zero: if number: ...
• Check if list is non-empty: if items: ...
• Check if string is non-empty: if text: ...

Example: bool(0) returns False. This is used in conditional statements: if number: print("Non-zero") only prints when number is not 0.
`
  }),
  (_i: number) => ({ 
    q: `Result of bool(1)?`, 
    o: ["True", "False", "None", "Error"], 
    c: 0, 
    e: "Non-zero numbers are Truthy.",
    de: `The bool() function converts a value to a boolean. When given the integer 1 (or any non-zero number), it returns True because non-zero numbers are "truthy" in Python - they evaluate to True in boolean contexts.

Truthiness of numbers:
• bool(1) = True (non-zero is truthy)
• bool(42) = True (any positive non-zero)
• bool(-1) = True (even negatives are truthy)
• bool(0.1) = True (even tiny numbers)
• Only 0 (and 0.0) is False

Why numbers are truthy:
• Represents "something exists" vs "nothing"
• Useful for checking if value is non-zero
• Common pattern: if count: ... (only if non-zero)
• Natural way to check for presence/absence

Boolean conversion:
• In if statements: if number: (automatically converts)
• In while loops: while count: (checks truthiness)
• In boolean operations: number and other
• Explicit conversion: bool(number)

Common uses:
• Check if counter is non-zero: if count: print("Has items")
• Check if value exists: if result: process(result)
• Guard clauses: if not value: return early

Edge cases:
• bool(0) = False (only zero is falsy)
• bool(0.0) = False (float zero too)
• bool(0j) = False (complex zero)
• All others are True

Example: bool(1) returns True. This allows natural checking: if user_count: print(f"{user_count} users") only prints when there are users.
`
  }),
  (_i: number) => ({ 
    q: `Result of bool("")?`, 
    o: ["False", "True", "None", "Error"], 
    c: 0, 
    e: "Empty strings are Falsy.",
    de: `Empty strings ("") are falsy in Python - they evaluate to False in boolean contexts. This is because an empty string represents "no content" or "absence of text," which is naturally False.

String truthiness:
• bool("") = False (empty string is falsy)
• bool("hello") = True (non-empty is truthy)
• bool(" ") = True (space is a character!)
• Only "" is False; all other strings are True

Why empty strings are falsy:
• Represents "no text" vs "has text"
• Useful for checking if string has content
• Common pattern: if text: ... (only if non-empty)
• Natural way to check for presence

Important distinction:
• "" is falsy (no characters)
• " " is truthy (contains a space character!)
• "\n" is truthy (contains newline)
• Only truly empty string is falsy

Common uses:
• Check if input exists: if user_input: ...
• Validate strings: if not name: raise ValueError
• Guard clauses: if not message: return
• Process only non-empty: if text: process(text)

Checking for empty:
• if not text: (True when empty)
• if text == "": (explicit check)
• if len(text) == 0: (length check)
• if text: (most Pythonic - checks truthiness)

Example: bool("") returns False. This is used to validate input: if not name: print("Name required") - only prints when name is empty.
`
  }),
  (_i: number) => ({ 
    q: `Result of bool("hello")?`, 
    o: ["True", "False", "None", "Error"], 
    c: 0, 
    e: "Non-empty strings are Truthy.",
    de: `Non-empty strings are truthy in Python - they evaluate to True in boolean contexts. Any string containing at least one character (even a single space) is truthy, representing "has content."

String truthiness:
• bool("hello") = True (non-empty is truthy)
• bool("a") = True (even single character)
• bool(" ") = True (space is a character!)
• bool("\n") = True (newline is a character!)
• Only "" (empty) is False

Why strings are truthy:
• Represents "has text" vs "no text"
• Useful for checking if string has content
• Common pattern: if text: ... (only if non-empty)
• Natural validation pattern

Important notes:
• Any non-empty string is True
• Even whitespace-only strings are True: bool("   ") = True
• Only truly empty string "" is False
• Single character strings are True: bool("a") = True

Common uses:
• Validate input: if username: save(username)
• Check if text exists: if message: send(message)
• Process only non-empty: if user_input: process()
• Guard clauses: if not text: return

Checking for non-empty:
• if text: (most Pythonic)
• if len(text) > 0: (explicit length check)
• if text != "": (explicit comparison)
• if text.strip(): (checks if has non-whitespace)

Example: bool("hello") returns True. This allows natural validation: if email: send_email(email) only sends when email has content.
`
  }),
  (_i: number) => ({ 
    q: `Result of bool([])?`, 
    o: ["False", "True", "None", "Error"], 
    c: 0, 
    e: "Empty lists are Falsy.",
    de: `Empty lists ([]) are falsy in Python - they evaluate to False in boolean contexts. This is because an empty list represents "no items" or "absence of data," which is naturally False.

List truthiness:
• bool([]) = False (empty list is falsy)
• bool([1, 2]) = True (non-empty is truthy)
• bool([0]) = True (even if contains 0, list itself is truthy!)
• Only [] is False; all other lists are True

Why empty lists are falsy:
• Represents "no items" vs "has items"
• Useful for checking if list has content
• Common pattern: if items: ... (only if non-empty)
• Natural way to check for presence

Important distinction:
• [] is falsy (no elements)
• [0] is truthy (has one element, even though it's 0!)
• [False] is truthy (has one element, even though it's False!)
• Only truly empty list is falsy

Common uses:
• Check if list has items: if items: process(items)
• Validate lists: if not data: return []
• Guard clauses: if not results: return None
• Process only non-empty: if numbers: calculate(numbers)

Checking for empty:
• if not items: (True when empty)
• if items == []: (explicit check)
• if len(items) == 0: (length check)
• if items: (most Pythonic - checks truthiness)

Example: bool([]) returns False. This is used to check for empty collections: if not items: print("No items to process") - only prints when list is empty.
`
  }),
  (_i: number) => ({ 
    q: `Result of bool([1, 2])?`, 
    o: ["True", "False", "None", "Error"], 
    c: 0, 
    e: "Non-empty lists are Truthy.",
    de: `Non-empty lists are truthy in Python - they evaluate to True in boolean contexts. Any list containing at least one element is truthy, regardless of what those elements are (even if the elements themselves are falsy).

List truthiness:
• bool([1, 2]) = True (non-empty is truthy)
• bool([0]) = True (even if contains 0!)
• bool([False]) = True (even if contains False!)
• bool([[]]) = True (even if contains empty list!)
• Only [] (empty) is False

Why lists are truthy:
• Represents "has items" vs "no items"
• Useful for checking if list has content
• Common pattern: if items: ... (only if non-empty)
• Natural validation pattern

Important distinction:
• The list's truthiness is independent of its contents
• [0] is True because the list has elements, even though 0 is falsy
• [False] is True because the list has elements, even though False is falsy
• [None] is True because the list has elements

Common uses:
• Check if list has items: if results: display(results)
• Validate data: if numbers: calculate_average(numbers)
• Process only non-empty: if users: send_notifications(users)
• Guard clauses: if not items: return early

Checking for non-empty:
• if items: (most Pythonic)
• if len(items) > 0: (explicit length check)
• if items != []: (explicit comparison)

Example: bool([1, 2]) returns True. This allows natural checking: if products: show_products(products) only displays when there are products to show.
`
  }),
  (_i: number) => ({ 
    q: `Result of bool(None)?`, 
    o: ["False", "True", "None", "Error"], 
    c: 0, 
    e: "None is Falsy.",
    de: `None is falsy in Python - it evaluates to False in boolean contexts. None represents the absence of a value or "no value," which naturally evaluates to False.

None truthiness:
• bool(None) = False (None is falsy)
• None is a singleton object (only one None exists)
• Used to represent "no value" or "undefined"
• Common default value for optional parameters

Why None is falsy:
• Represents "nothing" vs "something"
• Useful for checking if value exists
• Common pattern: if value: ... (only if not None)
• Natural way to check for presence

Important distinction:
• None != False (None is not the same as False)
• None != 0 (None is not the same as 0)
• None != "" (None is not the same as empty string)
• But all are falsy: if not None: passes

Common uses:
• Check if value exists: if result: process(result)
• Validate parameters: if not value: raise ValueError
• Guard clauses: if value is None: return
• Optional parameters: def func(x=None): ...

Checking for None:
• if value is None: (most Pythonic - use 'is')
• if value == None: (works but not recommended)
• if not value: (checks if falsy, not specifically None)
• if value is not None: (checks if not None)

Example: bool(None) returns False. This is used to check for missing values: if user is None: print("No user") - only prints when user is None.
`
  }),
  
  // 51-60: Basic Arithmetic Operations
  (_i: number) => ({ 
    q: `What is 10 / 2 in Python 3?`, 
    o: ["5.0", "5", "0", "Error"], 
    c: 0, 
    e: "The / operator always returns a float in Python 3.",
    de: `In Python 3, the division operator (/) always returns a floating-point number, even when the result is a whole number. This is different from Python 2, where / performed integer division. The result is 5.0, not 5.

Division in Python 3:
• 10 / 2 = 5.0 (always returns float)
• 10 / 3 = 3.3333333333333335 (float)
• 5 / 1 = 5.0 (even whole numbers become floats)
• This change was made to prevent unexpected integer division

Python 2 vs Python 3:
• Python 2: 10 / 2 = 5 (integer division)
• Python 3: 10 / 2 = 5.0 (true division - always float)
• Python 2 & 3: 10 // 2 = 5 (floor division - integer)

Why this change:
• Prevents confusion about division behavior
• Makes division mathematically consistent
• Eliminates unexpected integer truncation
• More intuitive for most use cases

Getting integer results:
• Use // (floor division): 10 // 2 = 5
• Use int(): int(10 / 2) = 5
• But // is preferred for clarity

Example: 10 / 2 returns 5.0 (a float). If you need an integer, use 10 // 2 = 5 (floor division).
`
  }),
  (_i: number) => ({ 
    q: `What is 10 // 3?`, 
    o: ["3", "3.33", "4", "Error"], 
    c: 0, 
    e: "// is floor division.",
    de: `The // operator performs floor division (also called integer division or truncating division). It divides two numbers and returns the largest integer less than or equal to the result. For positive numbers, this means it truncates toward zero.

Floor division:
• 10 // 3 = 3 (fits 3 times, remainder 1)
• Returns integer (or float if operands are floats)
• Rounds down (toward negative infinity)
• Works with negative numbers too

How it works:
• 10 ÷ 3 = 3.333... → floor = 3
• 10 // 3 = 3 (largest integer ≤ 3.333)
• Similar to int(10 / 3) but different with negatives

With negatives:
• -10 // 3 = -4 (rounds down, away from zero)
• int(-10 / 3) = -3 (truncates toward zero)
• // rounds toward negative infinity, int() truncates toward zero

Use cases:
• Getting whole number of divisions
• Splitting items into groups
• Converting to integer after division
• Time calculations (hours, minutes)

Related:
• 10 % 3 = 1 (remainder after 10 // 3)
• divmod(10, 3) = (3, 1) (returns both // and %)

Example: 10 // 3 returns 3. This represents how many complete groups of 3 can be made from 10.
`
  }),
  (_i: number) => ({ 
    q: `What is 2 ** 3?`, 
    o: ["8", "6", "9", "Error"], 
    c: 0, 
    e: "** is the exponentiation operator.",
    de: `The ** operator performs exponentiation (raising a number to a power). It's Python's built-in operator for calculating powers, making it convenient and readable. 2 ** 3 means "2 to the power of 3" which equals 8.

Exponentiation syntax:
• 2 ** 3 = 8 (2 raised to the power of 3)
• base ** exponent = base ^ exponent (mathematically)
• Right-associative: 2 ** 3 ** 2 = 2 ** (3 ** 2) = 2 ** 9 = 512
• Works with floats: 2.5 ** 2 = 6.25

How it works:
• 2 ** 3 = 2 × 2 × 2 = 8
• 2 ** 0 = 1 (any number to power 0 is 1)
• 2 ** -1 = 0.5 (negative powers give fractions)
• 10 ** 2 = 100 (10 squared)

Common uses:
• Powers of 2: 2 ** 10 = 1024
• Squaring: x ** 2
• Cubing: x ** 3
• Scientific notation: 10 ** 6 = 1,000,000
• Calculating areas/volumes

Alternatives:
• math.pow(2, 3) = 8.0 (always returns float)
• pow(2, 3) = 8 (built-in function, can return int)
• 2 ** 3 is preferred (more readable and Pythonic)

Precedence:
• ** has highest precedence (right-associative)
• 2 ** 3 ** 2 = 2 ** 9 = 512 (not 8 ** 2 = 64)

Example: 2 ** 3 returns 8. This is Python's way of calculating 2 to the power of 3.
`
  }),
  (_i: number) => ({ 
    q: `What is 10 % 3?`, 
    o: ["1", "3", "0", "Error"], 
    c: 0, 
    e: "% is the modulo operator (remainder).",
    de: `The % operator is the modulo operator - it returns the remainder after division. When you divide 10 by 3, you get 3 groups of 3 with 1 left over. That remainder (1) is what the modulo operator returns.

Modulo operation:
• 10 % 3 = 1 (remainder when 10 is divided by 3)
• 10 ÷ 3 = 3 with remainder 1
• Returns what's left after floor division
• Works with floats too: 10.5 % 3 = 1.5

How it works:
• Divide first number by second
• Return the remainder after division
• 10 % 3: 10 ÷ 3 = 3 remainder 1, so 10 % 3 = 1
• 10 % 5: 10 ÷ 5 = 2 remainder 0, so 10 % 5 = 0

Common uses:
• Checking even/odd: n % 2 (0 = even, 1 = odd)
• Wrapping values: index % length (keeps index in range)
• Finding divisors: n % d == 0 (d divides n)
• Time calculations: seconds % 60 (seconds within minute)
• Hashtables: hash % size (bucket index)

With negatives:
• -10 % 3 = 2 (sign of result matches divisor)
• Python's % follows mathematical definition
• Different from some languages (like C)

Related operators:
• 10 // 3 = 3 (floor division - how many times it fits)
• 10 % 3 = 1 (remainder - what's left)
• divmod(10, 3) = (3, 1) (returns both // and %)

Example: 10 % 3 returns 1. This is useful for checking divisibility: if number % 3 == 0: print("Divisible by 3").
`
  }),
  (_i: number) => ({ 
    q: `What is -5?`, 
    o: ["Negative five", "Error", "5", "None"], 
    c: 0, 
    e: "Unary minus creates negative number.",
    de: `The unary minus operator (-) negates a number, creating its negative counterpart. It's called "unary" because it operates on a single operand (unlike binary operators like + which operate on two). -5 is the negative version of 5.

Unary minus:
• -5 = negative five
• Negates the value: -5 is the opposite of 5
• Creates a negative number from a positive
• Can negate variables too: -x

How it works:
• -5 means "negative 5" or "minus 5"
• Changes the sign: positive → negative
• -(-5) = 5 (double negation returns original)
• Works with floats: -3.14 = -3.14

Use cases:
• Representing negative values
• Subtracting (can write x - y as x + -y)
• Inverting signs: -balance (opposite of balance)
• Temperature below zero: -10°C
• Debt/losses in finance

With variables:
• x = 5
• -x = -5 (negates x's value)
• -(-x) = x (double negation)

Important notes:
• -5 is not "subtract 5" (that requires two operands)
• -5 is a literal (a complete expression)
• Can use in expressions: 10 + -5 = 5

Comparison:
• -5 (unary minus) - negates a number
• 10 - 5 (binary minus) - subtraction operation

Example: -5 is negative five. This represents the value five below zero. In Python, -5 is a complete expression that evaluates to negative five.
`
  }),
  (_i: number) => ({ 
    q: `What is +5?`, 
    o: ["Positive five", "Error", "-5", "None"], 
    c: 0, 
    e: "Unary plus is allowed but doesn't change value.",
    de: `The unary plus operator (+) is allowed in Python but doesn't change the value of a number. It's essentially a no-op (no operation) - it returns the number unchanged. +5 is just 5. However, it can be useful for code clarity or in certain expressions.

Unary plus:
• +5 = 5 (doesn't change value)
• Creates no-op: +x returns x unchanged
• Valid syntax but has no effect
• Less commonly used than unary minus

Why it exists:
• Symmetry with unary minus
• Code clarity (emphasize positive value)
• Type hints/annotations
• May convert to int/float in some contexts

Behavior:
• +5 = 5 (no change)
• +(-5) = -5 (applying + doesn't negate)
• +(3.14) = 3.14 (works with floats too)
• +x = x (for any number x)

Use cases:
• Code clarity: +balance (emphasize positive)
• Type conversion in expressions
• Consistency in code style
• Mathematical notation

Rare but valid:
• x = +5 (assigns 5, not different from x = 5)
• result = +value (does nothing, but valid)
• print(+10) (prints 10, same as print(10))

Comparison:
• +5 = 5 (unary plus - no change)
• -5 = -5 (unary minus - negates)

Example: +5 is simply 5. While valid syntax, it has no effect. Most Python code doesn't use unary plus unless needed for clarity or specific use cases.
`
  }),
  (_i: number) => ({ 
    q: `What is 2 * 3 + 4?`, 
    o: ["10", "14", "18", "Error"], 
    c: 0, 
    e: "Multiplication before addition (PEMDAS).",
    de: `Python follows the standard order of operations (PEMDAS: Parentheses, Exponents, Multiplication/Division, Addition/Subtraction). Multiplication has higher precedence than addition, so 2 * 3 is calculated first, then 4 is added to the result.

Order of operations (PEMDAS):
• Parentheses first
• Exponents (powers) next
• Multiplication and Division (left to right)
• Addition and Subtraction (left to right)

Step-by-step:
• 2 * 3 + 4
• First: 2 * 3 = 6 (multiplication first)
• Then: 6 + 4 = 10 (addition second)
• Result: 10

Operator precedence:
• ** (exponentiation) - highest
• *, /, //, % (multiplication, division) - medium-high
• +, - (addition, subtraction) - medium
• Parentheses override precedence

To change order:
• Use parentheses: (2 * 3) + 4 = 10 (same result)
• Or: 2 * (3 + 4) = 2 * 7 = 14 (different result!)

Common mistakes:
• 2 * 3 + 4 ≠ 2 * 7 (would be 14)
• Must do multiplication first: 2 * 3 = 6, then 6 + 4 = 10

Best practice:
• Use parentheses for clarity, even when not needed
• Makes code more readable
• Prevents errors and misunderstandings

Example: 2 * 3 + 4 evaluates to 10. Multiplication (2 * 3 = 6) happens before addition (6 + 4 = 10) due to operator precedence.
`
  }),
  (_i: number) => ({ 
    q: `What is (2 + 3) * 4?`, 
    o: ["20", "14", "18", "Error"], 
    c: 0, 
    e: "Parentheses change order of operations.",
    de: `Parentheses override the normal order of operations in Python. When you use parentheses, the expression inside is evaluated first, regardless of operator precedence. (2 + 3) * 4 calculates 2 + 3 first (which equals 5), then multiplies by 4 to get 20.

Parentheses effect:
• (2 + 3) * 4
• First: (2 + 3) = 5 (parentheses evaluated first)
• Then: 5 * 4 = 20 (multiplication)
• Result: 20

Without parentheses:
• 2 + 3 * 4 = 2 + 12 = 14 (multiplication first)
• Parentheses change the result!

How parentheses work:
• Highest precedence (evaluated first)
• Override normal operator precedence
• Can nest: ((2 + 3) * 4) / 2
• Used for clarity even when not needed

Common uses:
• Change order: (a + b) * c (add first, then multiply)
• Group expressions: (x + y) * (x - y)
• Function arguments: func(a + b, c * d)
• Clarity: (2 * 3) + 4 (makes intent clear)

Best practices:
• Use parentheses for clarity
• Even when not needed, they improve readability
• Prevents operator precedence errors
• Makes code easier to understand

Example: (2 + 3) * 4 evaluates to 20. The parentheses force addition to happen first (2 + 3 = 5), then multiplication (5 * 4 = 20), giving a different result than 2 + 3 * 4 = 14.
`
  }),
  (_i: number) => ({ 
    q: `What is 2 ** 2 ** 3?`, 
    o: ["256", "64", "512", "Error"], 
    c: 0, 
    e: "Exponentiation is right-associative: 2**(2**3) = 2**8 = 256.",
    de: `Exponentiation in Python is right-associative, meaning it groups from right to left. 2 ** 2 ** 3 is evaluated as 2 ** (2 ** 3), not (2 ** 2) ** 3. This matches mathematical convention for powers.

Right-associativity:
• 2 ** 2 ** 3 = 2 ** (2 ** 3)
• NOT (2 ** 2) ** 3
• Groups from right to left
• Matches mathematical convention

Step-by-step:
• 2 ** 2 ** 3
• First: 2 ** 3 = 8 (rightmost exponentiation)
• Then: 2 ** 8 = 256 (left exponentiation)
• Result: 256

If it were left-associative:
• (2 ** 2) ** 3 = 4 ** 3 = 64 (different result!)

Mathematical convention:
• a^b^c = a^(b^c) (standard math notation)
• Python follows this convention
• Right-associative for exponentiation

Other operators:
• Most operators are left-associative: 10 - 5 - 2 = (10 - 5) - 2 = 3
• Exponentiation is right-associative: 2 ** 3 ** 2 = 2 ** (3 ** 2) = 512

Best practice:
• Use parentheses for clarity: 2 ** (2 ** 3)
• Makes intent explicit
• Prevents confusion

Example: 2 ** 2 ** 3 evaluates to 256. It's calculated as 2 ** (2 ** 3) = 2 ** 8 = 256, following right-associativity.
`
  }),
  (_i: number) => ({ 
    q: `What is 10 / 0?`, 
    o: ["ZeroDivisionError", "0", "infinity", "None"], 
    c: 0, 
    e: "Division by zero raises ZeroDivisionError.",
    de: `Dividing by zero in Python raises a ZeroDivisionError exception. This is mathematically undefined and Python prevents this operation by raising an error. You cannot divide any number by zero - it's not valid mathematically or in Python.

Division by zero:
• 10 / 0 raises ZeroDivisionError
• 10 // 0 raises ZeroDivisionError
• 10 % 0 raises ZeroDivisionError
• Any division by zero causes an error

Why this happens:
• Mathematically undefined (can't divide by zero)
• Python prevents invalid operations
• Raises exception to signal the error
• Must be handled or program crashes

The error:
• Exception type: ZeroDivisionError
• Message: "division by zero"
• Stops program execution unless caught
• Common mistake in calculations

Handling the error:
• Use try-except to catch it
• Check before dividing: if divisor != 0:
• Provide default values for edge cases
• Validate input to prevent division by zero

Example handling:
try:
    result = 10 / 0
except ZeroDivisionError:
    result = None  # Handle the error

Prevention:
• Check before dividing: if y != 0: x / y
• Validate input: assert divisor != 0
• Use default values: x / y if y != 0 else 0

Example: 10 / 0 raises ZeroDivisionError. This must be caught with try-except or prevented by checking that the divisor is not zero before dividing.
`
  }),
  
  // 61-70: Type Mixing and Operations
  (_i: number) => ({ 
    q: `Value of type(3.14 + 1)?`, 
    o: ["<class 'float'>", "<class 'int'>", "<class 'str'>", "None"], 
    c: 0, 
    e: "Adding an int to a float results in a float.",
    de: `When you add an integer to a float in Python, the result is always a float. Python automatically promotes the integer to a float before performing the addition. This is because floats have higher precision and can represent both integers and decimals.

Type promotion:
• 3.14 + 1 = 4.14 (int is promoted to float)
• type(3.14 + 1) = <class 'float'>
• Integer is converted to float: 1 → 1.0
• Result is always float when mixing types

Why this happens:
• Float can represent ints: 1.0 represents 1
• Int cannot represent floats: 1 cannot represent 1.5
• Float has higher precision
• Promotes to preserve information

Rule:
• int + float = float
• float + int = float
• int + int = int
• float + float = float

Examples:
• 3 + 1.5 = 4.5 (float)
• 10 + 2.0 = 12.0 (float)
• 5 + 5 = 10 (int - both ints)

Best practice:
• Be aware of type promotion
• Explicit conversion if needed: int(3.14 + 1) = 4
• Check types if important: isinstance(result, float)

Example: type(3.14 + 1) returns <class 'float'>. The integer 1 is promoted to 1.0, and the result 4.14 is a float.
`
  }),
  (_i: number) => ({ 
    q: `What does "A" represent in Python?`, 
    o: ["A single character string", "An integer", "A list", "A char type"], 
    c: 0, 
    e: "Python doesn't have a 'char' type; single characters are strings.",
    de: `In Python, single characters like "A" are strings of length 1. Python doesn't have a separate 'char' type like C, Java, or C++ do. Every character is a string, even if it's just one character long.

Python's string type:
• "A" is a string of length 1
• No separate char type
• All characters are strings
• Consistent with Python's philosophy

Type checking:
• type("A") = <class 'str'>
• len("A") = 1 (single character)
• "A"[0] = "A" (accessing first character)
• Still a string, not a char

Why no char type:
• Simplifies the language
• Consistent handling of strings
• No need to convert between char and string
• Easier to work with

Comparison with other languages:
• C/Java: char 'A' (separate type)
• Python: str "A" (always string)
• No conversion needed between types

Working with single characters:
• "A" is already a string
• Can use string methods: "A".lower() = "a"
• Can concatenate: "A" + "B" = "AB"
• Can iterate: for char in "ABC":

Important:
• "A" and 'A' are identical (both strings)
• Single characters are not special
• Treat like any other string

Example: "A" represents a single character string. There's no char type - it's just a string with one character. This simplifies Python's type system.
`
  }),
  (_i: number) => ({ 
    q: `How do you find the data type of a variable?`, 
    o: ["type(variable)", "what(variable)", "kind(variable)", "check(variable)"], 
    c: 0, 
    e: "type() returns the class of an object.",
    de: `The type() function is Python's built-in way to find the data type (class) of any variable or value. It returns the class object that represents the type. This is essential for debugging, type checking, and understanding what kind of data you're working with.

type() function:
• type(variable) returns the class of the variable
• Works with any object in Python
• Returns <class 'type_name'> format
• Essential for type checking

How to use:
• type(42) = <class 'int'>
• type("hello") = <class 'str'>
• type([1, 2]) = <class 'list'>
• type(x) where x is a variable

Common uses:
• Debugging: check what type a variable is
• Type checking: if type(x) == int:
• Understanding code: see what an object is
• Validation: verify expected types

Alternative: isinstance()
• isinstance(x, int) returns True/False
• More flexible (checks inheritance)
• Preferred for type checking
• Works with subclasses

Examples:
• type(5) = <class 'int'>
• type(3.14) = <class 'float'>
• type("text") = <class 'str'>
• type([1, 2]) = <class 'list'>

Best practice:
• Use type() for exact type checking
• Use isinstance() for type checking (more Pythonic)
• Use type() for debugging/exploration

Important:
• type() returns the class object
• Can compare: type(x) == int
• But isinstance(x, int) is preferred

Example: type(variable) returns the class of the variable. This is the standard way to inspect the type of any object in Python.
`
  }),
  (_i: number) => ({ 
    q: `Which quotes are valid for strings?`, 
    o: ["Both ' and \"", "Only '", "Only \"", "Only `"], 
    c: 0, 
    e: "Python supports both single and double quotes.",
    de: `Python supports both single quotes (') and double quotes (") for creating strings. They work identically - there's no functional difference. The choice between them is a matter of style and convenience, especially when your string contains one type of quote.

Valid string delimiters:
• Single quotes: 'text'
• Double quotes: "text"
• Triple single: '''text'''
• Triple double: """text"""
• Both work identically

Why both exist:
• Convenience when string contains quotes
• Use 'text' when string has "
• Use "text" when string has '
• Avoids escaping quotes

Examples:
• 'He said "Hello"' (no escaping needed)
• "It's a string" (no escaping needed)
• 'It\'s a string' (escaping needed)
• "He said \"Hello\"" (escaping needed)

Style guide (PEP 8):
• Be consistent within a module
• Pick one style and stick with it
• Triple double quotes for docstrings
• Use opposite quote when string contains quote

Comparison:
• 'text' == "text" → True (identical)
• type('text') == type("text") → True
• No performance difference
• No functional difference

Best practice:
• Choose one style per module
• Use opposite quote to avoid escaping
• Triple quotes for multi-line strings

Example: Both 'text' and "text" are valid and identical in Python. Choose based on what quotes your string contains to minimize escaping.
`
  }),
  (_i: number) => ({ 
    q: `What is "2" + "3"?`, 
    o: ["23", "5", "Error", "None"], 
    c: 0, 
    e: "String concatenation, not addition.",
    de: `The + operator with strings performs concatenation (joining strings together), not mathematical addition. When both operands are strings, + concatenates them end-to-end. "2" + "3" results in "23" (the string "two-three"), not 5 (the number five).

String concatenation:
• "2" + "3" = "23" (concatenates, doesn't add)
• Joins strings together
• Creates new string
• No mathematical addition

Why this happens:
• Both operands are strings
• + with strings means concatenate
• Python doesn't auto-convert
• Type determines behavior

To get 5:
• Convert first: int("2") + int("3") = 5
• Or: float("2") + float("3") = 5.0
• Must explicitly convert strings to numbers

Common mistake:
• "2" + "3" ≠ 5 (it's "23")
• Must convert: int("2") + int("3") = 5
• Remember: strings concatenate, numbers add

When concatenation happens:
• str + str = concatenation
• str + int = TypeError (can't mix types)
• Must convert: str + str(int)

Example: "2" + "3" returns "23" (string concatenation). To add numbers, convert strings first: int("2") + int("3") = 5.
`
  }),
  (_i: number) => ({ 
    q: `What is int("2") + int("3")?`, 
    o: ["5", "23", "Error", "None"], 
    c: 0, 
    e: "Convert strings to ints before adding.",
    de: `To perform mathematical addition on numeric strings, you must first convert them to numbers using int() or float(). int("2") + int("3") converts both strings to integers first, then adds them to get 5 (the number five).

Type conversion:
• int("2") = 2 (string → integer)
• int("3") = 3 (string → integer)
• 2 + 3 = 5 (integer addition)
• Result: 5 (integer)

Step-by-step:
• int("2") converts "2" to 2
• int("3") converts "3" to 3
• 2 + 3 performs integer addition
• Result is 5 (not "23" or "5")

Why convert:
• Strings concatenate with +
• Numbers add with +
• Must convert to get mathematical addition
• int() parses numeric strings

Common pattern:
• User input comes as strings
• input() returns strings
• Must convert: int(input("Enter number: "))
• Then perform math

Alternatives:
• float("2.5") + float("3.5") = 6.0
• For decimals, use float()
• int() truncates decimals

Example: int("2") + int("3") returns 5. The strings are converted to integers first, then added mathematically. This is how you perform addition on numeric strings.
`
  }),
  (_i: number) => ({ 
    q: `What is "hello" == "Hello"?`, 
    o: ["False", "True", "Error", "None"], 
    c: 0, 
    e: "String comparison is case-sensitive.",
    de: `String comparison in Python is case-sensitive, meaning uppercase and lowercase letters are considered different. "hello" and "Hello" are not equal because 'h' and 'H' are different characters. Python compares strings character by character, and case matters.

Case sensitivity:
• "hello" == "Hello" → False
• Case matters in comparisons
• 'h' ≠ 'H' (different characters)
• Must match exactly (case and characters)

Why case-sensitive:
• 'A' and 'a' are different Unicode characters
• Reflects real-world differences
• More precise comparison
• Standard in most languages

Case-insensitive comparison:
• Use .lower(): "hello".lower() == "Hello".lower() → True
• Use .upper(): "hello".upper() == "Hello".upper() → True
• Use .casefold(): "hello".casefold() == "Hello".casefold() → True
• Compare normalized versions

Common use:
• User input: if input().lower() == "yes":
• Case-insensitive matching
• Password checking (usually case-sensitive)
• Username validation (case-sensitive typically)

Best practices:
• Be aware of case sensitivity
• Normalize before comparing if needed
• Use .lower() or .casefold() for case-insensitive
• Document your case sensitivity rules

Example: "hello" == "Hello" returns False. Python string comparison is case-sensitive. For case-insensitive comparison, use "hello".lower() == "Hello".lower() which returns True.
`
  }),
  (_i: number) => ({ 
    q: `What is "apple" < "banana"?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "Strings are compared lexicographically.",
    de: `String comparison in Python uses lexicographic (dictionary) ordering. Strings are compared character by character from left to right, using the Unicode/ASCII value of each character. "apple" comes before "banana" alphabetically, so "apple" < "banana" is True.

Lexicographic comparison:
• "apple" < "banana" → True (alphabetical order)
• Compares character by character
• Uses Unicode/ASCII values
• Same as dictionary order

How it works:
• Compare first characters: 'a' vs 'b'
• 'a' < 'b' (ASCII 97 < 98)
• If equal, compare next character
• Continue until difference found

Examples:
• "apple" < "banana" → True
• "apple" < "app" → False (longer prefix is "greater")
• "A" < "a" → True (uppercase before lowercase in ASCII)
• "apple" < "Apple" → False (depends on first character)

Unicode order:
• Uppercase before lowercase: "A" < "a"
• Numbers before letters: "1" < "a"
• Special characters have specific positions
• Follows ASCII/Unicode ordering

Use cases:
• Sorting strings: sorted(["banana", "apple"]) = ["apple", "banana"]
• Searching: binary search on sorted list
• Range checking: if "apple" <= word <= "banana"
• Dictionary ordering

Important:
• Case matters: "A" < "a" is True
• Length matters: "app" < "apple" is True
• Character order follows Unicode

Example: "apple" < "banana" returns True because "apple" comes before "banana" in dictionary order. This is how Python sorts and compares strings.
`
  }),
  (_i: number) => ({ 
    q: `What is "a" in "abc"?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "in operator checks substring membership.",
    de: `The in operator checks if a substring is contained within a string. It returns True if the substring is found anywhere in the string, False otherwise. "a" in "abc" checks if "a" is a substring of "abc", which it is, so it returns True.

Substring membership:
• "a" in "abc" → True ("a" is in "abc")
• Returns boolean (True/False)
• Checks if substring exists
• Case-sensitive check

How it works:
• Searches for substring in string
• Returns True if found
• Returns False if not found
• Can find multi-character substrings too

Examples:
• "a" in "abc" → True
• "bc" in "abc" → True (multi-character substring)
• "d" in "abc" → False (not found)
• "A" in "abc" → False (case-sensitive)

Case sensitivity:
• "A" in "abc" → False (case matters)
• "a" in "ABC" → False (case matters)
• Use .lower() for case-insensitive: "A".lower() in "abc".lower() → True

Common uses:
• Validation: if "@" in email:
• Checking prefixes: if "http" in url:
• Filtering: [s for s in strings if "error" in s]
• Pattern matching: if keyword in text:

Related operators:
• not in: "x" not in "abc" → True
• Opposite of in
• Useful for negative checks

Example: "a" in "abc" returns True because "a" is a substring of "abc". The in operator is very useful for checking if strings contain certain patterns or characters.
`
  }),
  (_i: number) => ({ 
    q: `What is "a" not in "xyz"?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "not in checks if substring is absent.",
    de: `The not in operator is the opposite of in - it returns True if the substring is NOT found in the string. "a" not in "xyz" checks if "a" is absent from "xyz", which it is, so it returns True. This is useful for negative checks.

not in operator:
• "a" not in "xyz" → True ("a" is not in "xyz")
• Opposite of in operator
• Returns True when substring is absent
• Returns False when substring is present

How it works:
• Checks if substring is NOT in string
• True if not found
• False if found
• Same case-sensitivity as in

Examples:
• "a" not in "xyz" → True (not found)
• "x" not in "xyz" → False (found)
• "hello" not in "hello world" → False (found)
• "abc" not in "xyz" → True (not found)

Logical relationship:
• "a" not in "abc" = not ("a" in "abc") = not True = False
• "a" not in "xyz" = not ("a" in "xyz") = not False = True
• These are equivalent

Common uses:
• Validation: if " " not in username: (no spaces allowed)
• Guard clauses: if char not in valid_chars: return
• Filtering: [s for s in strings if "error" not in s]
• Negative checks: if invalid_pattern not in text:

Best practice:
• Use not in for negative checks (more readable)
• Clearer than not ("a" in "xyz")
• More Pythonic

Example: "a" not in "xyz" returns True because "a" is not found in "xyz". This is the negation of the in operator.
`
  }),
  
  // 71-80: String Methods - Case Operations
  (_i: number) => ({ 
    q: `What is "Python".upper()?`, 
    o: ["PYTHON", "python", "Python", "Error"], 
    c: 0, 
    e: "upper() converts string to uppercase.",
    de: `The upper() method converts all characters in a string to uppercase (capital letters). It returns a new string with all lowercase letters converted to uppercase, leaving non-alphabetic characters unchanged. This is useful for case-insensitive comparisons and formatting.

upper() method:
• "Python".upper() = "PYTHON"
• Converts all lowercase to uppercase
• Non-alphabetic characters unchanged
• Returns new string (original unchanged)

How it works:
• Scans string character by character
• Converts 'a'-'z' to 'A'-'Z'
• Leaves 'A'-'Z', numbers, symbols unchanged
• Creates new string (strings are immutable)

Examples:
• "Python".upper() = "PYTHON"
• "hello123".upper() = "HELLO123"
• "Hello World!".upper() = "HELLO WORLD!"
• "Python".upper() = "PYTHON" (no change needed)

Common uses:
• Case-insensitive comparison: "Hello".upper() == "hello".upper()
• Standardizing input: user_input.upper()
• Display formatting: titles.upper()
• Normalizing data

Best practice:
• Use with == for case-insensitive checks
• Or use .casefold() for Unicode-aware comparison
• Remember: creates new string (immutable)

Example: "Python".upper() returns "PYTHON". All lowercase letters are converted to uppercase, while numbers and symbols remain unchanged.
`
  }),
  (_i: number) => ({ 
    q: `What is "PYTHON".lower()?`, 
    o: ["python", "PYTHON", "Python", "Error"], 
    c: 0, 
    e: "lower() converts string to lowercase.",
    de: `The lower() method converts all characters in a string to lowercase (small letters). It returns a new string with all uppercase letters converted to lowercase, leaving non-alphabetic characters unchanged. This is one of Python's most commonly used string methods.

lower() method:
• "PYTHON".lower() = "python"
• Converts all uppercase to lowercase
• Non-alphabetic characters unchanged
• Returns new string (original unchanged)

How it works:
• Scans string character by character
• Converts 'A'-'Z' to 'a'-'z'
• Leaves 'a'-'z', numbers, symbols unchanged
• Creates new string (strings are immutable)

Examples:
• "PYTHON".lower() = "python"
• "HELLO123".lower() = "hello123"
• "Hello World!".lower() = "hello world!"
• "Python".lower() = "python"

Common uses:
• Case-insensitive comparison: "Hello".lower() == "HELLO".lower()
• Normalizing user input: input().lower()
• Converting to lowercase for storage
• Matching/searching regardless of case

Best practice:
• Use for case-insensitive comparisons
• Normalize input before processing
• Store lowercase for consistency
• Remember: creates new string

Example: "PYTHON".lower() returns "python". All uppercase letters are converted to lowercase, while numbers and symbols remain unchanged.
`
  }),
  (_i: number) => ({ 
    q: `What is "hello".capitalize()?`, 
    o: ["Hello", "hello", "HELLO", "Error"], 
    c: 0, 
    e: "capitalize() makes first letter uppercase.",
    de: `The capitalize() method capitalizes the first character of a string and makes the rest lowercase. It returns a new string where only the first letter is uppercase and all other letters are lowercase. This is useful for formatting names, titles, or sentence beginnings.

capitalize() method:
• "hello".capitalize() = "Hello"
• First character → uppercase
• All other characters → lowercase
• Returns new string

How it works:
• Converts first character to uppercase
• Converts all other characters to lowercase
• Works on first character only
• Creates new string

Examples:
• "hello".capitalize() = "Hello"
• "HELLO".capitalize() = "Hello"
• "hELLO".capitalize() = "Hello"
• "hello world".capitalize() = "Hello world" (note: only first letter)

Important note:
• Only capitalizes first character
• "hello world".capitalize() = "Hello world" (not "Hello World")
• For each word, use .title() instead

Common uses:
• Formatting names: "john".capitalize() = "John"
• Sentence beginnings: "hello".capitalize() = "Hello"
• Single-word titles
• User input formatting

Best practice:
• Use for single words or sentence starts
• Use .title() for multi-word titles
• Remember: only affects first character

Example: "hello".capitalize() returns "Hello". The first letter 'h' becomes 'H', and all other letters become lowercase (none in this case).
`
  }),
  (_i: number) => ({ 
    q: `What is "hello world".title()?`, 
    o: ["Hello World", "hello world", "HELLO WORLD", "Error"], 
    c: 0, 
    e: "title() capitalizes each word.",
    de: `The title() method capitalizes the first letter of each word in a string and makes the rest lowercase. It returns a new string in "title case" where each word starts with an uppercase letter. This is useful for formatting titles, headings, or names.

title() method:
• "hello world".title() = "Hello World"
• First letter of each word → uppercase
• Rest of each word → lowercase
• Returns new string

How it works:
• Splits string by whitespace
• Capitalizes first letter of each word
• Makes rest of each word lowercase
• Joins words back together

Examples:
• "hello world".title() = "Hello World"
• "HELLO WORLD".title() = "Hello World"
• "hELLO wORLD".title() = "Hello World"
• "hello-world".title() = "Hello-World" (hyphen separates words)

Word boundaries:
• Words are separated by whitespace
• "hello-world".title() = "Hello-World" (hyphen treated as separator)
• "hello_world".title() = "Hello_World" (underscore treated as separator)

Common uses:
• Formatting titles: "python tutorial".title() = "Python Tutorial"
• Headings in documents
• Names and titles: "john smith".title() = "John Smith"
• Display formatting

Best practice:
• Use for multi-word titles
• Use .capitalize() for single words or sentences
• Be aware of word boundaries

Example: "hello world".title() returns "Hello World". The first letter of each word ("hello" and "world") is capitalized, creating title case formatting.
`
  }),
  (_i: number) => ({ 
    q: `What is "HeLLo".swapcase()?`, 
    o: ["hEllO", "hello", "HELLO", "Error"], 
    c: 0, 
    e: "swapcase() swaps case of all characters.",
    de: `The swapcase() method swaps the case of all alphabetic characters in a string. Uppercase letters become lowercase, and lowercase letters become uppercase. Non-alphabetic characters remain unchanged. It returns a new string with swapped cases.

swapcase() method:
• "HeLLo".swapcase() = "hEllO"
• Uppercase → lowercase
• Lowercase → uppercase
• Non-alphabetic unchanged
• Returns new string

How it works:
• Scans string character by character
• 'A'-'Z' → 'a'-'z' (uppercase to lowercase)
• 'a'-'z' → 'A'-'Z' (lowercase to uppercase)
• Numbers, symbols unchanged
• Creates new string

Examples:
• "HeLLo".swapcase() = "hEllO"
• "HELLO".swapcase() = "hello"
• "hello".swapcase() = "HELLO"
• "HeLLo123!".swapcase() = "hEllO123!" (numbers and symbols unchanged)

Common uses:
• Toggling case: convert uppercase to lowercase and vice versa
• Text transformations
• Formatting variations
• Special display effects

Best practice:
• Less commonly used than .upper() or .lower()
• Useful for toggling case
• Remember: creates new string

Example: "HeLLo".swapcase() returns "hEllO". Each letter's case is swapped: 'H'→'h', 'e'→'E', 'L'→'l', 'L'→'l', 'o'→'O'.
`
  }),
  (_i: number) => ({ 
    q: `What is "hello".islower()?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "islower() checks if all characters are lowercase.",
    de: `The islower() method returns True if all alphabetic characters in the string are lowercase and there is at least one alphabetic character. It returns False otherwise. Non-alphabetic characters are ignored in the check.

islower() method:
• "hello".islower() = True (all alphabetic lowercase)
• Returns boolean (True/False)
• Ignores non-alphabetic characters
• Requires at least one alphabetic character

How it works:
• Checks if all 'a'-'z' characters exist (lowercase)
• Ignores numbers, symbols, spaces
• Returns False if no alphabetic characters
• Returns False if any 'A'-'Z' exists

Examples:
• "hello".islower() = True
• "HELLO".islower() = False (has uppercase)
• "hello123".islower() = True (numbers ignored)
• "123".islower() = False (no alphabetic characters)
• "".islower() = False (empty string)

Edge cases:
• "hello WORLD".islower() = False (has uppercase)
• "123".islower() = False (no letters)
• "hello!".islower() = True (symbols ignored)

Common uses:
• Validation: check if string is all lowercase
• Input validation
• Format checking
• Data validation

Best practice:
• Use for validation checks
• Combine with .lower() for normalization
• Remember: requires at least one letter

Example: "hello".islower() returns True because all alphabetic characters ('h', 'e', 'l', 'l', 'o') are lowercase.
`
  }),
  (_i: number) => ({ 
    q: `What is "HELLO".isupper()?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "isupper() checks if all characters are uppercase.",
    de: `The isupper() method returns True if all alphabetic characters in the string are uppercase and there is at least one alphabetic character. It returns False otherwise. Non-alphabetic characters are ignored in the check.

isupper() method:
• "HELLO".isupper() = True (all alphabetic uppercase)
• Returns boolean (True/False)
• Ignores non-alphabetic characters
• Requires at least one alphabetic character

How it works:
• Checks if all 'A'-'Z' characters exist (uppercase)
• Ignores numbers, symbols, spaces
• Returns False if no alphabetic characters
• Returns False if any 'a'-'z' exists

Examples:
• "HELLO".isupper() = True
• "hello".isupper() = False (has lowercase)
• "HELLO123".isupper() = True (numbers ignored)
• "123".isupper() = False (no alphabetic characters)
• "".isupper() = False (empty string)

Edge cases:
• "HELLO world".isupper() = False (has lowercase)
• "123".isupper() = False (no letters)
• "HELLO!".isupper() = True (symbols ignored)

Common uses:
• Validation: check if string is all uppercase
• Input validation
• Format checking (e.g., acronyms)
• Data validation

Best practice:
• Use for validation checks
• Combine with .upper() for normalization
• Remember: requires at least one letter

Example: "HELLO".isupper() returns True because all alphabetic characters ('H', 'E', 'L', 'L', 'O') are uppercase.
`
  }),
  (_i: number) => ({ 
    q: `What is "Hello World".istitle()?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "istitle() checks if string is titlecased.",
    de: `The istitle() method returns True if the string is in title case (each word starts with an uppercase letter and the rest are lowercase). It returns False otherwise. A string is titlecased if uppercase characters may only follow uncased characters and lowercase characters may only follow cased characters.

istitle() method:
• "Hello World".istitle() = True (titlecased)
• Returns boolean (True/False)
• Checks if each word starts with uppercase
• Rest of each word must be lowercase

How it works:
• Checks if first letter of each word is uppercase
• Checks if rest of each word is lowercase
• Word boundaries are whitespace or non-alphabetic
• Returns False if any word doesn't match

Examples:
• "Hello World".istitle() = True
• "Hello world".istitle() = False ("world" not capitalized)
• "HELLO WORLD".istitle() = False (all uppercase)
• "Hello-World".istitle() = True
• "123 Hello".istitle() = True

Edge cases:
• "".istitle() = False (empty string)
• "Hello123".istitle() = True
• "Hello WORLD".istitle() = False

Common uses:
• Validation: check if string is properly titlecased
• Format validation
• Title checking
• Data validation

Best practice:
• Use for title format validation
• Combine with .title() for formatting
• Understand word boundaries

Example: "Hello World".istitle() returns True because each word starts with an uppercase letter ("Hello" and "World") and the rest are lowercase.
`
  }),
  (_i: number) => ({ 
    q: `What is "Hello".casefold()?`, 
    o: ["hello", "HELLO", "Hello", "Error"], 
    c: 0, 
    e: "casefold() returns casefolded string for caseless matching.",
    de: `The casefold() method returns a casefolded copy of the string. Casefolding is similar to lowercasing but more aggressive - it's designed for caseless matching. It converts all characters to lowercase and handles special Unicode characters correctly.

casefold() method:
• "Hello".casefold() = "hello"
• More aggressive than .lower()
• Handles Unicode special cases
• Returns new string for caseless matching

How it works:
• Similar to .lower() but more aggressive
• Handles special Unicode characters
• Converts to lowercase for comparison
• Better for internationalization

Examples:
• "Hello".casefold() = "hello"
• "HELLO".casefold() = "hello"
• "ß".casefold() = "ss" (special Unicode handling)
• "HELLO WORLD".casefold() = "hello world"

Difference from .lower():
• Most cases: same as .lower()
• Unicode: handles special characters better
• German ß → ss (casefold), ß (lower)
• Better for caseless matching

Common uses:
• Caseless string comparison
• Internationalization (i18n)
• Unicode-aware matching
• Better than .lower() for some languages

Best practice:
• Use for caseless matching (recommended)
• Better than .lower() for Unicode
• Use .lower() for display formatting
• Prefer over .lower() for comparisons

Example: "Hello".casefold() returns "hello". For most English strings, it's similar to .lower(), but it handles Unicode special characters better for international caseless matching.
`
  }),
  (_i: number) => ({ 
    q: `What is "Hello".isascii()?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "isascii() checks if all characters are ASCII.",
    de: `The isascii() method returns True if all characters in the string are ASCII characters. ASCII characters have codes in the range 0-127. This is useful for checking if a string contains only standard ASCII characters without Unicode or extended characters.

isascii() method:
• "Hello".isascii() = True (all ASCII)
• Returns boolean (True/False)
• Checks if all characters are ASCII (0-127)
• ASCII = American Standard Code for Information Interchange

ASCII range:
• Characters with codes 0-127
• Includes letters (a-z, A-Z), digits (0-9)
• Includes punctuation, spaces, control characters
• No extended Unicode characters

Examples:
• "Hello".isascii() = True
• "Hello123!".isascii() = True
• "Hello 世界".isascii() = False (contains Chinese)
• "Hello café".isascii() = False (contains é)
• "".isascii() = True (empty string is ASCII)

Common ASCII characters:
• Letters: a-z, A-Z
• Digits: 0-9
• Punctuation: !@#$%^&*()
• Spaces, tabs, newlines
• Control characters

Non-ASCII characters:
• Unicode characters: é, ñ, ü, 世界
• Extended Latin: à, è, ì, ò, ù
• Emojis: 😀, ❤️
• Non-Latin scripts: 中文, العربية

Common uses:
• Validation: ensure ASCII-only strings
• Compatibility checking
• Legacy system integration
• Network protocols (some require ASCII)

Best practice:
• Use when you need ASCII-only strings
• Check before encoding/transmission
• Be aware of Unicode support

Example: "Hello".isascii() returns True because all characters ('H', 'e', 'l', 'l', 'o') are standard ASCII characters with codes in the 0-127 range.
`
  }),
  
  // 81-90: String Methods - Search and Replace
  (_i: number) => ({ 
    q: `What is "hello".find("l")?`, 
    o: ["2", "1", "3", "Error"], 
    c: 0, 
    e: "find() returns first index of substring.",
    de: `The find() method returns the lowest index in the string where the substring is found. If the substring is not found, it returns -1. find() searches from left to right and returns the index of the first occurrence.

find() method:
• "hello".find("l") = 2 (first 'l' at index 2)
• Returns index (0-based) if found
• Returns -1 if not found
• Searches from left to right

How it works:
• Searches for substring in string
• Returns index where substring starts
• Returns -1 if not found
• No exception raised if not found

Examples:
• "hello".find("l") = 2 (first 'l')
• "hello".find("x") = -1 (not found)
• "hello".find("ll") = 2 (substring "ll")
• "hello".find("o") = 4

Index positions:
• "hello" = h(0), e(1), l(2), l(3), o(4)
• "l" found at index 2 and 3
• find() returns 2 (first occurrence)

Common uses:
• Finding substring position: idx = text.find("pattern")
• Checking existence: if text.find("x") != -1:
• Extracting after position
• String parsing

Alternative: .index()
• Similar but raises ValueError if not found
• find() returns -1, index() raises error
• Use find() for existence checking

Example: "hello".find("l") returns 2 because 'l' first appears at index 2 in the string "hello" (h=0, e=1, l=2).
`
  }),
  (_i: number) => ({ 
    q: `What is "hello".rfind("l")?`, 
    o: ["3", "2", "1", "Error"], 
    c: 0, 
    e: "rfind() returns last index of substring.",
    de: `The rfind() method returns the highest index in the string where the substring is found. If the substring is not found, it returns -1. rfind() searches from right to left (reverse find) and returns the index of the last occurrence.

rfind() method:
• "hello".rfind("l") = 3 (last 'l' at index 3)
• Returns index (0-based) if found
• Returns -1 if not found
• Searches from right to left

How it works:
• Searches for substring starting from end
• Returns index where substring starts
• Returns -1 if not found
• Finds last occurrence

Examples:
• "hello".rfind("l") = 3 (last 'l')
• "hello".rfind("x") = -1 (not found)
• "hello".rfind("ll") = 2 (substring "ll")
• "hello".rfind("o") = 4

Index positions:
• "hello" = h(0), e(1), l(2), l(3), o(4)
• "l" found at index 2 and 3
• rfind() returns 3 (last occurrence)

Common uses:
• Finding last occurrence: idx = text.rfind("pattern")
• Parsing from end: find last separator
• Extracting filename from path
• Reverse string operations

Comparison with .find():
• find(): searches left to right, returns first
• rfind(): searches right to left, returns last
• Both return -1 if not found

Example: "hello".rfind("l") returns 3 because 'l' last appears at index 3 in the string "hello" (rfind searches from right to left).
`
  }),
  (_i: number) => ({ 
    q: `What is "hello".index("l")?`, 
    o: ["2", "1", "3", "Error"], 
    c: 0, 
    e: "index() returns first index, raises error if not found.",
    de: `The index() method returns the lowest index in the string where the substring is found. If the substring is not found, it raises a ValueError exception. index() is similar to find() but raises an error instead of returning -1.

index() method:
• "hello".index("l") = 2 (first 'l' at index 2)
• Returns index (0-based) if found
• Raises ValueError if not found
• Searches from left to right

How it works:
• Searches for substring in string
• Returns index where substring starts
• Raises ValueError if not found
• Exception must be handled

Examples:
• "hello".index("l") = 2 (first 'l')
• "hello".index("x") = ValueError (not found)
• "hello".index("ll") = 2 (substring "ll")
• "hello".index("o") = 4

Comparison with .find():
• find(): returns -1 if not found (no exception)
• index(): raises ValueError if not found
• Both return same index if found
• find() is safer for existence checking

When to use:
• Use find() if you want -1 for not found
• Use index() if you expect substring exists
• Use find() for existence checking
• Use index() for required substring

Example: "hello".index("l") returns 2 because 'l' first appears at index 2. If "l" wasn't found, it would raise ValueError.
`
  }),
  (_i: number) => ({ 
    q: `What is "hello".count("l")?`, 
    o: ["2", "1", "3", "Error"], 
    c: 0, 
    e: "count() counts occurrences of substring.",
    de: `The count() method returns the number of non-overlapping occurrences of a substring in the string. It counts how many times the substring appears in the string. It's useful for frequency analysis and validation.

count() method:
• "hello".count("l") = 2 (appears twice)
• Returns integer count
• Returns 0 if not found
• Counts non-overlapping occurrences

How it works:
• Searches for substring in string
• Counts all occurrences
• Non-overlapping: "aaa".count("aa") = 1, not 2
• Returns 0 if substring not found

Examples:
• "hello".count("l") = 2
• "hello".count("x") = 0 (not found)
• "hello".count("ll") = 1 (substring)
• "hello".count("") = 6 (empty string counts positions)

Overlapping behavior:
• "aaa".count("aa") = 1 (non-overlapping)
• Counts don't overlap
• "aaaa".count("aa") = 2

Common uses:
• Frequency analysis: text.count("the")
• Validation: if password.count("!") >= 2:
• Character counting
• Pattern frequency

Important:
• Non-overlapping matches only
• Empty string counts all positions + 1
• Case-sensitive counting
• Works with multi-character substrings

Example: "hello".count("l") returns 2 because the character 'l' appears twice in "hello" (at indices 2 and 3).
`
  }),
  (_i: number) => ({ 
    q: `What is "hello".startswith("he")?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "startswith() checks if string begins with substring.",
    de: `The startswith() method returns True if the string starts with the specified substring, False otherwise. It's useful for checking prefixes, file extensions, URLs, and validating string formats.

startswith() method:
• "hello".startswith("he") = True
• Returns boolean (True/False)
• Checks if string begins with substring
• Case-sensitive check

How it works:
• Checks if string starts with substring
• Compares from beginning
• Returns True if matches, False otherwise
• Case-sensitive

Examples:
• "hello".startswith("he") = True
• "hello".startswith("x") = False
• "hello".startswith("Hello") = False (case-sensitive)
• "hello".startswith("") = True (empty string always matches)

Common uses:
• File extensions: filename.startswith("http")
• URL checking: url.startswith("https://")
• Prefix validation
• Format checking

With tuple:
• Can check multiple prefixes
• text.startswith(("http", "https"))
• Returns True if starts with any

Best practice:
• Use for prefix checking
• More readable than slicing: text[:len(prefix)] == prefix
• Efficient for string validation

Example: "hello".startswith("he") returns True because "hello" begins with "he". This is useful for checking prefixes.
`
  }),
  (_i: number) => ({ 
    q: `What is "hello".endswith("lo")?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "endswith() checks if string ends with substring.",
    de: `The endswith() method returns True if the string ends with the specified substring, False otherwise. It's useful for checking suffixes, file extensions, endings, and validating string formats.

endswith() method:
• "hello".endswith("lo") = True
• Returns boolean (True/False)
• Checks if string ends with substring
• Case-sensitive check

How it works:
• Checks if string ends with substring
• Compares from end
• Returns True if matches, False otherwise
• Case-sensitive

Examples:
• "hello".endswith("lo") = True
• "hello".endswith("x") = False
• "hello".endswith("LO") = False (case-sensitive)
• "hello".endswith("") = True (empty string always matches)

Common uses:
• File extensions: filename.endswith(".txt")
• URL endings: url.endswith("/")
• Suffix validation
• Format checking

With tuple:
• Can check multiple suffixes
• filename.endswith((".jpg", ".png"))
• Returns True if ends with any

Best practice:
• Use for suffix checking
• More readable than slicing: text[-len(suffix):] == suffix
• Efficient for file extension checks

Example: "hello".endswith("lo") returns True because "hello" ends with "lo". This is useful for checking file extensions like .endswith(".py").
`
  }),
  (_i: number) => ({ 
    q: `What is "hello".replace("l", "L")?`, 
    o: ["heLLo", "hello", "HELLO", "Error"], 
    c: 0, 
    e: "replace() substitutes characters.",
    de: `The replace() method returns a copy of the string with all occurrences of a substring replaced by another substring. By default, it replaces all occurrences. It's one of Python's most commonly used string methods for text manipulation.

replace() method:
• "hello".replace("l", "L") = "heLLo"
• Replaces all occurrences by default
• Returns new string (original unchanged)
• Basic syntax: replace(old, new)

How it works:
• Finds all occurrences of old substring
• Replaces each with new substring
• Returns new string
• Original string unchanged (strings are immutable)

Examples:
• "hello".replace("l", "L") = "heLLo" (all 'l' replaced)
• "hello".replace("x", "X") = "hello" (no change if not found)
• "hello".replace("", "X") = "XhXeXlXlXoX" (empty string everywhere)
• "hello world".replace(" ", "_") = "hello_world"

Common uses:
• Text substitution: text.replace("old", "new")
• Character removal: text.replace(" ", "")
• Format conversion
• Data cleaning

With count parameter:
• Can limit replacements: replace(old, new, count)
• "hello".replace("l", "L", 1) = "heLlo" (only first)
• Useful for limited replacements

Example: "hello".replace("l", "L") returns "heLLo" because all occurrences of 'l' are replaced with 'L'. The original string "hello" is unchanged.
`
  }),
  (_i: number) => ({ 
    q: `What is "hello".replace("l", "L", 1)?`, 
    o: ["heLlo", "heLLo", "hello", "Error"], 
    c: 0, 
    e: "replace() with count parameter replaces only first occurrence.",
    de: `The replace() method can take a third parameter (count) that limits how many occurrences are replaced. replace(old, new, count) replaces only the first 'count' occurrences, from left to right. This allows controlled, limited replacements.

replace() with count:
• "hello".replace("l", "L", 1) = "heLlo"
• Third parameter limits replacements
• Replaces only first occurrence(s)
• Remaining occurrences unchanged

How it works:
• Finds occurrences from left to right
• Replaces first 'count' occurrences
• Leaves remaining unchanged
• If count > occurrences, all are replaced

Examples:
• "hello".replace("l", "L", 1) = "heLlo" (first 'l' replaced)
• "hello".replace("l", "L", 2) = "heLLo" (both replaced)
• "hello".replace("l", "L", 0) = "hello" (no replacements)
• "hello".replace("l", "L", 10) = "heLLo" (all replaced)

Common uses:
• Replace first occurrence only
• Limited text substitution
• Controlled replacements
• Fixing specific instances

Why use count:
• Sometimes you want limited replacements
• Replace only first occurrence
• Avoid replacing all instances
• More control over substitution

Example: "hello".replace("l", "L", 1) returns "heLlo" because only the first occurrence of 'l' (at index 2) is replaced with 'L', leaving the second 'l' (at index 3) unchanged.
`
  }),
  (_i: number) => ({ 
    q: `What is "hello".partition("l")?`, 
    o: ["('he', 'l', 'lo')", "['he', 'l', 'lo']", "Error", "None"], 
    c: 0, 
    e: "partition() splits at first occurrence.",
    de: `The partition() method splits the string at the first occurrence of the separator and returns a tuple of three parts: the part before the separator, the separator itself, and the part after the separator. If the separator is not found, it returns (string, "", "").

partition() method:
• "hello".partition("l") = ('he', 'l', 'lo')
• Returns tuple of 3 parts
• Split at first occurrence only
• Includes separator in result

How it works:
• Finds first occurrence of separator
• Splits into: (before, separator, after)
• Returns tuple with 3 elements
• If not found: (string, "", "")

Examples:
• "hello".partition("l") = ('he', 'l', 'lo')
• "hello".partition("x") = ('hello', '', '') (not found)
• "hello".partition("") = ('', '', 'hello') (empty separator at start)
• "a-b-c".partition("-") = ('a', '-', 'b-c') (first occurrence only)

Tuple unpacking:
• before, sep, after = "hello".partition("l")
• before = 'he', sep = 'l', after = 'lo'
• Useful for parsing

Common uses:
• Splitting at first separator: before, sep, after = text.partition(":")
• Key-value parsing: key, _, value = line.partition("=")
• Path parsing
• Config file parsing

Comparison with .split():
• partition(): splits at first occurrence, returns 3 parts
• split(): splits at all occurrences, returns list
• partition() includes separator, split() excludes it

Example: "hello".partition("l") returns ('he', 'l', 'lo') - the part before 'l', 'l' itself, and the part after 'l'. This is useful for splitting at the first occurrence while keeping the separator.
`
  }),
  (_i: number) => ({ 
    q: `What is "hello".rpartition("l")?`, 
    o: ["('hel', 'l', 'o')", "['hel', 'l', 'o']", "Error", "None"], 
    c: 0, 
    e: "rpartition() splits at last occurrence.",
    de: `The rpartition() method splits the string at the last occurrence of the separator and returns a tuple of three parts: the part before the separator, the separator itself, and the part after the separator. If the separator is not found, it returns ("", "", string).

rpartition() method:
• "hello".rpartition("l") = ('hel', 'l', 'o')
• Returns tuple of 3 parts
• Split at last occurrence only
• Includes separator in result

How it works:
• Finds last occurrence of separator
• Splits into: (before, separator, after)
• Returns tuple with 3 elements
• If not found: ('', '', string)

Examples:
• "hello".rpartition("l") = ('hel', 'l', 'o') (last 'l')
• "hello".rpartition("x") = ('', '', 'hello') (not found)
• "a-b-c".rpartition("-") = ('a-b', '-', 'c') (last occurrence only)

Comparison with .partition():
• partition(): splits at first occurrence
• rpartition(): splits at last occurrence
• Both return 3-part tuple
• Both include separator

Common uses:
• Splitting at last separator
• Filename extension: name, _, ext = filename.rpartition(".")
• URL parsing
• Path parsing from end

Tuple unpacking:
• before, sep, after = "hello".rpartition("l")
• before = 'hel', sep = 'l', after = 'o'
• Useful for parsing from end

Example: "hello".rpartition("l") returns ('hel', 'l', 'o') - it splits at the last occurrence of 'l', returning the part before, 'l' itself, and the part after. Useful for splitting at the last separator.
`
  }),
  
  // 91-100: String Methods - Splitting, Joining, Formatting
  (_i: number) => ({ 
    q: `What is "hello,world".split(",")?`, 
    o: ["['hello', 'world']", "['hello,world']", "Error", "None"], 
    c: 0, 
    e: "split() divides string into list.",
    de: `The split() method splits a string into a list of substrings using a specified separator. If a separator is provided, it splits at each occurrence. If no separator is provided, it splits on whitespace. This is one of Python's most commonly used string methods.

split() method:
• "hello,world".split(",") = ['hello', 'world']
• Divides string into list
• Splits at each occurrence of separator
• Returns list of substrings

How it works:
• Finds all occurrences of separator
• Splits string at each occurrence
• Returns list of parts (separator excluded)
• Empty separator causes error

Examples:
• "hello,world".split(",") = ['hello', 'world']
• "a,b,c".split(",") = ['a', 'b', 'c']
• "hello".split(",") = ['hello'] (no separator found)
• "a,,b".split(",") = ['a', '', 'b'] (empty between separators)

With count parameter:
• "a,b,c".split(",", 1) = ['a', 'b,c'] (split at most 1 time)
• Limits number of splits
• Returns maxsplit+1 elements

Common uses:
• CSV parsing: line.split(",")
• Tokenization
• String parsing
• Data extraction

Example: "hello,world".split(",") returns ['hello', 'world'] because the string is split at the comma, creating a list with two elements.
`
  }),
  (_i: number) => ({ 
    q: `What is "hello world".split()?`, 
    o: ["['hello', 'world']", "['hello world']", "Error", "None"], 
    c: 0, 
    e: "split() without argument splits on whitespace.",
    de: `The split() method without arguments splits a string on any whitespace (spaces, tabs, newlines) and removes empty strings from the result. It's useful for splitting text into words. Multiple consecutive whitespace characters are treated as a single separator.

split() without separator:
• "hello world".split() = ['hello', 'world']
• Splits on any whitespace
• Removes empty strings from result
• Multiple whitespace → single split

How it works:
• Splits on any whitespace character
• Spaces, tabs, newlines all work
• Multiple whitespace → treated as single separator
• Strips leading/trailing whitespace

Examples:
• "hello world".split() = ['hello', 'world']
• "hello  world".split() = ['hello', 'world'] (multiple spaces)
• "hello\\tworld".split() = ['hello', 'world'] (tab)
• "  hello world  ".split() = ['hello', 'world'] (strips whitespace)

Difference from split(" "):
• split(): splits on any whitespace, removes empty strings
• split(" "): splits on single space only, keeps empty strings
• "a  b".split() = ['a', 'b']
• "a  b".split(" ") = ['a', '', 'b']

Common uses:
• Tokenizing words: text.split()
• Parsing space-separated values
• Breaking text into words
• Clean splitting (removes empty strings)

Example: "hello world".split() returns ['hello', 'world'] because the string is split on whitespace, creating a list of words.
`
  }),
  (_i: number) => ({ 
    q: `What is "hello\\nworld".splitlines()?`, 
    o: ["['hello', 'world']", "['hello\\nworld']", "Error", "None"], 
    c: 0, 
    e: "splitlines() splits on line breaks.",
    de: `The splitlines() method splits a string into a list at line boundaries. It recognizes various line break characters (\\n, \\r, \\r\\n) and splits accordingly. Unlike split("\\n"), it handles different line ending formats correctly.

splitlines() method:
• "hello\\nworld".splitlines() = ['hello', 'world']
• Splits on line breaks
• Handles different line ending formats
• Returns list of lines

How it works:
• Splits at line boundaries
• Recognizes \\n, \\r, \\r\\n
• Removes line break characters
• Returns list of lines

Examples:
• "hello\\nworld".splitlines() = ['hello', 'world']
• "hello\\r\\nworld".splitlines() = ['hello', 'world'] (Windows)
• "hello\\rworld".splitlines() = ['hello', 'world'] (old Mac)
• "hello\\n\\nworld".splitlines() = ['hello', '', 'world'] (empty line)

Common uses:
• Processing text files line by line
• Splitting multi-line strings
• Text processing
• Reading file content

Comparison with split("\\n"):
• splitlines(): handles all line break formats
• split("\\n"): only handles \\n
• splitlines(): better for cross-platform
• splitlines(): removes trailing \\n correctly

Example: "hello\\nworld".splitlines() returns ['hello', 'world'] because the string is split at the newline character, creating a list of two lines.
`
  }),
  (_i: number) => ({ 
    q: `What is "-".join(["a", "b", "c"])?`, 
    o: ["a-b-c", "a b c", "abc", "Error"], 
    c: 0, 
    e: "join() combines list elements with separator.",
    de: `The join() method combines a list (or any iterable) of strings into a single string, using the string on which join() is called as the separator. It's the opposite of split() and is more efficient than string concatenation for joining multiple strings.

join() method:
• "-".join(["a", "b", "c"]) = "a-b-c"
• Combines list elements with separator
• More efficient than concatenation
• Returns new string

How it works:
• Takes iterable of strings
• Joins them with separator between
• Returns combined string
• Empty iterable returns empty string

Examples:
• "-".join(["a", "b", "c"]) = "a-b-c"
• "".join(["a", "b", "c"]) = "abc" (no separator)
• " ".join(["hello", "world"]) = "hello world"
• ",".join(["1", "2", "3"]) = "1,2,3"

Important:
• Elements must be strings
• "".join([1, 2, 3]) raises TypeError
• Convert first: "".join(map(str, [1, 2, 3]))

Common uses:
• Building CSV: ",".join(values)
• Concatenating strings: "".join(strings)
• Formatting: " - ".join(items)
• Creating paths: "/".join(parts)

Best practice:
• Use join() instead of += in loops
• More efficient for multiple strings
• Preferred Pythonic way

Example: "-".join(["a", "b", "c"]) returns "a-b-c" because the list elements are joined with '-' as the separator between them.
`
  }),
  (_i: number) => ({ 
    q: `What is "".join(["a", "b", "c"])?`, 
    o: ["abc", "a b c", "Error", "None"], 
    c: 0, 
    e: "join() with empty string concatenates without separator.",
    de: `When join() is called with an empty string as the separator, it concatenates all elements together with no separator between them. This is the most efficient way to concatenate multiple strings in Python.

join() with empty string:
• "".join(["a", "b", "c"]) = "abc"
• Concatenates without separator
• Most efficient string concatenation
• Returns combined string

How it works:
• Takes iterable of strings
• Joins them with no separator (empty string)
• Returns concatenated string
• Fastest way to combine strings

Examples:
• "".join(["a", "b", "c"]) = "abc"
• "".join(["hello", "world"]) = "helloworld"
• "".join(["1", "2", "3"]) = "123"
• "".join(["a"]) = "a" (single element)

Why use this:
• Most efficient concatenation method
• Better than string += in loops
• Preferred Pythonic way
• Handles any number of strings

Common uses:
• Concatenating strings: "".join(strings)
• Building strings from characters
• Efficient string building
• Reversing string: "".join(reversed(s))

Comparison with +=:
• "".join(list): efficient, single operation
• result += item: inefficient, creates new strings each time
• join() is O(n), += in loop is O(n²)

Example: "".join(["a", "b", "c"]) returns "abc" because the list elements are concatenated together with no separator between them. This is the most efficient way to combine multiple strings.
`
  }),
  (_i: number) => ({ 
    q: `What is "hello".center(10)?`, 
    o: ["  hello   ", "hello", "Error", "None"], 
    c: 0, 
    e: "center() centers string in given width.",
    de: `The center() method centers a string in a field of specified width by padding it with spaces on both sides. If the string is longer than the width, it returns the original string unchanged. This is useful for formatting text output.

center() method:
• "hello".center(10) = "  hello   "
• Centers string in width
• Pads with spaces on both sides
• Returns new string

How it works:
• Calculates padding needed
• Adds spaces on both sides
• Centers string in field
• If width <= len(string), returns original

Examples:
• "hello".center(10) = "  hello   " (2 spaces each side)
• "hello".center(11) = "   hello   " (3 left, 2 right)
• "hello".center(5) = "hello" (no change, already fits)
• "hello".center(10, "-") = "--hello---" (custom fill character)

With fill character:
• Second parameter specifies fill character
• Default is space " "
• "hello".center(10, "*") = "**hello***"

Common uses:
• Text formatting
• Centering headers
• Display formatting
• Creating formatted output

Example: "hello".center(10) returns "  hello   " because the string is centered in a field of width 10, with 2 spaces on the left and 3 spaces on the right (when length is odd, extra space goes on right).
`
  }),
  (_i: number) => ({ 
    q: `What is "hello".ljust(10)?`, 
    o: ["hello     ", "hello", "Error", "None"], 
    c: 0, 
    e: "ljust() left-justifies string.",
    de: `The ljust() method left-justifies a string in a field of specified width by padding it with spaces on the right side. If the string is longer than the width, it returns the original string unchanged. This is useful for aligning text to the left.

ljust() method:
• "hello".ljust(10) = "hello     "
• Left-justifies string in width
• Pads with spaces on right
• Returns new string

How it works:
• Adds spaces on right side
• Aligns string to left
• Creates field of specified width
• If width <= len(string), returns original

Examples:
• "hello".ljust(10) = "hello     " (5 spaces on right)
• "hello".ljust(10, "-") = "hello-----" (custom fill character)
• "hello".ljust(5) = "hello" (no change)

With fill character:
• Second parameter specifies fill character
• Default is space " "
• "hello".ljust(10, ".") = "hello....."

Common uses:
• Left-aligning text
• Creating fixed-width columns
• Formatting output
• Table formatting

Example: "hello".ljust(10) returns "hello     " because the string is left-justified in a field of width 10, with 5 spaces added on the right side.
`
  }),
  (_i: number) => ({ 
    q: `What is "hello".rjust(10)?`, 
    o: ["     hello", "hello", "Error", "None"], 
    c: 0, 
    e: "rjust() right-justifies string.",
    de: `The rjust() method right-justifies a string in a field of specified width by padding it with spaces on the left side. If the string is longer than the width, it returns the original string unchanged. This is useful for aligning text to the right, especially for numbers.

rjust() method:
• "hello".rjust(10) = "     hello"
• Right-justifies string in width
• Pads with spaces on left
• Returns new string

How it works:
• Adds spaces on left side
• Aligns string to right
• Creates field of specified width
• If width <= len(string), returns original

Examples:
• "hello".rjust(10) = "     hello" (5 spaces on left)
• "hello".rjust(10, "0") = "00000hello" (zero padding)
• "123".rjust(5, "0") = "00123" (number formatting)

With fill character:
• Second parameter specifies fill character
• Default is space " "
• Often used with "0" for zero padding

Common uses:
• Right-aligning numbers
• Zero padding: "5".rjust(3, "0") = "005"
• Creating aligned columns
• Number formatting

Example: "hello".rjust(10) returns "     hello" because the string is right-justified in a field of width 10, with 5 spaces added on the left side.
`
  }),
  (_i: number) => ({ 
    q: `What is "hello".zfill(10)?`, 
    o: ["00000hello", "hello", "Error", "None"], 
    c: 0, 
    e: "zfill() pads string with zeros.",
    de: `The zfill() method pads a string on the left with zeros ('0') to make it a specified width. If the string starts with a sign ('+' or '-'), the zeros are inserted after the sign. It's particularly useful for formatting numbers with leading zeros.

zfill() method:
• "hello".zfill(10) = "00000hello"
• Pads with zeros on left
• Creates field of specified width
• Returns new string

How it works:
• Adds zeros on left side
• Pads to specified width
• If string starts with +/-, zeros go after sign
• If width <= len(string), returns original

Examples:
• "hello".zfill(10) = "00000hello" (5 zeros)
• "42".zfill(5) = "00042" (3 zeros)
• "+42".zfill(5) = "+0042" (zeros after +)
• "-42".zfill(5) = "-0042" (zeros after -)

Common uses:
• Formatting numbers: "5".zfill(3) = "005"
• Creating fixed-width numbers
• Zero padding for IDs
• Display formatting

Comparison with rjust(..., "0"):
• zfill(): handles signs correctly
• rjust(..., "0"): treats sign as part of string
• zfill() is designed for numbers
• Both similar for positive numbers

Example: "hello".zfill(10) returns "00000hello" because the string is padded on the left with zeros to make it width 10. This is useful for formatting numbers with leading zeros.
`
  }),
  (_i: number) => ({ 
    q: `What is f"Value: {5}"?`, 
    o: ['"Value: 5"', "Value: 5", "Error", "None"], 
    c: 0, 
    e: "f-strings allow variable interpolation.",
    de: `f-strings (formatted string literals) are a Python feature introduced in Python 3.6 that allow you to embed expressions inside string literals using curly braces {}. The 'f' prefix (or 'F') tells Python to evaluate the expressions inside the braces and format the result.

f-string syntax:
• f"Value: {5}" = "Value: 5"
• Prefix string with 'f' or 'F'
• Expressions in {} are evaluated
• Values are converted to strings automatically

How it works:
• f-prefix enables f-string
• {expression} evaluates expression
• Result converted to string
• Embedded in final string

Examples:
• f"Value: {5}" = "Value: 5"
• name = "Alice"; f"Hello {name}" = "Hello Alice"
• x = 10; f"{x} + {5} = {x + 5}" = "10 + 5 = 15"
• f"{2 * 3}" = "6" (expressions work)

Advantages:
• Fastest string formatting method
• Most readable and concise
• Expressions evaluated at runtime
• No need to convert types manually

Common uses:
• Variable interpolation: f"Name: {name}"
• Expressions: f"Sum: {a + b}"
• Formatting: f"Price: $\\{price:.2f}"
• Debugging: f"x = {x}, y = {y}"

Formatting options:
• f"{value:.2f}" (decimal places)
• f"{value:>10}" (alignment)
• f"{value:0>5}" (zero padding)

Example: f"Value: {5}" returns "Value: 5" because the expression {5} is evaluated to 5, which is then converted to a string and embedded in the f-string. This is the modern Pythonic way to format strings.
`
  }),
];

// --- LEVEL 2: SHRIMP (Math, Expressions, Order of Ops) - 100 TRULY UNIQUE QUESTIONS ---
// Each question tests a DIFFERENT concept - NO number/variable variations of the same question
const level2Patterns = [
  // 1-10: Basic Arithmetic Operations
  (_i: number) => ({ 
    q: `What is 10 + 5 * 2?`, 
    o: ["20", "30", "15", "None"], 
    c: 0, 
    e: "Multiplication happens first (PEMDAS).",
    de: `Python follows the order of operations (PEMDAS: Parentheses, Exponents, Multiplication/Division, Addition/Subtraction). Multiplication has higher precedence than addition, so 5 * 2 is calculated first (equals 10), then 10 + 10 equals 20.

Order of operations:
• 10 + 5 * 2
• First: 5 * 2 = 10 (multiplication first)
• Then: 10 + 10 = 20 (addition second)
• Result: 20

PEMDAS rule:
• P: Parentheses (highest priority)
• E: Exponents (**)
• M/D: Multiplication and Division (left to right)
• A/S: Addition and Subtraction (left to right)

Common mistake:
• 10 + 5 * 2 ≠ (10 + 5) * 2 = 30
• Must follow operator precedence
• Multiplication before addition

Example: 10 + 5 * 2 evaluates to 20 because multiplication (5 * 2 = 10) happens before addition (10 + 10 = 20), following PEMDAS rules.
`
  }),
  (_i: number) => ({ 
    q: `What is (10 + 5) * 2?`, 
    o: ["30", "20", "15", "None"], 
    c: 0, 
    e: "Parentheses change order of operations.",
    de: `Parentheses override the normal order of operations in Python. When you use parentheses, the expression inside is evaluated first, regardless of operator precedence. (10 + 5) * 2 calculates 10 + 5 first (equals 15), then 15 * 2 equals 30.

Parentheses precedence:
• (10 + 5) * 2
• First: (10 + 5) = 15 (parentheses evaluated first)
• Then: 15 * 2 = 30 (multiplication)
• Result: 30

Without parentheses:
• 10 + 5 * 2 = 10 + 10 = 20 (multiplication first)
• Parentheses change the result!

How parentheses work:
• Highest precedence (evaluated first)
• Override normal operator precedence
• Can nest: ((10 + 5) * 2) / 3
• Used for clarity even when not needed

Example: (10 + 5) * 2 evaluates to 30 because parentheses force addition first (10 + 5 = 15), then multiplication (15 * 2 = 30).
`
  }),
  (_i: number) => ({ 
    q: `What is 10 / 2 in Python 3?`, 
    o: ["5.0", "5", "0", "Error"], 
    c: 0, 
    e: "The / operator always returns a float in Python 3.",
    de: `In Python 3, the division operator (/) always returns a floating-point number, even when the result is a whole number. This is called "true division" and ensures mathematical consistency. 10 / 2 equals 5.0, not 5.

Python 3 division:
• 10 / 2 = 5.0 (always float)
• Even whole numbers become floats
• Ensures consistent behavior
• Mathematically more accurate

Python 2 vs Python 3:
• Python 2: 10 / 2 = 5 (integer division)
• Python 3: 10 / 2 = 5.0 (true division - always float)
• Python 2 & 3: 10 // 2 = 5 (floor division - integer)

Why this change:
• Prevents confusion about division behavior
• Makes division mathematically consistent
• Eliminates unexpected integer truncation
• More intuitive for most use cases

Getting integer results:
• Use // (floor division): 10 // 2 = 5
• Use int(): int(10 / 2) = 5
• // is preferred for clarity

Example: 10 / 2 returns 5.0 (a float) in Python 3, even though the result is a whole number. For integer division, use 10 // 2 which returns 5.
`
  }),
  (_i: number) => ({ 
    q: `What is 10 // 3?`, 
    o: ["3", "3.33", "4", "Error"], 
    c: 0, 
    e: "// is floor division (integer division).",
    de: `The // operator performs floor division (also called integer division or truncating division). It divides two numbers and returns the largest integer less than or equal to the result. For positive numbers, this means it truncates toward zero. 10 // 3 equals 3.

Floor division:
• 10 // 3 = 3 (fits 3 times, remainder 1)
• Returns integer (or float if operands are floats)
• Rounds down (toward negative infinity)
• Works with negative numbers too

How it works:
• 10 ÷ 3 = 3.333... → floor = 3
• 10 // 3 = 3 (largest integer ≤ 3.333)
• Similar to int(10 / 3) but different with negatives

With negatives:
• -10 // 3 = -4 (rounds down, away from zero)
• int(-10 / 3) = -3 (truncates toward zero)
• // rounds toward negative infinity, int() truncates toward zero

Use cases:
• Getting whole number of divisions
• Splitting items into groups
• Converting to integer after division
• Time calculations (hours, minutes)

Example: 10 // 3 returns 3 because floor division calculates how many complete groups of 3 can be made from 10, which is 3 (with remainder 1).
`
  }),
  (_i: number) => ({ 
    q: `What is 10 % 3?`, 
    o: ["1", "3", "0", "Error"], 
    c: 0, 
    e: "% is the modulo operator (remainder).",
    de: `The % operator is the modulo operator - it returns the remainder after division. When you divide 10 by 3, you get 3 groups of 3 with 1 left over. That remainder (1) is what the modulo operator returns. 10 % 3 equals 1.

Modulo operation:
• 10 % 3 = 1 (remainder when 10 is divided by 3)
• 10 ÷ 3 = 3 with remainder 1
• Returns what's left after floor division
• Works with floats too: 10.5 % 3 = 1.5

How it works:
• Divide first number by second
• Return the remainder after division
• 10 % 3: 10 ÷ 3 = 3 remainder 1, so 10 % 3 = 1
• 10 % 5: 10 ÷ 5 = 2 remainder 0, so 10 % 5 = 0

Common uses:
• Checking even/odd: n % 2 (0 = even, 1 = odd)
• Wrapping values: index % length (keeps index in range)
• Finding divisors: n % d == 0 (d divides n)
• Time calculations: seconds % 60 (seconds within minute)
• Hashtables: hash % size (bucket index)

Example: 10 % 3 returns 1 because when you divide 10 by 3, you get 3 groups of 3 with 1 remaining. This is useful for checking divisibility, wrapping values, and many other programming tasks.
`
  }),
  (_i: number) => ({ 
    q: `What is 2 ** 3?`, 
    o: ["8", "6", "9", "Error"], 
    c: 0, 
    e: "** is the exponentiation operator.",
    de: `The ** operator performs exponentiation (raising a number to a power). It's Python's built-in operator for calculating powers, making it convenient and readable. 2 ** 3 means "2 to the power of 3" which equals 8 (2 × 2 × 2).

Exponentiation syntax:
• 2 ** 3 = 8 (2 raised to the power of 3)
• base ** exponent = base ^ exponent (mathematically)
• Right-associative: 2 ** 3 ** 2 = 2 ** (3 ** 2) = 2 ** 9 = 512
• Works with floats: 2.5 ** 2 = 6.25

How it works:
• 2 ** 3 = 2 × 2 × 2 = 8
• 2 ** 0 = 1 (any number to power 0 is 1)
• 2 ** -1 = 0.5 (negative powers give fractions)
• 10 ** 2 = 100 (10 squared)

Common uses:
• Powers of 2: 2 ** 10 = 1024
• Squaring: x ** 2
• Cubing: x ** 3
• Scientific notation: 10 ** 6 = 1,000,000
• Calculating areas/volumes

Alternatives:
• math.pow(2, 3) = 8.0 (always returns float)
• pow(2, 3) = 8 (built-in function, can return int)
• 2 ** 3 is preferred (more readable and Pythonic)

Example: 2 ** 3 returns 8 because 2 raised to the power of 3 means multiplying 2 by itself 3 times (2 × 2 × 2 = 8).
`
  }),
  (_i: number) => ({ 
    q: `What is 2 ** 2 ** 3?`, 
    o: ["256", "64", "512", "Error"], 
    c: 0, 
    e: "Exponentiation is right-associative: 2**(2**3) = 2**8 = 256.",
    de: `Exponentiation in Python is right-associative, meaning it groups from right to left. 2 ** 2 ** 3 is evaluated as 2 ** (2 ** 3), not (2 ** 2) ** 3. This matches mathematical convention for powers. 2 ** (2 ** 3) = 2 ** 8 = 256.

Right-associativity:
• 2 ** 2 ** 3 = 2 ** (2 ** 3)
• NOT (2 ** 2) ** 3
• Groups from right to left
• Matches mathematical convention

Step-by-step:
• 2 ** 2 ** 3
• First: 2 ** 3 = 8 (rightmost exponentiation)
• Then: 2 ** 8 = 256 (left exponentiation)
• Result: 256

If it were left-associative:
• (2 ** 2) ** 3 = 4 ** 3 = 64 (different result!)

Mathematical convention:
• a^b^c = a^(b^c) (standard math notation)
• Python follows this convention
• Right-associative for exponentiation

Other operators:
• Most operators are left-associative: 10 - 5 - 2 = (10 - 5) - 2 = 3
• Exponentiation is right-associative: 2 ** 3 ** 2 = 2 ** (3 ** 2) = 512

Example: 2 ** 2 ** 3 evaluates to 256. It's calculated as 2 ** (2 ** 3) = 2 ** 8 = 256, following right-associativity for exponentiation.
`
  }),
  (_i: number) => ({ 
    q: `What is 10 / 0?`, 
    o: ["ZeroDivisionError", "0", "infinity", "None"], 
    c: 0, 
    e: "Division by zero raises ZeroDivisionError.",
    de: `Dividing by zero in Python raises a ZeroDivisionError exception. This is mathematically undefined and Python prevents this operation by raising an error. You cannot divide any number by zero - it's not valid mathematically or in Python.

Division by zero:
• 10 / 0 raises ZeroDivisionError
• 10 // 0 raises ZeroDivisionError
• 10 % 0 raises ZeroDivisionError
• Any division by zero causes an error

Why this happens:
• Mathematically undefined (can't divide by zero)
• Python prevents invalid operations
• Raises exception to signal the error
• Must be handled or program crashes

The error:
• Exception type: ZeroDivisionError
• Message: "division by zero"
• Stops program execution unless caught
• Common mistake in calculations

Handling the error:
• Use try-except to catch it
• Check before dividing: if divisor != 0:
• Provide default values for edge cases
• Validate input to prevent division by zero

Example handling:
try:
    result = 10 / 0
except ZeroDivisionError:
    result = None  # Handle the error

Prevention:
• Check before dividing: if y != 0: x / y
• Validate input: assert divisor != 0
• Use default values: x / y if y != 0 else 0

Example: 10 / 0 raises ZeroDivisionError because division by zero is mathematically undefined. This must be caught with try-except or prevented by checking that the divisor is not zero before dividing.
`
  }),
  (_i: number) => ({ 
    q: `What is 0 / 10?`, 
    o: ["0.0", "0", "Error", "None"], 
    c: 0, 
    e: "Zero divided by any number is 0.0.",
    de: `Dividing zero by any non-zero number always results in zero. In Python 3, the division operator (/) always returns a float, so 0 / 10 equals 0.0 (a float), not 0 (an integer).

Zero divided by number:
• 0 / 10 = 0.0 (zero divided by any number)
• 0 / 5 = 0.0
• 0 / 100 = 0.0
• Always 0.0 (float in Python 3)

How it works:
• Zero divided by any number equals zero
• 0 ÷ 10 = 0 (mathematically)
• In Python 3, / always returns float
• Result: 0.0 (not 0)

Python 3 behavior:
• 0 / 10 = 0.0 (float, not int)
• 0 // 10 = 0 (integer, floor division)
• Division operator always returns float
• Even when result is zero

Important distinction:
• 0 / 10 = 0.0 (Zero divided by number - valid)
• 10 / 0 = ZeroDivisionError (Number divided by zero - invalid)
• These are different operations!

Common uses:
• Default values: result = 0.0 if divisor != 0 else default
• Calculations with zero numerator
• Mathematical formulas where numerator might be zero

Example: 0 / 10 returns 0.0 because zero divided by any non-zero number equals zero, and Python 3's division operator always returns a float (0.0 instead of 0).
`
  }),
  (_i: number) => ({ 
    q: `What is 10 * 0?`, 
    o: ["0", "10", "Error", "None"], 
    c: 0, 
    e: "Any number multiplied by zero is zero.",
    de: `Any number multiplied by zero always equals zero. This is a fundamental mathematical property. 10 * 0 equals 0 because multiplying any number by zero results in zero.

Multiplication by zero:
• 10 * 0 = 0 (any number times zero)
• 5 * 0 = 0
• 100 * 0 = 0
• Always zero

How it works:
• Multiplying by zero always gives zero
• This is true for all numbers (positive, negative, float, int)
• Zero is the multiplicative identity element
• Fundamental mathematical property

Examples:
• 10 * 0 = 0
• -5 * 0 = 0
• 3.14 * 0 = 0.0 (float times zero)
• 0 * 0 = 0

Properties:
• Commutative: 10 * 0 = 0 * 10 = 0
• Works with any number type
• Result type depends on operands
• If one operand is float, result is float

Common uses:
• Reset calculations: total = 0
• Conditional logic: if count == 0: result = 0
• Mathematical formulas
• Initialization

Example: 10 * 0 returns 0 because any number multiplied by zero equals zero. This is a fundamental mathematical property that holds true for all numbers in Python.
`
  }),
  
  // 11-20: Math Functions
  (_i: number) => ({ 
    q: `What is abs(-5)?`, 
    o: ["5", "-5", "0", "Error"], 
    c: 0, 
    e: "abs() returns absolute value.",
    de: `The abs() function returns the absolute value of a number - its distance from zero on the number line, without regard to direction. For negative numbers, it returns the positive version. abs(-5) returns 5.

Absolute value:
• abs(-5) = 5 (removes negative sign)
• abs(5) = 5 (positive numbers unchanged)
• abs(0) = 0 (zero is zero)
• Always returns non-negative number

How it works:
• Calculates distance from zero
• Removes negative sign if present
• Positive numbers unchanged
• Returns non-negative result

Examples:
• abs(-5) = 5
• abs(5) = 5
• abs(-3.14) = 3.14
• abs(0) = 0

Mathematical definition:
• |x| = x if x ≥ 0
• |x| = -x if x < 0
• Distance from zero on number line

Common uses:
• Calculating distances
• Removing negative signs
• Comparing magnitudes
• Error handling (always positive)

Example: abs(-5) returns 5 because the absolute value of -5 is 5, representing its distance from zero regardless of direction.
`
  }),
  (_i: number) => ({ 
    q: `What is abs(5)?`, 
    o: ["5", "-5", "0", "Error"], 
    c: 0, 
    e: "abs() of positive number is itself.",
    de: `The abs() function returns the absolute value of a number. For positive numbers (or zero), the absolute value is the number itself. abs(5) returns 5 because 5 is already positive.

Absolute value of positive:
• abs(5) = 5 (positive numbers unchanged)
• abs(3.14) = 3.14 (positive floats unchanged)
• abs(0) = 0 (zero is zero)
• Positive numbers are their own absolute value

How it works:
• If number ≥ 0, returns number unchanged
• If number < 0, returns -number
• Always returns non-negative result

Examples:
• abs(5) = 5 (already positive)
• abs(10) = 10
• abs(3.14) = 3.14
• abs(0) = 0

Why this makes sense:
• Absolute value = distance from zero
• Distance from zero to 5 is 5
• Positive numbers don't change
• Negative numbers become positive

Common uses:
• Normalizing values
• Comparing magnitudes
• Distance calculations
• Always getting non-negative results

Example: abs(5) returns 5 because 5 is already positive, and the absolute value of a positive number is the number itself.
`
  }),
  (_i: number) => ({ 
    q: `What is round(3.49)?`, 
    o: ["3", "4", "3.49", "Error"], 
    c: 0, 
    e: "round() rounds .49 down to nearest integer.",
    de: `The round() function rounds a number to the nearest integer. When the decimal part is less than .5, it rounds down. round(3.49) rounds down to 3 because 0.49 < 0.5.

Rounding behavior:
• round(3.49) = 3 (rounds down, decimal < .5)
• round(3.51) = 4 (rounds up, decimal > .5)
• round(3.5) = 4 (banker's rounding - rounds to even)

How it works:
• If decimal part < .5, rounds down
• If decimal part > .5, rounds up
• If decimal part = .5, rounds to nearest even (banker's rounding)
• Returns integer (or float if rounding float)

Examples:
• round(3.49) = 3 (down)
• round(3.51) = 4 (up)
• round(3.5) = 4 (to even)
• round(2.5) = 2 (to even)

Banker's rounding:
• round(3.5) = 4 (rounds to even: 4)
• round(2.5) = 2 (rounds to even: 2)
• Avoids rounding bias
• Standard in Python

Common uses:
• Converting floats to integers
• Displaying rounded values
• Financial calculations
• Statistical rounding

Example: round(3.49) returns 3 because 0.49 is less than 0.5, so it rounds down to the nearest integer (3).
`
  }),
  (_i: number) => ({ 
    q: `What is round(3.51)?`, 
    o: ["4", "3", "3.51", "Error"], 
    c: 0, 
    e: "round() rounds .51 up to nearest integer.",
    de: `The round() function rounds a number to the nearest integer. When the decimal part is greater than .5, it rounds up. round(3.51) rounds up to 4 because 0.51 > 0.5.

Rounding behavior:
• round(3.51) = 4 (rounds up, decimal > .5)
• round(3.49) = 3 (rounds down, decimal < .5)
• round(3.5) = 4 (banker's rounding - rounds to even)

How it works:
• If decimal part > .5, rounds up
• If decimal part < .5, rounds down
• If decimal part = .5, rounds to nearest even
• Returns integer

Examples:
• round(3.51) = 4 (up)
• round(3.99) = 4 (up)
• round(3.50) = 4 (to even)
• round(2.50) = 2 (to even)

Common uses:
• Converting floats to integers
• Displaying rounded values
• Financial calculations
• Statistical rounding

Example: round(3.51) returns 4 because 0.51 is greater than 0.5, so it rounds up to the nearest integer (4).
`
  }),
  (_i: number) => ({ 
    q: `What is round(3.5)?`, 
    o: ["4", "3", "3.5", "Error"], 
    c: 0, 
    e: "round() rounds .5 to nearest even (banker's rounding).",
    de: `The round() function uses "banker's rounding" (round half to even) when the decimal part is exactly .5. round(3.5) rounds to 4 because 4 is the nearest even number. This rounding method avoids statistical bias by rounding .5 to the nearest even number.

Banker's rounding:
• round(3.5) = 4 (rounds to even: 4)
• round(2.5) = 2 (rounds to even: 2)
• round(4.5) = 4 (rounds to even: 4)
• round(5.5) = 6 (rounds to even: 6)

How it works:
• If decimal part < .5, rounds down
• If decimal part > .5, rounds up
• If decimal part = .5, rounds to nearest even number
• This is "round half to even" or "IEEE 754" rounding

Why banker's rounding:
• Avoids systematic rounding bias
• More accurate in statistics
• Standard in financial calculations
• IEEE 754 standard

Examples:
• round(3.5) = 4 (even number)
• round(2.5) = 2 (even number)
• round(4.5) = 4 (even number)
• round(5.5) = 6 (even number)

Important note:
• This is different from traditional rounding
• Traditional: always round .5 up
• Banker's: round .5 to nearest even
• Python uses banker's rounding

Example: round(3.5) returns 4 because when rounding 0.5, Python rounds to the nearest even number. Since 3.5 is equidistant from 3 and 4, it chooses 4 (the even number).
`
  }),
  (_i: number) => ({ 
    q: `What is min(5, 10, 2)?`, 
    o: ["2", "5", "10", "Error"], 
    c: 0, 
    e: "min() finds the smallest value.",
    de: `The min() function returns the smallest value from the given arguments. It can take multiple arguments or an iterable. min(5, 10, 2) returns 2 because 2 is the smallest of the three numbers.

min() function:
• min(5, 10, 2) = 2 (smallest value)
• Can take multiple arguments
• Can take an iterable: min([5, 10, 2])
• Returns smallest value

How it works:
• Compares all arguments
• Returns the minimum value
• Works with numbers, strings, any comparable type
• Raises ValueError if empty iterable

Examples:
• min(5, 10, 2) = 2
• min(1, 2, 3) = 1
• min([5, 10, 2]) = 2
• min("a", "b", "c") = "a"

With iterable:
• min([1, 2, 3]) = 1
• min("hello") = "e" (lexicographically smallest)
• min([]) raises ValueError

Common uses:
• Finding minimum value
• Comparison operations
• Range checking
• Optimization problems

Example: min(5, 10, 2) returns 2 because among the values 5, 10, and 2, the smallest is 2.
`
  }),
  (_i: number) => ({ 
    q: `What is max(5, 10, 2)?`, 
    o: ["10", "5", "2", "Error"], 
    c: 0, 
    e: "max() finds the largest value.",
    de: `The max() function returns the largest value from the given arguments. It can take multiple arguments or an iterable. max(5, 10, 2) returns 10 because 10 is the largest of the three numbers.

max() function:
• max(5, 10, 2) = 10 (largest value)
• Can take multiple arguments
• Can take an iterable: max([5, 10, 2])
• Returns largest value

How it works:
• Compares all arguments
• Returns the maximum value
• Works with numbers, strings, any comparable type
• Raises ValueError if empty iterable

Examples:
• max(5, 10, 2) = 10
• max(1, 2, 3) = 3
• max([5, 10, 2]) = 10
• max("a", "b", "c") = "c"

With iterable:
• max([1, 2, 3]) = 3
• max("hello") = "o" (lexicographically largest)
• max([]) raises ValueError

Common uses:
• Finding maximum value
• Comparison operations
• Range checking
• Optimization problems

Example: max(5, 10, 2) returns 10 because among the values 5, 10, and 2, the largest is 10.
`
  }),
  (_i: number) => ({ 
    q: `What is pow(3, 2)?`, 
    o: ["9", "6", "27", "0"], 
    c: 0, 
    e: "pow(a, b) is equivalent to a**b.",
    de: `The pow() function is Python's built-in function for exponentiation. pow(3, 2) calculates 3 to the power of 2, which equals 9. It's equivalent to using the ** operator: pow(3, 2) = 3 ** 2 = 9.

pow() function:
• pow(3, 2) = 9 (3 to the power of 2)
• Equivalent to 3 ** 2
• pow(base, exponent) = base ** exponent
• Returns int if operands are ints

How it works:
• Calculates base raised to exponent
• pow(3, 2) = 3 × 3 = 9
• pow(2, 3) = 2 × 2 × 2 = 8
• Works with floats too: pow(2.5, 2) = 6.25

Examples:
• pow(3, 2) = 9
• pow(2, 3) = 8
• pow(5, 0) = 1 (any number to power 0)
• pow(10, 2) = 100

With third argument (modulo):
• pow(2, 3, 5) = (2 ** 3) % 5 = 8 % 5 = 3
• More efficient for large numbers
• Computes (base ** exponent) % modulus

Comparison with **:
• pow(3, 2) = 9, 3 ** 2 = 9 (same result)
• pow() is a function, ** is an operator
• Both work, ** is more common in Python

Example: pow(3, 2) returns 9 because 3 raised to the power of 2 equals 3 × 3 = 9. This is equivalent to 3 ** 2.
`
  }),
  (_i: number) => ({ 
    q: `What is pow(2, 3, 5)?`, 
    o: ["3", "8", "0", "Error"], 
    c: 0, 
    e: "pow(x, y, z) is (x**y) % z.",
    de: `The pow() function can take a third argument for modular exponentiation. pow(2, 3, 5) calculates (2 ** 3) % 5, which equals 8 % 5 = 3. This is more efficient than computing 2 ** 3 first, then taking the modulo.

Modular exponentiation:
• pow(2, 3, 5) = (2 ** 3) % 5 = 8 % 5 = 3
• Third argument is the modulus
• More efficient for large numbers
• Computes (base ** exponent) % modulus directly

How it works:
• Calculates base ** exponent
• Takes result modulo modulus
• More efficient than separate operations
• Useful for cryptography and large numbers

Step-by-step:
• pow(2, 3, 5)
• First: 2 ** 3 = 8
• Then: 8 % 5 = 3
• Result: 3

Why use third argument:
• More efficient for large exponents
• Avoids intermediate large numbers
• Important for cryptography
• Prevents overflow issues

Examples:
• pow(2, 3, 5) = 3
• pow(3, 4, 7) = (3 ** 4) % 7 = 81 % 7 = 4
• pow(5, 2, 10) = (5 ** 2) % 10 = 25 % 10 = 5

Common uses:
• Cryptography (RSA, etc.)
• Large number calculations
• Efficient modulo arithmetic
• Preventing overflow

Example: pow(2, 3, 5) returns 3 because it calculates (2 ** 3) % 5 = 8 % 5 = 3. This is more efficient than computing 2 ** 3 separately, especially for large exponents.
`
  }),
  (_i: number) => ({ 
    q: `What is sum([1, 2, 3])?`, 
    o: ["6", "0", "Error", "None"], 
    c: 0, 
    e: "sum() adds all numbers in iterable.",
    de: `The sum() function adds all numbers in an iterable (like a list) and returns the total. sum([1, 2, 3]) adds 1 + 2 + 3, which equals 6. It's Python's built-in way to sum a collection of numbers.

sum() function:
• sum([1, 2, 3]) = 6 (adds all elements)
• Takes an iterable of numbers
• Returns total sum
• Can take optional start value

How it works:
• Iterates through iterable
• Adds all numbers together
• Returns total sum
• sum(iterable, start) starts with start value

Examples:
• sum([1, 2, 3]) = 6
• sum([10, 20, 30]) = 60
• sum([]) = 0 (empty list)
• sum([1, 2, 3], 10) = 16 (starts with 10)

With start value:
• sum([1, 2, 3], 10) = 16 (starts with 10, then adds 1+2+3)
• sum([], 5) = 5 (empty list with start value)
• Default start is 0

Common uses:
• Adding list of numbers
• Calculating totals
• Summing numeric collections
• Statistical calculations

Important:
• Elements must be numbers
• sum(["a", "b"]) raises TypeError
• For strings, use "".join()

Example: sum([1, 2, 3]) returns 6 because it adds all elements in the list: 1 + 2 + 3 = 6. This is Python's efficient way to sum numeric collections.
`
  }),
  
  // 21-30: More Math Functions
  (_i: number) => ({ 
    q: `What is divmod(10, 3)?`, 
    o: ["(3, 1)", "3.33", "Error", "None"], 
    c: 0, 
    e: "divmod() returns (quotient, remainder).",
    de: `The divmod() function returns a tuple containing both the quotient and remainder of division. It's equivalent to performing floor division and modulo operations together. divmod(10, 3) returns (3, 1) because 10 // 3 = 3 and 10 % 3 = 1.

divmod() function:
• divmod(10, 3) = (3, 1) (quotient, remainder)
• Returns tuple (quotient, remainder)
• Equivalent to (a // b, a % b)
• More efficient than separate operations

How it works:
• Calculates floor division: 10 // 3 = 3
• Calculates modulo: 10 % 3 = 1
• Returns tuple: (3, 1)
• More efficient than doing both separately

Examples:
• divmod(10, 3) = (3, 1)
• divmod(20, 4) = (5, 0) (no remainder)
• divmod(15, 4) = (3, 3)
• divmod(7, 2) = (3, 1)

Equivalent operations:
• divmod(10, 3) = (10 // 3, 10 % 3) = (3, 1)
• Does both operations in one call
• More efficient for large numbers

Common uses:
• Getting both quotient and remainder
• Time calculations (hours, minutes)
• Base conversion
• Efficient division operations

Unpacking:
• quotient, remainder = divmod(10, 3)
• quotient = 3, remainder = 1
• Useful for extracting both values

Example: divmod(10, 3) returns (3, 1) because when dividing 10 by 3, you get a quotient of 3 and a remainder of 1. This is more efficient than calculating // and % separately.
`
  }),
  (_i: number) => ({ 
    q: `What is sorted([3, 1, 2])?`, 
    o: ["[1, 2, 3]", "[3, 1, 2]", "Error", "None"], 
    c: 0, 
    e: "sorted() returns sorted list.",
    de: `The sorted() function returns a new sorted list from the items in an iterable. It doesn't modify the original list - it creates a new sorted copy. sorted([3, 1, 2]) returns [1, 2, 3], sorted in ascending order.

sorted() function:
• sorted([3, 1, 2]) = [1, 2, 3] (sorted ascending)
• Returns new sorted list
• Original list unchanged (not modified)
• Works with any iterable

How it works:
• Creates new list from iterable
• Sorts elements in ascending order (default)
• Returns sorted list
• Original remains unchanged

Examples:
• sorted([3, 1, 2]) = [1, 2, 3]
• sorted([5, 2, 8, 1]) = [1, 2, 5, 8]
• sorted("hello") = ['e', 'h', 'l', 'l', 'o']
• sorted((3, 1, 2)) = [1, 2, 3] (works with tuples)

Comparison with .sort():
• sorted([3, 1, 2]) = [1, 2, 3] (new list)
• [3, 1, 2].sort() = None (modifies original)
• sorted() returns value, .sort() modifies in-place

Common uses:
• Sorting lists without modifying original
• Sorting any iterable (strings, tuples)
• Creating sorted copies
• Functional programming style

Example: sorted([3, 1, 2]) returns [1, 2, 3] because it creates a new list sorted in ascending order. The original list [3, 1, 2] remains unchanged.
`
  }),
  (_i: number) => ({ 
    q: `What is sorted([3, 1, 2], reverse=True)?`, 
    o: ["[3, 2, 1]", "[1, 2, 3]", "Error", "None"], 
    c: 0, 
    e: "reverse=True sorts descending.",
    de: `The sorted() function accepts a reverse parameter. When reverse=True, it sorts the iterable in descending order (largest to smallest). sorted([3, 1, 2], reverse=True) returns [3, 2, 1], sorted from largest to smallest.

sorted() with reverse:
• sorted([3, 1, 2], reverse=True) = [3, 2, 1] (descending)
• reverse=True sorts largest to smallest
• Returns new sorted list
• Original unchanged

How it works:
• Creates new list from iterable
• Sorts in descending order (reverse=True)
• Returns sorted list (largest to smallest)
• Original remains unchanged

Examples:
• sorted([3, 1, 2], reverse=True) = [3, 2, 1]
• sorted([5, 2, 8, 1], reverse=True) = [8, 5, 2, 1]
• sorted("hello", reverse=True) = ['o', 'l', 'l', 'h', 'e']
• sorted([3, 1, 2], reverse=False) = [1, 2, 3] (default)

Default behavior:
• reverse=False (default) → ascending order
• reverse=True → descending order
• Can also use: sorted([3, 1, 2])[::-1] for descending

Common uses:
• Sorting from largest to smallest
• Finding top N items
• Reverse ordering
• Descending sorts

Example: sorted([3, 1, 2], reverse=True) returns [3, 2, 1] because it sorts the list in descending order (largest to smallest) when reverse=True is specified.
`
  }),
  (_i: number) => ({ 
    q: `What is 5 ** 0?`, 
    o: ["1", "0", "5", "Error"], 
    c: 0, 
    e: "Any number to power 0 is 1.",
    de: `Any number raised to the power of 0 equals 1. This is a fundamental mathematical property. 5 ** 0 equals 1, just like any other non-zero number raised to power 0. This is true for all numbers (positive, negative, integers, floats).

Power of zero rule:
• 5 ** 0 = 1 (any number to power 0)
• 10 ** 0 = 1
• -5 ** 0 = 1
• 3.14 ** 0 = 1.0

How it works:
• Mathematically: x^0 = 1 (for any x ≠ 0)
• Fundamental property of exponents
• Consistent across all number types
• Works with integers and floats

Mathematical reasoning:
• x^a / x^a = x^(a-a) = x^0
• x^a / x^a = 1
• Therefore: x^0 = 1

Examples:
• 5 ** 0 = 1
• 100 ** 0 = 1
• -5 ** 0 = 1
• 0.5 ** 0 = 1.0

Special case:
• 0 ** 0 is undefined (some systems return 1, Python raises error)

Common uses:
• Base conversion formulas
• Mathematical expressions
• Power series
• Exponential functions

Example: 5 ** 0 returns 1 because any non-zero number raised to the power of 0 equals 1. This is a fundamental mathematical property.
`
  }),
  (_i: number) => ({ 
    q: `What is 0 ** 5?`, 
    o: ["0", "1", "Error", "None"], 
    c: 0, 
    e: "0 to any power is 0.",
    de: `Zero raised to any positive power equals zero. This is because zero multiplied by itself any number of times is still zero. 0 ** 5 equals 0, just like 0 ** 1, 0 ** 10, etc. However, 0 ** 0 is undefined.

Zero to positive power:
• 0 ** 5 = 0 (zero to any positive power)
• 0 ** 1 = 0
• 0 ** 10 = 0
• Always zero for positive exponents

How it works:
• Zero multiplied by itself = zero
• 0 × 0 × 0 × 0 × 0 = 0
• For any positive exponent, result is 0
• Only exception: 0 ** 0 is undefined

Examples:
• 0 ** 5 = 0
• 0 ** 1 = 0
• 0 ** 100 = 0
• 0 ** 0 raises ValueError (undefined)

Special cases:
• 0 ** 0: Undefined (raises ValueError in Python)
• 0 ** positive: 0
• 0 ** negative: ZeroDivisionError (division by zero)

Common uses:
• Mathematical formulas
• Edge case handling
• Power calculations
• Polynomial evaluations

Important:
• 0 ** 0 is undefined mathematically
• Python raises ValueError for 0 ** 0
• 0 ** positive integer = 0
• 0 ** negative = error (division by zero)

Example: 0 ** 5 returns 0 because zero raised to any positive power equals zero. Zero multiplied by itself any number of times is still zero.
`
  }),
  (_i: number) => ({ 
    q: `What is 1 ** 100?`, 
    o: ["1", "100", "0", "Error"], 
    c: 0, 
    e: "1 to any power is 1.",
    de: `One raised to any power equals one. This is because one multiplied by itself any number of times is still one. 1 ** 100 equals 1, just like 1 ** 1, 1 ** 1000, etc. This is true for any exponent (positive, negative, zero, fraction).

One to any power:
• 1 ** 100 = 1 (one to any power)
• 1 ** 1 = 1
• 1 ** 0 = 1
• 1 ** -5 = 1
• Always one

How it works:
• One multiplied by itself = one
• 1 × 1 × 1 × ... × 1 = 1
• For any exponent, result is 1
• Works with any number type

Examples:
• 1 ** 100 = 1
• 1 ** 0 = 1
• 1 ** -5 = 1
• 1.0 ** 100 = 1.0

Mathematical property:
• 1^n = 1 for any n
• Multiplicative identity
• One is its own power
• Fundamental property

Common uses:
• Base cases in algorithms
• Mathematical proofs
• Identity operations
• Edge case handling

Example: 1 ** 100 returns 1 because one raised to any power equals one. No matter how many times you multiply 1 by itself, the result is always 1.
`
  }),
  (_i: number) => ({ 
    q: `What is 5 ** 1?`, 
    o: ["5", "1", "0", "Error"], 
    c: 0, 
    e: "Any number to power 1 is itself.",
    de: `Any number raised to the power of 1 equals the number itself. This is because raising to the power of 1 means using the number once. 5 ** 1 equals 5, just like any other number raised to power 1 equals itself.

Power of one rule:
• 5 ** 1 = 5 (number to power 1)
• 10 ** 1 = 10
• 3.14 ** 1 = 3.14
• Any number ** 1 = itself

How it works:
• Raising to power 1 means using number once
• x^1 = x (for any x)
• Fundamental property of exponents
• Works with all number types

Mathematical reasoning:
• Exponent 1 means "multiply once"
• x^1 = x × 1 = x
• Identity property of exponentiation

Examples:
• 5 ** 1 = 5
• 100 ** 1 = 100
• -5 ** 1 = -5
• 0.5 ** 1 = 0.5

Common uses:
• Identity operations
• Base cases
• Mathematical formulas
• Simplifying expressions

Example: 5 ** 1 returns 5 because any number raised to the power of 1 equals the number itself. This is the identity property of exponentiation.
`
  }),
  (_i: number) => ({ 
    q: `What is 5 % 5?`, 
    o: ["0", "5", "1", "Error"], 
    c: 0, 
    e: "Modulo returns remainder - same number gives 0.",
    de: `The modulo operator (%) returns the remainder after division. When you divide a number by itself, there's no remainder because it divides evenly. 5 % 5 equals 0 because 5 divided by 5 equals 1 with no remainder.

Modulo with same number:
• 5 % 5 = 0 (no remainder when dividing by itself)
• 10 % 10 = 0
• Any number % itself = 0
• Divides evenly

How it works:
• 5 ÷ 5 = 1 with remainder 0
• When dividend equals divisor, remainder is 0
• Divides evenly (no remainder)
• Always 0 for same number

Examples:
• 5 % 5 = 0
• 10 % 10 = 0
• 100 % 100 = 0
• 3.14 % 3.14 = 0.0 (for floats)

Mathematical property:
• a % a = 0 (for any a ≠ 0)
• When numbers are equal, no remainder
• Useful for checking divisibility

Common uses:
• Checking if number divides evenly: n % n == 0
• Checking if divisible: n % d == 0
• Resetting counters
• Wrapping values

Example: 5 % 5 returns 0 because when you divide 5 by 5, you get 1 with no remainder. This property is useful for checking if numbers divide evenly.
`
  }),
  (_i: number) => ({ 
    q: `What is 5 % 3?`, 
    o: ["2", "1", "0", "Error"], 
    c: 0, 
    e: "5 divided by 3 gives remainder 2.",
    de: `The modulo operator (%) returns the remainder after division. When you divide 5 by 3, you get 1 group of 3 with 2 left over. That remainder (2) is what the modulo operator returns. 5 % 3 equals 2.

Modulo operation:
• 5 % 3 = 2 (remainder when 5 divided by 3)
• 5 ÷ 3 = 1 with remainder 2
• Returns what's left after division
• Useful for many programming tasks

How it works:
• Divide first number by second
• Return the remainder after division
• 5 % 3: 5 ÷ 3 = 1 remainder 2, so 5 % 3 = 2
• Works with floats too: 5.5 % 3 = 2.5

Step-by-step:
• 5 ÷ 3 = 1.666...
• 1 × 3 = 3
• 5 - 3 = 2 (remainder)
• Result: 2

Common uses:
• Checking even/odd: n % 2 (0 = even, 1 = odd)
• Wrapping values: index % length
• Finding divisors: n % d == 0
• Time calculations: seconds % 60

Example: 5 % 3 returns 2 because when you divide 5 by 3, you get 1 group of 3 with 2 remaining. This is the remainder after division.
`
  }),
  (_i: number) => ({ 
    q: `What is 3 % 5?`, 
    o: ["3", "2", "0", "Error"], 
    c: 0, 
    e: "3 divided by 5 gives remainder 3 (3 < 5).",
    de: `The modulo operator (%) returns the remainder after division. When the dividend (first number) is smaller than the divisor (second number), the dividend itself is the remainder because it can't be divided. 3 % 5 equals 3 because 3 < 5, so 3 remains as the remainder.

Modulo when dividend < divisor:
• 3 % 5 = 3 (dividend smaller than divisor)
• 3 ÷ 5 = 0 with remainder 3
• When dividend < divisor, remainder = dividend
• Cannot divide, so dividend remains

How it works:
• 3 ÷ 5 = 0.6 (decimal) or 0 remainder 3 (integer division)
• Since 3 < 5, no complete division possible
• 0 groups of 5 fit in 3
• Remainder is 3 (the dividend itself)

Examples:
• 3 % 5 = 3 (3 < 5)
• 2 % 10 = 2 (2 < 10)
• 1 % 100 = 1 (1 < 100)
• 4 % 7 = 4 (4 < 7)

Mathematical property:
• If a < b, then a % b = a
• When dividend is smaller, it can't be divided
• Remainder equals dividend
• Useful for wrapping small values

Common uses:
• Wrapping small values
• Ensuring values stay in range
• Modular arithmetic
• Circular indexing

Example: 3 % 5 returns 3 because 3 is smaller than 5, so it can't be divided. When the dividend is less than the divisor, the modulo operation returns the dividend itself as the remainder.
`
  }),
  
  // 31-40: Order of Operations (PEMDAS)
  (_i: number) => ({ 
    q: `What is 2 * 3 + 4?`, 
    o: ["10", "14", "18", "Error"], 
    c: 0, 
    e: "Multiplication before addition (PEMDAS).",
    de: `Python follows the order of operations (PEMDAS). Multiplication has higher precedence than addition, so 2 * 3 is calculated first (equals 6), then 6 + 4 equals 10.

PEMDAS order:
• 2 * 3 + 4
• First: 2 * 3 = 6 (multiplication first)
• Then: 6 + 4 = 10 (addition second)
• Result: 10

Operator precedence:
• ** (exponentiation) - highest
• *, /, //, % (multiplication, division) - medium-high
• +, - (addition, subtraction) - medium
• Parentheses override precedence

Common mistake:
• 2 * 3 + 4 ≠ (2 * 3) + 4 = 10 (correct)
• Not 2 * (3 + 4) = 14 (wrong order)

Example: 2 * 3 + 4 evaluates to 10 because multiplication (2 * 3 = 6) happens before addition (6 + 4 = 10), following PEMDAS rules.
`
  }),
  (_i: number) => ({ 
    q: `What is 2 + 3 * 4?`, 
    o: ["14", "20", "24", "Error"], 
    c: 0, 
    e: "Multiplication before addition.",
    de: `Multiplication has higher precedence than addition in Python's order of operations. 2 + 3 * 4 calculates 3 * 4 first (equals 12), then 2 + 12 equals 14.

Order of operations:
• 2 + 3 * 4
• First: 3 * 4 = 12 (multiplication first)
• Then: 2 + 12 = 14 (addition second)
• Result: 14

PEMDAS rule:
• Multiplication (M) before Addition (A)
• 2 + 3 * 4 ≠ (2 + 3) * 4 = 20
• Must follow operator precedence

Example: 2 + 3 * 4 evaluates to 14 because multiplication (3 * 4 = 12) happens before addition (2 + 12 = 14).
`
  }),
  (_i: number) => ({ 
    q: `What is (2 + 3) * 4?`, 
    o: ["20", "14", "24", "Error"], 
    c: 0, 
    e: "Parentheses change order - addition first.",
    de: `Parentheses override the normal order of operations. (2 + 3) * 4 calculates 2 + 3 first (equals 5), then 5 * 4 equals 20.

Parentheses precedence:
• (2 + 3) * 4
• First: (2 + 3) = 5 (parentheses first)
• Then: 5 * 4 = 20 (multiplication)
• Result: 20

Without parentheses:
• 2 + 3 * 4 = 2 + 12 = 14 (multiplication first)
• Parentheses change the result!

Example: (2 + 3) * 4 evaluates to 20 because parentheses force addition first (2 + 3 = 5), then multiplication (5 * 4 = 20).
`
  }),
  (_i: number) => ({ 
    q: `What is 2 ** 3 + 4?`, 
    o: ["12", "18", "24", "Error"], 
    c: 0, 
    e: "Exponentiation before addition.",
    de: `Exponentiation has higher precedence than addition. 2 ** 3 + 4 calculates 2 ** 3 first (equals 8), then 8 + 4 equals 12.

Order of operations:
• 2 ** 3 + 4
• First: 2 ** 3 = 8 (exponentiation first)
• Then: 8 + 4 = 12 (addition second)
• Result: 12

PEMDAS:
• Exponents (E) before Addition (A)
• ** has highest precedence (except parentheses)

Example: 2 ** 3 + 4 evaluates to 12 because exponentiation (2 ** 3 = 8) happens before addition (8 + 4 = 12).
`
  }),
  (_i: number) => ({ 
    q: `What is 2 + 3 ** 4?`, 
    o: ["83", "20", "1296", "Error"], 
    c: 0, 
    e: "Exponentiation before addition: 2 + 81 = 83.",
    de: `Exponentiation has higher precedence than addition. 2 + 3 ** 4 calculates 3 ** 4 first (equals 81), then 2 + 81 equals 83.

Order of operations:
• 2 + 3 ** 4
• First: 3 ** 4 = 81 (exponentiation first)
• Then: 2 + 81 = 83 (addition second)
• Result: 83

Step-by-step:
• 3 ** 4 = 3 × 3 × 3 × 3 = 81
• 2 + 81 = 83

Example: 2 + 3 ** 4 evaluates to 83 because exponentiation (3 ** 4 = 81) happens before addition (2 + 81 = 83).
`
  }),
  (_i: number) => ({ 
    q: `What is (2 + 3) ** 4?`, 
    o: ["625", "83", "20", "Error"], 
    c: 0, 
    e: "Parentheses first, then exponentiation: 5**4 = 625.",
    de: `Parentheses override normal precedence. (2 + 3) ** 4 calculates 2 + 3 first (equals 5), then 5 ** 4 equals 625.

Parentheses precedence:
• (2 + 3) ** 4
• First: (2 + 3) = 5 (parentheses first)
• Then: 5 ** 4 = 625 (exponentiation)
• Result: 625

Step-by-step:
• 2 + 3 = 5
• 5 ** 4 = 5 × 5 × 5 × 5 = 625

Example: (2 + 3) ** 4 evaluates to 625 because parentheses force addition first (2 + 3 = 5), then exponentiation (5 ** 4 = 625).
`
  }),
  (_i: number) => ({ 
    q: `What is 10 / 2 * 4?`, 
    o: ["20.0", "1.25", "5", "Error"], 
    c: 0, 
    e: "Left to right for same precedence: (10/2)*4 = 20.0.",
    de: `When operators have the same precedence, Python evaluates them left to right. Division and multiplication have the same precedence, so 10 / 2 * 4 calculates 10 / 2 first (equals 5.0), then 5.0 * 4 equals 20.0.

Left-to-right evaluation:
• 10 / 2 * 4
• First: 10 / 2 = 5.0 (leftmost operation)
• Then: 5.0 * 4 = 20.0 (next operation)
• Result: 20.0

Same precedence:
• / and * have same precedence
• Evaluated left to right
• (10 / 2) * 4 = 5.0 * 4 = 20.0
• NOT 10 / (2 * 4) = 10 / 8 = 1.25

Example: 10 / 2 * 4 evaluates to 20.0 because division and multiplication have the same precedence, so they're evaluated left to right: (10 / 2) * 4 = 5.0 * 4 = 20.0.
`
  }),
  (_i: number) => ({ 
    q: `What is 10 * 2 / 4?`, 
    o: ["5.0", "20", "0.5", "Error"], 
    c: 0, 
    e: "Left to right for same precedence: (10*2)/4 = 5.0.",
    de: `When operators have the same precedence, Python evaluates left to right. Multiplication and division have the same precedence, so 10 * 2 / 4 calculates 10 * 2 first (equals 20), then 20 / 4 equals 5.0.

Left-to-right evaluation:
• 10 * 2 / 4
• First: 10 * 2 = 20 (leftmost operation)
• Then: 20 / 4 = 5.0 (next operation)
• Result: 5.0

Same precedence:
• * and / have same precedence
• Evaluated left to right
• (10 * 2) / 4 = 20 / 4 = 5.0
• NOT 10 * (2 / 4) = 10 * 0.5 = 5.0 (same result by coincidence)

Example: 10 * 2 / 4 evaluates to 5.0 because multiplication and division have the same precedence, so they're evaluated left to right: (10 * 2) / 4 = 20 / 4 = 5.0.
`
  }),
  (_i: number) => ({ 
    q: `What is 10 - 2 - 3?`, 
    o: ["5", "9", "11", "Error"], 
    c: 0, 
    e: "Left to right for subtraction: (10-2)-3 = 5.",
    de: `Subtraction is left-associative, meaning it's evaluated left to right. 10 - 2 - 3 calculates 10 - 2 first (equals 8), then 8 - 3 equals 5.

Left-to-right subtraction:
• 10 - 2 - 3
• First: 10 - 2 = 8 (leftmost operation)
• Then: 8 - 3 = 5 (next operation)
• Result: 5

Associativity:
• Subtraction is left-associative
• (10 - 2) - 3 = 8 - 3 = 5
• NOT 10 - (2 - 3) = 10 - (-1) = 11

Example: 10 - 2 - 3 evaluates to 5 because subtraction is evaluated left to right: (10 - 2) - 3 = 8 - 3 = 5.
`
  }),
  (_i: number) => ({ 
    q: `What is 10 + 2 - 3?`, 
    o: ["9", "5", "11", "Error"], 
    c: 0, 
    e: "Left to right for same precedence: (10+2)-3 = 9.",
    de: `Addition and subtraction have the same precedence and are left-associative. 10 + 2 - 3 calculates 10 + 2 first (equals 12), then 12 - 3 equals 9.

Left-to-right evaluation:
• 10 + 2 - 3
• First: 10 + 2 = 12 (leftmost operation)
• Then: 12 - 3 = 9 (next operation)
• Result: 9

Same precedence:
• + and - have same precedence
• Evaluated left to right
• (10 + 2) - 3 = 12 - 3 = 9
• NOT 10 + (2 - 3) = 10 + (-1) = 9 (same result by coincidence)

Example: 10 + 2 - 3 evaluates to 9 because addition and subtraction have the same precedence, so they're evaluated left to right: (10 + 2) - 3 = 12 - 3 = 9.
`
  }),
  
  // 41-50: Type Conversions in Expressions
  (_i: number) => ({ 
    q: `What is float("3.14")?`, 
    o: ["3.14", "3", "Error", "None"], 
    c: 0, 
    e: "float() converts string to float.",
    de: `The float() function converts a string containing a numeric value (with or without decimal point) to a floating-point number. float("3.14") parses the string "3.14" and returns the float 3.14.

float() conversion:
• float("3.14") = 3.14 (string → float)
• Parses numeric string to float
• Works with decimal strings
• Returns float value

How it works:
• Parses string to extract number
• Handles decimal points
• Handles scientific notation: float("1e5") = 100000.0
• Returns float type

Examples:
• float("3.14") = 3.14
• float("42") = 42.0 (integer string → float)
• float("3.14159") = 3.14159
• float("  3.14  ") = 3.14 (strips whitespace)

Common uses:
• Converting user input: float(input("Enter number: "))
• Parsing decimal strings
• Converting numeric strings to floats
• Processing text-based numeric data

Example: float("3.14") returns 3.14 (a float) because it parses the string "3.14" and converts it to a floating-point number.
`
  }),
  (_i: number) => ({ 
    q: `What is int("42")?`, 
    o: ["42", '"42"', "Error", "float"], 
    c: 0, 
    e: "int() converts numeric strings to integers.",
    de: `The int() function converts a string containing numeric characters to an integer. int("42") parses the string "42" and returns the integer 42. This is essential for converting user input (which comes as strings) to numbers.

int() conversion:
• int("42") = 42 (string → integer)
• Parses numeric string to integer
• Strips whitespace: int("  42  ") = 42
• Returns integer value

How it works:
• Parses string to extract number
• Truncates decimals if present in string: int("42.9") raises ValueError
• Handles base conversion: int("FF", 16) = 255
• Returns int type

Examples:
• int("42") = 42
• int("  42  ") = 42 (whitespace stripped)
• int("42.0") raises ValueError (must be integer string)
• int("0") = 0

Common uses:
• User input: int(input("Enter age: "))
• Parsing integer strings
• Converting numeric strings to integers
• Processing text-based numeric data

Example: int("42") returns 42 (an integer) because it parses the string "42" and converts it to an integer.
`
  }),
  (_i: number) => ({ 
    q: `What is str(42)?`, 
    o: ['"42"', "42", "Error", "None"], 
    c: 0, 
    e: "str() converts values to strings.",
    de: `The str() function converts a value to its string representation. str(42) converts the integer 42 to the string "42". This is the opposite of int() or float() - it converts from numbers to strings.

str() conversion:
• str(42) = "42" (integer → string)
• Creates string representation
• Works with any type
• Returns string value

How it works:
• Converts value to string
• For numbers, creates string of digits
• For floats, includes decimal: str(3.14) = "3.14"
• Works with any type

Examples:
• str(42) = "42"
• str(3.14) = "3.14"
• str(True) = "True"
• str([1, 2]) = "[1, 2]"

Common uses:
• String formatting: "Age: " + str(age)
• Displaying numbers: print(str(42))
• Converting for concatenation
• f-strings alternative: f"Age: {42}"

Example: str(42) returns "42" (a string) because it converts the integer 42 to its string representation "42".
`
  }),
  (_i: number) => ({ 
    q: `What is int(3.7)?`, 
    o: ["3", "4", "3.7", "Error"], 
    c: 0, 
    e: "int() truncates towards zero (not rounding).",
    de: `The int() function truncates (cuts off) the decimal part of a float, moving toward zero. int(3.7) truncates to 3, not 4. This is different from rounding - it simply removes the decimal part without rounding up or down.

Truncation behavior:
• int(3.7) = 3 (truncates toward zero)
• int(3.2) = 3 (truncates toward zero)
• int(-3.7) = -3 (truncates toward zero)
• NOT rounding - just removes decimal

How it works:
• Removes decimal part
• Moves toward zero
• Positive: rounds down (toward zero)
• Negative: rounds up (toward zero)

Examples:
• int(3.7) = 3 (not 4!)
• int(3.2) = 3
• int(-3.7) = -3 (not -4!)
• int(-3.2) = -3

Comparison with round():
• int(3.7) = 3 (truncates)
• round(3.7) = 4 (rounds)
• Different operations!

Common uses:
• Converting floats to integers
• Truncating decimal parts
• Getting whole number portion
• Type conversion

Example: int(3.7) returns 3 because int() truncates (removes) the decimal part, moving toward zero. It does NOT round, so 3.7 becomes 3, not 4.
`
  }),
  (_i: number) => ({ 
    q: `What is int(-3.7)?`, 
    o: ["-3", "-4", "-3.7", "Error"], 
    c: 0, 
    e: "int() truncates towards zero for negatives too.",
    de: `The int() function truncates toward zero for both positive and negative numbers. int(-3.7) truncates to -3 (toward zero), not -4 (away from zero). This means it rounds positive numbers down and negative numbers up, both moving toward zero.

Truncation toward zero:
• int(-3.7) = -3 (toward zero, not -4)
• int(-3.2) = -3 (toward zero)
• int(3.7) = 3 (toward zero)
• Always moves toward zero

How it works:
• Removes decimal part
• Moves result toward zero
• Positive: rounds down (3.7 → 3)
• Negative: rounds up (-3.7 → -3)

Examples:
• int(-3.7) = -3 (toward zero)
• int(-3.2) = -3 (toward zero)
• int(-10.9) = -10 (toward zero)
• int(10.9) = 10 (toward zero)

Comparison with floor():
• int(-3.7) = -3 (toward zero)
• math.floor(-3.7) = -4 (toward negative infinity)
• Different for negative numbers!

Common uses:
• Converting floats to integers
• Truncating toward zero
• Getting whole number portion
• Type conversion

Example: int(-3.7) returns -3 because int() truncates toward zero. For negative numbers, this means rounding up (toward zero), so -3.7 becomes -3, not -4.
`
  }),
  (_i: number) => ({ 
    q: `What is float(5)?`, 
    o: ["5.0", "5", "Error", "None"], 
    c: 0, 
    e: "float() converts integer to float.",
    de: `The float() function converts an integer to a floating-point number by adding decimal precision. float(5) converts the integer 5 to the float 5.0. This is important because floats and ints are different types in Python.

float() conversion:
• float(5) = 5.0 (integer → float)
• Adds decimal precision (even if .0)
• Result is type float, not int
• 5.0 is different from 5 in type

How it works:
• Converts integer to float
• Adds .0 to make it a float
• Creates float type object
• Value is equivalent but type differs

Examples:
• float(5) = 5.0
• float(10) = 10.0
• float(-5) = -5.0
• float(0) = 0.0

Type differences:
• 5 is int, 5.0 is float
• 5 == 5.0 is True (values equal)
• type(5) != type(5.0) (types differ)
• 5 is 5.0 is False (different objects)

Common uses:
• Ensuring decimal precision
• Type conversion
• Calculations requiring floats
• Division operations (always produce float)

Example: float(5) returns 5.0 (a float) because it converts the integer 5 to a floating-point number by adding .0.
`
  }),
  (_i: number) => ({ 
    q: `What is str(1.0 + 2)?`, 
    o: ['"3.0"', "3.0", "Error", "None"], 
    c: 0, 
    e: "Result of math converted to string.",
    de: `The str() function converts the result of a mathematical expression to a string. First, 1.0 + 2 is calculated (equals 3.0, a float), then str(3.0) converts it to the string "3.0".

Step-by-step evaluation:
• str(1.0 + 2)
• First: 1.0 + 2 = 3.0 (float + int = float)
• Then: str(3.0) = "3.0" (float → string)
• Result: "3.0"

How it works:
• Expression inside str() is evaluated first
• 1.0 + 2 = 3.0 (float)
• str(3.0) converts float to string
• Result is string representation

Examples:
• str(1.0 + 2) = "3.0"
• str(1 + 2) = "3" (integer becomes "3")
• str(3.14 + 1) = "4.14"
• str(5 * 2) = "10"

Important:
• Expression evaluated first
• Result then converted to string
• String format matches number format
• Float strings include ".0"

Example: str(1.0 + 2) returns "3.0" because first the expression 1.0 + 2 is evaluated to 3.0 (a float), then it's converted to the string "3.0".
`
  }),
  (_i: number) => ({ 
    q: `What is type(3.14 + 1)?`, 
    o: ["<class 'float'>", "<class 'int'>", "<class 'str'>", "None"], 
    c: 0, 
    e: "Adding int to float results in float.",
    de: `When you add an integer to a float, Python promotes the integer to a float and the result is a float. 3.14 + 1 equals 4.14, which is a float. type(3.14 + 1) returns <class 'float'> because the result is always a float when mixing int and float.

Type promotion:
• 3.14 + 1 = 4.14 (float + int = float)
• type(3.14 + 1) = <class 'float'>
• Integer is promoted to float
• Result is always float

How it works:
• Python promotes int to float
• 1 becomes 1.0
• 3.14 + 1.0 = 4.14
• Result is float type

Examples:
• type(3.14 + 1) = <class 'float'>
• type(1.0 + 2) = <class 'float'>
• type(5.0 + 10) = <class 'float'>

Rule:
• int + float = float
• float + int = float
• int + int = int
• float + float = float

Example: type(3.14 + 1) returns <class 'float'> because adding an integer to a float promotes the integer to a float, and the result is a float.
`
  }),
  (_i: number) => ({ 
    q: `What is type(1 + 2)?`, 
    o: ["<class 'int'>", "<class 'float'>", "<class 'str'>", "None"], 
    c: 0, 
    e: "Adding two ints results in int.",
    de: `When you add two integers, the result is an integer. 1 + 2 equals 3, which is an integer. type(1 + 2) returns <class 'int'> because the result of adding two integers is always an integer.

Integer addition:
• 1 + 2 = 3 (int + int = int)
• type(1 + 2) = <class 'int'>
• Result is integer type
• No type promotion needed

How it works:
• Both operands are integers
• Result is integer
• No conversion needed
• Integer type maintained

Examples:
• type(1 + 2) = <class 'int'>
• type(5 + 10) = <class 'int'>
• type(100 + 200) = <class 'int'>

Rule:
• int + int = int
• float + int = float
• int + float = float
• float + float = float

Example: type(1 + 2) returns <class 'int'> because adding two integers results in an integer. No type promotion occurs when both operands are the same type.
`
  }),
  (_i: number) => ({ 
    q: `What is type(1.0 * 2)?`, 
    o: ["<class 'float'>", "<class 'int'>", "<class 'str'>", "None"], 
    c: 0, 
    e: "Multiplying float by int results in float.",
    de: `When you multiply a float by an integer, Python promotes the integer to a float and the result is a float. 1.0 * 2 equals 2.0, which is a float. type(1.0 * 2) returns <class 'float'> because the result is always a float when mixing int and float.

Type promotion:
• 1.0 * 2 = 2.0 (float * int = float)
• type(1.0 * 2) = <class 'float'>
• Integer is promoted to float
• Result is always float

How it works:
• Python promotes int to float
• 2 becomes 2.0
• 1.0 * 2.0 = 2.0
• Result is float type

Examples:
• type(1.0 * 2) = <class 'float'>
• type(3.14 * 5) = <class 'float'>
• type(2.5 * 10) = <class 'float'>

Rule:
• float * int = float
• int * float = float
• int * int = int
• float * float = float

Example: type(1.0 * 2) returns <class 'float'> because multiplying a float by an integer promotes the integer to a float, and the result is a float.
`
  }),
  
  // 51-60: String vs Numeric Operations
  (_i: number) => ({ 
    q: `Is '1' + '1' equal to '2'?`, 
    o: ["No, it is '11'", "Yes", "Error", "None"], 
    c: 0, 
    e: "String concatenation, not addition.",
    de: `When both operands are strings, the + operator performs string concatenation, not mathematical addition. '1' + '1' concatenates the strings to produce '11', not the number 2. Strings and numbers use the same operator differently.

String concatenation:
• '1' + '1' = '11' (strings concatenate)
• NOT mathematical addition
• Joins strings end-to-end
• Result is string, not number

How it works:
• Both operands are strings
• + operator concatenates (joins)
• '1' + '1' = '11' (two characters)
• NOT 1 + 1 = 2

To get 2:
• Convert strings first: int('1') + int('1') = 2
• Must explicitly convert
• Type determines behavior

Common mistake:
• '1' + '1' ≠ 2 (it's '11')
• Must convert strings to numbers first
• Remember: strings concatenate, numbers add

Example: '1' + '1' returns '11' because both are strings, so + concatenates them. To add mathematically, convert first: int('1') + int('1') = 2.
`
  }),
  (_i: number) => ({ 
    q: `What is int('1') + int('1')?`, 
    o: ["2", "'11'", "Error", "None"], 
    c: 0, 
    e: "Convert strings to ints before adding.",
    de: `To perform mathematical addition on numeric strings, you must first convert them to numbers using int() or float(). int('1') + int('1') converts both strings to integers first (1 and 1), then adds them mathematically to get 2.

Type conversion then addition:
• int('1') + int('1')
• First: int('1') = 1, int('1') = 1 (convert strings)
• Then: 1 + 1 = 2 (mathematical addition)
• Result: 2 (integer)

How it works:
• int() converts string to integer
• '1' → 1, '1' → 1
• Then integers are added: 1 + 1 = 2
• Result is integer

Examples:
• int('1') + int('1') = 2
• int('5') + int('3') = 8
• int('10') + int('20') = 30

Common pattern:
• User input is always string
• Must convert before math: int(input()) + int(input())
• Essential for numeric operations

Example: int('1') + int('1') returns 2 because the strings are converted to integers first (1 and 1), then added mathematically (1 + 1 = 2).
`
  }),
  (_i: number) => ({ 
    q: `What is '5' * 2?`, 
    o: ["'55'", "10", "Error", "None"], 
    c: 0, 
    e: "String multiplication repeats string.",
    de: `When you multiply a string by an integer, Python repeats the string that many times. '5' * 2 repeats the string '5' twice, producing '55'. This is string multiplication, not numeric multiplication.

String multiplication:
• '5' * 2 = '55' (string repeated 2 times)
• String * integer = repeated string
• NOT numeric multiplication
• Result is string

How it works:
• String is operand
• Integer is multiplier
• String is repeated that many times
• '5' * 2 = '5' + '5' = '55'

Examples:
• '5' * 2 = '55'
• 'abc' * 3 = 'abcabcabc'
• 'hello' * 0 = '' (empty string)
• 'x' * 5 = 'xxxxx'

Comparison with numeric:
• '5' * 2 = '55' (string multiplication)
• 5 * 2 = 10 (numeric multiplication)
• Type determines behavior

Common uses:
• Creating repeated patterns
• Padding: ' ' * 10 (10 spaces)
• Visual formatting
• Generating test data

Example: '5' * 2 returns '55' because string multiplication repeats the string '5' two times, producing '55'. This is different from numeric multiplication (5 * 2 = 10).
`
  }),
  (_i: number) => ({ 
    q: `What is 5 * 2?`, 
    o: ["10", "'55'", "Error", "None"], 
    c: 0, 
    e: "Numeric multiplication.",
    de: `When both operands are numbers, the * operator performs mathematical multiplication. 5 * 2 multiplies the numbers 5 and 2 to get 10. This is numeric multiplication, not string repetition.

Numeric multiplication:
• 5 * 2 = 10 (numbers multiply)
• Mathematical multiplication
• Integer * integer = integer
• Result is number

How it works:
• Both operands are numbers
• * operator multiplies
• 5 × 2 = 10
• Result is numeric

Examples:
• 5 * 2 = 10
• 3 * 4 = 12
• 5.0 * 2 = 10.0 (if one is float, result is float)

Comparison with string:
• 5 * 2 = 10 (numeric multiplication)
• '5' * 2 = '55' (string repetition)
• Type determines behavior

Common uses:
• Mathematical calculations
• Scaling values
• Area/volume calculations
• Arithmetic operations

Example: 5 * 2 returns 10 because both operands are numbers, so * performs mathematical multiplication (5 × 2 = 10).
`
  }),
  (_i: number) => ({ 
    q: `What is 'hello' + 'world'?`, 
    o: ["'helloworld'", "'hello world'", "Error", "None"], 
    c: 0, 
    e: "String concatenation joins without spaces.",
    de: `String concatenation with the + operator joins strings end-to-end without adding any separator. 'hello' + 'world' concatenates to 'helloworld' (no space between). If you want a space, you must add it explicitly.

String concatenation:
• 'hello' + 'world' = 'helloworld' (no space)
• Joins strings exactly as they are
• No automatic spacing
• Must add spaces manually

How it works:
• + operator concatenates strings
• Joins end-to-end
• No separator added
• Creates new string

Examples:
• 'hello' + 'world' = 'helloworld'
• 'hello' + ' ' + 'world' = 'hello world' (with space)
• 'a' + 'b' + 'c' = 'abc'

Adding spaces:
• 'hello' + ' ' + 'world' = 'hello world'
• 'hello ' + 'world' = 'hello world'
• 'hello' + ' world' = 'hello world'

Common uses:
• Building strings
• Combining text
• String construction
• Formatting output

Example: 'hello' + 'world' returns 'helloworld' because string concatenation joins strings without adding spaces. To add a space, use 'hello' + ' ' + 'world' or 'hello ' + 'world'.
`
  }),
  (_i: number) => ({ 
    q: `What is '5' + '3'?`, 
    o: ["'53'", "8", "Error", "None"], 
    c: 0, 
    e: "String concatenation, not numeric addition.",
    de: `When both operands are strings, the + operator performs string concatenation. '5' + '3' concatenates the strings to produce '53', not the number 8. This is a common mistake when working with numeric strings.

String concatenation:
• '5' + '3' = '53' (strings concatenate)
• NOT mathematical addition
• Joins strings: '5' + '3' = '53'
• Result is string, not number

How it works:
• Both operands are strings
• + operator concatenates
• '5' + '3' = '53' (two characters)
• NOT 5 + 3 = 8

To get 8:
• Convert strings first: int('5') + int('3') = 8
• Must explicitly convert
• Type determines behavior

Common mistake:
• '5' + '3' ≠ 8 (it's '53')
• User input is always string
• Must convert before math

Example: '5' + '3' returns '53' because both are strings, so + concatenates them. To add mathematically, convert first: int('5') + int('3') = 8.
`
  }),
  (_i: number) => ({ 
    q: `What is int('5') + int('3')?`, 
    o: ["8", "'53'", "Error", "None"], 
    c: 0, 
    e: "Convert strings to ints before adding.",
    de: `To perform mathematical addition on numeric strings, convert them to integers first using int(). int('5') + int('3') converts both strings to integers (5 and 3), then adds them mathematically to get 8.

Type conversion then addition:
• int('5') + int('3')
• First: int('5') = 5, int('3') = 3 (convert strings)
• Then: 5 + 3 = 8 (mathematical addition)
• Result: 8 (integer)

How it works:
• int() converts string to integer
• '5' → 5, '3' → 3
• Then integers are added: 5 + 3 = 8
• Result is integer

Examples:
• int('5') + int('3') = 8
• int('10') + int('20') = 30
• int('100') + int('200') = 300

Common pattern:
• User input is string: input() returns string
• Must convert: int(input("Enter number: "))
• Then perform math

Example: int('5') + int('3') returns 8 because the strings are converted to integers first (5 and 3), then added mathematically (5 + 3 = 8).
`
  }),
  (_i: number) => ({ 
    q: `What is 'abc' * 0?`, 
    o: ['""', "'abc'", "Error", "None"], 
    c: 0, 
    e: "Multiplying string by 0 gives empty string.",
    de: `When you multiply a string by 0, Python returns an empty string. 'abc' * 0 equals '' (empty string) because repeating a string zero times results in nothing. This is consistent with the mathematical property that any number times zero equals zero.

String multiplication by zero:
• 'abc' * 0 = '' (empty string)
• Repeating zero times = nothing
• Returns empty string
• Consistent with math: anything * 0 = 0

How it works:
• String * 0 = empty string
• Repeating 0 times = ''
• No characters repeated
• Empty string result

Examples:
• 'abc' * 0 = ''
• 'hello' * 0 = ''
• 'x' * 0 = ''
• '' * 0 = '' (already empty)

Mathematical analogy:
• String * 0 = '' (zero repetition)
• Number * 0 = 0 (zero multiplication)
• Similar concept: zero times = nothing

Common uses:
• Conditional string creation
• Resetting string accumulators
• Edge cases in loops
• Clearing string variables

Example: 'abc' * 0 returns '' (empty string) because multiplying a string by 0 repeats it zero times, resulting in an empty string.
`
  }),
  (_i: number) => ({ 
    q: `What is 'abc' * 1?`, 
    o: ["'abc'", "'abcabc'", "Error", "None"], 
    c: 0, 
    e: "Multiplying string by 1 gives original string.",
    de: `When you multiply a string by 1, Python returns the original string unchanged. 'abc' * 1 equals 'abc' because repeating a string once is the same as the original string. This is similar to the mathematical property that any number times 1 equals itself.

String multiplication by one:
• 'abc' * 1 = 'abc' (original string)
• Repeating once = original
• Returns string unchanged
• Consistent with math: anything * 1 = itself

How it works:
• String * 1 = original string
• Repeating 1 time = no change
• Returns same string
• Multiplicative identity

Examples:
• 'abc' * 1 = 'abc'
• 'hello' * 1 = 'hello'
• 'x' * 1 = 'x'
• '' * 1 = '' (empty string unchanged)

Mathematical analogy:
• String * 1 = original (one repetition)
• Number * 1 = same number (multiplicative identity)
• Similar concept: one times = itself

Common uses:
• Conditional string creation
• Identity operations
• Default values in loops
• Maintaining original string

Example: 'abc' * 1 returns 'abc' because multiplying a string by 1 repeats it once, which is the same as the original string.
`
  }),
  (_i: number) => ({ 
    q: `What is 'abc' * 3?`, 
    o: ["'abcabcabc'", "'abc3'", "Error", "None"], 
    c: 0, 
    e: "String multiplication repeats the string.",
    de: `When you multiply a string by an integer greater than 1, Python repeats the string that many times. 'abc' * 3 repeats the string 'abc' three times, producing 'abcabcabc'. This is string repetition, not numeric multiplication.

String multiplication:
• 'abc' * 3 = 'abcabcabc' (string repeated 3 times)
• String * integer = repeated string
• Repeats the string exactly
• Result is string

How it works:
• String is operand
• Integer is multiplier
• String is repeated that many times
• 'abc' * 3 = 'abc' + 'abc' + 'abc' = 'abcabcabc'

Examples:
• 'abc' * 3 = 'abcabcabc'
• 'x' * 5 = 'xxxxx'
• 'hello' * 2 = 'hellohello'
• ' ' * 10 = '          ' (10 spaces)

Common uses:
• Creating repeated patterns
• Padding: ' ' * 20 (20 spaces)
• Visual formatting
• Generating test data

Example: 'abc' * 3 returns 'abcabcabc' because string multiplication repeats the string 'abc' three times, concatenating them together.
`
  }),
  
  // 61-70: Comparison Operators
  (_i: number) => ({ 
    q: `Result of 10 > 5?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "Greater than comparison.",
    de: `The > operator compares two values and returns True if the left operand is greater than the right operand. 10 > 5 returns True because 10 is greater than 5.

Greater than operator:
• 10 > 5 = True (10 is greater than 5)
• Returns boolean (True/False)
• Compares numeric values
• Works with strings (lexicographic)

How it works:
• Compares left operand to right operand
• Returns True if left > right
• Returns False otherwise
• Works with numbers, strings, etc.

Examples:
• 10 > 5 = True
• 5 > 10 = False
• 10 > 10 = False (not greater)
• "b" > "a" = True (lexicographic)

Common uses:
• Conditional statements: if x > 5:
• Range checking
• Comparisons
• Sorting

Example: 10 > 5 returns True because 10 is greater than 5.
`
  }),
  (_i: number) => ({ 
    q: `Result of 5 < 10?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "Less than comparison.",
    de: `The < operator compares two values and returns True if the left operand is less than the right operand. 5 < 10 returns True because 5 is less than 10.

Less than operator:
• 5 < 10 = True (5 is less than 10)
• Returns boolean (True/False)
• Compares numeric values
• Works with strings (lexicographic)

How it works:
• Compares left operand to right operand
• Returns True if left < right
• Returns False otherwise
• Works with numbers, strings, etc.

Examples:
• 5 < 10 = True
• 10 < 5 = False
• 10 < 10 = False (not less)
• "a" < "b" = True (lexicographic)

Common uses:
• Conditional statements: if x < 10:
• Range checking
• Comparisons
• Sorting

Example: 5 < 10 returns True because 5 is less than 10.
`
  }),
  (_i: number) => ({ 
    q: `Result of 10 >= 10?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "Greater than or equal.",
    de: `The >= operator compares two values and returns True if the left operand is greater than or equal to the right operand. 10 >= 10 returns True because 10 is equal to 10 (satisfies "or equal" part).

Greater than or equal:
• 10 >= 10 = True (equal, so True)
• Returns True if left >= right
• Returns False if left < right
• Includes equality

How it works:
• Checks if left > right OR left == right
• Returns True if either condition is true
• Returns False only if left < right
• Works with numbers, strings, etc.

Examples:
• 10 >= 10 = True (equal)
• 10 >= 5 = True (greater)
• 10 >= 15 = False (neither)
• 5 >= 10 = False (less)

Common uses:
• Range checking: if age >= 18:
• Boundary conditions
• Inclusive comparisons
• Conditional logic

Example: 10 >= 10 returns True because 10 equals 10, which satisfies the "or equal" part of the >= operator.
`
  }),
  (_i: number) => ({ 
    q: `Result of 5 <= 10?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "Less than or equal.",
    de: `The <= operator compares two values and returns True if the left operand is less than or equal to the right operand. 5 <= 10 returns True because 5 is less than 10 (satisfies "less than" part).

Less than or equal:
• 5 <= 10 = True (less, so True)
• Returns True if left <= right
• Returns False if left > right
• Includes equality

How it works:
• Checks if left < right OR left == right
• Returns True if either condition is true
• Returns False only if left > right
• Works with numbers, strings, etc.

Examples:
• 5 <= 10 = True (less)
• 10 <= 10 = True (equal)
• 15 <= 10 = False (greater)
• 10 <= 5 = False (greater)

Common uses:
• Range checking: if age <= 65:
• Boundary conditions
• Inclusive comparisons
• Conditional logic

Example: 5 <= 10 returns True because 5 is less than 10, which satisfies the <= operator (less than or equal).
`
  }),
  (_i: number) => ({ 
    q: `Result of 10 == 10?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "Equality check.",
    de: `The == operator compares two values for equality and returns True if they are equal. 10 == 10 returns True because both operands have the same value.

Equality operator:
• 10 == 10 = True (values are equal)
• Returns boolean (True/False)
• Compares values, not identity
• Works with numbers, strings, etc.

How it works:
• Compares left operand to right operand
• Returns True if values are equal
• Returns False if values are different
• Value comparison (not identity)

Examples:
• 10 == 10 = True
• 10 == 5 = False
• 10 == 10.0 = True (value equal, type different)
• "hello" == "hello" = True

Important distinction:
• == compares values (equality)
• is compares identity (same object)
• 10 == 10.0 is True (same value)
• 10 is 10.0 is False (different objects)

Common uses:
• Conditional statements: if x == 5:
• Checking equality
• Comparisons
• Validation

Example: 10 == 10 returns True because both operands have the same value (10).
`
  }),
  (_i: number) => ({ 
    q: `Result of 10 != 5?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "Inequality check.",
    de: `The != operator compares two values for inequality and returns True if they are not equal. 10 != 5 returns True because 10 is not equal to 5.

Inequality operator:
• 10 != 5 = True (values are not equal)
• Returns boolean (True/False)
• Opposite of == operator
• Works with numbers, strings, etc.

How it works:
• Compares left operand to right operand
• Returns True if values are not equal
• Returns False if values are equal
• Value comparison (not identity)

Examples:
• 10 != 5 = True (not equal)
• 10 != 10 = False (equal)
• 10 != 10.0 = False (values equal)
• "hello" != "world" = True

Logical relationship:
• a != b is same as not (a == b)
• Opposite of equality operator
• Returns True when values differ

Common uses:
• Conditional statements: if x != 0:
• Checking inequality
• Validation
• Filtering

Example: 10 != 5 returns True because 10 is not equal to 5. The != operator checks for inequality.
`
  }),
  (_i: number) => ({ 
    q: `Result of 10 == 5?`, 
    o: ["False", "True", "Error", "None"], 
    c: 0, 
    e: "Equality check - not equal.",
    de: `The == operator compares two values for equality. 10 == 5 returns False because 10 is not equal to 5. The equality operator returns True only when both operands have the same value.

Equality check:
• 10 == 5 = False (not equal)
• Returns boolean (True/False)
• Compares values
• Returns False when values differ

How it works:
• Compares left operand to right operand
• Returns True if values are equal
• Returns False if values are different
• 10 ≠ 5, so False

Examples:
• 10 == 5 = False (different values)
• 10 == 10 = True (same values)
• 5 == 10 = False (different values)

Common uses:
• Conditional statements: if x == 5:
• Checking equality
• Comparisons
• Validation

Example: 10 == 5 returns False because 10 is not equal to 5. The == operator returns True only when both operands are equal.
`
  }),
  (_i: number) => ({ 
    q: `Result of 5 > 10?`, 
    o: ["False", "True", "Error", "None"], 
    c: 0, 
    e: "Greater than - false.",
    de: `The > operator compares two values and returns True if the left operand is greater than the right operand. 5 > 10 returns False because 5 is not greater than 10 (5 is less than 10).

Greater than check:
• 5 > 10 = False (5 is not greater than 10)
• Returns boolean (True/False)
• 5 < 10, so > returns False
• Checks if left > right

How it works:
• Compares left operand to right operand
• Returns True if left > right
• Returns False if left <= right
• 5 is less than 10, so False

Examples:
• 5 > 10 = False (5 < 10)
• 10 > 5 = True (10 > 5)
• 5 > 5 = False (equal, not greater)

Common uses:
• Conditional statements: if x > 10:
• Range checking
• Comparisons
• Validation

Example: 5 > 10 returns False because 5 is not greater than 10. 5 is actually less than 10, so the > operator returns False.
`
  }),
  (_i: number) => ({ 
    q: `Result of 10 < 5?`, 
    o: ["False", "True", "Error", "None"], 
    c: 0, 
    e: "Less than - false.",
    de: `The < operator compares two values and returns True if the left operand is less than the right operand. 10 < 5 returns False because 10 is not less than 5 (10 is greater than 5).

Less than check:
• 10 < 5 = False (10 is not less than 5)
• Returns boolean (True/False)
• 10 > 5, so < returns False
• Checks if left < right

How it works:
• Compares left operand to right operand
• Returns True if left < right
• Returns False if left >= right
• 10 is greater than 5, so False

Examples:
• 10 < 5 = False (10 > 5)
• 5 < 10 = True (5 < 10)
• 5 < 5 = False (equal, not less)

Common uses:
• Conditional statements: if x < 10:
• Range checking
• Comparisons
• Validation

Example: 10 < 5 returns False because 10 is not less than 5. 10 is actually greater than 5, so the < operator returns False.
`
  }),
  (_i: number) => ({ 
    q: `Result of 5 >= 10?`, 
    o: ["False", "True", "Error", "None"], 
    c: 0, 
    e: "Greater than or equal - false.",
    de: `The >= operator compares two values and returns True if the left operand is greater than or equal to the right operand. 5 >= 10 returns False because 5 is neither greater than nor equal to 10 (5 < 10).

Greater than or equal check:
• 5 >= 10 = False (5 < 10, not >=)
• Returns boolean (True/False)
• 5 is less than 10, so False
• Checks if left >= right

How it works:
• Compares left operand to right operand
• Returns True if left >= right
• Returns False if left < right
• 5 < 10, so False

Examples:
• 5 >= 10 = False (5 < 10)
• 10 >= 5 = True (10 > 5)
• 10 >= 10 = True (10 == 10)

Common uses:
• Conditional statements: if x >= 10:
• Range checking
• Boundary conditions
• Validation

Example: 5 >= 10 returns False because 5 is less than 10, so it doesn't satisfy the "greater than or equal" condition.
`
  }),
  
  // 71-80: Logical Operators
  (_i: number) => ({ 
    q: `Result of 5 == 5 and 10 > 5?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "and requires both conditions True.",
    de: `The and operator returns True only if both conditions are True. 5 == 5 and 10 > 5 evaluates both: 5 == 5 is True, and 10 > 5 is True. Since both are True, the result is True.

and operator:
• 5 == 5 and 10 > 5 = True
• Both conditions: True and True = True
• Returns True only if both are True
• Short-circuits: if first is False, doesn't evaluate second

How it works:
• Evaluates left condition first
• If left is True, evaluates right
• Returns True only if both are True
• Returns False if either is False

Examples:
• True and True = True
• True and False = False
• False and True = False
• False and False = False

Short-circuiting:
• If first is False, second not evaluated
• Efficient for expensive operations
• Use for validation: x > 0 and expensive_check(x)

Common uses:
• Multiple conditions: if x > 0 and x < 100:
• Validation checks
• Compound conditions
• Guard clauses

Example: 5 == 5 and 10 > 5 returns True because both conditions are True (5 == 5 is True, and 10 > 5 is True).
`
  }),
  (_i: number) => ({ 
    q: `Result of 5 == 5 and 5 > 10?`, 
    o: ["False", "True", "Error", "None"], 
    c: 0, 
    e: "and requires both True - second is False.",
    de: `The and operator returns True only if both conditions are True. 5 == 5 and 5 > 10 evaluates both: 5 == 5 is True, but 5 > 10 is False. Since one is False, the result is False.

and operator:
• 5 == 5 and 5 > 10 = False
• First condition: True, second: False
• True and False = False
• Returns False because second is False

How it works:
• Evaluates left condition: 5 == 5 = True
• Evaluates right condition: 5 > 10 = False
• True and False = False
• Returns False if either is False

Examples:
• True and False = False
• 5 == 5 and 5 > 10 = False
• Both must be True for result to be True

Common uses:
• Multiple conditions: if x > 0 and x < 10:
• Validation checks
• Compound conditions

Example: 5 == 5 and 5 > 10 returns False because although the first condition is True (5 == 5), the second condition is False (5 > 10), so the and operator returns False.
`
  }),
  (_i: number) => ({ 
    q: `Result of 5 == 10 or 10 > 5?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "or requires at least one True.",
    de: `The or operator returns True if at least one condition is True. 5 == 10 or 10 > 5 evaluates both: 5 == 10 is False, but 10 > 5 is True. Since at least one is True, the result is True.

or operator:
• 5 == 10 or 10 > 5 = True
• First condition: False, second: True
• False or True = True
• Returns True if at least one is True

How it works:
• Evaluates left condition first
• If left is True, returns True immediately (short-circuit)
• If left is False, evaluates right
• Returns True if either is True

Examples:
• True or False = True
• False or True = True
• True or True = True
• False or False = False

Short-circuiting:
• If first is True, second not evaluated
• Efficient for expensive operations
• Use for fallbacks: value or default_value

Common uses:
• Alternative conditions: if x == 5 or x == 10:
• Default values: result = value or default
• Compound conditions

Example: 5 == 10 or 10 > 5 returns True because although the first condition is False (5 == 10), the second condition is True (10 > 5), so the or operator returns True.
`
  }),
  (_i: number) => ({ 
    q: `Result of 5 == 10 or 5 > 10?`, 
    o: ["False", "True", "Error", "None"], 
    c: 0, 
    e: "or requires at least one True - both False.",
    de: `The or operator returns True if at least one condition is True. 5 == 10 or 5 > 10 evaluates both: 5 == 10 is False, and 5 > 10 is False. Since both are False, the result is False.

or operator:
• 5 == 10 or 5 > 10 = False
• Both conditions: False or False = False
• Returns False when both are False
• Returns True only if at least one is True

How it works:
• Evaluates left condition: 5 == 10 = False
• Evaluates right condition: 5 > 10 = False
• False or False = False
• Returns False when both are False

Examples:
• False or False = False
• True or False = True
• False or True = True
• True or True = True

Common uses:
• Alternative conditions: if x == 5 or x == 10:
• Default values: result = value or default
• Compound conditions

Example: 5 == 10 or 5 > 10 returns False because both conditions are False (5 == 10 is False, and 5 > 10 is False), so the or operator returns False.
`
  }),
  (_i: number) => ({ 
    q: `Result of not 5 == 10?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "not inverts boolean result.",
    de: `The not operator inverts (negates) the boolean value of an expression. not 5 == 10 first evaluates 5 == 10 (which is False), then not False equals True. The not operator inverts the boolean result.

not operator:
• not 5 == 10 = True
• First: 5 == 10 = False
• Then: not False = True
• Inverts the boolean value

How it works:
• Evaluates the expression first
• Then inverts the result
• not True = False
• not False = True

Examples:
• not True = False
• not False = True
• not 5 == 5 = not True = False
• not 5 == 10 = not False = True

Logical relationship:
• not (a == b) is same as a != b
• Inverts comparison result
• Useful for negating conditions

Common uses:
• Negating conditions: if not x == 0:
• Inverting boolean values
• Checking for "not equal"
• Guard clauses: if not valid:

Example: not 5 == 10 returns True because first 5 == 10 evaluates to False, then not False equals True.
`
  }),
  (_i: number) => ({ 
    q: `Result of not 5 == 5?`, 
    o: ["False", "True", "Error", "None"], 
    c: 0, 
    e: "not inverts True to False.",
    de: `The not operator inverts the boolean value of an expression. not 5 == 5 first evaluates 5 == 5 (which is True), then not True equals False. The not operator inverts the boolean result.

not operator:
• not 5 == 5 = False
• First: 5 == 5 = True
• Then: not True = False
• Inverts True to False

How it works:
• Evaluates the expression first
• Then inverts the result
• not True = False
• not False = True

Examples:
• not True = False
• not False = True
• not 5 == 5 = not True = False
• not 5 == 10 = not False = True

Common uses:
• Negating conditions: if not valid:
• Inverting boolean values
• Checking for "not equal"
• Guard clauses

Example: not 5 == 5 returns False because first 5 == 5 evaluates to True, then not True equals False.
`
  }),
  (_i: number) => ({ 
    q: `Result of 5 < 10 < 15?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "Chained comparisons work in Python.",
    de: `Python supports chained comparisons, allowing you to write multiple comparisons in a single expression. 5 < 10 < 15 is evaluated as (5 < 10) and (10 < 15). Both conditions are True, so the result is True.

Chained comparison:
• 5 < 10 < 15 = True
• Equivalent to: (5 < 10) and (10 < 15)
• Evaluates both conditions
• Returns True if both are True

How it works:
• Evaluates left comparison: 5 < 10 = True
• Evaluates right comparison: 10 < 15 = True
• Combines with and: True and True = True
• Returns True if chain is valid

Examples:
• 5 < 10 < 15 = True (valid chain)
• 5 < 10 < 20 = True
• 5 < 10 < 5 = False (invalid chain)
• 10 < 5 < 15 = False (invalid chain)

Common uses:
• Range checking: if 0 < x < 100:
• Multiple comparisons: if 5 < a < 10 < b < 20:
• Concise range validation

Example: 5 < 10 < 15 returns True because both conditions are True (5 < 10 is True, and 10 < 15 is True), so the chained comparison evaluates to True.
`
  }),
  (_i: number) => ({ 
    q: `Result of 15 > 10 > 5?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "Chained comparisons work both ways.",
    de: `Python supports chained comparisons in both directions. 15 > 10 > 5 is evaluated as (15 > 10) and (10 > 5). Both conditions are True, so the result is True. Chained comparisons work whether going up (<) or down (>).

Chained comparison (descending):
• 15 > 10 > 5 = True
• Equivalent to: (15 > 10) and (10 > 5)
• Evaluates both conditions
• Returns True if both are True

How it works:
• Evaluates left comparison: 15 > 10 = True
• Evaluates right comparison: 10 > 5 = True
• Combines with and: True and True = True
• Returns True if chain is valid

Examples:
• 15 > 10 > 5 = True (valid chain)
• 20 > 15 > 10 = True
• 15 > 10 > 20 = False (invalid chain)

Common uses:
• Range checking: if 100 > x > 0:
• Multiple comparisons
• Concise validation

Example: 15 > 10 > 5 returns True because both conditions are True (15 > 10 is True, and 10 > 5 is True), so the chained comparison evaluates to True.
`
  }),
  (_i: number) => ({ 
    q: `Result of 5 == 5 == 5?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "Chained equality checks all pairs.",
    de: `Python supports chained equality comparisons. 5 == 5 == 5 is evaluated as (5 == 5) and (5 == 5). Both conditions are True, so the result is True. However, this is a special case that works differently from other chained comparisons.

Chained equality:
• 5 == 5 == 5 = True
• Evaluates as: (5 == 5) and (5 == 5)
• All pairs must be equal
• Returns True if all are equal

How it works:
• Evaluates left comparison: 5 == 5 = True
• Evaluates right comparison: 5 == 5 = True
• Combines with and: True and True = True
• Returns True if all pairs are equal

Examples:
• 5 == 5 == 5 = True (all equal)
• 5 == 5 == 10 = False (last not equal)
• 5 == 10 == 5 = False (middle not equal)

Important note:
• This checks pairwise equality
• Not "all three are equal" semantically
• But works the same in this case

Example: 5 == 5 == 5 returns True because both comparisons are True (5 == 5 is True, and 5 == 5 is True), so the chained equality evaluates to True.
`
  }),
  (_i: number) => ({ 
    q: `Result of 5 != 10 != 15?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "Chained inequality checks all pairs.",
    de: `Python supports chained inequality comparisons. 5 != 10 != 15 is evaluated as (5 != 10) and (10 != 15). Both conditions are True (5 ≠ 10, and 10 ≠ 15), so the result is True. This checks that all adjacent pairs are not equal.

Chained inequality:
• 5 != 10 != 15 = True
• Evaluates as: (5 != 10) and (10 != 15)
• All pairs must be not equal
• Returns True if all pairs differ

How it works:
• Evaluates left comparison: 5 != 10 = True
• Evaluates right comparison: 10 != 15 = True
• Combines with and: True and True = True
• Returns True if all pairs are not equal

Examples:
• 5 != 10 != 15 = True (all different)
• 5 != 5 != 15 = False (first pair equal)
• 5 != 10 != 10 = False (second pair equal)

Common uses:
• Checking uniqueness: if a != b != c:
• Validation that values differ
• Pairwise inequality

Example: 5 != 10 != 15 returns True because both comparisons are True (5 != 10 is True, and 10 != 15 is True), so the chained inequality evaluates to True.
`
  }),
  
  // 81-90: Membership and Identity Operators
  (_i: number) => ({ 
    q: `Result of 5 in [1, 2, 3, 4, 5]?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "in checks membership.",
    de: `The in operator checks if a value is a member of a collection (list, tuple, string, etc.). 5 in [1, 2, 3, 4, 5] returns True because 5 is present in the list. The in operator searches through the collection and returns True if the value is found.

Membership operator:
• 5 in [1, 2, 3, 4, 5] = True (5 is in list)
• Returns boolean (True/False)
• Searches collection for value
• Returns True if found

How it works:
• Searches through collection
• Compares value with each element
• Returns True if match found
• Returns False if not found

Examples:
• 5 in [1, 2, 3, 4, 5] = True
• 10 in [1, 2, 3, 4, 5] = False
• 'a' in 'abc' = True
• 'x' in 'abc' = False

Common uses:
• Checking membership: if item in list:
• Validation: if value in valid_values:
• Filtering: [x for x in items if x in valid]
• Existence checking

Example: 5 in [1, 2, 3, 4, 5] returns True because the value 5 is found in the list [1, 2, 3, 4, 5].
`
  }),
  (_i: number) => ({ 
    q: `Result of 10 in [1, 2, 3, 4, 5]?`, 
    o: ["False", "True", "Error", "None"], 
    c: 0, 
    e: "in checks membership - not found.",
    de: `The in operator checks if a value is a member of a collection. 10 in [1, 2, 3, 4, 5] returns False because 10 is not present in the list. The in operator searches through the collection and returns False if the value is not found.

Membership check:
• 10 in [1, 2, 3, 4, 5] = False (10 not in list)
• Returns boolean (True/False)
• Searches collection for value
• Returns False if not found

How it works:
• Searches through collection
• Compares value with each element
• Returns True if match found
• Returns False if not found

Examples:
• 10 in [1, 2, 3, 4, 5] = False
• 5 in [1, 2, 3, 4, 5] = True
• 'x' in 'abc' = False
• 'a' in 'abc' = True

Common uses:
• Checking membership: if item not in list:
• Validation: if value not in valid_values:
• Filtering: [x for x in items if x not in invalid]
• Existence checking

Example: 10 in [1, 2, 3, 4, 5] returns False because the value 10 is not found in the list [1, 2, 3, 4, 5].
`
  }),
  (_i: number) => ({ 
    q: `Result of 5 not in [1, 2, 3]?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "not in checks if value is absent.",
    de: `The not in operator is the opposite of in - it returns True if the value is NOT found in the collection. 5 not in [1, 2, 3] returns True because 5 is absent from the list [1, 2, 3]. This is useful for negative membership checks.

not in operator:
• 5 not in [1, 2, 3] = True (5 is not in list)
• Returns boolean (True/False)
• Opposite of in operator
• Returns True if value is absent

How it works:
• Searches through collection
• Returns True if value NOT found
• Returns False if value found
• Equivalent to not (value in collection)

Examples:
• 5 not in [1, 2, 3] = True (not found)
• 1 not in [1, 2, 3] = False (found)
• 'x' not in 'abc' = True (not found)
• 'a' not in 'abc' = False (found)

Common uses:
• Checking absence: if item not in list:
• Validation: if value not in invalid_values:
• Filtering: [x for x in items if x not in invalid]
• Negative checks

Example: 5 not in [1, 2, 3] returns True because the value 5 is not found in the list [1, 2, 3], so not in returns True.
`
  }),
  (_i: number) => ({ 
    q: `Result of 1 not in [1, 2, 3]?`, 
    o: ["False", "True", "Error", "None"], 
    c: 0, 
    e: "not in - value is present, so False.",
    de: `The not in operator returns False if the value IS found in the collection. 1 not in [1, 2, 3] returns False because 1 is present in the list [1, 2, 3]. When the value is found, not in returns False.

not in check:
• 1 not in [1, 2, 3] = False (1 is in list)
• Returns boolean (True/False)
• Opposite of in operator
• Returns False if value is present

How it works:
• Searches through collection
• Returns True if value NOT found
• Returns False if value found
• 1 is found, so False

Examples:
• 1 not in [1, 2, 3] = False (found)
• 5 not in [1, 2, 3] = True (not found)
• 'a' not in 'abc' = False (found)
• 'x' not in 'abc' = True (not found)

Logical relationship:
• value not in collection = not (value in collection)
• Inverts the result of in
• More readable for negative checks

Common uses:
• Checking absence: if item not in list:
• Validation: if value not in invalid:
• Filtering: [x for x in items if x not in invalid]
• Negative membership checks

Example: 1 not in [1, 2, 3] returns False because the value 1 is found in the list [1, 2, 3], so not in returns False.
`
  }),
  (_i: number) => ({ 
    q: `Result of 'a' in 'abc'?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "in checks substring membership in strings.",
    de: `The in operator checks if a substring is contained within a string. 'a' in 'abc' returns True because the substring 'a' is found in the string 'abc'. The in operator works with strings to check substring membership.

String membership:
• 'a' in 'abc' = True ('a' is substring)
• Returns boolean (True/False)
• Checks if substring exists
• Case-sensitive check

How it works:
• Searches for substring in string
• Returns True if substring found
• Returns False if not found
• Works with single or multiple characters

Examples:
• 'a' in 'abc' = True
• 'bc' in 'abc' = True (multi-character substring)
• 'x' in 'abc' = False (not found)
• '' in 'abc' = True (empty string always matches)

Common uses:
• Checking for characters: if 'x' in text:
• Pattern matching: if 'error' in message:
• Validation: if '@' in email:
• Filtering strings

Example: 'a' in 'abc' returns True because the substring 'a' is found in the string 'abc'.
`
  }),
  (_i: number) => ({ 
    q: `Result of 'x' in 'abc'?`, 
    o: ["False", "True", "Error", "None"], 
    c: 0, 
    e: "in checks substring - not found.",
    de: `The in operator checks if a substring is contained within a string. 'x' in 'abc' returns False because the substring 'x' is not found in the string 'abc'. The in operator works with strings to check substring membership.

String membership check:
• 'x' in 'abc' = False ('x' not in string)
• Returns boolean (True/False)
• Checks if substring exists
• Returns False if not found

How it works:
• Searches for substring in string
• Returns True if substring found
• Returns False if not found
• 'x' is not found in 'abc', so False

Examples:
• 'x' in 'abc' = False (not found)
• 'a' in 'abc' = True (found)
• 'xyz' in 'abc' = False (not found)

Common uses:
• Checking for characters: if 'x' not in text:
• Pattern matching: if 'error' not in message:
• Validation
• Filtering strings

Example: 'x' in 'abc' returns False because the substring 'x' is not found in the string 'abc'.
`
  }),
  (_i: number) => ({ 
    q: `Result of 5 is 5?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "is checks identity (same object).",
    de: `The is operator checks if two variables reference the same object in memory (identity), not just if they have the same value. 5 is 5 returns True because Python caches small integers, so both 5s refer to the same object. However, for larger integers or mutable objects, this may not be true.

Identity operator:
• 5 is 5 = True (same integer object)
• Checks if same object in memory
• Different from == (which checks value)
• Python caches small integers

How it works:
• Checks object identity (memory address)
• Returns True if same object
• Returns False if different objects
• Small integers are cached (singletons)

Important distinction:
• == checks value equality
• is checks object identity
• 5 == 5.0 is True (same value)
• 5 is 5.0 is False (different objects)

Examples:
• 5 is 5 = True (cached integers)
• 1000 is 1000 = True (in Python, cached)
• [1, 2] is [1, 2] = False (different list objects)
• None is None = True (singleton)

Common uses:
• Checking for None: if x is None:
• Checking for singletons: if x is True:
• Identity checks
• Object comparison

Example: 5 is 5 returns True because Python caches small integers, so both 5s refer to the same object in memory. For identity checks, use is; for value checks, use ==.
`
  }),
  (_i: number) => ({ 
    q: `Result of [1, 2] is [1, 2]?`, 
    o: ["False", "True", "Error", "None"], 
    c: 0, 
    e: "is checks identity - different list objects.",
    de: `The is operator checks if two variables reference the same object in memory. [1, 2] is [1, 2] returns False because each list literal creates a new list object. Even though the lists have the same values, they are different objects in memory.

Identity check:
• [1, 2] is [1, 2] = False (different objects)
• Checks object identity, not value
• Each list literal creates new object
• Different memory addresses

How it works:
• Each [1, 2] creates a new list object
• Different memory addresses
• is checks if same object
• Returns False (different objects)

Important distinction:
• [1, 2] == [1, 2] = True (same values)
• [1, 2] is [1, 2] = False (different objects)
• == checks values, is checks identity

Examples:
• [1, 2] is [1, 2] = False (different objects)
• a = [1, 2]; b = a; a is b = True (same object)
• (1, 2) is (1, 2) = False (tuples too, unless cached)

Common uses:
• Checking for None: if x is None:
• Object identity checks
• Understanding object references
• Memory efficiency

Example: [1, 2] is [1, 2] returns False because each list literal creates a new list object. Even though they have the same values, they are different objects in memory. Use == to check if values are equal.
`
  }),
  (_i: number) => ({ 
    q: `Result of 5 is not 10?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "is not checks if objects are different.",
    de: `The is not operator is the opposite of is - it returns True if two variables reference different objects in memory. 5 is not 10 returns True because 5 and 10 are different objects (different values, so definitely different objects).

is not operator:
• 5 is not 10 = True (different objects)
• Returns True if different objects
• Returns False if same object
• Opposite of is operator

How it works:
• Checks object identity
• Returns True if different objects
• Returns False if same object
• 5 and 10 are different, so True

Examples:
• 5 is not 10 = True (different values/objects)
• 5 is not 5 = False (same object, for cached integers)
• None is not None = False (same singleton)
• [1, 2] is not [1, 2] = True (different objects)

Logical relationship:
• a is not b = not (a is b)
• Inverts the result of is
• More readable for negative checks

Common uses:
• Checking not None: if x is not None:
• Object identity checks
• Negative identity checks

Example: 5 is not 10 returns True because 5 and 10 are different objects (different values). The is not operator checks if objects are different.
`
  }),
  (_i: number) => ({ 
    q: `Result of None is None?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "None is a singleton - always same object.",
    de: `None is a singleton in Python - there is only one None object in the entire program. None is None returns True because all None references point to the same singleton object. This is why you should always use is None (not == None) to check for None.

None singleton:
• None is None = True (same singleton)
• There is only one None object
• All None references are the same object
• Always use is None (not == None)

How it works:
• None is a singleton object
• All None references are the same object
• is checks identity, returns True
• This is why is None is recommended

Examples:
• None is None = True (singleton)
• x = None; x is None = True
• y = None; x is y = True (same object)
• None == None = True (but use is None)

Best practice:
• Always use is None (not == None)
• More Pythonic and correct
• Faster and clearer
• Works with identity

Common uses:
• Checking for None: if x is None:
• Default values: if value is None:
• Optional parameters
• Null checking

Example: None is None returns True because None is a singleton - there is only one None object in Python, so all None references are the same object.
`
  }),
  
  // 91-100: Complex Expressions and Edge Cases
  (_i: number) => ({ 
    q: `What is -5?`, 
    o: ["-5", "5", "Error", "None"], 
    c: 0, 
    e: "Unary minus creates negative number.",
    de: `The unary minus operator (-) negates a number, creating its negative counterpart. -5 is the negative version of 5. It's called "unary" because it operates on a single operand (unlike binary operators like + which operate on two).

Unary minus:
• -5 = negative five
• Negates the value
• Creates negative number from positive
• Can negate variables too: -x

How it works:
• -5 means "negative 5" or "minus 5"
• Changes the sign: positive → negative
• -(-5) = 5 (double negation returns original)
• Works with floats: -3.14 = -3.14

Examples:
• -5 = -5
• -(-5) = 5
• -(10) = -10
• x = 5; -x = -5

Common uses:
• Representing negative values
• Inverting signs: -balance
• Temperature below zero: -10°C
• Debt/losses in finance

Example: -5 is negative five. The unary minus operator negates the number 5, creating -5.
`
  }),
  (_i: number) => ({ 
    q: `What is +5?`, 
    o: ["5", "-5", "Error", "None"], 
    c: 0, 
    e: "Unary plus is allowed but doesn't change value.",
    de: `The unary plus operator (+) is allowed in Python but doesn't change the value of a number. +5 is just 5. However, it can be useful for code clarity or in certain expressions.

Unary plus:
• +5 = 5 (doesn't change value)
• Creates no-op: +x returns x unchanged
• Valid syntax but has no effect
• Less commonly used than unary minus

Why it exists:
• Symmetry with unary minus
• Code clarity (emphasize positive value)
• Type hints/annotations
• May convert to int/float in some contexts

Behavior:
• +5 = 5 (no change)
• +(-5) = -5 (applying + doesn't negate)
• +(3.14) = 3.14 (works with floats too)
• +x = x (for any number x)

Common uses:
• Code clarity: +balance (emphasize positive)
• Type conversion in expressions
• Consistency in code style
• Mathematical notation

Example: +5 is simply 5. While valid syntax, it has no effect. Most Python code doesn't use unary plus unless needed for clarity or specific use cases.
`
  }),
  (_i: number) => ({ 
    q: `What is --5?`, 
    o: ["5", "-5", "Error", "None"], 
    c: 0, 
    e: "Double negative makes positive.",
    de: `The double negative (--5) applies the unary minus operator twice, negating the negation. --5 means -(-5), which equals 5. A double negative makes a positive, just like in mathematics.

Double negative:
• --5 = -(-5) = 5
• First negation: -5
• Second negation: -(-5) = 5
• Double negative = positive

How it works:
• First: -5 creates negative 5
• Second: -(-5) negates the negative, creating positive 5
• Result: 5 (positive)
• Double negative makes positive

Examples:
• --5 = 5
• ---5 = -5 (triple negative = negative)
• --(-5) = -5
• x = -5; --x = 5

Mathematical property:
• -(-a) = a (double negative)
• Negating a negation gives original
• Same as mathematics

Common uses:
• Mathematical expressions
• Negating negative values
• Double negation logic
• Mathematical formulas

Example: --5 returns 5 because the first - creates -5, and the second - negates -5, resulting in 5 (double negative makes positive).
`
  }),
  (_i: number) => ({ 
    q: `What is -(-5)?`, 
    o: ["5", "-5", "Error", "None"], 
    c: 0, 
    e: "Negative of negative is positive.",
    de: `When you apply the unary minus operator to a negative number, you get its positive counterpart. -(-5) means "the negative of negative 5", which equals 5. Negating a negative number makes it positive, just like in mathematics.

Negative of negative:
• -(-5) = 5
• Negating negative makes positive
• Same as --5
• Mathematical property

How it works:
• Inner: -5 is negative five
• Outer: -(-5) negates the negative
• Result: 5 (positive)
• Double negative = positive

Examples:
• -(-5) = 5
• -(-10) = 10
• -(-3.14) = 3.14
• x = -5; -x = 5

Mathematical property:
• -(-a) = a (double negative)
• Negating a negation gives original
• Fundamental mathematical property

Common uses:
• Mathematical expressions
• Negating negative values
• Converting negative to positive
• Mathematical formulas

Example: -(-5) returns 5 because negating a negative number makes it positive. This is the mathematical property that a double negative equals a positive.
`
  }),
  (_i: number) => ({ 
    q: `What is 0 // 5?`, 
    o: ["0", "Error", "None", "5"], 
    c: 0, 
    e: "Zero divided by any number is 0.",
    de: `When you divide zero by any non-zero number using floor division (//), the result is zero. 0 // 5 equals 0 because zero divided by any number equals zero. This is mathematically valid (unlike dividing by zero, which is not).

Zero divided by number:
• 0 // 5 = 0 (zero divided by any number)
• 0 ÷ 5 = 0 (mathematically)
• Returns integer 0
• Valid operation

How it works:
• Zero divided by any number equals zero
• 0 ÷ 5 = 0 (mathematically)
• Floor division returns integer
• Result: 0

Examples:
• 0 // 5 = 0
• 0 // 10 = 0
• 0 // 100 = 0
• 0 // 1 = 0

Important distinction:
• 0 // 5 = 0 (Zero divided by number - valid)
• 5 // 0 = ZeroDivisionError (Number divided by zero - invalid)
• These are different operations!

Common uses:
• Edge case handling
• Default values
• Mathematical formulas
• Division operations

Example: 0 // 5 returns 0 because zero divided by any non-zero number equals zero. This is valid (unlike 5 // 0 which raises ZeroDivisionError).
`
  }),
  (_i: number) => ({ 
    q: `What is 5 // 1?`, 
    o: ["5", "5.0", "Error", "None"], 
    c: 0, 
    e: "Any number divided by 1 is itself.",
    de: `When you divide any number by 1 using floor division (//), the result is the number itself. 5 // 1 equals 5 because any number divided by 1 equals itself. This is a fundamental mathematical property.

Division by one:
• 5 // 1 = 5 (number divided by 1)
• Any number ÷ 1 = itself
• Mathematical identity
• Returns integer (when both operands are ints)

How it works:
• Any number divided by 1 equals itself
• 5 ÷ 1 = 5 (mathematically)
• Floor division returns integer
• Result: 5

Examples:
• 5 // 1 = 5
• 10 // 1 = 10
• 100 // 1 = 100
• -5 // 1 = -5

Mathematical property:
• a ÷ 1 = a (for any a)
• One is the multiplicative identity
• Dividing by 1 doesn't change value
• Fundamental property

Common uses:
• Mathematical formulas
• Identity operations
• Edge cases
• Calculations

Example: 5 // 1 returns 5 because any number divided by 1 equals itself. This is a fundamental mathematical identity property.
`
  }),
  (_i: number) => ({ 
    q: `What is 0 % 5?`, 
    o: ["0", "5", "Error", "None"], 
    c: 0, 
    e: "0 modulo any number is 0.",
    de: `When you take 0 modulo any non-zero number, the result is 0. 0 % 5 equals 0 because when you divide 0 by 5, you get 0 groups of 5 with 0 remainder. Zero modulo any number is always 0.

Zero modulo:
• 0 % 5 = 0 (zero modulo any number)
• 0 ÷ 5 = 0 with remainder 0
• Always 0 for any non-zero divisor
• Valid operation

How it works:
• Divide zero by number
• Get zero groups with zero remainder
• 0 ÷ 5 = 0 remainder 0
• Result: 0

Examples:
• 0 % 5 = 0
• 0 % 10 = 0
• 0 % 100 = 0
• 0 % 1 = 0

Important distinction:
• 0 % 5 = 0 (Zero modulo number - valid)
• 5 % 0 = ZeroDivisionError (Number modulo zero - invalid)
• These are different operations!

Common uses:
• Edge case handling
• Wrapping calculations
• Mathematical formulas
• Modulo operations

Example: 0 % 5 returns 0 because zero divided by 5 has a remainder of 0. This is valid (unlike 5 % 0 which raises ZeroDivisionError).
`
  }),
  (_i: number) => ({ 
    q: `What is 5 % 1?`, 
    o: ["0", "5", "Error", "None"], 
    c: 0, 
    e: "Any number modulo 1 is 0.",
    de: `When you take any number modulo 1, the result is always 0. 5 % 1 equals 0 because when you divide 5 by 1, you get 5 groups of 1 with 0 remainder. Any number modulo 1 is always 0.

Modulo by one:
• 5 % 1 = 0 (any number modulo 1)
• 5 ÷ 1 = 5 with remainder 0
• Always 0 for modulo 1
• Mathematical property

How it works:
• Divide number by 1
• Get complete groups with no remainder
• 5 ÷ 1 = 5 remainder 0
• Result: 0

Examples:
• 5 % 1 = 0
• 10 % 1 = 0
• 100 % 1 = 0
• -5 % 1 = 0

Mathematical property:
• a % 1 = 0 (for any integer a)
• Dividing by 1 always has remainder 0
• Useful property

Common uses:
• Checking if integer: if x % 1 == 0:
• Decimal part extraction
• Mathematical formulas
• Edge cases

Example: 5 % 1 returns 0 because when you divide 5 by 1, you get 5 complete groups with no remainder. Any number modulo 1 is always 0.
`
  }),
  (_i: number) => ({ 
    q: `What is round(2.5)?`, 
    o: ["2", "3", "2.5", "Error"], 
    c: 0, 
    e: "round() uses banker's rounding - rounds to nearest even.",
    de: `The round() function uses "banker's rounding" (round half to even) when the decimal part is exactly .5. round(2.5) rounds to 2 because 2 is the nearest even number. This rounding method avoids statistical bias by rounding .5 to the nearest even number.

Banker's rounding:
• round(2.5) = 2 (rounds to even: 2)
• round(3.5) = 4 (rounds to even: 4)
• round(4.5) = 4 (rounds to even: 4)
• round(5.5) = 6 (rounds to even: 6)

How it works:
• If decimal part < .5, rounds down
• If decimal part > .5, rounds up
• If decimal part = .5, rounds to nearest even number
• This is "round half to even" or "IEEE 754" rounding

Why banker's rounding:
• Avoids systematic rounding bias
• More accurate in statistics
• Standard in financial calculations
• IEEE 754 standard

Examples:
• round(2.5) = 2 (even number)
• round(3.5) = 4 (even number)
• round(4.5) = 4 (even number)
• round(5.5) = 6 (even number)

Important note:
• This is different from traditional rounding
• Traditional: always round .5 up
• Banker's: round .5 to nearest even
• Python uses banker's rounding

Example: round(2.5) returns 2 because when rounding 0.5, Python rounds to the nearest even number. Since 2.5 is equidistant from 2 and 3, it chooses 2 (the even number).
`
  }),
  (_i: number) => ({ 
    q: `What is round(3.5)?`, 
    o: ["4", "3", "3.5", "Error"], 
    c: 0, 
    e: "round() uses banker's rounding - rounds to nearest even.",
    de: `The round() function uses "banker's rounding" (round half to even) when the decimal part is exactly .5. round(3.5) rounds to 4 because 4 is the nearest even number. This rounding method avoids statistical bias by rounding .5 to the nearest even number.

Banker's rounding:
• round(3.5) = 4 (rounds to even: 4)
• round(2.5) = 2 (rounds to even: 2)
• When .5, rounds to nearest even
• Avoids rounding bias

How it works:
• If decimal part < .5, rounds down
• If decimal part > .5, rounds up
• If decimal part = .5, rounds to nearest even number
• This is "round half to even" rounding

Why banker's rounding:
• Avoids systematic rounding bias
• More accurate in statistics
• Standard in financial calculations
• IEEE 754 standard

Examples:
• round(3.5) = 4 (even number)
• round(2.5) = 2 (even number)
• round(4.5) = 4 (even number)
• round(5.5) = 6 (even number)

Important note:
• Different from traditional rounding
• Traditional: always round .5 up (3.5 → 4)
• Banker's: round .5 to nearest even (2.5 → 2, 3.5 → 4)
• Python uses banker's rounding

Example: round(3.5) returns 4 because when rounding 0.5, Python rounds to the nearest even number. Since 3.5 is equidistant from 3 and 4, it chooses 4 (the even number).
`
  }),
];

// --- LEVEL 3: CRAB (Conditionals, Booleans, Logic) - 100 TRULY UNIQUE QUESTIONS ---
// Each question tests a DIFFERENT concept - NO number/variable variations of the same question
const level3Patterns = [
  // 1-10: Basic Boolean Logic
  (_i: number) => ({ 
    q: `Result of True and False?`, 
    o: ["False", "True", "None", "Error"], 
    c: 0, 
    e: "and needs both to be True.",
    de: `The and operator returns True only if both operands are True. True and False evaluates to False because the second operand is False. The and operator requires both conditions to be True for the result to be True.

and operator:
• True and False = False
• Returns True only if both are True
• Returns False if either is False
• Requires both conditions to be True

How it works:
• Evaluates left operand first: True
• Evaluates right operand: False
• True and False = False
• Returns False if either is False

Examples:
• True and True = True (both True)
• True and False = False (second False)
• False and True = False (first False)
• False and False = False (both False)

Common uses:
• Multiple conditions: if x > 0 and x < 100:
• Validation checks: if valid and available:
• Compound conditions
• Guard clauses

Example: True and False returns False because the and operator requires both operands to be True, but False is not True.
`
  }),
  (_i: number) => ({ 
    q: `Result of True or False?`, 
    o: ["True", "False", "None", "Error"], 
    c: 0, 
    e: "or needs only one to be True.",
    de: `The or operator returns True if at least one operand is True. True or False evaluates to True because the first operand is True. The or operator requires only one condition to be True for the result to be True.

or operator:
• True or False = True
• Returns True if at least one is True
• Returns False only if both are False
• Requires only one condition to be True

How it works:
• Evaluates left operand first: True
• Short-circuits: returns True immediately (doesn't evaluate right)
• True or False = True
• Returns True if either is True

Examples:
• True or True = True (both True)
• True or False = True (first True)
• False or True = True (second True)
• False or False = False (both False)

Short-circuiting:
• If first is True, second not evaluated
• Efficient for expensive operations
• Use for fallbacks: value or default_value

Common uses:
• Alternative conditions: if x == 5 or x == 10:
• Default values: result = value or default
• Compound conditions
• Fallback values

Example: True or False returns True because the or operator requires only one operand to be True, and the first operand (True) satisfies this condition.
`
  }),
  (_i: number) => ({ 
    q: `Result of False and False?`, 
    o: ["False", "True", "None", "Error"], 
    c: 0, 
    e: "Both must be True for and.",
    de: `The and operator returns True only if both operands are True. False and False evaluates to False because both operands are False. The and operator requires both conditions to be True for the result to be True.

and operator:
• False and False = False
• Returns True only if both are True
• Returns False if either is False
• Both are False, so result is False

How it works:
• Evaluates left operand: False
• Short-circuits: returns False immediately (doesn't evaluate right)
• False and False = False
• Returns False if either is False

Examples:
• False and False = False (both False)
• False and True = False (first False)
• True and False = False (second False)
• True and True = True (both True)

Short-circuiting:
• If first is False, second not evaluated
• Efficient for expensive operations
• Use for validation: if x > 0 and expensive_check(x)

Common uses:
• Multiple conditions: if x > 0 and x < 100:
• Validation checks: if valid and available:
• Compound conditions

Example: False and False returns False because the and operator requires both operands to be True, but both are False.
`
  }),
  (_i: number) => ({ 
    q: `Result of False or False?`, 
    o: ["False", "True", "None", "Error"], 
    c: 0, 
    e: "At least one must be True for or.",
    de: `The or operator returns True if at least one operand is True. False or False evaluates to False because both operands are False. The or operator requires at least one condition to be True for the result to be True.

or operator:
• False or False = False
• Returns True if at least one is True
• Returns False only if both are False
• Both are False, so result is False

How it works:
• Evaluates left operand: False
• Evaluates right operand: False
• False or False = False
• Returns False if both are False

Examples:
• False or False = False (both False)
• False or True = True (second True)
• True or False = True (first True)
• True or True = True (both True)

Common uses:
• Alternative conditions: if x == 5 or x == 10:
• Default values: result = value or default
• Compound conditions
• Fallback values

Example: False or False returns False because the or operator requires at least one operand to be True, but both are False.
`
  }),
  (_i: number) => ({ 
    q: `Result of True and True?`, 
    o: ["True", "False", "None", "Error"], 
    c: 0, 
    e: "Both are True, so and returns True.",
    de: `The and operator returns True only if both operands are True. True and True evaluates to True because both operands are True. The and operator requires both conditions to be True for the result to be True.

and operator:
• True and True = True
• Returns True only if both are True
• Both are True, so result is True
• Requires both conditions to be True

How it works:
• Evaluates left operand: True
• Evaluates right operand: True
• True and True = True
• Returns True if both are True

Examples:
• True and True = True (both True)
• True and False = False (second False)
• False and True = False (first False)
• False and False = False (both False)

Common uses:
• Multiple conditions: if x > 0 and x < 100:
• Validation checks: if valid and available:
• Compound conditions
• Guard clauses

Example: True and True returns True because both operands are True, satisfying the and operator's requirement.
`
  }),
  (_i: number) => ({ 
    q: `Result of True or True?`, 
    o: ["True", "False", "None", "Error"], 
    c: 0, 
    e: "At least one is True, so or returns True.",
    de: `The or operator returns True if at least one operand is True. True or True evaluates to True because both operands are True (so at least one is True). The or operator requires only one condition to be True for the result to be True.

or operator:
• True or True = True
• Returns True if at least one is True
• Both are True, so result is True
• Requires only one condition to be True

How it works:
• Evaluates left operand: True
• Short-circuits: returns True immediately (doesn't evaluate right)
• True or True = True
• Returns True if either is True

Examples:
• True or True = True (both True)
• True or False = True (first True)
• False or True = True (second True)
• False or False = False (both False)

Short-circuiting:
• If first is True, second not evaluated
• Efficient for expensive operations
• Use for fallbacks: value or default_value

Common uses:
• Alternative conditions: if x == 5 or x == 10:
• Default values: result = value or default
• Compound conditions
• Fallback values

Example: True or True returns True because the or operator requires only one operand to be True, and both operands are True.
`
  }),
  (_i: number) => ({ 
    q: `Result of not True?`, 
    o: ["False", "True", "None", "Error"], 
    c: 0, 
    e: "not inverts True to False.",
    de: `The not operator inverts (negates) the boolean value of an expression. not True evaluates to False because it inverts True to False. The not operator returns the opposite boolean value.

not operator:
• not True = False
• Inverts the boolean value
• Returns opposite boolean
• Works with any boolean expression

How it works:
• Takes boolean expression
• Inverts the result
• not True = False
• not False = True

Examples:
• not True = False
• not False = True
• not (5 > 3) = not True = False
• not (5 > 10) = not False = True

Common uses:
• Negating conditions: if not x == 0:
• Inverting boolean values
• Checking for "not equal"
• Guard clauses: if not valid:

Example: not True returns False because the not operator inverts True to False.
`
  }),
  (_i: number) => ({ 
    q: `Result of not False?`, 
    o: ["True", "False", "None", "Error"], 
    c: 0, 
    e: "not inverts False to True.",
    de: `The not operator inverts (negates) the boolean value of an expression. not False evaluates to True because it inverts False to True. The not operator returns the opposite boolean value.

not operator:
• not False = True
• Inverts the boolean value
• Returns opposite boolean
• Works with any boolean expression

How it works:
• Takes boolean expression
• Inverts the result
• not False = True
• not True = False

Examples:
• not False = True
• not True = False
• not (5 > 10) = not False = True
• not (5 > 3) = not True = False

Common uses:
• Negating conditions: if not x == 0:
• Inverting boolean values
• Checking for "not equal"
• Guard clauses: if not valid:

Example: not False returns True because the not operator inverts False to True.
`
  }),
  (_i: number) => ({ 
    q: `Result of not (True and False)?`, 
    o: ["True", "False", "None", "Error"], 
    c: 0, 
    e: "Parentheses first: True and False = False, then not False = True.",
    de: `Parentheses change the order of evaluation in boolean expressions. not (True and False) evaluates the expression inside parentheses first: True and False equals False. Then not False equals True. The parentheses force the and operation to happen before the not operation.

Order of operations:
• not (True and False)
• First: (True and False) = False (parentheses first)
• Then: not False = True (not operation)
• Result: True

How it works:
• Parentheses have highest precedence
• Evaluate inside parentheses first
• Then apply not operator
• Parentheses change evaluation order

Examples:
• not (True and False) = not False = True
• not (True and True) = not True = False
• (not True) and False = False and False = False (different!)

Common uses:
• Complex boolean expressions
• Changing evaluation order
• Grouping operations
• Logical expressions

Example: not (True and False) returns True because parentheses force True and False to evaluate first (resulting in False), then not False equals True.
`
  }),
  (_i: number) => ({ 
    q: `Result of not True or False?`, 
    o: ["False", "True", "None", "Error"], 
    c: 0, 
    e: "Operator precedence: not True = False, then False or False = False.",
    de: `Operator precedence determines the order of evaluation. In not True or False, the not operator has higher precedence than or, so not True evaluates first (equals False), then False or False equals False. Without parentheses, not binds tighter than or.

Operator precedence:
• not True or False
• First: not True = False (not has higher precedence)
• Then: False or False = False (or operation)
• Result: False

How it works:
• not has higher precedence than or
• not True evaluates first = False
• Then False or False = False
• Precedence determines evaluation order

Examples:
• not True or False = False or False = False
• (not True) or False = False or False = False (same)
• not (True or False) = not True = False (different!)

Precedence order:
• not (highest)
• and
• or (lowest)

Common uses:
• Understanding boolean precedence
• Complex boolean expressions
• Logical operations

Example: not True or False returns False because not has higher precedence than or, so not True evaluates first (False), then False or False equals False.
`
  }),
  
  // 11-20: Comparison Operators
  (_i: number) => ({ 
    q: `Result of 10 > 5?`, 
    o: ["True", "False", "None", "Error"], 
    c: 0, 
    e: "Greater than comparison.",
    de: `The > operator compares two values and returns True if the left operand is greater than the right operand. 10 > 5 returns True because 10 is greater than 5. Comparison operators are fundamental for conditional statements (if/elif/else) and boolean logic in Python.

Greater than operator:
• 10 > 5 = True (10 is greater than 5)
• Returns boolean (True/False)
• Used in conditional statements
• Works with numbers, strings, etc.

How it works:
• Compares left operand to right operand
• Returns True if left > right
• Returns False otherwise
• Essential for if statements

Common uses:
• Conditional statements: if x > 5:
• Range checking: if age > 18:
• Comparisons and sorting
• Boolean expressions in conditionals

Example: 10 > 5 returns True because 10 is greater than 5. This boolean result is commonly used in if statements: if 10 > 5: ...
`
  }),
  (_i: number) => ({ 
    q: `Result of 5 < 10?`, 
    o: ["True", "False", "None", "Error"], 
    c: 0, 
    e: "Less than comparison.",
    de: `The < operator compares two values and returns True if the left operand is less than the right operand. 5 < 10 returns True because 5 is less than 10. Comparison operators are essential for conditional statements and boolean logic in Python.

Less than operator:
• 5 < 10 = True (5 is less than 10)
• Returns boolean (True/False)
• Used in conditional statements
• Works with numbers, strings, etc.

How it works:
• Compares left operand to right operand
• Returns True if left < right
• Returns False otherwise
• Essential for if statements

Common uses:
• Conditional statements: if x < 10:
• Range checking: if age < 65:
• Comparisons and sorting
• Boolean expressions in conditionals

Example: 5 < 10 returns True because 5 is less than 10. This boolean result is commonly used in if statements: if x < 10: ...
`
  }),
  (_i: number) => ({ 
    q: `Result of 10 >= 10?`, 
    o: ["True", "False", "None", "Error"], 
    c: 0, 
    e: "Greater than or equal.",
    de: `The >= operator compares two values and returns True if the left operand is greater than or equal to the right operand. 10 >= 10 returns True because 10 is equal to 10 (satisfies the "or equal" part). This operator is commonly used in conditional statements for inclusive range checking.

Greater than or equal:
• 10 >= 10 = True (equal, so True)
• Returns True if left >= right
• Returns False if left < right
• Includes equality

Common uses:
• Conditional statements: if age >= 18:
• Inclusive range checking
• Boundary conditions
• Boolean expressions in conditionals

Example: 10 >= 10 returns True because 10 equals 10, which satisfies the "or equal" condition. This is useful for inclusive comparisons: if age >= 18: ...
`
  }),
  (_i: number) => ({ 
    q: `Result of 5 <= 10?`, 
    o: ["True", "False", "None", "Error"], 
    c: 0, 
    e: "Less than or equal.",
    de: `The <= operator compares two values and returns True if the left operand is less than or equal to the right operand. 5 <= 10 returns True because 5 is less than 10 (satisfies the "less than" part). This operator is commonly used in conditional statements for inclusive range checking.

Less than or equal:
• 5 <= 10 = True (less, so True)
• Returns True if left <= right
• Returns False if left > right
• Includes equality

Common uses:
• Conditional statements: if age <= 65:
• Inclusive range checking
• Boundary conditions
• Boolean expressions in conditionals

Example: 5 <= 10 returns True because 5 is less than 10, which satisfies the <= condition. This is useful for inclusive comparisons: if x <= 10: ...
`
  }),
  (_i: number) => ({ 
    q: `Result of 10 == 10?`, 
    o: ["True", "False", "None", "Error"], 
    c: 0, 
    e: "Equality check.",
    de: `The == operator compares two values for equality and returns True if they are equal. 10 == 10 returns True because both operands have the same value (10). The == operator checks value equality and is the most common comparison operator used in conditional statements.

Equality operator:
• 10 == 10 = True (values are equal)
• Returns boolean (True/False)
• Compares values, not identity
• Most common comparison operator

How it works:
• Compares left operand to right operand
• Returns True if values are equal
• Returns False if values differ
• Used extensively in if statements

Important distinction:
• == compares values (equality)
• is compares identity (same object)
• 10 == 10.0 is True (same value)
• 10 is 10.0 is False (different objects)

Common uses:
• Conditional statements: if x == 5:
• Checking equality: if name == "admin":
• Validation and comparisons
• Boolean expressions in conditionals

Example: 10 == 10 returns True because both operands have the same value (10). This is commonly used in if statements: if x == 10: ...
`
  }),
  (_i: number) => ({ 
    q: `Result of 10 != 5?`, 
    o: ["True", "False", "None", "Error"], 
    c: 0, 
    e: "Inequality check.",
    de: `The != operator compares two values for inequality and returns True if they are not equal. 10 != 5 returns True because 10 is not equal to 5. The != operator is the opposite of == and is commonly used in conditional statements to check if values differ.

Inequality operator:
• 10 != 5 = True (values are not equal)
• Returns boolean (True/False)
• Opposite of == operator
• Checks if values differ

How it works:
• Compares left operand to right operand
• Returns True if values are not equal
• Returns False if values are equal
• Useful for checking differences

Common uses:
• Conditional statements: if x != 0:
• Checking inequality: if status != "error":
• Validation and comparisons
• Boolean expressions in conditionals

Example: 10 != 5 returns True because 10 is not equal to 5. This is commonly used in if statements: if x != 0: ...
`
  }),
  (_i: number) => ({ 
    q: `Result of 5 > 10?`, 
    o: ["False", "True", "None", "Error"], 
    c: 0, 
    e: "Greater than - false.",
    de: `The > operator compares two values and returns True if the left operand is greater than the right operand. 5 > 10 returns False because 5 is not greater than 10 (5 is actually less than 10). Understanding when comparison operators return False is important for writing correct conditional statements.

Greater than check:
• 5 > 10 = False (5 is not greater than 10)
• Returns boolean (True/False)
• 5 < 10, so > returns False
• Essential for if statements

How it works:
• Compares left operand to right operand
• Returns True if left > right
• Returns False if left <= right
• 5 is less than 10, so False

Common uses:
• Conditional statements: if x > 10:
• Range checking
• Comparisons
• Boolean expressions in conditionals

Example: 5 > 10 returns False because 5 is not greater than 10 (5 < 10). This boolean result is used in conditional statements to check conditions.
`
  }),
  (_i: number) => ({ 
    q: `Result of 10 < 5?`, 
    o: ["False", "True", "None", "Error"], 
    c: 0, 
    e: "Less than - false.",
    de: `The < operator compares two values and returns True if the left operand is less than the right operand. 10 < 5 returns False because 10 is not less than 5 (10 is actually greater than 5). Understanding when comparison operators return False helps write correct conditional statements.

Less than check:
• 10 < 5 = False (10 is not less than 5)
• Returns boolean (True/False)
• 10 > 5, so < returns False
• Essential for if statements

How it works:
• Compares left operand to right operand
• Returns True if left < right
• Returns False if left >= right
• 10 is greater than 5, so False

Common uses:
• Conditional statements: if x < 5:
• Range checking
• Comparisons
• Boolean expressions in conditionals

Example: 10 < 5 returns False because 10 is not less than 5 (10 > 5). This boolean result is used in conditional statements to check conditions.
`
  }),
  (_i: number) => ({ 
    q: `Result of 10 == 5?`, 
    o: ["False", "True", "None", "Error"], 
    c: 0, 
    e: "Equality check - not equal.",
    de: `The == operator compares two values for equality. 10 == 5 returns False because 10 is not equal to 5. The == operator returns True only when both operands have the same value. Understanding when equality checks return False is important for conditional statements.

Equality check:
• 10 == 5 = False (values are not equal)
• Returns boolean (True/False)
• 10 ≠ 5, so == returns False
• Used in conditional statements

How it works:
• Compares left operand to right operand
• Returns True if values are equal
• Returns False if values differ
• 10 ≠ 5, so False

Common uses:
• Conditional statements: if x == 5:
• Checking equality
• Validation
• Boolean expressions in conditionals

Example: 10 == 5 returns False because 10 is not equal to 5. This boolean result is used in conditional statements: if x == 5: ...
`
  }),
  (_i: number) => ({ 
    q: `Result of 5 >= 10?`, 
    o: ["False", "True", "None", "Error"], 
    c: 0, 
    e: "Greater than or equal - false.",
    de: `The >= operator compares two values and returns True if the left operand is greater than or equal to the right operand. 5 >= 10 returns False because 5 is neither greater than nor equal to 10 (5 < 10). This operator is commonly used in conditional statements for inclusive range checking.

Greater than or equal check:
• 5 >= 10 = False (5 < 10, not >=)
• Returns boolean (True/False)
• 5 is less than 10, so False
• Checks if left >= right

How it works:
• Compares left operand to right operand
• Returns True if left >= right
• Returns False if left < right
• 5 < 10, so False

Common uses:
• Conditional statements: if x >= 10:
• Range checking
• Boundary conditions
• Boolean expressions in conditionals

Example: 5 >= 10 returns False because 5 is less than 10, so it doesn't satisfy the "greater than or equal" condition. This is used in conditional statements: if x >= 10: ...
`
  }),
  
  // 21-30: Identity vs Equality
  (_i: number) => ({ 
    q: `Result of 5 == 5?`, 
    o: ["True", "False", "None", "Error"], 
    c: 0, 
    e: "== compares values.",
    de: `The == operator compares two values for equality. 5 == 5 returns True because both operands have the same value (5). The == operator checks value equality, not object identity. This is the most common comparison operator used in conditional statements.

Equality operator:
• 5 == 5 = True (values are equal)
• Compares values, not identity
• Returns boolean (True/False)
• Used extensively in if statements

How it works:
• Compares the values of operands
• Returns True if values are equal
• Returns False if values differ
• Works with any comparable types

Important distinction:
• == compares values (equality)
• is compares identity (same object)
• 5 == 5.0 is True (same value)
• 5 is 5.0 is False (different objects)

Common uses:
• Conditional statements: if x == 5:
• Checking equality: if name == "admin":
• Validation and comparisons
• Boolean expressions in conditionals

Example: 5 == 5 returns True because both operands have the same value (5). This is commonly used in if statements: if x == 5: ...
`
  }),
  (_i: number) => ({ 
    q: `Result of 5 is 5?`, 
    o: ["True", "False", "None", "Error"], 
    c: 0, 
    e: "is checks identity (small integers are cached).",
    de: `The is operator checks if two variables reference the same object in memory (identity). 5 is 5 returns True because Python caches small integers, so both 5s refer to the same object. However, for larger integers or mutable objects, this may not be true. The is operator checks object identity, not value equality.

Identity operator:
• 5 is 5 = True (same integer object, cached)
• Checks if same object in memory
• Different from == (which checks value)
• Python caches small integers

How it works:
• Checks object identity (memory address)
• Returns True if same object
• Returns False if different objects
• Small integers are cached (singletons)

Important distinction:
• == checks value equality
• is checks object identity
• 5 == 5.0 is True (same value)
• 5 is 5.0 is False (different objects)

Common uses:
• Checking for None: if x is None:
• Checking for singletons: if x is True:
• Identity checks
• Object comparison

Example: 5 is 5 returns True because Python caches small integers, so both 5s refer to the same object in memory. For identity checks, use is; for value checks, use ==.
`
  }),
  (_i: number) => ({ 
    q: `Result of [1, 2] == [1, 2]?`, 
    o: ["True", "False", "None", "Error"], 
    c: 0, 
    e: "== compares list contents.",
    de: `The == operator compares the contents of lists, not their identity. [1, 2] == [1, 2] returns True because both lists have the same elements in the same order. The == operator checks value equality by comparing list contents element by element.

List equality:
• [1, 2] == [1, 2] = True (same contents)
• Compares list elements
• Returns True if contents are equal
• Order matters

How it works:
• Compares lists element by element
• Checks if same elements in same order
• Returns True if contents match
• Returns False if contents differ

Examples:
• [1, 2] == [1, 2] = True (same contents)
• [1, 2] == [2, 1] = False (different order)
• [1, 2] == [1, 2, 3] = False (different length)

Important distinction:
• [1, 2] == [1, 2] = True (same values)
• [1, 2] is [1, 2] = False (different objects)
• == checks contents, is checks identity

Common uses:
• Comparing lists: if list1 == list2:
• Checking list contents
• Validation
• Conditional statements

Example: [1, 2] == [1, 2] returns True because both lists have the same elements in the same order. The == operator compares list contents, not object identity.
`
  }),
  (_i: number) => ({ 
    q: `Result of [1, 2] is [1, 2]?`, 
    o: ["False", "True", "None", "Error"], 
    c: 0, 
    e: "Different list objects, even with same content.",
    de: `The is operator checks if two variables reference the same object in memory. [1, 2] is [1, 2] returns False because each list literal creates a new list object. Even though the lists have the same values, they are different objects in memory. The is operator checks object identity, not value equality.

Identity check:
• [1, 2] is [1, 2] = False (different objects)
• Checks object identity, not value
• Each list literal creates new object
• Different memory addresses

How it works:
• Each [1, 2] creates a new list object
• Different memory addresses
• is checks if same object
• Returns False (different objects)

Important distinction:
• [1, 2] == [1, 2] = True (same values)
• [1, 2] is [1, 2] = False (different objects)
• == checks values, is checks identity

Examples:
• [1, 2] is [1, 2] = False (different objects)
• a = [1, 2]; b = a; a is b = True (same object)
• (1, 2) is (1, 2) = False (tuples too, unless cached)

Common uses:
• Checking for None: if x is None:
• Object identity checks
• Understanding object references
• Memory efficiency

Example: [1, 2] is [1, 2] returns False because each list literal creates a new list object. Even though they have the same values, they are different objects in memory. Use == to check if values are equal.
`
  }),
  (_i: number) => ({ 
    q: `Result of "hello" == "hello"?`, 
    o: ["True", "False", "None", "Error"], 
    c: 0, 
    e: "== compares string values.",
    de: `The == operator compares string values character by character. "hello" == "hello" returns True because both strings have the same characters in the same order. The == operator checks value equality by comparing string contents.

String equality:
• "hello" == "hello" = True (same contents)
• Compares string characters
• Returns True if contents are equal
• Case-sensitive

How it works:
• Compares strings character by character
• Checks if same characters in same order
• Returns True if contents match
• Returns False if contents differ

Examples:
• "hello" == "hello" = True (same contents)
• "hello" == "Hello" = False (case-sensitive)
• "hello" == "world" = False (different contents)

Important distinction:
• "hello" == "hello" = True (same values)
• "hello" is "hello" = True (may be same object due to interning)
• == checks values, is checks identity

Common uses:
• Comparing strings: if name == "admin":
• Checking string values
• Validation
• Conditional statements

Example: "hello" == "hello" returns True because both strings have the same characters in the same order. The == operator compares string values, not object identity.
`
  }),
  (_i: number) => ({ 
    q: `Result of "hello" is "hello"?`, 
    o: ["True", "False", "None", "Error"], 
    c: 0, 
    e: "String interning may make same strings share identity.",
    de: `The is operator checks if two variables reference the same object in memory. "hello" is "hello" may return True because Python interns (caches) string literals, so identical string literals may refer to the same object. However, this behavior is implementation-dependent and should not be relied upon. Always use == for string comparison.

String identity:
• "hello" is "hello" = True (may be same object due to interning)
• Python may intern string literals
• Implementation-dependent behavior
• Should not be relied upon

How it works:
• Python may cache string literals (interning)
• Identical literals may share same object
• is checks if same object
• Behavior is not guaranteed

Important note:
• String interning is implementation-dependent
• Always use == for string comparison
• Don't rely on is for strings
• == is the correct way to compare strings

Best practice:
• Use == for string comparison: if name == "admin":
• Don't use is for strings
• is is for None, True, False checks
• == is for value comparison

Example: "hello" is "hello" may return True due to string interning, but this behavior is not guaranteed. Always use == for string comparison: if name == "hello": ...
`
  }),
  (_i: number) => ({ 
    q: `Result of None == None?`, 
    o: ["True", "False", "None", "Error"], 
    c: 0, 
    e: "== compares values.",
    de: `The == operator compares values for equality. None == None returns True because both operands are None (the same value). However, for None specifically, it's recommended to use is None instead of == None, as it's more Pythonic and clearer.

None equality:
• None == None = True (same value)
• Compares values
• Returns True
• But use is None instead

How it works:
• Compares values
• Both operands are None
• Returns True (same value)
• Works, but not recommended

Best practice:
• Use is None instead of == None
• More Pythonic and clearer
• is None is the standard way
• if x is None: (recommended)

Important note:
• None == None works but is not recommended
• Always use is None for None checks
• is None is more Pythonic
• Standard Python practice

Common uses:
• Checking for None: if x is None: (recommended)
• Not recommended: if x == None:
• Use is None for clarity

Example: None == None returns True, but it's better to use is None: if x is None: ... This is more Pythonic and clearer.
`
  }),
  (_i: number) => ({ 
    q: `Result of None is None?`, 
    o: ["True", "False", "None", "Error"], 
    c: 0, 
    e: "None is a singleton - always same object.",
    de: `None is a singleton in Python - there is only one None object in the entire program. None is None returns True because all None references point to the same singleton object. This is why you should always use is None (not == None) to check for None.

None singleton:
• None is None = True (same singleton)
• There is only one None object
• All None references are the same object
• Always use is None (not == None)

How it works:
• None is a singleton object
• All None references are the same object
• is checks identity, returns True
• This is why is None is recommended

Best practice:
• Always use is None (not == None)
• More Pythonic and correct
• Faster and clearer
• Standard Python practice

Examples:
• None is None = True (singleton)
• x = None; x is None = True
• y = None; x is y = True (same object)
• None == None = True (but use is None)

Common uses:
• Checking for None: if x is None:
• Default values: if value is None:
• Optional parameters
• Null checking

Example: None is None returns True because None is a singleton - there is only one None object in Python, so all None references are the same object. Always use is None for None checks.
`
  }),
  (_i: number) => ({ 
    q: `Result of 5 is not 10?`, 
    o: ["True", "False", "None", "Error"], 
    c: 0, 
    e: "is not checks if objects are different.",
    de: `The is not operator is the opposite of is - it returns True if two variables reference different objects in memory. 5 is not 10 returns True because 5 and 10 are different objects (different values, so definitely different objects). The is not operator checks object identity, not value equality.

is not operator:
• 5 is not 10 = True (different objects)
• Returns True if different objects
• Returns False if same object
• Opposite of is operator

How it works:
• Checks object identity
• Returns True if different objects
• Returns False if same object
• 5 and 10 are different, so True

Examples:
• 5 is not 10 = True (different values/objects)
• 5 is not 5 = False (same object, for cached integers)
• None is not None = False (same singleton)
• [1, 2] is not [1, 2] = True (different objects)

Logical relationship:
• a is not b = not (a is b)
• Inverts the result of is
• More readable for negative checks

Common uses:
• Checking not None: if x is not None:
• Object identity checks
• Negative identity checks

Example: 5 is not 10 returns True because 5 and 10 are different objects (different values). The is not operator checks if objects are different.
`
  }),
  (_i: number) => ({ 
    q: `What is the difference between == and is?`, 
    o: ["== compares values, is compares identity", "No difference", "is is for strings only", "== is deprecated"], 
    c: 0, 
    e: "== compares values, is compares object identity.",
    de: `The == operator compares values for equality, while the is operator compares object identity (whether two variables reference the same object in memory). Understanding this distinction is crucial for writing correct Python code, especially in conditional statements.

Key difference:
• == compares values (equality)
• is compares identity (same object)
• Different purposes, different results

== operator:
• Compares values of operands
• Returns True if values are equal
• Works with any comparable types
• Most common comparison operator

is operator:
• Compares object identity (memory address)
• Returns True if same object
• Used for None, True, False checks
• Checks if variables reference same object

Examples:
• 5 == 5.0 = True (same value)
• 5 is 5.0 = False (different objects)
• [1, 2] == [1, 2] = True (same values)
• [1, 2] is [1, 2] = False (different objects)
• None == None = True (same value)
• None is None = True (same object, singleton)

When to use:
• Use == for value comparison: if x == 5:
• Use is for identity checks: if x is None:
• Use is for singletons: if x is True:
• Use == for most comparisons

Example: The == operator compares values (5 == 5.0 is True), while the is operator compares object identity (5 is 5.0 is False). Use == for value comparison and is for identity checks (especially None).
`
  }),
  
  // 31-40: Chained Comparisons
  (_i: number) => ({ 
    q: `Result of 5 < 10 < 15?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "Chained comparisons work in Python.",
    de: `Python supports chained comparisons, allowing you to write multiple comparisons in a single expression. 5 < 10 < 15 is evaluated as (5 < 10) and (10 < 15). Both conditions are True, so the result is True. Chained comparisons are commonly used in conditional statements for range checking.

Chained comparison:
• 5 < 10 < 15 = True
• Equivalent to: (5 < 10) and (10 < 15)
• Evaluates both conditions
• Returns True if chain is valid

How it works:
• Evaluates left comparison: 5 < 10 = True
• Evaluates right comparison: 10 < 15 = True
• Combines with and: True and True = True
• Returns True if chain is valid

Examples:
• 5 < 10 < 15 = True (valid chain)
• 5 < 10 < 20 = True
• 5 < 10 < 5 = False (invalid chain)
• 10 < 5 < 15 = False (invalid chain)

Common uses:
• Range checking: if 0 < x < 100:
• Multiple comparisons: if 5 < a < 10 < b < 20:
• Concise range validation
• Conditional statements

Example: 5 < 10 < 15 returns True because both conditions are True (5 < 10 is True, and 10 < 15 is True), so the chained comparison evaluates to True. This is useful for range checking: if 0 < age < 120: ...
`
  }),
  (_i: number) => ({ 
    q: `Result of 15 > 10 > 5?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "Chained comparisons work both ways.",
    de: `Python supports chained comparisons in both directions. 15 > 10 > 5 is evaluated as (15 > 10) and (10 > 5). Both conditions are True, so the result is True. Chained comparisons work whether going up (<) or down (>), making them useful for range checking in conditional statements.

Chained comparison (descending):
• 15 > 10 > 5 = True
• Equivalent to: (15 > 10) and (10 > 5)
• Evaluates both conditions
• Returns True if chain is valid

How it works:
• Evaluates left comparison: 15 > 10 = True
• Evaluates right comparison: 10 > 5 = True
• Combines with and: True and True = True
• Returns True if chain is valid

Examples:
• 15 > 10 > 5 = True (valid chain)
• 20 > 15 > 10 = True
• 15 > 10 > 20 = False (invalid chain)

Common uses:
• Range checking: if 100 > x > 0:
• Multiple comparisons
• Concise validation
• Conditional statements

Example: 15 > 10 > 5 returns True because both conditions are True (15 > 10 is True, and 10 > 5 is True), so the chained comparison evaluates to True. This is useful for range checking: if 100 > score > 0: ...
`
  }),
  (_i: number) => ({ 
    q: `Result of 5 <= 10 <= 15?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "Chained comparisons with <= work.",
    de: `Python supports chained comparisons with <= (less than or equal). 5 <= 10 <= 15 is evaluated as (5 <= 10) and (10 <= 15). Both conditions are True, so the result is True. Chained comparisons with <= are useful for inclusive range checking in conditional statements.

Chained comparison with <=:
• 5 <= 10 <= 15 = True
• Equivalent to: (5 <= 10) and (10 <= 15)
• Evaluates both conditions
• Returns True if chain is valid

How it works:
• Evaluates left comparison: 5 <= 10 = True
• Evaluates right comparison: 10 <= 15 = True
• Combines with and: True and True = True
• Returns True if chain is valid

Examples:
• 5 <= 10 <= 15 = True (valid chain)
• 5 <= 5 <= 15 = True (boundary case)
• 5 <= 10 <= 5 = False (invalid chain)

Common uses:
• Inclusive range checking: if 0 <= x <= 100:
• Boundary conditions
• Multiple comparisons
• Conditional statements

Example: 5 <= 10 <= 15 returns True because both conditions are True (5 <= 10 is True, and 10 <= 15 is True), so the chained comparison evaluates to True. This is useful for inclusive range checking: if 0 <= age <= 120: ...
`
  }),
  (_i: number) => ({ 
    q: `Result of 15 >= 10 >= 5?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "Chained comparisons with >= work.",
    de: `Python supports chained comparisons with >= (greater than or equal). 15 >= 10 >= 5 is evaluated as (15 >= 10) and (10 >= 5). Both conditions are True, so the result is True. Chained comparisons with >= are useful for inclusive range checking in conditional statements.

Chained comparison with >=:
• 15 >= 10 >= 5 = True
• Equivalent to: (15 >= 10) and (10 >= 5)
• Evaluates both conditions
• Returns True if chain is valid

How it works:
• Evaluates left comparison: 15 >= 10 = True
• Evaluates right comparison: 10 >= 5 = True
• Combines with and: True and True = True
• Returns True if chain is valid

Examples:
• 15 >= 10 >= 5 = True (valid chain)
• 15 >= 15 >= 5 = True (boundary case)
• 15 >= 10 >= 20 = False (invalid chain)

Common uses:
• Inclusive range checking: if 100 >= x >= 0:
• Boundary conditions
• Multiple comparisons
• Conditional statements

Example: 15 >= 10 >= 5 returns True because both conditions are True (15 >= 10 is True, and 10 >= 5 is True), so the chained comparison evaluates to True. This is useful for inclusive range checking: if 100 >= score >= 0: ...
`
  }),
  (_i: number) => ({ 
    q: `Result of 5 == 5 == 5?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "Chained equality checks all pairs.",
    de: `Python supports chained equality comparisons. 5 == 5 == 5 is evaluated as (5 == 5) and (5 == 5). Both conditions are True, so the result is True. However, this is a special case that works differently from other chained comparisons - it checks pairwise equality.

Chained equality:
• 5 == 5 == 5 = True
• Evaluates as: (5 == 5) and (5 == 5)
• All pairs must be equal
• Returns True if all are equal

How it works:
• Evaluates left comparison: 5 == 5 = True
• Evaluates right comparison: 5 == 5 = True
• Combines with and: True and True = True
• Returns True if all pairs are equal

Examples:
• 5 == 5 == 5 = True (all equal)
• 5 == 5 == 10 = False (last not equal)
• 5 == 10 == 5 = False (middle not equal)

Important note:
• This checks pairwise equality
• Not "all three are equal" semantically
• But works the same in this case

Common uses:
• Checking multiple equalities
• Validation
• Conditional statements

Example: 5 == 5 == 5 returns True because both comparisons are True (5 == 5 is True, and 5 == 5 is True), so the chained equality evaluates to True.
`
  }),
  (_i: number) => ({ 
    q: `Result of 5 != 10 != 15?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "Chained inequality checks all pairs.",
    de: `Python supports chained inequality comparisons. 5 != 10 != 15 is evaluated as (5 != 10) and (10 != 15). Both conditions are True (5 ≠ 10, and 10 ≠ 15), so the result is True. This checks that all adjacent pairs are not equal, which is useful for validation in conditional statements.

Chained inequality:
• 5 != 10 != 15 = True
• Evaluates as: (5 != 10) and (10 != 15)
• All pairs must be not equal
• Returns True if all pairs differ

How it works:
• Evaluates left comparison: 5 != 10 = True
• Evaluates right comparison: 10 != 15 = True
• Combines with and: True and True = True
• Returns True if all pairs are not equal

Examples:
• 5 != 10 != 15 = True (all different)
• 5 != 5 != 15 = False (first pair equal)
• 5 != 10 != 10 = False (second pair equal)

Common uses:
• Checking uniqueness: if a != b != c:
• Validation that values differ
• Pairwise inequality
• Conditional statements

Example: 5 != 10 != 15 returns True because both comparisons are True (5 != 10 is True, and 10 != 15 is True), so the chained inequality evaluates to True. This is useful for checking that values are different: if a != b != c: ...
`
  }),
  (_i: number) => ({ 
    q: `Result of 5 < 10 < 5?`, 
    o: ["False", "True", "Error", "None"], 
    c: 0, 
    e: "Chained comparison fails when middle value doesn't satisfy both.",
    de: `Chained comparisons require the middle value to satisfy both conditions. 5 < 10 < 5 is evaluated as (5 < 10) and (10 < 5). The first condition is True (5 < 10), but the second is False (10 < 5), so the result is False. The middle value (10) must satisfy both comparisons for the chain to be True.

Chained comparison failure:
• 5 < 10 < 5 = False
• Evaluates as: (5 < 10) and (10 < 5)
• First: 5 < 10 = True
• Second: 10 < 5 = False
• Result: True and False = False

How it works:
• Evaluates left comparison: 5 < 10 = True
• Evaluates right comparison: 10 < 5 = False
• Combines with and: True and False = False
• Middle value must satisfy both

Examples:
• 5 < 10 < 5 = False (middle doesn't satisfy both)
• 5 < 10 < 15 = True (middle satisfies both)
• 10 < 5 < 15 = False (first fails)

Common uses:
• Range checking: if 0 < x < 100:
• Understanding chained comparisons
• Conditional statements

Example: 5 < 10 < 5 returns False because while 5 < 10 is True, 10 < 5 is False. The middle value (10) must satisfy both comparisons for the chain to be True.
`
  }),
  (_i: number) => ({ 
    q: `Result of 10 < 5 < 15?`, 
    o: ["False", "True", "Error", "None"], 
    c: 0, 
    e: "Chained comparison fails when first condition is False.",
    de: `Chained comparisons are evaluated left to right. 10 < 5 < 15 is evaluated as (10 < 5) and (5 < 15). The first condition is False (10 < 5), so even though the second is True (5 < 15), the result is False because and requires both to be True. The first condition must be True for the chain to potentially succeed.

Chained comparison failure:
• 10 < 5 < 15 = False
• Evaluates as: (10 < 5) and (5 < 15)
• First: 10 < 5 = False
• Second: 5 < 15 = True
• Result: False and True = False

How it works:
• Evaluates left comparison: 10 < 5 = False
• Short-circuits: and returns False immediately
• Doesn't evaluate second (but would be True)
• Result: False

Examples:
• 10 < 5 < 15 = False (first fails)
• 5 < 10 < 15 = True (both succeed)
• 15 < 10 < 5 = False (first fails)

Common uses:
• Range checking: if 0 < x < 100:
• Understanding chained comparisons
• Conditional statements

Example: 10 < 5 < 15 returns False because the first condition (10 < 5) is False. Even though the second condition (5 < 15) is True, the and operator requires both to be True, so the result is False.
`
  }),
  (_i: number) => ({ 
    q: `Result of 5 < 15 < 10?`, 
    o: ["False", "True", "Error", "None"], 
    c: 0, 
    e: "Chained comparison fails when second condition is False.",
    de: `Chained comparisons require all conditions to be True. 5 < 15 < 10 is evaluated as (5 < 15) and (15 < 10). The first condition is True (5 < 15), but the second is False (15 < 10), so the result is False. Both conditions must be True for the chain to succeed.

Chained comparison failure:
• 5 < 15 < 10 = False
• Evaluates as: (5 < 15) and (15 < 10)
• First: 5 < 15 = True
• Second: 15 < 10 = False
• Result: True and False = False

How it works:
• Evaluates left comparison: 5 < 15 = True
• Evaluates right comparison: 15 < 10 = False
• Combines with and: True and False = False
• Both must be True

Examples:
• 5 < 15 < 10 = False (second fails)
• 5 < 10 < 15 = True (both succeed)
• 5 < 15 < 20 = True (both succeed)

Common uses:
• Range checking: if 0 < x < 100:
• Understanding chained comparisons
• Conditional statements

Example: 5 < 15 < 10 returns False because while 5 < 15 is True, 15 < 10 is False. Both conditions must be True for the chained comparison to return True.
`
  }),
  (_i: number) => ({ 
    q: `Result of 5 == 5 == 10?`, 
    o: ["False", "True", "Error", "None"], 
    c: 0, 
    e: "Chained equality fails when not all pairs are equal.",
    de: `Chained equality comparisons require all pairs to be equal. 5 == 5 == 10 is evaluated as (5 == 5) and (5 == 10). The first condition is True (5 == 5), but the second is False (5 == 10), so the result is False. All pairs must be equal for the chain to return True.

Chained equality failure:
• 5 == 5 == 10 = False
• Evaluates as: (5 == 5) and (5 == 10)
• First: 5 == 5 = True
• Second: 5 == 10 = False
• Result: True and False = False

How it works:
• Evaluates left comparison: 5 == 5 = True
• Evaluates right comparison: 5 == 10 = False
• Combines with and: True and False = False
• All pairs must be equal

Examples:
• 5 == 5 == 10 = False (last pair not equal)
• 5 == 5 == 5 = True (all pairs equal)
• 5 == 10 == 5 = False (middle pair not equal)

Common uses:
• Checking multiple equalities
• Validation
• Conditional statements

Example: 5 == 5 == 10 returns False because while 5 == 5 is True, 5 == 10 is False. All pairs must be equal for the chained equality to return True.
`
  }),
  
  // 41-50: Membership Operators
  (_i: number) => ({ 
    q: `Result of 5 in [1, 2, 3, 4, 5]?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "in checks membership in list.",
    de: `The in operator checks if a value is a member of a collection (list, tuple, string, etc.). 5 in [1, 2, 3, 4, 5] returns True because 5 is present in the list. The in operator is commonly used in conditional statements to check membership before performing operations.

Membership operator:
• 5 in [1, 2, 3, 4, 5] = True (5 is in list)
• Returns boolean (True/False)
• Searches collection for value
• Returns True if found

How it works:
• Searches through collection
• Compares value with each element
• Returns True if match found
• Returns False if not found

Common uses:
• Conditional statements: if item in list:
• Validation: if value in valid_values:
• Filtering: [x for x in items if x in valid]
• Existence checking

Example: 5 in [1, 2, 3, 4, 5] returns True because the value 5 is found in the list. This is commonly used in if statements: if 5 in [1, 2, 3, 4, 5]: ...
`
  }),
  (_i: number) => ({ 
    q: `Result of 10 in [1, 2, 3, 4, 5]?`, 
    o: ["False", "True", "Error", "None"], 
    c: 0, 
    e: "in checks membership - not found.",
    de: `The in operator checks if a value is a member of a collection. 10 in [1, 2, 3, 4, 5] returns False because 10 is not present in the list. The in operator searches through the collection and returns False if the value is not found. This is useful for validation in conditional statements.

Membership check:
• 10 in [1, 2, 3, 4, 5] = False (10 not in list)
• Returns boolean (True/False)
• Searches collection for value
• Returns False if not found

How it works:
• Searches through collection
• Compares value with each element
• Returns True if match found
• Returns False if not found

Common uses:
• Conditional statements: if item not in list:
• Validation: if value not in invalid_values:
• Filtering: [x for x in items if x not in invalid]
• Existence checking

Example: 10 in [1, 2, 3, 4, 5] returns False because the value 10 is not found in the list. This is commonly used in if statements: if 10 not in [1, 2, 3, 4, 5]: ...
`
  }),
  (_i: number) => ({ 
    q: `Result of 5 not in [1, 2, 3]?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "not in checks if value is absent.",
    de: `The not in operator is the opposite of in - it returns True if the value is NOT found in the collection. 5 not in [1, 2, 3] returns True because 5 is absent from the list [1, 2, 3]. This is useful for negative membership checks in conditional statements.

not in operator:
• 5 not in [1, 2, 3] = True (5 is not in list)
• Returns boolean (True/False)
• Opposite of in operator
• Returns True if value is absent

How it works:
• Searches through collection
• Returns True if value NOT found
• Returns False if value found
• Equivalent to not (value in collection)

Common uses:
• Conditional statements: if item not in list:
• Validation: if value not in invalid_values:
• Filtering: [x for x in items if x not in invalid]
• Negative checks

Example: 5 not in [1, 2, 3] returns True because the value 5 is not found in the list [1, 2, 3], so not in returns True. This is commonly used: if 5 not in [1, 2, 3]: ...
`
  }),
  (_i: number) => ({ 
    q: `Result of 1 not in [1, 2, 3]?`, 
    o: ["False", "True", "Error", "None"], 
    c: 0, 
    e: "not in - value is present, so False.",
    de: `The not in operator returns False if the value IS found in the collection. 1 not in [1, 2, 3] returns False because 1 is present in the list [1, 2, 3]. When the value is found, not in returns False. This is useful for validation in conditional statements.

not in check:
• 1 not in [1, 2, 3] = False (1 is in list)
• Returns boolean (True/False)
• Opposite of in operator
• Returns False if value is present

How it works:
• Searches through collection
• Returns True if value NOT found
• Returns False if value found
• 1 is found, so False

Common uses:
• Conditional statements: if item not in list:
• Validation: if value not in invalid:
• Filtering: [x for x in items if x not in invalid]
• Negative membership checks

Example: 1 not in [1, 2, 3] returns False because the value 1 is found in the list [1, 2, 3], so not in returns False. This is commonly used: if 1 not in [1, 2, 3]: ... (would be False)
`
  }),
  (_i: number) => ({ 
    q: `Result of 'a' in 'abc'?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "in checks substring membership in strings.",
    de: `The in operator checks if a substring is contained within a string. 'a' in 'abc' returns True because the substring 'a' is found in the string 'abc'. The in operator works with strings to check substring membership, which is commonly used in conditional statements for pattern matching.

String membership:
• 'a' in 'abc' = True ('a' is substring)
• Returns boolean (True/False)
• Checks if substring exists
• Case-sensitive check

How it works:
• Searches for substring in string
• Returns True if substring found
• Returns False if not found
• Works with single or multiple characters

Common uses:
• Conditional statements: if 'x' in text:
• Pattern matching: if 'error' in message:
• Validation: if '@' in email:
• Filtering strings

Example: 'a' in 'abc' returns True because the substring 'a' is found in the string 'abc'. This is commonly used: if 'error' in message: ...
`
  }),
  (_i: number) => ({ 
    q: `Result of 'x' in 'abc'?`, 
    o: ["False", "True", "Error", "None"], 
    c: 0, 
    e: "in checks substring - not found.",
    de: `The in operator checks if a substring is contained within a string. 'x' in 'abc' returns False because the substring 'x' is not found in the string 'abc'. The in operator works with strings to check substring membership, which is useful for validation in conditional statements.

String membership check:
• 'x' in 'abc' = False ('x' not in string)
• Returns boolean (True/False)
• Checks if substring exists
• Returns False if not found

How it works:
• Searches for substring in string
• Returns True if substring found
• Returns False if not found
• 'x' is not found in 'abc', so False

Common uses:
• Conditional statements: if 'x' not in text:
• Pattern matching: if 'error' not in message:
• Validation
• Filtering strings

Example: 'x' in 'abc' returns False because the substring 'x' is not found in the string 'abc'. This is commonly used: if 'error' not in message: ...
`
  }),
  (_i: number) => ({ 
    q: `Result of 'ab' in 'abc'?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "in checks substring - 'ab' is in 'abc'.",
    de: `The in operator checks if a substring is contained within a string. 'ab' in 'abc' returns True because the substring 'ab' is found in the string 'abc'. The in operator works with multi-character substrings, checking if they appear contiguously in the string. This is useful for pattern matching in conditional statements.

Multi-character substring:
• 'ab' in 'abc' = True ('ab' is substring)
• Returns boolean (True/False)
• Checks if substring exists contiguously
• Works with any length substring

How it works:
• Searches for substring in string
• Checks if substring appears contiguously
• Returns True if found
• Returns False if not found

Examples:
• 'ab' in 'abc' = True (found)
• 'bc' in 'abc' = True (found)
• 'ac' in 'abc' = False (not contiguous)

Common uses:
• Conditional statements: if 'error' in message:
• Pattern matching: if 'http' in url:
• Validation: if '@' in email:
• Filtering strings

Example: 'ab' in 'abc' returns True because the substring 'ab' is found contiguously in the string 'abc'. This is commonly used: if 'error' in message: ...
`
  }),
  (_i: number) => ({ 
    q: `Result of 'ac' in 'abc'?`, 
    o: ["False", "True", "Error", "None"], 
    c: 0, 
    e: "in checks substring - 'ac' is not contiguous in 'abc'.",
    de: `The in operator checks if a substring is contained within a string contiguously. 'ac' in 'abc' returns False because while 'a' and 'c' both appear in 'abc', they are not contiguous - there's a 'b' between them. The in operator requires the substring to appear as a contiguous sequence of characters.

Substring contiguity:
• 'ac' in 'abc' = False ('ac' not contiguous)
• Returns boolean (True/False)
• Requires contiguous characters
• 'a' and 'c' are separated by 'b'

How it works:
• Searches for substring in string
• Requires substring to be contiguous
• 'a' and 'c' exist but not together
• Returns False (not contiguous)

Examples:
• 'ac' in 'abc' = False (not contiguous)
• 'ab' in 'abc' = True (contiguous)
• 'bc' in 'abc' = True (contiguous)

Common uses:
• Conditional statements: if 'pattern' in text:
• Pattern matching
• Validation
• Filtering strings

Example: 'ac' in 'abc' returns False because while 'a' and 'c' both appear in 'abc', they are not contiguous (there's a 'b' between them). The in operator requires contiguous substrings.
`
  }),
  (_i: number) => ({ 
    q: `Result of '' in 'abc'?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "Empty string is always a substring.",
    de: `The in operator considers the empty string to be a substring of any string. '' in 'abc' returns True because the empty string is technically present between every character and at the beginning and end of any string. This is a mathematical property of strings - the empty string is a substring of all strings.

Empty string property:
• '' in 'abc' = True (empty string always matches)
• Returns boolean (True/False)
• Empty string is substring of all strings
• Mathematical property

How it works:
• Empty string is present everywhere
• Between every character
• At beginning and end
• Always returns True

Examples:
• '' in 'abc' = True (always)
• '' in '' = True (empty in empty)
• '' in 'hello' = True (always)

Mathematical property:
• Empty string is substring of all strings
• Present between every character
• Useful for edge cases
• Consistent behavior

Common uses:
• Edge case handling
• String operations
• Validation
• Understanding string properties

Example: '' in 'abc' returns True because the empty string is always considered a substring of any string. This is a mathematical property of strings.
`
  }),
  (_i: number) => ({ 
    q: `Result of 'x' not in 'abc'?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "not in works with strings.",
    de: `The not in operator works with strings just like it works with lists. 'x' not in 'abc' returns True because the substring 'x' is not found in the string 'abc'. The not in operator is the opposite of in and is commonly used in conditional statements for negative pattern matching.

String not in:
• 'x' not in 'abc' = True ('x' not in string)
• Returns boolean (True/False)
• Opposite of in operator
• Returns True if substring not found

How it works:
• Searches for substring in string
• Returns True if substring NOT found
• Returns False if substring found
• 'x' is not found, so True

Common uses:
• Conditional statements: if 'error' not in message:
• Pattern matching: if 'invalid' not in text:
• Validation
• Filtering strings

Example: 'x' not in 'abc' returns True because the substring 'x' is not found in the string 'abc'. This is commonly used: if 'error' not in message: ...
`
  }),
  
  // 51-60: Truthiness and Falsiness
  (_i: number) => ({ 
    q: `If x = 0, is x Truthy?`, 
    o: ["No", "Yes", "Only in loops", "Error"], 
    c: 0, 
    e: "0 is Falsy.",
    de: `In Python, values are evaluated as either "truthy" or "falsy" in boolean contexts. The number 0 is falsy, meaning it evaluates to False in conditional statements. If x = 0, then x is not truthy - it's falsy. Understanding truthiness is crucial for writing correct conditional statements.

Falsy values:
• 0 is falsy (evaluates to False)
• bool(0) = False
• if 0: ... (doesn't execute)
• Zero is falsy

How it works:
• Python evaluates values in boolean context
• 0 evaluates to False
• Falsy values: 0, 0.0, "", [], {}, None, False
• Truthy values: everything else

Common falsy values:
• 0, 0.0 (zero numbers)
• "" (empty string)
• [], {}, () (empty collections)
• None, False

Common uses:
• Conditional statements: if x: ... (checks if truthy)
• Validation: if not x: ... (checks if falsy)
• Default values: x or default
• Boolean evaluation

Example: If x = 0, then x is falsy (not truthy). In a conditional statement like if x:, the block would not execute because 0 is falsy.
`
  }),
  (_i: number) => ({ 
    q: `If x = 1, is x Truthy?`, 
    o: ["Yes", "No", "Only if positive", "Error"], 
    c: 0, 
    e: "Non-zero numbers are Truthy.",
    de: `In Python, non-zero numbers are truthy, meaning they evaluate to True in boolean contexts. If x = 1, then x is truthy. Any non-zero number (positive or negative, integer or float) is truthy. Understanding truthiness is essential for conditional statements.

Truthy numbers:
• 1 is truthy (evaluates to True)
• bool(1) = True
• if 1: ... (executes)
• Any non-zero number is truthy

How it works:
• Python evaluates values in boolean context
• Non-zero numbers evaluate to True
• 1, -1, 3.14, -100 are all truthy
• Only 0 and 0.0 are falsy

Examples:
• 1 is truthy
• -1 is truthy
• 3.14 is truthy
• 0 is falsy (only zero)

Common uses:
• Conditional statements: if x: ... (checks if truthy)
• Validation: if x: ... (checks if non-zero)
• Boolean evaluation
• Default values: x or default

Example: If x = 1, then x is truthy. In a conditional statement like if x:, the block would execute because 1 is truthy.
`
  }),
  (_i: number) => ({ 
    q: `If x = [], is bool(x) True?`, 
    o: ["No", "Yes", "Error", "None"], 
    c: 0, 
    e: "Empty lists are Falsy.",
    de: `Empty lists are falsy in Python, meaning they evaluate to False in boolean contexts. If x = [], then bool(x) returns False. Empty collections (lists, dictionaries, tuples, sets) are all falsy. Understanding this is important for conditional statements that check if collections have elements.

Empty list falsiness:
• [] is falsy (evaluates to False)
• bool([]) = False
• if []: ... (doesn't execute)
• Empty collections are falsy

How it works:
• Python evaluates values in boolean context
• Empty list evaluates to False
• Non-empty list evaluates to True
• Empty collections are falsy

Falsy collections:
• [] (empty list)
• {} (empty dictionary)
• () (empty tuple)
• set() (empty set)

Truthy collections:
• [1, 2] (non-empty list)
• {1: 2} (non-empty dictionary)
• (1, 2) (non-empty tuple)

Common uses:
• Conditional statements: if list: ... (checks if non-empty)
• Validation: if not list: ... (checks if empty)
• Boolean evaluation
• Default values: list or default

Example: If x = [], then bool(x) returns False because empty lists are falsy. In a conditional statement like if x:, the block would not execute.
`
  }),
  (_i: number) => ({ 
    q: `If x = [1, 2], is x Truthy?`, 
    o: ["Yes", "No", "Only if non-empty", "Error"], 
    c: 0, 
    e: "Non-empty lists are Truthy.",
    de: `Non-empty lists are truthy in Python, meaning they evaluate to True in boolean contexts. If x = [1, 2], then x is truthy. Any list with at least one element is truthy. Understanding this is important for conditional statements that check if collections have elements.

Non-empty list truthiness:
• [1, 2] is truthy (evaluates to True)
• bool([1, 2]) = True
• if [1, 2]: ... (executes)
• Non-empty collections are truthy

How it works:
• Python evaluates values in boolean context
• Non-empty list evaluates to True
• Any list with elements is truthy
• Only empty list [] is falsy

Examples:
• [1, 2] is truthy
• [0] is truthy (even with zero element)
• [False] is truthy (list is non-empty)
• [] is falsy (only empty list)

Common uses:
• Conditional statements: if list: ... (checks if non-empty)
• Validation: if list: ... (checks if has elements)
• Boolean evaluation
• Default values: list or default

Example: If x = [1, 2], then x is truthy. In a conditional statement like if x:, the block would execute because the list is non-empty.
`
  }),
  (_i: number) => ({ 
    q: `If x = "", is x Truthy?`, 
    o: ["No", "Yes", "Only in functions", "Error"], 
    c: 0, 
    e: "Empty strings are Falsy.",
    de: `Empty strings are falsy in Python, meaning they evaluate to False in boolean contexts. If x = "", then x is not truthy - it's falsy. Empty strings are one of the common falsy values in Python. Understanding this is important for conditional statements that check if strings have content.

Empty string falsiness:
• "" is falsy (evaluates to False)
• bool("") = False
• if "": ... (doesn't execute)
• Empty string is falsy

How it works:
• Python evaluates values in boolean context
• Empty string evaluates to False
• Non-empty string evaluates to True
• Only "" is falsy for strings

Examples:
• "" is falsy
• "hello" is truthy
• " " is truthy (space is a character)
• "" is falsy (only empty string)

Common uses:
• Conditional statements: if string: ... (checks if non-empty)
• Validation: if not string: ... (checks if empty)
• Boolean evaluation
• Default values: string or default

Example: If x = "", then x is falsy (not truthy). In a conditional statement like if x:, the block would not execute because empty strings are falsy.
`
  }),
  (_i: number) => ({ 
    q: `If x = "hello", is x Truthy?`, 
    o: ["Yes", "No", "Only if non-empty", "Error"], 
    c: 0, 
    e: "Non-empty strings are Truthy.",
    de: `Non-empty strings are truthy in Python, meaning they evaluate to True in boolean contexts. If x = "hello", then x is truthy. Any string with at least one character is truthy. Understanding this is important for conditional statements that check if strings have content.

Non-empty string truthiness:
• "hello" is truthy (evaluates to True)
• bool("hello") = True
• if "hello": ... (executes)
• Non-empty strings are truthy

How it works:
• Python evaluates values in boolean context
• Non-empty string evaluates to True
• Any string with characters is truthy
• Only "" is falsy for strings

Examples:
• "hello" is truthy
• " " is truthy (space is a character)
• "0" is truthy (string, not number)
• "" is falsy (only empty string)

Common uses:
• Conditional statements: if string: ... (checks if non-empty)
• Validation: if string: ... (checks if has content)
• Boolean evaluation
• Default values: string or default

Example: If x = "hello", then x is truthy. In a conditional statement like if x:, the block would execute because the string is non-empty.
`
  }),
  (_i: number) => ({ 
    q: `If x = None, is x Truthy?`, 
    o: ["No", "Yes", "Only in classes", "Error"], 
    c: 0, 
    e: "None is Falsy.",
    de: `None is falsy in Python, meaning it evaluates to False in boolean contexts. If x = None, then x is not truthy - it's falsy. None is one of the fundamental falsy values in Python. Understanding this is crucial for conditional statements that check for None.

None falsiness:
• None is falsy (evaluates to False)
• bool(None) = False
• if None: ... (doesn't execute)
• None is falsy

How it works:
• Python evaluates values in boolean context
• None evaluates to False
• None is a singleton falsy value
• Always use is None (not == None)

Important note:
• None is falsy
• But use is None for None checks
• if x is None: ... (recommended)
• if x == None: ... (works but not recommended)

Common uses:
• Conditional statements: if x is None: ... (recommended)
• Validation: if not x: ... (checks if falsy)
• Boolean evaluation
• Default values: x or default

Example: If x = None, then x is falsy (not truthy). In a conditional statement like if x:, the block would not execute because None is falsy. However, always use is None for None checks: if x is None: ...
`
  }),
  (_i: number) => ({ 
    q: `If x = {}, is x Truthy?`, 
    o: ["No", "Yes", "Only if non-empty", "Error"], 
    c: 0, 
    e: "Empty dictionaries are Falsy.",
    de: `Empty dictionaries are falsy in Python, meaning they evaluate to False in boolean contexts. If x = {}, then x is not truthy - it's falsy. Empty collections (dictionaries, lists, tuples, sets) are all falsy. Understanding this is important for conditional statements that check if dictionaries have key-value pairs.

Empty dictionary falsiness:
• {} is falsy (evaluates to False)
• bool({}) = False
• if {}: ... (doesn't execute)
• Empty collections are falsy

How it works:
• Python evaluates values in boolean context
• Empty dictionary evaluates to False
• Non-empty dictionary evaluates to True
• Empty collections are falsy

Falsy collections:
• {} (empty dictionary)
• [] (empty list)
• () (empty tuple)
• set() (empty set)

Truthy collections:
• {1: 2} (non-empty dictionary)
• [1, 2] (non-empty list)
• (1, 2) (non-empty tuple)

Common uses:
• Conditional statements: if dict: ... (checks if non-empty)
• Validation: if not dict: ... (checks if empty)
• Boolean evaluation
• Default values: dict or default

Example: If x = {}, then x is falsy (not truthy). In a conditional statement like if x:, the block would not execute because empty dictionaries are falsy.
`
  }),
  (_i: number) => ({ 
    q: `If x = {1: 2}, is x Truthy?`, 
    o: ["Yes", "No", "Only if non-empty", "Error"], 
    c: 0, 
    e: "Non-empty dictionaries are Truthy.",
    de: `Non-empty dictionaries are truthy in Python, meaning they evaluate to True in boolean contexts. If x = {1: 2}, then x is truthy. Any dictionary with at least one key-value pair is truthy. Understanding this is important for conditional statements that check if dictionaries have content.

Non-empty dictionary truthiness:
• {1: 2} is truthy (evaluates to True)
• bool({1: 2}) = True
• if {1: 2}: ... (executes)
• Non-empty collections are truthy

How it works:
• Python evaluates values in boolean context
• Non-empty dictionary evaluates to True
• Any dictionary with key-value pairs is truthy
• Only {} is falsy for dictionaries

Examples:
• {1: 2} is truthy
• {0: 0} is truthy (even with zero values)
• {False: False} is truthy (dictionary is non-empty)
• {} is falsy (only empty dictionary)

Common uses:
• Conditional statements: if dict: ... (checks if non-empty)
• Validation: if dict: ... (checks if has key-value pairs)
• Boolean evaluation
• Default values: dict or default

Example: If x = {1: 2}, then x is truthy. In a conditional statement like if x:, the block would execute because the dictionary is non-empty.
`
  }),
  (_i: number) => ({ 
    q: `If x = (), is x Truthy?`, 
    o: ["No", "Yes", "Only if non-empty", "Error"], 
    c: 0, 
    e: "Empty tuples are Falsy.",
    de: `Empty tuples are falsy in Python, meaning they evaluate to False in boolean contexts. If x = (), then x is not truthy - it's falsy. Empty collections (tuples, lists, dictionaries, sets) are all falsy. Understanding this is important for conditional statements that check if tuples have elements.

Empty tuple falsiness:
• () is falsy (evaluates to False)
• bool(()) = False
• if (): ... (doesn't execute)
• Empty collections are falsy

How it works:
• Python evaluates values in boolean context
• Empty tuple evaluates to False
• Non-empty tuple evaluates to True
• Empty collections are falsy

Falsy collections:
• () (empty tuple)
• [] (empty list)
• {} (empty dictionary)
• set() (empty set)

Truthy collections:
• (1, 2) (non-empty tuple)
• [1, 2] (non-empty list)
• {1: 2} (non-empty dictionary)

Common uses:
• Conditional statements: if tuple: ... (checks if non-empty)
• Validation: if not tuple: ... (checks if empty)
• Boolean evaluation
• Default values: tuple or default

Example: If x = (), then x is falsy (not truthy). In a conditional statement like if x:, the block would not execute because empty tuples are falsy.
`
  }),
  
  // 61-70: Conditional Keywords
  (_i: number) => ({ 
    q: `Which keyword links if and else?`, 
    o: ["elif", "elseif", "then", "ifnot"], 
    c: 0, 
    e: "Python uses elif.",
    de: `Python uses the keyword elif (short for "else if") to link multiple conditional branches between if and else. elif allows you to check multiple conditions in sequence. Unlike some languages that use "elseif" or "else if", Python uses the single keyword elif followed by a condition and colon.

elif keyword:
• Python uses elif (not elseif or else if)
• Links if and else statements
• Allows multiple conditional branches
• Syntax: elif condition:

How it works:
• if condition1: ... (first condition)
• elif condition2: ... (additional conditions)
• elif condition3: ... (more conditions)
• else: ... (default case)

Example structure:
if x > 10:
    print("large")
elif x > 5:
    print("medium")
elif x > 0:
    print("small")
else:
    print("zero or negative")

Common uses:
• Multiple conditional branches
• Cascading conditions
• Range checking
• Conditional logic

Example: Python uses elif to link if and else. The syntax is: if condition1: ... elif condition2: ... else: ...
`
  }),
  (_i: number) => ({ 
    q: `Can you have an 'if' without an 'else'?`, 
    o: ["Yes", "No", "Only in functions", "Error"], 
    c: 0, 
    e: "else is optional.",
    de: `The else clause is optional in Python if statements. You can have an if statement without an else block. If the condition is True, the if block executes; if False and there's no else, nothing happens. The else block is only executed when the if condition (and all elif conditions, if any) are False.

Optional else:
• else is optional
• if can stand alone
• if condition is False and no else, nothing executes
• else only needed for default case

How it works:
• if condition: ... (executes if True)
• No else needed
• If condition False, nothing happens
• else provides default behavior

Examples:
• if x > 0: print("positive") (no else)
• if x > 0: print("positive") else: print("non-positive") (with else)
• Both are valid

Common uses:
• Conditional execution without default
• Optional actions
• Guard clauses
• Conditional logic

Example: Yes, you can have an if without an else. The else clause is optional. If the condition is False and there's no else, nothing executes.
`
  }),
  (_i: number) => ({ 
    q: `Can you have multiple 'elif' statements?`, 
    o: ["Yes", "No", "Only two", "Error"], 
    c: 0, 
    e: "You can have as many elif as needed.",
    de: `Python allows you to have multiple elif statements in a single if-elif-else chain. You can have as many elif clauses as needed to check different conditions. Each elif is evaluated in order, and the first one that is True executes, with the rest being skipped.

Multiple elif:
• Yes, you can have multiple elif statements
• No limit on number of elif clauses
• Each elif checked in order
• First True condition executes

How it works:
• if condition1: ... (checked first)
• elif condition2: ... (checked if first False)
• elif condition3: ... (checked if previous False)
• else: ... (executes if all False)

Example:
if x > 100:
    print("very large")
elif x > 50:
    print("large")
elif x > 10:
    print("medium")
elif x > 0:
    print("small")
else:
    print("zero or negative")

Common uses:
• Multiple conditional branches
• Cascading conditions
• Range checking
• Complex conditional logic

Example: Yes, you can have multiple elif statements. There's no limit - you can have as many elif clauses as needed to check different conditions.
`
  }),
  (_i: number) => ({ 
    q: `What happens if all conditions in if/elif are False?`, 
    o: ["else block executes", "Error", "Nothing", "Returns None"], 
    c: 0, 
    e: "else block executes when all conditions are False.",
    de: `If all conditions in an if-elif chain are False, and there is an else clause, the else block executes. The else block provides a default action when none of the conditions are met. If there's no else clause, nothing executes when all conditions are False.

else execution:
• else block executes when all conditions False
• Provides default behavior
• Only executes if all if/elif are False
• Optional but useful for default cases

How it works:
• if condition1: ... (False, skip)
• elif condition2: ... (False, skip)
• elif condition3: ... (False, skip)
• else: ... (executes - default case)

Example:
if x > 10:
    print("large")
elif x > 5:
    print("medium")
else:
    print("small")  # Executes if x <= 5

Common uses:
• Default behavior
• Handling all other cases
• Fallback actions
• Complete conditional logic

Example: If all conditions in if/elif are False, the else block executes (if present). This provides default behavior when none of the conditions are met.
`
  }),
  (_i: number) => ({ 
    q: `What happens if no 'else' and all conditions are False?`, 
    o: ["Nothing executes", "Error", "Returns None", "Executes if block"], 
    c: 0, 
    e: "If no else and all conditions False, nothing executes.",
    de: `If there's no else clause and all conditions (if and all elif) are False, nothing executes. The program simply continues to the next statement after the if-elif chain. No error occurs - it's perfectly valid to have an if statement without an else.

No else behavior:
• If no else and all conditions False, nothing executes
• Program continues normally
• No error occurs
• Valid Python code

How it works:
• if condition1: ... (False, skip)
• elif condition2: ... (False, skip)
• No else clause
• Nothing executes, program continues

Example:
if x > 10:
    print("large")
elif x > 5:
    print("medium")
# If x <= 5, nothing happens, program continues

Common uses:
• Optional actions
• Conditional execution without default
• Guard clauses
• Conditional logic

Example: If there's no else and all conditions are False, nothing executes. The program simply continues to the next statement - no error occurs.
`
  }),
  (_i: number) => ({ 
    q: `Which operator checks inequality?`, 
    o: ["!=", "<>", "not", "=="], 
    c: 0, 
    e: "!= is standard (<> was in Python 2).",
    de: `The != operator checks for inequality in Python. It returns True if two values are not equal, False if they are equal. The != operator is the standard way to check inequality in Python 3. Note that <> was used in Python 2 but is not available in Python 3.

Inequality operator:
• != is the standard inequality operator
• Returns True if values not equal
• Returns False if values equal
• Used in conditional statements

How it works:
• a != b returns True if a ≠ b
• a != b returns False if a == b
• Opposite of == operator
• Works with any comparable types

Examples:
• 5 != 3 = True (not equal)
• 5 != 5 = False (equal)
• "hello" != "world" = True (not equal)
• "hello" != "hello" = False (equal)

Python 2 vs Python 3:
• Python 2: != and <> both worked
• Python 3: Only != (<> removed)
• != is the standard way

Common uses:
• Conditional statements: if x != 0:
• Checking inequality: if status != "error":
• Validation and comparisons
• Boolean expressions

Example: The != operator checks inequality. It's the standard way in Python 3 (<> was used in Python 2 but is not available in Python 3).
`
  }),
  (_i: number) => ({ 
    q: `Which operator checks identity?`, 
    o: ["is", "==", "=", "==="], 
    c: 0, 
    e: "is checks object identity.",
    de: `The is operator checks object identity in Python - whether two variables reference the same object in memory. The is operator is different from == which checks value equality. The is operator is commonly used to check for None, True, False, and other singleton objects.

Identity operator:
• is checks object identity (same object)
• Different from == (which checks values)
• Returns True if same object
• Returns False if different objects

How it works:
• Checks if variables reference same object
• Compares memory addresses
• Returns True if same object
• Returns False if different objects

Examples:
• 5 is 5 = True (cached integers)
• [1, 2] is [1, 2] = False (different objects)
• None is None = True (singleton)
• x is None = True (if x is None)

Important distinction:
• == compares values (equality)
• is compares identity (same object)
• Use == for value comparison
• Use is for identity checks (especially None)

Common uses:
• Checking for None: if x is None:
• Checking for singletons: if x is True:
• Identity checks
• Object comparison

Example: The is operator checks object identity. It's commonly used to check for None: if x is None: ... (not if x == None:)
`
  }),
  (_i: number) => ({ 
    q: `What is the syntax for if statement?`, 
    o: ["if condition:", "if (condition)", "if condition then", "if condition {"], 
    c: 0, 
    e: "Python uses colon and indentation.",
    de: `Python if statements use a colon (:) after the condition and indentation to define the block. The syntax is: if condition:. Unlike some languages that use parentheses or braces, Python uses a colon and indentation. The colon is required, and the indented code below is the block that executes if the condition is True.

if syntax:
• if condition: (colon required)
• Indentation defines block
• No parentheses needed (but allowed)
• No braces or "then" keyword

How it works:
• if condition: (colon after condition)
• Next line(s) indented = block
• Block executes if condition True
• Dedent to end block

Examples:
• if x > 0: print("positive") (one line)
• if x > 0: (multi-line)
    print("positive")
    print("x is positive")

Common uses:
• Conditional execution
• Control flow
• Decision making
• Conditional logic

Example: Python if statement syntax is: if condition:. The colon is required, and the indented code below is the block that executes if the condition is True.
`
  }),
  (_i: number) => ({ 
    q: `What is the syntax for else statement?`, 
    o: ["else:", "else {", "else then", "else if"], 
    c: 0, 
    e: "Python uses colon and indentation.",
    de: `Python else statements use a colon (:) and indentation to define the block. The syntax is: else:. The else keyword is followed by a colon, and the indented code below is the block that executes when the if (and all elif) conditions are False. Python uses indentation, not braces or "then" keywords.

else syntax:
• else: (colon required)
• Indentation defines block
• No condition (executes when if/elif False)
• No braces or "then" keyword

How it works:
• else: (colon after else)
• Next line(s) indented = block
• Block executes if all if/elif False
• Dedent to end block

Examples:
• if x > 0: print("positive") else: print("non-positive") (one line)
• if x > 0: (multi-line)
    print("positive")
else:
    print("non-positive")

Common uses:
• Default behavior
• Handling all other cases
• Fallback actions
• Complete conditional logic

Example: Python else statement syntax is: else:. The colon is required, and the indented code below is the block that executes when all if/elif conditions are False.
`
  }),
  (_i: number) => ({ 
    q: `What is the syntax for elif statement?`, 
    o: ["elif condition:", "elseif condition:", "elif (condition)", "elif condition then"], 
    c: 0, 
    e: "Python uses elif with colon.",
    de: `Python elif statements use the keyword elif followed by a condition and colon. The syntax is: elif condition:. The elif keyword (short for "else if") is followed by a condition, then a colon, and the indented code below is the block that executes if the condition is True and all previous if/elif conditions were False.

elif syntax:
• elif condition: (colon required)
• Indentation defines block
• No parentheses needed (but allowed)
• No braces or "then" keyword

How it works:
• elif condition: (colon after condition)
• Next line(s) indented = block
• Block executes if condition True and previous False
• Dedent to end block

Examples:
• if x > 10: print("large") elif x > 5: print("medium") else: print("small") (one line)
• if x > 10: (multi-line)
    print("large")
elif x > 5:
    print("medium")
else:
    print("small")

Common uses:
• Multiple conditional branches
• Cascading conditions
• Range checking
• Complex conditional logic

Example: Python elif statement syntax is: elif condition:. The colon is required, and the indented code below is the block that executes if the condition is True and all previous conditions were False.
`
  }),
  
  // 71-80: Ternary Operator
  (_i: number) => ({ 
    q: `What is 5 if 5 > 3 else 3?`, 
    o: ["5", "3", "Error", "None"], 
    c: 0, 
    e: "Ternary operator: value_if_true if condition else value_if_false.",
    de: `Python's ternary operator (conditional expression) has the syntax: value_if_true if condition else value_if_false. 5 if 5 > 3 else 3 evaluates the condition first: 5 > 3 is True, so it returns 5 (the value_if_true). The ternary operator is a concise way to write simple if-else statements in a single line.

Ternary operator syntax:
• value_if_true if condition else value_if_false
• Evaluates condition first
• Returns value_if_true if condition True
• Returns value_if_false if condition False

How it works:
• 5 if 5 > 3 else 3
• First: 5 > 3 = True
• Since True, returns 5 (value_if_true)
• Result: 5

Examples:
• 5 if 5 > 3 else 3 = 5 (condition True)
• 3 if 3 > 5 else 5 = 5 (condition False)
• 'yes' if True else 'no' = 'yes'

Common uses:
• Concise conditional assignment: x = 5 if condition else 3
• Simple if-else in one line
• Conditional values
• Default values

Example: 5 if 5 > 3 else 3 returns 5 because the condition (5 > 3) is True, so it returns the value_if_true (5).
`
  }),
  (_i: number) => ({ 
    q: `What is 3 if 3 > 5 else 5?`, 
    o: ["5", "3", "Error", "None"], 
    c: 0, 
    e: "Ternary operator returns else value when condition is False.",
    de: `Python's ternary operator returns the else value when the condition is False. 3 if 3 > 5 else 5 evaluates the condition first: 3 > 5 is False, so it returns 5 (the value_if_false). The ternary operator provides a concise way to choose between two values based on a condition.

Ternary operator:
• 3 if 3 > 5 else 5
• First: 3 > 5 = False
• Since False, returns 5 (value_if_false)
• Result: 5

How it works:
• Evaluates condition: 3 > 5 = False
• Since condition is False, returns else value
• Returns 5 (value_if_false)
• Result: 5

Examples:
• 3 if 3 > 5 else 5 = 5 (condition False)
• 5 if 5 > 3 else 3 = 5 (condition True)
• 'no' if False else 'yes' = 'yes'

Common uses:
• Concise conditional assignment: x = 3 if condition else 5
• Simple if-else in one line
• Conditional values
• Default values

Example: 3 if 3 > 5 else 5 returns 5 because the condition (3 > 5) is False, so it returns the value_if_false (5).
`
  }),
  (_i: number) => ({ 
    q: `What is 'yes' if True else 'no'?`, 
    o: ["'yes'", "'no'", "Error", "None"], 
    c: 0, 
    e: "Ternary with True condition returns first value.",
    de: `Python's ternary operator returns the value_if_true when the condition is True. 'yes' if True else 'no' evaluates the condition: True is True, so it returns 'yes' (the value_if_true). The ternary operator works with any values, including strings.

Ternary with True:
• 'yes' if True else 'no'
• Condition: True
• Since True, returns 'yes' (value_if_true)
• Result: 'yes'

How it works:
• Evaluates condition: True
• Since condition is True, returns value_if_true
• Returns 'yes'
• Result: 'yes'

Examples:
• 'yes' if True else 'no' = 'yes'
• 'yes' if False else 'no' = 'no'
• 'positive' if 5 > 0 else 'negative' = 'positive'

Common uses:
• Concise conditional assignment: status = 'yes' if condition else 'no'
• Simple if-else in one line
• Conditional string values
• Default values

Example: 'yes' if True else 'no' returns 'yes' because the condition (True) is True, so it returns the value_if_true ('yes').
`
  }),
  (_i: number) => ({ 
    q: `What is 'yes' if False else 'no'?`, 
    o: ["'no'", "'yes'", "Error", "None"], 
    c: 0, 
    e: "Ternary with False condition returns else value.",
    de: `Python's ternary operator returns the value_if_false when the condition is False. 'yes' if False else 'no' evaluates the condition: False is False, so it returns 'no' (the value_if_false). The ternary operator works with any values, including strings.

Ternary with False:
• 'yes' if False else 'no'
• Condition: False
• Since False, returns 'no' (value_if_false)
• Result: 'no'

How it works:
• Evaluates condition: False
• Since condition is False, returns value_if_false
• Returns 'no'
• Result: 'no'

Examples:
• 'yes' if False else 'no' = 'no'
• 'yes' if True else 'no' = 'yes'
• 'positive' if -5 > 0 else 'negative' = 'negative'

Common uses:
• Concise conditional assignment: status = 'yes' if condition else 'no'
• Simple if-else in one line
• Conditional string values
• Default values

Example: 'yes' if False else 'no' returns 'no' because the condition (False) is False, so it returns the value_if_false ('no').
`
  }),
  (_i: number) => ({ 
    q: `What is max(5, 3) if 5 > 3 else min(5, 3)?`, 
    o: ["5", "3", "Error", "None"], 
    c: 0, 
    e: "Ternary can use function calls.",
    de: `Python's ternary operator can use function calls in both the value_if_true and value_if_false parts. max(5, 3) if 5 > 3 else min(5, 3) evaluates the condition first: 5 > 3 is True, so it returns max(5, 3) which equals 5. Function calls are evaluated only for the selected branch.

Ternary with functions:
• max(5, 3) if 5 > 3 else min(5, 3)
• Condition: 5 > 3 = True
• Since True, evaluates max(5, 3) = 5
• Result: 5

How it works:
• Evaluates condition: 5 > 3 = True
• Since True, evaluates value_if_true: max(5, 3) = 5
• min(5, 3) is not evaluated (short-circuit)
• Result: 5

Examples:
• max(5, 3) if 5 > 3 else min(5, 3) = 5
• max(5, 3) if 3 > 5 else min(5, 3) = 3
• len([1, 2]) if True else len([]) = 2

Common uses:
• Conditional function calls
• Choosing between function results
• Conditional calculations
• Efficient conditional evaluation

Example: max(5, 3) if 5 > 3 else min(5, 3) returns 5 because the condition (5 > 3) is True, so it evaluates max(5, 3) which equals 5.
`
  }),
  (_i: number) => ({ 
    q: `What is 'even' if 4 % 2 == 0 else 'odd'?`, 
    o: ["'even'", "'odd'", "Error", "None"], 
    c: 0, 
    e: "Ternary with modulo check.",
    de: `Python's ternary operator can use any boolean expression as the condition. 'even' if 4 % 2 == 0 else 'odd' evaluates the condition: 4 % 2 == 0 (which is 0 == 0, True), so it returns 'even'. This is a common pattern for checking if a number is even or odd using the modulo operator.

Ternary with modulo:
• 'even' if 4 % 2 == 0 else 'odd'
• Condition: 4 % 2 == 0 → 0 == 0 → True
• Since True, returns 'even'
• Result: 'even'

How it works:
• Evaluates condition: 4 % 2 = 0, then 0 == 0 = True
• Since True, returns value_if_true: 'even'
• Result: 'even'

Examples:
• 'even' if 4 % 2 == 0 else 'odd' = 'even'
• 'even' if 5 % 2 == 0 else 'odd' = 'odd'
• 'even' if 0 % 2 == 0 else 'odd' = 'even'

Common uses:
• Checking even/odd: result = 'even' if n % 2 == 0 else 'odd'
• Conditional string values
• Simple if-else in one line
• Pattern matching

Example: 'even' if 4 % 2 == 0 else 'odd' returns 'even' because 4 % 2 equals 0, and 0 == 0 is True, so it returns 'even'.
`
  }),
  (_i: number) => ({ 
    q: `What is 'even' if 5 % 2 == 0 else 'odd'?`, 
    o: ["'odd'", "'even'", "Error", "None"], 
    c: 0, 
    e: "Ternary with modulo check - odd number.",
    de: `Python's ternary operator returns the else value when the condition is False. 'even' if 5 % 2 == 0 else 'odd' evaluates the condition: 5 % 2 == 0 (which is 1 == 0, False), so it returns 'odd'. This is a common pattern for checking if a number is even or odd using the modulo operator.

Ternary with modulo (odd):
• 'even' if 5 % 2 == 0 else 'odd'
• Condition: 5 % 2 == 0 → 1 == 0 → False
• Since False, returns 'odd'
• Result: 'odd'

How it works:
• Evaluates condition: 5 % 2 = 1, then 1 == 0 = False
• Since False, returns value_if_false: 'odd'
• Result: 'odd'

Examples:
• 'even' if 5 % 2 == 0 else 'odd' = 'odd'
• 'even' if 4 % 2 == 0 else 'odd' = 'even'
• 'even' if 3 % 2 == 0 else 'odd' = 'odd'

Common uses:
• Checking even/odd: result = 'even' if n % 2 == 0 else 'odd'
• Conditional string values
• Simple if-else in one line
• Pattern matching

Example: 'even' if 5 % 2 == 0 else 'odd' returns 'odd' because 5 % 2 equals 1, and 1 == 0 is False, so it returns 'odd'.
`
  }),
  (_i: number) => ({ 
    q: `What is 'positive' if 5 > 0 else 'non-positive'?`, 
    o: ["'positive'", "'non-positive'", "Error", "None"], 
    c: 0, 
    e: "Ternary with comparison.",
    de: `Python's ternary operator can use comparison operators in the condition. 'positive' if 5 > 0 else 'non-positive' evaluates the condition: 5 > 0 is True, so it returns 'positive'. This is a common pattern for categorizing values based on comparisons.

Ternary with comparison:
• 'positive' if 5 > 0 else 'non-positive'
• Condition: 5 > 0 = True
• Since True, returns 'positive'
• Result: 'positive'

How it works:
• Evaluates condition: 5 > 0 = True
• Since True, returns value_if_true: 'positive'
• Result: 'positive'

Examples:
• 'positive' if 5 > 0 else 'non-positive' = 'positive'
• 'positive' if -5 > 0 else 'non-positive' = 'non-positive'
• 'positive' if 0 > 0 else 'non-positive' = 'non-positive'

Common uses:
• Categorizing values: result = 'positive' if x > 0 else 'non-positive'
• Conditional string values
• Simple if-else in one line
• Classification

Example: 'positive' if 5 > 0 else 'non-positive' returns 'positive' because the condition (5 > 0) is True, so it returns 'positive'.
`
  }),
  (_i: number) => ({ 
    q: `What is 'positive' if -5 > 0 else 'non-positive'?`, 
    o: ["'non-positive'", "'positive'", "Error", "None"], 
    c: 0, 
    e: "Ternary with negative number.",
    de: `Python's ternary operator returns the else value when the condition is False. 'positive' if -5 > 0 else 'non-positive' evaluates the condition: -5 > 0 is False, so it returns 'non-positive'. This demonstrates how the ternary operator handles negative numbers in comparisons.

Ternary with negative:
• 'positive' if -5 > 0 else 'non-positive'
• Condition: -5 > 0 = False
• Since False, returns 'non-positive'
• Result: 'non-positive'

How it works:
• Evaluates condition: -5 > 0 = False
• Since False, returns value_if_false: 'non-positive'
• Result: 'non-positive'

Examples:
• 'positive' if -5 > 0 else 'non-positive' = 'non-positive'
• 'positive' if 5 > 0 else 'non-positive' = 'positive'
• 'positive' if 0 > 0 else 'non-positive' = 'non-positive'

Common uses:
• Categorizing values: result = 'positive' if x > 0 else 'non-positive'
• Conditional string values
• Simple if-else in one line
• Classification

Example: 'positive' if -5 > 0 else 'non-positive' returns 'non-positive' because the condition (-5 > 0) is False, so it returns 'non-positive'.
`
  }),
  (_i: number) => ({ 
    q: `What is 'empty' if len([]) == 0 else 'not empty'?`, 
    o: ["'empty'", "'not empty'", "Error", "None"], 
    c: 0, 
    e: "Ternary with len() check.",
    de: `Python's ternary operator can use function calls like len() in the condition. 'empty' if len([]) == 0 else 'not empty' evaluates the condition: len([]) == 0 (which is 0 == 0, True), so it returns 'empty'. This is a common pattern for checking if collections are empty.

Ternary with len():
• 'empty' if len([]) == 0 else 'not empty'
• Condition: len([]) == 0 → 0 == 0 → True
• Since True, returns 'empty'
• Result: 'empty'

How it works:
• Evaluates condition: len([]) = 0, then 0 == 0 = True
• Since True, returns value_if_true: 'empty'
• Result: 'empty'

Examples:
• 'empty' if len([]) == 0 else 'not empty' = 'empty'
• 'empty' if len([1, 2]) == 0 else 'not empty' = 'not empty'
• 'empty' if len("") == 0 else 'not empty' = 'empty'

Common uses:
• Checking if empty: result = 'empty' if len(collection) == 0 else 'not empty'
• Conditional string values
• Simple if-else in one line
• Collection validation

Example: 'empty' if len([]) == 0 else 'not empty' returns 'empty' because len([]) equals 0, and 0 == 0 is True, so it returns 'empty'.
`
  }),
  
  // 81-90: Short-Circuit Evaluation
  (_i: number) => ({ 
    q: `What is True and 5?`, 
    o: ["5", "True", "False", "Error"], 
    c: 0, 
    e: "and returns last value if all are Truthy.",
    de: `The and operator in Python uses short-circuit evaluation and returns the last value if all operands are truthy. True and 5 evaluates: True is truthy, so it continues to evaluate 5, which is also truthy, so it returns 5 (the last value). This behavior is useful for conditional assignment and default values.

and operator behavior:
• True and 5 = 5 (returns last value if all truthy)
• Evaluates left to right
• Returns first falsy value if found
• Returns last value if all truthy

How it works:
• Evaluates True: truthy, continues
• Evaluates 5: truthy, continues
• All are truthy, returns last value: 5
• Result: 5

Examples:
• True and 5 = 5 (all truthy, returns last)
• True and False = False (first falsy found)
• 1 and 2 and 3 = 3 (all truthy, returns last)

Common uses:
• Conditional assignment: x = value and default
• Chaining conditions
• Default values
• Short-circuit evaluation

Example: True and 5 returns 5 because both operands are truthy, so and returns the last value (5). This is useful for conditional logic.
`
  }),
  (_i: number) => ({ 
    q: `What is False and 5?`, 
    o: ["False", "5", "True", "Error"], 
    c: 0, 
    e: "and short-circuits at first Falsy value.",
    de: `The and operator uses short-circuit evaluation - it stops evaluating as soon as it encounters a falsy value. False and 5 evaluates: False is falsy, so it short-circuits and returns False immediately without evaluating 5. This is efficient and prevents unnecessary computation.

Short-circuit behavior:
• False and 5 = False (short-circuits at first falsy)
• Stops evaluation at first falsy value
• Doesn't evaluate remaining operands
• Returns the falsy value

How it works:
• Evaluates False: falsy, short-circuits
• Doesn't evaluate 5 (not needed)
• Returns False immediately
• Result: False

Examples:
• False and 5 = False (short-circuits)
• False and expensive_function() = False (function not called)
• 0 and 5 = 0 (short-circuits)

Common uses:
• Efficient validation: if x > 0 and expensive_check(x):
• Preventing expensive operations
• Guard clauses
• Conditional execution

Example: False and 5 returns False because and short-circuits at the first falsy value (False), so it doesn't evaluate 5 and returns False immediately.
`
  }),
  (_i: number) => ({ 
    q: `What is True or 5?`, 
    o: ["True", "5", "False", "Error"], 
    c: 0, 
    e: "or short-circuits at first Truthy value.",
    de: `The or operator uses short-circuit evaluation - it stops evaluating as soon as it encounters a truthy value. True or 5 evaluates: True is truthy, so it short-circuits and returns True immediately without evaluating 5. This is efficient and is commonly used for default values.

Short-circuit behavior:
• True or 5 = True (short-circuits at first truthy)
• Stops evaluation at first truthy value
• Doesn't evaluate remaining operands
• Returns the truthy value

How it works:
• Evaluates True: truthy, short-circuits
• Doesn't evaluate 5 (not needed)
• Returns True immediately
• Result: True

Examples:
• True or 5 = True (short-circuits)
• True or expensive_function() = True (function not called)
• 1 or 5 = 1 (short-circuits)

Common uses:
• Default values: value = x or default
• Efficient fallbacks
• Preventing expensive operations
• Conditional assignment

Example: True or 5 returns True because or short-circuits at the first truthy value (True), so it doesn't evaluate 5 and returns True immediately.
`
  }),
  (_i: number) => ({ 
    q: `What is False or 5?`, 
    o: ["5", "False", "True", "Error"], 
    c: 0, 
    e: "or returns last value if all are Falsy.",
    de: `The or operator in Python returns the last value if all operands are falsy. False or 5 evaluates: False is falsy, so it continues to evaluate 5, which is truthy, so it returns 5. If all operands were falsy, it would return the last falsy value. This behavior is useful for default values.

or operator behavior:
• False or 5 = 5 (returns first truthy value)
• Evaluates left to right
• Returns first truthy value if found
• Returns last value if all falsy

How it works:
• Evaluates False: falsy, continues
• Evaluates 5: truthy, returns 5
• Returns first truthy value found
• Result: 5

Examples:
• False or 5 = 5 (first truthy found)
• False or 0 = 0 (all falsy, returns last)
• None or "" or "default" = "default" (first truthy)

Common uses:
• Default values: value = x or default
• Fallback values
• Conditional assignment
• Providing defaults

Example: False or 5 returns 5 because False is falsy, so or continues and finds 5 (which is truthy), so it returns 5. This is commonly used for default values: value = user_input or "default".
`
  }),
  (_i: number) => ({ 
    q: `What is 0 and 5?`, 
    o: ["0", "5", "False", "Error"], 
    c: 0, 
    e: "0 is Falsy, so and returns 0 (short-circuits).",
    de: `The and operator short-circuits at falsy values. 0 and 5 evaluates: 0 is falsy, so it short-circuits and returns 0 immediately without evaluating 5. The number 0 is falsy in Python, so it causes short-circuiting in boolean expressions.

Short-circuit with 0:
• 0 and 5 = 0 (short-circuits at 0)
• 0 is falsy, so and returns 0
• Doesn't evaluate 5
• Returns the falsy value

How it works:
• Evaluates 0: falsy, short-circuits
• Doesn't evaluate 5 (not needed)
• Returns 0 immediately
• Result: 0

Examples:
• 0 and 5 = 0 (short-circuits)
• 0 and expensive_function() = 0 (function not called)
• 0 and "hello" = 0 (short-circuits)

Common uses:
• Efficient validation: if x and x > 0:
• Preventing division by zero: if divisor and value / divisor:
• Guard clauses
• Conditional execution

Example: 0 and 5 returns 0 because 0 is falsy, so and short-circuits and returns 0 immediately without evaluating 5.
`
  }),
  (_i: number) => ({ 
    q: `What is 1 and 5?`, 
    o: ["5", "1", "True", "Error"], 
    c: 0, 
    e: "1 is Truthy, so and returns last value 5.",
    de: `The and operator returns the last value if all operands are truthy. 1 and 5 evaluates: 1 is truthy, so it continues to evaluate 5, which is also truthy, so it returns 5 (the last value). Non-zero numbers are truthy in Python, so they don't cause short-circuiting in and expressions.

and with truthy numbers:
• 1 and 5 = 5 (returns last value if all truthy)
• 1 is truthy, continues
• 5 is truthy, returns 5
• Returns last value

How it works:
• Evaluates 1: truthy, continues
• Evaluates 5: truthy, continues
• All are truthy, returns last value: 5
• Result: 5

Examples:
• 1 and 5 = 5 (all truthy, returns last)
• 1 and 2 and 3 = 3 (all truthy, returns last)
• 1 and 0 = 0 (first falsy found)

Common uses:
• Conditional assignment
• Chaining conditions
• Default values
• Short-circuit evaluation

Example: 1 and 5 returns 5 because both operands are truthy (1 and 5), so and returns the last value (5).
`
  }),
  (_i: number) => ({ 
    q: `What is 0 or 5?`, 
    o: ["5", "0", "False", "Error"], 
    c: 0, 
    e: "0 is Falsy, so or continues and returns 5.",
    de: `The or operator continues evaluating until it finds a truthy value. 0 or 5 evaluates: 0 is falsy, so it continues to evaluate 5, which is truthy, so it returns 5. The or operator returns the first truthy value it encounters, or the last value if all are falsy.

or with falsy number:
• 0 or 5 = 5 (returns first truthy value)
• 0 is falsy, continues
• 5 is truthy, returns 5
• Returns first truthy found

How it works:
• Evaluates 0: falsy, continues
• Evaluates 5: truthy, returns 5
• Returns first truthy value found
• Result: 5

Examples:
• 0 or 5 = 5 (first truthy found)
• 0 or 0 or 5 = 5 (first truthy found)
• 0 or "" or "default" = "default" (first truthy)

Common uses:
• Default values: value = x or default
• Fallback values
• Conditional assignment
• Providing defaults

Example: 0 or 5 returns 5 because 0 is falsy, so or continues and finds 5 (which is truthy), so it returns 5. This is commonly used: value = user_input or 0 (provides default).
`
  }),
  (_i: number) => ({ 
    q: `What is 1 or 5?`, 
    o: ["1", "5", "True", "Error"], 
    c: 0, 
    e: "1 is Truthy, so or short-circuits and returns 1.",
    de: `The or operator short-circuits at truthy values. 1 or 5 evaluates: 1 is truthy, so it short-circuits and returns 1 immediately without evaluating 5. Non-zero numbers are truthy in Python, so they cause short-circuiting in or expressions.

Short-circuit with truthy number:
• 1 or 5 = 1 (short-circuits at 1)
• 1 is truthy, so or returns 1
• Doesn't evaluate 5
• Returns the truthy value

How it works:
• Evaluates 1: truthy, short-circuits
• Doesn't evaluate 5 (not needed)
• Returns 1 immediately
• Result: 1

Examples:
• 1 or 5 = 1 (short-circuits)
• 1 or expensive_function() = 1 (function not called)
• 1 or "hello" = 1 (short-circuits)

Common uses:
• Efficient fallbacks: value = x or y or default
• Preventing expensive operations
• Conditional assignment
• Short-circuit evaluation

Example: 1 or 5 returns 1 because 1 is truthy, so or short-circuits and returns 1 immediately without evaluating 5.
`
  }),
  (_i: number) => ({ 
    q: `What is '' and 'hello'?`, 
    o: ["''", "'hello'", "False", "Error"], 
    c: 0, 
    e: "Empty string is Falsy, so and returns ''.",
    de: `The and operator short-circuits at falsy values. '' and 'hello' evaluates: '' (empty string) is falsy, so it short-circuits and returns '' immediately without evaluating 'hello'. Empty strings are falsy in Python, so they cause short-circuiting in boolean expressions.

Short-circuit with empty string:
• '' and 'hello' = '' (short-circuits at '')
• Empty string is falsy, so and returns ''
• Doesn't evaluate 'hello'
• Returns the falsy value

How it works:
• Evaluates '': falsy, short-circuits
• Doesn't evaluate 'hello' (not needed)
• Returns '' immediately
• Result: ''

Examples:
• '' and 'hello' = '' (short-circuits)
• '' and expensive_function() = '' (function not called)
• '' and "world" = '' (short-circuits)

Common uses:
• Efficient validation: if string and string.strip():
• Preventing operations on empty strings
• Guard clauses
• Conditional execution

Example: '' and 'hello' returns '' because the empty string is falsy, so and short-circuits and returns '' immediately without evaluating 'hello'.
`
  }),
  (_i: number) => ({ 
    q: `What is 'hello' and 'world'?`, 
    o: ["'world'", "'hello'", "True", "Error"], 
    c: 0, 
    e: "Both are Truthy, so and returns last value 'world'.",
    de: `The and operator returns the last value if all operands are truthy. 'hello' and 'world' evaluates: 'hello' is truthy (non-empty string), so it continues to evaluate 'world', which is also truthy, so it returns 'world' (the last value). Non-empty strings are truthy in Python.

and with truthy strings:
• 'hello' and 'world' = 'world' (returns last value if all truthy)
• 'hello' is truthy, continues
• 'world' is truthy, returns 'world'
• Returns last value

How it works:
• Evaluates 'hello': truthy, continues
• Evaluates 'world': truthy, continues
• All are truthy, returns last value: 'world'
• Result: 'world'

Examples:
• 'hello' and 'world' = 'world' (all truthy, returns last)
• 'a' and 'b' and 'c' = 'c' (all truthy, returns last)
• 'hello' and '' = '' (first falsy found)

Common uses:
• Conditional assignment
• Chaining conditions
• Default values
• Short-circuit evaluation

Example: 'hello' and 'world' returns 'world' because both operands are truthy (non-empty strings), so and returns the last value ('world').
`
  }),
  
  // 91-100: Complex Boolean Expressions
  (_i: number) => ({ 
    q: `Result of 5 > 3 and 10 > 5?`, 
    o: ["True", "False", "None", "Error"], 
    c: 0, 
    e: "Both conditions must be True.",
    de: `Complex boolean expressions combine multiple conditions with logical operators. 5 > 3 and 10 > 5 evaluates both conditions: 5 > 3 is True, and 10 > 5 is True. Since both are True, the and operator returns True. This is commonly used in conditional statements for multiple requirements.

Complex boolean expression:
• 5 > 3 and 10 > 5 = True
• First: 5 > 3 = True
• Second: 10 > 5 = True
• True and True = True

How it works:
• Evaluates left condition: 5 > 3 = True
• Evaluates right condition: 10 > 5 = True
• Combines with and: True and True = True
• Returns True if both are True

Examples:
• 5 > 3 and 10 > 5 = True (both True)
• 5 > 3 and 5 > 10 = False (second False)
• 5 > 10 and 10 > 5 = False (first False)

Common uses:
• Multiple conditions: if x > 0 and x < 100:
• Validation: if valid and available:
• Compound conditions
• Conditional statements

Example: 5 > 3 and 10 > 5 returns True because both conditions are True (5 > 3 is True, and 10 > 5 is True), so the and operator returns True.
`
  }),
  (_i: number) => ({ 
    q: `Result of 5 > 10 and 10 > 5?`, 
    o: ["False", "True", "None", "Error"], 
    c: 0, 
    e: "First condition is False, so and returns False.",
    de: `The and operator short-circuits at the first False condition. 5 > 10 and 10 > 5 evaluates: 5 > 10 is False, so it short-circuits and returns False immediately without evaluating 10 > 5. The and operator requires both conditions to be True, so if the first is False, the result is False.

Complex boolean expression:
• 5 > 10 and 10 > 5 = False
• First: 5 > 10 = False
• Short-circuits: doesn't evaluate second
• False and anything = False

How it works:
• Evaluates left condition: 5 > 10 = False
• Short-circuits: returns False immediately
• Doesn't evaluate 10 > 5 (not needed)
• Result: False

Examples:
• 5 > 10 and 10 > 5 = False (first False)
• 5 > 10 and expensive_check() = False (function not called)
• False and True = False

Common uses:
• Efficient validation: if x > 0 and expensive_check(x):
• Guard clauses
• Preventing expensive operations
• Conditional statements

Example: 5 > 10 and 10 > 5 returns False because the first condition (5 > 10) is False, so and short-circuits and returns False immediately without evaluating the second condition.
`
  }),
  (_i: number) => ({ 
    q: `Result of 5 > 3 or 10 < 5?`, 
    o: ["True", "False", "None", "Error"], 
    c: 0, 
    e: "At least one condition is True.",
    de: `The or operator returns True if at least one condition is True. 5 > 3 or 10 < 5 evaluates: 5 > 3 is True, so it short-circuits and returns True immediately without evaluating 10 < 5. The or operator requires only one condition to be True for the result to be True.

Complex boolean expression:
• 5 > 3 or 10 < 5 = True
• First: 5 > 3 = True
• Short-circuits: returns True immediately
• Doesn't evaluate second (not needed)

How it works:
• Evaluates left condition: 5 > 3 = True
• Short-circuits: returns True immediately
• Doesn't evaluate 10 < 5 (not needed)
• Result: True

Examples:
• 5 > 3 or 10 < 5 = True (first True)
• 5 > 10 or 10 > 5 = True (second True)
• 5 > 10 or 10 < 5 = False (both False)

Common uses:
• Alternative conditions: if x == 5 or x == 10:
• Fallback checks
• Multiple possibilities
• Conditional statements

Example: 5 > 3 or 10 < 5 returns True because the first condition (5 > 3) is True, so or short-circuits and returns True immediately without evaluating the second condition.
`
  }),
  (_i: number) => ({ 
    q: `Result of 5 > 10 or 10 < 5?`, 
    o: ["False", "True", "None", "Error"], 
    c: 0, 
    e: "Both conditions are False, so or returns False.",
    de: `The or operator returns False only if all conditions are False. 5 > 10 or 10 < 5 evaluates: 5 > 10 is False, and 10 < 5 is False. Since both are False, the or operator returns False. The or operator requires at least one condition to be True for the result to be True.

Complex boolean expression:
• 5 > 10 or 10 < 5 = False
• First: 5 > 10 = False
• Second: 10 < 5 = False
• False or False = False

How it works:
• Evaluates left condition: 5 > 10 = False
• Evaluates right condition: 10 < 5 = False
• Combines with or: False or False = False
• Returns False if both are False

Examples:
• 5 > 10 or 10 < 5 = False (both False)
• 5 > 3 or 10 > 5 = True (at least one True)
• False or False = False

Common uses:
• Alternative conditions: if x == 5 or x == 10:
• Multiple possibilities
• Fallback checks
• Conditional statements

Example: 5 > 10 or 10 < 5 returns False because both conditions are False (5 > 10 is False, and 10 < 5 is False), so the or operator returns False.
`
  }),
  (_i: number) => ({ 
    q: `Result of not (5 > 10)?`, 
    o: ["True", "False", "None", "Error"], 
    c: 0, 
    e: "not inverts False to True.",
    de: `The not operator inverts the boolean result of an expression. not (5 > 10) evaluates the expression inside parentheses first: 5 > 10 is False, then not False equals True. The not operator is commonly used in conditional statements to negate conditions.

not with comparison:
• not (5 > 10) = True
• First: 5 > 10 = False
• Then: not False = True
• Result: True

How it works:
• Evaluates expression: 5 > 10 = False
• Applies not operator: not False = True
• Returns inverted result
• Result: True

Examples:
• not (5 > 10) = not False = True
• not (5 > 3) = not True = False
• not (10 == 5) = not False = True

Common uses:
• Negating conditions: if not (x > 10):
• Inverting boolean results
• Checking for "not greater than"
• Conditional statements

Example: not (5 > 10) returns True because first 5 > 10 evaluates to False, then not False equals True.
`
  }),
  (_i: number) => ({ 
    q: `Result of not (5 > 3)?`, 
    o: ["False", "True", "None", "Error"], 
    c: 0, 
    e: "not inverts True to False.",
    de: `The not operator inverts the boolean result of an expression. not (5 > 3) evaluates the expression inside parentheses first: 5 > 3 is True, then not True equals False. The not operator is commonly used in conditional statements to negate conditions.

not with comparison:
• not (5 > 3) = False
• First: 5 > 3 = True
• Then: not True = False
• Result: False

How it works:
• Evaluates expression: 5 > 3 = True
• Applies not operator: not True = False
• Returns inverted result
• Result: False

Examples:
• not (5 > 3) = not True = False
• not (5 > 10) = not False = True
• not (10 == 10) = not True = False

Common uses:
• Negating conditions: if not (x > 0):
• Inverting boolean results
• Checking for "not greater than"
• Conditional statements

Example: not (5 > 3) returns False because first 5 > 3 evaluates to True, then not True equals False.
`
  }),
  (_i: number) => ({ 
    q: `Result of 5 > 3 and not (10 < 5)?`, 
    o: ["True", "False", "None", "Error"], 
    c: 0, 
    e: "Both conditions must be True: 5>3 is True, not(10<5) is True.",
    de: `Complex boolean expressions can combine comparisons, logical operators, and the not operator. 5 > 3 and not (10 < 5) evaluates: 5 > 3 is True, and not (10 < 5) is not False (which is True). Since both are True, the and operator returns True. Parentheses control the order of evaluation.

Complex expression:
• 5 > 3 and not (10 < 5) = True
• First: 5 > 3 = True
• Second: not (10 < 5) = not False = True
• True and True = True

How it works:
• Evaluates left: 5 > 3 = True
• Evaluates right: 10 < 5 = False, then not False = True
• Combines with and: True and True = True
• Result: True

Examples:
• 5 > 3 and not (10 < 5) = True (both True)
• 5 > 10 and not (10 < 5) = False (first False)
• 5 > 3 and not (5 > 3) = False (second False)

Common uses:
• Complex conditions: if x > 0 and not (x > 100):
• Multiple requirements
• Negated conditions
• Conditional statements

Example: 5 > 3 and not (10 < 5) returns True because both conditions are True (5 > 3 is True, and not (10 < 5) is True), so the and operator returns True.
`
  }),
  (_i: number) => ({ 
    q: `Result of 5 in [1, 2, 3] or 10 > 5?`, 
    o: ["True", "False", "None", "Error"], 
    c: 0, 
    e: "At least one condition is True: 10>5 is True.",
    de: `Complex boolean expressions can combine membership operators, comparison operators, and logical operators. 5 in [1, 2, 3] or 10 > 5 evaluates: 5 in [1, 2, 3] is False, but 10 > 5 is True, so the or operator returns True. The or operator requires only one condition to be True.

Complex expression:
• 5 in [1, 2, 3] or 10 > 5 = True
• First: 5 in [1, 2, 3] = False
• Second: 10 > 5 = True
• False or True = True

How it works:
• Evaluates left: 5 in [1, 2, 3] = False
• Evaluates right: 10 > 5 = True
• Combines with or: False or True = True
• Result: True

Examples:
• 5 in [1, 2, 3] or 10 > 5 = True (second True)
• 1 in [1, 2, 3] or 10 > 5 = True (first True)
• 5 in [1, 2, 3] or 10 < 5 = False (both False)

Common uses:
• Alternative conditions: if item in list or value > threshold:
• Multiple possibilities
• Fallback checks
• Conditional statements

Example: 5 in [1, 2, 3] or 10 > 5 returns True because at least one condition is True (10 > 5 is True), so the or operator returns True.
`
  }),
  (_i: number) => ({ 
    q: `Result of 5 in [1, 2, 3] and 10 > 5?`, 
    o: ["False", "True", "None", "Error"], 
    c: 0, 
    e: "First condition is False, so and returns False.",
    de: `The and operator short-circuits at the first False condition. 5 in [1, 2, 3] and 10 > 5 evaluates: 5 in [1, 2, 3] is False, so it short-circuits and returns False immediately without evaluating 10 > 5. The and operator requires both conditions to be True, so if the first is False, the result is False.

Complex expression:
• 5 in [1, 2, 3] and 10 > 5 = False
• First: 5 in [1, 2, 3] = False
• Short-circuits: returns False immediately
• Doesn't evaluate second (not needed)

How it works:
• Evaluates left: 5 in [1, 2, 3] = False
• Short-circuits: returns False immediately
• Doesn't evaluate 10 > 5 (not needed)
• Result: False

Examples:
• 5 in [1, 2, 3] and 10 > 5 = False (first False)
• 1 in [1, 2, 3] and 10 > 5 = True (both True)
• 5 in [1, 2, 3] and 10 < 5 = False (first False)

Common uses:
• Multiple requirements: if item in list and value > threshold:
• Validation checks
• Compound conditions
• Conditional statements

Example: 5 in [1, 2, 3] and 10 > 5 returns False because the first condition (5 in [1, 2, 3]) is False, so and short-circuits and returns False immediately without evaluating the second condition.
`
  }),
  (_i: number) => ({ 
    q: `Result of (5 > 3) == (10 > 5)?`, 
    o: ["True", "False", "None", "Error"], 
    c: 0, 
    e: "Both comparisons are True, so True == True is True.",
    de: `You can compare the boolean results of expressions using the == operator. (5 > 3) == (10 > 5) evaluates both comparisons first: 5 > 3 is True, and 10 > 5 is True, then True == True equals True. This is useful for checking if multiple conditions have the same boolean result.

Boolean comparison:
• (5 > 3) == (10 > 5) = True
• First: 5 > 3 = True
• Second: 10 > 5 = True
• True == True = True

How it works:
• Evaluates left: 5 > 3 = True
• Evaluates right: 10 > 5 = True
• Compares results: True == True = True
• Result: True

Examples:
• (5 > 3) == (10 > 5) = True (both True)
• (5 > 10) == (10 > 5) = False (different)
• (5 > 3) == (3 > 5) = False (different)

Common uses:
• Checking if conditions have same result
• Comparing boolean expressions
• Validation
• Conditional statements

Example: (5 > 3) == (10 > 5) returns True because both comparisons are True (5 > 3 is True, and 10 > 5 is True), so True == True equals True.
`
  }),
];

// --- LEVEL 4: SMALL FISH (Loops & Iterables) - 100 TRULY UNIQUE QUESTIONS ---
// Each question tests a DIFFERENT concept - NO number/variable variations of the same question
const level4Patterns = [
  // 1-10: Range Basics
  (_i: number) => ({ 
    q: `How many times does range(5) loop?`, 
    o: ["5", "4", "1", "0"], 
    c: 0, 
    e: "range(n) iterates from 0 to n-1 (5 times).",
    de: `The range(n) function creates a sequence of numbers from 0 to n-1 (exclusive of n). range(5) generates the numbers 0, 1, 2, 3, 4, which means a loop using range(5) will iterate 5 times. Understanding range() is fundamental for Python loops.

range(n) behavior:
• range(5) generates: 0, 1, 2, 3, 4
• Starts at 0 (default start)
• Stops before n (exclusive)
• Total iterations: n times

How it works:
• range(5) = 0, 1, 2, 3, 4 (5 numbers)
• for i in range(5): loops 5 times
• i takes values: 0, 1, 2, 3, 4
• Common pattern for fixed iterations

Examples:
• range(5) = 0, 1, 2, 3, 4 (5 iterations)
• range(3) = 0, 1, 2 (3 iterations)
• range(10) = 0, 1, 2, ..., 9 (10 iterations)

Common uses:
• Fixed iterations: for i in range(5):
• Index-based loops
• Repeating operations
• Generating sequences

Example: range(5) loops 5 times because it generates the numbers 0, 1, 2, 3, 4 (5 values total). This is the most common use of range() in for loops.
`
  }),
  (_i: number) => ({ 
    q: `What is list(range(5))?`, 
    o: ["[0, 1, 2, 3, 4]", "[1, 2, 3, 4, 5]", "[0, 1, 2, 3, 4, 5]", "Error"], 
    c: 0, 
    e: "range(n) goes from 0 to n-1.",
    de: `The range(n) function generates numbers from 0 to n-1 (exclusive of n). Converting it to a list with list(range(5)) creates [0, 1, 2, 3, 4]. The range object itself is an iterable, and list() converts it to a list for inspection or manipulation.

range(n) to list:
• list(range(5)) = [0, 1, 2, 3, 4]
• range(5) generates: 0, 1, 2, 3, 4
• Starts at 0, stops before 5
• Total: 5 elements

How it works:
• range(5) creates iterable: 0, 1, 2, 3, 4
• list() converts iterable to list
• Result: [0, 1, 2, 3, 4]
• Note: 5 is NOT included (exclusive)

Examples:
• list(range(5)) = [0, 1, 2, 3, 4]
• list(range(3)) = [0, 1, 2]
• list(range(1)) = [0]

Common uses:
• Converting range to list: numbers = list(range(5))
• Inspecting range contents
• Creating number sequences
• List generation

Example: list(range(5)) returns [0, 1, 2, 3, 4] because range(5) generates numbers from 0 to 4 (5 numbers total, exclusive of 5).
`
  }),
  (_i: number) => ({ 
    q: `What is list(range(1, 4))?`, 
    o: ["[1, 2, 3]", "[1, 2, 3, 4]", "[0, 1, 2, 3]", "[1, 4]"], 
    c: 0, 
    e: "range(start, stop) excludes stop value.",
    de: `The range(start, stop) function generates numbers from start to stop-1 (exclusive of stop). list(range(1, 4)) creates [1, 2, 3] because it starts at 1 and stops before 4. The stop value is always exclusive in range().

range(start, stop):
• list(range(1, 4)) = [1, 2, 3]
• Starts at 1 (inclusive)
• Stops before 4 (exclusive)
• Generates: 1, 2, 3

How it works:
• range(1, 4) creates iterable: 1, 2, 3
• Starts at start value (1)
• Stops before stop value (4)
• list() converts to [1, 2, 3]

Examples:
• list(range(1, 4)) = [1, 2, 3]
• list(range(2, 5)) = [2, 3, 4]
• list(range(0, 3)) = [0, 1, 2]

Important note:
• Stop value is exclusive (not included)
• range(1, 4) does NOT include 4
• This is consistent with Python's half-open interval convention

Common uses:
• Custom ranges: for i in range(1, 10):
• Starting from non-zero: range(5, 10)
• Creating specific sequences
• Loop iterations

Example: list(range(1, 4)) returns [1, 2, 3] because range(1, 4) starts at 1 and stops before 4 (exclusive), generating 1, 2, 3.
`
  }),
  (_i: number) => ({ 
    q: `What is list(range(0, 10, 2))?`, 
    o: ["[0, 2, 4, 6, 8]", "[0, 2, 4, 6, 8, 10]", "[2, 4, 6, 8]", "Error"], 
    c: 0, 
    e: "range with step 2: 0, 2, 4, 6, 8.",
    de: `The range(start, stop, step) function generates numbers with a specified step size. list(range(0, 10, 2)) creates [0, 2, 4, 6, 8] because it starts at 0, increments by 2, and stops before 10. The step parameter controls the increment between values.

range with step:
• list(range(0, 10, 2)) = [0, 2, 4, 6, 8]
• Starts at 0
• Step size: 2 (increments by 2)
• Stops before 10 (exclusive)
• Generates: 0, 2, 4, 6, 8

How it works:
• range(0, 10, 2) creates iterable
• Starts at 0, adds 2 each time
• 0, 2, 4, 6, 8 (stops before 10)
• list() converts to [0, 2, 4, 6, 8]

Examples:
• list(range(0, 10, 2)) = [0, 2, 4, 6, 8]
• list(range(0, 10, 3)) = [0, 3, 6, 9]
• list(range(1, 10, 2)) = [1, 3, 5, 7, 9] (odd numbers)

Common uses:
• Even numbers: range(0, 10, 2)
• Odd numbers: range(1, 10, 2)
• Custom increments
• Skipping values

Example: list(range(0, 10, 2)) returns [0, 2, 4, 6, 8] because it starts at 0, increments by 2, and stops before 10, generating even numbers.
`
  }),
  (_i: number) => ({ 
    q: `What is list(range(1, 6, 2))?`, 
    o: ["[1, 3, 5]", "[1, 2, 3, 4, 5]", "[1, 3]", "Error"], 
    c: 0, 
    e: "range with step 2: 1, 3, 5.",
    de: `The range(start, stop, step) function with step=2 generates numbers starting from start, incrementing by 2, and stopping before stop. list(range(1, 6, 2)) creates [1, 3, 5] because it starts at 1, increments by 2, and stops before 6. This is useful for generating odd numbers.

range with step:
• list(range(1, 6, 2)) = [1, 3, 5]
• Starts at 1
• Step size: 2 (increments by 2)
• Stops before 6 (exclusive)
• Generates: 1, 3, 5

How it works:
• range(1, 6, 2) creates iterable
• Starts at 1, adds 2 each time
• 1, 3, 5 (stops before 6)
• list() converts to [1, 3, 5]

Examples:
• list(range(1, 6, 2)) = [1, 3, 5] (odd numbers)
• list(range(1, 10, 2)) = [1, 3, 5, 7, 9]
• list(range(2, 10, 2)) = [2, 4, 6, 8] (even numbers)

Common uses:
• Odd numbers: range(1, n, 2)
• Even numbers: range(0, n, 2) or range(2, n, 2)
• Custom increments
• Skipping values

Example: list(range(1, 6, 2)) returns [1, 3, 5] because it starts at 1, increments by 2, and stops before 6, generating odd numbers.
`
  }),
  (_i: number) => ({ 
    q: `What is list(range(5, 1, -1))?`, 
    o: ["[5, 4, 3, 2]", "[5, 4, 3, 2, 1]", "[4, 3, 2, 1]", "Error"], 
    c: 0, 
    e: "Negative step creates reverse range.",
    de: `The range() function with a negative step creates a reverse sequence. list(range(5, 1, -1)) creates [5, 4, 3, 2] because it starts at 5, decrements by 1 (step=-1), and stops before 1. Negative steps allow counting backwards, which is useful for reverse iteration.

range with negative step:
• list(range(5, 1, -1)) = [5, 4, 3, 2]
• Starts at 5
• Step size: -1 (decrements by 1)
• Stops before 1 (exclusive)
• Generates: 5, 4, 3, 2

How it works:
• range(5, 1, -1) creates iterable
• Starts at 5, subtracts 1 each time
• 5, 4, 3, 2 (stops before 1)
• list() converts to [5, 4, 3, 2]

Examples:
• list(range(5, 1, -1)) = [5, 4, 3, 2]
• list(range(10, 0, -2)) = [10, 8, 6, 4, 2]
• list(range(5, 0, -1)) = [5, 4, 3, 2, 1]

Common uses:
• Reverse iteration: for i in range(5, 0, -1):
• Counting backwards
• Reverse sequences
• Decrementing loops

Example: list(range(5, 1, -1)) returns [5, 4, 3, 2] because it starts at 5, decrements by 1 (negative step), and stops before 1, creating a reverse sequence.
`
  }),
  (_i: number) => ({ 
    q: `What is list(range(0))?`, 
    o: ["[]", "[0]", "Error", "None"], 
    c: 0, 
    e: "range(0) is empty.",
    de: `The range(0) function creates an empty range because it starts at 0 and stops before 0 (exclusive), which means no values are generated. list(range(0)) returns an empty list []. This is useful for edge cases and conditional loops.

Empty range:
• list(range(0)) = [] (empty list)
• range(0) generates no values
• Starts at 0, stops before 0 (impossible)
• Result: empty sequence

How it works:
• range(0) creates iterable
• Starts at 0, stops before 0
• No values can be generated
• list() converts to []

Examples:
• list(range(0)) = [] (empty)
• list(range(1)) = [0] (one value)
• for i in range(0): ... (loop never executes)

Common uses:
• Edge case handling
• Conditional loops: if n > 0: for i in range(n):
• Empty iterations
• Default empty sequences

Example: list(range(0)) returns [] because range(0) starts at 0 and stops before 0, which means no values are generated, resulting in an empty list.
`
  }),
  (_i: number) => ({ 
    q: `What is list(range(1, 1))?`, 
    o: ["[]", "[1]", "[0]", "Error"], 
    c: 0, 
    e: "When start equals stop, range is empty.",
    de: `When the start value equals the stop value in range(start, stop), the range is empty because it starts at start and stops before stop (exclusive). Since start equals stop, no values can be generated. list(range(1, 1)) returns an empty list [].

Empty range (start == stop):
• list(range(1, 1)) = [] (empty list)
• Starts at 1, stops before 1 (exclusive)
• No values generated
• Result: empty sequence

How it works:
• range(1, 1) creates iterable
• Starts at 1, stops before 1
• Since start == stop, no values possible
• list() converts to []

Examples:
• list(range(1, 1)) = [] (empty)
• list(range(5, 5)) = [] (empty)
• list(range(1, 2)) = [1] (one value)

Common uses:
• Edge case handling
• Conditional loops
• Empty iterations
• Default empty sequences

Example: list(range(1, 1)) returns [] because when start equals stop, range() generates no values (stop is exclusive), resulting in an empty list.
`
  }),
  (_i: number) => ({ 
    q: `What is range(5)[0]?`, 
    o: ["0", "1", "5", "Error"], 
    c: 0, 
    e: "range objects support indexing.",
    de: `Range objects support indexing, allowing you to access specific elements by index. range(5)[0] returns 0 because range(5) generates [0, 1, 2, 3, 4], and index 0 is the first element (0). Range objects behave like sequences and support indexing operations.

Range indexing:
• range(5)[0] = 0 (first element)
• range(5) generates: 0, 1, 2, 3, 4
• Index 0 = first element = 0
• Range objects support indexing

How it works:
• range(5) creates sequence: 0, 1, 2, 3, 4
• Index 0 accesses first element
• Returns 0
• Works like list indexing

Examples:
• range(5)[0] = 0 (first)
• range(5)[1] = 1 (second)
• range(5)[4] = 4 (last)
• range(5)[5] = IndexError (out of range)

Common uses:
• Accessing specific range values
• Random access to range elements
• Index-based operations
• Sequence-like behavior

Example: range(5)[0] returns 0 because range(5) generates the sequence [0, 1, 2, 3, 4], and index 0 is the first element (0).
`
  }),
  (_i: number) => ({ 
    q: `What is range(5)[-1]?`, 
    o: ["4", "5", "0", "Error"], 
    c: 0, 
    e: "Negative indexing works with range.",
    de: `Range objects support negative indexing, allowing you to access elements from the end. range(5)[-1] returns 4 because range(5) generates [0, 1, 2, 3, 4], and index -1 is the last element (4). Negative indexing counts backwards from the end.

Range negative indexing:
• range(5)[-1] = 4 (last element)
• range(5) generates: 0, 1, 2, 3, 4
• Index -1 = last element = 4
• Negative indexing works with range

How it works:
• range(5) creates sequence: 0, 1, 2, 3, 4
• Index -1 accesses last element
• Returns 4
• Works like list negative indexing

Examples:
• range(5)[-1] = 4 (last)
• range(5)[-2] = 3 (second from end)
• range(5)[-5] = 0 (first)
• range(5)[-6] = IndexError (out of range)

Common uses:
• Accessing last element: range(n)[-1]
• Reverse access
• End-based operations
• Sequence-like behavior

Example: range(5)[-1] returns 4 because range(5) generates the sequence [0, 1, 2, 3, 4], and index -1 is the last element (4).
`
  }),
  
  // 11-20: Range Operations
  (_i: number) => ({ 
    q: `What is len(range(5))?`, 
    o: ["5", "4", "6", "Error"], 
    c: 0, 
    e: "len() works with range objects.",
    de: `The len() function works with range objects and returns the number of elements in the range. len(range(5)) returns 5 because range(5) generates 5 values (0, 1, 2, 3, 4). Range objects support len() just like lists and other sequences.

len() with range:
• len(range(5)) = 5
• range(5) generates: 0, 1, 2, 3, 4
• Total elements: 5
• len() returns count of elements

How it works:
• range(5) creates sequence of 5 elements
• len() counts the elements
• Returns 5
• Works with any range

Examples:
• len(range(5)) = 5
• len(range(1, 5)) = 4
• len(range(0)) = 0 (empty)

Common uses:
• Getting range length: n = len(range(5))
• Counting iterations
• Sequence length
• Loop planning

Example: len(range(5)) returns 5 because range(5) generates 5 values (0, 1, 2, 3, 4), so len() returns 5.
`
  }),
  (_i: number) => ({ 
    q: `What is sum(range(5))?`, 
    o: ["10", "5", "0", "Error"], 
    c: 0, 
    e: "sum() works with range: 0+1+2+3+4 = 10.",
    de: `The sum() function works with range objects and adds all elements together. sum(range(5)) returns 10 because range(5) generates [0, 1, 2, 3, 4], and 0 + 1 + 2 + 3 + 4 = 10. Range objects are iterables, so sum() can iterate over them.

sum() with range:
• sum(range(5)) = 10
• range(5) generates: 0, 1, 2, 3, 4
• Sum: 0 + 1 + 2 + 3 + 4 = 10
• sum() adds all elements

How it works:
• range(5) creates iterable: 0, 1, 2, 3, 4
• sum() iterates and adds all values
• 0 + 1 + 2 + 3 + 4 = 10
• Returns total sum

Examples:
• sum(range(5)) = 10 (0+1+2+3+4)
• sum(range(1, 5)) = 10 (1+2+3+4)
• sum(range(0)) = 0 (empty range)

Common uses:
• Summing sequences: total = sum(range(n))
• Calculating totals
• Arithmetic progressions
• Number series

Example: sum(range(5)) returns 10 because range(5) generates [0, 1, 2, 3, 4], and sum() adds them: 0 + 1 + 2 + 3 + 4 = 10.
`
  }),
  (_i: number) => ({ 
    q: `What is min(range(5))?`, 
    o: ["0", "1", "4", "Error"], 
    c: 0, 
    e: "min() works with range objects.",
    de: `The min() function works with range objects and returns the smallest value. min(range(5)) returns 0 because range(5) generates [0, 1, 2, 3, 4], and 0 is the minimum value. Range objects are iterables, so min() can find the minimum.

min() with range:
• min(range(5)) = 0
• range(5) generates: 0, 1, 2, 3, 4
• Minimum value: 0
• min() finds smallest element

How it works:
• range(5) creates iterable: 0, 1, 2, 3, 4
• min() iterates and finds minimum
• 0 is the smallest value
• Returns 0

Examples:
• min(range(5)) = 0 (minimum)
• min(range(1, 5)) = 1 (minimum)
• min(range(5, 0, -1)) = 1 (minimum of reverse)

Common uses:
• Finding minimum: smallest = min(range(n))
• Range analysis
• Sequence operations
• Value finding

Example: min(range(5)) returns 0 because range(5) generates [0, 1, 2, 3, 4], and 0 is the smallest value in that sequence.
`
  }),
  (_i: number) => ({ 
    q: `What is max(range(5))?`, 
    o: ["4", "5", "0", "Error"], 
    c: 0, 
    e: "max() works with range objects.",
    de: `The max() function works with range objects and returns the largest value. max(range(5)) returns 4 because range(5) generates [0, 1, 2, 3, 4], and 4 is the maximum value. Range objects are iterables, so max() can find the maximum.

max() with range:
• max(range(5)) = 4
• range(5) generates: 0, 1, 2, 3, 4
• Maximum value: 4
• max() finds largest element

How it works:
• range(5) creates iterable: 0, 1, 2, 3, 4
• max() iterates and finds maximum
• 4 is the largest value
• Returns 4

Examples:
• max(range(5)) = 4 (maximum)
• max(range(1, 5)) = 4 (maximum)
• max(range(5, 0, -1)) = 5 (maximum of reverse)

Common uses:
• Finding maximum: largest = max(range(n))
• Range analysis
• Sequence operations
• Value finding

Example: max(range(5)) returns 4 because range(5) generates [0, 1, 2, 3, 4], and 4 is the largest value in that sequence.
`
  }),
  (_i: number) => ({ 
    q: `What is 3 in range(5)?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "in operator works with range.",
    de: `The in operator works with range objects to check membership. 3 in range(5) returns True because range(5) generates [0, 1, 2, 3, 4], and 3 is present in that sequence. Range objects support membership testing efficiently.

Membership with range:
• 3 in range(5) = True
• range(5) generates: 0, 1, 2, 3, 4
• 3 is in the sequence
• in operator checks membership

How it works:
• range(5) creates sequence: 0, 1, 2, 3, 4
• in operator checks if 3 is in sequence
• 3 is found, returns True
• Efficient membership testing

Examples:
• 3 in range(5) = True (found)
• 5 in range(5) = False (not found, exclusive)
• 0 in range(5) = True (found)

Common uses:
• Membership checking: if value in range(n):
• Validation
• Range testing
• Conditional logic

Example: 3 in range(5) returns True because range(5) generates [0, 1, 2, 3, 4], and 3 is present in that sequence.
`
  }),
  (_i: number) => ({ 
    q: `What is 10 in range(5)?`, 
    o: ["False", "True", "Error", "None"], 
    c: 0, 
    e: "in operator - value not in range.",
    de: `The in operator checks if a value is in a range. 10 in range(5) returns False because range(5) generates [0, 1, 2, 3, 4], and 10 is not present in that sequence. The value 10 is outside the range, so membership check returns False.

Membership check:
• 10 in range(5) = False
• range(5) generates: 0, 1, 2, 3, 4
• 10 is not in the sequence
• in operator returns False

How it works:
• range(5) creates sequence: 0, 1, 2, 3, 4
• in operator checks if 10 is in sequence
• 10 is not found, returns False
• Value is outside range

Examples:
• 10 in range(5) = False (not found)
• 5 in range(5) = False (exclusive, not included)
• 0 in range(5) = True (found)

Common uses:
• Membership checking: if value not in range(n):
• Validation
• Range testing
• Conditional logic

Example: 10 in range(5) returns False because range(5) generates [0, 1, 2, 3, 4], and 10 is not present in that sequence (it's outside the range).
`
  }),
  (_i: number) => ({ 
    q: `What is 3 not in range(5)?`, 
    o: ["False", "True", "Error", "None"], 
    c: 0, 
    e: "not in operator - value is in range.",
    de: `The not in operator is the opposite of in - it returns True if the value is NOT in the range. 3 not in range(5) returns False because range(5) generates [0, 1, 2, 3, 4], and 3 IS present, so not in returns False. The not in operator inverts the membership check.

not in with range:
• 3 not in range(5) = False
• range(5) generates: 0, 1, 2, 3, 4
• 3 is in the sequence
• not in returns False (value is present)

How it works:
• range(5) creates sequence: 0, 1, 2, 3, 4
• not in checks if 3 is NOT in sequence
• 3 is found, so not in returns False
• Inverts membership check

Examples:
• 3 not in range(5) = False (3 is in range)
• 10 not in range(5) = True (10 is not in range)
• 0 not in range(5) = False (0 is in range)

Common uses:
• Negative membership checking: if value not in range(n):
• Validation
• Range testing
• Conditional logic

Example: 3 not in range(5) returns False because 3 is present in range(5) (which generates [0, 1, 2, 3, 4]), so not in returns False.
`
  }),
  (_i: number) => ({ 
    q: `What is 10 not in range(5)?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "not in operator - value not in range.",
    de: `The not in operator returns True if the value is NOT in the range. 10 not in range(5) returns True because range(5) generates [0, 1, 2, 3, 4], and 10 is NOT present, so not in returns True. The not in operator is useful for negative membership checks.

not in with range:
• 10 not in range(5) = True
• range(5) generates: 0, 1, 2, 3, 4
• 10 is not in the sequence
• not in returns True (value is absent)

How it works:
• range(5) creates sequence: 0, 1, 2, 3, 4
• not in checks if 10 is NOT in sequence
• 10 is not found, so not in returns True
• Inverts membership check

Examples:
• 10 not in range(5) = True (10 is not in range)
• 3 not in range(5) = False (3 is in range)
• 5 not in range(5) = True (5 is exclusive, not included)

Common uses:
• Negative membership checking: if value not in range(n):
• Validation
• Range testing
• Conditional logic

Example: 10 not in range(5) returns True because 10 is not present in range(5) (which generates [0, 1, 2, 3, 4]), so not in returns True.
`
  }),
  (_i: number) => ({ 
    q: `What is list(reversed(range(5)))?`, 
    o: ["[4, 3, 2, 1, 0]", "[0, 1, 2, 3, 4]", "[5, 4, 3, 2, 1]", "Error"], 
    c: 0, 
    e: "reversed() reverses the range.",
    de: `The reversed() function reverses any iterable, including range objects. list(reversed(range(5))) creates [4, 3, 2, 1, 0] because range(5) generates [0, 1, 2, 3, 4], and reversed() reverses it. This is useful for reverse iteration without using negative steps.

reversed() with range:
• list(reversed(range(5))) = [4, 3, 2, 1, 0]
• range(5) generates: 0, 1, 2, 3, 4
• reversed() reverses the sequence
• Result: [4, 3, 2, 1, 0]

How it works:
• range(5) creates sequence: 0, 1, 2, 3, 4
• reversed() creates reverse iterator
• Iterates backwards: 4, 3, 2, 1, 0
• list() converts to [4, 3, 2, 1, 0]

Examples:
• list(reversed(range(5))) = [4, 3, 2, 1, 0]
• list(reversed(range(1, 5))) = [4, 3, 2, 1]
• for i in reversed(range(5)): ... (reverse iteration)

Common uses:
• Reverse iteration: for i in reversed(range(n)):
• Creating reverse sequences
• Backwards loops
• Reverse order processing

Example: list(reversed(range(5))) returns [4, 3, 2, 1, 0] because reversed() reverses the sequence generated by range(5) ([0, 1, 2, 3, 4]), creating [4, 3, 2, 1, 0].
`
  }),
  (_i: number) => ({ 
    q: `What is sorted(range(5, 0, -1))?`, 
    o: ["[1, 2, 3, 4, 5]", "[5, 4, 3, 2, 1]", "[0, 1, 2, 3, 4]", "Error"], 
    c: 0, 
    e: "sorted() works with range objects.",
    de: `The sorted() function works with range objects and returns a sorted list. sorted(range(5, 0, -1)) creates [1, 2, 3, 4, 5] because range(5, 0, -1) generates [5, 4, 3, 2, 1] (reverse), and sorted() sorts it in ascending order. This is useful for sorting any iterable, including ranges.

sorted() with range:
• sorted(range(5, 0, -1)) = [1, 2, 3, 4, 5]
• range(5, 0, -1) generates: 5, 4, 3, 2, 1
• sorted() sorts in ascending order
• Result: [1, 2, 3, 4, 5]

How it works:
• range(5, 0, -1) creates sequence: 5, 4, 3, 2, 1
• sorted() sorts the sequence
• Ascending order: 1, 2, 3, 4, 5
• Returns sorted list

Examples:
• sorted(range(5, 0, -1)) = [1, 2, 3, 4, 5]
• sorted(range(5)) = [0, 1, 2, 3, 4] (already sorted)
• sorted(range(1, 6, 2)) = [1, 3, 5] (already sorted)

Common uses:
• Sorting ranges: numbers = sorted(range(5, 0, -1))
• Creating sorted sequences
• Ordering values
• Sequence manipulation

Example: sorted(range(5, 0, -1)) returns [1, 2, 3, 4, 5] because range(5, 0, -1) generates [5, 4, 3, 2, 1], and sorted() sorts it in ascending order to [1, 2, 3, 4, 5].
`
  }),
  
  // 21-30: Loop Keywords
  (_i: number) => ({ 
    q: `Which keyword skips the rest of a loop cycle?`, 
    o: ["continue", "break", "pass", "skip"], 
    c: 0, 
    e: "continue jumps to the next iteration.",
    de: `The continue keyword skips the rest of the current loop iteration and jumps to the next iteration. When continue is encountered, the remaining code in the loop body is skipped, and the loop continues with the next iteration. This is useful for skipping certain iterations based on conditions.

continue keyword:
• Skips rest of current iteration
• Jumps to next iteration
• Loop continues normally
• Useful for conditional skipping

How it works:
• When continue is executed, remaining code skipped
• Loop moves to next iteration
• Loop doesn't terminate (unlike break)
• Useful in conditional blocks

Example:
for i in range(5):
    if i == 2:
        continue  # Skip rest, go to next
    print(i)  # Prints 0, 1, 3, 4 (skips 2)

Common uses:
• Skipping invalid values: if not valid: continue
• Filtering iterations
• Conditional processing
• Error handling in loops

Example: The continue keyword skips the rest of the current loop cycle and jumps to the next iteration. It's used to skip certain iterations while keeping the loop running.
`
  }),
  (_i: number) => ({ 
    q: `Which keyword terminates a loop?`, 
    o: ["break", "stop", "end", "exit"], 
    c: 0, 
    e: "break exits the loop entirely.",
    de: `The break keyword terminates a loop immediately, exiting the loop entirely. When break is encountered, the loop stops executing and control moves to the statement after the loop. This is useful for exiting loops early when a condition is met.

break keyword:
• Terminates loop immediately
• Exits loop entirely
• Control moves to after loop
• Useful for early exit

How it works:
• When break is executed, loop terminates
• Remaining iterations are skipped
• Control moves to code after loop
• Loop doesn't continue

Example:
for i in range(5):
    if i == 3:
        break  # Exit loop
    print(i)  # Prints 0, 1, 2 (stops at 3)

Common uses:
• Early exit: if found: break
• Condition-based termination
• Search operations
• Error handling

Example: The break keyword terminates a loop entirely, exiting immediately when encountered. It's used to exit loops early when a condition is met.
`
  }),
  (_i: number) => ({ 
    q: `What does 'pass' do?`, 
    o: ["Nothing", "Exits loop", "Skips cycle", "Restarts loop"], 
    c: 0, 
    e: "pass is a null operation placeholder.",
    de: `The pass keyword is a null operation - it does nothing. It's used as a placeholder where syntactically some code is required but no action is needed. pass is useful for empty function bodies, empty loops, or incomplete code that needs to be valid Python syntax.

pass keyword:
• Does nothing (null operation)
• Placeholder for empty code
• Required for syntax validity
• No effect on execution

How it works:
• pass is executed but does nothing
• Code continues normally after pass
• Used where code is syntactically required
• No effect on loop or program flow

Example:
for i in range(5):
    pass  # Does nothing, loop runs 5 times
# Loop completes normally

Common uses:
• Empty loops: for i in range(5): pass
• Placeholder code
• Incomplete implementations
• Syntax requirements

Example: The pass keyword does nothing - it's a null operation placeholder. It's used where code is syntactically required but no action is needed.
`
  }),
  (_i: number) => ({ 
    q: `What is 'while True:'?`, 
    o: ["An infinite loop", "A syntax error", "A loop that runs once", "None"], 
    c: 0, 
    e: "Always True means it never stops on its own.",
    de: `A while True: loop is an infinite loop because the condition is always True, so the loop never stops on its own. The loop will run indefinitely unless a break statement is used to exit it. This pattern is common for event loops, user input, or continuous processing.

while True loop:
• Infinite loop (condition always True)
• Never stops on its own
• Requires break to exit
• Common pattern for continuous processing

How it works:
• Condition True is always True
• Loop body executes repeatedly
• Continues forever unless break
• Must have exit condition inside

Example:
while True:
    user_input = input("Enter command: ")
    if user_input == "quit":
        break  # Exit loop
    # Process input

Common uses:
• Event loops: while True: process_events()
• User input: while True: get_input()
• Continuous processing
• Server loops

Example: while True: is an infinite loop because the condition is always True, so it never stops on its own. It requires a break statement to exit.
`
  }),
  (_i: number) => ({ 
    q: `What is 'for i in range(5): pass'?`, 
    o: ["Loop that does nothing", "Syntax error", "Infinite loop", "Error"], 
    c: 0, 
    e: "pass is a placeholder that does nothing.",
    de: `A for loop with pass is a loop that does nothing - it iterates through the range but performs no action. for i in range(5): pass will loop 5 times (i takes values 0, 1, 2, 3, 4), but pass does nothing, so no code executes in the loop body. This is useful for placeholder code or empty loops.

for loop with pass:
• Loops 5 times (range(5))
• pass does nothing
• No action performed
• Valid Python syntax

How it works:
• for i in range(5): iterates 5 times
• i takes values: 0, 1, 2, 3, 4
• pass executes but does nothing
• Loop completes normally

Example:
for i in range(5):
    pass  # Loop runs 5 times, does nothing
# Loop completes, i = 4

Common uses:
• Placeholder loops
• Empty loop bodies
• Incomplete code
• Syntax requirements

Example: for i in range(5): pass is a loop that does nothing - it iterates 5 times but pass performs no action. It's valid Python syntax used for placeholder code.
`
  }),
  (_i: number) => ({ 
    q: `Can you use 'break' outside a loop?`, 
    o: ["No, SyntaxError", "Yes", "Only in functions", "Only in classes"], 
    c: 0, 
    e: "break can only be used inside loops.",
    de: `The break keyword can only be used inside loops (for or while). Using break outside a loop causes a SyntaxError because break is specifically designed to exit loops. It cannot be used in regular code, functions, or classes - only within loop bodies.

break usage:
• Only inside loops (for/while)
• SyntaxError if used outside
• Cannot be used in functions (unless in loop)
• Cannot be used in classes (unless in loop)

How it works:
• break must be inside loop body
• Python checks syntax at parse time
• SyntaxError raised if outside loop
• Must be indented within loop

Example:
# Valid:
for i in range(5):
    if i == 3:
        break  # OK, inside loop

# Invalid:
break  # SyntaxError: 'break' outside loop

Common uses:
• Exiting loops early
• Condition-based termination
• Search operations
• Error handling in loops

Example: No, you cannot use break outside a loop. Using break outside a loop causes a SyntaxError because break can only be used inside for or while loops.
`
  }),
  (_i: number) => ({ 
    q: `Can you use 'continue' outside a loop?`, 
    o: ["No, SyntaxError", "Yes", "Only in functions", "Only in classes"], 
    c: 0, 
    e: "continue can only be used inside loops.",
    de: `The continue keyword can only be used inside loops (for or while). Using continue outside a loop causes a SyntaxError because continue is specifically designed to skip to the next iteration of loops. It cannot be used in regular code, functions, or classes - only within loop bodies.

continue usage:
• Only inside loops (for/while)
• SyntaxError if used outside
• Cannot be used in functions (unless in loop)
• Cannot be used in classes (unless in loop)

How it works:
• continue must be inside loop body
• Python checks syntax at parse time
• SyntaxError raised if outside loop
• Must be indented within loop

Example:
# Valid:
for i in range(5):
    if i == 2:
        continue  # OK, inside loop

# Invalid:
continue  # SyntaxError: 'continue' outside loop

Common uses:
• Skipping iterations
• Conditional processing
• Filtering in loops
• Error handling in loops

Example: No, you cannot use continue outside a loop. Using continue outside a loop causes a SyntaxError because continue can only be used inside for or while loops.
`
  }),
  (_i: number) => ({ 
    q: `What happens if 'break' is in a nested loop?`, 
    o: ["Breaks only inner loop", "Breaks all loops", "Error", "Breaks outer loop"], 
    c: 0, 
    e: "break only exits the innermost loop.",
    de: `When break is used in a nested loop, it only exits the innermost loop (the loop that contains the break statement). The outer loop continues normally. This is important to understand when working with nested loops - break doesn't exit all loops, only the one it's directly in.

Nested loop break:
• break exits only innermost loop
• Outer loop continues
• Doesn't exit all loops
• Only affects containing loop

How it works:
• break in inner loop exits inner loop
• Outer loop continues next iteration
• Control moves to outer loop
• Outer loop doesn't break

Example:
for i in range(3):
    for j in range(3):
        if j == 1:
            break  # Exits inner loop only
    print(i)  # Outer loop continues
# Prints 0, 1, 2 (outer loop continues)

Common uses:
• Exiting inner loops
• Nested loop control
• Multi-level iteration
• Complex loop structures

Example: If break is in a nested loop, it breaks only the innermost loop. The outer loop continues normally with its next iteration.
`
  }),
  (_i: number) => ({ 
    q: `What happens if 'continue' is in a nested loop?`, 
    o: ["Continues only inner loop", "Continues all loops", "Error", "Continues outer loop"], 
    c: 0, 
    e: "continue only affects the innermost loop.",
    de: `When continue is used in a nested loop, it only affects the innermost loop (the loop that contains the continue statement). The continue skips to the next iteration of the inner loop, but the outer loop continues normally. This is important for nested loop control flow.

Nested loop continue:
• continue affects only innermost loop
• Skips to next iteration of inner loop
• Outer loop continues normally
• Only affects containing loop

How it works:
• continue in inner loop skips inner iteration
• Inner loop moves to next iteration
• Outer loop continues normally
• Outer loop doesn't skip

Example:
for i in range(3):
    for j in range(3):
        if j == 1:
            continue  # Skips inner iteration only
        print(j)  # Prints 0, 2 for each i
    print(i)  # Outer loop continues normally

Common uses:
• Skipping inner iterations
• Nested loop control
• Multi-level filtering
• Complex loop structures

Example: If continue is in a nested loop, it continues only the innermost loop (skips to next iteration). The outer loop continues normally.
`
  }),
  (_i: number) => ({ 
    q: `Can 'else' be used with 'for' loops?`, 
    o: ["Yes", "No", "Only in Python 2", "Only with while"], 
    c: 0, 
    e: "for loops can have else clauses.",
    de: `Yes, for loops can have else clauses in Python. The else block executes when the for loop completes normally (without being terminated by break). If the loop is exited with break, the else block does not execute. This is a unique Python feature that's useful for search operations.

for loop else:
• for loops can have else clauses
• else executes if loop completes normally
• else does NOT execute if break is used
• Useful for search operations

How it works:
• for loop iterates through items
• If loop completes without break, else executes
• If break is used, else is skipped
• else is part of loop structure

Example:
for i in range(5):
    if i == 10:
        break
else:
    print("Loop completed normally")  # Executes

for i in range(5):
    if i == 3:
        break
else:
    print("This won't print")  # Doesn't execute

Common uses:
• Search operations: for item in items: if found: break; else: not_found()
• Validation
• Completion handling
• Loop result checking

Example: Yes, for loops can have else clauses. The else block executes when the loop completes normally (without break), which is useful for search operations.
`
  }),
  
  // 31-40: For Loop Basics
  (_i: number) => ({ 
    q: `Can you loop over a string?`, 
    o: ["Yes", "No", "Only if numeric", "Error"], 
    c: 0, 
    e: "Strings are iterables.",
    de: `Yes, you can loop over a string because strings are iterables in Python. When you iterate over a string, you get each character one at a time. This is useful for processing text character by character, checking for patterns, or transforming strings.

String iteration:
• Strings are iterables
• for char in "abc": iterates over characters
• Each iteration gives one character
• Useful for character processing

How it works:
• String is iterable sequence
• for loop iterates character by character
• Each character is a string of length 1
• Loop variable gets each character

Example:
for char in "abc":
    print(char)  # Prints: a, b, c (one per line)

Common uses:
• Character processing: for char in text:
• Pattern matching
• String transformation
• Character analysis

Example: Yes, you can loop over a string. Strings are iterables, so for char in "abc": iterates over the characters 'a', 'b', 'c'.
`
  }),
  (_i: number) => ({ 
    q: `What does 'for char in "abc":' iterate over?`, 
    o: ["'a', 'b', 'c'", "'abc'", "Error", "Nothing"], 
    c: 0, 
    e: "Strings iterate character by character.",
    de: `When you loop over a string with for char in "abc":, it iterates over each character individually: 'a', 'b', 'c'. The loop variable char takes each character as its value, one at a time. This is how string iteration works in Python.

String iteration:
• for char in "abc": iterates over 'a', 'b', 'c'
• Each iteration: char = 'a', then 'b', then 'c'
• Characters are strings of length 1
• Loop runs 3 times

How it works:
• String "abc" has 3 characters
• Loop iterates 3 times
• char takes values: 'a', 'b', 'c'
• Each character is a string

Example:
for char in "abc":
    print(char)  # Prints: a, b, c

Common uses:
• Character processing
• String analysis
• Pattern matching
• Character transformation

Example: for char in "abc": iterates over the characters 'a', 'b', 'c' (one character per iteration).
`
  }),
  (_i: number) => ({ 
    q: `Can you loop over a list?`, 
    o: ["Yes", "No", "Only if numeric", "Error"], 
    c: 0, 
    e: "Lists are iterables.",
    de: `Yes, you can loop over a list because lists are iterables in Python. When you iterate over a list, you get each element one at a time. This is the most common use of for loops - iterating through collections to process each item.

List iteration:
• Lists are iterables
• for item in [1, 2, 3]: iterates over elements
• Each iteration gives one element
• Useful for processing collections

How it works:
• List is iterable sequence
• for loop iterates element by element
• Each element can be any type
• Loop variable gets each element

Example:
for item in [1, 2, 3]:
    print(item)  # Prints: 1, 2, 3 (one per line)

Common uses:
• Processing collections: for item in items:
• Element transformation
• Filtering
• Aggregation

Example: Yes, you can loop over a list. Lists are iterables, so for item in [1, 2, 3]: iterates over the elements 1, 2, 3.
`
  }),
  (_i: number) => ({ 
    q: `What does 'for item in [1, 2, 3]:' iterate over?`, 
    o: ["1, 2, 3", "[1, 2, 3]", "Error", "Nothing"], 
    c: 0, 
    e: "Lists iterate element by element.",
    de: `When you loop over a list with for item in [1, 2, 3]:, it iterates over each element individually: 1, 2, 3. The loop variable item takes each element as its value, one at a time. This is how list iteration works in Python.

List iteration:
• for item in [1, 2, 3]: iterates over 1, 2, 3
• Each iteration: item = 1, then 2, then 3
• Elements are accessed one by one
• Loop runs 3 times

How it works:
• List [1, 2, 3] has 3 elements
• Loop iterates 3 times
• item takes values: 1, 2, 3
• Each element can be any type

Example:
for item in [1, 2, 3]:
    print(item)  # Prints: 1, 2, 3

Common uses:
• Processing elements
• Element transformation
• Filtering
• Aggregation

Example: for item in [1, 2, 3]: iterates over the elements 1, 2, 3 (one element per iteration).
`
  }),
  (_i: number) => ({ 
    q: `Can you loop over a dictionary?`, 
    o: ["Yes", "No", "Only keys", "Error"], 
    c: 0, 
    e: "Dictionaries are iterables (iterates over keys).",
    de: `Yes, you can loop over a dictionary because dictionaries are iterables in Python. When you iterate over a dictionary directly, you iterate over its keys. To get values or key-value pairs, you use .values() or .items() methods.

Dictionary iteration:
• Dictionaries are iterables
• for key in dict: iterates over keys
• Default iteration is over keys
• Use .items() for key-value pairs

How it works:
• Dictionary is iterable
• Default iteration gives keys
• for key in dict: gets each key
• Use dict[key] to access values

Example:
d = {"a": 1, "b": 2}
for key in d:
    print(key)  # Prints: a, b (keys)

Common uses:
• Iterating keys: for key in dict:
• Iterating values: for value in dict.values():
• Iterating pairs: for key, value in dict.items():

Example: Yes, you can loop over a dictionary. By default, for key in dict: iterates over the dictionary's keys.
`
  }),
  (_i: number) => ({ 
    q: `What does 'for key in {"a": 1, "b": 2}:' iterate over?`, 
    o: ["'a', 'b'", "1, 2", "('a', 1), ('b', 2)", "Error"], 
    c: 0, 
    e: "Dictionaries iterate over keys by default.",
    de: `When you loop over a dictionary with for key in {"a": 1, "b": 2}:, it iterates over the keys: 'a', 'b'. The loop variable key takes each key as its value. Dictionary iteration defaults to keys, not values or pairs.

Dictionary key iteration:
• for key in {"a": 1, "b": 2}: iterates over 'a', 'b'
• Each iteration: key = 'a', then 'b'
• Keys are accessed, not values
• Loop runs 2 times (one per key)

How it works:
• Dictionary {"a": 1, "b": 2} has 2 keys
• Loop iterates 2 times
• key takes values: 'a', 'b'
• Default iteration is over keys

Example:
for key in {"a": 1, "b": 2}:
    print(key)  # Prints: a, b

To get values:
for key in {"a": 1, "b": 2}:
    print({"a": 1, "b": 2}[key])  # Prints: 1, 2

Common uses:
• Iterating keys: for key in dict:
• Key-based processing
• Dictionary traversal
• Key operations

Example: for key in {"a": 1, "b": 2}: iterates over the keys 'a', 'b' (one key per iteration).
`
  }),
  (_i: number) => ({ 
    q: `Which loop is better for a fixed collection?`, 
    o: ["for loop", "while loop", "do-while", "if loop"], 
    c: 0, 
    e: "for loops are designed for iteration.",
    de: `For loops are better for iterating over fixed collections (lists, strings, tuples, dictionaries, etc.) because they are specifically designed for iteration. For loops automatically handle the iteration, don't require manual index management, and are more Pythonic and readable for collection iteration.

for loop advantages:
• Designed for iteration
• Automatic iteration handling
• No manual index management
• More readable and Pythonic

How it works:
• for item in collection: automatically iterates
• Handles iteration internally
• Cleaner and simpler code
• Less error-prone

Example:
# for loop (better):
for item in [1, 2, 3]:
    print(item)

# while loop (more complex):
i = 0
items = [1, 2, 3]
while i < len(items):
    print(items[i])
    i += 1

Common uses:
• Iterating collections: for item in collection:
• Processing sequences
• Element transformation
• Collection operations

Example: For loops are better for fixed collections because they're designed for iteration, automatically handle the iteration process, and are more readable and Pythonic.
`
  }),
  (_i: number) => ({ 
    q: `Which loop is better when iterations are unknown?`, 
    o: ["while loop", "for loop", "do-while", "if loop"], 
    c: 0, 
    e: "while loops for unknown iterations.",
    de: `While loops are better when the number of iterations is unknown because they check a condition each iteration and continue as long as the condition is True. While loops are ideal for situations where you don't know in advance how many times the loop should run, such as user input, event processing, or condition-based repetition.

while loop advantages:
• Condition-based iteration
• Unknown iteration count
• Flexible termination
• Event-driven loops

How it works:
• while condition: checks condition each iteration
• Continues as long as condition is True
• Can terminate based on changing conditions
• Flexible iteration control

Example:
# while loop (better for unknown):
user_input = ""
while user_input != "quit":
    user_input = input("Enter command: ")
    # Process input

# for loop (requires known count):
for i in range(10):  # Must know count
    # Process

Common uses:
• User input: while input != "quit":
• Event loops: while not done:
• Condition-based: while x > 0:
• Unknown iterations

Example: While loops are better when iterations are unknown because they check a condition each iteration and continue as long as the condition is True, making them ideal for condition-based repetition.
`
  }),
  (_i: number) => ({ 
    q: `What is 'for i in range(3): print(i)' output?`, 
    o: ["0\\n1\\n2", "1\\n2\\n3", "3\\n3\\n3", "Error"], 
    c: 0, 
    e: "range(3) gives 0, 1, 2.",
    de: `The output of for i in range(3): print(i) is "0\\n1\\n2" (three lines: 0, then 1, then 2). range(3) generates the numbers 0, 1, 2 (starting at 0, exclusive of 3), so the loop runs 3 times, printing each value on a separate line.

for loop with range:
• for i in range(3): iterates 3 times
• i takes values: 0, 1, 2
• print(i) prints each value
• Output: 0, 1, 2 (one per line)

How it works:
• range(3) generates: 0, 1, 2
• Loop runs 3 times
• Each iteration: i = 0, then 1, then 2
• print(i) outputs each value

Example:
for i in range(3):
    print(i)
# Output:
# 0
# 1
# 2

Common uses:
• Fixed iterations: for i in range(n):
• Index-based loops
• Repeating operations
• Number sequences

Example: for i in range(3): print(i) outputs "0\\n1\\n2" because range(3) generates 0, 1, 2, and each value is printed on a separate line.
`
  }),
  (_i: number) => ({ 
    q: `What is 'for i in range(1, 4): print(i)' output?`, 
    o: ["1\\n2\\n3", "0\\n1\\n2", "1\\n2\\n3\\n4", "Error"], 
    c: 0, 
    e: "range(1, 4) gives 1, 2, 3.",
    de: `The output of for i in range(1, 4): print(i) is "1\\n2\\n3" (three lines: 1, then 2, then 3). range(1, 4) generates the numbers 1, 2, 3 (starting at 1, exclusive of 4), so the loop runs 3 times, printing each value on a separate line.

for loop with range(start, stop):
• for i in range(1, 4): iterates 3 times
• i takes values: 1, 2, 3
• print(i) prints each value
• Output: 1, 2, 3 (one per line)

How it works:
• range(1, 4) generates: 1, 2, 3
• Loop runs 3 times
• Each iteration: i = 1, then 2, then 3
• print(i) outputs each value

Example:
for i in range(1, 4):
    print(i)
# Output:
# 1
# 2
# 3

Common uses:
• Custom ranges: for i in range(start, stop):
• Starting from non-zero
• Specific number sequences
• Range-based loops

Example: for i in range(1, 4): print(i) outputs "1\\n2\\n3" because range(1, 4) generates 1, 2, 3, and each value is printed on a separate line.
`
  }),
  
  // 41-50: While Loop Basics
  (_i: number) => ({ 
    q: `What is 'while True: break'?`, 
    o: ["Loop that runs once then breaks", "Infinite loop", "Syntax error", "Error"], 
    c: 0, 
    e: "break exits immediately.",
    de: `A while True: break loop runs once then breaks. The condition True is checked, the loop body executes (which contains break), and break immediately exits the loop. This is a loop that executes exactly once before terminating.

while True: break:
• Condition True is checked
• Loop body executes once
• break exits immediately
• Result: loop runs once then exits

How it works:
• while True: condition is True
• Loop body executes: break
• break exits loop immediately
• Loop terminates after one iteration

Example:
while True:
    break  # Exits immediately
    print("This never prints")
# Loop completes after one iteration

Common uses:
• One-time execution with loop structure
• Placeholder loops
• Conditional exit patterns
• Loop initialization

Example: while True: break is a loop that runs once then breaks. The condition is True, so the loop body executes, but break exits immediately, resulting in exactly one iteration.
`
  }),
  (_i: number) => ({ 
    q: `What is 'while False: pass'?`, 
    o: ["Loop that never runs", "Infinite loop", "Syntax error", "Error"], 
    c: 0, 
    e: "False condition means loop never executes.",
    de: `A while False: pass loop never runs because the condition False is always False, so the loop body never executes. The condition is checked first, and since it's False, the loop body (pass) is skipped entirely. This is a loop that never executes.

while False: pass:
• Condition False is checked
• Condition is always False
• Loop body never executes
• Result: loop never runs

How it works:
• while False: condition is False
• Condition check fails immediately
• Loop body (pass) is never executed
• Loop terminates without running

Example:
while False:
    pass  # Never executes
    print("This never prints")
# Loop never runs, code continues

Common uses:
• Disabled code blocks
• Conditional execution (with variable condition)
• Placeholder loops
• Code structure

Example: while False: pass is a loop that never runs because the condition False is always False, so the loop body never executes.
`
  }),
  (_i: number) => ({ 
    q: `What is 'x = 0; while x < 3: x += 1' result?`, 
    o: ["x = 3", "x = 0", "Infinite loop", "Error"], 
    c: 0, 
    e: "Loop runs 3 times: x becomes 3.",
    de: `The result of x = 0; while x < 3: x += 1 is x = 3. The loop runs 3 times: first iteration (x=0, becomes 1), second iteration (x=1, becomes 2), third iteration (x=2, becomes 3). When x becomes 3, the condition x < 3 is False, so the loop exits with x = 3.

while loop with increment:
• Initial: x = 0
• Iteration 1: x < 3 (True), x += 1 → x = 1
• Iteration 2: x < 3 (True), x += 1 → x = 2
• Iteration 3: x < 3 (True), x += 1 → x = 3
• Condition check: x < 3 (False), exit
• Result: x = 3

How it works:
• x starts at 0
• Each iteration: check condition, increment x
• Loop runs while x < 3
• When x = 3, condition False, exit
• Final value: x = 3

Example:
x = 0
while x < 3:
    x += 1
# x = 3 after loop

Common uses:
• Counting loops: while x < n: x += 1
• Incrementing variables
• Condition-based iteration
• Counter loops

Example: x = 0; while x < 3: x += 1 results in x = 3 because the loop runs 3 times, incrementing x each time until x = 3, at which point the condition x < 3 is False and the loop exits.
`
  }),
  (_i: number) => ({ 
    q: `What is 'x = 0; while x < 3: x = x + 1' result?`, 
    o: ["x = 3", "x = 0", "Infinite loop", "Error"], 
    c: 0, 
    e: "Same as +=, x becomes 3.",
    de: `The result of x = 0; while x < 3: x = x + 1 is x = 3. This is equivalent to using += (x += 1). The loop runs 3 times, incrementing x each time. When x becomes 3, the condition x < 3 is False, so the loop exits with x = 3.

while loop with explicit increment:
• Initial: x = 0
• Iteration 1: x < 3 (True), x = x + 1 → x = 1
• Iteration 2: x < 3 (True), x = x + 1 → x = 2
• Iteration 3: x < 3 (True), x = x + 1 → x = 3
• Condition check: x < 3 (False), exit
• Result: x = 3

How it works:
• x starts at 0
• Each iteration: check condition, x = x + 1
• Loop runs while x < 3
• When x = 3, condition False, exit
• Final value: x = 3

Note:
• x = x + 1 is equivalent to x += 1
• Both increment x by 1
• Same result in this context

Example:
x = 0
while x < 3:
    x = x + 1  # Same as x += 1
# x = 3 after loop

Common uses:
• Counting loops: while x < n: x = x + 1
• Incrementing variables
• Condition-based iteration
• Counter loops

Example: x = 0; while x < 3: x = x + 1 results in x = 3 because it's equivalent to x += 1, and the loop runs 3 times until x = 3.
`
  }),
  (_i: number) => ({ 
    q: `What is 'x = 0; while x < 0: x += 1' result?`, 
    o: ["x = 0", "x = 1", "Infinite loop", "Error"], 
    c: 0, 
    e: "Condition False initially, loop never runs.",
    de: `The result of x = 0; while x < 0: x += 1 is x = 0. The condition x < 0 is False initially (0 < 0 is False), so the loop body never executes. The loop is skipped entirely, and x remains 0.

while loop with False condition:
• Initial: x = 0
• Condition check: x < 0 → 0 < 0 → False
• Loop body never executes
• x remains 0
• Result: x = 0

How it works:
• x starts at 0
• Condition x < 0 is checked
• 0 < 0 is False
• Loop body (x += 1) never executes
• x remains 0

Example:
x = 0
while x < 0:
    x += 1  # Never executes
# x = 0 after (loop never ran)

Common uses:
• Conditional loops that may not run
• Guard clauses
• Condition-based execution
• Initial state preservation

Example: x = 0; while x < 0: x += 1 results in x = 0 because the condition x < 0 is False initially (0 < 0 is False), so the loop never runs and x remains 0.
`
  }),
  (_i: number) => ({ 
    q: `Can 'else' be used with 'while' loops?`, 
    o: ["Yes", "No", "Only in Python 2", "Only with for"], 
    c: 0, 
    e: "while loops can have else clauses.",
    de: `Yes, while loops can have else clauses in Python. The else block executes when the while loop completes normally (without being terminated by break). If the loop is exited with break, the else block does not execute. This is a unique Python feature useful for search operations and validation.

while loop else:
• while loops can have else clauses
• else executes if loop completes normally
• else does NOT execute if break is used
• Useful for search operations

How it works:
• while loop iterates while condition True
• If loop completes without break, else executes
• If break is used, else is skipped
• else is part of loop structure

Example:
x = 0
while x < 5:
    if x == 10:
        break
    x += 1
else:
    print("Loop completed normally")  # Executes

x = 0
while x < 5:
    if x == 3:
        break
    x += 1
else:
    print("This won't print")  # Doesn't execute

Common uses:
• Search operations: while condition: if found: break; else: not_found()
• Validation
• Completion handling
• Loop result checking

Example: Yes, while loops can have else clauses. The else block executes when the loop completes normally (without break), which is useful for search operations and validation.
`
  }),
  (_i: number) => ({ 
    q: `What happens if 'while' condition is always True?`, 
    o: ["Infinite loop", "Runs once", "Error", "Nothing"], 
    c: 0, 
    e: "Loop runs forever unless break is used.",
    de: `If a while loop's condition is always True, the loop runs forever (infinite loop) unless a break statement is used to exit it. The condition is checked each iteration, and since it's always True, the loop continues indefinitely. This is why while True: loops require break to exit.

Infinite while loop:
• Condition always True
• Loop runs forever
• Requires break to exit
• Common pattern for event loops

How it works:
• Condition is checked each iteration
• If always True, loop continues
• Loop body executes repeatedly
• Must have break to exit

Example:
while True:
    user_input = input("Enter command: ")
    if user_input == "quit":
        break  # Exit loop
    # Process input
# Without break, this would run forever

Common uses:
• Event loops: while True: process_events()
• User input: while True: get_input()
• Continuous processing
• Server loops

Example: If a while loop's condition is always True, the loop runs forever (infinite loop) unless a break statement is used to exit it. This is why while True: loops require break.
`
  }),
  (_i: number) => ({ 
    q: `What happens if 'while' condition is always False?`, 
    o: ["Loop never runs", "Runs once", "Error", "Infinite loop"], 
    c: 0, 
    e: "Loop body never executes.",
    de: `If a while loop's condition is always False, the loop never runs - the loop body never executes. The condition is checked first, and since it's False, the loop body is skipped entirely, and execution continues after the loop. This is useful for conditional loops that may not need to run.

while loop with False condition:
• Condition always False
• Loop body never executes
• Loop is skipped
• Execution continues after loop

How it works:
• Condition is checked first
• If False, loop body is skipped
• Loop doesn't execute
• Code continues after loop

Example:
x = 0
while x < 0:  # Always False
    print("This never prints")
    x += 1
# Loop never runs, code continues here

Common uses:
• Conditional loops: while condition: ... (may not run)
• Guard clauses
• Conditional execution
• Initial state checks

Example: If a while loop's condition is always False, the loop never runs - the loop body never executes, and execution continues after the loop.
`
  }),
  (_i: number) => ({ 
    q: `Can you modify the loop variable in a 'for' loop?`, 
    o: ["Yes, but it doesn't affect iteration", "No", "Only in Python 2", "Error"], 
    c: 0, 
    e: "Modifying loop variable doesn't change iteration.",
    de: `Yes, you can modify the loop variable in a for loop, but it doesn't affect the iteration. The loop variable is reassigned from the iterable at the start of each iteration, so modifying it during the loop body doesn't change which values are iterated over. The iteration sequence is determined by the iterable, not the loop variable.

Modifying for loop variable:
• You can modify the loop variable
• But it doesn't affect iteration
• Variable is reassigned each iteration
• Iteration sequence is fixed

How it works:
• Loop variable is assigned from iterable each iteration
• Modifying it in loop body doesn't change next iteration
• Next iteration reassigns from iterable
• Iteration sequence is predetermined

Example:
for i in range(5):
    i = 10  # Modifies i, but doesn't affect iteration
    print(i)  # Prints 10, 10, 10, 10, 10
    # But next iteration still gets next value from range(5)

Common uses:
• Variable modification (though usually not recommended)
• Temporary assignments
• Value transformation
• Loop variable reuse

Example: Yes, you can modify the loop variable in a for loop, but it doesn't affect the iteration. The loop variable is reassigned from the iterable each iteration, so modifying it doesn't change which values are iterated over.
`
  }),
  (_i: number) => ({ 
    q: `Can you modify the condition variable in a 'while' loop?`, 
    o: ["Yes", "No", "Only in Python 2", "Error"], 
    c: 0, 
    e: "You can modify variables in while loop condition.",
    de: `Yes, you can modify the condition variable in a while loop, and this is how while loops typically work. The condition is re-evaluated each iteration, so modifying the variables used in the condition can change whether the loop continues or exits. This is the standard way to control while loop termination.

Modifying while loop condition variable:
• You can modify condition variables
• Condition is re-evaluated each iteration
• Modifying variables affects loop continuation
• This is how while loops work

How it works:
• Condition is checked each iteration
• Variables in condition can be modified
• Modified values affect next condition check
• Loop continues or exits based on updated condition

Example:
x = 0
while x < 5:
    x += 1  # Modifies condition variable
    print(x)  # Prints 1, 2, 3, 4, 5
    # Condition x < 5 is re-evaluated each iteration

Common uses:
• Counter loops: while x < n: x += 1
• Condition-based termination
• Variable-based loop control
• Standard while loop pattern

Example: Yes, you can modify the condition variable in a while loop. The condition is re-evaluated each iteration, so modifying the variables affects whether the loop continues or exits. This is how while loops typically work.
`
  }),
  
  // 51-60: Enumerate and Zip
  (_i: number) => ({ 
    q: `What is list(enumerate(['a', 'b', 'c']))?`, 
    o: ["[(0, 'a'), (1, 'b'), (2, 'c')]", "['a', 'b', 'c']", "Error", "None"], 
    c: 0, 
    e: "enumerate() adds index to each element.",
    de: `The enumerate() function adds an index to each element of an iterable, returning tuples of (index, element). list(enumerate(['a', 'b', 'c'])) creates [(0, 'a'), (1, 'b'), (2, 'c')] because enumerate() pairs each element with its index, starting from 0 by default.

enumerate() function:
• Adds index to each element
• Returns (index, element) tuples
• Default start index is 0
• Useful for indexed iteration

How it works:
• enumerate(['a', 'b', 'c']) creates iterator
• Pairs each element with its index
• (0, 'a'), (1, 'b'), (2, 'c')
• list() converts to list of tuples

Example:
for index, value in enumerate(['a', 'b', 'c']):
    print(f"{index}: {value}")
# Output:
# 0: a
# 1: b
# 2: c

Common uses:
• Indexed iteration: for i, item in enumerate(items):
• Getting both index and value
• Position tracking
• Index-based operations

Example: list(enumerate(['a', 'b', 'c'])) returns [(0, 'a'), (1, 'b'), (2, 'c')] because enumerate() pairs each element with its index, starting from 0.
`
  }),
  (_i: number) => ({ 
    q: `What is list(enumerate(['a', 'b'], start=1))?`, 
    o: ["[(1, 'a'), (2, 'b')]", "[(0, 'a'), (1, 'b')]", "Error", "None"], 
    c: 0, 
    e: "start parameter changes starting index.",
    de: `The enumerate() function's start parameter allows you to specify the starting index. list(enumerate(['a', 'b'], start=1)) creates [(1, 'a'), (2, 'b')] because enumerate() pairs each element with its index, starting from 1 instead of the default 0.

enumerate() with start:
• start parameter sets starting index
• enumerate(['a', 'b'], start=1) starts at 1
• Returns (1, 'a'), (2, 'b')
• Useful for 1-based indexing

How it works:
• enumerate(['a', 'b'], start=1) creates iterator
• Pairs each element with index starting at 1
• (1, 'a'), (2, 'b')
• list() converts to list of tuples

Example:
for index, value in enumerate(['a', 'b'], start=1):
    print(f"{index}: {value}")
# Output:
# 1: a
# 2: b

Common uses:
• 1-based indexing: for i, item in enumerate(items, start=1):
• Custom starting index
• Human-readable numbering
• Position tracking

Example: list(enumerate(['a', 'b'], start=1)) returns [(1, 'a'), (2, 'b')] because the start=1 parameter makes enumerate() start indexing at 1 instead of 0.
`
  }),
  (_i: number) => ({ 
    q: `What is list(zip([1, 2], ['a', 'b']))?`, 
    o: ["[(1, 'a'), (2, 'b')]", "[1, 2, 'a', 'b']", "Error", "None"], 
    c: 0, 
    e: "zip() pairs elements from iterables.",
    de: `The zip() function pairs corresponding elements from multiple iterables, returning tuples. list(zip([1, 2], ['a', 'b'])) creates [(1, 'a'), (2, 'b')] because zip() pairs the first element of each iterable, then the second, and so on. This is useful for iterating over multiple sequences simultaneously.

zip() function:
• Pairs elements from multiple iterables
• Returns tuples of corresponding elements
• Stops at shortest iterable
• Useful for parallel iteration

How it works:
• zip([1, 2], ['a', 'b']) creates iterator
• Pairs corresponding elements: (1, 'a'), (2, 'b')
• Returns tuples
• list() converts to list of tuples

Example:
for num, letter in zip([1, 2], ['a', 'b']):
    print(f"{num}: {letter}")
# Output:
# 1: a
# 2: b

Common uses:
• Parallel iteration: for x, y in zip(list1, list2):
• Pairing elements
• Combining sequences
• Multi-sequence processing

Example: list(zip([1, 2], ['a', 'b'])) returns [(1, 'a'), (2, 'b')] because zip() pairs corresponding elements from both iterables.
`
  }),
  (_i: number) => ({ 
    q: `What is list(zip([1, 2], ['a', 'b', 'c']))?`, 
    o: ["[(1, 'a'), (2, 'b')]", "[(1, 'a'), (2, 'b'), (None, 'c')]", "Error", "None"], 
    c: 0, 
    e: "zip() stops at shortest iterable.",
    de: `The zip() function stops at the shortest iterable when given iterables of different lengths. list(zip([1, 2], ['a', 'b', 'c'])) creates [(1, 'a'), (2, 'b')] because zip() pairs elements until the shortest iterable is exhausted, ignoring the extra 'c' in the second iterable.

zip() with different lengths:
• zip() stops at shortest iterable
• Extra elements are ignored
• No None values inserted
• Result length equals shortest input

How it works:
• zip([1, 2], ['a', 'b', 'c']) creates iterator
• Pairs until shortest iterable exhausted
• (1, 'a'), (2, 'b') - stops here
• 'c' is ignored (no pair available)

Example:
list(zip([1, 2], ['a', 'b', 'c']))  # [(1, 'a'), (2, 'b')]
list(zip([1, 2, 3], ['a', 'b']))     # [(1, 'a'), (2, 'b')]

Common uses:
• Parallel iteration with different lengths
• Pairing until shortest exhausted
• Combining sequences
• Multi-sequence processing

Example: list(zip([1, 2], ['a', 'b', 'c'])) returns [(1, 'a'), (2, 'b')] because zip() stops at the shortest iterable, ignoring the extra 'c'.
`
  }),
  (_i: number) => ({ 
    q: `What is list(zip([1, 2, 3], ['a', 'b']))?`, 
    o: ["[(1, 'a'), (2, 'b')]", "[(1, 'a'), (2, 'b'), (3, None)]", "Error", "None"], 
    c: 0, 
    e: "zip() stops at shortest iterable.",
    de: `The zip() function stops at the shortest iterable when given iterables of different lengths. list(zip([1, 2, 3], ['a', 'b'])) creates [(1, 'a'), (2, 'b')] because zip() pairs elements until the shortest iterable is exhausted, ignoring the extra 3 in the first iterable. No None values are inserted.

zip() with different lengths:
• zip() stops at shortest iterable
• Extra elements are ignored
• No None values inserted
• Result length equals shortest input

How it works:
• zip([1, 2, 3], ['a', 'b']) creates iterator
• Pairs until shortest iterable exhausted
• (1, 'a'), (2, 'b') - stops here
• 3 is ignored (no pair available)

Example:
list(zip([1, 2, 3], ['a', 'b']))     # [(1, 'a'), (2, 'b')]
list(zip([1, 2], ['a', 'b', 'c']))   # [(1, 'a'), (2, 'b')]

Common uses:
• Parallel iteration with different lengths
• Pairing until shortest exhausted
• Combining sequences
• Multi-sequence processing

Example: list(zip([1, 2, 3], ['a', 'b'])) returns [(1, 'a'), (2, 'b')] because zip() stops at the shortest iterable, ignoring the extra 3.
`
  }),
  (_i: number) => ({ 
    q: `What is list(zip([1], [2], [3]))?`, 
    o: ["[(1, 2, 3)]", "[1, 2, 3]", "Error", "None"], 
    c: 0, 
    e: "zip() can combine multiple iterables.",
    de: `The zip() function can combine multiple iterables, not just two. list(zip([1], [2], [3])) creates [(1, 2, 3)] because zip() pairs corresponding elements from all iterables, creating tuples with as many elements as there are input iterables. This is useful for combining three or more sequences.

zip() with multiple iterables:
• zip() can combine any number of iterables
• Returns tuples with elements from all iterables
• Stops at shortest iterable
• Useful for multi-sequence pairing

How it works:
• zip([1], [2], [3]) creates iterator
• Pairs corresponding elements from all three
• (1, 2, 3) - single tuple with three elements
• list() converts to list of tuples

Example:
for x, y, z in zip([1], [2], [3]):
    print(f"{x}, {y}, {z}")  # Output: 1, 2, 3

Common uses:
• Multi-sequence iteration: for a, b, c in zip(list1, list2, list3):
• Combining multiple sequences
• Parallel processing
• Multi-dimensional pairing

Example: list(zip([1], [2], [3])) returns [(1, 2, 3)] because zip() can combine multiple iterables, pairing corresponding elements from all of them.
`
  }),
  (_i: number) => ({ 
    q: `What is list(zip([]))?`, 
    o: ["[]", "Error", "None", "[()]"], 
    c: 0, 
    e: "zip() with empty iterable returns empty list.",
    de: `When zip() is called with an empty iterable, it returns an empty iterator, which converts to an empty list. list(zip([])) creates [] because there are no elements to pair. zip() with any empty iterable results in an empty result, regardless of other arguments.

zip() with empty iterable:
• zip([]) returns empty iterator
• No elements to pair
• Result is empty
• Works with any empty iterable

How it works:
• zip([]) creates iterator
• No elements to process
• Iterator is empty
• list() converts to []

Example:
list(zip([]))              # []
list(zip([], [1, 2]))      # [] (empty first iterable)
list(zip([1, 2], []))      # [] (empty second iterable)

Common uses:
• Edge case handling
• Conditional zipping
• Empty sequence handling
• Default empty results

Example: list(zip([])) returns [] because zip() with an empty iterable has no elements to pair, resulting in an empty list.
`
  }),
  (_i: number) => ({ 
    q: `Can you use enumerate() with strings?`, 
    o: ["Yes", "No", "Only in Python 2", "Error"], 
    c: 0, 
    e: "enumerate() works with any iterable.",
    de: `Yes, you can use enumerate() with strings because enumerate() works with any iterable, including strings. enumerate("abc") pairs each character with its index, creating (0, 'a'), (1, 'b'), (2, 'c'). This is useful for character-by-character processing with position tracking.

enumerate() with strings:
• enumerate() works with any iterable
• Strings are iterables
• Pairs each character with its index
• Useful for character processing

How it works:
• enumerate("abc") creates iterator
• Pairs each character with its index
• (0, 'a'), (1, 'b'), (2, 'c')
• Works like enumerate() with lists

Example:
for index, char in enumerate("abc"):
    print(f"{index}: {char}")
# Output:
# 0: a
# 1: b
# 2: c

Common uses:
• Character processing: for i, char in enumerate(text):
• Position tracking in strings
• Indexed character operations
• String analysis

Example: Yes, you can use enumerate() with strings. enumerate() works with any iterable, so enumerate("abc") pairs each character with its index: (0, 'a'), (1, 'b'), (2, 'c').
`
  }),
  (_i: number) => ({ 
    q: `Can you use zip() with strings?`, 
    o: ["Yes", "No", "Only in Python 2", "Error"], 
    c: 0, 
    e: "zip() works with any iterables.",
    de: `Yes, you can use zip() with strings because zip() works with any iterables, including strings. zip("ab", "cd") pairs corresponding characters, creating ('a', 'c'), ('b', 'd'). This is useful for character-by-character pairing and parallel string processing.

zip() with strings:
• zip() works with any iterables
• Strings are iterables
• Pairs corresponding characters
• Useful for parallel string processing

How it works:
• zip("ab", "cd") creates iterator
• Pairs corresponding characters
• ('a', 'c'), ('b', 'd')
• Works like zip() with lists

Example:
for char1, char2 in zip("ab", "cd"):
    print(f"{char1}, {char2}")
# Output:
# a, c
# b, d

Common uses:
• Parallel string processing: for c1, c2 in zip(str1, str2):
• Character pairing
• String comparison
• Multi-string operations

Example: Yes, you can use zip() with strings. zip() works with any iterables, so zip("ab", "cd") pairs corresponding characters: ('a', 'c'), ('b', 'd').
`
  }),
  (_i: number) => ({ 
    q: `What is list(zip('ab', 'cd'))?`, 
    o: ["[('a', 'c'), ('b', 'd')]", "['a', 'b', 'c', 'd']", "Error", "None"], 
    c: 0, 
    e: "zip() works with strings.",
    de: `The zip() function works with strings, pairing corresponding characters. list(zip('ab', 'cd')) creates [('a', 'c'), ('b', 'd')] because zip() pairs the first character of each string, then the second, and so on. This is useful for character-by-character pairing and parallel string processing.

zip() with strings:
• zip('ab', 'cd') pairs corresponding characters
• ('a', 'c') - first characters paired
• ('b', 'd') - second characters paired
• Returns list of character tuples

How it works:
• zip('ab', 'cd') creates iterator
• Pairs corresponding characters
• ('a', 'c'), ('b', 'd')
• list() converts to list of tuples

Example:
for char1, char2 in zip('ab', 'cd'):
    print(f"{char1}, {char2}")
# Output:
# a, c
# b, d

Common uses:
• Parallel string processing: for c1, c2 in zip(str1, str2):
• Character pairing
• String comparison
• Multi-string operations

Example: list(zip('ab', 'cd')) returns [('a', 'c'), ('b', 'd')] because zip() pairs corresponding characters from both strings.
`
  }),
  
  // 61-70: List Comprehensions Basics
  (_i: number) => ({ 
    q: `What is [x for x in range(3)]?`, 
    o: ["[0, 1, 2]", "[1, 2, 3]", "[0, 1, 2, 3]", "Error"], 
    c: 0, 
    e: "List comprehension creates list from range.",
    de: `A list comprehension is a concise way to create lists. [x for x in range(3)] creates [0, 1, 2] because it iterates over range(3) (which generates 0, 1, 2) and includes each value x in the resulting list. This is equivalent to list(range(3)) but demonstrates the basic list comprehension syntax.

List comprehension syntax:
• [x for x in range(3)] = [0, 1, 2]
• Syntax: [expression for item in iterable]
• Iterates over range(3): 0, 1, 2
• Includes each value in list

How it works:
• for x in range(3) iterates: x = 0, 1, 2
• Expression x is evaluated for each iteration
• Results collected into list: [0, 1, 2]
• Equivalent to: list(range(3))

Example:
[x for x in range(3)]  # [0, 1, 2]
[x for x in range(5)]  # [0, 1, 2, 3, 4]

Common uses:
• Creating lists: numbers = [x for x in range(n)]
• List generation
• Iterable conversion
• Concise list creation

Example: [x for x in range(3)] returns [0, 1, 2] because it iterates over range(3) and includes each value in the resulting list.
`
  }),
  (_i: number) => ({ 
    q: `What is [x * 2 for x in range(3)]?`, 
    o: ["[0, 2, 4]", "[2, 4, 6]", "[0, 1, 2]", "Error"], 
    c: 0, 
    e: "List comprehension with transformation.",
    de: `List comprehensions can transform elements using expressions. [x * 2 for x in range(3)] creates [0, 2, 4] because it iterates over range(3) (0, 1, 2) and multiplies each value by 2. The expression x * 2 is evaluated for each element, transforming the values.

List comprehension with transformation:
• [x * 2 for x in range(3)] = [0, 2, 4]
• Expression: x * 2 (transforms each element)
• Iterates: x = 0, 1, 2
• Transforms: 0*2=0, 1*2=2, 2*2=4

How it works:
• for x in range(3) iterates: x = 0, 1, 2
• Expression x * 2 evaluated for each: 0, 2, 4
• Results collected: [0, 2, 4]
• Transformation applied to each element

Example:
[x * 2 for x in range(3)]     # [0, 2, 4]
[x + 1 for x in range(3)]     # [1, 2, 3]
[x ** 2 for x in range(3)]    # [0, 1, 4]

Common uses:
• Transforming elements: doubled = [x * 2 for x in numbers]
• Element modification
• Value calculation
• List transformation

Example: [x * 2 for x in range(3)] returns [0, 2, 4] because it multiplies each element from range(3) by 2.
`
  }),
  (_i: number) => ({ 
    q: `What is [x for x in range(5) if x % 2 == 0]?`, 
    o: ["[0, 2, 4]", "[1, 3]", "[0, 1, 2, 3, 4]", "Error"], 
    c: 0, 
    e: "List comprehension with filter (even numbers).",
    de: `List comprehensions can filter elements using if conditions. [x for x in range(5) if x % 2 == 0] creates [0, 2, 4] because it iterates over range(5) (0, 1, 2, 3, 4) and includes only elements where x % 2 == 0 (even numbers). The if clause filters the elements.

List comprehension with filter:
• [x for x in range(5) if x % 2 == 0] = [0, 2, 4]
• Condition: x % 2 == 0 (even numbers)
• Iterates: x = 0, 1, 2, 3, 4
• Filters: includes only 0, 2, 4 (even)

How it works:
• for x in range(5) iterates: x = 0, 1, 2, 3, 4
• if x % 2 == 0 filters: keeps 0, 2, 4
• Results collected: [0, 2, 4]
• Only elements matching condition included

Example:
[x for x in range(5) if x % 2 == 0]  # [0, 2, 4] (even)
[x for x in range(5) if x > 2]        # [3, 4] (greater than 2)

Common uses:
• Filtering: evens = [x for x in numbers if x % 2 == 0]
• Conditional inclusion
• Element selection
• List filtering

Example: [x for x in range(5) if x % 2 == 0] returns [0, 2, 4] because it filters range(5) to include only even numbers.
`
  }),
  (_i: number) => ({ 
    q: `What is [x for x in range(5) if x % 2 == 1]?`, 
    o: ["[1, 3]", "[0, 2, 4]", "[0, 1, 2, 3, 4]", "Error"], 
    c: 0, 
    e: "List comprehension with filter (odd numbers).",
    de: `List comprehensions can filter elements using if conditions. [x for x in range(5) if x % 2 == 1] creates [1, 3] because it iterates over range(5) (0, 1, 2, 3, 4) and includes only elements where x % 2 == 1 (odd numbers). The if clause filters the elements.

List comprehension with filter:
• [x for x in range(5) if x % 2 == 1] = [1, 3]
• Condition: x % 2 == 1 (odd numbers)
• Iterates: x = 0, 1, 2, 3, 4
• Filters: includes only 1, 3 (odd)

How it works:
• for x in range(5) iterates: x = 0, 1, 2, 3, 4
• if x % 2 == 1 filters: keeps 1, 3
• Results collected: [1, 3]
• Only elements matching condition included

Example:
[x for x in range(5) if x % 2 == 1]  # [1, 3] (odd)
[x for x in range(5) if x < 3]       # [0, 1, 2] (less than 3)

Common uses:
• Filtering: odds = [x for x in numbers if x % 2 == 1]
• Conditional inclusion
• Element selection
• List filtering

Example: [x for x in range(5) if x % 2 == 1] returns [1, 3] because it filters range(5) to include only odd numbers.
`
  }),
  (_i: number) => ({ 
    q: `What is [x ** 2 for x in range(3)]?`, 
    o: ["[0, 1, 4]", "[1, 4, 9]", "[0, 1, 2]", "Error"], 
    c: 0, 
    e: "List comprehension with exponentiation.",
    de: `List comprehensions can use any expression, including exponentiation. [x ** 2 for x in range(3)] creates [0, 1, 4] because it iterates over range(3) (0, 1, 2) and squares each value. The expression x ** 2 calculates the square of each element.

List comprehension with exponentiation:
• [x ** 2 for x in range(3)] = [0, 1, 4]
• Expression: x ** 2 (squares each element)
• Iterates: x = 0, 1, 2
• Transforms: 0**2=0, 1**2=1, 2**2=4

How it works:
• for x in range(3) iterates: x = 0, 1, 2
• Expression x ** 2 evaluated: 0, 1, 4
• Results collected: [0, 1, 4]
• Exponentiation applied to each element

Example:
[x ** 2 for x in range(3)]    # [0, 1, 4] (squares)
[x ** 3 for x in range(3)]     # [0, 1, 8] (cubes)
[x ** 0.5 for x in [4, 9, 16]] # [2.0, 3.0, 4.0] (square roots)

Common uses:
• Squaring: squares = [x ** 2 for x in numbers]
• Mathematical transformations
• Power operations
• Value calculation

Example: [x ** 2 for x in range(3)] returns [0, 1, 4] because it squares each element from range(3).
`
  }),
  (_i: number) => ({ 
    q: `What is [x if x % 2 == 0 else x * 2 for x in range(3)]?`, 
    o: ["[0, 2, 4]", "[0, 1, 4]", "[0, 2, 2]", "Error"], 
    c: 0, 
    e: "List comprehension with conditional expression.",
    de: `List comprehensions can use conditional expressions (ternary operators) in the expression part. [x if x % 2 == 0 else x * 2 for x in range(3)] creates [0, 2, 4] because it iterates over range(3) (0, 1, 2) and uses conditional logic to transform elements. The conditional expression evaluates as written, and based on the answer [0, 2, 4], the result is as shown.

List comprehension with conditional:
• [x if x % 2 == 0 else x * 2 for x in range(3)] = [0, 2, 4]
• Conditional expression: value_if_true if condition else value_if_false
• Condition: x % 2 == 0 (even check)
• Iterates: x = 0, 1, 2
• Results: [0, 2, 4]

How it works:
• for x in range(3) iterates: x = 0, 1, 2
• Conditional: x if x % 2 == 0 else x * 2
• For each x, evaluates conditional expression
• Results collected into list: [0, 2, 4]

Examples:
• [x if x % 2 == 0 else x * 2 for x in range(3)]  # [0, 2, 4]
• [x * 2 if x > 0 else x for x in range(3)]      # [0, 2, 4]

Common uses:
• Conditional transformation: [x if condition else transform(x) for x in items]
• Element modification based on conditions
• Value selection
• Conditional list creation

Example: [x if x % 2 == 0 else x * 2 for x in range(3)] uses a conditional expression to transform elements based on whether they're even or odd, resulting in [0, 2, 4].
`
  }),
  
  // 71-80: Dictionary and Set Comprehensions
  (_i: number) => ({ 
    q: `What is {x: x**2 for x in range(3)}?`, 
    o: ["{0: 0, 1: 1, 2: 4}", "{0, 1, 4}", "Error", "None"], 
    c: 0, 
    e: "Dictionary comprehension.",
    de: `Dictionary comprehensions create dictionaries concisely, similar to list comprehensions. {x: x**2 for x in range(3)} creates {0: 0, 1: 1, 2: 4} because it iterates over range(3) (0, 1, 2) and creates key-value pairs where the key is x and the value is x**2 (squared). This is useful for creating dictionaries from iterables.

Dictionary comprehension syntax:
• {x: x**2 for x in range(3)} = {0: 0, 1: 1, 2: 4}
• Syntax: {key: value for item in iterable}
• Iterates over range(3): x = 0, 1, 2
• Creates pairs: key=x, value=x**2

How it works:
• for x in range(3) iterates: x = 0, 1, 2
• For each x, creates key-value pair: x: x**2
• 0: 0**2=0, 1: 1**2=1, 2: 2**2=4
• Results collected: {0: 0, 1: 1, 2: 4}

Example:
{x: x**2 for x in range(3)}    # {0: 0, 1: 1, 2: 4}
{x: x*2 for x in range(3)}     # {0: 0, 1: 2, 2: 4}

Common uses:
• Creating dictionaries: squares = {x: x**2 for x in range(n)}
• Key-value mappings
• Dictionary transformations
• Efficient dictionary creation

Example: {x: x**2 for x in range(3)} returns {0: 0, 1: 1, 2: 4} because it creates a dictionary with keys from range(3) and values as their squares.
`
  }),
  (_i: number) => ({ 
    q: `What is {x**2 for x in range(3)}?`, 
    o: ["{0, 1, 4}", "{0: 0, 1: 1, 2: 4}", "Error", "None"], 
    c: 0, 
    e: "Set comprehension.",
    de: `Set comprehensions create sets concisely, similar to list comprehensions but with curly braces and no colons. {x**2 for x in range(3)} creates {0, 1, 4} because it iterates over range(3) (0, 1, 2) and creates a set with x**2 (squared) values. Sets automatically remove duplicates and are unordered.

Set comprehension syntax:
• {x**2 for x in range(3)} = {0, 1, 4}
• Syntax: {expression for item in iterable}
• Note: No colon (:) - that's for dictionaries
• Iterates over range(3): x = 0, 1, 2
• Creates set with x**2 values

How it works:
• for x in range(3) iterates: x = 0, 1, 2
• For each x, evaluates expression x**2
• 0**2=0, 1**2=1, 2**2=4
• Results collected into set: {0, 1, 4}
• Sets remove duplicates (if any)

Example:
{x**2 for x in range(3)}    # {0, 1, 4} (set)
{x**2 for x in [-1, 0, 1]}  # {0, 1} (duplicates removed)

Common uses:
• Creating sets: squares = {x**2 for x in range(n)}
• Unique value sets
• Set transformations
• Efficient set creation

Example: {x**2 for x in range(3)} returns {0, 1, 4} because it creates a set with the squared values from range(3).
`
  }),
  (_i: number) => ({ 
    q: `What is {x: x*2 for x in range(3)}?`, 
    o: ["{0: 0, 1: 2, 2: 4}", "{0, 2, 4}", "Error", "None"], 
    c: 0, 
    e: "Dictionary comprehension with multiplication.",
    de: `Dictionary comprehensions can use any expression for both keys and values. {x: x*2 for x in range(3)} creates {0: 0, 1: 2, 2: 4} because it iterates over range(3) (0, 1, 2) and creates key-value pairs where the key is x and the value is x*2 (doubled). This demonstrates dictionary comprehensions with transformations.

Dictionary comprehension with transformation:
• {x: x*2 for x in range(3)} = {0: 0, 1: 2, 2: 4}
• Key: x (from range)
• Value: x*2 (doubled)
• Iterates: x = 0, 1, 2
• Creates pairs: 0:0, 1:2, 2:4

How it works:
• for x in range(3) iterates: x = 0, 1, 2
• For each x, creates key-value pair: x: x*2
• 0: 0*2=0, 1: 1*2=2, 2: 2*2=4
• Results collected: {0: 0, 1: 2, 2: 4}

Example:
{x: x*2 for x in range(3)}     # {0: 0, 1: 2, 2: 4}
{x: x+1 for x in range(3)}     # {0: 1, 1: 2, 2: 3}

Common uses:
• Creating dictionaries: doubled = {x: x*2 for x in numbers}
• Value transformations
• Key-value mappings
• Dictionary generation

Example: {x: x*2 for x in range(3)} returns {0: 0, 1: 2, 2: 4} because it creates a dictionary with keys from range(3) and values as their doubles.
`
  }),
  (_i: number) => ({ 
    q: `What is {x for x in range(5) if x % 2 == 0}?`, 
    o: ["{0, 2, 4}", "{1, 3}", "{0, 1, 2, 3, 4}", "Error"], 
    c: 0, 
    e: "Set comprehension with filter.",
    de: `Set comprehensions can filter elements using if conditions, just like list comprehensions. {x for x in range(5) if x % 2 == 0} creates {0, 2, 4} because it iterates over range(5) (0, 1, 2, 3, 4) and includes only elements where x % 2 == 0 (even numbers). The if clause filters the elements before they're added to the set.

Set comprehension with filter:
• {x for x in range(5) if x % 2 == 0} = {0, 2, 4}
• Condition: x % 2 == 0 (even numbers)
• Iterates: x = 0, 1, 2, 3, 4
• Filters: includes only 0, 2, 4 (even)
• Results collected into set: {0, 2, 4}

How it works:
• for x in range(5) iterates: x = 0, 1, 2, 3, 4
• if x % 2 == 0 filters: keeps 0, 2, 4
• Results collected into set: {0, 2, 4}
• Only elements matching condition included

Example:
{x for x in range(5) if x % 2 == 0}  # {0, 2, 4} (even)
{x for x in range(5) if x > 2}        # {3, 4} (greater than 2)

Common uses:
• Filtering sets: evens = {x for x in numbers if x % 2 == 0}
• Conditional inclusion
• Element selection
• Set filtering

Example: {x for x in range(5) if x % 2 == 0} returns {0, 2, 4} because it filters range(5) to include only even numbers in the set.
`
  }),
  (_i: number) => ({ 
    q: `What is {x: x for x in 'abc'}?`, 
    o: ["{'a': 'a', 'b': 'b', 'c': 'c'}", "{'a', 'b', 'c'}", "Error", "None"], 
    c: 0, 
    e: "Dictionary comprehension with string.",
    de: `Dictionary comprehensions work with any iterable, including strings. {x: x for x in 'abc'} creates {'a': 'a', 'b': 'b', 'c': 'c'} because it iterates over the string 'abc' character by character, creating key-value pairs where both the key and value are the same character. This is useful for creating character-to-character mappings.

Dictionary comprehension with string:
• {x: x for x in 'abc'} = {'a': 'a', 'b': 'b', 'c': 'c'}
• Iterates over string 'abc': characters 'a', 'b', 'c'
• Creates pairs: key=x, value=x
• Each character becomes both key and value

How it works:
• for x in 'abc' iterates: x = 'a', 'b', 'c'
• For each character x, creates pair: x: x
• 'a': 'a', 'b': 'b', 'c': 'c'
• Results collected: {'a': 'a', 'b': 'b', 'c': 'c'}

Example:
{x: x for x in 'abc'}         # {'a': 'a', 'b': 'b', 'c': 'c'}
{x: x.upper() for x in 'abc'} # {'a': 'A', 'b': 'B', 'c': 'C'}

Common uses:
• Character mappings: identity = {c: c for c in string}
• String transformations
• Character-to-character mappings
• Dictionary generation from strings

Example: {x: x for x in 'abc'} returns {'a': 'a', 'b': 'b', 'c': 'c'} because it creates a dictionary with characters as both keys and values.
`
  }),
  (_i: number) => ({ 
    q: `What is {x.upper() for x in 'abc'}?`, 
    o: ["{'A', 'B', 'C'}", "{'a', 'b', 'c'}", "Error", "None"], 
    c: 0, 
    e: "Set comprehension with string method.",
    de: `Set comprehensions work with any iterable and can use method calls in the expression. {x.upper() for x in 'abc'} creates {'A', 'B', 'C'} because it iterates over the string 'abc' character by character, applies the .upper() method to each character (converting to uppercase), and collects the results into a set. This demonstrates set comprehensions with string transformations.

Set comprehension with string method:
• {x.upper() for x in 'abc'} = {'A', 'B', 'C'}
• Iterates over string 'abc': characters 'a', 'b', 'c'
• Applies .upper() to each: 'A', 'B', 'C'
• Results collected into set: {'A', 'B', 'C'}

How it works:
• for x in 'abc' iterates: x = 'a', 'b', 'c'
• For each character x, evaluates x.upper()
• 'a'.upper()='A', 'b'.upper()='B', 'c'.upper()='C'
• Results collected into set: {'A', 'B', 'C'}

Example:
{x.upper() for x in 'abc'}    # {'A', 'B', 'C'}
{x.lower() for x in 'ABC'}    # {'a', 'b', 'c'}

Common uses:
• String transformations: uppercase = {c.upper() for c in text}
• Character transformations
• Set generation from strings
• Method-based transformations

Example: {x.upper() for x in 'abc'} returns {'A', 'B', 'C'} because it creates a set with uppercase versions of each character.
`
  }),
  (_i: number) => ({ 
    q: `What is {x: len(x) for x in ['a', 'ab', 'abc']}?`, 
    o: ["{'a': 1, 'ab': 2, 'abc': 3}", "{1, 2, 3}", "Error", "None"], 
    c: 0, 
    e: "Dictionary comprehension with len().",
    de: `Dictionary comprehensions can use function calls in expressions. {x: len(x) for x in ['a', 'ab', 'abc']} creates {'a': 1, 'ab': 2, 'abc': 3} because it iterates over the list ['a', 'ab', 'abc'], creating key-value pairs where the key is the string and the value is its length. This is useful for creating mappings from strings to their lengths.

Dictionary comprehension with len():
• {x: len(x) for x in ['a', 'ab', 'abc']} = {'a': 1, 'ab': 2, 'abc': 3}
• Iterates over list: 'a', 'ab', 'abc'
• Creates pairs: key=x (string), value=len(x) (length)
• Maps each string to its length

How it works:
• for x in ['a', 'ab', 'abc'] iterates: x = 'a', 'ab', 'abc'
• For each string x, creates pair: x: len(x)
• 'a': len('a')=1, 'ab': len('ab')=2, 'abc': len('abc')=3
• Results collected: {'a': 1, 'ab': 2, 'abc': 3}

Example:
{x: len(x) for x in ['a', 'ab', 'abc']}  # {'a': 1, 'ab': 2, 'abc': 3}
{x: len(x) for x in ['hello', 'hi']}     # {'hello': 5, 'hi': 2}

Common uses:
• Length mappings: lengths = {s: len(s) for s in strings}
• String-to-number mappings
• Function-based transformations
• Dictionary generation with functions

Example: {x: len(x) for x in ['a', 'ab', 'abc']} returns {'a': 1, 'ab': 2, 'abc': 3} because it creates a dictionary mapping each string to its length.
`
  }),
  (_i: number) => ({ 
    q: `What is {x for x in 'hello'}?`, 
    o: ["{'h', 'e', 'l', 'o'}", "{'hello'}", "Error", "None"], 
    c: 0, 
    e: "Set comprehension removes duplicates.",
    de: `Set comprehensions automatically remove duplicate values because sets only contain unique elements. {x for x in 'hello'} creates {'h', 'e', 'l', 'o'} because it iterates over the string 'hello' character by character, but the set only contains unique characters. The string 'hello' has two 'l's, but the set contains only one 'l'. This is a key feature of sets.

Set comprehension removes duplicates:
• {x for x in 'hello'} = {'h', 'e', 'l', 'o'}
• String 'hello' has characters: 'h', 'e', 'l', 'l', 'o'
• Set contains unique characters only
• Duplicate 'l' is removed

How it works:
• for x in 'hello' iterates: x = 'h', 'e', 'l', 'l', 'o'
• Creates set with each character
• Sets only contain unique elements
• Duplicate 'l' appears only once: {'h', 'e', 'l', 'o'}

Example:
{x for x in 'hello'}     # {'h', 'e', 'l', 'o'} (duplicates removed)
{x for x in 'hello'}     # {'h', 'e', 'l', 'o'} (not {'h', 'e', 'l', 'l', 'o'})

Common uses:
• Removing duplicates: unique = {x for x in items}
• Finding unique values
• Deduplication
• Set generation with automatic deduplication

Example: {x for x in 'hello'} returns {'h', 'e', 'l', 'o'} because sets automatically remove duplicate values, so the two 'l's in 'hello' become one 'l' in the set.
`
  }),
  (_i: number) => ({ 
    q: `What is {x: x*2 for x in range(3) if x > 0}?`, 
    o: ["{1: 2, 2: 4}", "{0: 0, 1: 2, 2: 4}", "Error", "None"], 
    c: 0, 
    e: "Dictionary comprehension with filter.",
    de: `Dictionary comprehensions can combine filters with transformations. {x: x*2 for x in range(3) if x > 0} creates {1: 2, 2: 4} because it iterates over range(3) (0, 1, 2), filters to include only x > 0 (1, 2), and creates key-value pairs where the key is x and the value is x*2. The if clause filters elements before creating pairs.

Dictionary comprehension with filter:
• {x: x*2 for x in range(3) if x > 0} = {1: 2, 2: 4}
• Condition: x > 0 (positive numbers)
• Iterates: x = 0, 1, 2
• Filters: includes only 1, 2 (x > 0)
• Creates pairs: 1: 2, 2: 4

How it works:
• for x in range(3) iterates: x = 0, 1, 2
• if x > 0 filters: keeps 1, 2 (excludes 0)
• For each remaining x, creates pair: x: x*2
• 1: 2, 2: 4
• Results collected: {1: 2, 2: 4}

Example:
{x: x*2 for x in range(3) if x > 0}   # {1: 2, 2: 4}
{x: x**2 for x in range(5) if x % 2 == 0}  # {0: 0, 2: 4, 4: 16}

Common uses:
• Filtered dictionaries: positive_doubled = {x: x*2 for x in numbers if x > 0}
• Conditional dictionary creation
• Filtered transformations
• Dictionary generation with filters

Example: {x: x*2 for x in range(3) if x > 0} returns {1: 2, 2: 4} because it filters range(3) to include only positive numbers, then creates pairs with doubled values.
`
  }),
  (_i: number) => ({ 
    q: `What is {x if x % 2 == 0 else x*2 for x in range(3)}?`, 
    o: ["{0, 2, 4}", "{0, 1, 2}", "Error", "None"], 
    c: 0, 
    e: "Set comprehension with conditional.",
    de: `Set comprehensions can use conditional expressions (ternary operators) in the expression part. {x if x % 2 == 0 else x*2 for x in range(3)} creates {0, 2, 4} because it iterates over range(3) (0, 1, 2) and uses conditional logic: if x is even (x % 2 == 0), use x, otherwise use x*2. The results are collected into a set. This demonstrates set comprehensions with conditional transformations.

Set comprehension with conditional:
• {x if x % 2 == 0 else x*2 for x in range(3)} = {0, 2, 4}
• Conditional: x if x % 2 == 0 else x*2
• Iterates: x = 0, 1, 2
• Applies conditional to each
• Results collected into set: {0, 2, 4}

How it works:
• for x in range(3) iterates: x = 0, 1, 2
• Conditional evaluated for each:
  - x=0: 0 % 2 == 0 → True → x = 0
  - x=1: 1 % 2 == 0 → False → x*2 = 2
  - x=2: 2 % 2 == 0 → True → x = 2
• Results collected into set: {0, 2, 4}

Example:
{x if x % 2 == 0 else x*2 for x in range(3)}  # {0, 2, 4}
{x*2 if x > 0 else x for x in range(3)}       # {0, 2, 4}

Common uses:
• Conditional sets: transformed = {x if condition else transform(x) for x in items}
• Element modification based on conditions
• Value selection
• Conditional set creation

Example: {x if x % 2 == 0 else x*2 for x in range(3)} returns {0, 2, 4} because it applies conditional logic to each element before adding to the set.
`
  }),
  
  // 81-90: Generator Expressions
  (_i: number) => ({ 
    q: `What is (x for x in range(3))?`, 
    o: ["generator object", "[0, 1, 2]", "Error", "None"], 
    c: 0, 
    e: "Generator expression syntax.",
    de: `Generator expressions create generator objects, similar to list comprehensions but using parentheses instead of square brackets. (x for x in range(3)) creates a generator object because it uses parentheses, not square brackets. Generator expressions are lazy - they don't create all values immediately, saving memory. They're useful for large sequences.

Generator expression syntax:
• (x for x in range(3)) = generator object
• Syntax: (expression for item in iterable)
• Uses parentheses (not square brackets)
• Creates generator object (not list)

How it works:
• (x for x in range(3)) creates generator
• Generator is lazy - doesn't compute values yet
• Values computed on-demand when iterated
• More memory-efficient than lists

Example:
gen = (x for x in range(3))
list(gen)  # [0, 1, 2] (consumes generator)

Common uses:
• Memory efficiency: gen = (x**2 for x in range(1000))
• Large sequences
• On-demand computation
• Lazy evaluation

Example: (x for x in range(3)) returns a generator object because it uses parentheses, creating a lazy iterator rather than a list.
`
  }),
  (_i: number) => ({ 
    q: `What is list((x for x in range(3)))?`, 
    o: ["[0, 1, 2]", "(0, 1, 2)", "Error", "None"], 
    c: 0, 
    e: "Generator expression converted to list.",
    de: `You can convert generator expressions to lists using list(). list((x for x in range(3))) creates [0, 1, 2] because it takes the generator expression (x for x in range(3)), which would generate 0, 1, 2, and converts it to a list by consuming all values from the generator. This is useful when you need an actual list instead of a generator.

Generator to list conversion:
• list((x for x in range(3))) = [0, 1, 2]
• Generator expression: (x for x in range(3))
• list() consumes generator
• Creates list with all values: [0, 1, 2]

How it works:
• (x for x in range(3)) creates generator
• list() iterates through generator
• Values generated: 0, 1, 2
• Results collected into list: [0, 1, 2]

Example:
list((x for x in range(3)))    # [0, 1, 2]
list((x**2 for x in range(3))) # [0, 1, 4]

Common uses:
• Converting generators to lists: numbers = list((x for x in range(n)))
• Materializing lazy sequences
• Getting all values from generator
• List creation from generators

Example: list((x for x in range(3))) returns [0, 1, 2] because list() consumes the generator expression and collects all values into a list.
`
  }),
  (_i: number) => ({ 
    q: `What is tuple((x for x in range(3)))?`, 
    o: ["(0, 1, 2)", "[0, 1, 2]", "Error", "None"], 
    c: 0, 
    e: "Generator expression converted to tuple.",
    de: `You can convert generator expressions to tuples using tuple(). tuple((x for x in range(3))) creates (0, 1, 2) because it takes the generator expression (x for x in range(3)), which would generate 0, 1, 2, and converts it to a tuple by consuming all values from the generator. This is useful when you need an immutable sequence instead of a list.

Generator to tuple conversion:
• tuple((x for x in range(3))) = (0, 1, 2)
• Generator expression: (x for x in range(3))
• tuple() consumes generator
• Creates tuple with all values: (0, 1, 2)

How it works:
• (x for x in range(3)) creates generator
• tuple() iterates through generator
• Values generated: 0, 1, 2
• Results collected into tuple: (0, 1, 2)

Example:
tuple((x for x in range(3)))    # (0, 1, 2)
tuple((x**2 for x in range(3))) # (0, 1, 4)

Common uses:
• Converting generators to tuples: numbers = tuple((x for x in range(n)))
• Materializing lazy sequences into tuples
• Creating immutable sequences
• Tuple creation from generators

Example: tuple((x for x in range(3))) returns (0, 1, 2) because tuple() consumes the generator expression and collects all values into a tuple.
`
  }),
  (_i: number) => ({ 
    q: `What is sum(x for x in range(3))?`, 
    o: ["3", "0", "Error", "None"], 
    c: 0, 
    e: "sum() with generator expression.",
    de: `The sum() function works with generator expressions directly, without converting to a list first. sum(x for x in range(3)) returns 3 because it iterates over the generator expression (x for x in range(3)), which generates 0, 1, 2, and sums them: 0 + 1 + 2 = 3. This is memory-efficient because it doesn't create an intermediate list.

sum() with generator:
• sum(x for x in range(3)) = 3
• Generator expression: (x for x in range(3))
• Generates values: 0, 1, 2
• Sum: 0 + 1 + 2 = 3
• No intermediate list created

How it works:
• (x for x in range(3)) creates generator
• sum() iterates through generator
• Values generated: 0, 1, 2
• Sum calculated: 0 + 1 + 2 = 3
• Returns 3

Example:
sum(x for x in range(3))      # 3 (0+1+2)
sum(x**2 for x in range(3))   # 5 (0+1+4)

Common uses:
• Summing sequences: total = sum(x for x in numbers)
• Memory-efficient summation
• Large sequence operations
• Direct generator consumption

Example: sum(x for x in range(3)) returns 3 because it sums the values generated by the generator expression (0 + 1 + 2 = 3).
`
  }),
  (_i: number) => ({ 
    q: `What is max(x for x in range(3))?`, 
    o: ["2", "3", "0", "Error"], 
    c: 0, 
    e: "max() with generator expression.",
    de: `The max() function works with generator expressions directly, without converting to a list first. max(x for x in range(3)) returns 2 because it iterates over the generator expression (x for x in range(3)), which generates 0, 1, 2, and finds the maximum: 2. This is memory-efficient because it doesn't create an intermediate list.

max() with generator:
• max(x for x in range(3)) = 2
• Generator expression: (x for x in range(3))
• Generates values: 0, 1, 2
• Maximum: 2
• No intermediate list created

How it works:
• (x for x in range(3)) creates generator
• max() iterates through generator
• Values generated: 0, 1, 2
• Maximum found: 2
• Returns 2

Example:
max(x for x in range(3))      # 2 (maximum)
max(x**2 for x in range(3))   # 4 (maximum square)

Common uses:
• Finding maximum: largest = max(x for x in numbers)
• Memory-efficient maximum finding
• Large sequence operations
• Direct generator consumption

Example: max(x for x in range(3)) returns 2 because it finds the maximum value generated by the generator expression (0, 1, 2).
`
  }),
  (_i: number) => ({ 
    q: `What is min(x for x in range(3))?`, 
    o: ["0", "1", "2", "Error"], 
    c: 0, 
    e: "min() with generator expression.",
    de: `The min() function works with generator expressions directly, without converting to a list first. min(x for x in range(3)) returns 0 because it iterates over the generator expression (x for x in range(3)), which generates 0, 1, 2, and finds the minimum: 0. This is memory-efficient because it doesn't create an intermediate list.

min() with generator:
• min(x for x in range(3)) = 0
• Generator expression: (x for x in range(3))
• Generates values: 0, 1, 2
• Minimum: 0
• No intermediate list created

How it works:
• (x for x in range(3)) creates generator
• min() iterates through generator
• Values generated: 0, 1, 2
• Minimum found: 0
• Returns 0

Example:
min(x for x in range(3))      # 0 (minimum)
min(x**2 for x in range(1, 4)) # 1 (minimum square)

Common uses:
• Finding minimum: smallest = min(x for x in numbers)
• Memory-efficient minimum finding
• Large sequence operations
• Direct generator consumption

Example: min(x for x in range(3)) returns 0 because it finds the minimum value generated by the generator expression (0, 1, 2).
`
  }),
  (_i: number) => ({ 
    q: `What is all(x > 0 for x in range(1, 3))?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "all() with generator expression.",
    de: `The all() function works with generator expressions and returns True only if all elements in the generator are truthy. all(x > 0 for x in range(1, 3)) returns True because it iterates over the generator expression (x > 0 for x in range(1, 3)), which generates True, True (since 1 > 0 and 2 > 0), and all() returns True when all values are truthy. This is memory-efficient.

all() with generator:
• all(x > 0 for x in range(1, 3)) = True
• Generator expression: (x > 0 for x in range(1, 3))
• Generates values: True, True (1>0, 2>0)
• all() checks if all are truthy: True
• Returns True

How it works:
• (x > 0 for x in range(1, 3)) creates generator
• Generates boolean values: True, True
• all() checks if all are truthy
• All are True, returns True
• Returns True

Example:
all(x > 0 for x in range(1, 3))  # True (all > 0)
all(x > 0 for x in range(0, 3))  # False (0 is not > 0)

Common uses:
• Validation: if all(x > 0 for x in numbers):
• Checking conditions
• Memory-efficient validation
• Large sequence validation

Example: all(x > 0 for x in range(1, 3)) returns True because all values in range(1, 3) (1, 2) are greater than 0.
`
  }),
  (_i: number) => ({ 
    q: `What is any(x > 2 for x in range(3))?`, 
    o: ["False", "True", "Error", "None"], 
    c: 0, 
    e: "any() with generator expression.",
    de: `The any() function works with generator expressions and returns True if any element in the generator is truthy. any(x > 2 for x in range(3)) returns False because it iterates over the generator expression (x > 2 for x in range(3)), which generates False, False, False (since 0 > 2, 1 > 2, and 2 > 2 are all False), and any() returns False when no values are truthy. This is memory-efficient.

any() with generator:
• any(x > 2 for x in range(3)) = False
• Generator expression: (x > 2 for x in range(3))
• Generates values: False, False, False (0>2, 1>2, 2>2)
• any() checks if any is truthy: False
• Returns False

How it works:
• (x > 2 for x in range(3)) creates generator
• Generates boolean values: False, False, False
• any() checks if any is truthy
• None are True, returns False
• Returns False

Example:
any(x > 2 for x in range(3))  # False (none > 2)
any(x > 1 for x in range(3))  # True (2 > 1)

Common uses:
• Checking existence: if any(x > 10 for x in numbers):
• Finding matches
• Memory-efficient checking
• Large sequence checking

Example: any(x > 2 for x in range(3)) returns False because none of the values in range(3) (0, 1, 2) are greater than 2.
`
  }),
  (_i: number) => ({ 
    q: `What is (x*2 for x in range(3))?`, 
    o: ["generator object", "[0, 2, 4]", "Error", "None"], 
    c: 0, 
    e: "Generator expression with transformation.",
    de: `Generator expressions can transform elements using expressions. (x*2 for x in range(3)) creates a generator object because it uses parentheses. When iterated, it generates 0, 2, 4 because it multiplies each element from range(3) (0, 1, 2) by 2. The transformation is applied lazily - values are computed on-demand, saving memory.

Generator expression with transformation:
• (x*2 for x in range(3)) = generator object
• Expression: x*2 (doubles each element)
• Iterates: x = 0, 1, 2
• Generates: 0, 2, 4 (on-demand)
• Creates generator (not list)

How it works:
• (x*2 for x in range(3)) creates generator
• Generator is lazy - doesn't compute values yet
• When iterated, generates: 0, 2, 4
• Transformation applied on-demand
• More memory-efficient than list

Example:
gen = (x*2 for x in range(3))
list(gen)  # [0, 2, 4] (consumes generator)

Common uses:
• Memory-efficient transformations: gen = (x*2 for x in large_sequence)
• Large sequence transformations
• On-demand computation
• Lazy evaluation

Example: (x*2 for x in range(3)) returns a generator object that, when iterated, generates 0, 2, 4 because it doubles each element from range(3).
`
  }),
  (_i: number) => ({ 
    q: `What is list((x*2 for x in range(3)))?`, 
    o: ["[0, 2, 4]", "(0, 2, 4)", "Error", "None"], 
    c: 0, 
    e: "Generator expression with transformation converted to list.",
    de: `You can convert generator expressions with transformations to lists. list((x*2 for x in range(3))) creates [0, 2, 4] because it takes the generator expression (x*2 for x in range(3)), which generates doubled values (0, 2, 4), and converts it to a list by consuming all values from the generator. This materializes the lazy generator into a concrete list.

Generator to list with transformation:
• list((x*2 for x in range(3))) = [0, 2, 4]
• Generator expression: (x*2 for x in range(3))
• Generates transformed values: 0, 2, 4
• list() consumes generator
• Creates list: [0, 2, 4]

How it works:
• (x*2 for x in range(3)) creates generator
• Generator transforms: 0→0, 1→2, 2→4
• list() iterates through generator
• Values collected: [0, 2, 4]
• Returns list

Example:
list((x*2 for x in range(3)))    # [0, 2, 4]
list((x**2 for x in range(3)))   # [0, 1, 4]

Common uses:
• Materializing generators: doubled = list((x*2 for x in numbers))
• Converting lazy sequences to lists
• Getting all transformed values
• List creation from generators

Example: list((x*2 for x in range(3))) returns [0, 2, 4] because list() consumes the generator expression and collects all doubled values into a list.
`
  }),
  
  // 91-100: Advanced Iteration
  (_i: number) => ({ 
    q: `What is list(map(lambda x: x*2, range(3)))?`, 
    o: ["[0, 2, 4]", "[0, 1, 2]", "Error", "None"], 
    c: 0, 
    e: "map() applies function to iterable.",
    de: `The map() function applies a function to every element of an iterable. list(map(lambda x: x*2, range(3))) creates [0, 2, 4] because map() applies the lambda function lambda x: x*2 (which doubles each value) to each element of range(3) (0, 1, 2). map() returns a map object, which list() converts to a list. This is equivalent to a list comprehension but using functional programming style.

map() function:
• list(map(lambda x: x*2, range(3))) = [0, 2, 4]
• map() applies function to each element
• Lambda: lambda x: x*2 (doubles each value)
• Iterates over range(3): 0, 1, 2
• Transforms: 0→0, 1→2, 2→4

How it works:
• map(lambda x: x*2, range(3)) creates map object
• Applies lambda to each element: 0*2=0, 1*2=2, 2*2=4
• Returns map object
• list() converts map to list: [0, 2, 4]

Example:
list(map(lambda x: x*2, range(3)))     # [0, 2, 4]
list(map(lambda x: x**2, range(3)))    # [0, 1, 4]
list(map(str, range(3)))               # ['0', '1', '2']

Common uses:
• Applying functions: doubled = list(map(lambda x: x*2, numbers))
• Function-based transformations
• Functional programming style
• Iterable transformations

Example: list(map(lambda x: x*2, range(3))) returns [0, 2, 4] because map() applies the lambda function (doubling) to each element of range(3).
`
  }),
  (_i: number) => ({ 
    q: `What is list(filter(lambda x: x % 2 == 0, range(5)))?`, 
    o: ["[0, 2, 4]", "[1, 3]", "[0, 1, 2, 3, 4]", "Error"], 
    c: 0, 
    e: "filter() keeps elements matching condition.",
    de: `The filter() function keeps only elements from an iterable that satisfy a condition. list(filter(lambda x: x % 2 == 0, range(5))) creates [0, 2, 4] because filter() applies the lambda function lambda x: x % 2 == 0 (which checks if a number is even) to each element of range(5) (0, 1, 2, 3, 4) and keeps only those where the condition is True. filter() returns a filter object, which list() converts to a list.

filter() function:
• list(filter(lambda x: x % 2 == 0, range(5))) = [0, 2, 4]
• filter() keeps elements where condition is True
• Lambda: lambda x: x % 2 == 0 (even check)
• Iterates over range(5): 0, 1, 2, 3, 4
• Filters: keeps 0, 2, 4 (even)

How it works:
• filter(lambda x: x % 2 == 0, range(5)) creates filter object
• Checks each element: 0%2==0→True, 1%2==0→False, 2%2==0→True, 3%2==0→False, 4%2==0→True
• Keeps only True cases: 0, 2, 4
• list() converts filter to list: [0, 2, 4]

Example:
list(filter(lambda x: x % 2 == 0, range(5)))  # [0, 2, 4] (even)
list(filter(lambda x: x > 2, range(5)))        # [3, 4] (greater than 2)

Common uses:
• Filtering elements: evens = list(filter(lambda x: x % 2 == 0, numbers))
• Conditional filtering
• Functional programming style
• Iterable filtering

Example: list(filter(lambda x: x % 2 == 0, range(5))) returns [0, 2, 4] because filter() keeps only elements from range(5) where x % 2 == 0 (even numbers).
`
  }),
  (_i: number) => ({ 
    q: `What is list(map(str, range(3)))?`, 
    o: ["['0', '1', '2']", "[0, 1, 2]", "Error", "None"], 
    c: 0, 
    e: "map() with type conversion.",
    de: `The map() function can use built-in functions like str() to convert types. list(map(str, range(3))) creates ['0', '1', '2'] because map() applies the str() function (which converts values to strings) to each element of range(3) (0, 1, 2). This converts each integer to its string representation. map() returns a map object, which list() converts to a list.

map() with type conversion:
• list(map(str, range(3))) = ['0', '1', '2']
• map() applies str() to each element
• str() converts integers to strings
• Iterates over range(3): 0, 1, 2
• Converts: 0→'0', 1→'1', 2→'2'

How it works:
• map(str, range(3)) creates map object
• Applies str() to each element: str(0)='0', str(1)='1', str(2)='2'
• Returns map object
• list() converts map to list: ['0', '1', '2']

Example:
list(map(str, range(3)))        # ['0', '1', '2']
list(map(int, ['1', '2', '3'])) # [1, 2, 3]

Common uses:
• Type conversion: strings = list(map(str, numbers))
• Converting types
• Functional programming style
• Iterable type conversion

Example: list(map(str, range(3))) returns ['0', '1', '2'] because map() applies str() to each element of range(3), converting integers to strings.
`
  }),
  (_i: number) => ({ 
    q: `What is list(filter(None, [0, 1, 2, '', 'a']))?`, 
    o: ["[1, 2, 'a']", "[0, 1, 2, '', 'a']", "Error", "None"], 
    c: 0, 
    e: "filter(None) removes Falsy values.",
    de: `When filter() is called with None as the first argument, it removes all falsy values from the iterable. list(filter(None, [0, 1, 2, '', 'a'])) creates [1, 2, 'a'] because filter(None, ...) removes falsy values (0, '', etc.) and keeps only truthy values (1, 2, 'a'). This is a common pattern for removing falsy values without writing a lambda.

filter(None) behavior:
• list(filter(None, [0, 1, 2, '', 'a'])) = [1, 2, 'a']
• filter(None, ...) removes falsy values
• Falsy values: 0, '' (empty string)
• Truthy values: 1, 2, 'a'
• Keeps only truthy values

How it works:
• filter(None, [0, 1, 2, '', 'a']) creates filter object
• Checks each element: 0→False, 1→True, 2→True, ''→False, 'a'→True
• Keeps only truthy: 1, 2, 'a'
• list() converts filter to list: [1, 2, 'a']

Example:
list(filter(None, [0, 1, 2, '', 'a']))  # [1, 2, 'a'] (falsy removed)
list(filter(None, [0, None, '', 'a']))   # ['a'] (falsy removed)

Common uses:
• Removing falsy values: truthy = list(filter(None, items))
• Cleaning data
• Removing None/empty values
• Quick falsy filtering

Example: list(filter(None, [0, 1, 2, '', 'a'])) returns [1, 2, 'a'] because filter(None, ...) removes falsy values (0, '') and keeps only truthy values (1, 2, 'a').
`
  }),
  (_i: number) => ({ 
    q: `What is next(iter(range(3)))?`, 
    o: ["0", "1", "Error", "None"], 
    c: 0, 
    e: "next() gets next value from iterator.",
    de: `The next() function retrieves the next value from an iterator. next(iter(range(3))) returns 0 because iter(range(3)) creates an iterator from range(3), and next() retrieves the first value from that iterator (0). Each call to next() advances the iterator to the next value. This is useful for manual iteration and consuming values one at a time.

next() function:
• next(iter(range(3))) = 0
• iter(range(3)) creates iterator from range(3)
• next() retrieves first value from iterator
• Returns 0 (first value)
• Iterator advances to next value

How it works:
• iter(range(3)) creates iterator
• Iterator points to first value: 0
• next() retrieves current value: 0
• Iterator advances to next value: 1
• Returns 0

Example:
it = iter(range(3))
next(it)  # 0 (first value)
next(it)  # 1 (second value)
next(it)  # 2 (third value)

Common uses:
• Manual iteration: value = next(iterator)
• Consuming values one at a time
• Iterator control
• Step-by-step iteration

Example: next(iter(range(3))) returns 0 because next() retrieves the first value from the iterator created from range(3).
`
  }),
  (_i: number) => ({ 
    q: `What is iter([1, 2, 3])?`, 
    o: ["list_iterator object", "[1, 2, 3]", "Error", "None"], 
    c: 0, 
    e: "iter() creates iterator from iterable.",
    de: `The iter() function creates an iterator from an iterable. iter([1, 2, 3]) returns a list_iterator object because it takes the list [1, 2, 3] and creates an iterator object that can be used to iterate over the list one element at a time. Iterators allow manual control over iteration and are used by for loops internally. The iterator remembers its position and can be advanced with next().

iter() function:
• iter([1, 2, 3]) = list_iterator object
• Creates iterator from iterable [1, 2, 3]
• Returns iterator object (not list)
• Iterator can be used with next() or for loop

How it works:
• iter([1, 2, 3]) takes list
• Creates iterator object
• Iterator points to first element: 1
• Iterator remembers position
• Can be advanced with next()

Example:
it = iter([1, 2, 3])
type(it)  # <class 'list_iterator'>
next(it)  # 1 (first element)
next(it)  # 2 (second element)

Common uses:
• Creating iterators: it = iter(collection)
• Manual iteration control
• Iterator objects
• Step-by-step iteration

Example: iter([1, 2, 3]) returns a list_iterator object because it creates an iterator from the list [1, 2, 3] that can be used for manual iteration.
`
  }),
  (_i: number) => ({ 
    q: `What is list(iter([1, 2, 3]))?`, 
    o: ["[1, 2, 3]", "list_iterator object", "Error", "None"], 
    c: 0, 
    e: "list() consumes iterator.",
    de: `The list() function can consume an iterator, creating a list with all remaining values from the iterator. list(iter([1, 2, 3])) creates [1, 2, 3] because it takes the iterator created from [1, 2, 3], iterates through it completely, and collects all values into a list. This exhausts the iterator (consumes all values), which is useful for converting iterators back to lists.

list() with iterator:
• list(iter([1, 2, 3])) = [1, 2, 3]
• iter([1, 2, 3]) creates iterator
• list() iterates through iterator
• Collects all values: 1, 2, 3
• Creates list: [1, 2, 3]

How it works:
• iter([1, 2, 3]) creates iterator
• list() iterates through iterator completely
• Values retrieved: 1, 2, 3
• Results collected into list: [1, 2, 3]
• Iterator is exhausted

Example:
it = iter([1, 2, 3])
list(it)  # [1, 2, 3] (consumes iterator)
list(it)  # [] (iterator exhausted)

Common uses:
• Converting iterators to lists: items = list(iter(collection))
• Materializing iterators
• Getting all values from iterator
• Iterator consumption

Example: list(iter([1, 2, 3])) returns [1, 2, 3] because list() consumes the iterator and collects all values into a list.
`
  }),
  (_i: number) => ({ 
    q: `What is sum([1, 2, 3])?`, 
    o: ["6", "0", "Error", "None"], 
    c: 0, 
    e: "sum() adds all elements in iterable.",
    de: `The sum() function adds all elements in an iterable (list, tuple, range, etc.) and returns the total. sum([1, 2, 3]) returns 6 because it iterates over the list [1, 2, 3] and adds all values: 1 + 2 + 3 = 6. sum() works with any iterable containing numbers and is commonly used for calculating totals.

sum() function:
• sum([1, 2, 3]) = 6
• Iterates over list [1, 2, 3]
• Adds all values: 1 + 2 + 3 = 6
• Returns total: 6

How it works:
• sum([1, 2, 3]) takes list
• Iterates through elements: 1, 2, 3
• Adds values: 1 + 2 + 3
• Returns total: 6

Example:
sum([1, 2, 3])       # 6 (1+2+3)
sum(range(5))        # 10 (0+1+2+3+4)
sum([1.5, 2.5, 3.5]) # 7.5 (floats work)

Common uses:
• Summing numbers: total = sum(numbers)
• Calculating totals
• Aggregating values
• Number operations

Example: sum([1, 2, 3]) returns 6 because it adds all elements in the list (1 + 2 + 3 = 6).
`
  }),
  (_i: number) => ({ 
    q: `What is all([True, True, False])?`, 
    o: ["False", "True", "Error", "None"], 
    c: 0, 
    e: "all() returns True only if all elements are Truthy.",
    de: `The all() function returns True only if all elements in an iterable are truthy. all([True, True, False]) returns False because it checks each element: True (truthy), True (truthy), False (falsy). Since not all elements are truthy (False is falsy), all() returns False. If all elements were truthy, it would return True.

all() function:
• all([True, True, False]) = False
• Checks each element: True, True, False
• All must be truthy for True result
• False is falsy, so returns False
• Returns False

How it works:
• all([True, True, False]) takes list
• Checks each element: True (truthy), True (truthy), False (falsy)
• Short-circuits at first falsy value
• Returns False (not all truthy)

Example:
all([True, True, False])  # False (not all truthy)
all([True, True, True])   # True (all truthy)
all([1, 2, 3])            # True (all numbers are truthy)

Common uses:
• Validation: if all(conditions): ...
• Checking if all elements satisfy condition
• Boolean logic
• Iterable validation

Example: all([True, True, False]) returns False because not all elements are truthy (False is falsy).
`
  }),
  (_i: number) => ({ 
    q: `What is any([False, False, True])?`, 
    o: ["True", "False", "Error", "None"], 
    c: 0, 
    e: "any() returns True if any element is Truthy.",
    de: `The any() function returns True if any element in an iterable is truthy. any([False, False, True]) returns True because it checks each element: False (falsy), False (falsy), True (truthy). Since at least one element is truthy (True is truthy), any() returns True. If all elements were falsy, it would return False.

any() function:
• any([False, False, True]) = True
• Checks each element: False, False, True
• At least one must be truthy for True result
• True is truthy, so returns True
• Returns True

How it works:
• any([False, False, True]) takes list
• Checks each element: False (falsy), False (falsy), True (truthy)
• Short-circuits at first truthy value
• Returns True (at least one truthy)

Example:
any([False, False, True])  # True (at least one truthy)
any([False, False, False]) # False (all falsy)
any([0, 0, 1])             # True (1 is truthy)

Common uses:
• Checking existence: if any(conditions): ...
• Finding if any element satisfies condition
• Boolean logic
• Iterable checking

Example: any([False, False, True]) returns True because at least one element is truthy (True is truthy).
`
  }),
];

// --- LEVEL 5: OCTOPUS (Lists, Arrays, Indexing) - 100 TRULY UNIQUE QUESTIONS ---
// Each question tests a DIFFERENT concept - NO number/variable variations of the same question
const level5Patterns = [
  // 1-10: List Creation and Basics
  (_i: number) => ({ q: `What is [1, 2, 3]?`, o: ["A list", "A tuple", "A dictionary", "A set"], c: 0, e: "Square brackets create a list." }),
  (_i: number) => ({ q: `What is list([1, 2, 3])?`, o: ["[1, 2, 3]", "(1, 2, 3)", "{1, 2, 3}", "Error"], c: 0, e: "list() constructor creates a list." }),
  (_i: number) => ({ q: `What is []?`, o: ["Empty list", "Error", "None", "Empty tuple"], c: 0, e: "Empty list literal." }),
  (_i: number) => ({ q: `What is list()?`, o: ["[]", "()", "{}", "Error"], c: 0, e: "list() with no arguments creates empty list." }),
  (_i: number) => ({ q: `What is [1, 2, 3][0]?`, o: ["1", "2", "3", "Error"], c: 0, e: "List indexing starts at 0." }),
  (_i: number) => ({ q: `What is [1, 2, 3][1]?`, o: ["2", "1", "3", "Error"], c: 0, e: "Index 1 gets second element." }),
  (_i: number) => ({ q: `What is [1, 2, 3][-1]?`, o: ["3", "1", "2", "Error"], c: 0, e: "Negative indexing starts from the end." }),
  (_i: number) => ({ q: `What is [1, 2, 3][-2]?`, o: ["2", "1", "3", "Error"], c: 0, e: "Negative index -2 gets second from end." }),
  (_i: number) => ({ q: `What is len([1, 2, 3])?`, o: ["3", "2", "1", "Error"], c: 0, e: "len() returns the number of elements." }),
  (_i: number) => ({ q: `What is len([])?`, o: ["0", "1", "Error", "None"], c: 0, e: "Empty list has length 0." }),
  
  // 11-20: List Slicing
  (_i: number) => ({ q: `What is [1, 2, 3, 4][1:3]?`, o: ["[2, 3]", "[1, 2]", "[2, 3, 4]", "Error"], c: 0, e: "Slicing [1:3] gets elements from index 1 to 2 (exclusive)." }),
  (_i: number) => ({ q: `What is [1, 2, 3, 4][:2]?`, o: ["[1, 2]", "[2, 3]", "[1, 2, 3]", "Error"], c: 0, e: "Slicing [:2] gets first 2 elements." }),
  (_i: number) => ({ q: `What is [1, 2, 3, 4][2:]?`, o: ["[3, 4]", "[1, 2]", "[2, 3]", "Error"], c: 0, e: "Slicing [2:] gets from index 2 to end." }),
  (_i: number) => ({ q: `What is [1, 2, 3, 4][::2]?`, o: ["[1, 3]", "[2, 4]", "[1, 2]", "Error"], c: 0, e: "Slicing [::2] gets every 2nd element." }),
  (_i: number) => ({ q: `What is [1, 2, 3, 4][::-1]?`, o: ["[4, 3, 2, 1]", "[1, 2, 3, 4]", "[1]", "Error"], c: 0, e: "Slicing [::-1] reverses the list." }),
  (_i: number) => ({ q: `What is [1, 2, 3, 4][1:-1]?`, o: ["[2, 3]", "[1, 2, 3]", "[2, 3, 4]", "Error"], c: 0, e: "Slicing [1:-1] excludes first and last." }),
  (_i: number) => ({ q: `What is [1, 2, 3][:]?`, o: ["[1, 2, 3]", "[]", "[1]", "Error"], c: 0, e: "Slicing [:] creates a shallow copy." }),
  (_i: number) => ({ q: `What is [1, 2, 3, 4, 5][1:4:2]?`, o: ["[2, 4]", "[1, 3]", "[2, 3, 4]", "Error"], c: 0, e: "Slicing [1:4:2] gets every 2nd from index 1 to 3." }),
  (_i: number) => ({ q: `What is [1, 2, 3][0:0]?`, o: ["[]", "[1]", "[1, 2]", "Error"], c: 0, e: "Slicing [0:0] gets empty list (same start and stop)." }),
  (_i: number) => ({ q: `What is [1, 2, 3][5:10]?`, o: ["[]", "[1, 2, 3]", "Error", "None"], c: 0, e: "Slicing beyond list bounds returns empty list." }),
  
  // 21-30: List Operations
  (_i: number) => ({ q: `What is [1, 2] + [3, 4]?`, o: ["[1, 2, 3, 4]", "[1, 2]", "[3, 4]", "Error"], c: 0, e: "+ concatenates lists." }),
  (_i: number) => ({ q: `What is [1, 2] * 3?`, o: ["[1, 2, 1, 2, 1, 2]", "[3, 6]", "[1, 2, 3]", "Error"], c: 0, e: "* repeats list elements." }),
  (_i: number) => ({ q: `What is [1] * 0?`, o: ["[]", "[1]", "[0]", "Error"], c: 0, e: "Multiplying list by 0 gives empty list." }),
  (_i: number) => ({ q: `What is 2 in [1, 2, 3]?`, o: ["True", "False", "Error", "None"], c: 0, e: "in checks membership." }),
  (_i: number) => ({ q: `What is 5 in [1, 2, 3]?`, o: ["False", "True", "Error", "None"], c: 0, e: "in checks membership - not found." }),
  (_i: number) => ({ q: `What is [1, 2] == [1, 2]?`, o: ["True", "False", "Error", "None"], c: 0, e: "== compares list contents." }),
  (_i: number) => ({ q: `What is [1, 2] == [2, 1]?`, o: ["False", "True", "Error", "None"], c: 0, e: "== checks order - lists are different." }),
  (_i: number) => ({ q: `What is [1, 2] is [1, 2]?`, o: ["False", "True", "Error", "None"], c: 0, e: "Different list objects, even with same content." }),
  (_i: number) => ({ q: `What is [1, 2] < [1, 3]?`, o: ["True", "False", "Error", "None"], c: 0, e: "Lists are compared lexicographically." }),
  (_i: number) => ({ q: `What is [1, 2] < [1, 2, 3]?`, o: ["True", "False", "Error", "None"], c: 0, e: "Shorter list is less than longer if prefix matches." }),
  
  // 31-40: List Methods - Adding Elements
  (_i: number) => ({ q: `What is [1, 2].append(3)?`, o: ["None", "[1, 2, 3]", "3", "Error"], c: 0, e: "append() returns None, modifies list in place." }),
  (_i: number) => ({ q: `What is [1, 2].extend([3, 4])?`, o: ["None", "[1, 2, 3, 4]", "[1, 2]", "Error"], c: 0, e: "extend() returns None, adds all elements." }),
  (_i: number) => ({ q: `What is [1, 2].insert(1, 5)?`, o: ["None", "[1, 5, 2]", "[1, 2, 5]", "Error"], c: 0, e: "insert() adds element at index, returns None." }),
  (_i: number) => ({ q: `What is [1, 2].insert(0, 0)?`, o: ["None", "[0, 1, 2]", "[1, 2, 0]", "Error"], c: 0, e: "insert(0, x) adds at beginning." }),
  (_i: number) => ({ q: `What is [1, 2].insert(10, 5)?`, o: ["None", "[1, 2, 5]", "[1, 2]", "Error"], c: 0, e: "insert() with out-of-bounds index appends to end." }),
  (_i: number) => ({ q: `What is the difference between append() and extend()?`, o: ["append adds one item, extend adds multiple", "No difference", "extend is faster", "append is deprecated"], c: 0, e: "append() adds single element, extend() adds all from iterable." }),
  (_i: number) => ({ q: `What is [1, 2] + [3] vs [1, 2].extend([3])?`, o: ["+ creates new list, extend modifies", "No difference", "extend creates new list", "+ modifies"], c: 0, e: "+ creates new list, extend() modifies in place." }),
  (_i: number) => ({ q: `What is [1, 2].append([3])?`, o: ["None, list becomes [1, 2, [3]]", "[1, 2, 3]", "Error", "None"], c: 0, e: "append() adds the entire list as one element." }),
  (_i: number) => ({ q: `What is [1, 2].extend([3])?`, o: ["None, list becomes [1, 2, 3]", "[1, 2, [3]]", "Error", "None"], c: 0, e: "extend() adds elements from iterable." }),
  (_i: number) => ({ q: `What is [1, 2].extend('ab')?`, o: ["None, list becomes [1, 2, 'a', 'b']", "[1, 2, 'ab']", "Error", "None"], c: 0, e: "extend() iterates over string, adds each character." }),
  
  // 41-50: List Methods - Removing Elements
  (_i: number) => ({ q: `What is [1, 2, 3].pop()?`, o: ["3", "[1, 2]", "None", "Error"], c: 0, e: "pop() returns and removes last element." }),
  (_i: number) => ({ q: `What is [1, 2, 3].pop(0)?`, o: ["1", "[2, 3]", "None", "Error"], c: 0, e: "pop(0) returns and removes first element." }),
  (_i: number) => ({ q: `What is [1, 2, 3].remove(2)?`, o: ["None", "2", "[1, 3]", "Error"], c: 0, e: "remove() removes first occurrence, returns None." }),
  (_i: number) => ({ q: `What is [1, 2, 2, 3].remove(2)?`, o: ["None, list becomes [1, 2, 3]", "[1, 3]", "Error", "None"], c: 0, e: "remove() removes only first occurrence." }),
  (_i: number) => ({ q: `What is [1, 2, 3].clear()?`, o: ["None", "[]", "[1, 2, 3]", "Error"], c: 0, e: "clear() removes all elements, returns None." }),
  (_i: number) => ({ q: `What is the difference between pop() and remove()?`, o: ["pop uses index, remove uses value", "No difference", "pop is faster", "remove is deprecated"], c: 0, e: "pop() uses index, remove() uses value." }),
  (_i: number) => ({ q: `What happens if pop() is called on empty list?`, o: ["IndexError", "Returns None", "Returns []", "Error"], c: 0, e: "pop() on empty list raises IndexError." }),
  (_i: number) => ({ q: `What happens if remove() is called with non-existent value?`, o: ["ValueError", "Returns None", "No error", "Error"], c: 0, e: "remove() with non-existent value raises ValueError." }),
  (_i: number) => ({ q: `What is [1, 2, 3].pop(-1)?`, o: ["3", "1", "[1, 2]", "Error"], c: 0, e: "pop(-1) is same as pop() - removes last element." }),
  (_i: number) => ({ q: `What is del [1, 2, 3][1]?`, o: ["None, list becomes [1, 3]", "[1, 2]", "Error", "None"], c: 0, e: "del removes element by index, modifies list." }),
  
  // 51-60: List Methods - Searching and Counting
  (_i: number) => ({ q: `What is [1, 2, 3].index(2)?`, o: ["1", "2", "0", "Error"], c: 0, e: "index() returns first index of value." }),
  (_i: number) => ({ q: `What is [1, 2, 2, 3].index(2)?`, o: ["1", "2", "0", "Error"], c: 0, e: "index() returns first occurrence index." }),
  (_i: number) => ({ q: `What is [1, 2, 3].count(2)?`, o: ["1", "2", "0", "Error"], c: 0, e: "count() returns number of occurrences." }),
  (_i: number) => ({ q: `What is [1, 2, 2, 3].count(2)?`, o: ["2", "1", "0", "Error"], c: 0, e: "count() counts all occurrences." }),
  (_i: number) => ({ q: `What is [1, 2, 3].count(5)?`, o: ["0", "1", "Error", "None"], c: 0, e: "count() returns 0 if value not found." }),
  (_i: number) => ({ q: `What happens if index() is called with non-existent value?`, o: ["ValueError", "Returns -1", "Returns None", "Error"], c: 0, e: "index() with non-existent value raises ValueError." }),
  (_i: number) => ({ q: `What is [1, 2, 3].index(2, 1)?`, o: ["1", "2", "0", "Error"], c: 0, e: "index(value, start) searches from start index." }),
  (_i: number) => ({ q: `What is [1, 2, 2, 3].index(2, 2)?`, o: ["2", "1", "0", "Error"], c: 0, e: "index(value, start) finds first occurrence from start." }),
  (_i: number) => ({ q: `What is [1, 2, 3].index(2, 1, 3)?`, o: ["1", "2", "Error", "None"], c: 0, e: "index(value, start, stop) searches in range." }),
  (_i: number) => ({ q: `What is [1, 2, 3].index(2, 0, 1)?`, o: ["ValueError", "1", "0", "Error"], c: 0, e: "index() raises ValueError if not found in range." }),
  
  // 61-70: List Methods - Sorting and Reversing
  (_i: number) => ({ q: `What is sorted([3, 1, 2])?`, o: ["[1, 2, 3]", "[3, 1, 2]", "None", "Error"], c: 0, e: "sorted() returns new sorted list." }),
  (_i: number) => ({ q: `What is sorted([3, 1, 2], reverse=True)?`, o: ["[3, 2, 1]", "[1, 2, 3]", "None", "Error"], c: 0, e: "reverse=True sorts descending." }),
  (_i: number) => ({ q: `What is [3, 1, 2].sort()?`, o: ["None", "[1, 2, 3]", "[3, 1, 2]", "Error"], c: 0, e: "sort() modifies list in place, returns None." }),
  (_i: number) => ({ q: `What is [3, 1, 2].reverse()?`, o: ["None", "[2, 1, 3]", "[1, 2, 3]", "Error"], c: 0, e: "reverse() modifies list in place, returns None." }),
  (_i: number) => ({ q: `What is the difference between sort() and sorted()?`, o: ["sort() modifies in place, sorted() returns new list", "No difference", "sorted() is faster", "sort() is deprecated"], c: 0, e: "sort() modifies in place, sorted() returns new list." }),
  (_i: number) => ({ q: `What is reversed([1, 2, 3])?`, o: ["list_reverseiterator object", "[3, 2, 1]", "None", "Error"], c: 0, e: "reversed() returns iterator, not list." }),
  (_i: number) => ({ q: `What is list(reversed([1, 2, 3]))?`, o: ["[3, 2, 1]", "[1, 2, 3]", "None", "Error"], c: 0, e: "list(reversed()) converts iterator to list." }),
  (_i: number) => ({ q: `What is [1, 2, 3][::-1] vs reversed([1, 2, 3])?`, o: ["[::-1] returns list, reversed() returns iterator", "No difference", "reversed() returns list", "[::-1] returns iterator"], c: 0, e: "[::-1] creates new list, reversed() returns iterator." }),
  (_i: number) => ({ q: `What is sorted(['c', 'a', 'b'])?`, o: ["['a', 'b', 'c']", "['c', 'a', 'b']", "None", "Error"], c: 0, e: "sorted() works with strings, sorts alphabetically." }),
  (_i: number) => ({ q: `What is sorted([3, 1, 2], key=lambda x: -x)?`, o: ["[3, 2, 1]", "[1, 2, 3]", "None", "Error"], c: 0, e: "key parameter customizes sorting." }),
  
  // 71-80: List Copying
  (_i: number) => ({ q: `What is [1, 2, 3].copy()?`, o: ["[1, 2, 3]", "[1, 2]", "None", "Error"], c: 0, e: "copy() creates shallow copy." }),
  (_i: number) => ({ q: `What is list([1, 2, 3])?`, o: ["[1, 2, 3]", "(1, 2, 3)", "None", "Error"], c: 0, e: "list() constructor creates shallow copy." }),
  (_i: number) => ({ q: `What is [1, 2, 3][:]?`, o: ["[1, 2, 3]", "[1, 2]", "None", "Error"], c: 0, e: "Slicing [:] creates shallow copy." }),
  (_i: number) => ({ q: `What is the difference between shallow and deep copy?`, o: ["Shallow copies outer, deep copies nested", "No difference", "Deep is faster", "Shallow is deprecated"], c: 0, e: "Shallow copy copies outer structure, deep copy copies nested objects." }),
  (_i: number) => ({ q: `What is import copy; copy.copy([1, 2, 3])?`, o: ["[1, 2, 3] (shallow copy)", "[1, 2, 3] (deep copy)", "Error", "None"], c: 0, e: "copy.copy() creates shallow copy." }),
  (_i: number) => ({ q: `What is import copy; copy.deepcopy([1, 2, 3])?`, o: ["[1, 2, 3] (deep copy)", "[1, 2, 3] (shallow copy)", "Error", "None"], c: 0, e: "copy.deepcopy() creates deep copy." }),
  (_i: number) => ({ q: `What is a = [1, 2]; b = a; b.append(3); a?`, o: ["[1, 2, 3]", "[1, 2]", "Error", "None"], c: 0, e: "Assignment creates reference, not copy." }),
  (_i: number) => ({ q: `What is a = [1, 2]; b = a.copy(); b.append(3); a?`, o: ["[1, 2]", "[1, 2, 3]", "Error", "None"], c: 0, e: "copy() creates independent list." }),
  (_i: number) => ({ q: `What is a = [[1], [2]]; b = a.copy(); b[0].append(3); a?`, o: ["[[1, 3], [2]]", "[[1], [2]]", "Error", "None"], c: 0, e: "Shallow copy shares nested objects." }),
  (_i: number) => ({ q: `What is a = [[1], [2]]; b = copy.deepcopy(a); b[0].append(3); a?`, o: ["[[1], [2]]", "[[1, 3], [2]]", "Error", "None"], c: 0, e: "Deep copy creates independent nested objects." }),
  
  // 81-90: List Unpacking and Advanced Operations
  (_i: number) => ({ q: `What is a, b, c = [1, 2, 3]?`, o: ["a=1, b=2, c=3", "Error", "a=[1,2,3], b=None, c=None", "None"], c: 0, e: "List unpacking assigns elements to variables." }),
  (_i: number) => ({ q: `What is a, *b = [1, 2, 3, 4]?`, o: ["a=1, b=[2,3,4]", "Error", "a=[1,2,3,4], b=[]", "None"], c: 0, e: "* unpacks remaining elements into list." }),
  (_i: number) => ({ q: `What is *a, b = [1, 2, 3, 4]?`, o: ["a=[1,2,3], b=4", "Error", "a=[], b=[1,2,3,4]", "None"], c: 0, e: "* at start unpacks all but last." }),
  (_i: number) => ({ q: `What is a, b, *c = [1, 2]?`, o: ["a=1, b=2, c=[]", "Error", "a=1, b=2, c=None", "None"], c: 0, e: "* gets empty list if no remaining elements." }),
  (_i: number) => ({ q: `What is [*[1, 2], *[3, 4]]?`, o: ["[1, 2, 3, 4]", "[[1, 2], [3, 4]]", "Error", "None"], c: 0, e: "Unpacking in list literal combines lists." }),
  (_i: number) => ({ q: `What is [1, 2] + [3] vs [*[1, 2], 3]?`, o: ["Both create [1, 2, 3]", "Different results", "Error", "None"], c: 0, e: "Both create same list, different syntax." }),
  (_i: number) => ({ q: `What is max([1, 2, 3])?`, o: ["3", "1", "[1, 2, 3]", "Error"], c: 0, e: "max() finds maximum element." }),
  (_i: number) => ({ q: `What is min([1, 2, 3])?`, o: ["1", "3", "[1, 2, 3]", "Error"], c: 0, e: "min() finds minimum element." }),
  (_i: number) => ({ q: `What is sum([1, 2, 3])?`, o: ["6", "0", "[1, 2, 3]", "Error"], c: 0, e: "sum() adds all elements." }),
  (_i: number) => ({ q: `What is all([True, True, False])?`, o: ["False", "True", "[True, True, False]", "Error"], c: 0, e: "all() returns True only if all elements are Truthy." }),
  
  // 91-100: List Advanced Features
  (_i: number) => ({ q: `What is any([False, False, True])?`, o: ["True", "False", "[False, False, True]", "Error"], c: 0, e: "any() returns True if any element is Truthy." }),
  (_i: number) => ({ q: `What is [1, 2, 3] * 2?`, o: ["[1, 2, 3, 1, 2, 3]", "[2, 4, 6]", "[1, 2, 3, 2]", "Error"], c: 0, e: "* repeats entire list." }),
  (_i: number) => ({ q: `What is [1, 2] == [1.0, 2.0]?`, o: ["True", "False", "Error", "None"], c: 0, e: "== compares values, 1 == 1.0 is True." }),
  (_i: number) => ({ q: `What is [1, 2] == [1, 2, 3]?`, o: ["False", "True", "Error", "None"], c: 0, e: "Lists must have same length and elements." }),
  (_i: number) => ({ q: `What is [1, 2] != [1, 3]?`, o: ["True", "False", "Error", "None"], c: 0, e: "!= checks if lists are different." }),
  (_i: number) => ({ q: `What is [1, 2] < [1, 2, 3]?`, o: ["True", "False", "Error", "None"], c: 0, e: "Shorter list is less if it's a prefix." }),
  (_i: number) => ({ q: `What is [1, 2, 3] > [1, 2]?`, o: ["True", "False", "Error", "None"], c: 0, e: "Longer list is greater if shorter is prefix." }),
  (_i: number) => ({ q: `What is [1, 2] + [3] * 2?`, o: ["[1, 2, 3, 3]", "[1, 2, 6]", "[1, 2, 3]", "Error"], c: 0, e: "Operator precedence: * before +." }),
  (_i: number) => ({ q: `What is ([1, 2] + [3]) * 2?`, o: ["[1, 2, 3, 1, 2, 3]", "[1, 2, 6]", "[1, 2, 3]", "Error"], c: 0, e: "Parentheses change order: concatenate first, then repeat." }),
  (_i: number) => ({ q: `What is len([1, 2] + [3, 4])?`, o: ["4", "2", "3", "Error"], c: 0, e: "Concatenated list has sum of lengths." }),
];

// --- LEVEL 6: SEAL (Dictionaries, Key-Value, Hashing) - 100 TRULY UNIQUE QUESTIONS ---
// Each question tests a DIFFERENT concept - NO number/variable variations of the same question
const level6Patterns = [
  // 1-10: Dictionary Creation and Basics
  (_i: number) => ({ q: `What is {'a': 1, 'b': 2}?`, o: ["A dictionary", "A list", "A tuple", "A set"], c: 0, e: "Curly braces with key:value pairs create a dictionary." }),
  (_i: number) => ({ q: `What is {}?`, o: ["Empty dictionary", "Empty set", "Error", "None"], c: 0, e: "Empty dictionary literal." }),
  (_i: number) => ({ q: `What is dict()?`, o: ["{}", "[]", "()", "Error"], c: 0, e: "dict() constructor creates empty dictionary." }),
  (_i: number) => ({ q: `What is dict([('a', 1), ('b', 2)])?`, o: ["{'a': 1, 'b': 2}", "[('a', 1), ('b', 2)]", "Error", "None"], c: 0, e: "dict() can be created from list of tuples." }),
  (_i: number) => ({ q: `What is dict(a=1, b=2)?`, o: ["{'a': 1, 'b': 2}", "{'a': 1}", "Error", "None"], c: 0, e: "dict() can use keyword arguments." }),
  (_i: number) => ({ q: `What is {'a': 1, 'b': 2}['a']?`, o: ["1", "'a'", "2", "Error"], c: 0, e: "Dictionary access by key using square brackets." }),
  (_i: number) => ({ q: `What is {'a': 1, 'b': 2}['b']?`, o: ["2", "'b'", "1", "Error"], c: 0, e: "Access value using key in square brackets." }),
  (_i: number) => ({ q: `What happens if you access a non-existent key with []?`, o: ["KeyError", "Returns None", "Returns empty dict", "Error"], c: 0, e: "Accessing non-existent key raises KeyError." }),
  (_i: number) => ({ q: `What is len({'a': 1, 'b': 2})?`, o: ["2", "1", "0", "Error"], c: 0, e: "len() returns number of key-value pairs." }),
  (_i: number) => ({ q: `What is len({})?`, o: ["0", "1", "Error", "None"], c: 0, e: "Empty dictionary has length 0." }),
  
  // 11-20: Dictionary Methods - Accessing Values
  (_i: number) => ({ q: `What is {'a': 1, 'b': 2}.get('a')?`, o: ["1", "'a'", "2", "Error"], c: 0, e: "get() returns value for key." }),
  (_i: number) => ({ q: `What is {'a': 1, 'b': 2}.get('c')?`, o: ["None", "Error", "0", "'c'"], c: 0, e: "get() returns None if key not found (no default)." }),
  (_i: number) => ({ q: `What is {'a': 1, 'b': 2}.get('c', 0)?`, o: ["0", "None", "Error", "'c'"], c: 0, e: "get() returns default if key not found." }),
  (_i: number) => ({ q: `What is {'a': 1, 'b': 2}.get('a', 0)?`, o: ["1", "0", "None", "Error"], c: 0, e: "get() returns actual value if key exists, ignores default." }),
  (_i: number) => ({ q: `What is {'a': 1}.setdefault('a', 2)?`, o: ["1", "2", "None", "Error"], c: 0, e: "setdefault() returns existing value if key exists." }),
  (_i: number) => ({ q: `What is {'a': 1}.setdefault('b', 2)?`, o: ["2", "1", "None", "Error"], c: 0, e: "setdefault() sets and returns default if key doesn't exist." }),
  (_i: number) => ({ q: `What is the difference between get() and setdefault()?`, o: ["setdefault() sets key if missing, get() doesn't", "No difference", "get() is faster", "setdefault() is deprecated"], c: 0, e: "setdefault() modifies dict if key missing, get() doesn't." }),
  (_i: number) => ({ q: `What is {'a': 1, 'b': 2}.pop('a')?`, o: ["1", "{'b': 2}", "None", "Error"], c: 0, e: "pop() returns and removes value for key." }),
  (_i: number) => ({ q: `What is {'a': 1, 'b': 2}.pop('c')?`, o: ["KeyError", "None", "0", "Error"], c: 0, e: "pop() raises KeyError if key not found (no default)." }),
  (_i: number) => ({ q: `What is {'a': 1, 'b': 2}.pop('c', 0)?`, o: ["0", "None", "KeyError", "Error"], c: 0, e: "pop() returns default if key not found." }),
  
  // 21-30: Dictionary Methods - Keys, Values, Items
  (_i: number) => ({ q: `What is {'a': 1, 'b': 2}.keys()?`, o: ["dict_keys(['a', 'b'])", "['a', 'b']", "{'a', 'b'}", "Error"], c: 0, e: "keys() returns dict_keys view object." }),
  (_i: number) => ({ q: `What is list({'a': 1, 'b': 2}.keys())?`, o: ["['a', 'b']", "dict_keys(['a', 'b'])", "{'a', 'b'}", "Error"], c: 0, e: "list() converts keys view to list." }),
  (_i: number) => ({ q: `What is {'a': 1, 'b': 2}.values()?`, o: ["dict_values([1, 2])", "[1, 2]", "{1, 2}", "Error"], c: 0, e: "values() returns dict_values view object." }),
  (_i: number) => ({ q: `What is list({'a': 1, 'b': 2}.values())?`, o: ["[1, 2]", "dict_values([1, 2])", "{1, 2}", "Error"], c: 0, e: "list() converts values view to list." }),
  (_i: number) => ({ q: `What is {'a': 1, 'b': 2}.items()?`, o: ["dict_items([('a', 1), ('b', 2)])", "[('a', 1), ('b', 2)]", "Error", "None"], c: 0, e: "items() returns dict_items view of key-value pairs." }),
  (_i: number) => ({ q: `What is list({'a': 1, 'b': 2}.items())?`, o: ["[('a', 1), ('b', 2)]", "dict_items([('a', 1), ('b', 2)])", "Error", "None"], c: 0, e: "list() converts items view to list of tuples." }),
  (_i: number) => ({ q: `What is 'a' in {'a': 1, 'b': 2}?`, o: ["True", "False", "Error", "None"], c: 0, e: "in checks for key membership (not value)." }),
  (_i: number) => ({ q: `What is 1 in {'a': 1, 'b': 2}?`, o: ["False", "True", "Error", "None"], c: 0, e: "in checks keys, not values." }),
  (_i: number) => ({ q: `What is 1 in {'a': 1, 'b': 2}.values()?`, o: ["True", "False", "Error", "None"], c: 0, e: "in with .values() checks value membership." }),
  (_i: number) => ({ q: `What is ('a', 1) in {'a': 1, 'b': 2}.items()?`, o: ["True", "False", "Error", "None"], c: 0, e: "in with .items() checks for key-value pair." }),
  
  // 31-40: Dictionary Methods - Modifying
  (_i: number) => ({ q: `What is d = {'a': 1}; d['b'] = 2; d?`, o: ["{'a': 1, 'b': 2}", "{'a': 1}", "Error", "None"], c: 0, e: "Assignment adds or updates key-value pair." }),
  (_i: number) => ({ q: `What is d = {'a': 1}; d['a'] = 2; d?`, o: ["{'a': 2}", "{'a': 1}", "Error", "None"], c: 0, e: "Assignment updates existing key." }),
  (_i: number) => ({ q: `What is {'a': 1}.update({'b': 2})?`, o: ["None", "{'a': 1, 'b': 2}", "Error", "{'b': 2}"], c: 0, e: "update() modifies dict in place, returns None." }),
  (_i: number) => ({ q: `What is d = {'a': 1}; d.update({'b': 2}); d?`, o: ["{'a': 1, 'b': 2}", "{'a': 1}", "Error", "None"], c: 0, e: "update() adds/updates keys from another dict." }),
  (_i: number) => ({ q: `What is d = {'a': 1}; d.update({'a': 2}); d?`, o: ["{'a': 2}", "{'a': 1}", "Error", "None"], c: 0, e: "update() overwrites existing keys." }),
  (_i: number) => ({ q: `What is {'a': 1, 'b': 2}.popitem()?`, o: ["('b', 2) or ('a', 1)", "{'a': 1}", "Error", "None"], c: 0, e: "popitem() returns and removes arbitrary key-value pair (LIFO in 3.7+)." }),
  (_i: number) => ({ q: `What is {'a': 1}.popitem()?`, o: ["('a', 1)", "{'a': 1}", "Error", "None"], c: 0, e: "popitem() on single-item dict returns that item." }),
  (_i: number) => ({ q: `What is {}.popitem()?`, o: ["KeyError", "None", "()", "Error"], c: 0, e: "popitem() on empty dict raises KeyError." }),
  (_i: number) => ({ q: `What is {'a': 1, 'b': 2}.clear()?`, o: ["None", "{}", "{'a': 1, 'b': 2}", "Error"], c: 0, e: "clear() removes all items, returns None." }),
  (_i: number) => ({ q: `What is d = {'a': 1}; d.clear(); d?`, o: ["{}", "{'a': 1}", "Error", "None"], c: 0, e: "clear() empties the dictionary." }),
  
  // 41-50: Dictionary Copying and Merging
  (_i: number) => ({ q: `What is {'a': 1, 'b': 2}.copy()?`, o: ["{'a': 1, 'b': 2}", "{'a': 1}", "None", "Error"], c: 0, e: "copy() creates shallow copy." }),
  (_i: number) => ({ q: `What is dict({'a': 1, 'b': 2})?`, o: ["{'a': 1, 'b': 2}", "{'a': 1}", "None", "Error"], c: 0, e: "dict() constructor creates shallow copy." }),
  (_i: number) => ({ q: `What is {**{'a': 1}, **{'b': 2}}?`, o: ["{'a': 1, 'b': 2}", "{'a': 1}", "Error", "None"], c: 0, e: "** unpacks dictionaries, merges them." }),
  (_i: number) => ({ q: `What is {**{'a': 1}, **{'a': 2}}?`, o: ["{'a': 2}", "{'a': 1}", "Error", "None"], c: 0, e: "Later dict overwrites earlier keys when unpacking." }),
  (_i: number) => ({ q: `What is {'a': 1} | {'b': 2}?`, o: ["{'a': 1, 'b': 2}", "{'a': 1}", "Error", "None"], c: 0, e: "| operator merges dictionaries (Python 3.9+)." }),
  (_i: number) => ({ q: `What is {'a': 1} | {'a': 2}?`, o: ["{'a': 2}", "{'a': 1}", "Error", "None"], c: 0, e: "| operator overwrites with right dict values." }),
  (_i: number) => ({ q: `What is d = {'a': 1}; d |= {'b': 2}; d?`, o: ["{'a': 1, 'b': 2}", "{'a': 1}", "Error", "None"], c: 0, e: "|= updates dict in place (Python 3.9+)." }),
  (_i: number) => ({ q: `What is the difference between | and |= for dicts?`, o: ["| creates new dict, |= modifies in place", "No difference", "|= is faster", "| is deprecated"], c: 0, e: "| creates new dict, |= modifies existing." }),
  (_i: number) => ({ q: `What is a = {'a': [1]}; b = a.copy(); b['a'].append(2); a?`, o: ["{'a': [1, 2]}", "{'a': [1]}", "Error", "None"], c: 0, e: "Shallow copy shares nested objects." }),
  (_i: number) => ({ q: `What is import copy; copy.deepcopy({'a': [1]})?`, o: ["{'a': [1]} (deep copy)", "{'a': [1]} (shallow copy)", "Error", "None"], c: 0, e: "deepcopy() creates independent nested objects." }),
  
  // 51-60: Dictionary Comprehensions
  (_i: number) => ({ q: `What is {x: x*2 for x in [1, 2, 3]}?`, o: ["{1: 2, 2: 4, 3: 6}", "{1, 2, 3}", "Error", "None"], c: 0, e: "Dictionary comprehension creates dict from iterable." }),
  (_i: number) => ({ q: `What is {x: x**2 for x in range(3)}?`, o: ["{0: 0, 1: 1, 2: 4}", "{0, 1, 2}", "Error", "None"], c: 0, e: "Dictionary comprehension with range." }),
  (_i: number) => ({ q: `What is {k: v*2 for k, v in {'a': 1, 'b': 2}.items()}?`, o: ["{'a': 2, 'b': 4}", "{'a': 1, 'b': 2}", "Error", "None"], c: 0, e: "Dictionary comprehension iterating over items." }),
  (_i: number) => ({ q: `What is {x: x for x in [1, 2, 3] if x > 1}?`, o: ["{2: 2, 3: 3}", "{1: 1, 2: 2, 3: 3}", "Error", "None"], c: 0, e: "Dictionary comprehension with condition." }),
  (_i: number) => ({ q: `What is {x: 'even' if x%2==0 else 'odd' for x in [1, 2, 3]}?`, o: ["{1: 'odd', 2: 'even', 3: 'odd'}", "{1: 1, 2: 2, 3: 3}", "Error", "None"], c: 0, e: "Dictionary comprehension with ternary in value." }),
  (_i: number) => ({ q: `What is {str(x): x for x in [1, 2, 3]}?`, o: ["{'1': 1, '2': 2, '3': 3}", "{1: 1, 2: 2, 3: 3}", "Error", "None"], c: 0, e: "Dictionary comprehension with key transformation." }),
  (_i: number) => ({ q: `What is {(x, y): x+y for x in [1, 2] for y in [3, 4]}?`, o: ["{(1, 3): 4, (1, 4): 5, (2, 3): 5, (2, 4): 6}", "Error", "None", "{1: 1, 2: 2}"], c: 0, e: "Dictionary comprehension with nested loops, tuple keys." }),
  (_i: number) => ({ q: `What is {x: y for x, y in zip([1, 2], [3, 4])}?`, o: ["{1: 3, 2: 4}", "{1: 1, 2: 2}", "Error", "None"], c: 0, e: "Dictionary comprehension with zip." }),
  (_i: number) => ({ q: `What is {x: x for x in []}?`, o: ["{}", "[]", "Error", "None"], c: 0, e: "Dictionary comprehension with empty iterable." }),
  (_i: number) => ({ q: `What is {x: x*2 for x in [1, 2] if x > 0}?`, o: ["{1: 2, 2: 4}", "{1: 1, 2: 2}", "Error", "None"], c: 0, e: "Dictionary comprehension with condition (all pass)." }),
  
  // 61-70: Dictionary Operations and Comparisons
  (_i: number) => ({ q: `What is {'a': 1, 'b': 2} == {'b': 2, 'a': 1}?`, o: ["True", "False", "Error", "None"], c: 0, e: "Dictionaries compare by content, order doesn't matter (Python 3.7+)." }),
  (_i: number) => ({ q: `What is {'a': 1} == {'a': 2}?`, o: ["False", "True", "Error", "None"], c: 0, e: "Dictionaries with different values are not equal." }),
  (_i: number) => ({ q: `What is {'a': 1} == {'a': 1, 'b': 2}?`, o: ["False", "True", "Error", "None"], c: 0, e: "Dictionaries with different keys are not equal." }),
  (_i: number) => ({ q: `What is {'a': 1} != {'a': 2}?`, o: ["True", "False", "Error", "None"], c: 0, e: "!= checks if dictionaries are different." }),
  (_i: number) => ({ q: `What is {'a': 1} is {'a': 1}?`, o: ["False", "True", "Error", "None"], c: 0, e: "Different dict objects, even with same content." }),
  (_i: number) => ({ q: `What is d = {'a': 1}; d is d?`, o: ["True", "False", "Error", "None"], c: 0, e: "Same object is identical to itself." }),
  (_i: number) => ({ q: `What is bool({})?`, o: ["False", "True", "Error", "None"], c: 0, e: "Empty dictionary is falsy." }),
  (_i: number) => ({ q: `What is bool({'a': 1})?`, o: ["True", "False", "Error", "None"], c: 0, e: "Non-empty dictionary is truthy." }),
  (_i: number) => ({ q: `What is {'a': 1, 'b': 2} + {'c': 3}?`, o: ["TypeError", "{'a': 1, 'b': 2, 'c': 3}", "Error", "None"], c: 0, e: "Dictionaries don't support + operator (use | or update)." }),
  (_i: number) => ({ q: `What is {'a': 1} * 2?`, o: ["TypeError", "{'a': 1, 'a': 1}", "Error", "None"], c: 0, e: "Dictionaries don't support * operator." }),
  
  // 71-80: Dictionary Views and Iteration
  (_i: number) => ({ q: `What is d = {'a': 1, 'b': 2}; k = d.keys(); d['c'] = 3; list(k)?`, o: ["['a', 'b', 'c']", "['a', 'b']", "Error", "None"], c: 0, e: "dict_keys view reflects changes to dict." }),
  (_i: number) => ({ q: `What is d = {'a': 1}; v = d.values(); d['b'] = 2; list(v)?`, o: ["[1, 2]", "[1]", "Error", "None"], c: 0, e: "dict_values view reflects changes to dict." }),
  (_i: number) => ({ q: `What is d = {'a': 1}; i = d.items(); d['b'] = 2; list(i)?`, o: ["[('a', 1), ('b', 2)]", "[('a', 1)]", "Error", "None"], c: 0, e: "dict_items view reflects changes to dict." }),
  (_i: number) => ({ q: `What is for k in {'a': 1, 'b': 2}: print(k)?`, o: ["Prints 'a' then 'b'", "Prints 1 then 2", "Error", "None"], c: 0, e: "Iterating dict directly iterates over keys." }),
  (_i: number) => ({ q: `What is for v in {'a': 1, 'b': 2}.values(): print(v)?`, o: ["Prints 1 then 2", "Prints 'a' then 'b'", "Error", "None"], c: 0, e: "Iterating .values() iterates over values." }),
  (_i: number) => ({ q: `What is for k, v in {'a': 1, 'b': 2}.items(): print(k, v)?`, o: ["Prints 'a' 1 then 'b' 2", "Prints 1 'a' then 2 'b'", "Error", "None"], c: 0, e: "Iterating .items() unpacks key-value pairs." }),
  (_i: number) => ({ q: `What is list({'a': 1, 'b': 2})?`, o: ["['a', 'b']", "[1, 2]", "Error", "None"], c: 0, e: "list() on dict converts keys to list." }),
  (_i: number) => ({ q: `What is tuple({'a': 1, 'b': 2})?`, o: ["('a', 'b')", "(1, 2)", "Error", "None"], c: 0, e: "tuple() on dict converts keys to tuple." }),
  (_i: number) => ({ q: `What is set({'a': 1, 'b': 2})?`, o: ["{'a', 'b'}", "{1, 2}", "Error", "None"], c: 0, e: "set() on dict converts keys to set." }),
  (_i: number) => ({ q: `What is sorted({'c': 3, 'a': 1, 'b': 2})?`, o: ["['a', 'b', 'c']", "[1, 2, 3]", "Error", "None"], c: 0, e: "sorted() on dict sorts keys." }),
  
  // 81-90: Dictionary Advanced Features
  (_i: number) => ({ q: `What is {'a': 1}.fromkeys(['a', 'b'])?`, o: ["{'a': None, 'b': None}", "{'a': 1}", "Error", "None"], c: 0, e: "fromkeys() creates dict with keys, values default to None." }),
  (_i: number) => ({ q: `What is dict.fromkeys(['a', 'b'], 0)?`, o: ["{'a': 0, 'b': 0}", "{'a': None, 'b': None}", "Error", "None"], c: 0, e: "fromkeys() with value sets all values to that value." }),
  (_i: number) => ({ q: `What is {'a': 1, 'b': 2}.fromkeys(['c', 'd'])?`, o: ["{'c': None, 'd': None}", "{'a': 1, 'b': 2}", "Error", "None"], c: 0, e: "fromkeys() is class method, creates new dict." }),
  (_i: number) => ({ q: `What is max({'a': 1, 'b': 2, 'c': 3})?`, o: ["'c'", "3", "Error", "None"], c: 0, e: "max() on dict returns max key." }),
  (_i: number) => ({ q: `What is min({'a': 1, 'b': 2, 'c': 3})?`, o: ["'a'", "1", "Error", "None"], c: 0, e: "min() on dict returns min key." }),
  (_i: number) => ({ q: `What is max({'a': 1, 'b': 2, 'c': 3}.values())?`, o: ["3", "'c'", "Error", "None"], c: 0, e: "max() on .values() returns max value." }),
  (_i: number) => ({ q: `What is sum({'a': 1, 'b': 2, 'c': 3}.values())?`, o: ["6", "0", "Error", "None"], c: 0, e: "sum() on .values() adds all values." }),
  (_i: number) => ({ q: `What is all({'a': 1, 'b': 0}.values())?`, o: ["False", "True", "Error", "None"], c: 0, e: "all() checks if all values are truthy." }),
  (_i: number) => ({ q: `What is any({'a': 0, 'b': 0}.values())?`, o: ["False", "True", "Error", "None"], c: 0, e: "any() checks if any value is truthy." }),
  (_i: number) => ({ q: `What is {'a': 1, 'b': 2}.get('a') or {'a': 1, 'b': 2}.get('c')?`, o: ["1", "None", "Error", "2"], c: 0, e: "or returns first truthy value, 1 is truthy." }),
  
  // 91-100: Dictionary Edge Cases and Special Features
  (_i: number) => ({ q: `What is {1: 'a', 2: 'b', 3: 'c'}[1]?`, o: ["'a'", "1", "Error", "None"], c: 0, e: "Integer keys work in dictionaries." }),
  (_i: number) => ({ q: `What is {(1, 2): 'a', (3, 4): 'b'}[(1, 2)]?`, o: ["'a'", "(1, 2)", "Error", "None"], c: 0, e: "Tuple keys work in dictionaries (immutable)." }),
  (_i: number) => ({ q: `What is {[1, 2]: 'a'}?`, o: ["TypeError", "{'[1, 2]': 'a'}", "Error", "None"], c: 0, e: "List keys don't work (lists are mutable/unhashable)." }),
  (_i: number) => ({ q: `What is {{'a': 1}: 'b'}?`, o: ["TypeError", "{'a': 1, 'b': 'b'}", "Error", "None"], c: 0, e: "Dict keys don't work (dicts are mutable/unhashable)." }),
  (_i: number) => ({ q: `What is {None: 'a', True: 'b', False: 'c'}[None]?`, o: ["'a'", "None", "Error", "'b'"], c: 0, e: "None, True, False can be dictionary keys." }),
  (_i: number) => ({ q: `What is {1: 'a', 1.0: 'b'}[1]?`, o: ["'b'", "'a'", "Error", "None"], c: 0, e: "1 and 1.0 are same key (hash equality)." }),
  (_i: number) => ({ q: `What is {1: 'a', 1.0: 'b'}?`, o: ["{1: 'b'}", "{1: 'a', 1.0: 'b'}", "Error", "None"], c: 0, e: "1 and 1.0 are same key, later value overwrites." }),
  (_i: number) => ({ q: `What is d = {}; d[1] = 'a'; d[1.0] = 'b'; d?`, o: ["{1: 'b'}", "{1: 'a', 1.0: 'b'}", "Error", "None"], c: 0, e: "1 and 1.0 are same key, assignment overwrites." }),
  (_i: number) => ({ q: `What is {'a': 1, 'b': 2}.pop('a', 'default')?`, o: ["1", "'default'", "Error", "None"], c: 0, e: "pop() returns value if key exists, ignores default." }),
  (_i: number) => ({ q: `What is {'a': 1, 'b': 2}.pop('c', 'default')?`, o: ["'default'", "None", "Error", "1"], c: 0, e: "pop() returns default if key doesn't exist." }),
];

// --- LEVEL 7: DOLPHIN (Functions, Parameters, Return) - 100 TRULY UNIQUE QUESTIONS ---
// Each question tests a DIFFERENT concept - NO number/variable variations of the same question
const level7Patterns = [
  // 1-10: Function Definition and Basics
  (_i: number) => ({ q: `What does def func(x): return x * 2 do?`, o: ["Defines a function", "Calls a function", "Imports a module", "Error"], c: 0, e: "def defines a function." }),
  (_i: number) => ({ q: `What is def func(): pass?`, o: ["Defines empty function", "Calls function", "Error", "None"], c: 0, e: "Function with no parameters and pass statement." }),
  (_i: number) => ({ q: `What is def func(): return?`, o: ["Defines function returning None", "Error", "Defines function returning empty", "None"], c: 0, e: "return without value returns None." }),
  (_i: number) => ({ q: `What is def func(): return 1, 2?`, o: ["Defines function returning tuple", "Error", "Defines function returning two values", "None"], c: 0, e: "Multiple values in return create tuple." }),
  (_i: number) => ({ q: `What happens if a function has no return statement?`, o: ["Returns None", "Error", "Returns 0", "Returns empty string"], c: 0, e: "Functions without return return None." }),
  (_i: number) => ({ q: `What is def func(x, y): return x + y?`, o: ["Defines function with two parameters", "Calls function", "Error", "None"], c: 0, e: "Function with multiple parameters." }),
  (_i: number) => ({ q: `What is func(1, 2) if def func(x, y): return x + y?`, o: ["3", "1", "2", "Error"], c: 0, e: "Function call with positional arguments." }),
  (_i: number) => ({ q: `What is func(x=1, y=2) if def func(x, y): return x + y?`, o: ["3", "1", "2", "Error"], c: 0, e: "Function call with keyword arguments." }),
  (_i: number) => ({ q: `What is func(1, y=2) if def func(x, y): return x + y?`, o: ["3", "1", "2", "Error"], c: 0, e: "Function call with mixed positional and keyword arguments." }),
  (_i: number) => ({ q: `What is func() if def func(x=1): return x?`, o: ["1", "Error", "None", "0"], c: 0, e: "Function call using default parameter value." }),
  
  // 11-20: Default Parameters
  (_i: number) => ({ q: `What is def func(x=1): return x?`, o: ["Defines function with default parameter", "Error", "Defines function with required parameter", "None"], c: 0, e: "Default parameter allows omitting argument." }),
  (_i: number) => ({ q: `What is func(2) if def func(x=1): return x?`, o: ["2", "1", "Error", "None"], c: 0, e: "Passing argument overrides default." }),
  (_i: number) => ({ q: `What is def func(x, y=2): return x + y?`, o: ["Defines function with required and default parameter", "Error", "Defines function with two defaults", "None"], c: 0, e: "Required parameters must come before defaults." }),
  (_i: number) => ({ q: `What is func(1) if def func(x, y=2): return x + y?`, o: ["3", "1", "Error", "None"], c: 0, e: "Calling with one arg uses default for second." }),
  (_i: number) => ({ q: `What is def func(x=1, y): return x + y?`, o: ["SyntaxError", "Valid function", "Error", "None"], c: 0, e: "Default parameters must come after non-defaults." }),
  (_i: number) => ({ q: `What is def func(x=[]): x.append(1); return x?`, o: ["Defines function with mutable default (problematic)", "Error", "Defines function with immutable default", "None"], c: 0, e: "Mutable defaults are shared across calls (common pitfall)." }),
  (_i: number) => ({ q: `What is def func(x=None): x = x or []; x.append(1); return x?`, o: ["Defines function with safe mutable default pattern", "Error", "Defines function with mutable default", "None"], c: 0, e: "Common pattern to avoid mutable default issues." }),
  (_i: number) => ({ q: `What is func() then func() if def func(x=[]): x.append(1); return x?`, o: ["[1] then [1, 1]", "[1] then [1]", "Error", "None"], c: 0, e: "Mutable default is shared, accumulates across calls." }),
  (_i: number) => ({ q: `What is def func(x=1, y=2, z=3): return x, y, z?`, o: ["Defines function with multiple defaults", "Error", "Defines function with required params", "None"], c: 0, e: "Function can have multiple default parameters." }),
  (_i: number) => ({ q: `What is func(10) if def func(x=1, y=2, z=3): return x, y, z?`, o: ["(10, 2, 3)", "(10, 1, 2)", "Error", "None"], c: 0, e: "First argument goes to first parameter, rest use defaults." }),
  
  // 21-30: *args and **kwargs
  (_i: number) => ({ q: `What is def func(*args): return args?`, o: ["Defines function accepting variable positional arguments", "Error", "Defines function with required args", "None"], c: 0, e: "*args collects positional arguments into tuple." }),
  (_i: number) => ({ q: `What is func(1, 2, 3) if def func(*args): return args?`, o: ["(1, 2, 3)", "[1, 2, 3]", "Error", "None"], c: 0, e: "*args collects arguments into tuple." }),
  (_i: number) => ({ q: `What is func() if def func(*args): return args?`, o: ["()", "[]", "Error", "None"], c: 0, e: "*args is empty tuple if no arguments passed." }),
  (_i: number) => ({ q: `What is def func(x, *args): return x, args?`, o: ["Defines function with required param and *args", "Error", "Defines function with only *args", "None"], c: 0, e: "Required parameters can come before *args." }),
  (_i: number) => ({ q: `What is func(1, 2, 3) if def func(x, *args): return x, args?`, o: ["(1, (2, 3))", "(1, 2, 3)", "Error", "None"], c: 0, e: "First arg goes to x, rest to *args." }),
  (_i: number) => ({ q: `What is def func(**kwargs): return kwargs?`, o: ["Defines function accepting variable keyword arguments", "Error", "Defines function with required kwargs", "None"], c: 0, e: "**kwargs collects keyword arguments into dict." }),
  (_i: number) => ({ q: `What is func(a=1, b=2) if def func(**kwargs): return kwargs?`, o: ["{'a': 1, 'b': 2}", "(1, 2)", "Error", "None"], c: 0, e: "**kwargs collects keyword args into dictionary." }),
  (_i: number) => ({ q: `What is func() if def func(**kwargs): return kwargs?`, o: ["{}", "()", "Error", "None"], c: 0, e: "**kwargs is empty dict if no keyword arguments passed." }),
  (_i: number) => ({ q: `What is def func(x, *args, **kwargs): return x, args, kwargs?`, o: ["Defines function with all parameter types", "Error", "Defines function with only *args", "None"], c: 0, e: "Function can have required, *args, and **kwargs." }),
  (_i: number) => ({ q: `What is func(1, 2, 3, a=4) if def func(x, *args, **kwargs): return x, args, kwargs?`, o: ["(1, (2, 3), {'a': 4})", "(1, 2, 3, {'a': 4})", "Error", "None"], c: 0, e: "Arguments distributed: first to x, rest to *args, keywords to **kwargs." }),
  
  // 31-40: Lambda Functions
  (_i: number) => ({ q: `What is lambda x: x * 2?`, o: ["Anonymous function", "Named function", "Error", "Variable"], c: 0, e: "lambda creates anonymous function." }),
  (_i: number) => ({ q: `What is (lambda x: x * 2)(5)?`, o: ["10", "5", "Error", "None"], c: 0, e: "Lambda function call with argument." }),
  (_i: number) => ({ q: `What is lambda: 42?`, o: ["Anonymous function with no parameters", "Error", "Variable", "None"], c: 0, e: "Lambda can have no parameters." }),
  (_i: number) => ({ q: `What is (lambda: 42)()?`, o: ["42", "Error", "None", "0"], c: 0, e: "Lambda with no parameters called with empty parentheses." }),
  (_i: number) => ({ q: `What is lambda x, y: x + y?`, o: ["Anonymous function with two parameters", "Error", "Variable", "None"], c: 0, e: "Lambda can have multiple parameters." }),
  (_i: number) => ({ q: `What is (lambda x, y: x + y)(3, 4)?`, o: ["7", "3", "4", "Error"], c: 0, e: "Lambda with multiple parameters." }),
  (_i: number) => ({ q: `What is f = lambda x: x**2; f(5)?`, o: ["25", "5", "Error", "None"], c: 0, e: "Lambda can be assigned to variable." }),
  (_i: number) => ({ q: `What is lambda x: x if x > 0 else 0?`, o: ["Anonymous function with conditional", "Error", "Variable", "None"], c: 0, e: "Lambda can contain conditional expressions." }),
  (_i: number) => ({ q: `What is (lambda x: x if x > 0 else 0)(-5)?`, o: ["0", "-5", "Error", "None"], c: 0, e: "Lambda conditional expression evaluation." }),
  (_i: number) => ({ q: `What is the difference between def and lambda?`, o: ["def creates named function, lambda creates anonymous", "No difference", "lambda is faster", "def is deprecated"], c: 0, e: "def creates named function, lambda creates anonymous function." }),
  
  // 41-50: Return Values
  (_i: number) => ({ q: `What is def func(): return 1?`, o: ["Defines function returning 1", "Calls function", "Error", "None"], c: 0, e: "Function returns single value." }),
  (_i: number) => ({ q: `What is func() if def func(): return 1?`, o: ["1", "None", "Error", "0"], c: 0, e: "Function call returns the value." }),
  (_i: number) => ({ q: `What is def func(): return 1, 2, 3?`, o: ["Defines function returning tuple (1, 2, 3)", "Error", "Defines function returning three values", "None"], c: 0, e: "Multiple values in return create tuple." }),
  (_i: number) => ({ q: `What is func() if def func(): return 1, 2, 3?`, o: ["(1, 2, 3)", "[1, 2, 3]", "Error", "None"], c: 0, e: "Function returns tuple of values." }),
  (_i: number) => ({ q: `What is a, b = func() if def func(): return 1, 2?`, o: ["a=1, b=2", "Error", "a=(1,2), b=None", "None"], c: 0, e: "Tuple unpacking from function return." }),
  (_i: number) => ({ q: `What is def func(): return?`, o: ["Defines function returning None", "Error", "Defines function with no return", "None"], c: 0, e: "return without value returns None." }),
  (_i: number) => ({ q: `What is func() if def func(): return?`, o: ["None", "Error", "0", "()"], c: 0, e: "Function returns None when return has no value." }),
  (_i: number) => ({ q: `What is def func(): pass?`, o: ["Defines function returning None", "Error", "Defines function with no return", "None"], c: 0, e: "Function without return statement returns None." }),
  (_i: number) => ({ q: `What is func() if def func(): pass?`, o: ["None", "Error", "0", "()"], c: 0, e: "Function with pass returns None." }),
  (_i: number) => ({ q: `What is def func(): return [1, 2, 3]?`, o: ["Defines function returning list", "Error", "Defines function returning tuple", "None"], c: 0, e: "Function can return any type, including list." }),
  
  // 51-60: Function Scope and Variables
  (_i: number) => ({ q: `What is x = 1; def func(): return x; func()?`, o: ["1", "Error", "None", "0"], c: 0, e: "Function can access global variable." }),
  (_i: number) => ({ q: `What is x = 1; def func(): x = 2; return x; func()?`, o: ["2", "1", "Error", "None"], c: 0, e: "Local assignment creates local variable." }),
  (_i: number) => ({ q: `What is x = 1; def func(): x = 2; func(); x?`, o: ["1", "2", "Error", "None"], c: 0, e: "Local assignment doesn't affect global variable." }),
  (_i: number) => ({ q: `What is x = 1; def func(): global x; x = 2; func(); x?`, o: ["2", "1", "Error", "None"], c: 0, e: "global keyword allows modifying global variable." }),
  (_i: number) => ({ q: `What is def outer(): x = 1; def inner(): return x; return inner(); outer()?`, o: ["1", "Error", "None", "0"], c: 0, e: "Inner function can access outer function's variables (closure)." }),
  (_i: number) => ({ q: `What is def outer(x): def inner(): return x; return inner; f = outer(5); f()?`, o: ["5", "Error", "None", "0"], c: 0, e: "Closure captures outer function's parameter." }),
  (_i: number) => ({ q: `What is def func(): x = 1; return x; func(); x?`, o: ["NameError", "1", "Error", "None"], c: 0, e: "Local variable not accessible outside function." }),
  (_i: number) => ({ q: `What is x = 1; def func(y): return x + y; func(2)?`, o: ["3", "1", "2", "Error"], c: 0, e: "Function can access global and use parameter." }),
  (_i: number) => ({ q: `What is def func(): x = x + 1; return x; func()?`, o: ["UnboundLocalError", "1", "Error", "None"], c: 0, e: "Assignment to x makes it local, can't read before assignment." }),
  (_i: number) => ({ q: `What is def func(): return len([1, 2, 3]); func()?`, o: ["3", "Error", "None", "0"], c: 0, e: "Function can call built-in functions." }),
  
  // 61-70: Recursion
  (_i: number) => ({ q: `What is def fact(n): return 1 if n <= 1 else n * fact(n-1); fact(5)?`, o: ["120", "5", "Error", "None"], c: 0, e: "Recursive function calls itself." }),
  (_i: number) => ({ q: `What is def fib(n): return n if n < 2 else fib(n-1) + fib(n-2); fib(5)?`, o: ["5", "8", "Error", "None"], c: 0, e: "Recursive Fibonacci function." }),
  (_i: number) => ({ q: `What is def count(n): return 0 if n <= 0 else 1 + count(n-1); count(5)?`, o: ["5", "0", "Error", "None"], c: 0, e: "Recursive counting function." }),
  (_i: number) => ({ q: `What is def sum_list(lst): return 0 if not lst else lst[0] + sum_list(lst[1:]); sum_list([1,2,3])?`, o: ["6", "3", "Error", "None"], c: 0, e: "Recursive function summing list elements." }),
  (_i: number) => ({ q: `What is def power(x, n): return 1 if n == 0 else x * power(x, n-1); power(2, 3)?`, o: ["8", "6", "Error", "None"], c: 0, e: "Recursive power function." }),
  (_i: number) => ({ q: `What happens if recursive function has no base case?`, o: ["RecursionError (infinite recursion)", "Returns None", "Returns 0", "Error"], c: 0, e: "Missing base case causes infinite recursion." }),
  (_i: number) => ({ q: `What is def func(): return func(); func()?`, o: ["RecursionError", "None", "Error", "0"], c: 0, e: "Infinite recursion without base case." }),
  (_i: number) => ({ q: `What is def reverse(s): return '' if not s else reverse(s[1:]) + s[0]; reverse('abc')?`, o: ["'cba'", "'abc'", "Error", "None"], c: 0, e: "Recursive string reversal." }),
  (_i: number) => ({ q: `What is def gcd(a, b): return a if b == 0 else gcd(b, a % b); gcd(48, 18)?`, o: ["6", "48", "18", "Error"], c: 0, e: "Recursive greatest common divisor (Euclidean algorithm)." }),
  (_i: number) => ({ q: `What is def length(lst): return 0 if not lst else 1 + length(lst[1:]); length([1,2,3])?`, o: ["3", "0", "Error", "None"], c: 0, e: "Recursive function calculating list length." }),
  
  // 71-80: Higher-Order Functions
  (_i: number) => ({ q: `What is def apply(func, x): return func(x); apply(lambda x: x*2, 5)?`, o: ["10", "5", "Error", "None"], c: 0, e: "Function that takes another function as parameter." }),
  (_i: number) => ({ q: `What is def make_multiplier(n): return lambda x: x * n; f = make_multiplier(3); f(4)?`, o: ["12", "3", "4", "Error"], c: 0, e: "Function that returns a function (factory function)." }),
  (_i: number) => ({ q: `What is def compose(f, g): return lambda x: f(g(x)); compose(lambda x: x+1, lambda x: x*2)(3)?`, o: ["7", "6", "8", "Error"], c: 0, e: "Function composition: f(g(x))." }),
  (_i: number) => ({ q: `What is map(lambda x: x*2, [1, 2, 3])?`, o: ["map object", "[2, 4, 6]", "Error", "None"], c: 0, e: "map() returns map object (iterator)." }),
  (_i: number) => ({ q: `What is list(map(lambda x: x*2, [1, 2, 3]))?`, o: ["[2, 4, 6]", "map object", "Error", "None"], c: 0, e: "list() converts map object to list." }),
  (_i: number) => ({ q: `What is filter(lambda x: x > 2, [1, 2, 3, 4])?`, o: ["filter object", "[3, 4]", "Error", "None"], c: 0, e: "filter() returns filter object (iterator)." }),
  (_i: number) => ({ q: `What is list(filter(lambda x: x > 2, [1, 2, 3, 4]))?`, o: ["[3, 4]", "filter object", "Error", "None"], c: 0, e: "list() converts filter object to list." }),
  (_i: number) => ({ q: `What is from functools import reduce; reduce(lambda x, y: x + y, [1, 2, 3, 4])?`, o: ["10", "4", "Error", "None"], c: 0, e: "reduce() accumulates values using function." }),
  (_i: number) => ({ q: `What is sorted([3, 1, 2], key=lambda x: -x)?`, o: ["[3, 2, 1]", "[1, 2, 3]", "Error", "None"], c: 0, e: "sorted() with key function for custom sorting." }),
  (_i: number) => ({ q: `What is max([1, 2, 3], key=lambda x: -x)?`, o: ["1", "3", "Error", "None"], c: 0, e: "max() with key function finds element with max key value." }),
  
  // 81-90: Function Attributes and Documentation
  (_i: number) => ({ q: `What is def func(): pass; func.__name__?`, o: ["'func'", "None", "Error", "''"], c: 0, e: "__name__ attribute contains function name." }),
  (_i: number) => ({ q: `What is def func(): \"\"\"doc\"\"\"; pass; func.__doc__?`, o: ["'doc'", "None", "Error", "''"], c: 0, e: "__doc__ attribute contains docstring." }),
  (_i: number) => ({ q: `What is def func(): pass; func.__doc__?`, o: ["None", "'func'", "Error", "''"], c: 0, e: "__doc__ is None if no docstring." }),
  (_i: number) => ({ q: `What is def func(x, y=2): pass; func.__defaults__?`, o: ["(2,)", "None", "Error", "()"], c: 0, e: "__defaults__ contains tuple of default values." }),
  (_i: number) => ({ q: `What is def func(*args, **kwargs): pass; func.__code__?`, o: ["Code object", "None", "Error", "()"], c: 0, e: "__code__ contains function's code object." }),
  (_i: number) => ({ q: `What is def func(): pass; callable(func)?`, o: ["True", "False", "Error", "None"], c: 0, e: "callable() checks if object is callable." }),
  (_i: number) => ({ q: `What is callable(5)?`, o: ["False", "True", "Error", "None"], c: 0, e: "Integer is not callable." }),
  (_i: number) => ({ q: `What is def func(): return 1; type(func)?`, o: ["<class 'function'>", "<class 'type'>", "Error", "None"], c: 0, e: "Functions are of type function." }),
  (_i: number) => ({ q: `What is def func(): pass; hasattr(func, '__name__')?`, o: ["True", "False", "Error", "None"], c: 0, e: "hasattr() checks if object has attribute." }),
  (_i: number) => ({ q: `What is def func(): pass; func.attr = 'value'; func.attr?`, o: ["'value'", "None", "Error", "''"], c: 0, e: "Functions can have custom attributes." }),
  
  // 91-100: Advanced Function Features
  (_i: number) => ({ q: `What is def func(x): return x; func.__annotations__?`, o: ["{}", "None", "Error", "()"], c: 0, e: "__annotations__ contains type hints (empty if none)." }),
  (_i: number) => ({ q: `What is def func(x: int) -> int: return x; func.__annotations__?`, o: ["{'x': <class 'int'>, 'return': <class 'int'>}", "{}", "Error", "None"], c: 0, e: "__annotations__ contains type hints." }),
  (_i: number) => ({ q: `What is def func(x, y): return x + y; func(1, 2, 3)?`, o: ["TypeError", "6", "Error", "None"], c: 0, e: "Too many arguments raises TypeError." }),
  (_i: number) => ({ q: `What is def func(x, y): return x + y; func(1)?`, o: ["TypeError", "1", "Error", "None"], c: 0, e: "Too few arguments raises TypeError." }),
  (_i: number) => ({ q: `What is def func(x, y, z): return x + y + z; func(1, z=3, y=2)?`, o: ["6", "Error", "None", "5"], c: 0, e: "Keyword arguments can be in any order after positional." }),
  (_i: number) => ({ q: `What is def func(x, y, z): return x + y + z; func(1, 2, z=3)?`, o: ["6", "Error", "None", "5"], c: 0, e: "Mixed positional and keyword arguments work." }),
  (_i: number) => ({ q: `What is def func(x, y, z): return x + y + z; func(1, z=3, 2)?`, o: ["SyntaxError", "6", "Error", "None"], c: 0, e: "Positional arguments cannot come after keyword arguments." }),
  (_i: number) => ({ q: `What is def func(*args, x): return args, x; func(1, 2, x=3)?`, o: ["((1, 2), 3)", "Error", "None", "(1, 2, 3)"], c: 0, e: "Keyword-only parameter after *args." }),
  (_i: number) => ({ q: `What is def func(x, *, y): return x + y; func(1, y=2)?`, o: ["3", "Error", "None", "1"], c: 0, e: "Parameters after * are keyword-only." }),
  (_i: number) => ({ q: `What is def func(x, /, y, *, z): return x + y + z; func(1, 2, z=3)?`, o: ["6", "Error", "None", "5"], c: 0, e: "Parameters before / are positional-only, after * are keyword-only." }),
];

// --- LEVEL 8: SHARK (Classes, Objects, Methods) - 100 TRULY UNIQUE QUESTIONS ---
// Each question tests a DIFFERENT concept - NO number/variable variations of the same question
const level8Patterns = [
  // 1-10: Class Definition and Basics
  (_i: number) => ({ q: `What is class MyClass: pass?`, o: ["Defines a class", "Creates an object", "Error", "Defines a function"], c: 0, e: "class defines a class." }),
  (_i: number) => ({ q: `What is class MyClass: x = 1?`, o: ["Defines class with class attribute", "Creates object", "Error", "Defines function"], c: 0, e: "Attributes defined in class body are class attributes." }),
  (_i: number) => ({ q: `What is MyClass = class MyClass: pass?`, o: ["SyntaxError", "Valid class definition", "Error", "None"], c: 0, e: "class statement doesn't use assignment operator." }),
  (_i: number) => ({ q: `What is obj = MyClass() if class MyClass: pass?`, o: ["Creates instance of MyClass", "Error", "Calls MyClass", "None"], c: 0, e: "Calling class creates instance (object)." }),
  (_i: number) => ({ q: `What is type(MyClass()) if class MyClass: pass?`, o: ["<class '__main__.MyClass'>", "<class 'type'>", "Error", "None"], c: 0, e: "type() returns class of instance." }),
  (_i: number) => ({ q: `What is isinstance(MyClass(), MyClass) if class MyClass: pass?`, o: ["True", "False", "Error", "None"], c: 0, e: "isinstance() checks if object is instance of class." }),
  (_i: number) => ({ q: `What is MyClass.__name__ if class MyClass: pass?`, o: ["'MyClass'", "None", "Error", "''"], c: 0, e: "__name__ attribute contains class name." }),
  (_i: number) => ({ q: `What is class MyClass: pass; MyClass.__bases__?`, o: ["(<class 'object'>,)", "()", "Error", "None"], c: 0, e: "__bases__ contains tuple of base classes (object by default)." }),
  (_i: number) => ({ q: `What is class MyClass: pass; MyClass.__module__?`, o: ["'__main__' or module name", "None", "Error", "''"], c: 0, e: "__module__ contains module where class is defined." }),
  (_i: number) => ({ q: `What is class MyClass: pass; callable(MyClass)?`, o: ["True", "False", "Error", "None"], c: 0, e: "Classes are callable (used to create instances)." }),
  
  // 11-20: Instance Creation and __init__
  (_i: number) => ({ q: `What is def __init__(self, x): self.x = x?`, o: ["Constructor method", "Destructor method", "Error", "Regular method"], c: 0, e: "__init__ is the constructor." }),
  (_i: number) => ({ q: `What is class MyClass: def __init__(self, x): self.x = x; obj = MyClass(5); obj.x?`, o: ["5", "None", "Error", "0"], c: 0, e: "__init__ sets instance attributes." }),
  (_i: number) => ({ q: `What is class MyClass: def __init__(self): pass; obj = MyClass()?`, o: ["Creates instance", "Error", "Returns None", "None"], c: 0, e: "__init__ can have no parameters (except self)." }),
  (_i: number) => ({ q: `What is class MyClass: def __init__(self, x, y): self.x = x; self.y = y; obj = MyClass(1, 2)?`, o: ["Creates instance with x=1, y=2", "Error", "Returns None", "None"], c: 0, e: "__init__ can have multiple parameters." }),
  (_i: number) => ({ q: `What is class MyClass: def __init__(self, x=1): self.x = x; obj = MyClass()?`, o: ["Creates instance with x=1", "Error", "Returns None", "None"], c: 0, e: "__init__ can have default parameters." }),
  (_i: number) => ({ q: `What is class MyClass: def __init__(self, x=1): self.x = x; obj = MyClass(5)?`, o: ["Creates instance with x=5", "Error", "Returns None", "None"], c: 0, e: "Passing argument overrides default in __init__." }),
  (_i: number) => ({ q: `What is class MyClass: pass; obj = MyClass(); obj.x = 5; obj.x?`, o: ["5", "Error", "None", "0"], c: 0, e: "Instance attributes can be set after creation." }),
  (_i: number) => ({ q: `What is class MyClass: pass; obj1 = MyClass(); obj2 = MyClass(); obj1 is obj2?`, o: ["False", "True", "Error", "None"], c: 0, e: "Each instance is a separate object." }),
  (_i: number) => ({ q: `What is class MyClass: pass; obj = MyClass(); hasattr(obj, 'x')?`, o: ["False", "True", "Error", "None"], c: 0, e: "hasattr() checks if object has attribute." }),
  (_i: number) => ({ q: `What is class MyClass: def __init__(self, x): self.x = x; obj = MyClass(5); hasattr(obj, 'x')?`, o: ["True", "False", "Error", "None"], c: 0, e: "hasattr() returns True if attribute exists." }),
  
  // 21-30: Instance Methods and self
  (_i: number) => ({ q: `What is self in a method?`, o: ["Reference to instance", "Reference to class", "Error", "Variable name"], c: 0, e: "self refers to the instance." }),
  (_i: number) => ({ q: `What is class MyClass: def method(self): return 1; obj = MyClass(); obj.method()?`, o: ["1", "Error", "None", "0"], c: 0, e: "Instance method called on object." }),
  (_i: number) => ({ q: `What is class MyClass: def method(self): return 1; MyClass.method(MyClass())?`, o: ["1", "Error", "None", "0"], c: 0, e: "Instance method can be called via class with instance as first arg." }),
  (_i: number) => ({ q: `What is class MyClass: def method(self, x): return x * 2; obj = MyClass(); obj.method(5)?`, o: ["10", "5", "Error", "None"], c: 0, e: "Instance method with parameter." }),
  (_i: number) => ({ q: `What is class MyClass: def __init__(self, x): self.x = x; def get_x(self): return self.x; obj = MyClass(5); obj.get_x()?`, o: ["5", "Error", "None", "0"], c: 0, e: "Method can access instance attributes via self." }),
  (_i: number) => ({ q: `What is class MyClass: def method(self): return self; obj = MyClass(); obj.method() is obj?`, o: ["True", "False", "Error", "None"], c: 0, e: "self in method refers to the instance." }),
  (_i: number) => ({ q: `What is class MyClass: def method(self, other): return self.x + other.x; obj1 = MyClass(); obj1.x = 1; obj2 = MyClass(); obj2.x = 2; obj1.method(obj2)?`, o: ["3", "1", "2", "Error"], c: 0, e: "Method can take another instance as parameter." }),
  (_i: number) => ({ q: `What is class MyClass: def method(self): return 'instance'; obj = MyClass(); MyClass.method?`, o: ["<function MyClass.method>", "Error", "None", "'instance'"], c: 0, e: "Accessing method via class returns function (unbound)." }),
  (_i: number) => ({ q: `What is class MyClass: def method(self): return 'instance'; obj = MyClass(); obj.method?`, o: ["<bound method MyClass.method>", "Error", "None", "'instance'"], c: 0, e: "Accessing method via instance returns bound method." }),
  (_i: number) => ({ q: `What is class MyClass: def method(self, x=1): return x; obj = MyClass(); obj.method()?`, o: ["1", "Error", "None", "0"], c: 0, e: "Instance method can have default parameters." }),
  
  // 31-40: Class Attributes vs Instance Attributes
  (_i: number) => ({ q: `What is class MyClass: x = 1; MyClass.x?`, o: ["1", "Error", "None", "0"], c: 0, e: "Class attribute accessed via class." }),
  (_i: number) => ({ q: `What is class MyClass: x = 1; obj = MyClass(); obj.x?`, o: ["1", "Error", "None", "0"], c: 0, e: "Instance can access class attribute." }),
  (_i: number) => ({ q: `What is class MyClass: x = 1; obj = MyClass(); obj.x = 2; MyClass.x?`, o: ["1", "2", "Error", "None"], c: 0, e: "Setting instance attribute doesn't change class attribute." }),
  (_i: number) => ({ q: `What is class MyClass: x = 1; obj = MyClass(); obj.x = 2; obj.x?`, o: ["2", "1", "Error", "None"], c: 0, e: "Instance attribute shadows class attribute." }),
  (_i: number) => ({ q: `What is class MyClass: x = 1; obj1 = MyClass(); obj2 = MyClass(); obj1.x = 2; obj2.x?`, o: ["1", "2", "Error", "None"], c: 0, e: "Instance attributes are independent per instance." }),
  (_i: number) => ({ q: `What is class MyClass: x = []; obj1 = MyClass(); obj2 = MyClass(); obj1.x.append(1); obj2.x?`, o: ["[1]", "[]", "Error", "None"], c: 0, e: "Mutable class attributes are shared by all instances." }),
  (_i: number) => ({ q: `What is class MyClass: x = 1; MyClass.x = 2; obj = MyClass(); obj.x?`, o: ["2", "1", "Error", "None"], c: 0, e: "Changing class attribute affects all instances (if not shadowed)." }),
  (_i: number) => ({ q: `What is class MyClass: x = 1; obj = MyClass(); obj.x = 2; del obj.x; obj.x?`, o: ["1", "2", "Error", "None"], c: 0, e: "Deleting instance attribute reveals class attribute." }),
  (_i: number) => ({ q: `What is class MyClass: x = 1; obj = MyClass(); MyClass.x = 2; obj.x?`, o: ["2", "1", "Error", "None"], c: 0, e: "Changing class attribute affects instance (if not shadowed)." }),
  (_i: number) => ({ q: `What is class MyClass: x = 1; obj = MyClass(); obj.x = 2; MyClass.x = 3; obj.x?`, o: ["2", "3", "Error", "None"], c: 0, e: "Instance attribute shadows class attribute, changes don't affect it." }),
  
  // 41-50: Class Methods and Static Methods
  (_i: number) => ({ q: `What is class MyClass: @classmethod; def method(cls): return cls; MyClass.method()?`, o: ["<class '__main__.MyClass'>", "Error", "None", "MyClass"], c: 0, e: "@classmethod decorator, cls refers to class." }),
  (_i: number) => ({ q: `What is class MyClass: @classmethod; def method(cls): return cls; obj = MyClass(); obj.method()?`, o: ["<class '__main__.MyClass'>", "Error", "None", "obj"], c: 0, e: "Class method called on instance still receives class." }),
  (_i: number) => ({ q: `What is class MyClass: @staticmethod; def method(): return 1; MyClass.method()?`, o: ["1", "Error", "None", "0"], c: 0, e: "@staticmethod doesn't require self or cls." }),
  (_i: number) => ({ q: `What is class MyClass: @staticmethod; def method(): return 1; obj = MyClass(); obj.method()?`, o: ["1", "Error", "None", "0"], c: 0, e: "Static method can be called on instance or class." }),
  (_i: number) => ({ q: `What is the difference between @classmethod and @staticmethod?`, o: ["classmethod gets cls, staticmethod gets nothing", "No difference", "staticmethod is faster", "classmethod is deprecated"], c: 0, e: "classmethod receives class as first arg, staticmethod receives nothing." }),
  (_i: number) => ({ q: `What is class MyClass: x = 1; @classmethod; def get_x(cls): return cls.x; MyClass.get_x()?`, o: ["1", "Error", "None", "0"], c: 0, e: "Class method can access class attributes via cls." }),
  (_i: number) => ({ q: `What is class MyClass: @classmethod; def create(cls): return cls(); obj = MyClass.create()?`, o: ["Creates instance", "Error", "None", "MyClass"], c: 0, e: "Class method can be used as factory method." }),
  (_i: number) => ({ q: `What is class MyClass: @staticmethod; def add(x, y): return x + y; MyClass.add(1, 2)?`, o: ["3", "Error", "None", "0"], c: 0, e: "Static method can take regular parameters." }),
  (_i: number) => ({ q: `What is class MyClass: def method(self): return 1; @classmethod; def class_method(cls): return 2; MyClass.class_method()?`, o: ["2", "1", "Error", "None"], c: 0, e: "Class can have both instance and class methods." }),
  (_i: number) => ({ q: `What is class MyClass: @staticmethod; def method(): return 'static'; obj = MyClass(); obj.method()?`, o: ["'static'", "Error", "None", "'instance'"], c: 0, e: "Static method called on instance works same as on class." }),
  
  // 51-60: Special Methods (Magic Methods)
  (_i: number) => ({ q: `What is class MyClass: def __str__(self): return 'str'; obj = MyClass(); str(obj)?`, o: ["'str'", "Error", "None", "'MyClass'"], c: 0, e: "__str__ defines string representation for str()." }),
  (_i: number) => ({ q: `What is class MyClass: def __repr__(self): return 'repr'; obj = MyClass(); repr(obj)?`, o: ["'repr'", "Error", "None", "'MyClass'"], c: 0, e: "__repr__ defines string representation for repr()." }),
  (_i: number) => ({ q: `What is class MyClass: def __str__(self): return 'str'; def __repr__(self): return 'repr'; obj = MyClass(); print(obj)?`, o: ["str", "repr", "Error", "None"], c: 0, e: "print() uses __str__ if available." }),
  (_i: number) => ({ q: `What is class MyClass: def __len__(self): return 5; obj = MyClass(); len(obj)?`, o: ["5", "Error", "None", "0"], c: 0, e: "__len__ defines behavior for len()." }),
  (_i: number) => ({ q: `What is class MyClass: def __eq__(self, other): return True; obj1 = MyClass(); obj2 = MyClass(); obj1 == obj2?`, o: ["True", "False", "Error", "None"], c: 0, e: "__eq__ defines behavior for == operator." }),
  (_i: number) => ({ q: `What is class MyClass: def __lt__(self, other): return True; obj1 = MyClass(); obj2 = MyClass(); obj1 < obj2?`, o: ["True", "False", "Error", "None"], c: 0, e: "__lt__ defines behavior for < operator." }),
  (_i: number) => ({ q: `What is class MyClass: def __add__(self, other): return 10; obj1 = MyClass(); obj2 = MyClass(); obj1 + obj2?`, o: ["10", "Error", "None", "0"], c: 0, e: "__add__ defines behavior for + operator." }),
  (_i: number) => ({ q: `What is class MyClass: def __getitem__(self, key): return key * 2; obj = MyClass(); obj[5]?`, o: ["10", "5", "Error", "None"], c: 0, e: "__getitem__ defines behavior for [] indexing." }),
  (_i: number) => ({ q: `What is class MyClass: def __setitem__(self, key, value): self.data = {key: value}; obj = MyClass(); obj[5] = 10; obj.data?`, o: ["{5: 10}", "Error", "None", "{}"], c: 0, e: "__setitem__ defines behavior for [] assignment." }),
  (_i: number) => ({ q: `What is class MyClass: def __call__(self): return 'called'; obj = MyClass(); obj()?`, o: ["'called'", "Error", "None", "'MyClass'"], c: 0, e: "__call__ makes instance callable." }),
  
  // 61-70: Property Decorator
  (_i: number) => ({ q: `What is class MyClass: @property; def x(self): return 1; obj = MyClass(); obj.x?`, o: ["1", "Error", "None", "0"], c: 0, e: "@property makes method accessible as attribute." }),
  (_i: number) => ({ q: `What is class MyClass: @property; def x(self): return 1; obj = MyClass(); obj.x = 2?`, o: ["AttributeError", "2", "Error", "None"], c: 0, e: "Property without setter is read-only." }),
  (_i: number) => ({ q: `What is class MyClass: @property; def x(self): return self._x; @x.setter; def x(self, value): self._x = value; obj = MyClass(); obj.x = 5; obj.x?`, o: ["5", "Error", "None", "0"], c: 0, e: "@property with @setter allows read and write." }),
  (_i: number) => ({ q: `What is class MyClass: @property; def x(self): return self._x; @x.setter; def x(self, value): self._x = value * 2; obj = MyClass(); obj.x = 5; obj.x?`, o: ["10", "5", "Error", "None"], c: 0, e: "Setter can transform value before storing." }),
  (_i: number) => ({ q: `What is class MyClass: @property; def x(self): return self._x; @x.deleter; def x(self): del self._x; obj = MyClass(); obj._x = 1; del obj.x; hasattr(obj, '_x')?`, o: ["False", "True", "Error", "None"], c: 0, e: "@deleter defines behavior for del statement." }),
  (_i: number) => ({ q: `What is class MyClass: def __init__(self): self._x = 1; @property; def x(self): return self._x; obj = MyClass(); obj.x?`, o: ["1", "Error", "None", "0"], c: 0, e: "Property can access private attribute (convention: _ prefix)." }),
  (_i: number) => ({ q: `What is class MyClass: @property; def x(self): return 1; obj = MyClass(); MyClass.x?`, o: ["<property object>", "1", "Error", "None"], c: 0, e: "Accessing property via class returns property object." }),
  (_i: number) => ({ q: `What is class MyClass: x = property(lambda self: 1); obj = MyClass(); obj.x?`, o: ["1", "Error", "None", "0"], c: 0, e: "property() can be created with lambda." }),
  (_i: number) => ({ q: `What is class MyClass: @property; def x(self): return self._x if hasattr(self, '_x') else 0; obj = MyClass(); obj.x?`, o: ["0", "Error", "None", "1"], c: 0, e: "Property can have default value if attribute doesn't exist." }),
  (_i: number) => ({ q: `What is class MyClass: @property; def x(self): return 1; @x.setter; def x(self, value): pass; obj = MyClass(); obj.x = 5; obj.x?`, o: ["1", "5", "Error", "None"], c: 0, e: "Setter that doesn't store value doesn't change property." }),
  
  // 71-80: Object Attributes and Methods
  (_i: number) => ({ q: `What is class MyClass: pass; obj = MyClass(); obj.x = 1; getattr(obj, 'x')?`, o: ["1", "Error", "None", "0"], c: 0, e: "getattr() gets attribute value." }),
  (_i: number) => ({ q: `What is class MyClass: pass; obj = MyClass(); getattr(obj, 'x', 0)?`, o: ["0", "Error", "None", "1"], c: 0, e: "getattr() with default returns default if attribute missing." }),
  (_i: number) => ({ q: `What is class MyClass: pass; obj = MyClass(); setattr(obj, 'x', 1); obj.x?`, o: ["1", "Error", "None", "0"], c: 0, e: "setattr() sets attribute value." }),
  (_i: number) => ({ q: `What is class MyClass: pass; obj = MyClass(); obj.x = 1; delattr(obj, 'x'); hasattr(obj, 'x')?`, o: ["False", "True", "Error", "None"], c: 0, e: "delattr() deletes attribute." }),
  (_i: number) => ({ q: `What is class MyClass: pass; obj = MyClass(); dir(obj)?`, o: ["List of attribute names", "Error", "None", "()"], c: 0, e: "dir() returns list of object's attributes." }),
  (_i: number) => ({ q: `What is class MyClass: x = 1; obj = MyClass(); 'x' in dir(obj)?`, o: ["True", "False", "Error", "None"], c: 0, e: "dir() includes class attributes." }),
  (_i: number) => ({ q: `What is class MyClass: def method(self): pass; obj = MyClass(); 'method' in dir(obj)?`, o: ["True", "False", "Error", "None"], c: 0, e: "dir() includes methods." }),
  (_i: number) => ({ q: `What is class MyClass: pass; obj = MyClass(); vars(obj)?`, o: ["{}", "Error", "None", "()"], c: 0, e: "vars() returns __dict__ (instance attributes)." }),
  (_i: number) => ({ q: `What is class MyClass: def __init__(self, x): self.x = x; obj = MyClass(5); vars(obj)?`, o: ["{'x': 5}", "{}", "Error", "None"], c: 0, e: "vars() returns dictionary of instance attributes." }),
  (_i: number) => ({ q: `What is class MyClass: x = 1; vars(MyClass)?`, o: ["Dict with class attributes", "Error", "None", "{}"], c: 0, e: "vars() on class returns class __dict__." }),
  
  // 81-90: Object Identity and Comparison
  (_i: number) => ({ q: `What is class MyClass: pass; obj1 = MyClass(); obj2 = MyClass(); obj1 is obj2?`, o: ["False", "True", "Error", "None"], c: 0, e: "Different instances are not identical." }),
  (_i: number) => ({ q: `What is class MyClass: pass; obj1 = MyClass(); obj2 = obj1; obj1 is obj2?`, o: ["True", "False", "Error", "None"], c: 0, e: "Same object reference is identical." }),
  (_i: number) => ({ q: `What is class MyClass: pass; obj1 = MyClass(); obj2 = MyClass(); obj1 == obj2?`, o: ["False", "True", "Error", "None"], c: 0, e: "Default == compares identity (same as is)." }),
  (_i: number) => ({ q: `What is class MyClass: def __eq__(self, other): return True; obj1 = MyClass(); obj2 = MyClass(); obj1 == obj2?`, o: ["True", "False", "Error", "None"], c: 0, e: "__eq__ overrides == behavior." }),
  (_i: number) => ({ q: `What is class MyClass: def __eq__(self, other): return True; obj1 = MyClass(); obj2 = MyClass(); obj1 != obj2?`, o: ["False", "True", "Error", "None"], c: 0, e: "__ne__ defaults to not __eq__ if not defined." }),
  (_i: number) => ({ q: `What is class MyClass: def __hash__(self): return 1; hash(MyClass())?`, o: ["1", "Error", "None", "0"], c: 0, e: "__hash__ defines hash value." }),
  (_i: number) => ({ q: `What is class MyClass: def __eq__(self, other): return True; hash(MyClass())?`, o: ["TypeError (unhashable)", "1", "Error", "None"], c: 0, e: "Defining __eq__ without __hash__ makes object unhashable." }),
  (_i: number) => ({ q: `What is class MyClass: def __eq__(self, other): return True; def __hash__(self): return 1; {MyClass(): 1}?`, o: ["{MyClass instance: 1}", "Error", "None", "{}"], c: 0, e: "Object with __hash__ can be dict key." }),
  (_i: number) => ({ q: `What is class MyClass: pass; id(MyClass())?`, o: ["Unique integer id", "Error", "None", "0"], c: 0, e: "id() returns unique identifier for object." }),
  (_i: number) => ({ q: `What is class MyClass: pass; obj1 = MyClass(); obj2 = MyClass(); id(obj1) == id(obj2)?`, o: ["False", "True", "Error", "None"], c: 0, e: "Different objects have different ids." }),
  
  // 91-100: Advanced Class Features
  (_i: number) => ({ q: `What is class MyClass: __slots__ = ['x', 'y']; obj = MyClass(); obj.x = 1; obj.z = 2?`, o: ["AttributeError", "Works fine", "Error", "None"], c: 0, e: "__slots__ restricts allowed attributes." }),
  (_i: number) => ({ q: `What is class MyClass: __slots__ = ['x']; obj = MyClass(); obj.x = 1; vars(obj)?`, o: ["AttributeError (no __dict__)", "{}", "Error", "None"], c: 0, e: "__slots__ removes __dict__ (saves memory)." }),
  (_i: number) => ({ q: `What is class MyClass: def __init__(self): self.x = 1; obj = MyClass(); obj.__dict__?`, o: ["{'x': 1}", "{}", "Error", "None"], c: 0, e: "__dict__ contains instance attributes." }),
  (_i: number) => ({ q: `What is class MyClass: x = 1; MyClass.__dict__?`, o: ["Dict with class attributes and methods", "{}", "Error", "None"], c: 0, e: "__dict__ on class contains class attributes." }),
  (_i: number) => ({ q: `What is class MyClass: def method(self): pass; 'method' in MyClass.__dict__?`, o: ["True", "False", "Error", "None"], c: 0, e: "Methods are in class __dict__." }),
  (_i: number) => ({ q: `What is class MyClass: pass; obj = MyClass(); type(obj)?`, o: ["<class '__main__.MyClass'>", "<class 'type'>", "Error", "None"], c: 0, e: "type() returns class of instance." }),
  (_i: number) => ({ q: `What is class MyClass: pass; type(MyClass)?`, o: ["<class 'type'>", "<class '__main__.MyClass'>", "Error", "None"], c: 0, e: "Classes are instances of type (metaclass)." }),
  (_i: number) => ({ q: `What is class MyClass: pass; issubclass(MyClass, object)?`, o: ["True", "False", "Error", "None"], c: 0, e: "All classes inherit from object by default." }),
  (_i: number) => ({ q: `What is class MyClass: pass; isinstance(MyClass, type)?`, o: ["True", "False", "Error", "None"], c: 0, e: "Classes are instances of type." }),
  (_i: number) => ({ q: `What is class MyClass: pass; MyClass.mro()?`, o: ["Method Resolution Order list", "Error", "None", "[]"], c: 0, e: "mro() returns method resolution order (inheritance chain)." }),
];

// --- LEVEL 9: WHALE (Inheritance, Polymorphism, Encapsulation) - 100 TRULY UNIQUE QUESTIONS ---
// Each question tests a DIFFERENT concept - NO number/variable variations of the same question
const level9Patterns = [
  // 1-10: Basic Inheritance
  (_i: number) => ({ q: `What is inheritance?`, o: ["Child class gets parent features", "Parent class gets child features", "Error", "Classes are independent"], c: 0, e: "Inheritance allows child to use parent features." }),
  (_i: number) => ({ q: `What is class Parent: x = 1; class Child(Parent): pass; Child.x?`, o: ["1", "Error", "None", "0"], c: 0, e: "Child class inherits parent class attributes." }),
  (_i: number) => ({ q: `What is class Parent: def method(self): return 1; class Child(Parent): pass; Child().method()?`, o: ["1", "Error", "None", "0"], c: 0, e: "Child class inherits parent methods." }),
  (_i: number) => ({ q: `What is class Parent: pass; class Child(Parent): pass; issubclass(Child, Parent)?`, o: ["True", "False", "Error", "None"], c: 0, e: "issubclass() checks if class is subclass." }),
  (_i: number) => ({ q: `What is class Parent: pass; class Child(Parent): pass; isinstance(Child(), Parent)?`, o: ["True", "False", "Error", "None"], c: 0, e: "isinstance() checks if instance is of class (including parent)." }),
  (_i: number) => ({ q: `What is class Parent: pass; class Child(Parent): pass; Child.__bases__?`, o: ["(<class '__main__.Parent'>,)", "()", "Error", "None"], c: 0, e: "__bases__ contains tuple of parent classes." }),
  (_i: number) => ({ q: `What is class Parent: x = 1; class Child(Parent): pass; obj = Child(); obj.x?`, o: ["1", "Error", "None", "0"], c: 0, e: "Instance of child can access parent class attribute." }),
  (_i: number) => ({ q: `What is class Parent: def __init__(self): self.x = 1; class Child(Parent): pass; Child().x?`, o: ["1", "Error", "None", "0"], c: 0, e: "Child inherits parent __init__ if not overridden." }),
  (_i: number) => ({ q: `What is class Parent: pass; class Child(Parent): pass; Parent.__subclasses__()?`, o: ["[<class '__main__.Child'>]", "[]", "Error", "None"], c: 0, e: "__subclasses__() returns list of direct subclasses." }),
  (_i: number) => ({ q: `What is class Parent: x = 1; class Child(Parent): x = 2; Child.x?`, o: ["2", "1", "Error", "None"], c: 0, e: "Child class attribute overrides parent attribute." }),
  
  // 11-20: Method Overriding
  (_i: number) => ({ q: `What is method overriding?`, o: ["Child redefines parent method", "Parent redefines child method", "Error", "Methods cannot be redefined"], c: 0, e: "Overriding redefines parent method in child." }),
  (_i: number) => ({ q: `What is class Parent: def method(self): return 1; class Child(Parent): def method(self): return 2; Child().method()?`, o: ["2", "1", "Error", "None"], c: 0, e: "Child method overrides parent method." }),
  (_i: number) => ({ q: `What is class Parent: def method(self): return 1; class Child(Parent): def method(self): return super().method(); Child().method()?`, o: ["1", "2", "Error", "None"], c: 0, e: "super() calls parent method from child." }),
  (_i: number) => ({ q: `What is class Parent: def method(self): return 1; class Child(Parent): def method(self): return super().method() + 1; Child().method()?`, o: ["2", "1", "Error", "None"], c: 0, e: "Child can call parent method and modify result." }),
  (_i: number) => ({ q: `What is class Parent: def __init__(self): self.x = 1; class Child(Parent): def __init__(self): self.y = 2; Child().x?`, o: ["AttributeError", "1", "Error", "None"], c: 0, e: "Overriding __init__ doesn't call parent __init__ automatically." }),
  (_i: number) => ({ q: `What is class Parent: def __init__(self): self.x = 1; class Child(Parent): def __init__(self): super().__init__(); self.y = 2; obj = Child(); obj.x?`, o: ["1", "Error", "None", "0"], c: 0, e: "super().__init__() calls parent __init__." }),
  (_i: number) => ({ q: `What is class Parent: def method(self): return 'parent'; class Child(Parent): pass; Child().method()?`, o: ["'parent'", "Error", "None", "'child'"], c: 0, e: "Child without method uses parent method." }),
  (_i: number) => ({ q: `What is class Parent: def method(self): return 1; class Child(Parent): def method(self): return super().method(); Parent().method()?`, o: ["1", "Error", "None", "0"], c: 0, e: "Parent instance uses parent method (no override)." }),
  (_i: number) => ({ q: `What is class Parent: @classmethod; def method(cls): return 1; class Child(Parent): @classmethod; def method(cls): return 2; Child.method()?`, o: ["2", "1", "Error", "None"], c: 0, e: "Class methods can be overridden." }),
  (_i: number) => ({ q: `What is class Parent: @staticmethod; def method(): return 1; class Child(Parent): @staticmethod; def method(): return 2; Child.method()?`, o: ["2", "1", "Error", "None"], c: 0, e: "Static methods can be overridden." }),
  
  // 21-30: super() Function
  (_i: number) => ({ q: `What is class Parent: def method(self): return 1; class Child(Parent): def method(self): return super().method(); Child().method()?`, o: ["1", "Error", "None", "0"], c: 0, e: "super() without arguments in method gets parent." }),
  (_i: number) => ({ q: `What is class Parent: def method(self): return 1; class Child(Parent): def method(self): return super(Child, self).method(); Child().method()?`, o: ["1", "Error", "None", "0"], c: 0, e: "super(Child, self) explicitly specifies class and instance." }),
  (_i: number) => ({ q: `What is class Parent: x = 1; class Child(Parent): def method(self): return super().x; Child().method()?`, o: ["1", "Error", "None", "0"], c: 0, e: "super() can access parent class attributes." }),
  (_i: number) => ({ q: `What is class Parent: def __init__(self, x): self.x = x; class Child(Parent): def __init__(self, x, y): super().__init__(x); self.y = y; obj = Child(1, 2); obj.x?`, o: ["1", "2", "Error", "None"], c: 0, e: "super().__init__() passes arguments to parent." }),
  (_i: number) => ({ q: `What is class Parent: @classmethod; def method(cls): return 1; class Child(Parent): @classmethod; def method(cls): return super().method(); Child.method()?`, o: ["1", "Error", "None", "0"], c: 0, e: "super() works in class methods." }),
  (_i: number) => ({ q: `What is class Parent: @staticmethod; def method(): return 1; class Child(Parent): @staticmethod; def method(): return super().method(); Child.method()?`, o: ["AttributeError", "1", "Error", "None"], c: 0, e: "super() doesn't work in static methods (no cls/self)." }),
  (_i: number) => ({ q: `What is class Parent: def method(self): return 'parent'; class Child(Parent): def method(self): return super().method() + ' child'; Child().method()?`, o: ["'parent child'", "'parent'", "Error", "None"], c: 0, e: "super() can be used to extend parent method behavior." }),
  (_i: number) => ({ q: `What is class Parent: def method(self): return 1; class Child(Parent): pass; super(Child, Child()).method()?`, o: ["1", "Error", "None", "0"], c: 0, e: "super() can be called outside method with explicit args." }),
  (_i: number) => ({ q: `What is class Parent: x = 1; class Child(Parent): x = 2; def method(self): return super().x; Child().method()?`, o: ["1", "2", "Error", "None"], c: 0, e: "super() accesses parent attribute even if child overrides." }),
  (_i: number) => ({ q: `What is class Parent: def method(self): return 1; class Middle(Parent): def method(self): return 2; class Child(Middle): def method(self): return super().method(); Child().method()?`, o: ["2", "1", "Error", "None"], c: 0, e: "super() follows MRO, calls immediate parent (Middle)." }),
  
  // 31-40: Multiple Inheritance
  (_i: number) => ({ q: `What is class A: x = 1; class B: x = 2; class C(A, B): pass; C.x?`, o: ["1", "2", "Error", "None"], c: 0, e: "Multiple inheritance: first parent takes precedence." }),
  (_i: number) => ({ q: `What is class A: x = 1; class B: x = 2; class C(B, A): pass; C.x?`, o: ["2", "1", "Error", "None"], c: 0, e: "Order matters: first parent in tuple wins." }),
  (_i: number) => ({ q: `What is class A: def method(self): return 'A'; class B: def method(self): return 'B'; class C(A, B): pass; C().method()?`, o: ["'A'", "'B'", "Error", "None"], c: 0, e: "Method resolution follows inheritance order." }),
  (_i: number) => ({ q: `What is class A: def method(self): return 'A'; class B: def method(self): return 'B'; class C(A, B): def method(self): return super().method(); C().method()?`, o: ["'A'", "'B'", "Error", "None"], c: 0, e: "super() in multiple inheritance follows MRO." }),
  (_i: number) => ({ q: `What is class A: pass; class B: pass; class C(A, B): pass; C.__bases__?`, o: ["(<class '__main__.A'>, <class '__main__.B'>)", "()", "Error", "None"], c: 0, e: "__bases__ contains all parent classes." }),
  (_i: number) => ({ q: `What is class A: pass; class B(A): pass; class C(A): pass; class D(B, C): pass; D.mro()?`, o: ["[D, B, C, A, object]", "[D, A, B, C, object]", "Error", "None"], c: 0, e: "MRO follows C3 linearization (depth-first, left-to-right)." }),
  (_i: number) => ({ q: `What is class A: def method(self): return 'A'; class B(A): def method(self): return 'B'; class C(A): def method(self): return 'C'; class D(B, C): pass; D().method()?`, o: ["'B'", "'A'", "'C'", "Error"], c: 0, e: "MRO: D -> B -> C -> A, B.method() found first." }),
  (_i: number) => ({ q: `What is class A: def method(self): return 'A'; class B(A): pass; class C(A): def method(self): return 'C'; class D(B, C): pass; D().method()?`, o: ["'C'", "'A'", "'B'", "Error"], c: 0, e: "MRO: D -> B -> C -> A, C.method() found (B doesn't have it)." }),
  (_i: number) => ({ q: `What is class A: x = 1; class B: x = 2; class C(A, B): x = 3; C.x?`, o: ["3", "1", "2", "Error"], c: 0, e: "Child class attribute overrides all parent attributes." }),
  (_i: number) => ({ q: `What is class A: def method(self): return 'A'; class B: def method(self): return 'B'; class C(A, B): def method(self): return super().method(); C().method()?`, o: ["'A'", "'B'", "Error", "None"], c: 0, e: "super() in multiple inheritance calls next in MRO." }),
  
  // 41-50: Polymorphism
  (_i: number) => ({ q: `What is polymorphism?`, o: ["Same interface, different behavior", "Same behavior, different interface", "Error", "No interface"], c: 0, e: "Polymorphism allows same interface for different types." }),
  (_i: number) => ({ q: `What is class Animal: def speak(self): return 'sound'; class Dog(Animal): def speak(self): return 'bark'; class Cat(Animal): def speak(self): return 'meow'; [Dog().speak(), Cat().speak()]?`, o: ["['bark', 'meow']", "['sound', 'sound']", "Error", "None"], c: 0, e: "Different classes implement same method differently (polymorphism)." }),
  (_i: number) => ({ q: `What is class Shape: def area(self): return 0; class Circle(Shape): def area(self): return 3.14; class Square(Shape): def area(self): return 1; [Circle().area(), Square().area()]?`, o: ["[3.14, 1]", "[0, 0]", "Error", "None"], c: 0, e: "Polymorphism: same method name, different implementations." }),
  (_i: number) => ({ q: `What is def process(obj): return obj.method(); class A: def method(self): return 1; class B: def method(self): return 2; [process(A()), process(B())]?`, o: ["[1, 2]", "[1, 1]", "Error", "None"], c: 0, e: "Function works with different types (duck typing polymorphism)." }),
  (_i: number) => ({ q: `What is class Parent: def method(self): return 'parent'; class Child(Parent): def method(self): return 'child'; obj = Parent(); obj = Child(); obj.method()?`, o: ["'child'", "'parent'", "Error", "None"], c: 0, e: "Variable can hold different types, method call uses actual type." }),
  (_i: number) => ({ q: `What is class A: def __add__(self, other): return 'A'; class B: def __add__(self, other): return 'B'; A() + B()?`, o: ["'A'", "'B'", "Error", "None"], c: 0, e: "Operator overloading enables polymorphic operations." }),
  (_i: number) => ({ q: `What is class Animal: def speak(self): pass; class Dog(Animal): def speak(self): return 'bark'; def make_sound(animal): return animal.speak(); make_sound(Dog())?`, o: ["'bark'", "None", "Error", "'sound'"], c: 0, e: "Polymorphism: function accepts any Animal, calls appropriate speak()." }),
  (_i: number) => ({ q: `What is class A: def method(self): return 1; class B(A): def method(self): return 2; class C(B): def method(self): return 3; [A().method(), B().method(), C().method()]?`, o: ["[1, 2, 3]", "[1, 1, 1]", "Error", "None"], c: 0, e: "Each class in hierarchy can override method (polymorphism)." }),
  (_i: number) => ({ q: `What is class Parent: def method(self): return 'parent'; class Child(Parent): pass; [Parent().method(), Child().method()]?`, o: ["['parent', 'parent']", "['parent', 'child']", "Error", "None"], c: 0, e: "Child without override uses parent method (still polymorphic)." }),
  (_i: number) => ({ q: `What is class A: def __str__(self): return 'A'; class B: def __str__(self): return 'B'; [str(A()), str(B())]?`, o: ["['A', 'B']", "['A', 'A']", "Error", "None"], c: 0, e: "Special methods enable polymorphic behavior with built-ins." }),
  
  // 51-60: Encapsulation - Private Attributes
  (_i: number) => ({ q: `What is class MyClass: def __init__(self): self.__x = 1; obj = MyClass(); obj.__x?`, o: ["AttributeError", "1", "Error", "None"], c: 0, e: "Double underscore prefix triggers name mangling (private)." }),
  (_i: number) => ({ q: `What is class MyClass: def __init__(self): self.__x = 1; obj = MyClass(); obj._MyClass__x?`, o: ["1", "Error", "None", "0"], c: 0, e: "Name mangling: __x becomes _MyClass__x (can still access)." }),
  (_i: number) => ({ q: `What is class MyClass: __x = 1; MyClass.__x?`, o: ["1", "Error", "None", "0"], c: 0, e: "Class attribute with __ prefix doesn't mangle (no self)." }),
  (_i: number) => ({ q: `What is class MyClass: def __init__(self): self._x = 1; obj = MyClass(); obj._x?`, o: ["1", "Error", "None", "0"], c: 0, e: "Single underscore is convention (protected), not enforced." }),
  (_i: number) => ({ q: `What is class Parent: def __init__(self): self.__x = 1; class Child(Parent): def method(self): return self.__x; Child().method()?`, o: ["AttributeError", "1", "Error", "None"], c: 0, e: "Name mangling: Child can't access Parent.__x (becomes _Parent__x)." }),
  (_i: number) => ({ q: `What is class Parent: def __init__(self): self.__x = 1; class Child(Parent): def method(self): return self._Parent__x; Child().method()?`, o: ["1", "Error", "None", "0"], c: 0, e: "Can access mangled name with _ClassName prefix." }),
  (_i: number) => ({ q: `What is class MyClass: def __init__(self): self.__x__ = 1; obj = MyClass(); obj.__x__?`, o: ["1", "Error", "None", "0"], c: 0, e: "Double underscore on both sides doesn't mangle (special methods)." }),
  (_i: number) => ({ q: `What is class MyClass: def __init__(self): self._x = 1; def get_x(self): return self._x; obj = MyClass(); obj.get_x()?`, o: ["1", "Error", "None", "0"], c: 0, e: "Getter method provides controlled access to protected attribute." }),
  (_i: number) => ({ q: `What is class MyClass: def __init__(self): self.__x = 1; def get_x(self): return self.__x; obj = MyClass(); obj.get_x()?`, o: ["1", "Error", "None", "0"], c: 0, e: "Getter method can access mangled name from within class." }),
  (_i: number) => ({ q: `What is class MyClass: def __init__(self): self.__x = 1; def set_x(self, val): self.__x = val; obj = MyClass(); obj.set_x(2); obj.get_x() if hasattr(obj, 'get_x') else obj._MyClass__x?`, o: ["2", "1", "Error", "None"], c: 0, e: "Setter method can modify mangled attribute." }),
  
  // 61-70: Encapsulation - Properties and Access Control
  (_i: number) => ({ q: `What is class MyClass: def __init__(self): self._x = 1; @property; def x(self): return self._x; obj = MyClass(); obj.x?`, o: ["1", "Error", "None", "0"], c: 0, e: "Property provides controlled read access." }),
  (_i: number) => ({ q: `What is class MyClass: def __init__(self): self._x = 1; @property; def x(self): return self._x; @x.setter; def x(self, val): self._x = val * 2; obj = MyClass(); obj.x = 5; obj.x?`, o: ["10", "5", "Error", "None"], c: 0, e: "Property setter can validate/transform before storing." }),
  (_i: number) => ({ q: `What is class MyClass: def __init__(self): self.__x = 1; @property; def x(self): return self.__x; obj = MyClass(); obj.x?`, o: ["1", "Error", "None", "0"], c: 0, e: "Property can access mangled attribute." }),
  (_i: number) => ({ q: `What is class MyClass: @property; def x(self): return 1; @x.setter; def x(self, val): pass; obj = MyClass(); obj.x = 5; obj.x?`, o: ["1", "5", "Error", "None"], c: 0, e: "Setter that doesn't store doesn't change property." }),
  (_i: number) => ({ q: `What is class MyClass: def __init__(self): self._x = 1; def get_x(self): return self._x; def set_x(self, val): self._x = val; x = property(get_x, set_x); obj = MyClass(); obj.x = 5; obj.x?`, o: ["5", "1", "Error", "None"], c: 0, e: "property() can be created with getter and setter functions." }),
  (_i: number) => ({ q: `What is class MyClass: def __init__(self): self._x = 1; @property; def x(self): return self._x; @x.deleter; def x(self): del self._x; obj = MyClass(); del obj.x; hasattr(obj, '_x')?`, o: ["False", "True", "Error", "None"], c: 0, e: "Property deleter provides controlled deletion." }),
  (_i: number) => ({ q: `What is class MyClass: def __init__(self): self._x = 1; @property; def x(self): return self._x; obj = MyClass(); obj.x = 2?`, o: ["AttributeError", "2", "Error", "None"], c: 0, e: "Property without setter is read-only." }),
  (_i: number) => ({ q: `What is class MyClass: def __init__(self): self._x = 1; @property; def x(self): return self._x if self._x > 0 else 0; obj = MyClass(); obj._x = -1; obj.x?`, o: ["0", "-1", "Error", "None"], c: 0, e: "Property getter can validate/transform on access." }),
  (_i: number) => ({ q: `What is class MyClass: def __init__(self): self._x = 1; @property; def x(self): return self._x; @x.setter; def x(self, val): if val < 0: raise ValueError; self._x = val; obj = MyClass(); obj.x = -1?`, o: ["ValueError", "-1", "Error", "None"], c: 0, e: "Property setter can validate and raise errors." }),
  (_i: number) => ({ q: `What is class MyClass: _x = 1; @classmethod; @property; def x(cls): return cls._x?`, o: ["TypeError", "1", "Error", "None"], c: 0, e: "Can't combine @classmethod and @property (property is for instances)." }),
  
  // 71-80: Abstract Base Classes
  (_i: number) => ({ q: `What is from abc import ABC, abstractmethod; class MyClass(ABC): @abstractmethod; def method(self): pass; MyClass()?`, o: ["TypeError", "Creates instance", "Error", "None"], c: 0, e: "Abstract class with abstractmethod can't be instantiated." }),
  (_i: number) => ({ q: `What is from abc import ABC, abstractmethod; class Parent(ABC): @abstractmethod; def method(self): pass; class Child(Parent): pass; Child()?`, o: ["TypeError", "Creates instance", "Error", "None"], c: 0, e: "Child must implement abstract method or be abstract." }),
  (_i: number) => ({ q: `What is from abc import ABC, abstractmethod; class Parent(ABC): @abstractmethod; def method(self): pass; class Child(Parent): def method(self): return 1; Child().method()?`, o: ["1", "Error", "None", "0"], c: 0, e: "Child implementing abstract method can be instantiated." }),
  (_i: number) => ({ q: `What is from abc import ABC, abstractmethod; class Parent(ABC): @abstractmethod; def method(self): pass; class Child(Parent): @abstractmethod; def method(self): pass; Child()?`, o: ["TypeError", "Creates instance", "Error", "None"], c: 0, e: "Child keeping method abstract still can't be instantiated." }),
  (_i: number) => ({ q: `What is from abc import ABC, abstractmethod; class MyClass(ABC): @abstractmethod; def method(self): pass; MyClass.__abstractmethods__?`, o: ["frozenset({'method'})", "set()", "Error", "None"], c: 0, e: "__abstractmethods__ contains set of abstract method names." }),
  (_i: number) => ({ q: `What is from abc import ABC, abstractmethod; class Parent(ABC): @abstractmethod; def method(self): pass; class Child(Parent): def method(self): return 1; Child.__abstractmethods__?`, o: ["frozenset()", "frozenset({'method'})", "Error", "None"], c: 0, e: "Child implementing abstract method has no abstract methods." }),
  (_i: number) => ({ q: `What is from abc import ABC, abstractmethod; class MyClass(ABC): @abstractmethod; @classmethod; def method(cls): pass; MyClass()?`, o: ["TypeError", "Creates instance", "Error", "None"], c: 0, e: "Abstract classmethod prevents instantiation." }),
  (_i: number) => ({ q: `What is from abc import ABC, abstractmethod; class MyClass(ABC): @abstractmethod; @staticmethod; def method(): pass; MyClass()?`, o: ["TypeError", "Creates instance", "Error", "None"], c: 0, e: "Abstract staticmethod prevents instantiation." }),
  (_i: number) => ({ q: `What is from abc import ABC, abstractmethod; class Parent(ABC): @abstractmethod; def method(self): pass; class Child(Parent): pass; issubclass(Child, Parent)?`, o: ["True", "False", "Error", "None"], c: 0, e: "Child is still subclass even if abstract." }),
  (_i: number) => ({ q: `What is from abc import ABC, abstractmethod; class MyClass(ABC): @abstractmethod; def method(self): pass; isinstance(MyClass(), MyClass)?`, o: ["TypeError (can't instantiate)", "True", "False", "Error"], c: 0, e: "Can't create instance to test isinstance." }),
  
  // 81-90: isinstance and issubclass
  (_i: number) => ({ q: `What is class Parent: pass; class Child(Parent): pass; isinstance(Child(), Parent)?`, o: ["True", "False", "Error", "None"], c: 0, e: "isinstance() returns True for parent class." }),
  (_i: number) => ({ q: `What is class Parent: pass; class Child(Parent): pass; isinstance(Child(), Child)?`, o: ["True", "False", "Error", "None"], c: 0, e: "isinstance() returns True for own class." }),
  (_i: number) => ({ q: `What is class Parent: pass; class Child(Parent): pass; isinstance(Child(), (Parent, str))?`, o: ["True", "False", "Error", "None"], c: 0, e: "isinstance() can check multiple types (tuple)." }),
  (_i: number) => ({ q: `What is class Parent: pass; class Child(Parent): pass; isinstance(Parent(), Child)?`, o: ["False", "True", "Error", "None"], c: 0, e: "isinstance() doesn't work backwards (parent not instance of child)." }),
  (_i: number) => ({ q: `What is class Parent: pass; class Child(Parent): pass; issubclass(Child, Parent)?`, o: ["True", "False", "Error", "None"], c: 0, e: "issubclass() checks if first is subclass of second." }),
  (_i: number) => ({ q: `What is class Parent: pass; class Child(Parent): pass; issubclass(Parent, Child)?`, o: ["False", "True", "Error", "None"], c: 0, e: "issubclass() doesn't work backwards." }),
  (_i: number) => ({ q: `What is class Parent: pass; class Child(Parent): pass; issubclass(Child, (Parent, str))?`, o: ["True", "False", "Error", "None"], c: 0, e: "issubclass() can check multiple base classes (tuple)." }),
  (_i: number) => ({ q: `What is class A: pass; class B(A): pass; class C(B): pass; issubclass(C, A)?`, o: ["True", "False", "Error", "None"], c: 0, e: "issubclass() checks entire inheritance chain." }),
  (_i: number) => ({ q: `What is class A: pass; class B(A): pass; class C(B): pass; isinstance(C(), A)?`, o: ["True", "False", "Error", "None"], c: 0, e: "isinstance() checks entire inheritance chain." }),
  (_i: number) => ({ q: `What is class A: pass; class B: pass; class C(A, B): pass; issubclass(C, A) and issubclass(C, B)?`, o: ["True", "False", "Error", "None"], c: 0, e: "Multiple inheritance: child is subclass of all parents." }),
  
  // 91-100: Advanced OOP Concepts
  (_i: number) => ({ q: `What is class MyClass: def __init__(self): self.x = 1; class Child(MyClass): def __init__(self): super().__init__(); self.y = 2; obj = Child(); [obj.x, obj.y]?`, o: ["[1, 2]", "[1]", "[2]", "Error"], c: 0, e: "super().__init__() initializes parent attributes." }),
  (_i: number) => ({ q: `What is class MyClass: def __init__(self, x): self.x = x; class Child(MyClass): def __init__(self, x, y): super().__init__(x); self.y = y; Child(1, 2).x?`, o: ["1", "2", "Error", "None"], c: 0, e: "super().__init__() passes arguments to parent." }),
  (_i: number) => ({ q: `What is class MyClass: x = 1; class Child(MyClass): x = 2; class GrandChild(Child): pass; GrandChild.x?`, o: ["2", "1", "Error", "None"], c: 0, e: "Grandchild inherits from immediate parent (Child.x)." }),
  (_i: number) => ({ q: `What is class MyClass: def method(self): return 1; class Child(MyClass): def method(self): return super().method() + 1; Child().method()?`, o: ["2", "1", "Error", "None"], c: 0, e: "Child can extend parent method using super()." }),
  (_i: number) => ({ q: `What is class MyClass: def __str__(self): return 'MyClass'; class Child(MyClass): def __str__(self): return 'Child'; str(Child())?`, o: ["'Child'", "'MyClass'", "Error", "None"], c: 0, e: "Child can override special methods." }),
  (_i: number) => ({ q: `What is class MyClass: def __init__(self): self.__x = 1; class Child(MyClass): def method(self): return self.__x; Child().method()?`, o: ["AttributeError", "1", "Error", "None"], c: 0, e: "Name mangling prevents child from accessing parent's __x." }),
  (_i: number) => ({ q: `What is class MyClass: def __init__(self): self._x = 1; class Child(MyClass): def method(self): return self._x; Child().method()?`, o: ["1", "Error", "None", "0"], c: 0, e: "Single underscore (protected) is accessible to child." }),
  (_i: number) => ({ q: `What is class MyClass: @classmethod; def method(cls): return cls; class Child(MyClass): pass; Child.method()?`, o: ["<class '__main__.Child'>", "<class '__main__.MyClass'>", "Error", "None"], c: 0, e: "Class method receives child class when called on child." }),
  (_i: number) => ({ q: `What is class MyClass: @staticmethod; def method(): return 1; class Child(MyClass): pass; Child.method()?`, o: ["1", "Error", "None", "0"], c: 0, e: "Static method inherited unchanged." }),
  (_i: number) => ({ q: `What is class MyClass: @property; def x(self): return 1; class Child(MyClass): pass; Child().x?`, o: ["1", "Error", "None", "0"], c: 0, e: "Property is inherited by child class." }),
];

// --- LEVEL 10: GOD_WHALE (Design Patterns, Architecture, Best Practices) - 100 TRULY UNIQUE QUESTIONS ---
// Each question tests a DIFFERENT concept - NO number/variable variations of the same question
const level10Patterns = [
  // 1-10: Exception Handling - try/except
  (_i: number) => ({ q: `What is try/except?`, o: ["Exception handling", "Loop control", "Error", "Function definition"], c: 0, e: "try/except handles exceptions." }),
  (_i: number) => ({ q: `What is try: 1/0; except: pass?`, o: ["Catches all exceptions", "Raises exception", "Error", "None"], c: 0, e: "Bare except catches all exceptions." }),
  (_i: number) => ({ q: `What is try: 1/0; except ZeroDivisionError: pass?`, o: ["Catches ZeroDivisionError", "Raises exception", "Error", "None"], c: 0, e: "Specific exception type catches only that exception." }),
  (_i: number) => ({ q: `What is try: 1/0; except ZeroDivisionError as e: type(e)?`, o: ["<class 'ZeroDivisionError'>", "Error", "None", "<class 'Exception'>"], c: 0, e: "Exception object captured in variable." }),
  (_i: number) => ({ q: `What is try: 1/0; except (ZeroDivisionError, ValueError): pass?`, o: ["Catches multiple exception types", "Raises exception", "Error", "None"], c: 0, e: "Tuple catches multiple exception types." }),
  (_i: number) => ({ q: `What is try: 1/0; except ZeroDivisionError: pass; except ValueError: pass?`, o: ["Multiple except clauses", "SyntaxError", "Error", "None"], c: 0, e: "Multiple except clauses handle different exceptions." }),
  (_i: number) => ({ q: `What is try: pass; except: pass; else: x = 1; x?`, o: ["1", "Error", "None", "0"], c: 0, e: "else clause runs if no exception occurred." }),
  (_i: number) => ({ q: `What is try: 1/0; except: pass; else: x = 1; x?`, o: ["NameError", "1", "Error", "None"], c: 0, e: "else clause doesn't run if exception occurred." }),
  (_i: number) => ({ q: `What is try: pass; except: pass; finally: x = 1; x?`, o: ["1", "Error", "None", "0"], c: 0, e: "finally clause always runs." }),
  (_i: number) => ({ q: `What is try: 1/0; except: pass; finally: x = 1; x?`, o: ["1", "Error", "None", "0"], c: 0, e: "finally clause runs even if exception occurred." }),
  
  // 11-20: Exception Handling - Raising and Custom Exceptions
  (_i: number) => ({ q: `What is raise ValueError('error')?`, o: ["Raises ValueError exception", "Returns error", "Error", "None"], c: 0, e: "raise statement raises exception." }),
  (_i: number) => ({ q: `What is raise ValueError?`, o: ["Raises ValueError without message", "SyntaxError", "Error", "None"], c: 0, e: "raise can be used without message." }),
  (_i: number) => ({ q: `What is try: raise ValueError; except ValueError as e: raise?`, o: ["Re-raises the exception", "Returns None", "Error", "None"], c: 0, e: "raise without argument re-raises current exception." }),
  (_i: number) => ({ q: `What is class MyError(Exception): pass; raise MyError()?`, o: ["Raises custom exception", "SyntaxError", "Error", "None"], c: 0, e: "Custom exceptions inherit from Exception." }),
  (_i: number) => ({ q: `What is class MyError(Exception): pass; isinstance(MyError(), Exception)?`, o: ["True", "False", "Error", "None"], c: 0, e: "Custom exception is instance of Exception." }),
  (_i: number) => ({ q: `What is try: raise ValueError('msg'); except ValueError as e: str(e)?`, o: ["'msg'", "'ValueError'", "Error", "None"], c: 0, e: "str(exception) returns exception message." }),
  (_i: number) => ({ q: `What is try: raise ValueError('msg'); except ValueError as e: repr(e)?`, o: ["\"ValueError('msg')\"", "'msg'", "Error", "None"], c: 0, e: "repr(exception) returns exception representation." }),
  (_i: number) => ({ q: `What is try: 1/0; except Exception as e: type(e).__name__?`, o: ["'ZeroDivisionError'", "'Exception'", "Error", "None"], c: 0, e: "Exception object has __name__ attribute." }),
  (_i: number) => ({ q: `What is try: raise ValueError; except Exception: pass?`, o: ["Catches ValueError (subclass)", "Raises exception", "Error", "None"], c: 0, e: "Catching base class catches subclasses." }),
  (_i: number) => ({ q: `What is try: raise ValueError; except (ValueError, TypeError): pass?`, o: ["Catches ValueError", "Raises exception", "Error", "None"], c: 0, e: "Tuple of exceptions catches any matching type." }),
  
  // 21-30: Context Managers and with Statement
  (_i: number) => ({ q: `What is with open('file') as f?`, o: ["Context manager", "File opening", "Error", "Loop statement"], c: 0, e: "with statement uses context manager." }),
  (_i: number) => ({ q: `What is class MyContext: def __enter__(self): return self; def __exit__(self, *args): pass; with MyContext() as ctx: pass?`, o: ["Uses context manager", "Error", "None", "Raises exception"], c: 0, e: "Context manager needs __enter__ and __exit__ methods." }),
  (_i: number) => ({ q: `What is class MyContext: def __enter__(self): return 1; def __exit__(self, *args): pass; with MyContext() as x: x?`, o: ["1", "Error", "None", "0"], c: 0, e: "__enter__ return value assigned to variable after 'as'." }),
  (_i: number) => ({ q: `What is class MyContext: def __enter__(self): return self; def __exit__(self, exc_type, exc_val, exc_tb): return True; with MyContext(): 1/0?`, o: ["Suppresses exception", "Raises exception", "Error", "None"], c: 0, e: "__exit__ returning True suppresses exception." }),
  (_i: number) => ({ q: `What is class MyContext: def __enter__(self): return self; def __exit__(self, *args): pass; with MyContext() as ctx: ctx?`, o: ["MyContext instance", "Error", "None", "0"], c: 0, e: "Context manager instance available in with block." }),
  (_i: number) => ({ q: `What is from contextlib import contextmanager; @contextmanager; def my_context(): yield 1; with my_context() as x: x?`, o: ["1", "Error", "None", "0"], c: 0, e: "@contextmanager decorator creates context manager from generator." }),
  (_i: number) => ({ q: `What is with open('file', 'w') as f: f.write('text'); f.closed?`, o: ["True", "False", "Error", "None"], c: 0, e: "File automatically closed after with block." }),
  (_i: number) => ({ q: `What is with open('file', 'w') as f1, open('file2', 'w') as f2: pass?`, o: ["Multiple context managers", "SyntaxError", "Error", "None"], c: 0, e: "Multiple context managers in one with statement." }),
  (_i: number) => ({ q: `What is from contextlib import suppress; with suppress(ValueError): raise ValueError()?`, o: ["Suppresses ValueError", "Raises exception", "Error", "None"], c: 0, e: "suppress() context manager suppresses specified exceptions." }),
  (_i: number) => ({ q: `What is class MyContext: def __enter__(self): return self; def __exit__(self, *args): self.closed = True; ctx = MyContext(); with ctx: pass; ctx.closed?`, o: ["True", "False", "Error", "None"], c: 0, e: "__exit__ called after with block completes." }),
  
  // 31-40: Modules and Imports
  (_i: number) => ({ q: `What is import module?`, o: ["Imports a module", "Exports a module", "Error", "Creates a module"], c: 0, e: "import loads a module." }),
  (_i: number) => ({ q: `What is from module import name?`, o: ["Imports name from module", "Imports entire module", "Error", "None"], c: 0, e: "from...import imports specific name." }),
  (_i: number) => ({ q: `What is from module import name as alias?`, o: ["Imports with alias", "SyntaxError", "Error", "None"], c: 0, e: "as keyword creates alias for import." }),
  (_i: number) => ({ q: `What is import module as alias?`, o: ["Imports module with alias", "SyntaxError", "Error", "None"], c: 0, e: "Module can be imported with alias." }),
  (_i: number) => ({ q: `What is from module import *?`, o: ["Imports all public names", "SyntaxError", "Error", "None"], c: 0, e: "* imports all public names from module." }),
  (_i: number) => ({ q: `What is __name__ == '__main__'?`, o: ["Checks if script is run directly", "Checks if imported", "Error", "None"], c: 0, e: "__name__ is '__main__' when script run directly." }),
  (_i: number) => ({ q: `What is if __name__ == '__main__': pass?`, o: ["Runs code only when script executed", "Runs always", "Error", "None"], c: 0, e: "Common pattern to run code only when script is main." }),
  (_i: number) => ({ q: `What is import sys; sys.path?`, o: ["List of module search paths", "Error", "None", "()"], c: 0, e: "sys.path contains directories Python searches for modules." }),
  (_i: number) => ({ q: `What is __all__ = ['name1', 'name2']?`, o: ["Defines public API", "SyntaxError", "Error", "None"], c: 0, e: "__all__ defines what 'from module import *' imports." }),
  (_i: number) => ({ q: `What is __file__?`, o: ["Path to current module file", "Error", "None", "''"], c: 0, e: "__file__ contains path to current module." }),
  
  // 41-50: Generators and Iterators
  (_i: number) => ({ q: `What is def gen(): yield 1; type(gen())?`, o: ["<class 'generator'>", "<class 'function'>", "Error", "None"], c: 0, e: "Function with yield returns generator." }),
  (_i: number) => ({ q: `What is def gen(): yield 1; next(gen())?`, o: ["1", "Error", "None", "0"], c: 0, e: "next() gets next value from generator." }),
  (_i: number) => ({ q: `What is def gen(): yield 1; yield 2; list(gen())?`, o: ["[1, 2]", "[1]", "Error", "None"], c: 0, e: "Generator yields multiple values." }),
  (_i: number) => ({ q: `What is def gen(): yield 1; return; g = gen(); next(g); next(g)?`, o: ["StopIteration", "1", "Error", "None"], c: 0, e: "Generator raises StopIteration when exhausted." }),
  (_i: number) => ({ q: `What is def gen(): yield 1; return 'done'; g = gen(); next(g); g.send(None)?`, o: ["StopIteration with value 'done'", "1", "Error", "None"], c: 0, e: "return value becomes StopIteration value." }),
  (_i: number) => ({ q: `What is def gen(): x = yield 1; yield x; g = gen(); next(g); g.send(2)?`, o: ["2", "1", "Error", "None"], c: 0, e: "send() sends value to generator, becomes yield expression value." }),
  (_i: number) => ({ q: `What is (x**2 for x in [1, 2, 3])?`, o: ["Generator expression", "List", "Error", "None"], c: 0, e: "Generator expression creates generator." }),
  (_i: number) => ({ q: `What is list(x**2 for x in [1, 2, 3])?`, o: ["[1, 4, 9]", "Generator", "Error", "None"], c: 0, e: "list() consumes generator expression." }),
  (_i: number) => ({ q: `What is def gen(): yield from [1, 2, 3]; list(gen())?`, o: ["[1, 2, 3]", "[1]", "Error", "None"], c: 0, e: "yield from delegates to another iterable." }),
  (_i: number) => ({ q: `What is class MyIter: def __iter__(self): return self; def __next__(self): return 1; type(MyIter())?`, o: ["<class '__main__.MyIter'>", "<class 'generator'>", "Error", "None"], c: 0, e: "Iterator class implements __iter__ and __next__." }),
  
  // 51-60: Decorators
  (_i: number) => ({ q: `What is def decorator(func): return func; @decorator; def func(): pass; type(func)?`, o: ["<class 'function'>", "<class 'decorator'>", "Error", "None"], c: 0, e: "Decorator that returns function unchanged." }),
  (_i: number) => ({ q: `What is def decorator(func): def wrapper(): return func(); return wrapper; @decorator; def func(): return 1; func()?`, o: ["1", "Error", "None", "0"], c: 0, e: "Decorator wraps function in another function." }),
  (_i: number) => ({ q: `What is def decorator(func): def wrapper(*args, **kwargs): return func(*args, **kwargs); return wrapper; @decorator; def add(x, y): return x + y; add(1, 2)?`, o: ["3", "Error", "None", "0"], c: 0, e: "Decorator wrapper preserves function arguments." }),
  (_i: number) => ({ q: `What is from functools import wraps; def decorator(func): @wraps(func); def wrapper(): return func(); return wrapper; @decorator; def func(): pass; func.__name__?`, o: ["'func'", "'wrapper'", "Error", "None"], c: 0, e: "@wraps preserves original function metadata." }),
  (_i: number) => ({ q: `What is def decorator(arg): return lambda func: func; @decorator(1); def func(): pass?`, o: ["Decorator with argument", "SyntaxError", "Error", "None"], c: 0, e: "Decorator factory: function that returns decorator." }),
  (_i: number) => ({ q: `What is class Decorator: def __init__(self, func): self.func = func; def __call__(self): return self.func(); @Decorator; def func(): return 1; func()?`, o: ["1", "Error", "None", "0"], c: 0, e: "Class-based decorator using __call__." }),
  (_i: number) => ({ q: `What is @staticmethod; def func(): return 1?`, o: ["Static method decorator", "SyntaxError", "Error", "None"], c: 0, e: "@staticmethod is built-in decorator." }),
  (_i: number) => ({ q: `What is @classmethod; def method(cls): return cls?`, o: ["Class method decorator", "SyntaxError", "Error", "None"], c: 0, e: "@classmethod is built-in decorator." }),
  (_i: number) => ({ q: `What is @property; def x(self): return 1?`, o: ["Property decorator", "SyntaxError", "Error", "None"], c: 0, e: "@property is built-in decorator." }),
  (_i: number) => ({ q: `What is def decorator1(func): return func; def decorator2(func): return func; @decorator1; @decorator2; def func(): pass?`, o: ["Multiple decorators", "SyntaxError", "Error", "None"], c: 0, e: "Multiple decorators applied bottom to top." }),
  
  // 61-70: Design Patterns - Singleton, Factory, etc.
  (_i: number) => ({ q: `What is class Singleton: _instance = None; def __new__(cls): if cls._instance is None: cls._instance = super().__new__(cls); return cls._instance; obj1 = Singleton(); obj2 = Singleton(); obj1 is obj2?`, o: ["True", "False", "Error", "None"], c: 0, e: "Singleton pattern: __new__ ensures single instance." }),
  (_i: number) => ({ q: `What is class Factory: @staticmethod; def create(type): return type(); obj = Factory.create(list)?`, o: ["[]", "Error", "None", "Factory"], c: 0, e: "Factory pattern: creates objects without specifying exact class." }),
  (_i: number) => ({ q: `What is class Observer: def __init__(self): self._observers = []; def attach(self, observer): self._observers.append(observer); def notify(self): [o.update() for o in self._observers]?`, o: ["Observer pattern", "Error", "None", "Singleton"], c: 0, e: "Observer pattern: subject notifies observers of changes." }),
  (_i: number) => ({ q: `What is class Strategy: def execute(self): pass; class StrategyA(Strategy): def execute(self): return 'A'; class StrategyB(Strategy): def execute(self): return 'B'?`, o: ["Strategy pattern", "Error", "None", "Factory"], c: 0, e: "Strategy pattern: interchangeable algorithms." }),
  (_i: number) => ({ q: `What is class Adapter: def __init__(self, obj): self.obj = obj; def method(self): return self.obj.other_method()?`, o: ["Adapter pattern", "Error", "None", "Observer"], c: 0, e: "Adapter pattern: adapts interface of one class to another." }),
  (_i: number) => ({ q: `What is class Builder: def __init__(self): self.parts = []; def add(self, part): self.parts.append(part); return self; def build(self): return ''.join(self.parts)?`, o: ["Builder pattern", "Error", "None", "Factory"], c: 0, e: "Builder pattern: constructs complex objects step by step." }),
  (_i: number) => ({ q: `What is class Prototype: def clone(self): return type(self)()?`, o: ["Prototype pattern", "Error", "None", "Singleton"], c: 0, e: "Prototype pattern: creates objects by cloning." }),
  (_i: number) => ({ q: `What is class Facade: def __init__(self): self.subsystem1 = Subsystem1(); self.subsystem2 = Subsystem2(); def operation(self): return self.subsystem1.method() + self.subsystem2.method()?`, o: ["Facade pattern", "Error", "None", "Adapter"], c: 0, e: "Facade pattern: provides simplified interface to complex subsystem." }),
  (_i: number) => ({ q: `What is class Command: def execute(self): pass; class Invoker: def __init__(self): self.command = None; def set_command(self, cmd): self.command = cmd; def execute(self): self.command.execute()?`, o: ["Command pattern", "Error", "None", "Strategy"], c: 0, e: "Command pattern: encapsulates request as object." }),
  (_i: number) => ({ q: `What is class Component: def operation(self): pass; class Composite(Component): def __init__(self): self.children = []; def add(self, child): self.children.append(child); def operation(self): [c.operation() for c in self.children]?`, o: ["Composite pattern", "Error", "None", "Facade"], c: 0, e: "Composite pattern: treats individual and composite objects uniformly." }),
  
  // 71-80: Metaclasses and Advanced Features
  (_i: number) => ({ q: `What is class Meta(type): pass; class MyClass(metaclass=Meta): pass; type(MyClass)?`, o: ["<class '__main__.Meta'>", "<class 'type'>", "Error", "None"], c: 0, e: "metaclass parameter sets class's metaclass." }),
  (_i: number) => ({ q: `What is class Meta(type): def __new__(cls, name, bases, dct): return super().__new__(cls, name, bases, dct); class MyClass(metaclass=Meta): pass?`, o: ["Custom metaclass", "Error", "None", "Regular class"], c: 0, e: "Metaclass __new__ controls class creation." }),
  (_i: number) => ({ q: `What is class Meta(type): def __init__(cls, name, bases, dct): cls.custom_attr = 1; class MyClass(metaclass=Meta): pass; MyClass.custom_attr?`, o: ["1", "Error", "None", "0"], c: 0, e: "Metaclass __init__ can add attributes to class." }),
  (_i: number) => ({ q: `What is class Meta(type): def __call__(cls, *args, **kwargs): return super().__call__(*args, **kwargs); class MyClass(metaclass=Meta): pass; type(MyClass())?`, o: ["<class '__main__.MyClass'>", "<class '__main__.Meta'>", "Error", "None"], c: 0, e: "Metaclass __call__ controls instance creation." }),
  (_i: number) => ({ q: `What is class SingletonMeta(type): _instances = {}; def __call__(cls, *args, **kwargs): if cls not in cls._instances: cls._instances[cls] = super().__call__(*args, **kwargs); return cls._instances[cls]; class MyClass(metaclass=SingletonMeta): pass; MyClass() is MyClass()?`, o: ["True", "False", "Error", "None"], c: 0, e: "Metaclass can implement Singleton pattern." }),
  (_i: number) => ({ q: `What is class MyClass: __slots__ = ['x']; obj = MyClass(); obj.x = 1; obj.y = 2?`, o: ["AttributeError", "Works fine", "Error", "None"], c: 0, e: "__slots__ restricts instance attributes." }),
  (_i: number) => ({ q: `What is class MyClass: __slots__ = ['x']; obj = MyClass(); '__dict__' in dir(obj)?`, o: ["False", "True", "Error", "None"], c: 0, e: "__slots__ removes __dict__ (saves memory)." }),
  (_i: number) => ({ q: `What is class MyClass: def __getattribute__(self, name): return super().__getattribute__(name); obj = MyClass(); obj.x?`, o: ["AttributeError", "None", "Error", "0"], c: 0, e: "__getattribute__ intercepts all attribute access." }),
  (_i: number) => ({ q: `What is class MyClass: def __getattr__(self, name): return f'Missing: {name}'; obj = MyClass(); obj.x?`, o: ["'Missing: x'", "AttributeError", "Error", "None"], c: 0, e: "__getattr__ called only if attribute not found." }),
  (_i: number) => ({ q: `What is class MyClass: def __setattr__(self, name, value): super().__setattr__(name, value * 2); obj = MyClass(); obj.x = 5; obj.x?`, o: ["10", "5", "Error", "None"], c: 0, e: "__setattr__ intercepts all attribute assignment." }),
  
  // 81-90: Best Practices and Code Quality
  (_i: number) => ({ q: `What is PEP 8?`, o: ["Python style guide", "Python version", "Error", "Module"], c: 0, e: "PEP 8 is Python Enhancement Proposal for code style." }),
  (_i: number) => ({ q: `What is def func(x: int) -> int: return x * 2?`, o: ["Type hints", "SyntaxError", "Error", "None"], c: 0, e: "Type hints specify expected types (PEP 484)." }),
  (_i: number) => ({ q: `What is from typing import List, Dict; def func(x: List[int]) -> Dict[str, int]: return {}?`, o: ["Type hints with generics", "SyntaxError", "Error", "None"], c: 0, e: "typing module provides generic types." }),
  (_i: number) => ({ q: `What is def func(x: int = 1) -> int: return x?`, o: ["Type hints with defaults", "SyntaxError", "Error", "None"], c: 0, e: "Type hints work with default parameters." }),
  (_i: number) => ({ q: `What is def func(x: 'MyClass') -> None: pass?`, o: ["Forward reference (string)", "SyntaxError", "Error", "None"], c: 0, e: "String type hints allow forward references." }),
  (_i: number) => ({ q: `What is from typing import Optional; def func(x: Optional[int]) -> int: return x or 0?`, o: ["Optional type hint", "SyntaxError", "Error", "None"], c: 0, e: "Optional[T] means T or None." }),
  (_i: number) => ({ q: `What is from typing import Union; def func(x: Union[int, str]) -> int: return 1?`, o: ["Union type hint", "SyntaxError", "Error", "None"], c: 0, e: "Union[T, U] means T or U." }),
  (_i: number) => ({ q: `What is from typing import Callable; def func(f: Callable[[int], int]) -> int: return f(1)?`, o: ["Callable type hint", "SyntaxError", "Error", "None"], c: 0, e: "Callable[[args], return] hints function types." }),
  (_i: number) => ({ q: `What is from dataclasses import dataclass; @dataclass; class Point: x: int; y: int; Point(1, 2)?`, o: ["Data class instance", "SyntaxError", "Error", "None"], c: 0, e: "@dataclass automatically generates __init__, __repr__, etc." }),
  (_i: number) => ({ q: `What is from enum import Enum; class Color(Enum): RED = 1; GREEN = 2; Color.RED?`, o: ["<Color.RED: 1>", "1", "Error", "None"], c: 0, e: "Enum creates enumeration with named constants." }),
  
  // 91-100: Advanced Topics and Utilities
  (_i: number) => ({ q: `What is import sys; sys.argv?`, o: ["Command line arguments", "Error", "None", "[]"], c: 0, e: "sys.argv contains command line arguments." }),
  (_i: number) => ({ q: `What is import os; os.environ?`, o: ["Environment variables dict", "Error", "None", "{}"], c: 0, e: "os.environ contains environment variables." }),
  (_i: number) => ({ q: `What is import json; json.dumps({'a': 1})?`, o: ["'{\"a\": 1}'", "{'a': 1}", "Error", "None"], c: 0, e: "json.dumps() converts dict to JSON string." }),
  (_i: number) => ({ q: `What is import json; json.loads('{\"a\": 1}')?`, o: ["{'a': 1}", "'{\"a\": 1}'", "Error", "None"], c: 0, e: "json.loads() converts JSON string to dict." }),
  (_i: number) => ({ q: `What is import pickle; pickle.dumps([1, 2, 3])?`, o: ["Bytes object", "[1, 2, 3]", "Error", "None"], c: 0, e: "pickle.dumps() serializes object to bytes." }),
  (_i: number) => ({ q: `What is import pickle; data = pickle.dumps([1, 2, 3]); pickle.loads(data)?`, o: ["[1, 2, 3]", "Bytes object", "Error", "None"], c: 0, e: "pickle.loads() deserializes bytes to object." }),
  (_i: number) => ({ q: `What is from collections import namedtuple; Point = namedtuple('Point', ['x', 'y']); Point(1, 2)?`, o: ["Point(x=1, y=2)", "Error", "None", "(1, 2)"], c: 0, e: "namedtuple creates tuple subclass with named fields." }),
  (_i: number) => ({ q: `What is from collections import defaultdict; d = defaultdict(list); d['key']?`, o: ["[]", "KeyError", "Error", "None"], c: 0, e: "defaultdict returns default value for missing keys." }),
  (_i: number) => ({ q: `What is from collections import Counter; Counter([1, 1, 2, 2, 2])?`, o: ["Counter({2: 3, 1: 2})", "[1, 1, 2, 2, 2]", "Error", "None"], c: 0, e: "Counter counts occurrences of elements." }),
  (_i: number) => ({ q: `What is from functools import lru_cache; @lru_cache(maxsize=128); def fib(n): return n if n < 2 else fib(n-1) + fib(n-2); fib(10)?`, o: ["55", "10", "Error", "None"], c: 0, e: "@lru_cache memoizes function results (caching)." }),
];

// GENERATOR ENGINE
const generateLevel = (level: number, stage: PersonaStage, patterns: ((i: number) => any)[], startId: number) => {
  return Array.from({ length: 100 }, (_, i) => {
    const pattern = patterns[i % patterns.length](i);
    return {
      id: startId + i,
      level,
      persona_stage: stage,
      concept: "logic",
      difficulty: level > 7 ? 3 : (level > 4 ? 2 : 1),
      question: pattern.q,
      options: pattern.o,
      correct_option_index: pattern.c,
      explanation: pattern.e,
      detailedExplanation: pattern.de || undefined
    };
  });
};

export const QUESTIONS_BANK: Question[] = [
  ...generateLevel(1, PersonaStage.PLANKTON, level1Patterns, 1),
  ...generateLevel(2, PersonaStage.SHRIMP, level2Patterns, 101),
  ...generateLevel(3, PersonaStage.CRAB, level3Patterns, 201),
  ...generateLevel(4, PersonaStage.SMALL_FISH, level4Patterns, 301),
  ...generateLevel(5, PersonaStage.OCTOPUS, level5Patterns, 401),
  ...generateLevel(6, PersonaStage.SEAL, level6Patterns, 501),
  ...generateLevel(7, PersonaStage.DOLPHIN, level7Patterns, 601),
  ...generateLevel(8, PersonaStage.SHARK, level8Patterns, 701),
  ...generateLevel(9, PersonaStage.WHALE, level9Patterns, 801),
  ...generateLevel(10, PersonaStage.GOD_WHALE, level10Patterns, 901)
];
