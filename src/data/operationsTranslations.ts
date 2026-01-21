// French translations for operations data
// This file contains French translations for OPERATIONS_DATA and MATH_CONCEPTS_DATA
// Note: Python code examples remain the same in all languages, but comments/descriptions are translated

export interface OperationItem {
  title: string;
  category: string;
  definition: string;
  examples: string[];
}

export const OPERATIONS_DATA_FR: OperationItem[] = [
  {
    title: "Opérations arithmétiques",
    category: "Opérations",
    definition: "Opérations mathématiques de base pour effectuer des calculs avec des nombres.",
    examples: [
      "+ Addition : 5 + 3 = 8",
      "- Soustraction : 10 - 4 = 6",
      "* Multiplication : 3 * 4 = 12",
      "/ Division : 15 / 3 = 5.0 (retourne toujours un float)",
      "// Division entière : 15 // 4 = 3 (arrondit vers le bas)",
      "% Modulo : 15 % 4 = 3 (reste)",
      "** Exponentiation : 2 ** 3 = 8"
    ]
  },
  {
    title: "Ordre des opérations",
    category: "Opérations",
    definition: "Python suit PEMDAS : Parenthèses, Exposants, Multiplication/Division (de gauche à droite), Addition/Soustraction (de gauche à droite).",
    examples: [
      "2 + 3 * 4 = 14 (multiplication avant addition)",
      "(2 + 3) * 4 = 20 (parenthèses d'abord)",
      "10 - 3 + 2 = 9 (de gauche à droite)",
      "2 ** 3 * 2 = 16 (exposants avant multiplication)"
    ]
  },
  {
    title: "Résultats Entier vs Float",
    category: "Opérations",
    definition: "La division (/) retourne toujours un float, même lors de la division d'entiers. La division entière (//) retourne un entier lorsque les deux opérandes sont des entiers.",
    examples: [
      "10 / 2 = 5.0 (résultat float)",
      "10 // 2 = 5 (résultat entier)",
      "10 / 3 = 3.333... (float)",
      "10 // 3 = 3 (entier, arrondi vers le bas)",
      "10.0 // 3 = 3.0 (résultat float)"
    ]
  },
  {
    title: "Opérateurs d'assignation",
    category: "Opérations",
    definition: "Opérateurs qui combinent l'assignation avec les opérations arithmétiques.",
    examples: [
      "= Assignation de base : x = 5",
      "+= Ajouter et assigner : x += 3 (identique à x = x + 3)",
      "-= Soustraire et assigner : x -= 2 (identique à x = x - 2)",
      "*= Multiplier et assigner : x *= 4 (identique à x = x * 4)",
      "/= Diviser et assigner : x /= 2 (identique à x = x / 2)",
      "//= Diviser entièrement et assigner : x //= 3",
      "%= Modulo et assigner : x %= 5",
      "**= Exponentier et assigner : x **= 2"
    ]
  },
  {
    title: "Assignation en chaîne",
    category: "Opérations",
    definition: "Assigner la même valeur à plusieurs variables en une seule instruction.",
    examples: [
      "x = y = z = 10  # Toutes les variables égalent 10",
      "a = b = c = []  # Toutes référencent le même objet liste"
    ]
  },
  {
    title: "Opérateurs de comparaison",
    category: "Opérations",
    definition: "Opérateurs qui comparent des valeurs et retournent des résultats booléens.",
    examples: [
      "== Égal à : 5 == 5 → True",
      "!= Non égal : 5 != 3 → True",
      "< Inférieur à : 3 < 5 → True",
      "> Supérieur à : 5 > 3 → True",
      "<= Inférieur ou égal : 5 <= 5 → True",
      ">= Supérieur ou égal : 5 >= 3 → True",
      "En chaîne : 1 < 5 < 10 → True"
    ]
  },
  {
    title: "Opérateurs logiques",
    category: "Opérations",
    definition: "Opérateurs qui combinent des expressions booléennes en utilisant la logique ET, OU et NON.",
    examples: [
      "and : Retourne True si les deux conditions sont True",
      "  (5 > 3) and (10 < 20) → True",
      "or : Retourne True si au moins une condition est True",
      "  (5 > 10) or (10 < 20) → True",
      "not : Inverse la valeur booléenne",
      "  not (5 > 10) → True",
      "Court-circuit : 'and' et 'or' s'arrêtent d'évaluer une fois le résultat déterminé"
    ]
  },
  {
    title: "Identité vs Égalité",
    category: "Opérations",
    definition: "is vérifie si deux variables référencent le même objet, == vérifie si les valeurs sont égales.",
    examples: [
      "x = [1, 2, 3]",
      "y = [1, 2, 3]",
      "x == y → True (les valeurs sont égales)",
      "x is y → False (objets différents)",
      "z = x",
      "x is z → True (même objet)"
    ]
  },
  {
    title: "Opérations d'appartenance",
    category: "Opérations",
    definition: "Opérateurs qui vérifient si un élément existe dans une séquence ou une collection.",
    examples: [
      "in : Retourne True si l'élément est trouvé",
      "  'a' in 'apple' → True",
      "  3 in [1, 2, 3] → True",
      "  'key' in {'key': 'value'} → True",
      "not in : Retourne True si l'élément n'est pas trouvé",
      "  10 not in [1, 2, 3] → True"
    ]
  },
  {
    title: "Opérations de type",
    category: "Opérations",
    definition: "Fonctions et opérateurs pour vérifier et convertir les types de données.",
    examples: [
      "type() : Retourne le type d'un objet",
      "  type(5) → <class 'int'>",
      "isinstance() : Vérifie si l'objet est une instance de type(s)",
      "  isinstance(5, int) → True",
      "  isinstance(5, (int, float)) → True",
      "Typage dynamique : Les variables peuvent changer de type",
      "  x = 5  # x est int",
      "  x = 'hello'  # x est maintenant str"
    ]
  },
  {
    title: "Opérateurs binaires",
    category: "Opérations",
    definition: "Opérateurs qui effectuent des opérations sur les représentations binaires d'entiers.",
    examples: [
      "& ET : 5 & 3 = 1 (binaire : 101 & 011 = 001)",
      "| OU : 5 | 3 = 7 (binaire : 101 | 011 = 111)",
      "^ OU exclusif : 5 ^ 3 = 6 (binaire : 101 ^ 011 = 110)",
      "~ NON : ~5 = -6 (inverse tous les bits)",
      "<< Décalage à gauche : 5 << 1 = 10 (multiplier par 2)",
      ">> Décalage à droite : 5 >> 1 = 2 (diviser par 2, arrondi)"
    ]
  }
];

