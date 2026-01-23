import { PersonaStage, LevelInfo } from './types';

export const XP_PER_QUESTION = 10;
export const QUESTIONS_PER_LEVEL = 100;

// Level configurations with personas and concepts
export const LEVELS: LevelInfo[] = [
  {
    level: 1,
    persona: PersonaStage.PLANKTON,
    concepts: ["variables", "types", "strings", "comments"],
    description: "Basic data types and variable assignment. Learn to store and manipulate simple values.",
    color: "#6366f1"
  },
  {
    level: 2,
    persona: PersonaStage.SHRIMP,
    concepts: ["math", "expressions", "order of ops"],
    description: "Mathematical operations and expression evaluation. Master arithmetic and precedence rules.",
    color: "#8b5cf6"
  },
  {
    level: 3,
    persona: PersonaStage.CRAB,
    concepts: ["conditionals", "booleans", "logic"],
    description: "Decision-making with if/elif/else. Understand boolean logic and truth values.",
    color: "#ec4899"
  },
  {
    level: 4,
    persona: PersonaStage.SMALL_FISH,
    concepts: ["loops", "iteration", "ranges"],
    description: "Repetitive execution with for and while loops. Learn to iterate over sequences.",
    color: "#06b6d4"
  },
  {
    level: 5,
    persona: PersonaStage.OCTOPUS,
    concepts: ["lists", "arrays", "indexing"],
    description: "Ordered collections and list operations. Master mutable sequences.",
    color: "#10b981"
  },
  {
    level: 6,
    persona: PersonaStage.SEAL,
    concepts: ["dictionaries", "key-value", "hashing"],
    description: "Associative arrays and fast lookups. Learn unordered key-value mappings.",
    color: "#f59e0b"
  },
  {
    level: 7,
    persona: PersonaStage.DOLPHIN,
    concepts: ["functions", "parameters", "return"],
    description: "Reusable code blocks with parameters and return values. Master function design.",
    color: "#3b82f6"
  },
  {
    level: 8,
    persona: PersonaStage.SHARK,
    concepts: ["classes", "objects", "methods"],
    description: "Object-oriented programming basics. Learn to create and use custom types.",
    color: "#ef4444"
  },
  {
    level: 9,
    persona: PersonaStage.WHALE,
    concepts: ["inheritance", "polymorphism", "encapsulation"],
    description: "Advanced OOP concepts. Understand class hierarchies and behavior inheritance.",
    color: "#8b5cf6"
  },
  {
    level: 10,
    persona: PersonaStage.GOD_WHALE,
    concepts: ["design patterns", "architecture", "best practices"],
    description: "Professional-level patterns and practices. Master scalable code design.",
    color: "#1f2937"
  }
];

