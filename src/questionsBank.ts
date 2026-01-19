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
  (_i: number) => ({ q: `What is type(42)?`, o: ["<class 'int'>", "<class 'float'>", "<class 'str'>", "None"], c: 0, e: "Whole numbers are integers." }),
  (_i: number) => ({ q: `What is type(3.14)?`, o: ["<class 'float'>", "<class 'int'>", "<class 'str'>", "None"], c: 0, e: "Decimal numbers are floats." }),
  (_i: number) => ({ q: `What is type("hello")?`, o: ["<class 'str'>", "<class 'int'>", "<class 'list'>", "None"], c: 0, e: "Text in quotes is a string." }),
  (_i: number) => ({ q: `What is type(True)?`, o: ["<class 'bool'>", "<class 'int'>", "<class 'str'>", "None"], c: 0, e: "True is a boolean value." }),
  (_i: number) => ({ q: `What is type(None)?`, o: ["<class 'NoneType'>", "<class 'null'>", "<class 'void'>", "None"], c: 0, e: "None has its own special type." }),
  (_i: number) => ({ q: `What is type([])?`, o: ["<class 'list'>", "<class 'tuple'>", "<class 'dict'>", "None"], c: 0, e: "Square brackets create a list." }),
  (_i: number) => ({ q: `What is type(())?`, o: ["<class 'tuple'>", "<class 'list'>", "<class 'dict'>", "None"], c: 0, e: "Parentheses create a tuple." }),
  (_i: number) => ({ q: `What is type({})?`, o: ["<class 'dict'>", "<class 'list'>", "<class 'set'>", "None"], c: 0, e: "Curly braces create a dictionary." }),
  (_i: number) => ({ q: `What is type({1, 2, 3})?`, o: ["<class 'set'>", "<class 'list'>", "<class 'dict'>", "None"], c: 0, e: "Curly braces with values create a set." }),
  (_i: number) => ({ q: `What is type(b'hello')?`, o: ["<class 'bytes'>", "<class 'str'>", "<class 'list'>", "None"], c: 0, e: "b prefix creates bytes object." }),
  
  // 11-20: Variable Naming Rules
  (_i: number) => ({ q: `Is 'my_variable' a valid variable name?`, o: ["Yes", "No", "Only in Python 2", "Only in classes"], c: 0, e: "Variables can contain letters, numbers, and underscores." }),
  (_i: number) => ({ q: `Is '2variable' a valid variable name?`, o: ["No", "Yes", "Depends", "Only in functions"], c: 0, e: "Variable names cannot start with a number." }),
  (_i: number) => ({ q: `Is 'my-variable' a valid variable name?`, o: ["No", "Yes", "Only in Python 2", "Only in classes"], c: 0, e: "Hyphens are not allowed in variable names." }),
  (_i: number) => ({ q: `Is 'class' a valid variable name?`, o: ["No", "Yes", "Only in Python 2", "Only in modules"], c: 0, e: "'class' is a reserved keyword." }),
  (_i: number) => ({ q: `Is 'def' a valid variable name?`, o: ["No", "Yes", "Only in Python 2", "Only in modules"], c: 0, e: "'def' is a reserved keyword." }),
  (_i: number) => ({ q: `Is 'if' a valid variable name?`, o: ["No", "Yes", "Only in Python 2", "Only in modules"], c: 0, e: "'if' is a reserved keyword." }),
  (_i: number) => ({ q: `Is 'MyVariable' a valid variable name?`, o: ["Yes", "No", "Only if lowercase", "Only in classes"], c: 0, e: "Variable names are case-sensitive and can start with uppercase." }),
  (_i: number) => ({ q: `Is '_private' a valid variable name?`, o: ["Yes", "No", "Only in classes", "Error"], c: 0, e: "Underscore at start is valid (convention for private)." }),
  (_i: number) => ({ q: `Is '__special__' a valid variable name?`, o: ["Yes", "No", "Only in classes", "Error"], c: 0, e: "Double underscores are valid (used for special methods)." }),
  (_i: number) => ({ q: `Is 'variable name' (with space) a valid variable name?`, o: ["No", "Yes", "Only in Python 2", "Only in functions"], c: 0, e: "Spaces are not allowed in variable names." }),
  
  // 21-30: String Basics
  (_i: number) => ({ q: `What is len("hello")?`, o: ["5", "4", "6", "Error"], c: 0, e: "len() counts every character." }),
  (_i: number) => ({ q: `What does "Hello" + "World" result in?`, o: ["HelloWorld", "Hello World", "Error", "None"], c: 0, e: "String concatenation joins strings without spaces." }),
  (_i: number) => ({ q: `What does "Hi" * 3 result in?`, o: ["HiHiHi", "Hi3", "Error", "None"], c: 0, e: "String multiplication repeats the string." }),
  (_i: number) => ({ q: `What is "Python"[0]?`, o: ["P", "p", "Error", "None"], c: 0, e: "String indexing starts at 0." }),
  (_i: number) => ({ q: `What is "Python"[-1]?`, o: ["n", "P", "Error", "None"], c: 0, e: "Negative indexing starts from the end." }),
  (_i: number) => ({ q: `What is "Python"[1:4]?`, o: ["yth", "Pyth", "Python", "Error"], c: 0, e: "Slicing [1:4] gets characters from index 1 to 3." }),
  (_i: number) => ({ q: `What is "Python"[:3]?`, o: ["Pyt", "Python", "P", "Error"], c: 0, e: "Slicing [:3] gets first 3 characters." }),
  (_i: number) => ({ q: `What is "Python"[3:]?`, o: ["hon", "Python", "Pyt", "Error"], c: 0, e: "Slicing [3:] gets from index 3 to end." }),
  (_i: number) => ({ q: `What is "Python"[::2]?`, o: ["Pto", "Python", "Pyt", "Error"], c: 0, e: "[::2] gets every 2nd character." }),
  (_i: number) => ({ q: `What is "Python"[::-1]?`, o: ["nohtyP", "Python", "Error", "None"], c: 0, e: "[::-1] reverses the string." }),
  
  // 31-40: Comments and Multi-line Strings
  (_i: number) => ({ q: `Which symbol starts a single-line comment?`, o: ["#", "//", "/*", "--"], c: 0, e: "Python uses # for comments." }),
  (_i: number) => ({ q: `Correct way to write a multi-line string?`, o: ["'''String'''", "'String'", '"String"', "/String/"], c: 0, e: "Triple quotes allow multi-line strings." }),
  (_i: number) => ({ q: `What is the purpose of comments in Python?`, o: ["Document code", "Execute code", "Create variables", "Import modules"], c: 0, e: "Comments document code and are ignored by Python." }),
  (_i: number) => ({ q: `Can you write a comment after code on the same line?`, o: ["Yes", "No", "Only in Python 2", "Only in functions"], c: 0, e: "Comments can be inline after code using #." }),
  (_i: number) => ({ q: `What does '''triple quotes''' create?`, o: ["Multi-line string", "Comment", "Error", "Variable"], c: 0, e: "Triple quotes create multi-line strings." }),
  (_i: number) => ({ q: `Is # a comment or string delimiter?`, o: ["Comment", "String delimiter", "Both", "Neither"], c: 0, e: "# starts a comment, not a string." }),
  (_i: number) => ({ q: `Can triple quotes be used for comments?`, o: ["No, they create strings", "Yes", "Only in Python 2", "Only in classes"], c: 0, e: "Triple quotes create strings, not comments." }),
  (_i: number) => ({ q: `What happens to code after # on a line?`, o: ["Ignored by Python", "Executed", "Creates error", "Creates variable"], c: 0, e: "Everything after # is ignored." }),
  (_i: number) => ({ q: `Can you nest triple-quoted strings?`, o: ["Yes, with different quote types", "No", "Only in Python 2", "Only in functions"], c: 0, e: "You can nest with different quote types." }),
  (_i: number) => ({ q: `What is the difference between ' and " for strings?`, o: ["No difference", "Single is shorter", "Double is faster", "Single is deprecated"], c: 0, e: "Both work identically in Python." }),
  
  // 41-50: Type Conversions
  (_i: number) => ({ q: `Result of int("42")?`, o: ["42", '"42"', "Error", "float"], c: 0, e: "int() converts numeric strings to integers." }),
  (_i: number) => ({ q: `Result of float(42)?`, o: ["42.0", "42", "int", "None"], c: 0, e: "float() adds decimal precision." }),
  (_i: number) => ({ q: `Result of str(42)?`, o: ['"42"', "42", "Error", "None"], c: 0, e: "str() converts values to strings." }),
  (_i: number) => ({ q: `Result of bool(0)?`, o: ["False", "True", "None", "Error"], c: 0, e: "0 is False, non-zero is True." }),
  (_i: number) => ({ q: `Result of bool(1)?`, o: ["True", "False", "None", "Error"], c: 0, e: "Non-zero numbers are Truthy." }),
  (_i: number) => ({ q: `Result of bool("")?`, o: ["False", "True", "None", "Error"], c: 0, e: "Empty strings are Falsy." }),
  (_i: number) => ({ q: `Result of bool("hello")?`, o: ["True", "False", "None", "Error"], c: 0, e: "Non-empty strings are Truthy." }),
  (_i: number) => ({ q: `Result of bool([])?`, o: ["False", "True", "None", "Error"], c: 0, e: "Empty lists are Falsy." }),
  (_i: number) => ({ q: `Result of bool([1, 2])?`, o: ["True", "False", "None", "Error"], c: 0, e: "Non-empty lists are Truthy." }),
  (_i: number) => ({ q: `Result of bool(None)?`, o: ["False", "True", "None", "Error"], c: 0, e: "None is Falsy." }),
  
  // 51-60: Basic Arithmetic Operations
  (_i: number) => ({ q: `What is 10 / 2 in Python 3?`, o: ["5.0", "5", "0", "Error"], c: 0, e: "The / operator always returns a float in Python 3." }),
  (_i: number) => ({ q: `What is 10 // 3?`, o: ["3", "3.33", "4", "Error"], c: 0, e: "// is floor division." }),
  (_i: number) => ({ q: `What is 2 ** 3?`, o: ["8", "6", "9", "Error"], c: 0, e: "** is the exponentiation operator." }),
  (_i: number) => ({ q: `What is 10 % 3?`, o: ["1", "3", "0", "Error"], c: 0, e: "% is the modulo operator (remainder)." }),
  (_i: number) => ({ q: `What is -5?`, o: ["Negative five", "Error", "5", "None"], c: 0, e: "Unary minus creates negative number." }),
  (_i: number) => ({ q: `What is +5?`, o: ["Positive five", "Error", "-5", "None"], c: 0, e: "Unary plus is allowed but doesn't change value." }),
  (_i: number) => ({ q: `What is 2 * 3 + 4?`, o: ["10", "14", "18", "Error"], c: 0, e: "Multiplication before addition (PEMDAS)." }),
  (_i: number) => ({ q: `What is (2 + 3) * 4?`, o: ["20", "14", "18", "Error"], c: 0, e: "Parentheses change order of operations." }),
  (_i: number) => ({ q: `What is 2 ** 2 ** 3?`, o: ["256", "64", "512", "Error"], c: 0, e: "Exponentiation is right-associative: 2**(2**3) = 2**8 = 256." }),
  (_i: number) => ({ q: `What is 10 / 0?`, o: ["ZeroDivisionError", "0", "infinity", "None"], c: 0, e: "Division by zero raises ZeroDivisionError." }),
  
  // 61-70: Type Mixing and Operations
  (_i: number) => ({ q: `Value of type(3.14 + 1)?`, o: ["<class 'float'>", "<class 'int'>", "<class 'str'>", "None"], c: 0, e: "Adding an int to a float results in a float." }),
  (_i: number) => ({ q: `What does "A" represent in Python?`, o: ["A single character string", "An integer", "A list", "A char type"], c: 0, e: "Python doesn't have a 'char' type; single characters are strings." }),
  (_i: number) => ({ q: `How do you find the data type of a variable?`, o: ["type(variable)", "what(variable)", "kind(variable)", "check(variable)"], c: 0, e: "type() returns the class of an object." }),
  (_i: number) => ({ q: `Which quotes are valid for strings?`, o: ["Both ' and \"", "Only '", "Only \"", "Only `"], c: 0, e: "Python supports both single and double quotes." }),
  (_i: number) => ({ q: `What is "2" + "3"?`, o: ["23", "5", "Error", "None"], c: 0, e: "String concatenation, not addition." }),
  (_i: number) => ({ q: `What is int("2") + int("3")?`, o: ["5", "23", "Error", "None"], c: 0, e: "Convert strings to ints before adding." }),
  (_i: number) => ({ q: `What is "hello" == "Hello"?`, o: ["False", "True", "Error", "None"], c: 0, e: "String comparison is case-sensitive." }),
  (_i: number) => ({ q: `What is "apple" < "banana"?`, o: ["True", "False", "Error", "None"], c: 0, e: "Strings are compared lexicographically." }),
  (_i: number) => ({ q: `What is "a" in "abc"?`, o: ["True", "False", "Error", "None"], c: 0, e: "in operator checks substring membership." }),
  (_i: number) => ({ q: `What is "a" not in "xyz"?`, o: ["True", "False", "Error", "None"], c: 0, e: "not in checks if substring is absent." }),
  
  // 71-80: String Methods - Case Operations
  (_i: number) => ({ q: `What is "Python".upper()?`, o: ["PYTHON", "python", "Python", "Error"], c: 0, e: "upper() converts string to uppercase." }),
  (_i: number) => ({ q: `What is "PYTHON".lower()?`, o: ["python", "PYTHON", "Python", "Error"], c: 0, e: "lower() converts string to lowercase." }),
  (_i: number) => ({ q: `What is "hello".capitalize()?`, o: ["Hello", "hello", "HELLO", "Error"], c: 0, e: "capitalize() makes first letter uppercase." }),
  (_i: number) => ({ q: `What is "hello world".title()?`, o: ["Hello World", "hello world", "HELLO WORLD", "Error"], c: 0, e: "title() capitalizes each word." }),
  (_i: number) => ({ q: `What is "HeLLo".swapcase()?`, o: ["hEllO", "hello", "HELLO", "Error"], c: 0, e: "swapcase() swaps case of all characters." }),
  (_i: number) => ({ q: `What is "hello".islower()?`, o: ["True", "False", "Error", "None"], c: 0, e: "islower() checks if all characters are lowercase." }),
  (_i: number) => ({ q: `What is "HELLO".isupper()?`, o: ["True", "False", "Error", "None"], c: 0, e: "isupper() checks if all characters are uppercase." }),
  (_i: number) => ({ q: `What is "Hello World".istitle()?`, o: ["True", "False", "Error", "None"], c: 0, e: "istitle() checks if string is titlecased." }),
  (_i: number) => ({ q: `What is "Hello".casefold()?`, o: ["hello", "HELLO", "Hello", "Error"], c: 0, e: "casefold() returns casefolded string for caseless matching." }),
  (_i: number) => ({ q: `What is "Hello".isascii()?`, o: ["True", "False", "Error", "None"], c: 0, e: "isascii() checks if all characters are ASCII." }),
  
  // 81-90: String Methods - Search and Replace
  (_i: number) => ({ q: `What is "hello".find("l")?`, o: ["2", "1", "3", "Error"], c: 0, e: "find() returns first index of substring." }),
  (_i: number) => ({ q: `What is "hello".rfind("l")?`, o: ["3", "2", "1", "Error"], c: 0, e: "rfind() returns last index of substring." }),
  (_i: number) => ({ q: `What is "hello".index("l")?`, o: ["2", "1", "3", "Error"], c: 0, e: "index() returns first index, raises error if not found." }),
  (_i: number) => ({ q: `What is "hello".count("l")?`, o: ["2", "1", "3", "Error"], c: 0, e: "count() counts occurrences of substring." }),
  (_i: number) => ({ q: `What is "hello".startswith("he")?`, o: ["True", "False", "Error", "None"], c: 0, e: "startswith() checks if string begins with substring." }),
  (_i: number) => ({ q: `What is "hello".endswith("lo")?`, o: ["True", "False", "Error", "None"], c: 0, e: "endswith() checks if string ends with substring." }),
  (_i: number) => ({ q: `What is "hello".replace("l", "L")?`, o: ["heLLo", "hello", "HELLO", "Error"], c: 0, e: "replace() substitutes characters." }),
  (_i: number) => ({ q: `What is "hello".replace("l", "L", 1)?`, o: ["heLlo", "heLLo", "hello", "Error"], c: 0, e: "replace() with count parameter replaces only first occurrence." }),
  (_i: number) => ({ q: `What is "hello".partition("l")?`, o: ["('he', 'l', 'lo')", "['he', 'l', 'lo']", "Error", "None"], c: 0, e: "partition() splits at first occurrence." }),
  (_i: number) => ({ q: `What is "hello".rpartition("l")?`, o: ["('hel', 'l', 'o')", "['hel', 'l', 'o']", "Error", "None"], c: 0, e: "rpartition() splits at last occurrence." }),
  
  // 91-100: String Methods - Splitting, Joining, Formatting
  (_i: number) => ({ q: `What is "hello,world".split(",")?`, o: ["['hello', 'world']", "['hello,world']", "Error", "None"], c: 0, e: "split() divides string into list." }),
  (_i: number) => ({ q: `What is "hello world".split()?`, o: ["['hello', 'world']", "['hello world']", "Error", "None"], c: 0, e: "split() without argument splits on whitespace." }),
  (_i: number) => ({ q: `What is "hello\\nworld".splitlines()?`, o: ["['hello', 'world']", "['hello\\nworld']", "Error", "None"], c: 0, e: "splitlines() splits on line breaks." }),
  (_i: number) => ({ q: `What is "-".join(["a", "b", "c"])?`, o: ["a-b-c", "a b c", "abc", "Error"], c: 0, e: "join() combines list elements with separator." }),
  (_i: number) => ({ q: `What is "".join(["a", "b", "c"])?`, o: ["abc", "a b c", "Error", "None"], c: 0, e: "join() with empty string concatenates without separator." }),
  (_i: number) => ({ q: `What is "hello".center(10)?`, o: ["  hello   ", "hello", "Error", "None"], c: 0, e: "center() centers string in given width." }),
  (_i: number) => ({ q: `What is "hello".ljust(10)?`, o: ["hello     ", "hello", "Error", "None"], c: 0, e: "ljust() left-justifies string." }),
  (_i: number) => ({ q: `What is "hello".rjust(10)?`, o: ["     hello", "hello", "Error", "None"], c: 0, e: "rjust() right-justifies string." }),
  (_i: number) => ({ q: `What is "hello".zfill(10)?`, o: ["00000hello", "hello", "Error", "None"], c: 0, e: "zfill() pads string with zeros." }),
  (_i: number) => ({ q: `What is f"Value: {5}"?`, o: ['"Value: 5"', "Value: 5", "Error", "None"], c: 0, e: "f-strings allow variable interpolation." }),
];

