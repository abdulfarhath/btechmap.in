// ============================================================================
// BTECHMAP - ULTRA DETAILED BEGINNER ROADMAPS 2025
// ============================================================================
// Complete Beginners Edition - Step-by-Step Granular Learning Path
// Every topic broken down from ABSOLUTE BASICS
// ============================================================================

const rawRoadmapsData = {
    dsa: {
        cardTitle: "DSA & Programming Basics",
        roadmapTitle: "Data Structures & Algorithms - Complete Beginners Roadmap",
        icon: "🧠",
        color: "#B24BF3",
        description: "Start from ABSOLUTE ZERO and master programming fundamentals, data structures, and algorithms. Every single concept explained in simple terms with examples. Perfect for complete beginners with no programming experience.",
        sections: [
            {
                id: 1,
                title: "Phase 0: Programming Basics (Week 1-2)",
                subtitle: "Learn the foundation before coding",
                steps: [
                    {
                        id: 1,
                        title: "What is Programming?",
                        description: "Understand what programming is and why we need it",
                        completed: false,
                        hasResource: true,
                        topics: [
                            {
                                name: "What is a Computer Program?",
                                details: [
                                    "A program is a set of instructions that tell a computer what to do",
                                    "Think of it like a recipe: each step has an instruction",
                                    "Example: 'Add 2 numbers and show the result' is a simple program"
                                ]
                            },
                            {
                                name: "How Computers Work",
                                details: [
                                    "Computers have INPUT (keyboard, mouse) -> PROCESSING (CPU) -> OUTPUT (screen, speaker)",
                                    "A program processes INPUT and produces OUTPUT",
                                    "Example: You type 'hello' (INPUT) -> Program displays it (OUTPUT)"
                                ]
                            },
                            {
                                name: "What is an Algorithm?",
                                details: [
                                    "An algorithm is a step-by-step procedure to solve a problem",
                                    "Like a recipe in a cookbook - follow steps in order",
                                    "Example Algorithm to make tea: 1. Boil water 2. Add tea leaves 3. Pour hot water 4. Wait 5. Drink"
                                ]
                            }
                        ]
                    },
                    {
                        id: 2,
                        title: "Choose Your First Programming Language",
                        description: "Pick one language to start your journey",
                        completed: false,
                        hasResource: true,
                        languages: [
                            {
                                name: "Python",
                                pros: "Easiest to learn, simple syntax, best for beginners, no complex symbols",
                                cons: "Slower execution",
                                example: "print('Hello World')"
                            },
                            {
                                name: "Java",
                                pros: "Industry standard, runs everywhere, good for learning OOP",
                                cons: "More complex syntax than Python",
                                example: "System.out.println('Hello World');"
                            },
                            {
                                name: "C++",
                                pros: "Fast, used in competitive programming, powerful",
                                cons: "Complex syntax, pointers are confusing",
                                example: "cout << 'Hello World' << endl;"
                            },
                            {
                                name: "JavaScript",
                                pros: "For web development, runs in browser, beginner friendly",
                                cons: "Different paradigm than others",
                                example: "console.log('Hello World');"
                            }
                        ],
                        recommendation: "START WITH PYTHON - It's the EASIEST for complete beginners!"
                    },
                    {
                        id: 3,
                        title: "Setting Up Your Development Environment",
                        description: "Install tools to start coding",
                        completed: false,
                        hasResource: true,
                        steps_setup: [
                            {
                                name: "Python Setup (Recommended for Beginners)",
                                instructions: [
                                    "1. Go to python.org and download Python 3.10+",
                                    "2. Install it (remember to check 'Add to PATH')",
                                    "3. Open Command Prompt/Terminal and type: python --version",
                                    "4. Download VS Code (code.visualstudio.com) - it's FREE",
                                    "5. Install Python extension in VS Code",
                                    "6. Create a folder for your code: 'MyPythonCode'",
                                    "7. You're READY to code!"
                                ]
                            },
                            {
                                name: "Write Your First Program",
                                code_example: "print('Hello World!')",
                                instructions: [
                                    "1. Create a file named 'first.py' in your folder",
                                    "2. Type: print('Hello World!')",
                                    "3. Save the file",
                                    "4. Run it from terminal: python first.py",
                                    "5. You should see 'Hello World!' printed!"
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                id: 2,
                title: "Phase 1: Variables & Data Types (Week 3-4)",
                subtitle: "The building blocks of programming",
                steps: [
                    {
                        id: 4,
                        title: "Understanding Variables",
                        description: "Learn what variables are and how to use them",
                        completed: false,
                        hasResource: true,
                        detailed_topics: [
                            {
                                concept: "What is a Variable?",
                                explanation: "A variable is like a BOX in your computer's memory that stores a value",
                                analogy: "Think of it like a labeled drawer: you put something in it, label it, and can take it out whenever you need",
                                visual: "[ BOX: name = 'John' ]  <- The box stores 'John', the label is 'name'",
                                why_needed: "Without variables, you can't store or remember information in your program"
                            },
                            {
                                concept: "Naming Variables - Rules to Follow",
                                rules: [
                                    "1. Can contain letters, numbers, and underscore (_)",
                                    "2. Must START with a letter or underscore, NOT a number",
                                    "3. Cannot have spaces (use underscore instead)",
                                    "4. Names are CASE SENSITIVE: 'name' and 'Name' are different",
                                    "5. Use descriptive names (bad: 'x', good: 'student_age')"
                                ],
                                examples: [
                                    "✓ Good names: age, student_name, myNumber, _value, first_name",
                                    "✗ Bad names: 1stValue (starts with number), student age (has space), name! (has special character)"
                                ]
                            },
                            {
                                concept: "Creating & Using Variables",
                                python_examples: [
                                    "# Example 1: Simple variable",
                                    "age = 20",
                                    "print(age)  # Output: 20",
                                    "",
                                    "# Example 2: String variable",
                                    "name = 'Ravi'",
                                    "print(name)  # Output: Ravi",
                                    "",
                                    "# Example 3: Using variable in calculation",
                                    "salary = 50000",
                                    "bonus = 5000",
                                    "total = salary + bonus",
                                    "print(total)  # Output: 55000"
                                ]
                            },
                            {
                                concept: "Changing Variable Values",
                                explanation: "You can change what's stored in a variable anytime",
                                python_examples: [
                                    "name = 'Ravi'",
                                    "print(name)  # Output: Ravi",
                                    "name = 'Priya'  # Change the value",
                                    "print(name)  # Output: Priya"
                                ]
                            }
                        ]
                    },
                    {
                        id: 5,
                        title: "Data Types - Storing Different Kinds of Information",
                        description: "Learn about integers, floats, strings, and booleans",
                        completed: false,
                        hasResource: true,
                        data_types_detailed: [
                            {
                                type: "Integer (int)",
                                definition: "Whole numbers without decimals",
                                range: "-2,147,483,648 to 2,147,483,647",
                                memory: "Typically 4 bytes in memory",
                                examples: [
                                    "age = 25  # Good for storing age",
                                    "score = -10  # Can be negative",
                                    "students = 100  # Good for counting"
                                ],
                                when_to_use: "Counting, ages, scores, quantities"
                            },
                            {
                                type: "Float (float)",
                                definition: "Numbers with decimals",
                                range: "Very large to very small numbers",
                                memory: "Typically 4-8 bytes in memory",
                                examples: [
                                    "height = 5.9  # Storing height in meters",
                                    "temperature = -3.5  # Can be negative",
                                    "pi = 3.14159  # Mathematical values"
                                ],
                                when_to_use: "Measurements, calculations, scientific data"
                            },
                            {
                                type: "String (str)",
                                definition: "Text or sequence of characters",
                                range: "No fixed limit (depends on memory)",
                                memory: "Variable - 1 byte per character",
                                examples: [
                                    "name = 'Ravi'  # Storing text",
                                    "email = 'ravi@example.com'  # Email address",
                                    "message = 'Hello World'  # Any text"
                                ],
                                when_to_use: "Names, addresses, messages, any text"
                            },
                            {
                                type: "Boolean (bool)",
                                definition: "Can only be True or False",
                                range: "Only 2 values possible",
                                memory: "1 byte",
                                examples: [
                                    "is_student = True  # Person is a student",
                                    "is_active = False  # User is not active",
                                    "has_license = True  # Has driving license"
                                ],
                                when_to_use: "Yes/No decisions, flags, conditions"
                            }
                        ]
                    }
                ]
            },
            {
                id: 3,
                title: "Phase 2: Input & Output (Week 5)",
                subtitle: "Communicating with users",
                steps: [
                    {
                        id: 6,
                        title: "Printing Output (Display Information)",
                        description: "Show results on the screen",
                        completed: false,
                        hasResource: true,
                        content: [
                            {
                                topic: "Basic Print in Python",
                                description: "Use print() to display information",
                                examples: [
                                    "# Print simple text",
                                    "print('Hello World')",
                                    "print('My name is Ravi')",
                                    "",
                                    "# Print numbers",
                                    "print(42)",
                                    "print(3.14)",
                                    "",
                                    "# Print variables",
                                    "age = 20",
                                    "print(age)"
                                ]
                            },
                            {
                                topic: "Print Multiple Values",
                                description: "Print more than one value in one line",
                                examples: [
                                    "# Using commas",
                                    "name = 'Ravi'",
                                    "age = 20",
                                    "print('My name is', name, 'and I am', age, 'years old')",
                                    "# Output: My name is Ravi and I am 20 years old",
                                    "",
                                    "# Using f-strings (Python 3.6+) - PREFERRED",
                                    "print(f'My name is {name} and I am {age} years old')"
                                ]
                            }
                        ]
                    },
                    {
                        id: 7,
                        title: "Taking Input (Get Information from Users)",
                        description: "Read data that users type",
                        completed: false,
                        hasResource: true,
                        content: [
                            {
                                topic: "Basic Input in Python",
                                description: "Use input() to get user data",
                                examples: [
                                    "# Get text input",
                                    "name = input('What is your name? ')",
                                    "print(f'Hello {name}!')",
                                    "",
                                    "# NOTE: input() always returns TEXT (string)",
                                    "age_text = input('How old are you? ')",
                                    "print(age_text)  # This is text, not a number"
                                ]
                            },
                            {
                                topic: "Converting Input to Numbers",
                                description: "Change text input to numbers for calculations",
                                examples: [
                                    "# Get age as number",
                                    "age_text = input('How old are you? ')",
                                    "age = int(age_text)  # Convert to integer",
                                    "next_year = age + 1",
                                    "print(f'Next year you will be {next_year}')",
                                    "",
                                    "# Get height as decimal",
                                    "height_text = input('What is your height in meters? ')",
                                    "height = float(height_text)  # Convert to float"
                                ]
                            },
                            {
                                topic: "Complete Example Program",
                                description: "A program that gets input and calculates",
                                example_code: [
                                    "# Simple Calculator",
                                    "print('=== Simple Calculator ===')",
                                    "num1_text = input('Enter first number: ')",
                                    "num2_text = input('Enter second number: ')",
                                    "",
                                    "# Convert to numbers",
                                    "num1 = float(num1_text)",
                                    "num2 = float(num2_text)",
                                    "",
                                    "# Calculate",
                                    "sum_result = num1 + num2",
                                    "product = num1 * num2",
                                    "",
                                    "# Display results",
                                    "print(f'{num1} + {num2} = {sum_result}')",
                                    "print(f'{num1} × {num2} = {product}')"
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                id: 4,
                title: "Phase 3: Operators & Expressions (Week 6)",
                subtitle: "Performing calculations and comparisons",
                steps: [
                    {
                        id: 8,
                        title: "Arithmetic Operators (Math Operations)",
                        description: "Addition, subtraction, multiplication, division",
                        completed: false,
                        hasResource: true,
                        operators: [
                            {
                                symbol: "+",
                                name: "Addition",
                                description: "Add two numbers",
                                examples: [
                                    "5 + 3  # Result: 8",
                                    "10 + 2.5  # Result: 12.5",
                                    "'hello' + 'world'  # Result: 'helloworld' (string concatenation)"
                                ]
                            },
                            {
                                symbol: "-",
                                name: "Subtraction",
                                description: "Subtract one number from another",
                                examples: [
                                    "10 - 3  # Result: 7",
                                    "5.5 - 2.2  # Result: 3.3",
                                    "3 - 10  # Result: -7 (can be negative)"
                                ]
                            },
                            {
                                symbol: "*",
                                name: "Multiplication",
                                description: "Multiply two numbers",
                                examples: [
                                    "5 * 3  # Result: 15",
                                    "2.5 * 4  # Result: 10.0",
                                    "'a' * 3  # Result: 'aaa' (repeats string)"
                                ]
                            },
                            {
                                symbol: "/",
                                name: "Division",
                                description: "Divide one number by another (result is always float)",
                                examples: [
                                    "10 / 2  # Result: 5.0",
                                    "7 / 2  # Result: 3.5",
                                    "1 / 3  # Result: 0.333..."
                                ]
                            },
                            {
                                symbol: "//",
                                name: "Floor Division",
                                description: "Divide and round down to nearest whole number",
                                examples: [
                                    "10 // 3  # Result: 3 (not 3.33...)",
                                    "7 // 2  # Result: 3",
                                    "-7 // 2  # Result: -4"
                                ]
                            },
                            {
                                symbol: "%",
                                name: "Modulus (Remainder)",
                                description: "Get the remainder after division",
                                examples: [
                                    "10 % 3  # Result: 1 (10 divided by 3 is 3 remainder 1)",
                                    "7 % 2  # Result: 1 (7 divided by 2 is 3 remainder 1)",
                                    "10 % 5  # Result: 0 (divides perfectly)"
                                ],
                                use_case: "Check if number is even (num % 2 == 0) or odd (num % 2 == 1)"
                            },
                            {
                                symbol: "**",
                                name: "Exponentiation (Power)",
                                description: "Raise a number to a power",
                                examples: [
                                    "2 ** 3  # Result: 8 (2 to the power 3)",
                                    "5 ** 2  # Result: 25 (5 squared)",
                                    "10 ** 0  # Result: 1 (anything to power 0 is 1)"
                                ]
                            }
                        ]
                    },
                    {
                        id: 9,
                        title: "Comparison Operators (Comparing Values)",
                        description: "Compare two values and get True or False",
                        completed: false,
                        hasResource: true,
                        operators: [
                            {
                                symbol: "==",
                                name: "Equal to",
                                description: "Check if two values are equal",
                                examples: [
                                    "5 == 5  # Result: True",
                                    "5 == 3  # Result: False",
                                    "'hello' == 'hello'  # Result: True"
                                ]
                            },
                            {
                                symbol: "!=",
                                name: "Not equal to",
                                description: "Check if two values are different",
                                examples: [
                                    "5 != 3  # Result: True (they are different)",
                                    "5 != 5  # Result: False (they are the same)"
                                ]
                            },
                            {
                                symbol: ">",
                                name: "Greater than",
                                description: "Check if left is greater than right",
                                examples: [
                                    "10 > 5  # Result: True",
                                    "3 > 5  # Result: False",
                                    "5 > 5  # Result: False (they are equal)"
                                ]
                            },
                            {
                                symbol: "<",
                                name: "Less than",
                                description: "Check if left is less than right",
                                examples: [
                                    "3 < 5  # Result: True",
                                    "10 < 5  # Result: False",
                                    "5 < 5  # Result: False"
                                ]
                            },
                            {
                                symbol: ">=",
                                name: "Greater than or equal",
                                description: "Check if left is greater than or equal to right",
                                examples: [
                                    "5 >= 5  # Result: True (equal counts)",
                                    "10 >= 5  # Result: True",
                                    "3 >= 5  # Result: False"
                                ]
                            },
                            {
                                symbol: "<=",
                                name: "Less than or equal",
                                description: "Check if left is less than or equal to right",
                                examples: [
                                    "5 <= 5  # Result: True (equal counts)",
                                    "3 <= 5  # Result: True",
                                    "10 <= 5  # Result: False"
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                id: 5,
                title: "Phase 4: Control Flow - IF Statements (Week 7-8)",
                subtitle: "Making decisions in your code",
                steps: [
                    {
                        id: 10,
                        title: "If Statement (Simple Decision)",
                        description: "Execute code only if a condition is true",
                        completed: false,
                        hasResource: true,
                        content: [
                            {
                                concept: "What is an If Statement?",
                                explanation: "An if statement lets your program make decisions. If something is true, do this; otherwise skip it.",
                                real_world: "Real life: If it's raining, take an umbrella. If it's not raining, don't take one.",
                                syntax: [
                                    "if condition:",
                                    "    # code here runs only if condition is True",
                                    "    statement1",
                                    "    statement2"
                                ]
                            },
                            {
                                concept: "If-Else Statement",
                                explanation: "Do one thing if condition is true, else do something different",
                                real_world: "Real life: If I pass the exam, I'm happy; else I'm sad.",
                                syntax: [
                                    "if condition:",
                                    "    # runs if condition is True",
                                    "else:",
                                    "    # runs if condition is False"
                                ],
                                examples: [
                                    "age = 18",
                                    "if age >= 18:",
                                    "    print('You are an adult')",
                                    "else:",
                                    "    print('You are a minor')",
                                    "# Output: You are an adult"
                                ]
                            },
                            {
                                concept: "If-Elif-Else Statement",
                                explanation: "Multiple conditions to check, one will execute",
                                real_world: "Real life: If score > 90, you get A; elif score > 80, you get B; elif score > 70, you get C; else you fail.",
                                syntax: [
                                    "if condition1:",
                                    "    # runs if condition1 is True",
                                    "elif condition2:",
                                    "    # runs if condition1 is False AND condition2 is True",
                                    "elif condition3:",
                                    "    # runs if condition1, condition2 False AND condition3 True",
                                    "else:",
                                    "    # runs if all conditions are False"
                                ],
                                examples: [
                                    "score = 85",
                                    "if score >= 90:",
                                    "    grade = 'A'",
                                    "elif score >= 80:",
                                    "    grade = 'B'",
                                    "elif score >= 70:",
                                    "    grade = 'C'",
                                    "else:",
                                    "    grade = 'F'",
                                    "print(f'Your grade is: {grade}')"
                                ]
                            },
                            {
                                concept: "Nested If Statements",
                                explanation: "If statements inside other if statements (for complex conditions)",
                                example_code: [
                                    "age = 25",
                                    "has_license = True",
                                    "",
                                    "if age >= 18:",
                                    "    print('You are old enough to drive')",
                                    "    if has_license:",
                                    "        print('You have a license - you can drive!')",
                                    "    else:",
                                    "        print('You need to get a license')",
                                    "else:",
                                    "    print('You are too young to drive')"
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                id: 6,
                title: "Phase 5: Loops (Week 9-10)",
                subtitle: "Repeating code multiple times",
                steps: [
                    {
                        id: 11,
                        title: "For Loop (Repeat a Fixed Number of Times)",
                        description: "Execute code multiple times",
                        completed: false,
                        hasResource: true,
                        content: [
                            {
                                concept: "What is a For Loop?",
                                explanation: "A for loop repeats a block of code a specific number of times",
                                real_world: "Real life: Print 'Hello' 5 times. Without a loop you'd write 5 print statements. With a loop, write once!",
                                when_to_use: "When you know exactly how many times to repeat"
                            },
                            {
                                concept: "For Loop with Range",
                                syntax: [
                                    "for i in range(5):",
                                    "    # This block runs 5 times (i goes from 0 to 4)",
                                    "    print(i)"
                                ],
                                explanation: "range(5) means start at 0 and go up to (but not including) 5",
                                examples: [
                                    "# Print 1 to 5",
                                    "for i in range(1, 6):  # 1 to 5 (6 not included)",
                                    "    print(i)",
                                    "# Output: 1, 2, 3, 4, 5",
                                    "",
                                    "# Print with step",
                                    "for i in range(0, 10, 2):  # 0, 2, 4, 6, 8",
                                    "    print(i)",
                                    "# Output: 0, 2, 4, 6, 8"
                                ]
                            },
                            {
                                concept: "For Loop with List",
                                syntax: [
                                    "for item in list:",
                                    "    # This block runs once for each item in the list"
                                ],
                                examples: [
                                    "fruits = ['apple', 'banana', 'orange']",
                                    "for fruit in fruits:",
                                    "    print(fruit)",
                                    "# Output: apple, banana, orange",
                                    "",
                                    "numbers = [10, 20, 30, 40]",
                                    "for num in numbers:",
                                    "    print(num * 2)",
                                    "# Output: 20, 40, 60, 80"
                                ]
                            }
                        ]
                    },
                    {
                        id: 12,
                        title: "While Loop (Repeat Until Condition is False)",
                        description: "Execute code as long as a condition is true",
                        completed: false,
                        hasResource: true,
                        content: [
                            {
                                concept: "What is a While Loop?",
                                explanation: "A while loop repeats code as long as a condition is true. It stops when the condition becomes false.",
                                real_world: "Real life: Keep eating while you are hungry. Stop when you're full.",
                                when_to_use: "When you don't know how many times to repeat (depends on a condition)"
                            },
                            {
                                concept: "Basic While Loop",
                                syntax: [
                                    "while condition:",
                                    "    # This block repeats while condition is True",
                                    "    # MUST change something to eventually make condition False"
                                ],
                                examples: [
                                    "# Count from 1 to 5",
                                    "count = 1",
                                    "while count <= 5:",
                                    "    print(count)",
                                    "    count = count + 1  # IMPORTANT: change the condition",
                                    "# Output: 1, 2, 3, 4, 5"
                                ],
                                warning: "DANGER: Infinite loop - if you don't change the condition, loop never stops!"
                            },
                            {
                                concept: "Break Statement (Exit Loop Early)",
                                explanation: "Stop the loop immediately when you need to",
                                examples: [
                                    "# Stop when we find a number",
                                    "count = 0",
                                    "while True:  # Infinite loop",
                                    "    print(count)",
                                    "    count += 1",
                                    "    if count == 5:",
                                    "        break  # Exit loop when count reaches 5"
                                ]
                            },
                            {
                                concept: "Continue Statement (Skip This Iteration)",
                                explanation: "Skip the current iteration and go to the next",
                                examples: [
                                    "# Skip even numbers",
                                    "for i in range(1, 6):",
                                    "    if i % 2 == 0:",
                                    "        continue  # Skip this iteration",
                                    "    print(i)",
                                    "# Output: 1, 3, 5 (skipped 2 and 4)"
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                id: 7,
                title: "Phase 6: Arrays & Lists (Week 11-12)",
                subtitle: "Storing multiple values",
                steps: [
                    {
                        id: 13,
                        title: "Understanding Arrays/Lists",
                        description: "Store multiple values in one variable",
                        completed: false,
                        hasResource: true,
                        content: [
                            {
                                concept: "What is a List/Array?",
                                explanation: "A list is a container that stores multiple values. Instead of having 5 variables for 5 numbers, use 1 list!",
                                analogy: "Like a row of boxes: Box 0 = 10, Box 1 = 20, Box 2 = 30",
                                visual: [
                                    "List: [10, 20, 30, 40, 50]",
                                    "Index:  0   1   2   3   4"
                                ],
                                why_needed: "Organize related data, easier to loop through, access by index"
                            },
                            {
                                concept: "Creating a List",
                                syntax: "list_name = [value1, value2, value3]",
                                examples: [
                                    "# List of numbers",
                                    "numbers = [10, 20, 30, 40]",
                                    "",
                                    "# List of strings",
                                    "fruits = ['apple', 'banana', 'orange']",
                                    "",
                                    "# Empty list (add items later)",
                                    "my_list = []",
                                    "",
                                    "# Mixed types (not recommended)",
                                    "mixed = [10, 'hello', 3.14, True]"
                                ]
                            },
                            {
                                concept: "Accessing List Elements (Indexing)",
                                explanation: "Get a specific value from the list using its position (index)",
                                important: "INDEXING STARTS AT 0, not 1!",
                                examples: [
                                    "fruits = ['apple', 'banana', 'orange']",
                                    "print(fruits[0])  # Output: apple (first item)",
                                    "print(fruits[1])  # Output: banana (second item)",
                                    "print(fruits[2])  # Output: orange (third item)",
                                    "print(fruits[3])  # ERROR! Index out of range",
                                    "",
                                    "# Negative indexing (from the end)",
                                    "print(fruits[-1])  # Output: orange (last item)",
                                    "print(fruits[-2])  # Output: banana (second to last)"
                                ]
                            },
                            {
                                concept: "Modifying List Elements",
                                explanation: "Change values in a list",
                                examples: [
                                    "numbers = [10, 20, 30]",
                                    "numbers[0] = 15  # Change first element",
                                    "print(numbers)  # Output: [15, 20, 30]",
                                    "",
                                    "numbers[2] = 100  # Change third element",
                                    "print(numbers)  # Output: [15, 20, 100]"
                                ]
                            },
                            {
                                concept: "Adding Items to a List",
                                explanation: "Append (add to end) or insert at specific position",
                                methods: [
                                    {
                                        name: "append()",
                                        description: "Add to the end",
                                        syntax: "list.append(value)",
                                        example: [
                                            "fruits = ['apple', 'banana']",
                                            "fruits.append('orange')",
                                            "print(fruits)  # Output: ['apple', 'banana', 'orange']"
                                        ]
                                    },
                                    {
                                        name: "insert()",
                                        description: "Insert at specific position",
                                        syntax: "list.insert(index, value)",
                                        example: [
                                            "fruits = ['apple', 'orange']",
                                            "fruits.insert(1, 'banana')  # Insert at position 1",
                                            "print(fruits)  # Output: ['apple', 'banana', 'orange']"
                                        ]
                                    }
                                ]
                            },
                            {
                                concept: "Removing Items from a List",
                                explanation: "Delete values from a list",
                                methods: [
                                    {
                                        name: "remove()",
                                        description: "Remove by value",
                                        syntax: "list.remove(value)",
                                        example: [
                                            "fruits = ['apple', 'banana', 'orange']",
                                            "fruits.remove('banana')",
                                            "print(fruits)  # Output: ['apple', 'orange']"
                                        ]
                                    },
                                    {
                                        name: "pop()",
                                        description: "Remove by index (default: last item)",
                                        syntax: "list.pop(index)",
                                        example: [
                                            "fruits = ['apple', 'banana', 'orange']",
                                            "fruits.pop()  # Remove last item",
                                            "print(fruits)  # Output: ['apple', 'banana']",
                                            "",
                                            "fruits.pop(0)  # Remove first item",
                                            "print(fruits)  # Output: ['banana']"
                                        ]
                                    }
                                ]
                            },
                            {
                                concept: "Looping Through a List",
                                explanation: "Process each item in the list",
                                examples: [
                                    "# Using for loop",
                                    "fruits = ['apple', 'banana', 'orange']",
                                    "for fruit in fruits:",
                                    "    print(f'I like {fruit}')",
                                    "",
                                    "# Using index",
                                    "for i in range(len(fruits)):",
                                    "    print(f'{i}: {fruits[i]}')"
                                ]
                            }
                        ]
                    },
                    {
                        id: 14,
                        title: "List Operations & Methods",
                        description: "Useful operations you can do with lists",
                        completed: false,
                        hasResource: true,
                        operations: [
                            {
                                name: "len() - Get List Length",
                                description: "Find how many items in a list",
                                examples: [
                                    "fruits = ['apple', 'banana', 'orange']",
                                    "print(len(fruits))  # Output: 3"
                                ]
                            },
                            {
                                name: "sort() - Sort a List",
                                description: "Arrange items in order",
                                examples: [
                                    "numbers = [30, 10, 20]",
                                    "numbers.sort()",
                                    "print(numbers)  # Output: [10, 20, 30]",
                                    "",
                                    "# Reverse order",
                                    "numbers.sort(reverse=True)",
                                    "print(numbers)  # Output: [30, 20, 10]"
                                ]
                            },
                            {
                                name: "count() - Count Occurrences",
                                description: "Count how many times a value appears",
                                examples: [
                                    "numbers = [1, 2, 2, 3, 2, 4]",
                                    "print(numbers.count(2))  # Output: 3"
                                ]
                            },
                            {
                                name: "index() - Find Position",
                                description: "Find the index of a value",
                                examples: [
                                    "fruits = ['apple', 'banana', 'orange']",
                                    "print(fruits.index('banana'))  # Output: 1"
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                id: 8,
                title: "Phase 7: Strings (Week 13)",
                subtitle: "Working with text",
                steps: [
                    {
                        id: 15,
                        title: "Understanding Strings",
                        description: "Strings are sequences of characters",
                        completed: false,
                        hasResource: true,
                        content: [
                            {
                                concept: "What is a String?",
                                explanation: "A string is any text enclosed in quotes. It's a sequence of characters.",
                                examples: [
                                    "name = 'Ravi'",
                                    "message = 'Hello World'",
                                    "email = 'ravi@example.com'",
                                    "sentence = 'Python is awesome!'",
                                    "",
                                    "# You can use single or double quotes",
                                    "s1 = 'Hello'",
                                    "s2 = \"Hello\"  # Same thing"
                                ]
                            },
                            {
                                concept: "String Indexing (Accessing Characters)",
                                explanation: "Get individual characters from a string by position",
                                examples: [
                                    "word = 'Python'",
                                    "print(word[0])  # Output: P",
                                    "print(word[1])  # Output: y",
                                    "print(word[5])  # Output: n",
                                    "",
                                    "# Negative indexing",
                                    "print(word[-1])  # Output: n (last character)",
                                    "print(word[-2])  # Output: o (second to last)"
                                ]
                            },
                            {
                                concept: "String Slicing (Get Substring)",
                                explanation: "Extract a portion of a string",
                                syntax: "string[start:end]  # end not included",
                                examples: [
                                    "word = 'Python'",
                                    "print(word[0:2])  # Output: Py (characters 0 and 1)",
                                    "print(word[2:5])  # Output: tho (characters 2, 3, 4)",
                                    "print(word[:3])  # Output: Pyt (from start to position 3)",
                                    "print(word[3:])  # Output: hon (from position 3 to end)"
                                ]
                            },
                            {
                                concept: "String Concatenation (Joining Strings)",
                                explanation: "Combine multiple strings into one",
                                examples: [
                                    "first = 'Hello'",
                                    "second = 'World'",
                                    "result = first + ' ' + second",
                                    "print(result)  # Output: Hello World"
                                ]
                            },
                            {
                                concept: "String Methods (Built-in Functions)",
                                explanation: "Python has many useful string methods",
                                methods: [
                                    {
                                        name: "len()",
                                        description: "Get the length (number of characters)",
                                        example: "len('Python')  # Output: 6"
                                    },
                                    {
                                        name: "upper()",
                                        description: "Convert to uppercase",
                                        example: "'hello'.upper()  # Output: 'HELLO'"
                                    },
                                    {
                                        name: "lower()",
                                        description: "Convert to lowercase",
                                        example: "'HELLO'.lower()  # Output: 'hello'"
                                    },
                                    {
                                        name: "replace()",
                                        description: "Replace text",
                                        example: "'hello world'.replace('world', 'python')  # Output: 'hello python'"
                                    },
                                    {
                                        name: "split()",
                                        description: "Split string into list",
                                        example: "'apple,banana,orange'.split(',')  # Output: ['apple', 'banana', 'orange']"
                                    },
                                    {
                                        name: "strip()",
                                        description: "Remove spaces from ends",
                                        example: "'  hello  '.strip()  # Output: 'hello'"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                id: 9,
                title: "Phase 8: Functions (Week 14-15)",
                subtitle: "Reusable blocks of code",
                steps: [
                    {
                        id: 16,
                        title: "Understanding Functions",
                        description: "Write code once, use it many times",
                        completed: false,
                        hasResource: true,
                        content: [
                            {
                                concept: "What is a Function?",
                                explanation: "A function is a reusable block of code that performs a specific task",
                                analogy: "Like a recipe: you follow the same steps multiple times to make the same dish",
                                why_needed: "Avoid repeating code, organize code, make it easier to test"
                            },
                            {
                                concept: "Creating a Simple Function",
                                syntax: [
                                    "def function_name():",
                                    "    # Code that runs when function is called",
                                    "    print('This is my function')"
                                ],
                                examples: [
                                    "# Define a function",
                                    "def greet():",
                                    "    print('Hello, welcome!')",
                                    "",
                                    "# Call (use) the function",
                                    "greet()  # Output: Hello, welcome!",
                                    "greet()  # Can call it multiple times",
                                    "greet()"
                                ]
                            },
                            {
                                concept: "Functions with Parameters (Inputs)",
                                explanation: "Pass information to the function",
                                syntax: [
                                    "def function_name(parameter1, parameter2):",
                                    "    # Use the parameters",
                                    "    print(parameter1)"
                                ],
                                examples: [
                                    "# Function with one parameter",
                                    "def greet(name):",
                                    "    print(f'Hello, {name}!')",
                                    "",
                                    "greet('Ravi')  # Output: Hello, Ravi!",
                                    "greet('Priya')  # Output: Hello, Priya!",
                                    "",
                                    "# Function with multiple parameters",
                                    "def add(a, b):",
                                    "    result = a + b",
                                    "    print(result)",
                                    "",
                                    "add(5, 3)  # Output: 8",
                                    "add(10, 20)  # Output: 30"
                                ]
                            },
                            {
                                concept: "Functions with Return Values (Outputs)",
                                explanation: "Functions can return a value back to the caller",
                                syntax: [
                                    "def function_name():",
                                    "    # Do something",
                                    "    return result"
                                ],
                                examples: [
                                    "# Function that returns a value",
                                    "def multiply(a, b):",
                                    "    result = a * b",
                                    "    return result",
                                    "",
                                    "answer = multiply(5, 3)",
                                    "print(answer)  # Output: 15",
                                    "",
                                    "# More useful example",
                                    "def convert_fahrenheit_to_celsius(f):",
                                    "    celsius = (f - 32) * 5/9",
                                    "    return celsius",
                                    "",
                                    "temp_c = convert_fahrenheit_to_celsius(32)",
                                    "print(temp_c)  # Output: 0.0"
                                ]
                            },
                            {
                                concept: "Parameters with Default Values",
                                explanation: "Set default values if parameter not provided",
                                examples: [
                                    "def greet(name='Friend'):",
                                    "    print(f'Hello, {name}!')",
                                    "",
                                    "greet()  # Output: Hello, Friend!",
                                    "greet('Ravi')  # Output: Hello, Ravi!"
                                ]
                            },
                            {
                                concept: "Complete Example",
                                description: "A practical function",
                                example_code: [
                                    "# Calculate average of three numbers",
                                    "def calculate_average(num1, num2, num3):",
                                    "    total = num1 + num2 + num3",
                                    "    average = total / 3",
                                    "    return average",
                                    "",
                                    "# Use the function",
                                    "avg1 = calculate_average(80, 90, 85)",
                                    "print(f'Average: {avg1}')  # Output: Average: 85.0"
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },

    webdev: {
        cardTitle: "Web Development Basics",
        roadmapTitle: "Web Development for Complete Beginners",
        icon: "💻",
        color: "#00FFA3",
        description: "Learn to build websites from scratch. Start with HTML basics, then CSS for styling, then JavaScript for interactivity.",
        sections: [
            {
                id: 1,
                title: "Phase 1: HTML Basics (Week 1-3)",
                subtitle: "The structure of websites",
                steps: [
                    {
                        id: 1,
                        title: "Understanding HTML",
                        description: "The foundation of all websites",
                        completed: false,
                        hasResource: true,
                        content: [
                            {
                                concept: "What is HTML?",
                                full_name: "HyperText Markup Language",
                                explanation: "HTML is the language used to create the structure and content of web pages",
                                analogy: "If a website is a house, HTML is the structure (walls, roof, rooms)",
                                what_it_does: "Tells the browser: This is a heading, this is a paragraph, this is an image, this is a link"
                            },
                            {
                                concept: "HTML Tags",
                                explanation: "Tags are commands enclosed in angle brackets < > that tell the browser what to display",
                                structure: "Most tags come in pairs: <tag> content </tag>",
                                examples: [
                                    "<h1>This is a heading</h1>",
                                    "<p>This is a paragraph</p>",
                                    "<a href='...'>This is a link</a>"
                                ]
                            },
                            {
                                concept: "Basic HTML Document Structure",
                                syntax: [
                                    "<!DOCTYPE html>",
                                    "<html>",
                                    "    <head>",
                                    "        <title>Page Title</title>",
                                    "    </head>",
                                    "    <body>",
                                    "        <!-- Content here -->",
                                    "    </body>",
                                    "</html>"
                                ],
                                explanation_parts: [
                                    "<!DOCTYPE html> - Tells browser this is HTML5",
                                    "<html> - Root tag that wraps everything",
                                    "<head> - Contains invisible information (title, metadata)",
                                    "<title> - What shows in browser tab",
                                    "<body> - Contains visible content (what user sees)"
                                ]
                            }
                        ]
                    },
                    {
                        id: 2,
                        title: "Common HTML Tags (Content)",
                        description: "Tags you'll use most frequently",
                        completed: false,
                        hasResource: true,
                        tags: [
                            {
                                tag: "<h1> to <h6>",
                                name: "Headings",
                                description: "Create headings of different sizes (h1 is largest, h6 is smallest)",
                                examples: [
                                    "<h1>Main Title</h1>",
                                    "<h2>Subtitle</h2>",
                                    "<h3>Section</h3>"
                                ]
                            },
                            {
                                tag: "<p>",
                                name: "Paragraph",
                                description: "Create a paragraph of text",
                                examples: [
                                    "<p>This is a paragraph. It can contain multiple sentences.</p>"
                                ]
                            },
                            {
                                tag: "<br>",
                                name: "Line Break",
                                description: "Insert a line break (single tag, no closing)",
                                examples: [
                                    "Line 1<br>",
                                    "Line 2"
                                ]
                            },
                            {
                                tag: "<a>",
                                name: "Hyperlink",
                                description: "Create a clickable link",
                                examples: [
                                    "<a href='https://google.com'>Click here</a>",
                                    "<a href='page2.html'>Go to page 2</a>"
                                ]
                            },
                            {
                                tag: "<img>",
                                name: "Image",
                                description: "Display an image",
                                examples: [
                                    "<img src='photo.jpg' alt='My photo'>",
                                    "<img src='logo.png' alt='Company logo'>"
                                ]
                            },
                            {
                                tag: "<ul> <li>",
                                name: "Unordered List",
                                description: "Create a bullet list",
                                examples: [
                                    "<ul>",
                                    "  <li>Item 1</li>",
                                    "  <li>Item 2</li>",
                                    "  <li>Item 3</li>",
                                    "</ul>"
                                ]
                            },
                            {
                                tag: "<ol> <li>",
                                name: "Ordered List",
                                description: "Create a numbered list",
                                examples: [
                                    "<ol>",
                                    "  <li>First</li>",
                                    "  <li>Second</li>",
                                    "  <li>Third</li>",
                                    "</ol>"
                                ]
                            },
                            {
                                tag: "<div>",
                                name: "Division/Container",
                                description: "Group content together (invisible container)",
                                examples: [
                                    "<div>",
                                    "  <h2>Section Title</h2>",
                                    "  <p>Content here</p>",
                                    "</div>"
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                id: 2,
                title: "Phase 2: CSS Basics (Week 4-6)",
                subtitle: "Making websites look beautiful",
                steps: [
                    {
                        id: 3,
                        title: "Understanding CSS",
                        description: "The styling language for websites",
                        completed: false,
                        hasResource: true,
                        content: [
                            {
                                concept: "What is CSS?",
                                full_name: "Cascading Style Sheets",
                                explanation: "CSS controls how HTML elements look (colors, sizes, spacing, layout)",
                                analogy: "If HTML is the house structure, CSS is the paint, furniture, and decoration",
                                what_it_does: "Make websites beautiful, position elements, change colors, add animations"
                            },
                            {
                                concept: "CSS Syntax",
                                explanation: "How CSS commands are written",
                                syntax: [
                                    "selector {",
                                    "  property: value;",
                                    "  property: value;",
                                    "}"
                                ],
                                example: [
                                    "h1 {",
                                    "  color: blue;",
                                    "  font-size: 32px;",
                                    "}"
                                ],
                                explained: "This makes all h1 headings blue and 32 pixels big"
                            }
                        ]
                    },
                    {
                        id: 4,
                        title: "Common CSS Properties",
                        description: "Properties to style your HTML",
                        completed: false,
                        hasResource: true,
                        properties: [
                            {
                                property: "color",
                                description: "Change text color",
                                examples: ["color: red;", "color: #FF0000;", "color: rgb(255,0,0);"]
                            },
                            {
                                property: "font-size",
                                description: "Change text size",
                                examples: ["font-size: 20px;", "font-size: 1.5em;"]
                            },
                            {
                                property: "font-family",
                                description: "Change font type",
                                examples: ["font-family: Arial;", "font-family: 'Times New Roman';"]
                            },
                            {
                                property: "background-color",
                                description: "Change background color",
                                examples: ["background-color: yellow;", "background-color: #FFFF00;"]
                            },
                            {
                                property: "padding",
                                description: "Space inside an element",
                                examples: ["padding: 10px;", "padding: 10px 20px;"]
                            },
                            {
                                property: "margin",
                                description: "Space outside an element",
                                examples: ["margin: 10px;", "margin: 0 auto;"]
                            },
                            {
                                property: "border",
                                description: "Add a border",
                                examples: ["border: 2px solid black;", "border: 1px dashed red;"]
                            },
                            {
                                property: "width",
                                description: "Set element width",
                                examples: ["width: 200px;", "width: 50%;"]
                            },
                            {
                                property: "height",
                                description: "Set element height",
                                examples: ["height: 100px;", "height: auto;"]
                            }
                        ]
                    }
                ]
            }
        ]
    }
};

// Create a safe accessor that returns a default placeholder for missing keys
const initialRoadmapsData = new Proxy(rawRoadmapsData, {
    get(target, prop, receiver) {
        if (typeof prop === 'symbol') {
            return Reflect.get(target, prop, receiver);
        }
        if (prop in target) {
            return Reflect.get(target, prop, receiver);
        }
        return {
            cardTitle: "Coming Soon",
            roadmapTitle: "Coming Soon",
            icon: "📘",
            color: "#9CA3AF",
            description: "Content will be added soon.",
            sections: []
        };
    }
});

// Export the ultra detailed data
export { initialRoadmapsData };
