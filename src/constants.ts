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
  }
];