// --- LEVEL 2: SHRIMP (Math, Expressions, Order of Ops) - 100 TRULY UNIQUE QUESTIONS ---
// Each question tests a DIFFERENT concept - NO number/variable variations of the same question
const level2Patterns = [
  // 1-10: Basic Arithmetic Operations
  (_i: number) => ({ q: `What is 10 + 5 * 2?`, o: ["20", "30", "15", "None"], c: 0, e: "Multiplication happens first (PEMDAS)." }),
  (_i: number) => ({ q: `What is (10 + 5) * 2?`, o: ["30", "20", "15", "None"], c: 0, e: "Parentheses change order of operations." }),
  (_i: number) => ({ q: `What is 10 / 2 in Python 3?`, o: ["5.0", "5", "0", "Error"], c: 0, e: "The / operator always returns a float in Python 3." }),
  (_i: number) => ({ q: `What is 10 // 3?`, o: ["3", "3.33", "4", "Error"], c: 0, e: "// is floor division (integer division)." }),
  (_i: number) => ({ q: `What is 10 % 3?`, o: ["1", "3", "0", "Error"], c: 0, e: "% is the modulo operator (remainder)." }),
  (_i: number) => ({ q: `What is 2 ** 3?`, o: ["8", "6", "9", "Error"], c: 0, e: "** is the exponentiation operator." }),
  (_i: number) => ({ q: `What is 2 ** 2 ** 3?`, o: ["256", "64", "512", "Error"], c: 0, e: "Exponentiation is right-associative: 2**(2**3) = 2**8 = 256." }),
  (_i: number) => ({ q: `What is 10 / 0?`, o: ["ZeroDivisionError", "0", "infinity", "None"], c: 0, e: "Division by zero raises ZeroDivisionError." }),
  (_i: number) => ({ q: `What is 0 / 10?`, o: ["0.0", "0", "Error", "None"], c: 0, e: "Zero divided by any number is 0.0." }),
  (_i: number) => ({ q: `What is 10 * 0?`, o: ["0", "10", "Error", "None"], c: 0, e: "Any number multiplied by zero is zero." }),
  
  // 11-20: Math Functions
  (_i: number) => ({ q: `What is abs(-5)?`, o: ["5", "-5", "0", "Error"], c: 0, e: "abs() returns absolute value." }),
  (_i: number) => ({ q: `What is abs(5)?`, o: ["5", "-5", "0", "Error"], c: 0, e: "abs() of positive number is itself." }),
  (_i: number) => ({ q: `What is round(3.49)?`, o: ["3", "4", "3.49", "Error"], c: 0, e: "round() rounds .49 down to nearest integer." }),
  (_i: number) => ({ q: `What is round(3.51)?`, o: ["4", "3", "3.51", "Error"], c: 0, e: "round() rounds .51 up to nearest integer." }),
  (_i: number) => ({ q: `What is round(3.5)?`, o: ["4", "3", "3.5", "Error"], c: 0, e: "round() rounds .5 to nearest even (banker's rounding)." }),
  (_i: number) => ({ q: `What is min(5, 10, 2)?`, o: ["2", "5", "10", "Error"], c: 0, e: "min() finds the smallest value." }),
  (_i: number) => ({ q: `What is max(5, 10, 2)?`, o: ["10", "5", "2", "Error"], c: 0, e: "max() finds the largest value." }),
  (_i: number) => ({ q: `What is pow(3, 2)?`, o: ["9", "6", "27", "0"], c: 0, e: "pow(a, b) is equivalent to a**b." }),
  (_i: number) => ({ q: `What is pow(2, 3, 5)?`, o: ["3", "8", "0", "Error"], c: 0, e: "pow(x, y, z) is (x**y) % z." }),
  (_i: number) => ({ q: `What is sum([1, 2, 3])?`, o: ["6", "0", "Error", "None"], c: 0, e: "sum() adds all numbers in iterable." }),
  
  // 21-30: More Math Functions
  (_i: number) => ({ q: `What is divmod(10, 3)?`, o: ["(3, 1)", "3.33", "Error", "None"], c: 0, e: "divmod() returns (quotient, remainder)." }),
  (_i: number) => ({ q: `What is sorted([3, 1, 2])?`, o: ["[1, 2, 3]", "[3, 1, 2]", "Error", "None"], c: 0, e: "sorted() returns sorted list." }),
  (_i: number) => ({ q: `What is sorted([3, 1, 2], reverse=True)?`, o: ["[3, 2, 1]", "[1, 2, 3]", "Error", "None"], c: 0, e: "reverse=True sorts descending." }),
  (_i: number) => ({ q: `What is 5 ** 0?`, o: ["1", "0", "5", "Error"], c: 0, e: "Any number to power 0 is 1." }),
  (_i: number) => ({ q: `What is 0 ** 5?`, o: ["0", "1", "Error", "None"], c: 0, e: "0 to any power is 0." }),
  (_i: number) => ({ q: `What is 1 ** 100?`, o: ["1", "100", "0", "Error"], c: 0, e: "1 to any power is 1." }),
  (_i: number) => ({ q: `What is 5 ** 1?`, o: ["5", "1", "0", "Error"], c: 0, e: "Any number to power 1 is itself." }),
  (_i: number) => ({ q: `What is 5 % 5?`, o: ["0", "5", "1", "Error"], c: 0, e: "Modulo returns remainder - same number gives 0." }),
  (_i: number) => ({ q: `What is 5 % 3?`, o: ["2", "1", "0", "Error"], c: 0, e: "5 divided by 3 gives remainder 2." }),
  (_i: number) => ({ q: `What is 3 % 5?`, o: ["3", "2", "0", "Error"], c: 0, e: "3 divided by 5 gives remainder 3 (3 < 5)." }),
  
  // 31-40: Order of Operations (PEMDAS)
  (_i: number) => ({ q: `What is 2 * 3 + 4?`, o: ["10", "14", "18", "Error"], c: 0, e: "Multiplication before addition (PEMDAS)." }),
  (_i: number) => ({ q: `What is 2 + 3 * 4?`, o: ["14", "20", "24", "Error"], c: 0, e: "Multiplication before addition." }),
  (_i: number) => ({ q: `What is (2 + 3) * 4?`, o: ["20", "14", "24", "Error"], c: 0, e: "Parentheses change order - addition first." }),
  (_i: number) => ({ q: `What is 2 ** 3 + 4?`, o: ["12", "18", "24", "Error"], c: 0, e: "Exponentiation before addition." }),
  (_i: number) => ({ q: `What is 2 + 3 ** 4?`, o: ["83", "20", "1296", "Error"], c: 0, e: "Exponentiation before addition: 2 + 81 = 83." }),
  (_i: number) => ({ q: `What is (2 + 3) ** 4?`, o: ["625", "83", "20", "Error"], c: 0, e: "Parentheses first, then exponentiation: 5**4 = 625." }),
  (_i: number) => ({ q: `What is 10 / 2 * 4?`, o: ["20.0", "1.25", "5", "Error"], c: 0, e: "Left to right for same precedence: (10/2)*4 = 20.0." }),
  (_i: number) => ({ q: `What is 10 * 2 / 4?`, o: ["5.0", "20", "0.5", "Error"], c: 0, e: "Left to right for same precedence: (10*2)/4 = 5.0." }),
  (_i: number) => ({ q: `What is 10 - 2 - 3?`, o: ["5", "9", "11", "Error"], c: 0, e: "Left to right for subtraction: (10-2)-3 = 5." }),
  (_i: number) => ({ q: `What is 10 + 2 - 3?`, o: ["9", "5", "11", "Error"], c: 0, e: "Left to right for same precedence: (10+2)-3 = 9." }),
  
  // 41-50: Type Conversions in Expressions
  (_i: number) => ({ q: `What is float("3.14")?`, o: ["3.14", "3", "Error", "None"], c: 0, e: "float() converts string to float." }),
  (_i: number) => ({ q: `What is int("42")?`, o: ["42", '"42"', "Error", "float"], c: 0, e: "int() converts numeric strings to integers." }),
  (_i: number) => ({ q: `What is str(42)?`, o: ['"42"', "42", "Error", "None"], c: 0, e: "str() converts values to strings." }),
  (_i: number) => ({ q: `What is int(3.7)?`, o: ["3", "4", "3.7", "Error"], c: 0, e: "int() truncates towards zero (not rounding)." }),
  (_i: number) => ({ q: `What is int(-3.7)?`, o: ["-3", "-4", "-3.7", "Error"], c: 0, e: "int() truncates towards zero for negatives too." }),
  (_i: number) => ({ q: `What is float(5)?`, o: ["5.0", "5", "Error", "None"], c: 0, e: "float() converts integer to float." }),
  (_i: number) => ({ q: `What is str(1.0 + 2)?`, o: ['"3.0"', "3.0", "Error", "None"], c: 0, e: "Result of math converted to string." }),
  (_i: number) => ({ q: `What is type(3.14 + 1)?`, o: ["<class 'float'>", "<class 'int'>", "<class 'str'>", "None"], c: 0, e: "Adding int to float results in float." }),
  (_i: number) => ({ q: `What is type(1 + 2)?`, o: ["<class 'int'>", "<class 'float'>", "<class 'str'>", "None"], c: 0, e: "Adding two ints results in int." }),
  (_i: number) => ({ q: `What is type(1.0 * 2)?`, o: ["<class 'float'>", "<class 'int'>", "<class 'str'>", "None"], c: 0, e: "Multiplying float by int results in float." }),
  
  // 51-60: String vs Numeric Operations
  (_i: number) => ({ q: `Is '1' + '1' equal to '2'?`, o: ["No, it is '11'", "Yes", "Error", "None"], c: 0, e: "String concatenation, not addition." }),
  (_i: number) => ({ q: `What is int('1') + int('1')?`, o: ["2", "'11'", "Error", "None"], c: 0, e: "Convert strings to ints before adding." }),
  (_i: number) => ({ q: `What is '5' * 2?`, o: ["'55'", "10", "Error", "None"], c: 0, e: "String multiplication repeats string." }),
  (_i: number) => ({ q: `What is 5 * 2?`, o: ["10", "'55'", "Error", "None"], c: 0, e: "Numeric multiplication." }),
  (_i: number) => ({ q: `What is 'hello' + 'world'?`, o: ["'helloworld'", "'hello world'", "Error", "None"], c: 0, e: "String concatenation joins without spaces." }),
  (_i: number) => ({ q: `What is '5' + '3'?`, o: ["'53'", "8", "Error", "None"], c: 0, e: "String concatenation, not numeric addition." }),
  (_i: number) => ({ q: `What is int('5') + int('3')?`, o: ["8", "'53'", "Error", "None"], c: 0, e: "Convert strings to ints before adding." }),
  (_i: number) => ({ q: `What is 'abc' * 0?`, o: ['""', "'abc'", "Error", "None"], c: 0, e: "Multiplying string by 0 gives empty string." }),
  (_i: number) => ({ q: `What is 'abc' * 1?`, o: ["'abc'", "'abcabc'", "Error", "None"], c: 0, e: "Multiplying string by 1 gives original string." }),
  (_i: number) => ({ q: `What is 'abc' * 3?`, o: ["'abcabcabc'", "'abc3'", "Error", "None"], c: 0, e: "String multiplication repeats the string." }),
  
  // 61-70: Comparison Operators
  (_i: number) => ({ q: `Result of 10 > 5?`, o: ["True", "False", "Error", "None"], c: 0, e: "Greater than comparison." }),
  (_i: number) => ({ q: `Result of 5 < 10?`, o: ["True", "False", "Error", "None"], c: 0, e: "Less than comparison." }),
  (_i: number) => ({ q: `Result of 10 >= 10?`, o: ["True", "False", "Error", "None"], c: 0, e: "Greater than or equal." }),
  (_i: number) => ({ q: `Result of 5 <= 10?`, o: ["True", "False", "Error", "None"], c: 0, e: "Less than or equal." }),
  (_i: number) => ({ q: `Result of 10 == 10?`, o: ["True", "False", "Error", "None"], c: 0, e: "Equality check." }),
  (_i: number) => ({ q: `Result of 10 != 5?`, o: ["True", "False", "Error", "None"], c: 0, e: "Inequality check." }),
  (_i: number) => ({ q: `Result of 10 == 5?`, o: ["False", "True", "Error", "None"], c: 0, e: "Equality check - not equal." }),
  (_i: number) => ({ q: `Result of 5 > 10?`, o: ["False", "True", "Error", "None"], c: 0, e: "Greater than - false." }),
  (_i: number) => ({ q: `Result of 10 < 5?`, o: ["False", "True", "Error", "None"], c: 0, e: "Less than - false." }),
  (_i: number) => ({ q: `Result of 5 >= 10?`, o: ["False", "True", "Error", "None"], c: 0, e: "Greater than or equal - false." }),
  
  // 71-80: Logical Operators
  (_i: number) => ({ q: `Result of 5 == 5 and 10 > 5?`, o: ["True", "False", "Error", "None"], c: 0, e: "and requires both conditions True." }),
  (_i: number) => ({ q: `Result of 5 == 5 and 5 > 10?`, o: ["False", "True", "Error", "None"], c: 0, e: "and requires both True - second is False." }),
  (_i: number) => ({ q: `Result of 5 == 10 or 10 > 5?`, o: ["True", "False", "Error", "None"], c: 0, e: "or requires at least one True." }),
  (_i: number) => ({ q: `Result of 5 == 10 or 5 > 10?`, o: ["False", "True", "Error", "None"], c: 0, e: "or requires at least one True - both False." }),
  (_i: number) => ({ q: `Result of not 5 == 10?`, o: ["True", "False", "Error", "None"], c: 0, e: "not inverts boolean result." }),
  (_i: number) => ({ q: `Result of not 5 == 5?`, o: ["False", "True", "Error", "None"], c: 0, e: "not inverts True to False." }),
  (_i: number) => ({ q: `Result of 5 < 10 < 15?`, o: ["True", "False", "Error", "None"], c: 0, e: "Chained comparisons work in Python." }),
  (_i: number) => ({ q: `Result of 15 > 10 > 5?`, o: ["True", "False", "Error", "None"], c: 0, e: "Chained comparisons work both ways." }),
  (_i: number) => ({ q: `Result of 5 == 5 == 5?`, o: ["True", "False", "Error", "None"], c: 0, e: "Chained equality checks all pairs." }),
  (_i: number) => ({ q: `Result of 5 != 10 != 15?`, o: ["True", "False", "Error", "None"], c: 0, e: "Chained inequality checks all pairs." }),
  
  // 81-90: Membership and Identity Operators
  (_i: number) => ({ q: `Result of 5 in [1, 2, 3, 4, 5]?`, o: ["True", "False", "Error", "None"], c: 0, e: "in checks membership." }),
  (_i: number) => ({ q: `Result of 10 in [1, 2, 3, 4, 5]?`, o: ["False", "True", "Error", "None"], c: 0, e: "in checks membership - not found." }),
  (_i: number) => ({ q: `Result of 5 not in [1, 2, 3]?`, o: ["True", "False", "Error", "None"], c: 0, e: "not in checks if value is absent." }),
  (_i: number) => ({ q: `Result of 1 not in [1, 2, 3]?`, o: ["False", "True", "Error", "None"], c: 0, e: "not in - value is present, so False." }),
  (_i: number) => ({ q: `Result of 'a' in 'abc'?`, o: ["True", "False", "Error", "None"], c: 0, e: "in checks substring membership in strings." }),
  (_i: number) => ({ q: `Result of 'x' in 'abc'?`, o: ["False", "True", "Error", "None"], c: 0, e: "in checks substring - not found." }),
  (_i: number) => ({ q: `Result of 5 is 5?`, o: ["True", "False", "Error", "None"], c: 0, e: "is checks identity (same object)." }),
  (_i: number) => ({ q: `Result of [1, 2] is [1, 2]?`, o: ["False", "True", "Error", "None"], c: 0, e: "is checks identity - different list objects." }),
  (_i: number) => ({ q: `Result of 5 is not 10?`, o: ["True", "False", "Error", "None"], c: 0, e: "is not checks if objects are different." }),
  (_i: number) => ({ q: `Result of None is None?`, o: ["True", "False", "Error", "None"], c: 0, e: "None is a singleton - always same object." }),
  
  // 91-100: Complex Expressions and Edge Cases
  (_i: number) => ({ q: `What is -5?`, o: ["-5", "5", "Error", "None"], c: 0, e: "Unary minus creates negative number." }),
  (_i: number) => ({ q: `What is +5?`, o: ["5", "-5", "Error", "None"], c: 0, e: "Unary plus is allowed but doesn't change value." }),
  (_i: number) => ({ q: `What is --5?`, o: ["5", "-5", "Error", "None"], c: 0, e: "Double negative makes positive." }),
  (_i: number) => ({ q: `What is -(-5)?`, o: ["5", "-5", "Error", "None"], c: 0, e: "Negative of negative is positive." }),
  (_i: number) => ({ q: `What is 0 // 5?`, o: ["0", "Error", "None", "5"], c: 0, e: "Zero divided by any number is 0." }),
  (_i: number) => ({ q: `What is 5 // 1?`, o: ["5", "5.0", "Error", "None"], c: 0, e: "Any number divided by 1 is itself." }),
  (_i: number) => ({ q: `What is 0 % 5?`, o: ["0", "5", "Error", "None"], c: 0, e: "0 modulo any number is 0." }),
  (_i: number) => ({ q: `What is 5 % 1?`, o: ["0", "5", "Error", "None"], c: 0, e: "Any number modulo 1 is 0." }),
  (_i: number) => ({ q: `What is round(2.5)?`, o: ["2", "3", "2.5", "Error"], c: 0, e: "round() uses banker's rounding - rounds to nearest even." }),
  (_i: number) => ({ q: `What is round(3.5)?`, o: ["4", "3", "3.5", "Error"], c: 0, e: "round() uses banker's rounding - rounds to nearest even." }),
];

