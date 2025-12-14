const quizData = {
    1: {
        title: "Introduction à Python",
        questions: [
            {
                question: "Quel type de langage est Python ?",
                options: ["Compilé (comme C++)", "Interprété (exécuté ligne par ligne)", "Assembleur (bas niveau)", "Langage machine pur"],
                correct: 1,
                explanation: "Python est un langage <strong>interprété</strong>. Cela signifie que le code source est lu et exécuté directement par un interpréteur, sans passer par une étape de compilation complexe vers un fichier exécutable binaire."
            },
            {
                question: "Quelle est la philosophie principale de Python (The Zen of Python) ?",
                options: ["La performance avant tout", "La lisibilité compte (Readability counts)", "La complexité est préférable", "Il faut utiliser le plus de lignes possible"],
                correct: 1,
                explanation: "La philosophie de Python met l'accent sur la <strong>lisibilité</strong> et la simplicité. Un code clair est plus facile à maintenir et à partager."
            },
            {
                question: "Qui est le créateur de Python ?",
                options: ["Elon Musk", "Bill Gates", "Guido van Rossum", "Dennis Ritchie"],
                correct: 2,
                explanation: "<strong>Guido van Rossum</strong> a créé Python à la fin des années 80. Il a été le 'Benevolent Dictator For Life' (BDFL) du projet pendant de nombreuses années."
            },
            {
                question: "Quelle est la différence majeure de `print` entre Python 2 et Python 3 ?",
                options: ["Aucune différence", "En Python 2 c'est une instruction, en Python 3 une fonction", "En Python 2 on utilise 'echo'", "Python 3 n'a pas de print"],
                correct: 1,
                explanation: "En Python 2, on écrit `print 'texte'` (instruction). En Python 3, c'est une fonction : `print('texte')`. Ce cours utilise la syntaxe Python 2."
            },
            {
                question: "Quelle extension portent les fichiers scripts Python ?",
                options: [".java", ".py", ".cpp", ".txt"],
                correct: 1,
                explanation: "Les fichiers contenant du code source Python doivent avoir l'extension <strong>.py</strong>."
            },
            {
                question: "Qu'est-ce que le 'bytecode' en Python ?",
                options: ["Un code secret", "Une version intermédiaire du code (.pyc) pour accélérer l'exécution", "Un virus", "Le code source original"],
                correct: 1,
                explanation: "Python compile le code source en <strong>bytecode</strong> (fichiers .pyc) qui est ensuite exécuté par la machine virtuelle Python. Cela améliore les performances au redémarrage."
            },
            {
                question: "Pourquoi Python est-il populaire en Data Science ?",
                options: ["Il est le plus rapide", "Il possède des bibliothèques puissantes comme NumPy et Pandas", "Il est obligatoire", "Il ressemble à Excel"],
                correct: 1,
                explanation: "La richesse de son écosystème, notamment les bibliothèques comme <strong>NumPy, Pandas, et Matplotlib</strong>, en fait le leader en science des données."
            },
            {
                question: "Comment écrit-on un commentaire sur une seule ligne en Python ?",
                options: ["// Commentaire", "/* Commentaire */", "# Commentaire", "<!-- Commentaire -->"],
                correct: 2,
                explanation: "En Python, le symbole <strong>#</strong> marque le début d'un commentaire jusqu'à la fin de la ligne."
            },
            {
                question: "Lequel de ces domaines N'EST PAS un point fort classique de Python ?",
                options: ["Intelligence Artificielle", "Développement Web (Backend)", "Programmation Système bas niveau (Drivers)", "Automatisation de scripts"],
                correct: 2,
                explanation: "Python est de haut niveau. Pour la programmation système très bas niveau (drivers, noyaux OS), on préfère C ou C++ ou Rust."
            },
            {
                question: "Que signifie 'Python est dynamiquement typé' ?",
                options: ["Il faut déclarer le type des variables (int x;)", "Le type est déterminé automatiquement lors de l'affectation", "Les variables ne peuvent pas changer de type", "Il n'y a pas de types"],
                correct: 1,
                explanation: "Vous n'avez pas besoin de déclarer le type (ex: `int x`). Python devine le type selon la valeur que vous donnez (`x = 5` devient un entier)."
            }
        ]
    },
    2: {
        title: "Notions de Base",
        questions: [
            {
                question: "Quel est le résultat de `10 / 4` en Python 2 ?",
                options: ["2.5", "2", "2.0", "Erreur"],
                correct: 1,
                explanation: "Piège classique de Python 2 ! La division de deux entiers est une <strong>division entière</strong>. Le résultat est tronqué à 2."
            },
            {
                question: "Comment obtenir `2.5` en divisant 10 par 4 en Python 2 ?",
                options: ["10 / 4", "10.0 / 4", "div(10, 4)", "10 // 4"],
                correct: 1,
                explanation: "Il faut qu'au moins un des opérandes soit un flottant : `10.0 / 4` ou `10 / 4.0` ou `float(10) / 4`."
            },
            {
                question: "Quel est le type de la variable `x` si `x = '123'` ?",
                options: ["int", "float", "str", "list"],
                correct: 2,
                explanation: "Les guillemets (simples ou doubles) définissent une chaîne de caractères (<strong>str</strong>), même si elle contient des chiffres."
            },
            {
                question: "Quelle fonction permet de lire une entrée utilisateur sous forme de chaîne (String) en Python 2 ?",
                options: ["input()", "raw_input()", "read()", "scan()"],
                correct: 1,
                explanation: "En Python 2, utilisez toujours <strong>raw_input()</strong>. `input()` est dangereux car il évalue l'entrée comme du code."
            },
            {
                question: "Que fait l'opérateur `**` ?",
                options: ["Multiplication", "Division", "Puissance (Exposant)", "Modulo"],
                correct: 2,
                explanation: "`a ** b` calcule 'a' à la puissance 'b' (a exposant b)."
            },
            {
                question: "Quelle est la valeur de `17 % 3` ?",
                options: ["5", "2", "3", "0"],
                correct: 1,
                explanation: "L'opérateur modulo `%` donne le <strong>reste</strong> de la division entière. 17 divisé par 3 donne 5, reste <strong>2</strong>."
            },
            {
                question: "Lequel de ces noms de variable est INVALIDE ?",
                options: ["mon_score", "score2", "2score", "_score"],
                correct: 2,
                explanation: "Un nom de variable ne peut <strong>jamais commencer par un chiffre</strong>."
            },
            {
                question: "Que fait `int(3.99)` ?",
                options: ["4", "3", "3.99", "Erreur"],
                correct: 1,
                explanation: "La fonction `int()` <strong>tronque</strong> la partie décimale. Elle n'arrondit pas. Donc 3.99 devient 3."
            },
            {
                question: "Quel est l'ordre de priorité des opérations ?",
                options: ["Addition avant Multiplication", "Multiplication avant Addition", "De gauche à droite uniquement", "Aucune priorité"],
                correct: 1,
                explanation: "Comme en maths : Parenthèses > Puissance > Multiplication/Division > Addition/Soustraction (PEMDAS)."
            },
            {
                question: "Que signifie PEP 8 ?",
                options: ["Un nouveau langage", "Le guide de style officiel du code Python", "Une version de Python", "Une bibliothèque"],
                correct: 1,
                explanation: "Le <strong>PEP 8</strong> est le document de référence qui définit les bonnes pratiques de formatage du code Python (indentation, espaces, noms...)."
            }
        ]
    },
    3: {
        title: "Structures Conditionnelles",
        questions: [
            {
                question: "Quel mot-clé introduit une condition alternative (Sinon Si) ?",
                options: ["else if", "elseif", "elif", "sinonsi"],
                correct: 2,
                explanation: "Python utilise <strong>elif</strong>, qui est une contraction de 'else if'."
            },
            {
                question: "Quelle est la valeur de `True and False` ?",
                options: ["True", "False", "Peut-être", "Erreur"],
                correct: 1,
                explanation: "L'opérateur <strong>and</strong> retourne True seulement si les DEUX opérandes sont True. Ici, l'un est False."
            },
            {
                question: "Quel symbole termine la ligne d'un `if` ou `elif` ?",
                options: [";", "{", ":", "."],
                correct: 2,
                explanation: "Le <strong>double point (:)</strong> est obligatoire pour marquer la fin de la condition et le début du bloc."
            },
            {
                question: "Comment tester l'égalité entre deux variables `a` et `b` ?",
                options: ["a = b", "a == b", "a equals b", "a is b"],
                correct: 1,
                explanation: "`=` est pour l'affectation. <strong>`==`</strong> est pour la comparaison d'égalité de valeur."
            },
            {
                question: "Que se passe-t-il si aucune condition `if` ou `elif` n'est vraie ?",
                options: ["Le programme plante", "Le bloc `else` est exécuté (s'il existe)", "Le programme recommence", "Rien"],
                correct: 1,
                explanation: "Le bloc <strong>else</strong> est le bloc par défaut qui s'exécute si toutes les conditions précédentes ont échoué."
            },
            {
                question: "Quelle est l'indentation standard en Python ?",
                options: ["2 espaces", "4 espaces", "1 tabulation", "C'est libre"],
                correct: 1,
                explanation: "Le standard PEP 8 recommande <strong>4 espaces</strong> par niveau d'indentation."
            },
            {
                question: "Que vaut `not (5 > 10)` ?",
                options: ["True", "False", "None", "Erreur"],
                correct: 0,
                explanation: "`5 > 10` est False. Donc `not False` devient <strong>True</strong>."
            },
            {
                question: "Qu'est-ce qu'une valeur 'Falsy' ?",
                options: ["Une valeur fausse comme 0, '', None", "Une erreur de syntaxe", "Une variable non définie", "Un bug"],
                correct: 0,
                explanation: "En Python, 0, chaîne vide, liste vide, et None sont considérés comme Faux dans une condition."
            },
            {
                question: "Peut-on imbriquer des `if` dans des `if` ?",
                options: ["Non, interdit", "Oui, c'est possible", "Seulement en Python 3", "Oui mais seulement 1 niveau"],
                correct: 1,
                explanation: "Oui, l'imbrication est possible et courante, mais attention à ne pas en abuser pour garder le code lisible."
            },
            {
                question: "Quel opérateur vérifie si deux variables pointent vers le même objet en mémoire ?",
                options: ["==", "equals", "is", "same"],
                correct: 2,
                explanation: "L'opérateur <strong>is</strong> vérifie l'identité de l'objet (même adresse mémoire), tandis que `==` vérifie l'égalité des valeurs."
            }
        ]
    },
    4: {
        title: "Les Boucles",
        questions: [
            {
                question: "Quelle boucle utiliser quand on connaît le nombre d'itérations à l'avance ?",
                options: ["while", "for", "loop", "repeat"],
                correct: 1,
                explanation: "La boucle <strong>for</strong> est idéale pour parcourir une séquence connue ou un nombre défini de fois."
            },
            {
                question: "Que génère `range(3)` ?",
                options: ["[1, 2, 3]", "[0, 1, 2]", "[0, 1, 2, 3]", "[1, 2]"],
                correct: 1,
                explanation: "`range(n)` génère une séquence commençant à 0 et s'arrêtant à n-1. Donc 0, 1, 2."
            },
            {
                question: "Quelle instruction arrête immédiatement une boucle ?",
                options: ["stop", "exit", "break", "halt"],
                correct: 2,
                explanation: "L'instruction <strong>break</strong> sort immédiatement de la boucle englobante."
            },
            {
                question: "Quelle instruction passe directement à l'itération suivante ?",
                options: ["next", "skip", "continue", "pass"],
                correct: 2,
                explanation: "<strong>continue</strong> saute le reste du code de l'itération actuelle et revient au début de la boucle pour la suivante."
            },
            {
                question: "Comment écrire une boucle infinie ?",
                options: ["while True:", "for ever:", "loop:", "while 1=1"],
                correct: 0,
                explanation: "`while True:` est la syntaxe standard pour créer une boucle qui ne s'arrête jamais (sauf break)."
            },
            {
                question: "Peut-on avoir un `else` après une boucle `for` ?",
                options: ["Non", "Oui, il s'exécute si la boucle finit normalement (sans break)", "Oui, il s'exécute à chaque tour", "Non, erreur de syntaxe"],
                correct: 1,
                explanation: "Oui ! Le bloc `else` d'une boucle s'exécute une fois que la boucle est terminée, <strong>sauf</strong> si on en est sorti avec un `break`."
            },
            {
                question: "Comment itérer sur les éléments d'une liste `fruits` ?",
                options: ["for i in range(fruits)", "for fruit in fruits", "while fruits.next()", "foreach fruit in fruits"],
                correct: 1,
                explanation: "La syntaxe `for element in liste:` est la manière Pythonique de parcourir une collection."
            },
            {
                question: "Que se passe-t-il si la condition d'un `while` est fausse dès le début ?",
                options: ["La boucle s'exécute une fois", "La boucle ne s'exécute jamais", "Erreur", "Boucle infinie"],
                correct: 1,
                explanation: "Si la condition est fausse au départ, le corps de la boucle `while` est totalement ignoré."
            },
            {
                question: "L'instruction `pass` sert à...",
                options: ["Arrêter le programme", "Ne rien faire (placeholder)", "Passer le tour", "Passer un paramètre"],
                correct: 1,
                explanation: "`pass` est une instruction nulle. Elle est utilisée quand la syntaxe requiert une instruction mais que vous ne voulez rien faire (ex: un `if` vide en attendant de coder). "
            },
            {
                question: "Comment obtenir l'index ET la valeur dans une boucle for ?",
                options: ["for i, val in enumerate(liste)", "for i, val in liste", "for i in range(liste)", "Impossible"],
                correct: 0,
                explanation: "La fonction <strong>enumerate()</strong> retourne des paires (index, valeur), très pratique pour avoir les deux."
            }
        ]
    },
    5: {
        title: "Structures de Données",
        questions: [
            {
                question: "Les listes en Python sont-elles mutables ?",
                options: ["Oui (on peut les modifier)", "Non (elles sont fixes)", "Seulement si elles sont vides", "Ça dépend"],
                correct: 0,
                explanation: "Les listes sont <strong>mutables</strong>. On peut ajouter, supprimer ou modifier leurs éléments après création."
            },
            {
                question: "Comment accéder au dernier élément d'une liste `L` ?",
                options: ["L[last]", "L[-1]", "L[len(L)]", "L.end()"],
                correct: 1,
                explanation: "L'index <strong>-1</strong> désigne toujours le dernier élément d'une séquence en Python."
            },
            {
                question: "Quelle est la différence principale entre une liste et un tuple ?",
                options: ["Les parenthèses", "Le tuple est immuable (non modifiable)", "La liste ne peut contenir que des nombres", "Aucune"],
                correct: 1,
                explanation: "La différence fondamentale est que le <strong>tuple est immuable</strong>. Une fois créé, on ne peut pas le changer. (Et syntaxiquement, il utilise des parenthèses)."
            },
            {
                question: "Quelle structure associe des clés à des valeurs ?",
                options: ["Liste", "Set", "Dictionnaire", "Tuple"],
                correct: 2,
                explanation: "Le <strong>Dictionnaire</strong> (dict) est une table de hachage associant des clés uniques à des valeurs."
            },
            {
                question: "Comment ajouter 'Pomme' à la liste `fruits` ?",
                options: ["fruits.add('Pomme')", "fruits.push('Pomme')", "fruits.append('Pomme')", "fruits += 'Pomme'"],
                correct: 2,
                explanation: "La méthode <strong>.append()</strong> ajoute un élément à la fin de la liste."
            },
            {
                question: "Un Set (ensemble) peut-il contenir des doublons ?",
                options: ["Oui", "Non, les doublons sont éliminés auto", "Oui mais ils sont cachés", "Seulement des nombres"],
                correct: 1,
                explanation: "Un <strong>Set</strong> est une collection d'éléments <strong>uniques</strong>. Ajouter un doublon ne fait rien."
            },
            {
                question: "Comment obtenir la longueur d'une liste `L` ?",
                options: ["L.length", "length(L)", "len(L)", "L.size()"],
                correct: 2,
                explanation: "La fonction built-in <strong>len()</strong> retourne la taille de n'importe quelle collection."
            },
            {
                question: "Que fait `L[1:3]` sur la liste `['a', 'b', 'c', 'd']` ?",
                options: ["['a', 'b']", "['b', 'c']", "['b', 'c', 'd']", "['a', 'b', 'c']"],
                correct: 1,
                explanation: "C'est du slicing. On prend de l'index 1 (inclus) à 3 (exclu). Index 1 est 'b', index 2 est 'c'. Donc ['b', 'c']."
            },
            {
                question: "Comment supprimer une clé 'k' d'un dictionnaire 'd' ?",
                options: ["delete d['k']", "del d['k']", "d.remove('k')", "d.delete('k')"],
                correct: 1,
                explanation: "L'instruction <strong>del</strong> permet de supprimer une entrée d'un dictionnaire par sa clé."
            },
            {
                question: "Peut-on mettre une liste dans une liste ?",
                options: ["Non", "Oui (liste imbriquée)", "Seulement si elles ont la même taille", "Jamais"],
                correct: 1,
                explanation: "Oui, les listes peuvent contenir n'importe quel type d'objet, y compris d'autres listes (tableaux multidimensionnels)."
            }
        ]
    },
    6: {
        title: "Les Fonctions",
        questions: [
            {
                question: "Quel mot-clé définit une fonction ?",
                options: ["function", "def", "func", "define"],
                correct: 1,
                explanation: "On utilise <strong>def</strong> suivi du nom de la fonction."
            },
            {
                question: "Que se passe-t-il si une fonction ne retourne rien explicitement ?",
                options: ["Elle retourne 0", "Elle retourne False", "Elle retourne None", "Erreur"],
                correct: 2,
                explanation: "Par défaut, une fonction Python retourne <strong>None</strong> si aucune instruction `return` n'est rencontrée."
            },
            {
                question: "Qu'est-ce qu'un paramètre par défaut ?",
                options: ["Un paramètre obligatoire", "Un paramètre qui a une valeur si on ne lui en donne pas", "Une erreur", "Une variable globale"],
                correct: 1,
                explanation: "C'est un paramètre défini avec une valeur (ex: `def f(a=1):`). Si l'appelant ne fournit pas de valeur, `a` vaudra 1."
            },
            {
                question: "Qu'est-ce que la portée (scope) d'une variable ?",
                options: ["Sa taille en mémoire", "La zone du code où elle est visible/accessible", "Son type", "Sa valeur"],
                correct: 1,
                explanation: "La portée définit où une variable existe. Une variable définie dans une fonction est locale à cette fonction."
            },
            {
                question: "Comment importer seulement la fonction `sqrt` de `math` ?",
                options: ["import math.sqrt", "from math import sqrt", "using math.sqrt", "include sqrt from math"],
                correct: 1,
                explanation: "`from module import fonction` permet d'importer un élément spécifique sans importer tout le module."
            },
            {
                question: "Qu'est-ce qu'une fonction lambda ?",
                options: ["Une fonction complexe", "Une fonction anonyme en une ligne", "Une fonction mathématique", "Un module"],
                correct: 1,
                explanation: "Une <strong>lambda</strong> est une petite fonction anonyme définie en une ligne, souvent utilisée pour des opérations simples."
            },
            {
                question: "Que sont les `*args` dans une définition de fonction ?",
                options: ["Une erreur", "Un pointeur", "Une syntaxe pour accepter un nombre variable d'arguments positionnels", "Une multiplication"],
                correct: 2,
                explanation: "`*args` permet à la fonction de recevoir n'importe quel nombre d'arguments supplémentaires sous forme de tuple."
            },
            {
                question: "Qu'est-ce qu'une Docstring ?",
                options: ["Un commentaire spécial pour documenter la fonction", "Une chaîne de caractères vide", "Un type de variable", "Une erreur"],
                correct: 0,
                explanation: "C'est une chaîne placée juste après la définition de la fonction (entre triples guillemets) pour expliquer ce qu'elle fait."
            },
            {
                question: "Peut-on retourner plusieurs valeurs en Python ?",
                options: ["Non", "Oui, sous forme de tuple", "Oui, sous forme de liste seulement", "Jamais"],
                correct: 1,
                explanation: "Oui ! `return a, b` renvoie en réalité un tuple `(a, b)`. On peut ensuite les déballer : `x, y = f()`."
            },
            {
                question: "Pourquoi découper son code en fonctions ?",
                options: ["Pour faire plus de lignes", "Pour la réutilisabilité et la clarté", "Pour ralentir le code", "C'est obligatoire"],
                correct: 1,
                explanation: "Les fonctions permettent d'éviter la répétition (DRY - Don't Repeat Yourself) et de rendre le code plus modulaire et lisible."
            }
        ]
    },
    7: {
        title: "Gestion des Erreurs",
        questions: [
            {
                question: "Quel bloc permet de surveiller du code susceptible de planter ?",
                options: ["catch", "try", "test", "attempt"],
                correct: 1,
                explanation: "On place le code à risque dans un bloc <strong>try</strong>."
            },
            {
                question: "Quel bloc capture l'erreur si elle survient ?",
                options: ["catch", "except", "error", "handle"],
                correct: 1,
                explanation: "Si une erreur survient dans le `try`, le flux saute dans le bloc <strong>except</strong> correspondant."
            },
            {
                question: "Quel bloc s'exécute TOUJOURS, erreur ou pas ?",
                options: ["always", "finally", "end", "done"],
                correct: 1,
                explanation: "Le bloc <strong>finally</strong> est garanti de s'exécuter. Idéal pour fermer des fichiers ou libérer des ressources."
            },
            {
                question: "Quelle erreur est levée pour une division par zéro ?",
                options: ["MathError", "ZeroDivisionError", "ValueError", "CalculationError"],
                correct: 1,
                explanation: "C'est l'exception <strong>ZeroDivisionError</strong>."
            },
            {
                question: "Quelle erreur est levée si on accède à un index qui n'existe pas dans une liste ?",
                options: ["KeyError", "IndexError", "RangeError", "ListError"],
                correct: 1,
                explanation: "C'est une <strong>IndexError</strong> (list index out of range)."
            },
            {
                question: "Comment lever manuellement une exception ?",
                options: ["throw Exception()", "raise Exception()", "trigger Exception()", "error Exception()"],
                correct: 1,
                explanation: "Le mot-clé <strong>raise</strong> permet de déclencher une exception volontairement."
            },
            {
                question: "Peut-on avoir plusieurs blocs `except` ?",
                options: ["Non", "Oui, pour gérer différents types d'erreurs différemment", "Oui mais ils font la même chose", "Max 2"],
                correct: 1,
                explanation: "Oui, on peut enchainer les `except ValueError:`, `except TypeError:`, etc. pour réagir spécifiquement."
            },
            {
                question: "Que se passe-t-il si une erreur n'est pas attrapée ?",
                options: ["Rien", "Le programme plante et affiche la stack trace", "Le programme continue", "L'ordinateur s'éteint"],
                correct: 1,
                explanation: "Une exception non gérée remonte jusqu'à l'interpréteur qui arrête le programme et affiche l'erreur."
            },
            {
                question: "Qu'est-ce que `except Exception as e:` ?",
                options: ["Une erreur de syntaxe", "Attrape toutes les erreurs et stocke l'objet erreur dans 'e'", "Ne marche pas", "Ignore l'erreur"],
                correct: 1,
                explanation: "Cela attrape n'importe quelle exception héritant de Exception et permet d'accéder aux détails via la variable `e`."
            },
            {
                question: "Pourquoi gérer les erreurs ?",
                options: ["Pour cacher les bugs", "Pour rendre le programme robuste et éviter les crashs inattendus", "C'est optionnel", "Pour ralentir"],
                correct: 1,
                explanation: "La gestion des exceptions permet de contrôler le comportement du programme face à l'imprévu (fichier manquant, mauvaise saisie...) sans crasher."
            }
        ]
    },
    8: {
        title: "Fichiers",
        questions: [
            {
                question: "Quel mode d'ouverture permet de LIRE un fichier ?",
                options: ["'w'", "'r'", "'a'", "'x'"],
                correct: 1,
                explanation: "'r' signifie <strong>Read</strong> (lecture). C'est le mode par défaut."
            },
            {
                question: "Quel mode permet d'ÉCRIRE en écrasant le contenu ?",
                options: ["'w'", "'r'", "'a'", "'rw'"],
                correct: 0,
                explanation: "'w' signifie <strong>Write</strong>. Attention, cela efface tout le contenu existant du fichier !"
            },
            {
                question: "Quel mode permet d'AJOUTER du contenu à la fin ?",
                options: ["'add'", "'p'", "'a'", "'w+'"],
                correct: 2,
                explanation: "'a' signifie <strong>Append</strong> (Ajouter). Le contenu existant est préservé."
            },
            {
                question: "Quelle est la meilleure syntaxe pour ouvrir un fichier ?",
                options: ["f = open(...)", "with open(...) as f:", "open(...) close(...)", "file.open(...)"],
                correct: 1,
                explanation: "Le bloc <strong>with open(...) as f:</strong> est recommandé car il ferme automatiquement le fichier à la fin du bloc, même en cas d'erreur."
            },
            {
                question: "Quelle méthode lit TOUT le fichier d'un coup dans une chaîne ?",
                options: [".read()", ".readline()", ".readlines()", ".scan()"],
                correct: 0,
                explanation: "<strong>.read()</strong> lit tout le contenu et le renvoie comme une seule grande chaîne de caractères."
            },
            {
                question: "Quelle méthode lit le fichier ligne par ligne dans une liste ?",
                options: [".read()", ".readline()", ".readlines()", ".list()"],
                correct: 2,
                explanation: "<strong>.readlines()</strong> renvoie une liste où chaque élément est une ligne du fichier."
            },
            {
                question: "Pourquoi faut-il fermer un fichier ?",
                options: ["Pour libérer les ressources système", "Pour faire joli", "Ce n'est pas nécessaire", "Pour le supprimer"],
                correct: 0,
                explanation: "Garder des fichiers ouverts consomme de la mémoire et des descripteurs de fichiers, et peut empêcher d'autres programmes d'y accéder."
            },
            {
                question: "Comment supprimer les sauts de ligne `\\n` en lisant ?",
                options: [".clean()", ".strip()", ".remove()", ".delete()"],
                correct: 1,
                explanation: "La méthode de chaîne <strong>.strip()</strong> est couramment utilisée sur chaque ligne lue pour retirer les espaces et sauts de ligne inutiles."
            },
            {
                question: "Quel module aide à gérer les chemins de fichiers (Windows/Mac/Linux) ?",
                options: ["path", "os.path", "sys", "files"],
                correct: 1,
                explanation: "<strong>os.path</strong> (et `pathlib` en Python 3) permet de manipuler les chemins de manière compatible avec tous les systèmes d'exploitation."
            },
            {
                question: "Que se passe-t-il si on ouvre en mode 'r' un fichier qui n'existe pas ?",
                options: ["Il est créé", "Une erreur FileNotFoundError (ou IOError) est levée", "Rien", "Il retourne None"],
                correct: 1,
                explanation: "En mode lecture, le fichier DOIT exister, sinon Python lève une erreur."
            }
        ]
    },
    9: {
        title: "Projet Final",
        questions: [
            {
                question: "Quelle est la première étape d'un projet informatique ?",
                options: ["Coder l'interface graphique", "Choisir la base de données", "Comprendre et analyser le besoin", "Écrire les tests"],
                correct: 2,
                explanation: "Avant de coder, il faut <strong>comprendre le problème</strong>. L'analyse et la conception sont cruciales."
            },
            {
                question: "Qu'est-ce que `pip` ?",
                options: ["Un jeu", "Le gestionnaire de paquets de Python", "Un éditeur de texte", "Une fonction"],
                correct: 1,
                explanation: "<strong>pip</strong> (Pip Installs Packages) est l'outil standard pour installer des bibliothèques tierces depuis PyPI."
            },
            {
                question: "À quoi sert un fichier `requirements.txt` ?",
                options: ["À lister les fonctionnalités", "À lister les dépendances (bibliothèques) du projet", "À donner les règles du projet", "À rien"],
                correct: 1,
                explanation: "Il liste toutes les bibliothèques externes et leurs versions nécessaires pour faire tourner le projet."
            },
            {
                question: "Qu'est-ce qu'un fichier CSV ?",
                options: ["Comma Separated Values", "Computer System Video", "Code Source Version", "Un fichier Excel"],
                correct: 0,
                explanation: "C'est un format texte simple pour stocker des données tabulaires, où les valeurs sont séparées par des virgules."
            },
            {
                question: "Pourquoi commenter son code ?",
                options: ["Pour que le prof soit content", "Pour aider les autres (et soi-même) à comprendre la logique future", "Pour ralentir l'exécution", "Pour cacher du code"],
                correct: 1,
                explanation: "Le code est lu plus souvent qu'il n'est écrit. Les commentaires expliquent le <strong>pourquoi</strong> du code complexe."
            },
            {
                question: "Qu'est-ce que le Refactoring ?",
                options: ["Tout effacer et recommencer", "Améliorer la structure du code sans changer son comportement", "Ajouter des fonctionnalités", "Corriger des bugs"],
                correct: 1,
                explanation: "Le <strong>Refactoring</strong> consiste à nettoyer et optimiser le code existant pour le rendre plus propre et maintenable."
            },
            {
                question: "Quel est l'avantage de diviser un projet en plusieurs fichiers ?",
                options: ["Aucun", "Modularité et organisation", "C'est plus compliqué", "Ça prend plus de place"],
                correct: 1,
                explanation: "Cela permet de séparer les responsabilités (ex: logique, affichage, données) et facilite la maintenance."
            },
            {
                question: "Comment déboguer efficacement ?",
                options: ["Regarder l'écran fixement", "Utiliser des print() ou un débogueur pas à pas", "Changer du code au hasard", "Demander à quelqu'un d'autre"],
                correct: 1,
                explanation: "L'utilisation de traces (print) ou d'un <strong>débogueur</strong> permet de suivre l'état du programme et de localiser l'erreur."
            },
            {
                question: "Qu'est-ce que GitHub ?",
                options: ["Un langage", "Une plateforme d'hébergement de code et de collaboration (Git)", "Un réseau social", "Un éditeur"],
                correct: 1,
                explanation: "GitHub est une plateforme web pour héberger des projets versionnés avec <strong>Git</strong>."
            },
            {
                question: "Quelle est la clé pour devenir bon en programmation ?",
                options: ["Le talent inné", "La pratique régulière et la curiosité", "Apprendre par cœur", "Avoir un gros ordinateur"],
                correct: 1,
                explanation: "C'est comme un instrument de musique : la <strong>pratique</strong> est le seul moyen de progresser réellement."
            }
        ]
    }
};