// Glossary data for the app
export const GLOSSARY = [
  {
    term: "Variable",
    definition: "A named reference to an object in memory that can store different values.",
    levelRange: "1-2",
    detailedDescription: "Variables in Python are dynamic, meaning they can reference objects of any type and can be reassigned to different types. Unlike statically-typed languages, Python variables don't have fixed types - the type is determined by the object they reference. Variable names must follow specific rules: they can contain letters, numbers, and underscores, but cannot start with a number. They are case-sensitive.",
    example: "score = 42\nname = 'Alice'\nactive = True"
  },
  {
    term: "String",
    definition: "An immutable sequence of characters representing text data.",
    levelRange: "1-2",
    detailedDescription: "Strings in Python are immutable objects that represent text. They can be created using single quotes, double quotes, or triple quotes for multi-line strings. Python provides extensive string methods for manipulation, including slicing, concatenation, and formatting. Strings are sequences, so they support indexing and iteration.",
    example: "message = 'Hello World'\nlong_text = '''This is a\nmulti-line string'''\nfirst_char = message[0]  # 'H'"
  },
  {
    term: "Integer",
    definition: "Whole numbers without decimal points, with unlimited precision.",
    levelRange: "1-2",
    detailedDescription: "Python integers have arbitrary precision, meaning they can be arbitrarily large without overflow issues that occur in fixed-width integer types in other languages. This makes Python suitable for mathematical computations involving very large numbers. Integer literals can include underscores for readability.",
    example: "small = 42\nlarge = 1_000_000_000_000\nnegative = -17"
  },
  {
    term: "Float",
    definition: "Decimal numbers represented in binary floating-point format.",
    levelRange: "1-2",
    detailedDescription: "Float objects represent real numbers with decimal precision. They are implemented using the IEEE 754 double-precision binary floating-point format, which can lead to small precision errors in some calculations. For financial or other applications requiring exact decimal arithmetic, the decimal module should be used instead.",
    example: "pi = 3.14159\nnegative = -2.5\nscientific = 1.23e-4"
  },
  {
    term: "Boolean",
    definition: "A binary data type representing True or False values.",
    levelRange: "1-2",
    detailedDescription: "Boolean values are used for logical operations and conditional statements. In Python, every object has an inherent boolean value (truthiness), where most objects are considered True except for specific falsy values like 0, empty strings, empty lists, None, and False itself. Boolean operations follow standard logical rules.",
    example: "is_active = True\nhas_permission = False\nresult = (5 > 3) and (10 < 20)  # True"
  },
  {
    term: "If Statement",
    definition: "A conditional statement that executes code only when a condition is True.",
    levelRange: "3-4",
    detailedDescription: "The if statement is Python's primary conditional construct. It evaluates a boolean expression and executes the indented block only if the condition is True. Python uses indentation (not braces) to define code blocks. The if statement can be followed by optional elif (else-if) and else clauses for handling multiple conditions.",
    example: "age = 18\nif age >= 18:\n    print('Adult')\nelif age >= 13:\n    print('Teen')\nelse:\n    print('Child')"
  },
  {
    term: "Comparison Operator",
    definition: "Operators that compare two values and return a boolean result.",
    levelRange: "3-4",
    detailedDescription: "Comparison operators evaluate relationships between values and return True or False. Python supports: == (equal), != (not equal), < (less than), > (greater than), <= (less than or equal), >= (greater than or equal), is (identity), in (membership). These operators are fundamental to conditional logic and control flow.",
    example: "x = 10\ny = 5\nprint(x > y)   # True\nprint(x == y)  # False\nprint(x != y)  # True\nprint(5 in [1, 2, 3, 4, 5])  # True"
  },
  {
    term: "Logical Operator",
    definition: "Operators that combine boolean expressions: and, or, not.",
    levelRange: "3-4",
    detailedDescription: "Logical operators combine boolean values or expressions. 'and' returns True only if both operands are True. 'or' returns True if at least one operand is True. 'not' inverts the boolean value. Python uses short-circuit evaluation: 'and' stops at the first False, 'or' stops at the first True, which can improve performance.",
    example: "x = 10\ny = 5\nresult1 = (x > 5) and (y < 10)  # True\nresult2 = (x < 5) or (y > 10)   # False\nresult3 = not (x > 5)            # False"
  },
  {
    term: "For Loop",
    definition: "A loop that iterates over a sequence (list, string, range, etc.).",
    levelRange: "3-4",
    detailedDescription: "The for loop iterates over items in a sequence or other iterable object. It automatically handles iteration, eliminating the need for manual index management. The loop variable takes each value from the sequence in turn. For loops are preferred when you know how many iterations you need or when iterating over a collection.",
    example: "fruits = ['apple', 'banana', 'cherry']\nfor fruit in fruits:\n    print(fruit)\n\n# With range\nfor i in range(5):\n    print(i)  # 0, 1, 2, 3, 4"
  },
  {
    term: "While Loop",
    definition: "A loop that continues executing while a condition remains True.",
    levelRange: "3-4",
    detailedDescription: "The while loop repeatedly executes a block of code as long as the condition evaluates to True. Unlike for loops, while loops are used when the number of iterations is unknown beforehand. Care must be taken to ensure the condition eventually becomes False, otherwise an infinite loop occurs. The loop variable must be modified within the loop body.",
    example: "count = 0\nwhile count < 5:\n    print(count)\n    count += 1  # Important: modify the condition\n\n# Infinite loop (avoid!)\n# while True:\n#     print('Forever')"
  },
  {
    term: "Range",
    definition: "A built-in function that generates a sequence of numbers.",
    levelRange: "3-4",
    detailedDescription: "The range() function generates an immutable sequence of numbers, commonly used in for loops. It can take one argument (stop), two arguments (start, stop), or three arguments (start, stop, step). The stop value is exclusive. Range is memory-efficient as it generates numbers on-demand rather than storing them all in memory.",
    example: "range(5)           # 0, 1, 2, 3, 4\nrange(2, 6)        # 2, 3, 4, 5\nrange(0, 10, 2)    # 0, 2, 4, 6, 8\nrange(10, 0, -1)   # 10, 9, 8, 7, 6, 5, 4, 3, 2, 1"
  },
  {
    term: "Break Statement",
    definition: "A statement that immediately exits the current loop.",
    levelRange: "3-4",
    detailedDescription: "The break statement terminates the nearest enclosing loop (for or while) and continues execution after the loop. It's commonly used to exit a loop early when a condition is met, such as finding a target value or encountering an error condition. Break only exits one level of nesting.",
    example: "for i in range(10):\n    if i == 5:\n        break  # Exit loop when i is 5\n    print(i)  # Prints 0, 1, 2, 3, 4"
  },
  {
    term: "Continue Statement",
    definition: "A statement that skips the rest of the current loop iteration.",
    levelRange: "3-4",
    detailedDescription: "The continue statement skips the remaining code in the current loop iteration and jumps to the next iteration. Unlike break, continue doesn't exit the loop entirely - it just moves to the next cycle. This is useful for skipping certain values or conditions while continuing to process others.",
    example: "for i in range(10):\n    if i % 2 == 0:  # Skip even numbers\n        continue\n    print(i)  # Prints only odd numbers: 1, 3, 5, 7, 9"
  },
  {
    term: "Function",
    definition: "A reusable block of code that performs a specific task.",
    levelRange: "5-6",
    detailedDescription: "Functions are first-class objects in Python that encapsulate code for reuse. They can accept parameters and return values. Python functions support default parameters, variable-length argument lists (*args, **kwargs), and can be passed as arguments to other functions. Functions can be defined with or without explicit return statements.",
    example: "def greet(name, greeting='Hello'):\n    return f'{greeting}, {name}!'\n\nresult = greet('Alice')  # 'Hello, Alice!'\nresult2 = greet('Bob', 'Hi')  # 'Hi, Bob!'"
  },
  {
    term: "List",
    definition: "A mutable, ordered sequence of objects that can contain mixed types.",
    levelRange: "5-6",
    detailedDescription: "Lists are Python's primary mutable sequence type. They can grow and shrink dynamically, and can contain objects of different types. Lists support powerful operations like slicing, concatenation, and list comprehensions. They are implemented as dynamic arrays, providing efficient random access but potentially expensive insertions/deletions in the middle.",
    example: "numbers = [1, 2, 3, 4, 5]\nfruits = ['apple', 'banana', 'cherry']\nmixed = [42, 'hello', True, [1, 2]]\n\n# List comprehension\nsquares = [x**2 for x in numbers]"
  },
  {
    term: "Dictionary",
    definition: "A mutable mapping of hashable keys to arbitrary values.",
    levelRange: "5-6",
    detailedDescription: "Dictionaries provide fast lookups using keys rather than positional indexing. Keys must be hashable (immutable) objects, while values can be any type. Dictionaries maintain insertion order as of Python 3.7. They are implemented using hash tables, providing average O(1) lookup time. Dictionary comprehensions allow creating dictionaries from iterables.",
    example: "person = {'name': 'Alice', 'age': 30, 'city': 'New York'}\n\n# Accessing values\nname = person['name']\n\n# Dictionary comprehension\nsquares = {x: x**2 for x in range(5)}  # {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}"
  },
  {
    term: "Class",
    definition: "A blueprint for creating objects with shared behavior and state.",
    levelRange: "7-8",
    detailedDescription: "Classes define the structure and behavior of objects. They contain attributes (data) and methods (functions). The __init__ method initializes new instances. Classes support inheritance, allowing child classes to extend or modify parent class behavior. Python uses a method resolution order (MRO) to determine which method to call in multiple inheritance scenarios.",
    example: "class Person:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n    \n    def greet(self):\n        return f'Hello, I am {self.name}'\n\nperson = Person('Alice', 30)\nprint(person.greet())  # 'Hello, I am Alice'"
  },
  {
    term: "Method",
    definition: "A function defined inside a class that operates on instances of that class.",
    levelRange: "7-8",
    detailedDescription: "Methods are functions bound to class instances. The first parameter is conventionally named 'self' and refers to the instance. Methods can access and modify instance attributes. Class methods and static methods provide alternative ways to define functions related to classes. Methods support the same parameter features as regular functions.",
    example: "class Calculator:\n    def add(self, a, b):\n        return a + b\n    \n    def multiply(self, a, b):\n        return a * b\n\ncalc = Calculator()\nresult = calc.add(5, 3)  # 8"
  },
  {
    term: "Scope",
    definition: "The region of a program where a variable is accessible.",
    levelRange: "7-8",
    detailedDescription: "Scope determines where variables can be accessed. Python has four scopes: local (inside functions), enclosing (nested functions), global (module level), and built-in (Python's built-in names). Variables in inner scopes can shadow those in outer scopes. The LEGB rule (Local, Enclosing, Global, Built-in) determines name resolution.",
    example: "global_var = 'global'\n\ndef outer():\n    enclosing_var = 'enclosing'\n    \n    def inner():\n        local_var = 'local'\n        print(local_var)  # local\n        print(enclosing_var)  # enclosing\n        print(global_var)  # global\n    \n    return inner\n\ninner_func = outer()\ninner_func()"
  },
  {
    term: "Global Variable",
    definition: "A variable defined at the module level, accessible throughout the module.",
    levelRange: "7-8",
    detailedDescription: "Global variables are defined outside any function or class. They can be accessed from anywhere in the module, including inside functions. To modify a global variable from inside a function, you must declare it with the 'global' keyword. Global variables should be used sparingly as they can make code harder to understand and debug.",
    example: "counter = 0\n\ndef increment():\n    global counter\n    counter += 1\n\nincrement()\nprint(counter)  # 1"
  },
  {
    term: "Local Variable",
    definition: "A variable defined inside a function, only accessible within that function.",
    levelRange: "7-8",
    detailedDescription: "Local variables are created when a function is called and destroyed when the function returns. They are not accessible outside the function. Local variables with the same name as global variables shadow the global ones within the function scope. This is known as variable shadowing.",
    example: "def calculate():\n    x = 10  # local variable\n    y = 20  # local variable\n    return x + y\n\nresult = calculate()  # 30\n# x and y are not accessible here"
  },
  {
    term: "Nested Function",
    definition: "A function defined inside another function.",
    levelRange: "7-8",
    detailedDescription: "Nested functions (also called inner functions) are defined within the body of another function. They can access variables from their enclosing scope (closure). Nested functions are useful for creating helper functions or implementing decorators. They follow the LEGB rule for name resolution.",
    example: "def outer_function(x):\n    def inner_function(y):\n        return x + y  # can access x from outer scope\n    return inner_function\n\nadd_five = outer_function(5)\nprint(add_five(3))  # 8"
  },
  {
    term: "Closure",
    definition: "A function that remembers the environment in which it was created.",
    levelRange: "9-10",
    detailedDescription: "A closure occurs when a nested function references variables from its enclosing scope, even after the outer function has finished executing. This allows the inner function to 'remember' the state of the outer function. Closures are fundamental to decorators, partial functions, and many design patterns.",
    example: "def make_multiplier(factor):\n    def multiply(number):\n        return number * factor  # factor is 'remembered'\n    return multiply\n\ndouble = make_multiplier(2)\nprint(double(5))  # 10\ntriple = make_multiplier(3)\nprint(triple(5))  # 15"
  },
  {
    term: "Helper Function",
    definition: "A small utility function that assists a larger function.",
    levelRange: "7-8",
    detailedDescription: "Helper functions (also called utility functions) are small functions defined to perform specific tasks that support larger functions. They improve code readability and reusability by breaking down complex operations into manageable pieces. Helper functions are often defined within the scope where they are used.",
    example: "def process_data(data):\n    def validate_item(item):\n        return isinstance(item, int) and item > 0\n    \n    def clean_item(item):\n        return max(0, min(100, item))\n    \n    valid_data = [clean_item(item) for item in data if validate_item(item)]\n    return valid_data\n\nresult = process_data([10, -5, 50, 'invalid', 200])  # [10, 50]"
  },
  {
    term: "Recursion",
    definition: "A function that calls itself to solve a problem.",
    levelRange: "9-10",
    detailedDescription: "Recursion occurs when a function calls itself, either directly or indirectly through other functions. Each recursive call creates a new execution context with its own local variables. Recursion requires a base case to prevent infinite loops and a recursive case that moves toward the base case. Python has a recursion limit (default 1000) to prevent stack overflow.",
    example: "def factorial(n):\n    if n <= 1:  # base case\n        return 1\n    return n * factorial(n - 1)  # recursive case\n\nprint(factorial(5))  # 120"
  },
  {
    term: "Decorator",
    definition: "A function that modifies the behavior of another function.",
    levelRange: "9-10",
    detailedDescription: "Decorators are functions that take another function as an argument and return a modified version of that function. They are applied using the @ symbol. Decorators are commonly used for logging, authentication, caching, and validation. They leverage closures and function objects to wrap functionality.",
    example: "def timer(func):\n    def wrapper(*args, **kwargs):\n        import time\n        start = time.time()\n        result = func(*args, **kwargs)\n        end = time.time()\n        print(f'{func.__name__} took {end - start:.2f} seconds')\n        return result\n    return wrapper\n\n@timer\ndef slow_function():\n    import time\n    time.sleep(1)\n    return 'done'\n\nslow_function()  # prints timing info"
  },
  {
    term: "Lambda Function",
    definition: "An anonymous, inline function defined with the lambda keyword.",
    levelRange: "7-8",
    detailedDescription: "Lambda functions are small, anonymous functions that can be defined inline. They can take any number of arguments but can only have one expression. Lambda functions are often used with functions like map(), filter(), and sorted() where a small function is needed temporarily. They cannot contain statements or complex logic.",
    example: "numbers = [1, 2, 3, 4, 5]\n\n# Lambda with map\neven_numbers = list(map(lambda x: x * 2, numbers))  # [2, 4, 6, 8, 10]\n\n# Lambda with filter\nevens = list(filter(lambda x: x % 2 == 0, numbers))  # [2, 4]\n\n# Lambda with sorted\npairs = [(1, 'one'), (2, 'two'), (3, 'three')]\nsorted_pairs = sorted(pairs, key=lambda x: x[1])"
  },
  {
    term: "Generator",
    definition: "A function that yields values one at a time instead of returning a complete list.",
    levelRange: "9-10",
    detailedDescription: "Generators are functions that use the 'yield' keyword to produce a sequence of values lazily. Instead of computing all values at once and storing them in memory, generators compute values on-demand. This makes them memory-efficient for large datasets. Generators can be consumed using next() or in for loops.",
    example: "def fibonacci_generator():\n    a, b = 0, 1\n    while True:\n        yield a\n        a, b = b, a + b\n\nfib = fibonacci_generator()\nprint(next(fib))  # 0\nprint(next(fib))  # 1\nprint(next(fib))  # 1\nprint(next(fib))  # 2\n\n# Or use in a loop\nfor num in fib:\n    if num > 100:\n        break\n    print(num)"
  },
  // Level 1-2 Additional Terms
  {
    term: "None",
    definition: "A special constant representing the absence of a value.",
    levelRange: "1-2",
    detailedDescription: "None is Python's null value, representing the absence of a value or a null object. It is a singleton object (only one instance exists). None is commonly used as a default return value for functions that don't explicitly return anything. It is falsy in boolean contexts.",
    example: "value = None\nif value is None:\n    print('No value assigned')\n\ndef find_item(items, target):\n    for item in items:\n        if item == target:\n            return item\n    return None  # Not found"
  },
  {
    term: "Comment",
    definition: "Text in code that is ignored by the Python interpreter, used for documentation.",
    levelRange: "1-2",
    detailedDescription: "Comments start with # and continue to the end of the line. They are used to explain code, document functions, or temporarily disable code. Multi-line comments can be created using multiple # lines or triple-quoted strings (though the latter creates a string object). Comments are essential for code readability and maintenance.",
    example: "# This is a single-line comment\n\n# Multi-line comments use\n# multiple hash symbols\n\nx = 5  # Inline comment explaining the variable\n\n\"\"\"\nThis is a docstring, not technically a comment,\nbut often used for documentation.\n\"\"\""
  },
  {
    term: "Type Conversion",
    definition: "Converting a value from one data type to another.",
    levelRange: "1-2",
    detailedDescription: "Type conversion (also called type casting) transforms values from one type to another. Python provides built-in functions like int(), float(), str(), bool() for conversions. Some conversions are automatic (implicit), while others must be explicit. Not all conversions are possible - attempting invalid conversions raises TypeError.",
    example: "x = '42'\nnumber = int(x)  # Convert string to integer: 42\n\ndecimal = float(5)  # Convert int to float: 5.0\n\ntext = str(123)  # Convert number to string: '123'\n\nboolean = bool(1)  # Convert to boolean: True\nboolean2 = bool(0)  # False"
  },
  {
    term: "Arithmetic Operator",
    definition: "Operators that perform mathematical operations: +, -, *, /, //, %, **.",
    levelRange: "1-2",
    detailedDescription: "Arithmetic operators perform basic mathematical operations. + (addition), - (subtraction), * (multiplication), / (division, always returns float), // (floor division), % (modulo/remainder), ** (exponentiation). Python follows standard mathematical precedence rules. Division by zero raises ZeroDivisionError.",
    example: "a = 10\nb = 3\n\nprint(a + b)   # 13 (addition)\nprint(a - b)   # 7 (subtraction)\nprint(a * b)   # 30 (multiplication)\nprint(a / b)   # 3.333... (division)\nprint(a // b)  # 3 (floor division)\nprint(a % b)   # 1 (modulo)\nprint(a ** b)  # 1000 (exponentiation)"
  },
  {
    term: "String Concatenation",
    definition: "Combining multiple strings into a single string using + or join().",
    levelRange: "1-2",
    detailedDescription: "String concatenation combines strings end-to-end. The + operator concatenates two strings. For multiple strings, join() is more efficient than repeated + operations. String concatenation creates new string objects since strings are immutable. The += operator can be used for in-place concatenation (though it still creates a new object).",
    example: "first = 'Hello'\nlast = 'World'\nresult = first + ' ' + last  # 'Hello World'\n\n# Using join (more efficient for many strings)\nwords = ['Hello', 'World', 'Python']\ncombined = ' '.join(words)  # 'Hello World Python'\n\n# String repetition\nrepeated = 'ha' * 3  # 'hahaha'"
  },
  {
    term: "String Slicing",
    definition: "Extracting a portion of a string using index notation [start:end:step].",
    levelRange: "1-2",
    detailedDescription: "String slicing extracts substrings using bracket notation with colons. The syntax is [start:end:step] where start is inclusive, end is exclusive, and step controls the increment. Negative indices count from the end. Omitting start defaults to 0, omitting end defaults to the end. Slicing returns a new string and never raises IndexError.",
    example: "text = 'Python'\nprint(text[0:2])    # 'Py'\nprint(text[:3])     # 'Pyt'\nprint(text[3:])     # 'hon'\nprint(text[-3:])    # 'hon'\nprint(text[::2])    # 'Pto' (every 2nd character)\nprint(text[::-1])   # 'nohtyP' (reverse)"
  },
  {
    term: "Assignment Operator",
    definition: "The = operator that assigns a value to a variable.",
    levelRange: "1-2",
    detailedDescription: "The assignment operator = binds a value to a variable name. Python supports multiple assignment (unpacking), augmented assignment (+=, -=, *=, etc.), and chained assignment. Assignment doesn't copy objects - it creates a reference. For mutable objects, this means multiple variables can reference the same object.",
    example: "x = 10  # Simple assignment\n\na, b = 1, 2  # Multiple assignment\n\nx += 5  # Augmented assignment (same as x = x + 5)\n\n# Chained assignment\nx = y = z = 0  # All three variables equal 0"
  },
  {
    term: "F-String",
    definition: "A formatted string literal that allows embedded expressions using f prefix.",
    levelRange: "1-2",
    detailedDescription: "F-strings (formatted string literals) are prefixed with 'f' or 'F' and allow embedding Python expressions inside curly braces {}. They provide a concise and readable way to format strings. F-strings are evaluated at runtime and support expressions, function calls, and formatting specifiers. They are the preferred method for string formatting in Python 3.6+.",
    example: "name = 'Alice'\nage = 30\n\n# F-string with variables\nmessage = f'Hello, {name}!'\n\n# F-string with expressions\ninfo = f'{name} is {age} years old'\n\n# F-string with formatting\nprice = 19.99\nformatted = f'Price: ${price:.2f}'  # 'Price: $19.99'\n\n# F-string with function calls\nresult = f'The length is {len(name)}'"
  },
  // Level 3-4 Additional Terms
  {
    term: "Elif Statement",
    definition: "A conditional clause that checks additional conditions after an if statement.",
    levelRange: "3-4",
    detailedDescription: "Elif (else-if) allows checking multiple conditions sequentially. It combines else and if into a single keyword. Elif clauses are evaluated only if all previous conditions were False. Once a True condition is found, that block executes and subsequent elif/else clauses are skipped. Elif provides a cleaner alternative to nested if statements.",
    example: "score = 85\n\nif score >= 90:\n    grade = 'A'\nelif score >= 80:\n    grade = 'B'\nelif score >= 70:\n    grade = 'C'\nelse:\n    grade = 'F'\n\nprint(grade)  # 'B'"
  },
  {
    term: "Else Clause",
    definition: "An optional clause that executes when all previous conditions are False.",
    levelRange: "3-4",
    detailedDescription: "The else clause provides a default action when no conditions in an if/elif chain are True. It must come after all if and elif statements. There can only be one else clause per if statement. Else can also be used with for and while loops to execute code when the loop completes normally (not via break).",
    example: "age = 15\n\nif age >= 18:\n    status = 'Adult'\nelse:\n    status = 'Minor'\n\n# Else with loops\nfor i in range(5):\n    if i == 10:\n        break\nelse:\n    print('Loop completed normally')  # This executes"
  },
  {
    term: "Ternary Operator",
    definition: "A conditional expression that returns one value if True, another if False.",
    levelRange: "3-4",
    detailedDescription: "Python's ternary operator (conditional expression) has the syntax: value_if_true if condition else value_if_false. It's a concise way to assign values based on conditions. Unlike if-else statements, ternary operators are expressions that return values. They can be nested but should be used sparingly for readability.",
    example: "age = 20\nstatus = 'Adult' if age >= 18 else 'Minor'\n\n# Equivalent to:\n# if age >= 18:\n#     status = 'Adult'\n# else:\n#     status = 'Minor'\n\nmax_value = a if a > b else b  # Find maximum"
  },
  {
    term: "Truthiness",
    definition: "The inherent boolean value of any Python object.",
    levelRange: "3-4",
    detailedDescription: "Every Python object has a truthiness value - it's considered either truthy or falsy. Falsy values include: None, False, 0, empty sequences (\"\", [], ()), empty mappings ({}), and objects with __bool__() or __len__() returning False/0. All other values are truthy. Truthiness is evaluated in boolean contexts like if statements.",
    example: "if 0:  # Falsy\n    print('This won't print')\n\nif 1:  # Truthy\n    print('This will print')\n\nif '':  # Falsy (empty string)\n    print('Won't print')\n\nif 'hello':  # Truthy\n    print('Will print')\n\nif []:  # Falsy (empty list)\n    print('Won't print')"
  },
  {
    term: "Short-Circuit Evaluation",
    definition: "The behavior where logical operators stop evaluating once the result is determined.",
    levelRange: "3-4",
    detailedDescription: "Python's 'and' and 'or' operators use short-circuit evaluation. For 'and', if the left operand is False, the right operand isn't evaluated. For 'or', if the left operand is True, the right operand isn't evaluated. This can improve performance and allow safe operations like checking if a list exists before accessing it.",
    example: "x = 0\ny = 5\n\n# Short-circuit with 'and'\nresult = x and y  # Returns 0, doesn't evaluate y\n\n# Short-circuit with 'or'\nresult = x or y  # Returns 5, doesn't need to check further\n\n# Safe list access\nitems = [1, 2, 3]\nif items and items[0] > 0:  # Safe: checks items exists first\n    print('First item is positive')"
  },
  {
    term: "Nested Loop",
    definition: "A loop inside another loop, used to iterate over multi-dimensional data.",
    levelRange: "3-4",
    detailedDescription: "Nested loops place one loop inside another, creating a pattern where the inner loop completes all iterations for each iteration of the outer loop. This is useful for working with 2D data structures, generating combinations, or processing grids. The total iterations equals the product of both loop ranges.",
    example: "for i in range(3):\n    for j in range(2):\n        print(f'({i}, {j})')\n# Output:\n# (0, 0) (0, 1)\n# (1, 0) (1, 1)\n# (2, 0) (2, 1)\n\n# Processing a 2D grid\nmatrix = [[1, 2], [3, 4]]\nfor row in matrix:\n    for cell in row:\n        print(cell)"
  },
  {
    term: "Loop Variable",
    definition: "The variable that takes each value from the iterable in a for loop.",
    levelRange: "3-4",
    detailedDescription: "The loop variable is the identifier that receives each value from the iterable during iteration. It's created in the loop scope and persists after the loop completes with its final value. The loop variable can be any valid identifier and can be used within the loop body. Modifying the loop variable doesn't affect the original iterable.",
    example: "for number in [1, 2, 3, 4, 5]:\n    print(number * 2)  # number is the loop variable\n\n# Loop variable persists after loop\nfor item in ['a', 'b']:\n    pass\nprint(item)  # 'b' (last value)\n\n# Using loop variable with range\nfor i in range(5):\n    print(f'Index: {i}')"
  },
  {
    term: "Infinite Loop",
    definition: "A loop that continues indefinitely because its condition never becomes False.",
    levelRange: "3-4",
    detailedDescription: "An infinite loop occurs when a while loop's condition always evaluates to True, or when the loop variable in a for loop never reaches a termination point. While sometimes intentional (with break statements), infinite loops are usually bugs. They can cause programs to hang or consume excessive resources. Always ensure loop conditions can become False.",
    example: "# Intentional infinite loop with break\nwhile True:\n    user_input = input('Enter command: ')\n    if user_input == 'quit':\n        break  # Exit the loop\n    print(f'You entered: {user_input}')\n\n# Accidental infinite loop (BUG!)\n# count = 0\n# while count < 5:\n#     print(count)\n#     # Forgot to increment count - infinite loop!"
  },
  {
    term: "Pass Statement",
    definition: "A null operation that does nothing, used as a placeholder.",
    levelRange: "3-4",
    detailedDescription: "The pass statement is a null operation - when executed, nothing happens. It's useful as a placeholder where syntax requires a statement but no action is needed. Common uses include: empty function/class bodies, conditional blocks that will be implemented later, or exception handlers that intentionally do nothing.",
    example: "def function_to_implement_later():\n    pass  # Placeholder - will add code later\n\nif condition:\n    pass  # Do nothing if condition is True\nelse:\n    print('Condition is False')\n\ntry:\n    risky_operation()\nexcept:\n    pass  # Silently ignore errors"
  },
  // Level 5-6 Additional Terms
  {
    term: "List Indexing",
    definition: "Accessing individual elements of a list using their position (index).",
    levelRange: "5-6",
    detailedDescription: "List indexing uses square brackets with an integer index to access elements. Indices start at 0 for the first element. Negative indices count from the end (-1 is the last element). Accessing an invalid index raises IndexError. Indexing returns a reference to the object, so modifying mutable elements affects the original list.",
    example: "fruits = ['apple', 'banana', 'cherry']\n\nprint(fruits[0])   # 'apple' (first element)\nprint(fruits[1])   # 'banana'\nprint(fruits[-1])  # 'cherry' (last element)\nprint(fruits[-2])  # 'banana' (second from end)\n\n# Modifying through index\nfruits[0] = 'orange'  # ['orange', 'banana', 'cherry']"
  },
  {
    term: "List Method",
    definition: "Built-in functions that operate on lists: append(), remove(), sort(), etc.",
    levelRange: "5-6",
    detailedDescription: "List methods are functions called on list objects using dot notation. Common methods include: append() (add to end), insert() (add at position), remove() (remove by value), pop() (remove and return), sort() (in-place sorting), reverse() (reverse order), count() (count occurrences), index() (find position). Most list methods modify the list in-place.",
    example: "numbers = [3, 1, 4, 1, 5]\n\nnumbers.append(9)      # [3, 1, 4, 1, 5, 9]\nnumbers.insert(1, 2)   # [3, 2, 1, 4, 1, 5, 9]\nnumbers.remove(1)      # [3, 2, 4, 1, 5, 9] (removes first 1)\nnumbers.sort()         # [1, 2, 3, 4, 5, 9]\nnumbers.reverse()      # [9, 5, 4, 3, 2, 1]\ncount = numbers.count(1)  # 1"
  },
  {
    term: "List Comprehension",
    definition: "A concise way to create lists using a single line of code.",
    levelRange: "5-6",
    detailedDescription: "List comprehensions provide a compact syntax for creating lists. The basic form is [expression for item in iterable]. They can include conditions: [expression for item in iterable if condition]. List comprehensions are more readable and often faster than equivalent for loops. They can be nested for multi-dimensional lists.",
    example: "numbers = [1, 2, 3, 4, 5]\n\n# Square each number\nsquares = [x**2 for x in numbers]  # [1, 4, 9, 16, 25]\n\n# Filter even numbers\n evens = [x for x in numbers if x % 2 == 0]  # [2, 4]\n\n# Nested comprehension\nmatrix = [[i*j for j in range(3)] for i in range(3)]\n# [[0, 0, 0], [0, 1, 2], [0, 2, 4]]"
  },
  {
    term: "Tuple",
    definition: "An immutable, ordered sequence of objects, defined with parentheses.",
    levelRange: "5-6",
    detailedDescription: "Tuples are immutable sequences, meaning they cannot be modified after creation. They are defined with parentheses (or just commas). Tuples are faster than lists and can be used as dictionary keys (since they're hashable). They're useful for fixed collections of related values. Single-element tuples require a trailing comma.",
    example: "point = (3, 4)  # Coordinates\nperson = ('Alice', 30, 'Engineer')  # Multiple values\n\n# Single element tuple\nsingle = (42,)  # Note the comma\nnot_tuple = (42)  # This is just an integer\n\n# Tuple unpacking\nx, y = point  # x = 3, y = 4\n\n# Tuples as dictionary keys\nlocations = {(0, 0): 'Origin', (1, 1): 'Corner'}"
  },
  {
    term: "Set",
    definition: "An unordered collection of unique, hashable objects.",
    levelRange: "5-6",
    detailedDescription: "Sets are mutable collections that store unique elements. They don't maintain order (though Python 3.7+ preserves insertion order). Sets are useful for membership testing, removing duplicates, and mathematical set operations (union, intersection, difference). Elements must be hashable (immutable). Sets are created with {} or set().",
    example: "numbers = {1, 2, 3, 3, 4}  # {1, 2, 3, 4} (duplicates removed)\n\n# Set operations\nset1 = {1, 2, 3}\nset2 = {3, 4, 5}\n\nunion = set1 | set2        # {1, 2, 3, 4, 5}\nintersection = set1 & set2  # {3}\ndifference = set1 - set2    # {1, 2}\n\n# Membership testing\nprint(2 in set1)  # True"
  },
  {
    term: "Dictionary Key",
    definition: "The unique identifier used to access values in a dictionary.",
    levelRange: "5-6",
    detailedDescription: "Dictionary keys must be hashable (immutable) objects like strings, numbers, or tuples. Keys are unique - assigning to an existing key overwrites the value. Keys are used to access, add, or modify dictionary values. Accessing a non-existent key raises KeyError (use get() to avoid this). Keys can be iterated over with .keys().",
    example: "person = {'name': 'Alice', 'age': 30}\n\n# Accessing values\nname = person['name']  # 'Alice'\nage = person.get('age', 0)  # 30 (with default)\n\n# Adding/modifying\nperson['city'] = 'NYC'  # Add new key\nperson['age'] = 31     # Modify existing\n\n# Iterating keys\nfor key in person.keys():\n    print(key, person[key])"
  },
  {
    term: "Dictionary Value",
    definition: "The data associated with a key in a dictionary.",
    levelRange: "5-6",
    detailedDescription: "Dictionary values can be any Python object - strings, numbers, lists, other dictionaries, functions, etc. Values are accessed using their corresponding keys. Unlike keys, values don't need to be unique or hashable. Values can be modified, added, or removed. The .values() method returns all values in a dictionary.",
    example: "data = {\n    'name': 'Alice',\n    'scores': [85, 90, 88],\n    'info': {'age': 30, 'city': 'NYC'}\n}\n\n# Accessing values\nname = data['name']           # 'Alice'\nscores = data['scores']        # [85, 90, 88]\ninfo = data['info']            # {'age': 30, 'city': 'NYC'}\n\n# Modifying values\ndata['scores'].append(92)  # Modifies the list\n\n# Iterating values\nfor value in data.values():\n    print(value)"
  },
  {
    term: "Dictionary Comprehension",
    definition: "A concise way to create dictionaries using a single expression.",
    levelRange: "5-6",
    detailedDescription: "Dictionary comprehensions create dictionaries using the syntax {key: value for item in iterable}. They can include conditions: {key: value for item in iterable if condition}. Dictionary comprehensions are more readable and efficient than creating dictionaries with loops. They're useful for transforming data structures.",
    example: "numbers = [1, 2, 3, 4, 5]\n\n# Create dictionary of squares\nsquares = {x: x**2 for x in numbers}\n# {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}\n\n# With condition\n evens = {x: x*2 for x in numbers if x % 2 == 0}\n# {2: 4, 4: 8}\n\n# From two lists\nkeys = ['a', 'b', 'c']\nvalues = [1, 2, 3]\ndict_from_lists = {k: v for k, v in zip(keys, values)}\n# {'a': 1, 'b': 2, 'c': 3}"
  },
  // Level 7-8 Additional Terms
  {
    term: "Parameter",
    definition: "A variable in a function definition that receives a value when the function is called.",
    levelRange: "7-8",
    detailedDescription: "Parameters are placeholders in function definitions that specify what arguments the function expects. When a function is called, arguments are passed and assigned to parameters. Parameters can have default values, making them optional. Functions can accept variable numbers of arguments using *args and **kwargs.",
    example: "def greet(name, greeting='Hello'):  # name and greeting are parameters\n    return f'{greeting}, {name}!'\n\nresult = greet('Alice')  # 'Alice' is the argument\nresult2 = greet('Bob', 'Hi')  # 'Bob' and 'Hi' are arguments"
  },
  {
    term: "Argument",
    definition: "A value passed to a function when it is called.",
    levelRange: "7-8",
    detailedDescription: "Arguments are the actual values passed to functions when they're called. They correspond to the function's parameters. Arguments can be positional (matched by position) or keyword (matched by name). Functions can accept variable numbers of arguments. Arguments are evaluated before being passed to the function.",
    example: "def add(a, b):  # a and b are parameters\n    return a + b\n\nresult = add(5, 3)  # 5 and 3 are arguments\nresult2 = add(a=5, b=3)  # Keyword arguments\nresult3 = add(b=3, a=5)  # Order doesn't matter with keywords"
  },
  {
    term: "Return Statement",
    definition: "A statement that exits a function and optionally returns a value.",
    levelRange: "7-8",
    detailedDescription: "The return statement exits a function immediately and can return a value to the caller. Functions without an explicit return statement return None. Return can return multiple values as a tuple. Once return executes, no further code in the function runs. Return is an expression, not a statement, so it can be used in expressions.",
    example: "def add(a, b):\n    return a + b  # Returns the sum\n\nresult = add(3, 5)  # result = 8\n\ndef get_name_and_age():\n    return 'Alice', 30  # Returns tuple\n\nname, age = get_name_and_age()  # Unpacking"
  },
  {
    term: "Default Parameter",
    definition: "A parameter with a default value that is used if no argument is provided.",
    levelRange: "7-8",
    detailedDescription: "Default parameters have values assigned in the function definition. If no argument is provided for a default parameter, the default value is used. Default parameters must come after non-default parameters. Default values are evaluated once when the function is defined, which can cause issues with mutable defaults (use None instead).",
    example: "def greet(name, greeting='Hello'):  # greeting has default 'Hello'\n    return f'{greeting}, {name}!'\n\nprint(greet('Alice'))        # 'Hello, Alice!'\nprint(greet('Bob', 'Hi'))    # 'Hi, Bob!'\n\n# Mutable default (problematic)\ndef add_item(item, items=[]):  # BAD!\n    items.append(item)\n    return items\n\n# Better approach\ndef add_item(item, items=None):\n    if items is None:\n        items = []\n    items.append(item)\n    return items"
  },
  {
    term: "Instance",
    definition: "An individual object created from a class.",
    levelRange: "7-8",
    detailedDescription: "An instance is a specific object created from a class blueprint. Each instance has its own set of attributes (instance variables) but shares the class's methods. Instances are created by calling the class like a function, which invokes __init__. Multiple instances of the same class are independent objects with separate state.",
    example: "class Person:\n    def __init__(self, name):\n        self.name = name\n\n# Creating instances\nperson1 = Person('Alice')  # person1 is an instance\nperson2 = Person('Bob')    # person2 is another instance\n\nprint(person1.name)  # 'Alice'\nprint(person2.name)  # 'Bob'"
  },
  {
    term: "Instance Variable",
    definition: "A variable that belongs to a specific instance of a class.",
    levelRange: "7-8",
    detailedDescription: "Instance variables (also called attributes) store data unique to each instance. They are created by assigning to self.attribute_name. Each instance has its own copy of instance variables. Instance variables can be accessed using dot notation (instance.attribute) or through self within methods.",
    example: "class Person:\n    def __init__(self, name, age):\n        self.name = name      # Instance variable\n        self.age = age        # Instance variable\n\nperson = Person('Alice', 30)\nprint(person.name)  # 'Alice' (accessing instance variable)\nprint(person.age)   # 30"
  },
  {
    term: "Class Variable",
    definition: "A variable shared by all instances of a class.",
    levelRange: "7-8",
    detailedDescription: "Class variables are defined at the class level (outside methods) and are shared by all instances. They are useful for storing data common to all instances. Class variables can be accessed through the class or any instance. Modifying a class variable through an instance creates an instance variable with the same name (shadowing).",
    example: "class Dog:\n    species = 'Canis familiaris'  # Class variable\n    \n    def __init__(self, name):\n        self.name = name  # Instance variable\n\ndog1 = Dog('Buddy')\ndog2 = Dog('Max')\n\nprint(dog1.species)  # 'Canis familiaris'\nprint(dog2.species)  # 'Canis familiaris'\nprint(Dog.species)   # 'Canis familiaris' (same for all)"
  },
  {
    term: "Self",
    definition: "A reference to the current instance, used to access instance attributes and methods.",
    levelRange: "7-8",
    detailedDescription: "Self is the conventional name for the first parameter of instance methods. It refers to the instance on which the method is called. Through self, methods can access and modify instance variables and call other methods. Self is automatically passed when calling methods on instances - you don't pass it explicitly.",
    example: "class Person:\n    def __init__(self, name):\n        self.name = name  # self refers to the instance\n    \n    def greet(self):\n        return f'Hello, I am {self.name}'  # Accessing via self\n\nperson = Person('Alice')\nperson.greet()  # self is automatically person"
  },
  {
    term: "Constructor",
    definition: "A special method __init__ that initializes a new instance of a class.",
    levelRange: "7-8",
    detailedDescription: "The constructor (__init__ method) is automatically called when a new instance is created. It's used to initialize instance variables and perform setup. __init__ doesn't create the object (that's done by __new__), but it's the primary place for initialization. It can accept parameters to customize the instance.",
    example: "class Person:\n    def __init__(self, name, age):  # Constructor\n        self.name = name\n        self.age = age\n        print(f'{name} created')\n\nperson = Person('Alice', 30)  # Constructor is called automatically\n# Output: 'Alice created'"
  },
  // Level 9-10 Additional Terms
  {
    term: "Inheritance",
    definition: "A mechanism where a child class inherits attributes and methods from a parent class.",
    levelRange: "9-10",
    detailedDescription: "Inheritance allows creating new classes based on existing ones. The child class (subclass) inherits all attributes and methods from the parent class (superclass) and can add new ones or override existing ones. Inheritance promotes code reuse and establishes an 'is-a' relationship. Python supports multiple inheritance.",
    example: "class Animal:\n    def __init__(self, name):\n        self.name = name\n    \n    def speak(self):\n        return 'Some sound'\n\nclass Dog(Animal):  # Dog inherits from Animal\n    def speak(self):  # Override parent method\n        return 'Woof!'\n\ndog = Dog('Buddy')\nprint(dog.name)    # Inherited attribute\nprint(dog.speak())  # Overridden method: 'Woof!'"
  },
  {
    term: "Polymorphism",
    definition: "The ability of different classes to respond to the same method call in different ways.",
    levelRange: "9-10",
    detailedDescription: "Polymorphism allows objects of different types to be treated uniformly through a common interface. In Python, polymorphism is achieved through duck typing - if an object has the required method, it can be used. This enables writing code that works with multiple types without explicit type checking.",
    example: "class Dog:\n    def speak(self):\n        return 'Woof!'\n\nclass Cat:\n    def speak(self):\n        return 'Meow!'\n\n# Polymorphic function\ndef make_sound(animal):\n    return animal.speak()  # Works with any object with speak()\n\ndog = Dog()\ncat = Cat()\nprint(make_sound(dog))  # 'Woof!'\nprint(make_sound(cat))  # 'Meow!'"
  },
  {
    term: "Encapsulation",
    definition: "The bundling of data and methods that operate on that data within a single unit.",
    levelRange: "9-10",
    detailedDescription: "Encapsulation is the principle of hiding internal implementation details and exposing only what's necessary. In Python, encapsulation is achieved through naming conventions: single underscore (_) for 'protected' and double underscore (__) for 'private' (name mangling). Python doesn't enforce strict encapsulation - it's a convention.",
    example: "class BankAccount:\n    def __init__(self, balance):\n        self.__balance = balance  # 'Private' attribute\n    \n    def deposit(self, amount):\n        self.__balance += amount  # Controlled access\n    \n    def get_balance(self):\n        return self.__balance  # Public interface\n\naccount = BankAccount(100)\n# account.__balance  # Error: name mangling\nprint(account.get_balance())  # 100"
  },
  {
    term: "Super",
    definition: "A built-in function that returns a proxy object to access parent class methods.",
    levelRange: "9-10",
    detailedDescription: "Super() provides a way to call methods from parent classes. It's commonly used in __init__ to ensure parent initialization. Super() follows the method resolution order (MRO) to find the correct parent method. It's essential in multiple inheritance scenarios to call the right parent method.",
    example: "class Animal:\n    def __init__(self, name):\n        self.name = name\n    \n    def speak(self):\n        return 'Some sound'\n\nclass Dog(Animal):\n    def __init__(self, name, breed):\n        super().__init__(name)  # Call parent __init__\n        self.breed = breed\n    \n    def speak(self):\n        return super().speak() + ' Woof!'  # Extend parent method\n\ndog = Dog('Buddy', 'Labrador')\nprint(dog.name)  # 'Buddy' (from parent)\nprint(dog.speak())  # 'Some sound Woof!'"
  },
  {
    term: "Method Overriding",
    definition: "Defining a method in a child class that replaces a method from the parent class.",
    levelRange: "9-10",
    detailedDescription: "Method overriding occurs when a child class defines a method with the same name as a parent class method. The child's method takes precedence when called on child instances. Overriding allows customizing behavior while maintaining the same interface. The parent method can still be accessed using super().",
    example: "class Shape:\n    def area(self):\n        return 0\n\nclass Rectangle(Shape):\n    def __init__(self, width, height):\n        self.width = width\n        self.height = height\n    \n    def area(self):  # Override parent method\n        return self.width * self.height\n\nrect = Rectangle(5, 3)\nprint(rect.area())  # 15 (uses overridden method)"
  },
  {
    term: "Abstract Method",
    definition: "A method declared in a base class that must be implemented by subclasses.",
    levelRange: "9-10",
    detailedDescription: "Abstract methods define an interface that subclasses must implement. In Python, abstract methods are created using the abc (Abstract Base Class) module. Classes with abstract methods cannot be instantiated directly. Abstract methods ensure that subclasses provide required functionality, enforcing a contract.",
    example: "from abc import ABC, abstractmethod\n\nclass Shape(ABC):  # Abstract base class\n    @abstractmethod\n    def area(self):  # Must be implemented by subclasses\n        pass\n\nclass Rectangle(Shape):\n    def __init__(self, width, height):\n        self.width = width\n        self.height = height\n    \n    def area(self):  # Required implementation\n        return self.width * self.height\n\n# shape = Shape()  # Error: cannot instantiate abstract class\nrect = Rectangle(5, 3)  # OK"
  },
  {
    term: "Design Pattern",
    definition: "A reusable solution to a commonly occurring problem in software design.",
    levelRange: "9-10",
    detailedDescription: "Design patterns are proven solutions to common programming problems. They provide templates for structuring code to achieve flexibility, maintainability, and reusability. Common patterns include Singleton, Factory, Observer, Strategy, and Decorator. Patterns are language-agnostic concepts that can be implemented in Python.",
    example: "# Singleton Pattern\nclass Singleton:\n    _instance = None\n    \n    def __new__(cls):\n        if cls._instance is None:\n            cls._instance = super().__new__(cls)\n        return cls._instance\n\n# Factory Pattern\nclass AnimalFactory:\n    @staticmethod\n    def create_animal(animal_type):\n        if animal_type == 'dog':\n            return Dog()\n        elif animal_type == 'cat':\n            return Cat()\n        return None"
  },
  {
    term: "Exception Handling",
    definition: "A mechanism to handle errors and exceptional conditions using try/except blocks.",
    levelRange: "9-10",
    detailedDescription: "Exception handling allows programs to gracefully handle errors without crashing. The try block contains code that might raise exceptions. The except block catches and handles specific exceptions. Optional else runs if no exception occurs, and finally always executes. Proper exception handling improves program robustness.",
    example: "try:\n    result = 10 / 0  # Raises ZeroDivisionError\nexcept ZeroDivisionError:\n    print('Cannot divide by zero')\nexcept Exception as e:\n    print(f'An error occurred: {e}')\nelse:\n    print('No errors occurred')\nfinally:\n    print('This always executes')"
  },
  {
    term: "Context Manager",
    definition: "An object that manages resources using the 'with' statement.",
    levelRange: "9-10",
    detailedDescription: "Context managers ensure proper resource management (like file closing) using the 'with' statement. They implement __enter__ and __exit__ methods. Context managers automatically handle setup and cleanup, even if exceptions occur. The 'with' statement is preferred over manual resource management.",
    example: "# Built-in file context manager\nwith open('file.txt', 'r') as f:\n    content = f.read()\n# File is automatically closed here\n\n# Custom context manager\nclass Timer:\n    def __enter__(self):\n        self.start = time.time()\n        return self\n    \n    def __exit__(self, *args):\n        print(f'Elapsed: {time.time() - self.start}')\n\nwith Timer():\n    # Do something\n    pass"
  }
];