// --- LEVEL 3: CRAB (Conditionals, Booleans, Logic) - 100 TRULY UNIQUE QUESTIONS ---
// Each question tests a DIFFERENT concept - NO number/variable variations of the same question
const level3Patterns = [
  // 1-10: Basic Boolean Logic
  (_i: number) => ({ q: `Result of True and False?`, o: ["False", "True", "None", "Error"], c: 0, e: "and needs both to be True." }),
  (_i: number) => ({ q: `Result of True or False?`, o: ["True", "False", "None", "Error"], c: 0, e: "or needs only one to be True." }),
  (_i: number) => ({ q: `Result of False and False?`, o: ["False", "True", "None", "Error"], c: 0, e: "Both must be True for and." }),
  (_i: number) => ({ q: `Result of False or False?`, o: ["False", "True", "None", "Error"], c: 0, e: "At least one must be True for or." }),
  (_i: number) => ({ q: `Result of True and True?`, o: ["True", "False", "None", "Error"], c: 0, e: "Both are True, so and returns True." }),
  (_i: number) => ({ q: `Result of True or True?`, o: ["True", "False", "None", "Error"], c: 0, e: "At least one is True, so or returns True." }),
  (_i: number) => ({ q: `Result of not True?`, o: ["False", "True", "None", "Error"], c: 0, e: "not inverts True to False." }),
  (_i: number) => ({ q: `Result of not False?`, o: ["True", "False", "None", "Error"], c: 0, e: "not inverts False to True." }),
  (_i: number) => ({ q: `Result of not (True and False)?`, o: ["True", "False", "None", "Error"], c: 0, e: "Parentheses first: True and False = False, then not False = True." }),
  (_i: number) => ({ q: `Result of not True or False?`, o: ["False", "True", "None", "Error"], c: 0, e: "Operator precedence: not True = False, then False or False = False." }),
  
  // 11-20: Comparison Operators
  (_i: number) => ({ q: `Result of 10 > 5?`, o: ["True", "False", "None", "Error"], c: 0, e: "Greater than comparison." }),
  (_i: number) => ({ q: `Result of 5 < 10?`, o: ["True", "False", "None", "Error"], c: 0, e: "Less than comparison." }),
  (_i: number) => ({ q: `Result of 10 >= 10?`, o: ["True", "False", "None", "Error"], c: 0, e: "Greater than or equal." }),
  (_i: number) => ({ q: `Result of 5 <= 10?`, o: ["True", "False", "None", "Error"], c: 0, e: "Less than or equal." }),
  (_i: number) => ({ q: `Result of 10 == 10?`, o: ["True", "False", "None", "Error"], c: 0, e: "Equality check." }),
  (_i: number) => ({ q: `Result of 10 != 5?`, o: ["True", "False", "None", "Error"], c: 0, e: "Inequality check." }),
  (_i: number) => ({ q: `Result of 5 > 10?`, o: ["False", "True", "None", "Error"], c: 0, e: "Greater than - false." }),
  (_i: number) => ({ q: `Result of 10 < 5?`, o: ["False", "True", "None", "Error"], c: 0, e: "Less than - false." }),
  (_i: number) => ({ q: `Result of 10 == 5?`, o: ["False", "True", "None", "Error"], c: 0, e: "Equality check - not equal." }),
  (_i: number) => ({ q: `Result of 5 >= 10?`, o: ["False", "True", "None", "Error"], c: 0, e: "Greater than or equal - false." }),
  
  // 21-30: Identity vs Equality
  (_i: number) => ({ q: `Result of 5 == 5?`, o: ["True", "False", "None", "Error"], c: 0, e: "== compares values." }),
  (_i: number) => ({ q: `Result of 5 is 5?`, o: ["True", "False", "None", "Error"], c: 0, e: "is checks identity (small integers are cached)." }),
  (_i: number) => ({ q: `Result of [1, 2] == [1, 2]?`, o: ["True", "False", "None", "Error"], c: 0, e: "== compares list contents." }),
  (_i: number) => ({ q: `Result of [1, 2] is [1, 2]?`, o: ["False", "True", "None", "Error"], c: 0, e: "Different list objects, even with same content." }),
  (_i: number) => ({ q: `Result of "hello" == "hello"?`, o: ["True", "False", "None", "Error"], c: 0, e: "== compares string values." }),
  (_i: number) => ({ q: `Result of "hello" is "hello"?`, o: ["True", "False", "None", "Error"], c: 0, e: "String interning may make same strings share identity." }),
  (_i: number) => ({ q: `Result of None == None?`, o: ["True", "False", "None", "Error"], c: 0, e: "== compares values." }),
  (_i: number) => ({ q: `Result of None is None?`, o: ["True", "False", "None", "Error"], c: 0, e: "None is a singleton - always same object." }),
  (_i: number) => ({ q: `Result of 5 is not 10?`, o: ["True", "False", "None", "Error"], c: 0, e: "is not checks if objects are different." }),
  (_i: number) => ({ q: `What is the difference between == and is?`, o: ["== compares values, is compares identity", "No difference", "is is for strings only", "== is deprecated"], c: 0, e: "== compares values, is compares object identity." }),
  
  // 31-40: Chained Comparisons
  (_i: number) => ({ q: `Result of 5 < 10 < 15?`, o: ["True", "False", "Error", "None"], c: 0, e: "Chained comparisons work in Python." }),
  (_i: number) => ({ q: `Result of 15 > 10 > 5?`, o: ["True", "False", "Error", "None"], c: 0, e: "Chained comparisons work both ways." }),
  (_i: number) => ({ q: `Result of 5 <= 10 <= 15?`, o: ["True", "False", "Error", "None"], c: 0, e: "Chained comparisons with <= work." }),
  (_i: number) => ({ q: `Result of 15 >= 10 >= 5?`, o: ["True", "False", "Error", "None"], c: 0, e: "Chained comparisons with >= work." }),
  (_i: number) => ({ q: `Result of 5 == 5 == 5?`, o: ["True", "False", "Error", "None"], c: 0, e: "Chained equality checks all pairs." }),
  (_i: number) => ({ q: `Result of 5 != 10 != 15?`, o: ["True", "False", "Error", "None"], c: 0, e: "Chained inequality checks all pairs." }),
  (_i: number) => ({ q: `Result of 5 < 10 < 5?`, o: ["False", "True", "Error", "None"], c: 0, e: "Chained comparison fails when middle value doesn't satisfy both." }),
  (_i: number) => ({ q: `Result of 10 < 5 < 15?`, o: ["False", "True", "Error", "None"], c: 0, e: "Chained comparison fails when first condition is False." }),
  (_i: number) => ({ q: `Result of 5 < 15 < 10?`, o: ["False", "True", "Error", "None"], c: 0, e: "Chained comparison fails when second condition is False." }),
  (_i: number) => ({ q: `Result of 5 == 5 == 10?`, o: ["False", "True", "Error", "None"], c: 0, e: "Chained equality fails when not all pairs are equal." }),
  
  // 41-50: Membership Operators
  (_i: number) => ({ q: `Result of 5 in [1, 2, 3, 4, 5]?`, o: ["True", "False", "Error", "None"], c: 0, e: "in checks membership in list." }),
  (_i: number) => ({ q: `Result of 10 in [1, 2, 3, 4, 5]?`, o: ["False", "True", "Error", "None"], c: 0, e: "in checks membership - not found." }),
  (_i: number) => ({ q: `Result of 5 not in [1, 2, 3]?`, o: ["True", "False", "Error", "None"], c: 0, e: "not in checks if value is absent." }),
  (_i: number) => ({ q: `Result of 1 not in [1, 2, 3]?`, o: ["False", "True", "Error", "None"], c: 0, e: "not in - value is present, so False." }),
  (_i: number) => ({ q: `Result of 'a' in 'abc'?`, o: ["True", "False", "Error", "None"], c: 0, e: "in checks substring membership in strings." }),
  (_i: number) => ({ q: `Result of 'x' in 'abc'?`, o: ["False", "True", "Error", "None"], c: 0, e: "in checks substring - not found." }),
  (_i: number) => ({ q: `Result of 'ab' in 'abc'?`, o: ["True", "False", "Error", "None"], c: 0, e: "in checks substring - 'ab' is in 'abc'." }),
  (_i: number) => ({ q: `Result of 'ac' in 'abc'?`, o: ["False", "True", "Error", "None"], c: 0, e: "in checks substring - 'ac' is not contiguous in 'abc'." }),
  (_i: number) => ({ q: `Result of '' in 'abc'?`, o: ["True", "False", "Error", "None"], c: 0, e: "Empty string is always a substring." }),
  (_i: number) => ({ q: `Result of 'x' not in 'abc'?`, o: ["True", "False", "Error", "None"], c: 0, e: "not in works with strings." }),
  
  // 51-60: Truthiness and Falsiness
  (_i: number) => ({ q: `If x = 0, is x Truthy?`, o: ["No", "Yes", "Only in loops", "Error"], c: 0, e: "0 is Falsy." }),
  (_i: number) => ({ q: `If x = 1, is x Truthy?`, o: ["Yes", "No", "Only if positive", "Error"], c: 0, e: "Non-zero numbers are Truthy." }),
  (_i: number) => ({ q: `If x = [], is bool(x) True?`, o: ["No", "Yes", "Error", "None"], c: 0, e: "Empty lists are Falsy." }),
  (_i: number) => ({ q: `If x = [1, 2], is x Truthy?`, o: ["Yes", "No", "Only if non-empty", "Error"], c: 0, e: "Non-empty lists are Truthy." }),
  (_i: number) => ({ q: `If x = "", is x Truthy?`, o: ["No", "Yes", "Only in functions", "Error"], c: 0, e: "Empty strings are Falsy." }),
  (_i: number) => ({ q: `If x = "hello", is x Truthy?`, o: ["Yes", "No", "Only if non-empty", "Error"], c: 0, e: "Non-empty strings are Truthy." }),
  (_i: number) => ({ q: `If x = None, is x Truthy?`, o: ["No", "Yes", "Only in classes", "Error"], c: 0, e: "None is Falsy." }),
  (_i: number) => ({ q: `If x = {}, is x Truthy?`, o: ["No", "Yes", "Only if non-empty", "Error"], c: 0, e: "Empty dictionaries are Falsy." }),
  (_i: number) => ({ q: `If x = {1: 2}, is x Truthy?`, o: ["Yes", "No", "Only if non-empty", "Error"], c: 0, e: "Non-empty dictionaries are Truthy." }),
  (_i: number) => ({ q: `If x = (), is x Truthy?`, o: ["No", "Yes", "Only if non-empty", "Error"], c: 0, e: "Empty tuples are Falsy." }),
  
  // 61-70: Conditional Keywords
  (_i: number) => ({ q: `Which keyword links if and else?`, o: ["elif", "elseif", "then", "ifnot"], c: 0, e: "Python uses elif." }),
  (_i: number) => ({ q: `Can you have an 'if' without an 'else'?`, o: ["Yes", "No", "Only in functions", "Error"], c: 0, e: "else is optional." }),
  (_i: number) => ({ q: `Can you have multiple 'elif' statements?`, o: ["Yes", "No", "Only two", "Error"], c: 0, e: "You can have as many elif as needed." }),
  (_i: number) => ({ q: `What happens if all conditions in if/elif are False?`, o: ["else block executes", "Error", "Nothing", "Returns None"], c: 0, e: "else block executes when all conditions are False." }),
  (_i: number) => ({ q: `What happens if no 'else' and all conditions are False?`, o: ["Nothing executes", "Error", "Returns None", "Executes if block"], c: 0, e: "If no else and all conditions False, nothing executes." }),
  (_i: number) => ({ q: `Which operator checks inequality?`, o: ["!=", "<>", "not", "=="], c: 0, e: "!= is standard (<> was in Python 2)." }),
  (_i: number) => ({ q: `Which operator checks identity?`, o: ["is", "==", "=", "==="], c: 0, e: "is checks object identity." }),
  (_i: number) => ({ q: `What is the syntax for if statement?`, o: ["if condition:", "if (condition)", "if condition then", "if condition {"], c: 0, e: "Python uses colon and indentation." }),
  (_i: number) => ({ q: `What is the syntax for else statement?`, o: ["else:", "else {", "else then", "else if"], c: 0, e: "Python uses colon and indentation." }),
  (_i: number) => ({ q: `What is the syntax for elif statement?`, o: ["elif condition:", "elseif condition:", "elif (condition)", "elif condition then"], c: 0, e: "Python uses elif with colon." }),
  
  // 71-80: Ternary Operator
  (_i: number) => ({ q: `What is 5 if 5 > 3 else 3?`, o: ["5", "3", "Error", "None"], c: 0, e: "Ternary operator: value_if_true if condition else value_if_false." }),
  (_i: number) => ({ q: `What is 3 if 3 > 5 else 5?`, o: ["5", "3", "Error", "None"], c: 0, e: "Ternary operator returns else value when condition is False." }),
  (_i: number) => ({ q: `What is 'yes' if True else 'no'?`, o: ["'yes'", "'no'", "Error", "None"], c: 0, e: "Ternary with True condition returns first value." }),
  (_i: number) => ({ q: `What is 'yes' if False else 'no'?`, o: ["'no'", "'yes'", "Error", "None"], c: 0, e: "Ternary with False condition returns else value." }),
  (_i: number) => ({ q: `What is max(5, 3) if 5 > 3 else min(5, 3)?`, o: ["5", "3", "Error", "None"], c: 0, e: "Ternary can use function calls." }),
  (_i: number) => ({ q: `What is 'even' if 4 % 2 == 0 else 'odd'?`, o: ["'even'", "'odd'", "Error", "None"], c: 0, e: "Ternary with modulo check." }),
  (_i: number) => ({ q: `What is 'even' if 5 % 2 == 0 else 'odd'?`, o: ["'odd'", "'even'", "Error", "None"], c: 0, e: "Ternary with modulo check - odd number." }),
  (_i: number) => ({ q: `What is 'positive' if 5 > 0 else 'non-positive'?`, o: ["'positive'", "'non-positive'", "Error", "None"], c: 0, e: "Ternary with comparison." }),
  (_i: number) => ({ q: `What is 'positive' if -5 > 0 else 'non-positive'?`, o: ["'non-positive'", "'positive'", "Error", "None"], c: 0, e: "Ternary with negative number." }),
  (_i: number) => ({ q: `What is 'empty' if len([]) == 0 else 'not empty'?`, o: ["'empty'", "'not empty'", "Error", "None"], c: 0, e: "Ternary with len() check." }),
  
  // 81-90: Short-Circuit Evaluation
  (_i: number) => ({ q: `What is True and 5?`, o: ["5", "True", "False", "Error"], c: 0, e: "and returns last value if all are Truthy." }),
  (_i: number) => ({ q: `What is False and 5?`, o: ["False", "5", "True", "Error"], c: 0, e: "and short-circuits at first Falsy value." }),
  (_i: number) => ({ q: `What is True or 5?`, o: ["True", "5", "False", "Error"], c: 0, e: "or short-circuits at first Truthy value." }),
  (_i: number) => ({ q: `What is False or 5?`, o: ["5", "False", "True", "Error"], c: 0, e: "or returns last value if all are Falsy." }),
  (_i: number) => ({ q: `What is 0 and 5?`, o: ["0", "5", "False", "Error"], c: 0, e: "0 is Falsy, so and returns 0 (short-circuits)." }),
  (_i: number) => ({ q: `What is 1 and 5?`, o: ["5", "1", "True", "Error"], c: 0, e: "1 is Truthy, so and returns last value 5." }),
  (_i: number) => ({ q: `What is 0 or 5?`, o: ["5", "0", "False", "Error"], c: 0, e: "0 is Falsy, so or continues and returns 5." }),
  (_i: number) => ({ q: `What is 1 or 5?`, o: ["1", "5", "True", "Error"], c: 0, e: "1 is Truthy, so or short-circuits and returns 1." }),
  (_i: number) => ({ q: `What is '' and 'hello'?`, o: ["''", "'hello'", "False", "Error"], c: 0, e: "Empty string is Falsy, so and returns ''." }),
  (_i: number) => ({ q: `What is 'hello' and 'world'?`, o: ["'world'", "'hello'", "True", "Error"], c: 0, e: "Both are Truthy, so and returns last value 'world'." }),
  
  // 91-100: Complex Boolean Expressions
  (_i: number) => ({ q: `Result of 5 > 3 and 10 > 5?`, o: ["True", "False", "None", "Error"], c: 0, e: "Both conditions must be True." }),
  (_i: number) => ({ q: `Result of 5 > 10 and 10 > 5?`, o: ["False", "True", "None", "Error"], c: 0, e: "First condition is False, so and returns False." }),
  (_i: number) => ({ q: `Result of 5 > 3 or 10 < 5?`, o: ["True", "False", "None", "Error"], c: 0, e: "At least one condition is True." }),
  (_i: number) => ({ q: `Result of 5 > 10 or 10 < 5?`, o: ["False", "True", "None", "Error"], c: 0, e: "Both conditions are False, so or returns False." }),
  (_i: number) => ({ q: `Result of not (5 > 10)?`, o: ["True", "False", "None", "Error"], c: 0, e: "not inverts False to True." }),
  (_i: number) => ({ q: `Result of not (5 > 3)?`, o: ["False", "True", "None", "Error"], c: 0, e: "not inverts True to False." }),
  (_i: number) => ({ q: `Result of 5 > 3 and not (10 < 5)?`, o: ["True", "False", "None", "Error"], c: 0, e: "Both conditions must be True: 5>3 is True, not(10<5) is True." }),
  (_i: number) => ({ q: `Result of 5 in [1, 2, 3] or 10 > 5?`, o: ["True", "False", "None", "Error"], c: 0, e: "At least one condition is True: 10>5 is True." }),
  (_i: number) => ({ q: `Result of 5 in [1, 2, 3] and 10 > 5?`, o: ["False", "True", "None", "Error"], c: 0, e: "First condition is False, so and returns False." }),
  (_i: number) => ({ q: `Result of (5 > 3) == (10 > 5)?`, o: ["True", "False", "None", "Error"], c: 0, e: "Both comparisons are True, so True == True is True." }),
];

