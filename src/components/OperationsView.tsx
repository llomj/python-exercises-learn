import React, { useState, useEffect } from 'react';

interface OperationItem {
  title: string;
  category: string;
  definition: string;
  examples: string[];
}

const OPERATIONS_DATA: OperationItem[] = [
  // Arithmetic Operations
  {
    title: "Arithmetic Operations",
    category: "Operations",
    definition: "Basic mathematical operations for performing calculations with numbers.",
    examples: [
      "+ Addition: 5 + 3 = 8",
      "- Subtraction: 10 - 4 = 6",
      "* Multiplication: 3 * 4 = 12",
      "/ Division: 15 / 3 = 5.0 (always returns float)",
      "// Floor Division: 15 // 4 = 3 (rounds down)",
      "% Modulo: 15 % 4 = 3 (remainder)",
      "** Exponentiation: 2 ** 3 = 8"
    ]
  },
  {
    title: "Order of Operations",
    category: "Operations",
    definition: "Python follows PEMDAS: Parentheses, Exponents, Multiplication/Division (left to right), Addition/Subtraction (left to right).",
    examples: [
      "2 + 3 * 4 = 14 (multiplication before addition)",
      "(2 + 3) * 4 = 20 (parentheses first)",
      "10 - 3 + 2 = 9 (left to right)",
      "2 ** 3 * 2 = 16 (exponents before multiplication)"
    ]
  },
  {
    title: "Integer vs Float Results",
    category: "Operations",
    definition: "Division (/) always returns a float, even when dividing integers. Floor division (//) returns an integer when both operands are integers.",
    examples: [
      "10 / 2 = 5.0 (float result)",
      "10 // 2 = 5 (integer result)",
      "10 / 3 = 3.333... (float)",
      "10 // 3 = 3 (integer, rounded down)",
      "10.0 // 3 = 3.0 (float result)"
    ]
  },
  {
    title: "Assignment Operators",
    category: "Operations",
    definition: "Operators that combine assignment with arithmetic operations.",
    examples: [
      "= Basic assignment: x = 5",
      "+= Add and assign: x += 3 (same as x = x + 3)",
      "-= Subtract and assign: x -= 2 (same as x = x - 2)",
      "*= Multiply and assign: x *= 4 (same as x = x * 4)",
      "/= Divide and assign: x /= 2 (same as x = x / 2)",
      "//= Floor divide and assign: x //= 3",
      "%= Modulo and assign: x %= 5",
      "**= Exponentiate and assign: x **= 2"
    ]
  },
  {
    title: "Chained Assignment",
    category: "Operations",
    definition: "Assigning the same value to multiple variables in one statement.",
    examples: [
      "x = y = z = 10  # All variables equal 10",
      "a = b = c = []  # All reference the same list object"
    ]
  },
  {
    title: "Comparison Operators",
    category: "Operations",
    definition: "Operators that compare values and return boolean results.",
    examples: [
      "== Equal to: 5 == 5 → True",
      "!= Not equal: 5 != 3 → True",
      "< Less than: 3 < 5 → True",
      "> Greater than: 5 > 3 → True",
      "<= Less than or equal: 5 <= 5 → True",
      ">= Greater than or equal: 5 >= 3 → True",
      "Chained: 1 < 5 < 10 → True"
    ]
  },
  {
    title: "Logical Operators",
    category: "Operations",
    definition: "Operators that combine boolean expressions using AND, OR, and NOT logic.",
    examples: [
      "and: Returns True if both conditions are True",
      "  (5 > 3) and (10 < 20) → True",
      "or: Returns True if at least one condition is True",
      "  (5 > 10) or (10 < 20) → True",
      "not: Reverses the boolean value",
      "  not (5 > 10) → True",
      "Short-circuit: 'and' and 'or' stop evaluating once result is determined"
    ]
  },
  {
    title: "Identity vs Equality",
    category: "Operations",
    definition: "is checks if two variables reference the same object, == checks if values are equal.",
    examples: [
      "x = [1, 2, 3]",
      "y = [1, 2, 3]",
      "x == y → True (values are equal)",
      "x is y → False (different objects)",
      "z = x",
      "x is z → True (same object)"
    ]
  },
  {
    title: "Membership Operations",
    category: "Operations",
    definition: "Operators that check if an item exists in a sequence or collection.",
    examples: [
      "in: Returns True if item found",
      "  'a' in 'apple' → True",
      "  3 in [1, 2, 3] → True",
      "  'key' in {'key': 'value'} → True",
      "not in: Returns True if item not found",
      "  10 not in [1, 2, 3] → True"
    ]
  },
  {
    title: "Type Operations",
    category: "Operations",
    definition: "Functions and operators for checking and converting data types.",
    examples: [
      "type(): Returns the type of an object",
      "  type(5) → <class 'int'>",
      "isinstance(): Checks if object is instance of type(s)",
      "  isinstance(5, int) → True",
      "  isinstance(5, (int, float)) → True",
      "Dynamic typing: Variables can change types",
      "  x = 5  # x is int",
      "  x = 'hello'  # x is now str"
    ]
  },
  {
    title: "Bitwise Operators",
    category: "Operations",
    definition: "Operators that perform operations on binary representations of integers.",
    examples: [
      "& AND: 5 & 3 = 1 (binary: 101 & 011 = 001)",
      "| OR: 5 | 3 = 7 (binary: 101 | 011 = 111)",
      "^ XOR: 5 ^ 3 = 6 (binary: 101 ^ 011 = 110)",
      "~ NOT: ~5 = -6 (inverts all bits)",
      "<< Left shift: 5 << 1 = 10 (multiply by 2)",
      ">> Right shift: 5 >> 1 = 2 (divide by 2, floor)"
    ]
  }
];

