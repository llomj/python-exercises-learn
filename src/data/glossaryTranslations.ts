import { GlossaryItem } from '../constants';

// French translations for glossary entries
// Note: Python code examples remain the same in all languages
export const GLOSSARY_FR: GlossaryItem[] = [
  {
    term: "Variable",
    definition: "Une référence nommée à un objet en mémoire qui peut stocker différentes valeurs.",
    levelRange: "1-2",
    detailedDescription: "Les variables en Python sont dynamiques, ce qui signifie qu'elles peuvent référencer des objets de tout type et peuvent être réassignées à différents types. Contrairement aux langages statiquement typés, les variables Python n'ont pas de types fixes - le type est déterminé par l'objet qu'elles référencent. Les noms de variables doivent suivre des règles spécifiques : ils peuvent contenir des lettres, des chiffres et des underscores, mais ne peuvent pas commencer par un chiffre. Ils sont sensibles à la casse.",
    example: "score = 42\nname = 'Alice'\nactive = True"
  },
  {
    term: "Chaîne de caractères",
    definition: "Une séquence immuable de caractères représentant des données texte.",
    levelRange: "1-2",
    detailedDescription: "Les chaînes de caractères en Python sont des objets immuables qui représentent du texte. Elles peuvent être créées avec des guillemets simples, doubles ou triples pour les chaînes multi-lignes. Python fournit de nombreuses méthodes de chaîne pour la manipulation, incluant le découpage, la concaténation et le formatage. Les chaînes sont des séquences, donc elles supportent l'indexation et l'itération.",
    example: "message = 'Hello World'\nlong_text = '''This is a\nmulti-line string'''\nfirst_char = message[0]  # 'H'"
  },
  {
    term: "Entier",
    definition: "Nombres entiers sans décimales, avec une précision illimitée.",
    levelRange: "1-2",
    detailedDescription: "Les entiers Python ont une précision arbitraire, ce qui signifie qu'ils peuvent être arbitrairement grands sans problèmes de débordement qui surviennent avec les types entiers à largeur fixe dans d'autres langages. Cela rend Python adapté aux calculs mathématiques impliquant de très grands nombres. Les littéraux entiers peuvent inclure des underscores pour la lisibilité.",
    example: "small = 42\nlarge = 1_000_000_000_000\nnegative = -17"
  },
  {
    term: "Nombre à virgule flottante",
    definition: "Nombres décimaux représentés en format binaire à virgule flottante.",
    levelRange: "1-2",
    detailedDescription: "Les objets float représentent des nombres réels avec précision décimale. Ils sont implémentés en utilisant le format binaire à double précision IEEE 754, ce qui peut conduire à de petites erreurs de précision dans certains calculs. Pour les applications financières ou autres nécessitant une arithmétique décimale exacte, le module decimal doit être utilisé à la place.",
    example: "pi = 3.14159\nnegative = -2.5\nscientific = 1.23e-4"
  },
  {
    term: "Booléen",
    definition: "Un type de données binaire représentant les valeurs True ou False.",
    levelRange: "1-2",
    detailedDescription: "Les valeurs booléennes sont utilisées pour les opérations logiques et les instructions conditionnelles. En Python, chaque objet a une valeur booléenne inhérente (truthiness), où la plupart des objets sont considérés comme True sauf des valeurs falsy spécifiques comme 0, les chaînes vides, les listes vides, None et False lui-même. Les opérations booléennes suivent les règles logiques standard.",
    example: "is_active = True\nhas_permission = False\nresult = (5 > 3) and (10 < 20)  # True"
  },
  {
    term: "Instruction If",
    definition: "Une instruction conditionnelle qui exécute du code uniquement lorsqu'une condition est True.",
    levelRange: "3-4",
    detailedDescription: "L'instruction if est la construction conditionnelle principale de Python. Elle évalue une expression booléenne et exécute le bloc indenté uniquement si la condition est True. Python utilise l'indentation (pas d'accolades) pour définir les blocs de code. L'instruction if peut être suivie de clauses elif (sinon-si) et else optionnelles pour gérer plusieurs conditions.",
    example: "age = 18\nif age >= 18:\n    print('Adult')\nelif age >= 13:\n    print('Teen')\nelse:\n    print('Child')"
  },
  {
    term: "Opérateur de comparaison",
    definition: "Opérateurs qui comparent deux valeurs et retournent un résultat booléen.",
    levelRange: "3-4",
    detailedDescription: "Les opérateurs de comparaison évaluent les relations entre valeurs et retournent True ou False. Python supporte : == (égal), != (non égal), < (inférieur à), > (supérieur à), <= (inférieur ou égal), >= (supérieur ou égal), is (identité), in (appartenance). Ces opérateurs sont fondamentaux pour la logique conditionnelle et le flux de contrôle.",
    example: "x = 10\ny = 5\nprint(x > y)   # True\nprint(x == y)  # False\nprint(x != y)  # True\nprint(5 in [1, 2, 3, 4, 5])  # True"
  },
  {
    term: "Opérateur logique",
    definition: "Opérateurs qui combinent des expressions booléennes : and, or, not.",
    levelRange: "3-4",
    detailedDescription: "Les opérateurs logiques combinent des valeurs ou expressions booléennes. 'and' retourne True uniquement si les deux opérandes sont True. 'or' retourne True si au moins un opérande est True. 'not' inverse la valeur booléenne. Python utilise l'évaluation court-circuit : 'and' s'arrête au premier False, 'or' s'arrête au premier True, ce qui peut améliorer les performances.",
    example: "x = 10\ny = 5\nresult1 = (x > 5) and (y < 10)  # True\nresult2 = (x < 5) or (y > 10)   # False\nresult3 = not (x > 5)            # False"
  },
  {
    term: "Boucle For",
    definition: "Une boucle qui itère sur une séquence (liste, chaîne, range, etc.).",
    levelRange: "3-4",
    detailedDescription: "La boucle for itère sur les éléments d'une séquence ou d'un autre objet itérable. Elle gère automatiquement l'itération, éliminant le besoin de gestion manuelle d'index. La variable de boucle prend chaque valeur de la séquence à tour de rôle. Les boucles for sont préférées lorsque vous savez combien d'itérations vous avez besoin ou lors de l'itération sur une collection.",
    example: "fruits = ['apple', 'banana', 'cherry']\nfor fruit in fruits:\n    print(fruit)\n\n# With range\nfor i in range(5):\n    print(i)  # 0, 1, 2, 3, 4"
  },
  {
    term: "Boucle While",
    definition: "Une boucle qui continue à s'exécuter tant qu'une condition reste True.",
    levelRange: "3-4",
    detailedDescription: "La boucle while exécute de manière répétée un bloc de code tant que la condition évalue à True. Contrairement aux boucles for, les boucles while sont utilisées lorsque le nombre d'itérations est inconnu à l'avance. Il faut faire attention à s'assurer que la condition devient éventuellement False, sinon une boucle infinie se produit. La variable de boucle doit être modifiée dans le corps de la boucle.",
    example: "count = 0\nwhile count < 5:\n    print(count)\n    count += 1  # Important: modifier la condition\n\n# Boucle infinie (à éviter!)\n# while True:\n#     print('Forever')"
  },
  {
    term: "Range",
    definition: "Une fonction intégrée qui génère une séquence de nombres.",
    levelRange: "3-4",
    detailedDescription: "La fonction range() génère une séquence immuable de nombres, couramment utilisée dans les boucles for. Elle peut prendre un argument (stop), deux arguments (start, stop), ou trois arguments (start, stop, step). La valeur stop est exclusive. Range est efficace en mémoire car il génère les nombres à la demande plutôt que de tous les stocker en mémoire.",
    example: "range(5)           # 0, 1, 2, 3, 4\nrange(2, 6)        # 2, 3, 4, 5\nrange(0, 10, 2)    # 0, 2, 4, 6, 8\nrange(10, 0, -1)   # 10, 9, 8, 7, 6, 5, 4, 3, 2, 1"
  },
  {
    term: "Instruction Break",
    definition: "Une instruction qui sort immédiatement de la boucle actuelle.",
    levelRange: "3-4",
    detailedDescription: "L'instruction break termine la boucle englobante la plus proche (for ou while) et continue l'exécution après la boucle. Elle est couramment utilisée pour sortir d'une boucle tôt lorsqu'une condition est remplie, comme trouver une valeur cible ou rencontrer une condition d'erreur. Break ne sort que d'un niveau d'imbrication.",
    example: "for i in range(10):\n    if i == 5:\n        break  # Sortir de la boucle quand i est 5\n    print(i)  # Affiche 0, 1, 2, 3, 4"
  },
  {
    term: "Instruction Continue",
    definition: "Une instruction qui ignore le reste de l'itération de boucle actuelle.",
    levelRange: "3-4",
    detailedDescription: "L'instruction continue ignore le code restant dans l'itération de boucle actuelle et passe à l'itération suivante. Contrairement à break, continue ne sort pas de la boucle entièrement - elle passe juste au cycle suivant. C'est utile pour ignorer certaines valeurs ou conditions tout en continuant à traiter les autres.",
    example: "for i in range(10):\n    if i % 2 == 0:  # Ignorer les nombres pairs\n        continue\n    print(i)  # Affiche uniquement les nombres impairs: 1, 3, 5, 7, 9"
  },
  {
    term: "Fonction",
    definition: "Un bloc de code réutilisable qui effectue une tâche spécifique.",
    levelRange: "5-6",
    detailedDescription: "Les fonctions sont des objets de première classe en Python qui encapsulent du code pour la réutilisation. Elles peuvent accepter des paramètres et retourner des valeurs. Les fonctions Python supportent les paramètres par défaut, les listes d'arguments de longueur variable (*args, **kwargs), et peuvent être passées comme arguments à d'autres fonctions. Les fonctions peuvent être définies avec ou sans instructions return explicites.",
    example: "def greet(name, greeting='Hello'):\n    return f'{greeting}, {name}!'\n\nresult = greet('Alice')  # 'Hello, Alice!'\nresult2 = greet('Bob', 'Hi')  # 'Hi, Bob!'"
  },
  {
    term: "Liste",
    definition: "Une séquence mutable et ordonnée d'objets qui peut contenir des types mixtes.",
    levelRange: "5-6",
    detailedDescription: "Les listes sont le type de séquence mutable principal de Python. Elles peuvent croître et décroître dynamiquement, et peuvent contenir des objets de différents types. Les listes supportent des opérations puissantes comme le découpage, la concaténation et les compréhensions de liste. Elles sont implémentées comme des tableaux dynamiques, fournissant un accès aléatoire efficace mais potentiellement des insertions/suppressions coûteuses au milieu.",
    example: "numbers = [1, 2, 3, 4, 5]\nfruits = ['apple', 'banana', 'cherry']\nmixed = [42, 'hello', True, [1, 2]]\n\n# Compréhension de liste\nsquares = [x**2 for x in numbers]"
  },
  {
    term: "Dictionnaire",
    definition: "Un mapping mutable de clés hashables vers des valeurs arbitraires.",
    levelRange: "5-6",
    detailedDescription: "Les dictionnaires fournissent des recherches rapides utilisant des clés plutôt qu'un indexage positionnel. Les clés doivent être des objets hashables (immuables), tandis que les valeurs peuvent être de tout type. Les dictionnaires maintiennent l'ordre d'insertion à partir de Python 3.7. Ils sont implémentés en utilisant des tables de hachage, fournissant un temps de recherche moyen O(1). Les compréhensions de dictionnaire permettent de créer des dictionnaires à partir d'itérables.",
    example: "person = {'name': 'Alice', 'age': 30, 'city': 'New York'}\n\n# Accéder aux valeurs\nname = person['name']\n\n# Compréhension de dictionnaire\nsquares = {x: x**2 for x in range(5)}  # {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}"
  },
  {
    term: "Classe",
    definition: "Un modèle pour créer des objets avec un comportement et un état partagés.",
    levelRange: "7-8",
    detailedDescription: "Les classes définissent la structure et le comportement des objets. Elles contiennent des attributs (données) et des méthodes (fonctions). La méthode __init__ initialise les nouvelles instances. Les classes supportent l'héritage, permettant aux classes enfant d'étendre ou de modifier le comportement de la classe parent. Python utilise un ordre de résolution de méthode (MRO) pour déterminer quelle méthode appeler dans les scénarios d'héritage multiple.",
    example: "class Person:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n    \n    def greet(self):\n        return f'Hello, I am {self.name}'\n\nperson = Person('Alice', 30)\nprint(person.greet())  # 'Hello, I am Alice'"
  },
  {
    term: "Méthode",
    definition: "Une fonction définie à l'intérieur d'une classe qui opère sur les instances de cette classe.",
    levelRange: "7-8",
    detailedDescription: "Les méthodes sont des fonctions liées aux instances de classe. Le premier paramètre est conventionnellement nommé 'self' et se réfère à l'instance. Les méthodes peuvent accéder et modifier les attributs d'instance. Les méthodes de classe et les méthodes statiques fournissent des moyens alternatifs de définir des fonctions liées aux classes. Les méthodes supportent les mêmes caractéristiques de paramètres que les fonctions régulières.",
    example: "class Calculator:\n    def add(self, a, b):\n        return a + b\n    \n    def multiply(self, a, b):\n        return a * b\n\ncalc = Calculator()\nresult = calc.add(5, 3)  # 8"
  },
  {
    term: "Portée",
    definition: "La région d'un programme où une variable est accessible.",
    levelRange: "7-8",
    detailedDescription: "La portée détermine où les variables peuvent être accessibles. Python a quatre portées : locale (à l'intérieur des fonctions), englobante (fonctions imbriquées), globale (niveau module), et intégrée (noms intégrés de Python). Les variables dans les portées intérieures peuvent masquer celles des portées extérieures. La règle LEGB (Local, Enclosing, Global, Built-in) détermine la résolution des noms.",
    example: "global_var = 'global'\n\ndef outer():\n    enclosing_var = 'enclosing'\n    \n    def inner():\n        local_var = 'local'\n        print(local_var)  # local\n        print(enclosing_var)  # enclosing\n        print(global_var)  # global\n    \n    return inner\n\ninner_func = outer()\ninner_func()"
  },
  {
    term: "Variable globale",
    definition: "Une variable définie au niveau du module, accessible dans tout le module.",
    levelRange: "7-8",
    detailedDescription: "Les variables globales sont définies en dehors de toute fonction ou classe. Elles peuvent être accessibles depuis n'importe où dans le module, y compris à l'intérieur des fonctions. Pour modifier une variable globale depuis l'intérieur d'une fonction, vous devez la déclarer avec le mot-clé 'global'. Les variables globales devraient être utilisées avec parcimonie car elles peuvent rendre le code plus difficile à comprendre et à déboguer.",
    example: "counter = 0\n\ndef increment():\n    global counter\n    counter += 1\n\nincrement()\nprint(counter)  # 1"
  },
  {
    term: "Variable locale",
    definition: "Une variable définie à l'intérieur d'une fonction, uniquement accessible dans cette fonction.",
    levelRange: "7-8",
    detailedDescription: "Les variables locales sont créées lorsqu'une fonction est appelée et détruites lorsque la fonction retourne. Elles ne sont pas accessibles en dehors de la fonction. Les variables locales avec le même nom que les variables globales masquent les globales dans la portée de la fonction. C'est ce qu'on appelle le masquage de variable.",
    example: "def calculate():\n    x = 10  # variable locale\n    y = 20  # variable locale\n    return x + y\n\nresult = calculate()  # 30\n# x et y ne sont pas accessibles ici"
  },
  {
    term: "Fonction imbriquée",
    definition: "Une fonction définie à l'intérieur d'une autre fonction.",
    levelRange: "7-8",
    detailedDescription: "Les fonctions imbriquées (aussi appelées fonctions internes) sont définies dans le corps d'une autre fonction. Elles peuvent accéder aux variables de leur portée englobante (fermeture). Les fonctions imbriquées sont utiles pour créer des fonctions d'aide ou implémenter des décorateurs. Elles suivent la règle LEGB pour la résolution des noms.",
    example: "def outer_function(x):\n    def inner_function(y):\n        return x + y  # peut accéder à x de la portée extérieure\n    return inner_function\n\nadd_five = outer_function(5)\nprint(add_five(3))  # 8"
  },
  {
    term: "Fermeture",
    definition: "Une fonction qui se souvient de l'environnement dans lequel elle a été créée.",
    levelRange: "9-10",
    detailedDescription: "Une fermeture se produit lorsqu'une fonction imbriquée référence des variables de sa portée englobante, même après que la fonction extérieure ait terminé son exécution. Cela permet à la fonction interne de 'se souvenir' de l'état de la fonction extérieure. Les fermetures sont fondamentales pour les décorateurs, les fonctions partielles et de nombreux modèles de conception.",
    example: "def make_multiplier(factor):\n    def multiply(number):\n        return number * factor  # factor est 'mémorisé'\n    return multiply\n\ndouble = make_multiplier(2)\nprint(double(5))  # 10\ntriple = make_multiplier(3)\nprint(triple(5))  # 15"
  },
  {
    term: "Fonction d'aide",
    definition: "Une petite fonction utilitaire qui assiste une fonction plus grande.",
    levelRange: "7-8",
    detailedDescription: "Les fonctions d'aide (aussi appelées fonctions utilitaires) sont de petites fonctions définies pour effectuer des tâches spécifiques qui supportent des fonctions plus grandes. Elles améliorent la lisibilité et la réutilisabilité du code en décomposant des opérations complexes en morceaux gérables. Les fonctions d'aide sont souvent définies dans la portée où elles sont utilisées.",
    example: "def process_data(data):\n    def validate_item(item):\n        return isinstance(item, int) and item > 0\n    \n    def clean_item(item):\n        return max(0, min(100, item))\n    \n    valid_data = [clean_item(item) for item in data if validate_item(item)]\n    return valid_data\n\nresult = process_data([10, -5, 50, 'invalid', 200])  # [10, 50]"
  },
  {
    term: "Récursivité",
    definition: "Une fonction qui s'appelle elle-même pour résoudre un problème.",
    levelRange: "9-10",
    detailedDescription: "La récursivité se produit lorsqu'une fonction s'appelle elle-même, soit directement soit indirectement à travers d'autres fonctions. Chaque appel récursif crée un nouveau contexte d'exécution avec ses propres variables locales. La récursivité nécessite un cas de base pour empêcher les boucles infinies et un cas récursif qui se dirige vers le cas de base. Python a une limite de récursivité (par défaut 1000) pour empêcher le débordement de pile.",
    example: "def factorial(n):\n    if n <= 1:  # cas de base\n        return 1\n    return n * factorial(n - 1)  # cas récursif\n\nprint(factorial(5))  # 120"
  },
  {
    term: "Décorateur",
    definition: "Une fonction qui modifie le comportement d'une autre fonction.",
    levelRange: "9-10",
    detailedDescription: "Les décorateurs sont des fonctions qui prennent une autre fonction comme argument et retournent une version modifiée de cette fonction. Ils sont appliqués en utilisant le symbole @. Les décorateurs sont couramment utilisés pour la journalisation, l'authentification, la mise en cache et la validation. Ils utilisent les fermetures et les objets fonction pour envelopper la fonctionnalité.",
    example: "def timer(func):\n    def wrapper(*args, **kwargs):\n        import time\n        start = time.time()\n        result = func(*args, **kwargs)\n        end = time.time()\n        print(f'{func.__name__} took {end - start:.2f} seconds')\n        return result\n    return wrapper\n\n@timer\ndef slow_function():\n    import time\n    time.sleep(1)\n    return 'done'\n\nslow_function()  # affiche les informations de temps"
  },
  {
    term: "Fonction Lambda",
    definition: "Une fonction anonyme et en ligne définie avec le mot-clé lambda.",
    levelRange: "7-8",
    detailedDescription: "Les fonctions lambda sont de petites fonctions anonymes qui peuvent être définies en ligne. Elles peuvent prendre n'importe quel nombre d'arguments mais ne peuvent avoir qu'une seule expression. Les fonctions lambda sont souvent utilisées avec des fonctions comme map(), filter(), et sorted() où une petite fonction est nécessaire temporairement. Elles ne peuvent pas contenir d'instructions ou de logique complexe.",
    example: "numbers = [1, 2, 3, 4, 5]\n\n# Lambda avec map\neven_numbers = list(map(lambda x: x * 2, numbers))  # [2, 4, 6, 8, 10]\n\n# Lambda avec filter\nevens = list(filter(lambda x: x % 2 == 0, numbers))  # [2, 4]\n\n# Lambda avec sorted\npairs = [(1, 'one'), (2, 'two'), (3, 'three')]\nsorted_pairs = sorted(pairs, key=lambda x: x[1])"
  },
  {
    term: "Générateur",
    definition: "Une fonction qui produit des valeurs une à la fois au lieu de retourner une liste complète.",
    levelRange: "9-10",
    detailedDescription: "Les générateurs sont des fonctions qui utilisent le mot-clé 'yield' pour produire une séquence de valeurs paresseusement. Au lieu de calculer toutes les valeurs à la fois et de les stocker en mémoire, les générateurs calculent les valeurs à la demande. Cela les rend efficaces en mémoire pour les grands ensembles de données. Les générateurs peuvent être consommés en utilisant next() ou dans des boucles for.",
    example: "def fibonacci_generator():\n    a, b = 0, 1\n    while True:\n        yield a\n        a, b = b, a + b\n\nfib = fibonacci_generator()\nprint(next(fib))  # 0\nprint(next(fib))  # 1\nprint(next(fib))  # 1\nprint(next(fib))  # 2\n\n# Ou utiliser dans une boucle\nfor num in fib:\n    if num > 100:\n        break\n    print(num)"
  }
];