export const MATH_CONCEPTS_DATA_FR: OperationItem[] = [
  {
    title: "Entiers de base et comptage",
    category: "Concepts Mathématiques",
    definition: "Les entiers sont des nombres entiers sans décimales. Python supporte des entiers arbitrairement grands.",
    examples: [
      "Positifs : 1, 2, 3, 100, 1000",
      "Négatifs : -1, -5, -100",
      "Zéro : 0 (comportement spécial dans de nombreuses opérations)",
      "Grands : 999999999999999999 (pas de débordement)"
    ]
  },
  {
    title: "Entiers positifs et négatifs",
    category: "Concepts Mathématiques",
    definition: "Les entiers peuvent être positifs, négatifs ou zéro. Les opérations avec des nombres négatifs suivent les règles mathématiques standard.",
    examples: [
      "Addition : 5 + (-3) = 2",
      "Soustraction : 5 - (-3) = 8",
      "Multiplication : 5 * (-3) = -15",
      "Division : -10 / 2 = -5.0",
      "Valeur absolue : abs(-5) = 5"
    ]
  },
  {
    title: "Zéro et son comportement spécial",
    category: "Concepts Mathématiques",
    definition: "Zéro a des propriétés uniques dans les opérations mathématiques qui affectent le comportement de Python.",
    examples: [
      "Division par zéro : 10 / 0 → ZeroDivisionError",
      "Multiplication par zéro : 5 * 0 = 0",
      "Addition de zéro : 5 + 0 = 5",
      "Booléen : bool(0) = False (zéro est falsy)",
      "Puissance : 5 ** 0 = 1 (tout nombre à la puissance 0 vaut 1)"
    ]
  },
  {
    title: "Incrémentation et décrémentation des valeurs",
    category: "Concepts Mathématiques",
    definition: "Modèles communs pour augmenter ou diminuer des valeurs numériques dans les boucles et conditions.",
    examples: [
      "Incrément : x += 1 ou x = x + 1",
      "Décrément : x -= 1 ou x = x - 1",
      "Dans une boucle : for i in range(10): (i s'incrémente automatiquement)",
      "Boucle while : while x < 10: x += 1",
      "Incrément par pas : x += 2 (augmenter de 2)"
    ]
  },
  {
    title: "Utilisation d'entiers dans les boucles et conditions",
    category: "Concepts Mathématiques",
    definition: "Les entiers sont couramment utilisés pour contrôler les itérations de boucles et comme conditions dans le flux de contrôle.",
    examples: [
      "Range : for i in range(5): (0, 1, 2, 3, 4)",
      "Compte à rebours : for i in range(10, 0, -1):",
      "Condition : if count > 0:",
      "Compteur : count = 0; count += 1",
      "Index : items[i] (utiliser un entier comme index)"
    ]
  },
  {
    title: "Nombres premiers",
    category: "Concepts Mathématiques",
    definition: "Un nombre premier est un nombre naturel supérieur à 1 qui n'a pas de diviseurs positifs autres que 1 et lui-même.",
    examples: [
      "Premiers : 2, 3, 5, 7, 11, 13, 17, 19",
      "Composés : 4, 6, 8, 9, 10 (ont des diviseurs autres que 1 et eux-mêmes)",
      "Vérification : n % i != 0 pour tout i dans range(2, n)",
      "1 n'est ni premier ni composé"
    ]
  },
  {
    title: "Vérifier si un nombre est premier",
    category: "Concepts Mathématiques",
    definition: "Algorithme pour déterminer si un nombre est premier en testant la divisibilité.",
    examples: [
      "Basique : Vérifier la divisibilité de 2 à n-1",
      "Optimisé : Vérifier uniquement jusqu'à √n",
      "def is_prime(n):",
      "    if n < 2: return False",
      "    for i in range(2, int(n**0.5) + 1):",
      "        if n % i == 0: return False",
      "    return True"
    ]
  },
  {
    title: "Génération de séquences de nombres premiers",
    category: "Concepts Mathématiques",
    definition: "Méthodes pour créer des listes ou générateurs de nombres premiers.",
    examples: [
      "Crible d'Ératosthène : Algorithme efficace",
      "Générateur : yield primes un à la fois",
      "Compréhension de liste avec vérification de primalité",
      "Basé sur range : for n in range(2, 100) if is_prime(n)"
    ]
  },
  {
    title: "Facteurs et multiples",
    category: "Concepts Mathématiques",
    definition: "Les facteurs sont des nombres qui divisent uniformément un autre nombre. Les multiples sont des produits d'un nombre.",
    examples: [
      "Facteurs de 12 : [1, 2, 3, 4, 6, 12]",
      "Trouver des facteurs : [i for i in range(1, n+1) if n % i == 0]",
      "Multiples de 3 : 3, 6, 9, 12, 15...",
      "Multiples communs : Nombres divisibles par plusieurs valeurs"
    ]
  },
  {
    title: "Plus Grand Commun Diviseur (PGCD)",
    category: "Concepts Mathématiques",
    definition: "Le plus grand nombre qui divise uniformément deux ou plusieurs entiers.",
    examples: [
      "PGCD de 12 et 18 : 6",
      "Utiliser math.gcd() : import math; math.gcd(12, 18) = 6",
      "Algorithme d'Euclide pour le calcul manuel",
      "Utile pour simplifier les fractions"
    ]
  },
  {
    title: "Plus Petit Commun Multiple (PPCM)",
    category: "Concepts Mathématiques",
    definition: "Le plus petit nombre qui est un multiple de deux ou plusieurs entiers.",
    examples: [
      "PPCM de 4 et 6 : 12",
      "Utiliser math.lcm() : import math; math.lcm(4, 6) = 12",
      "Formule : PPCM(a, b) = (a * b) / PGCD(a, b)",
      "Utile pour trouver les dénominateurs communs"
    ]
  },
  {
    title: "Fractions et nombres rationnels",
    category: "Concepts Mathématiques",
    definition: "Nombres exprimés comme un rapport de deux entiers (numérateur/dénominateur).",
    examples: [
      "Fraction propre : numérateur < dénominateur (1/2)",
      "Fraction impropre : numérateur >= dénominateur (5/3)",
      "Simplification : 4/8 = 1/2 (diviser par PGCD)",
      "Python : from fractions import Fraction",
      "Fraction(1, 2) + Fraction(1, 3) = Fraction(5, 6)"
    ]
  },
  {
    title: "Nombres à virgule flottante et précision",
    category: "Concepts Mathématiques",
    definition: "Les floats représentent des nombres réels mais ont une précision limitée due à la représentation binaire.",
    examples: [
      "Stockage : Format double précision IEEE 754",
      "Erreurs de précision : 0.1 + 0.2 != 0.3",
      "Comparaison : Utiliser abs(a - b) < 0.0001 au lieu de a == b",
      "Formatage : f'{value:.2f}' pour 2 décimales",
      "Module decimal : from decimal import Decimal pour l'arithmétique exacte"
    ]
  },
  {
    title: "Puissances, racines et exposants",
    category: "Concepts Mathématiques",
    definition: "Opérations impliquant l'élévation de nombres à des puissances ou la recherche de racines.",
    examples: [
      "Carré : 5 ** 2 = 25 (5 au carré)",
      "Cube : 3 ** 3 = 27 (3 au cube)",
      "Racine carrée : 25 ** 0.5 = 5.0 ou math.sqrt(25) = 5.0",
      "Racine nième : 8 ** (1/3) = 2.0 (racine cubique)",
      "Exposant : 2 ** 10 = 1024"
    ]
  },
  {
    title: "Arithmétique modulaire",
    category: "Concepts Mathématiques",
    definition: "Système arithmétique où les nombres reviennent après avoir atteint une certaine valeur (le module).",
    examples: [
      "Arithmétique d'horloge : 13 % 12 = 1 (13h)",
      "Pair/impair : n % 2 == 0 (pair), n % 2 == 1 (impair)",
      "Divisibilité : n % 3 == 0 (divisible par 3)",
      "Bouclage : (x + 1) % 10 (cycles 0-9)",
      "Indexation circulaire : items[index % len(items)]"
    ]
  },
  {
    title: "Suites et séries",
    category: "Concepts Mathématiques",
    definition: "Listes ordonnées de nombres suivant un motif ou une règle.",
    examples: [
      "Arithmétique : 2, 5, 8, 11... (ajouter 3 à chaque fois)",
      "  a_n = premier + (n-1) * différence",
      "Géométrique : 2, 6, 18, 54... (multiplier par 3)",
      "  a_n = premier * (ratio ** (n-1))",
      "Fibonacci : 0, 1, 1, 2, 3, 5, 8...",
      "  fib(n) = fib(n-1) + fib(n-2)"
    ]
  },
  {
    title: "Ratios et proportions",
    category: "Concepts Mathématiques",
    definition: "Comparer des quantités et mettre à l'échelle des valeurs proportionnellement.",
    examples: [
      "Ratio : 3:5 (3 pour 5)",
      "Mise à l'échelle : value * scale_factor",
      "Normalisation : (x - min) / (max - min) (plage 0 à 1)",
      "Pourcentage : (part / total) * 100",
      "Proportion : a/b = c/d"
    ]
  },
  {
    title: "Nombres aléatoires et probabilité",
    category: "Concepts Mathématiques",
    definition: "Générer des nombres imprévisibles et modéliser des événements aléatoires.",
    examples: [
      "Entier aléatoire : import random; random.randint(1, 10)",
      "Float aléatoire : random.random() (0.0 à 1.0)",
      "Choix : random.choice([1, 2, 3, 4, 5])",
      "Mélanger : random.shuffle(my_list)",
      "Graine : random.seed(42) pour la reproductibilité"
    ]
  },
  {
    title: "Statistiques de base",
    category: "Concepts Mathématiques",
    definition: "Mesures statistiques pour analyser des collections de données numériques.",
    examples: [
      "Moyenne : sum(numbers) / len(numbers) ou statistics.mean()",
      "Médiane : statistics.median([1, 3, 5, 7, 9]) = 5",
      "Mode : statistics.mode([1, 2, 2, 3]) = 2",
      "Étendue : max(numbers) - min(numbers)",
      "Variance : statistics.variance(numbers)"
    ]
  },
  {
    title: "Systèmes de coordonnées et géométrie",
    category: "Concepts Mathématiques",
    definition: "Représenter des positions et des distances dans un espace 2D ou 3D.",
    examples: [
      "Cartésien : coordonnées (x, y)",
      "Distance : math.sqrt((x2-x1)**2 + (y2-y1)**2)",
      "Coordonnées polaires : (r, θ) - rayon et angle",
      "Formes de base : cercles, rectangles, triangles",
      "Transformations : translation, rotation, mise à l'échelle"
    ]
  },
  {
    title: "Contraintes et limites mathématiques",
    category: "Concepts Mathématiques",
    definition: "Limiter les valeurs à des plages valides et valider les entrées.",
    examples: [
      "Minimum : min(a, b, c)",
      "Maximum : max(a, b, c)",
      "Plage : max(min_val, min(value, max_val))",
      "Validation : if 0 <= value <= 100:",
      "Vérification des limites : if index >= 0 and index < len(list):"
    ]
  }
];