const MATH_CONCEPTS_DATA: OperationItem[] = [
  {
    title: "Basic Integers and Counting",
    category: "Math Concepts",
    definition: "Integers are whole numbers without decimal points. Python supports arbitrarily large integers.",
    examples: [
      "Positive: 1, 2, 3, 100, 1000",
      "Negative: -1, -5, -100",
      "Zero: 0 (special behavior in many operations)",
      "Large: 999999999999999999 (no overflow)"
    ]
  },
  {
    title: "Positive and Negative Integers",
    category: "Math Concepts",
    definition: "Integers can be positive, negative, or zero. Operations with negative numbers follow standard mathematical rules.",
    examples: [
      "Addition: 5 + (-3) = 2",
      "Subtraction: 5 - (-3) = 8",
      "Multiplication: 5 * (-3) = -15",
      "Division: -10 / 2 = -5.0",
      "Absolute value: abs(-5) = 5"
    ]
  },
  {
    title: "Zero and its Special Behavior",
    category: "Math Concepts",
    definition: "Zero has unique properties in mathematical operations that affect Python behavior.",
    examples: [
      "Division by zero: 10 / 0 → ZeroDivisionError",
      "Zero multiplication: 5 * 0 = 0",
      "Zero addition: 5 + 0 = 5",
      "Boolean: bool(0) = False (zero is falsy)",
      "Power: 5 ** 0 = 1 (any number to power of 0 is 1)"
    ]
  },
  {
    title: "Incrementing and Decrementing Values",
    category: "Math Concepts",
    definition: "Common patterns for increasing or decreasing numeric values in loops and conditions.",
    examples: [
      "Increment: x += 1 or x = x + 1",
      "Decrement: x -= 1 or x = x - 1",
      "In loop: for i in range(10): (i increments automatically)",
      "While loop: while x < 10: x += 1",
      "Step increment: x += 2 (increase by 2)"
    ]
  },
  {
    title: "Using Integers in Loops and Conditions",
    category: "Math Concepts",
    definition: "Integers are commonly used to control loop iterations and as conditions in control flow.",
    examples: [
      "Range: for i in range(5): (0, 1, 2, 3, 4)",
      "Countdown: for i in range(10, 0, -1):",
      "Condition: if count > 0:",
      "Counter: count = 0; count += 1",
      "Index: items[i] (using integer as index)"
    ]
  },
  {
    title: "Prime Numbers",
    category: "Math Concepts",
    definition: "A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.",
    examples: [
      "Primes: 2, 3, 5, 7, 11, 13, 17, 19",
      "Composite: 4, 6, 8, 9, 10 (have divisors other than 1 and itself)",
      "Checking: n % i != 0 for all i in range(2, n)",
      "1 is neither prime nor composite"
    ]
  },
  {
    title: "Checking if a Number is Prime",
    category: "Math Concepts",
    definition: "Algorithm to determine if a number is prime by testing divisibility.",
    examples: [
      "Basic: Check divisibility from 2 to n-1",
      "Optimized: Check only up to √n",
      "def is_prime(n):",
      "    if n < 2: return False",
      "    for i in range(2, int(n**0.5) + 1):",
      "        if n % i == 0: return False",
      "    return True"
    ]
  },
  {
    title: "Generating Prime Sequences",
    category: "Math Concepts",
    definition: "Methods for creating lists or generators of prime numbers.",
    examples: [
      "Sieve of Eratosthenes: Efficient algorithm",
      "Generator: yield primes one at a time",
      "List comprehension with prime check",
      "Range-based: for n in range(2, 100) if is_prime(n)"
    ]
  },
  {
    title: "Factors and Multiples",
    category: "Math Concepts",
    definition: "Factors are numbers that divide evenly into another number. Multiples are products of a number.",
    examples: [
      "Factors of 12: [1, 2, 3, 4, 6, 12]",
      "Finding factors: [i for i in range(1, n+1) if n % i == 0]",
      "Multiples of 3: 3, 6, 9, 12, 15...",
      "Common multiples: Numbers divisible by multiple values"
    ]
  },
  {
    title: "Greatest Common Divisor (GCD)",
    category: "Math Concepts",
    definition: "The largest number that divides evenly into two or more integers.",
    examples: [
      "GCD of 12 and 18: 6",
      "Using math.gcd(): import math; math.gcd(12, 18) = 6",
      "Euclidean algorithm for manual calculation",
      "Useful for simplifying fractions"
    ]
  },
  {
    title: "Least Common Multiple (LCM)",
    category: "Math Concepts",
    definition: "The smallest number that is a multiple of two or more integers.",
    examples: [
      "LCM of 4 and 6: 12",
      "Using math.lcm(): import math; math.lcm(4, 6) = 12",
      "Formula: LCM(a, b) = (a * b) / GCD(a, b)",
      "Useful for finding common denominators"
    ]
  },
  {
    title: "Fractions and Rational Numbers",
    category: "Math Concepts",
    definition: "Numbers expressed as a ratio of two integers (numerator/denominator).",
    examples: [
      "Proper fraction: numerator < denominator (1/2)",
      "Improper fraction: numerator >= denominator (5/3)",
      "Simplifying: 4/8 = 1/2 (divide by GCD)",
      "Python: from fractions import Fraction",
      "Fraction(1, 2) + Fraction(1, 3) = Fraction(5, 6)"
    ]
  },
  {
    title: "Floating-Point Numbers and Precision",
    category: "Math Concepts",
    definition: "Floats represent real numbers but have limited precision due to binary representation.",
    examples: [
      "Storage: IEEE 754 double-precision format",
      "Precision errors: 0.1 + 0.2 != 0.3",
      "Comparing: Use abs(a - b) < 0.0001 instead of a == b",
      "Formatting: f'{value:.2f}' for 2 decimal places",
      "Decimal module: from decimal import Decimal for exact arithmetic"
    ]
  },
  {
    title: "Powers, Roots, and Exponents",
    category: "Math Concepts",
    definition: "Operations involving raising numbers to powers or finding roots.",
    examples: [
      "Square: 5 ** 2 = 25 (5 squared)",
      "Cube: 3 ** 3 = 27 (3 cubed)",
      "Square root: 25 ** 0.5 = 5.0 or math.sqrt(25) = 5.0",
      "Nth root: 8 ** (1/3) = 2.0 (cube root)",
      "Exponent: 2 ** 10 = 1024"
    ]
  },
  {
    title: "Modular Arithmetic",
    category: "Math Concepts",
    definition: "Arithmetic system where numbers wrap around after reaching a certain value (the modulus).",
    examples: [
      "Clock arithmetic: 13 % 12 = 1 (1 PM)",
      "Even/odd: n % 2 == 0 (even), n % 2 == 1 (odd)",
      "Divisibility: n % 3 == 0 (divisible by 3)",
      "Wrapping: (x + 1) % 10 (cycles 0-9)",
      "Circular indexing: items[index % len(items)]"
    ]
  },
  {
    title: "Sequences and Series",
    category: "Math Concepts",
    definition: "Ordered lists of numbers following a pattern or rule.",
    examples: [
      "Arithmetic: 2, 5, 8, 11... (add 3 each time)",
      "  a_n = first + (n-1) * difference",
      "Geometric: 2, 6, 18, 54... (multiply by 3)",
      "  a_n = first * (ratio ** (n-1))",
      "Fibonacci: 0, 1, 1, 2, 3, 5, 8...",
      "  fib(n) = fib(n-1) + fib(n-2)"
    ]
  },
  {
    title: "Ratios and Proportions",
    category: "Math Concepts",
    definition: "Comparing quantities and scaling values proportionally.",
    examples: [
      "Ratio: 3:5 (3 to 5)",
      "Scaling: value * scale_factor",
      "Normalization: (x - min) / (max - min) (0 to 1 range)",
      "Percentage: (part / total) * 100",
      "Proportion: a/b = c/d"
    ]
  },
  {
    title: "Random Numbers and Probability",
    category: "Math Concepts",
    definition: "Generating unpredictable numbers and modeling chance events.",
    examples: [
      "Random integer: import random; random.randint(1, 10)",
      "Random float: random.random() (0.0 to 1.0)",
      "Choice: random.choice([1, 2, 3, 4, 5])",
      "Shuffle: random.shuffle(my_list)",
      "Seed: random.seed(42) for reproducibility"
    ]
  },
  {
    title: "Basic Statistics",
    category: "Math Concepts",
    definition: "Statistical measures for analyzing numeric data collections.",
    examples: [
      "Mean: sum(numbers) / len(numbers) or statistics.mean()",
      "Median: statistics.median([1, 3, 5, 7, 9]) = 5",
      "Mode: statistics.mode([1, 2, 2, 3]) = 2",
      "Range: max(numbers) - min(numbers)",
      "Variance: statistics.variance(numbers)"
    ]
  },
  {
    title: "Coordinate Systems and Geometry",
    category: "Math Concepts",
    definition: "Representing positions and distances in 2D or 3D space.",
    examples: [
      "Cartesian: (x, y) coordinates",
      "Distance: math.sqrt((x2-x1)**2 + (y2-y1)**2)",
      "Polar coordinates: (r, θ) - radius and angle",
      "Basic shapes: circles, rectangles, triangles",
      "Transformations: translation, rotation, scaling"
    ]
  },
  {
    title: "Mathematical Constraints and Bounds",
    category: "Math Concepts",
    definition: "Limiting values to valid ranges and validating inputs.",
    examples: [
      "Minimum: min(a, b, c)",
      "Maximum: max(a, b, c)",
      "Clamping: max(min_val, min(value, max_val))",
      "Validation: if 0 <= value <= 100:",
      "Bounds checking: if index >= 0 and index < len(list):"
    ]
  }
];