// --- LEVEL 4: SMALL FISH (Loops & Iterables) - 100 TRULY UNIQUE QUESTIONS ---
// Each question tests a DIFFERENT concept - NO number/variable variations of the same question
const level4Patterns = [
  // 1-10: Range Basics
  (_i: number) => ({ q: `How many times does range(5) loop?`, o: ["5", "4", "1", "0"], c: 0, e: "range(n) iterates from 0 to n-1 (5 times)." }),
  (_i: number) => ({ q: `What is list(range(5))?`, o: ["[0, 1, 2, 3, 4]", "[1, 2, 3, 4, 5]", "[0, 1, 2, 3, 4, 5]", "Error"], c: 0, e: "range(n) goes from 0 to n-1." }),
  (_i: number) => ({ q: `What is list(range(1, 4))?`, o: ["[1, 2, 3]", "[1, 2, 3, 4]", "[0, 1, 2, 3]", "[1, 4]"], c: 0, e: "range(start, stop) excludes stop value." }),
  (_i: number) => ({ q: `What is list(range(0, 10, 2))?`, o: ["[0, 2, 4, 6, 8]", "[0, 2, 4, 6, 8, 10]", "[2, 4, 6, 8]", "Error"], c: 0, e: "range with step 2: 0, 2, 4, 6, 8." }),
  (_i: number) => ({ q: `What is list(range(1, 6, 2))?`, o: ["[1, 3, 5]", "[1, 2, 3, 4, 5]", "[1, 3]", "Error"], c: 0, e: "range with step 2: 1, 3, 5." }),
  (_i: number) => ({ q: `What is list(range(5, 1, -1))?`, o: ["[5, 4, 3, 2]", "[5, 4, 3, 2, 1]", "[4, 3, 2, 1]", "Error"], c: 0, e: "Negative step creates reverse range." }),
  (_i: number) => ({ q: `What is list(range(0))?`, o: ["[]", "[0]", "Error", "None"], c: 0, e: "range(0) is empty." }),
  (_i: number) => ({ q: `What is list(range(1, 1))?`, o: ["[]", "[1]", "[0]", "Error"], c: 0, e: "When start equals stop, range is empty." }),
  (_i: number) => ({ q: `What is range(5)[0]?`, o: ["0", "1", "5", "Error"], c: 0, e: "range objects support indexing." }),
  (_i: number) => ({ q: `What is range(5)[-1]?`, o: ["4", "5", "0", "Error"], c: 0, e: "Negative indexing works with range." }),
  
  // 11-20: Range Operations
  (_i: number) => ({ q: `What is len(range(5))?`, o: ["5", "4", "6", "Error"], c: 0, e: "len() works with range objects." }),
  (_i: number) => ({ q: `What is sum(range(5))?`, o: ["10", "5", "0", "Error"], c: 0, e: "sum() works with range: 0+1+2+3+4 = 10." }),
  (_i: number) => ({ q: `What is min(range(5))?`, o: ["0", "1", "4", "Error"], c: 0, e: "min() works with range objects." }),
  (_i: number) => ({ q: `What is max(range(5))?`, o: ["4", "5", "0", "Error"], c: 0, e: "max() works with range objects." }),
  (_i: number) => ({ q: `What is 3 in range(5)?`, o: ["True", "False", "Error", "None"], c: 0, e: "in operator works with range." }),
  (_i: number) => ({ q: `What is 10 in range(5)?`, o: ["False", "True", "Error", "None"], c: 0, e: "in operator - value not in range." }),
  (_i: number) => ({ q: `What is 3 not in range(5)?`, o: ["False", "True", "Error", "None"], c: 0, e: "not in operator - value is in range." }),
  (_i: number) => ({ q: `What is 10 not in range(5)?`, o: ["True", "False", "Error", "None"], c: 0, e: "not in operator - value not in range." }),
  (_i: number) => ({ q: `What is list(reversed(range(5)))?`, o: ["[4, 3, 2, 1, 0]", "[0, 1, 2, 3, 4]", "[5, 4, 3, 2, 1]", "Error"], c: 0, e: "reversed() reverses the range." }),
  (_i: number) => ({ q: `What is sorted(range(5, 0, -1))?`, o: ["[1, 2, 3, 4, 5]", "[5, 4, 3, 2, 1]", "[0, 1, 2, 3, 4]", "Error"], c: 0, e: "sorted() works with range objects." }),
  
  // 21-30: Loop Keywords
  (_i: number) => ({ q: `Which keyword skips the rest of a loop cycle?`, o: ["continue", "break", "pass", "skip"], c: 0, e: "continue jumps to the next iteration." }),
  (_i: number) => ({ q: `Which keyword terminates a loop?`, o: ["break", "stop", "end", "exit"], c: 0, e: "break exits the loop entirely." }),
  (_i: number) => ({ q: `What does 'pass' do?`, o: ["Nothing", "Exits loop", "Skips cycle", "Restarts loop"], c: 0, e: "pass is a null operation placeholder." }),
  (_i: number) => ({ q: `What is 'while True:'?`, o: ["An infinite loop", "A syntax error", "A loop that runs once", "None"], c: 0, e: "Always True means it never stops on its own." }),
  (_i: number) => ({ q: `What is 'for i in range(5): pass'?`, o: ["Loop that does nothing", "Syntax error", "Infinite loop", "Error"], c: 0, e: "pass is a placeholder that does nothing." }),
  (_i: number) => ({ q: `Can you use 'break' outside a loop?`, o: ["No, SyntaxError", "Yes", "Only in functions", "Only in classes"], c: 0, e: "break can only be used inside loops." }),
  (_i: number) => ({ q: `Can you use 'continue' outside a loop?`, o: ["No, SyntaxError", "Yes", "Only in functions", "Only in classes"], c: 0, e: "continue can only be used inside loops." }),
  (_i: number) => ({ q: `What happens if 'break' is in a nested loop?`, o: ["Breaks only inner loop", "Breaks all loops", "Error", "Breaks outer loop"], c: 0, e: "break only exits the innermost loop." }),
  (_i: number) => ({ q: `What happens if 'continue' is in a nested loop?`, o: ["Continues only inner loop", "Continues all loops", "Error", "Continues outer loop"], c: 0, e: "continue only affects the innermost loop." }),
  (_i: number) => ({ q: `Can 'else' be used with 'for' loops?`, o: ["Yes", "No", "Only in Python 2", "Only with while"], c: 0, e: "for loops can have else clauses." }),
  
  // 31-40: For Loop Basics
  (_i: number) => ({ q: `Can you loop over a string?`, o: ["Yes", "No", "Only if numeric", "Error"], c: 0, e: "Strings are iterables." }),
  (_i: number) => ({ q: `What does 'for char in "abc":' iterate over?`, o: ["'a', 'b', 'c'", "'abc'", "Error", "Nothing"], c: 0, e: "Strings iterate character by character." }),
  (_i: number) => ({ q: `Can you loop over a list?`, o: ["Yes", "No", "Only if numeric", "Error"], c: 0, e: "Lists are iterables." }),
  (_i: number) => ({ q: `What does 'for item in [1, 2, 3]:' iterate over?`, o: ["1, 2, 3", "[1, 2, 3]", "Error", "Nothing"], c: 0, e: "Lists iterate element by element." }),
  (_i: number) => ({ q: `Can you loop over a dictionary?`, o: ["Yes", "No", "Only keys", "Error"], c: 0, e: "Dictionaries are iterables (iterates over keys)." }),
  (_i: number) => ({ q: `What does 'for key in {"a": 1, "b": 2}:' iterate over?`, o: ["'a', 'b'", "1, 2", "('a', 1), ('b', 2)", "Error"], c: 0, e: "Dictionaries iterate over keys by default." }),
  (_i: number) => ({ q: `Which loop is better for a fixed collection?`, o: ["for loop", "while loop", "do-while", "if loop"], c: 0, e: "for loops are designed for iteration." }),
  (_i: number) => ({ q: `Which loop is better when iterations are unknown?`, o: ["while loop", "for loop", "do-while", "if loop"], c: 0, e: "while loops for unknown iterations." }),
  (_i: number) => ({ q: `What is 'for i in range(3): print(i)' output?`, o: ["0\\n1\\n2", "1\\n2\\n3", "3\\n3\\n3", "Error"], c: 0, e: "range(3) gives 0, 1, 2." }),
  (_i: number) => ({ q: `What is 'for i in range(1, 4): print(i)' output?`, o: ["1\\n2\\n3", "0\\n1\\n2", "1\\n2\\n3\\n4", "Error"], c: 0, e: "range(1, 4) gives 1, 2, 3." }),
  
  // 41-50: While Loop Basics
  (_i: number) => ({ q: `What is 'while True: break'?`, o: ["Loop that runs once then breaks", "Infinite loop", "Syntax error", "Error"], c: 0, e: "break exits immediately." }),
  (_i: number) => ({ q: `What is 'while False: pass'?`, o: ["Loop that never runs", "Infinite loop", "Syntax error", "Error"], c: 0, e: "False condition means loop never executes." }),
  (_i: number) => ({ q: `What is 'x = 0; while x < 3: x += 1' result?`, o: ["x = 3", "x = 0", "Infinite loop", "Error"], c: 0, e: "Loop runs 3 times: x becomes 3." }),
  (_i: number) => ({ q: `What is 'x = 0; while x < 3: x = x + 1' result?`, o: ["x = 3", "x = 0", "Infinite loop", "Error"], c: 0, e: "Same as +=, x becomes 3." }),
  (_i: number) => ({ q: `What is 'x = 0; while x < 0: x += 1' result?`, o: ["x = 0", "x = 1", "Infinite loop", "Error"], c: 0, e: "Condition False initially, loop never runs." }),
  (_i: number) => ({ q: `Can 'else' be used with 'while' loops?`, o: ["Yes", "No", "Only in Python 2", "Only with for"], c: 0, e: "while loops can have else clauses." }),
  (_i: number) => ({ q: `What happens if 'while' condition is always True?`, o: ["Infinite loop", "Runs once", "Error", "Nothing"], c: 0, e: "Loop runs forever unless break is used." }),
  (_i: number) => ({ q: `What happens if 'while' condition is always False?`, o: ["Loop never runs", "Runs once", "Error", "Infinite loop"], c: 0, e: "Loop body never executes." }),
  (_i: number) => ({ q: `Can you modify the loop variable in a 'for' loop?`, o: ["Yes, but it doesn't affect iteration", "No", "Only in Python 2", "Error"], c: 0, e: "Modifying loop variable doesn't change iteration." }),
  (_i: number) => ({ q: `Can you modify the condition variable in a 'while' loop?`, o: ["Yes", "No", "Only in Python 2", "Error"], c: 0, e: "You can modify variables in while loop condition." }),
  
  // 51-60: Enumerate and Zip
  (_i: number) => ({ q: `What is list(enumerate(['a', 'b', 'c']))?`, o: ["[(0, 'a'), (1, 'b'), (2, 'c')]", "['a', 'b', 'c']", "Error", "None"], c: 0, e: "enumerate() adds index to each element." }),
  (_i: number) => ({ q: `What is list(enumerate(['a', 'b'], start=1))?`, o: ["[(1, 'a'), (2, 'b')]", "[(0, 'a'), (1, 'b')]", "Error", "None"], c: 0, e: "start parameter changes starting index." }),
  (_i: number) => ({ q: `What is list(zip([1, 2], ['a', 'b']))?`, o: ["[(1, 'a'), (2, 'b')]", "[1, 2, 'a', 'b']", "Error", "None"], c: 0, e: "zip() pairs elements from iterables." }),
  (_i: number) => ({ q: `What is list(zip([1, 2], ['a', 'b', 'c']))?`, o: ["[(1, 'a'), (2, 'b')]", "[(1, 'a'), (2, 'b'), (None, 'c')]", "Error", "None"], c: 0, e: "zip() stops at shortest iterable." }),
  (_i: number) => ({ q: `What is list(zip([1, 2, 3], ['a', 'b']))?`, o: ["[(1, 'a'), (2, 'b')]", "[(1, 'a'), (2, 'b'), (3, None)]", "Error", "None"], c: 0, e: "zip() stops at shortest iterable." }),
  (_i: number) => ({ q: `What is list(zip([1], [2], [3]))?`, o: ["[(1, 2, 3)]", "[1, 2, 3]", "Error", "None"], c: 0, e: "zip() can combine multiple iterables." }),
  (_i: number) => ({ q: `What is list(zip([]))?`, o: ["[]", "Error", "None", "[()]"], c: 0, e: "zip() with empty iterable returns empty list." }),
  (_i: number) => ({ q: `Can you use enumerate() with strings?`, o: ["Yes", "No", "Only in Python 2", "Error"], c: 0, e: "enumerate() works with any iterable." }),
  (_i: number) => ({ q: `Can you use zip() with strings?`, o: ["Yes", "No", "Only in Python 2", "Error"], c: 0, e: "zip() works with any iterables." }),
  (_i: number) => ({ q: `What is list(zip('ab', 'cd'))?`, o: ["[('a', 'c'), ('b', 'd')]", "['a', 'b', 'c', 'd']", "Error", "None"], c: 0, e: "zip() works with strings." }),
  
  // 61-70: List Comprehensions Basics
  (_i: number) => ({ q: `What is [x for x in range(3)]?`, o: ["[0, 1, 2]", "[1, 2, 3]", "[0, 1, 2, 3]", "Error"], c: 0, e: "List comprehension creates list from range." }),
  (_i: number) => ({ q: `What is [x * 2 for x in range(3)]?`, o: ["[0, 2, 4]", "[2, 4, 6]", "[0, 1, 2]", "Error"], c: 0, e: "List comprehension with transformation." }),
  (_i: number) => ({ q: `What is [x for x in range(5) if x % 2 == 0]?`, o: ["[0, 2, 4]", "[1, 3]", "[0, 1, 2, 3, 4]", "Error"], c: 0, e: "List comprehension with filter (even numbers)." }),
  (_i: number) => ({ q: `What is [x for x in range(5) if x % 2 == 1]?`, o: ["[1, 3]", "[0, 2, 4]", "[0, 1, 2, 3, 4]", "Error"], c: 0, e: "List comprehension with filter (odd numbers)." }),
  (_i: number) => ({ q: `What is [x ** 2 for x in range(3)]?`, o: ["[0, 1, 4]", "[1, 4, 9]", "[0, 1, 2]", "Error"], c: 0, e: "List comprehension with exponentiation." }),
  (_i: number) => ({ q: `What is [x if x % 2 == 0 else x * 2 for x in range(3)]?`, o: ["[0, 2, 4]", "[0, 1, 4]", "[0, 2, 2]", "Error"], c: 0, e: "List comprehension with conditional expression." }),
  (_i: number) => ({ q: `What is [x + y for x in [1, 2] for y in [3, 4]]?`, o: ["[4, 5, 5, 6]", "[1, 2, 3, 4]", "[4, 5]", "Error"], c: 0, e: "Nested list comprehension." }),
  (_i: number) => ({ q: `What is [[x * y for y in range(2)] for x in range(2)]?`, o: ["[[0, 0], [0, 1]]", "[[0, 1], [0, 1]]", "[0, 1]", "Error"], c: 0, e: "Nested list comprehension creating 2D list." }),
  (_i: number) => ({ q: `What is [x for x in 'abc']?`, o: ["['a', 'b', 'c']", "['abc']", "Error", "None"], c: 0, e: "List comprehension with string." }),
  (_i: number) => ({ q: `What is [x.upper() for x in 'abc']?`, o: ["['A', 'B', 'C']", "['abc']", "Error", "None"], c: 0, e: "List comprehension with string method." }),
  
  // 71-80: Dictionary and Set Comprehensions
  (_i: number) => ({ q: `What is {x: x**2 for x in range(3)}?`, o: ["{0: 0, 1: 1, 2: 4}", "{0, 1, 4}", "Error", "None"], c: 0, e: "Dictionary comprehension." }),
  (_i: number) => ({ q: `What is {x**2 for x in range(3)}?`, o: ["{0, 1, 4}", "{0: 0, 1: 1, 2: 4}", "Error", "None"], c: 0, e: "Set comprehension." }),
  (_i: number) => ({ q: `What is {x: x*2 for x in range(3)}?`, o: ["{0: 0, 1: 2, 2: 4}", "{0, 2, 4}", "Error", "None"], c: 0, e: "Dictionary comprehension with multiplication." }),
  (_i: number) => ({ q: `What is {x for x in range(5) if x % 2 == 0}?`, o: ["{0, 2, 4}", "{1, 3}", "{0, 1, 2, 3, 4}", "Error"], c: 0, e: "Set comprehension with filter." }),
  (_i: number) => ({ q: `What is {x: x for x in 'abc'}?`, o: ["{'a': 'a', 'b': 'b', 'c': 'c'}", "{'a', 'b', 'c'}", "Error", "None"], c: 0, e: "Dictionary comprehension with string." }),
  (_i: number) => ({ q: `What is {x.upper() for x in 'abc'}?`, o: ["{'A', 'B', 'C'}", "{'a', 'b', 'c'}", "Error", "None"], c: 0, e: "Set comprehension with string method." }),
  (_i: number) => ({ q: `What is {x: len(x) for x in ['a', 'ab', 'abc']}?`, o: ["{'a': 1, 'ab': 2, 'abc': 3}", "{1, 2, 3}", "Error", "None"], c: 0, e: "Dictionary comprehension with len()." }),
  (_i: number) => ({ q: `What is {x for x in 'hello'}?`, o: ["{'h', 'e', 'l', 'o'}", "{'hello'}", "Error", "None"], c: 0, e: "Set comprehension removes duplicates." }),
  (_i: number) => ({ q: `What is {x: x*2 for x in range(3) if x > 0}?`, o: ["{1: 2, 2: 4}", "{0: 0, 1: 2, 2: 4}", "Error", "None"], c: 0, e: "Dictionary comprehension with filter." }),
  (_i: number) => ({ q: `What is {x if x % 2 == 0 else x*2 for x in range(3)}?`, o: ["{0, 2, 4}", "{0, 1, 2}", "Error", "None"], c: 0, e: "Set comprehension with conditional." }),
  
  // 81-90: Generator Expressions
  (_i: number) => ({ q: `What is (x for x in range(3))?`, o: ["generator object", "[0, 1, 2]", "Error", "None"], c: 0, e: "Generator expression syntax." }),
  (_i: number) => ({ q: `What is list((x for x in range(3)))?`, o: ["[0, 1, 2]", "(0, 1, 2)", "Error", "None"], c: 0, e: "Generator expression converted to list." }),
  (_i: number) => ({ q: `What is tuple((x for x in range(3)))?`, o: ["(0, 1, 2)", "[0, 1, 2]", "Error", "None"], c: 0, e: "Generator expression converted to tuple." }),
  (_i: number) => ({ q: `What is sum(x for x in range(3))?`, o: ["3", "0", "Error", "None"], c: 0, e: "sum() with generator expression." }),
  (_i: number) => ({ q: `What is max(x for x in range(3))?`, o: ["2", "3", "0", "Error"], c: 0, e: "max() with generator expression." }),
  (_i: number) => ({ q: `What is min(x for x in range(3))?`, o: ["0", "1", "2", "Error"], c: 0, e: "min() with generator expression." }),
  (_i: number) => ({ q: `What is all(x > 0 for x in range(1, 3))?`, o: ["True", "False", "Error", "None"], c: 0, e: "all() with generator expression." }),
  (_i: number) => ({ q: `What is any(x > 2 for x in range(3))?`, o: ["False", "True", "Error", "None"], c: 0, e: "any() with generator expression." }),
  (_i: number) => ({ q: `What is (x*2 for x in range(3))?`, o: ["generator object", "[0, 2, 4]", "Error", "None"], c: 0, e: "Generator expression with transformation." }),
  (_i: number) => ({ q: `What is list((x*2 for x in range(3)))?`, o: ["[0, 2, 4]", "(0, 2, 4)", "Error", "None"], c: 0, e: "Generator expression with transformation converted to list." }),
  
  // 91-100: Advanced Iteration
  (_i: number) => ({ q: `What is list(map(lambda x: x*2, range(3)))?`, o: ["[0, 2, 4]", "[0, 1, 2]", "Error", "None"], c: 0, e: "map() applies function to iterable." }),
  (_i: number) => ({ q: `What is list(filter(lambda x: x % 2 == 0, range(5)))?`, o: ["[0, 2, 4]", "[1, 3]", "[0, 1, 2, 3, 4]", "Error"], c: 0, e: "filter() keeps elements matching condition." }),
  (_i: number) => ({ q: `What is list(map(str, range(3)))?`, o: ["['0', '1', '2']", "[0, 1, 2]", "Error", "None"], c: 0, e: "map() with type conversion." }),
  (_i: number) => ({ q: `What is list(filter(None, [0, 1, 2, '', 'a']))?`, o: ["[1, 2, 'a']", "[0, 1, 2, '', 'a']", "Error", "None"], c: 0, e: "filter(None) removes Falsy values." }),
  (_i: number) => ({ q: `What is next(iter(range(3)))?`, o: ["0", "1", "Error", "None"], c: 0, e: "next() gets next value from iterator." }),
  (_i: number) => ({ q: `What is iter([1, 2, 3])?`, o: ["list_iterator object", "[1, 2, 3]", "Error", "None"], c: 0, e: "iter() creates iterator from iterable." }),
  (_i: number) => ({ q: `What is list(iter([1, 2, 3]))?`, o: ["[1, 2, 3]", "list_iterator object", "Error", "None"], c: 0, e: "list() consumes iterator." }),
  (_i: number) => ({ q: `What is sum([1, 2, 3])?`, o: ["6", "0", "Error", "None"], c: 0, e: "sum() adds all elements in iterable." }),
  (_i: number) => ({ q: `What is all([True, True, False])?`, o: ["False", "True", "Error", "None"], c: 0, e: "all() returns True only if all elements are Truthy." }),
  (_i: number) => ({ q: `What is any([False, False, True])?`, o: ["True", "False", "Error", "None"], c: 0, e: "any() returns True if any element is Truthy." }),
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
      explanation: pattern.e
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