interface OperationsViewProps {
  onBack: () => void;
}

export const OperationsView: React.FC<OperationsViewProps> = ({ onBack }) => {
  const [search, setSearch] = useState('');
  const [selectedItem, setSelectedItem] = useState<OperationItem | null>(null);
  const [activeTab, setActiveTab] = useState<'operations' | 'math'>('operations');

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedItem]);

  const currentData = activeTab === 'operations' ? OPERATIONS_DATA : MATH_CONCEPTS_DATA;
  
  const filteredData = currentData.filter(item => 
    item.title.toLowerCase().includes(search.toLowerCase()) ||
    item.definition.toLowerCase().includes(search.toLowerCase()) ||
    item.examples.some(ex => ex.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="relative min-h-[600px] animate-in slide-in-from-left duration-500 pb-12">
      {/* Detail Overlay */}
      {selectedItem && (
        <div className="fixed inset-0 z-[100] overflow-y-auto overscroll-contain flex justify-center items-start sm:items-center p-4">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-slate-950/85 backdrop-blur-md transition-opacity" 
            onClick={() => setSelectedItem(null)}
          ></div>
          
          {/* Content Box */}
          <div className="glass w-full max-w-2xl my-4 sm:my-8 rounded-3xl p-6 sm:p-10 shadow-2xl relative z-10 border-indigo-500/30 animate-in fade-in zoom-in duration-300">
            <button 
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 flex items-center justify-center rounded-xl bg-slate-800 text-slate-400 hover:text-white transition-colors border border-white/10"
            >
              <i className="fas fa-times"></i>
            </button>

            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-3 pt-2">
                <span className="inline-block text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em] px-3 py-1 bg-indigo-500/10 rounded-full border border-indigo-500/20">
                  {selectedItem.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white">{selectedItem.title}</h3>
              </div>

              <div className="space-y-4">
                <h4 className="text-[11px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
                  <i className="fas fa-book-open text-indigo-400"></i> Definition
                </h4>
                <div className="text-slate-300 leading-relaxed font-medium text-sm sm:text-base">
                  {selectedItem.definition}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-[11px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
                  <i className="fas fa-code text-indigo-400"></i> Examples
                </h4>
                <div className="bg-slate-900 rounded-2xl p-4 sm:p-6 border border-white/5 shadow-inner max-h-[400px] overflow-y-auto">
                  <div className="space-y-2">
                    {selectedItem.examples.map((example, idx) => (
                      <div key={idx} className="text-xs sm:text-sm text-indigo-300 leading-relaxed font-mono whitespace-pre-wrap break-words">
                        {example}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 pb-2">
                <button 
                  onClick={() => setSelectedItem(null)}
                  className="w-full py-4 bg-indigo-500 hover:bg-indigo-600 text-white rounded-2xl font-black transition-all shadow-xl shadow-indigo-500/20 active:scale-95"
                >
                  GOT IT
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-black text-white flex items-center gap-3">
          <i className="fas fa-calculator text-indigo-400"></i> OPERATIONS & MATH
        </h2>
        <button 
          onClick={onBack}
          className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-xl text-sm font-bold transition-colors"
        >
          BACK
        </button>
      </div>

      {/* Tab Selector */}
      <div className="flex gap-2 mb-6 bg-white/5 p-1 rounded-2xl border border-white/10">
        <button
          onClick={() => {
            setActiveTab('operations');
            setSearch('');
            setSelectedItem(null);
          }}
          className={`flex-1 py-3 px-4 rounded-xl font-bold text-sm transition-all ${
            activeTab === 'operations'
              ? 'bg-indigo-500 text-white shadow-lg'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <i className="fas fa-code mr-2"></i> Operations
        </button>
        <button
          onClick={() => {
            setActiveTab('math');
            setSearch('');
            setSelectedItem(null);
          }}
          className={`flex-1 py-3 px-4 rounded-xl font-bold text-sm transition-all ${
            activeTab === 'math'
              ? 'bg-indigo-500 text-white shadow-lg'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <i className="fas fa-calculator mr-2"></i> Math Concepts
        </button>
      </div>

      <div className="relative mb-8">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500">
          <i className="fas fa-search"></i>
        </div>
        <input 
          type="text"
          placeholder={`Search ${activeTab === 'operations' ? 'operations' : 'math concepts'}...`}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-12 pr-4 py-4 bg-slate-900 border border-white/5 rounded-2xl text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/50 transition-colors"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredData.map((item, idx) => (
          <div 
            key={idx}
            onClick={() => setSelectedItem(item)}
            className="glass p-5 rounded-2xl space-y-2 hover:border-indigo-500/40 hover:bg-slate-800/80 transition-all cursor-pointer group active:scale-[0.98]"
          >
            <div className="flex justify-between items-start">
              <h4 className="font-bold text-slate-100 group-hover:text-white transition-colors">{item.title}</h4>
              <i className="fas fa-chevron-right text-[10px] text-slate-600 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all"></i>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed line-clamp-2">{item.definition}</p>
            <span className="inline-block text-[8px] font-black text-indigo-500 uppercase px-2 py-0.5 bg-indigo-500/10 rounded">
              {item.category}
            </span>
          </div>
        ))}
        {filteredData.length === 0 && (
          <div className="col-span-full py-12 text-center text-slate-500">
            <i className="fas fa-search-minus text-4xl mb-4 block opacity-20"></i>
            No items found matching "{search}"
          </div>
        )}
      </div>
    </div>
  );
};