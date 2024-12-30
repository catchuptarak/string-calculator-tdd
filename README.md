# String Calculator - Test Driven Development (TDD)

This project demonstrates the String Calculator implementation using Test-Driven Development (TDD) principles. It handles string inputs containing numbers, processes them according to specific rules, and returns the calculated sum. The project includes automated tests, command-line functionality, and customizable delimiters.

# Features

Basic Functionality: Returns the sum of comma-separated numbers in a string.
Newline Handling: Supports newlines (\n) as delimiters in addition to commas.
Custom Delimiters: Allows specifying custom delimiters.
Exception Handling: Throws exceptions for negative numbers, listing all invalid values.
Scalable Testing: Automated testing using Jest.

# Project Structure

├── functions/                    # Contains core logic
│   └── stringCalculator.js        # The main logic of the string calculator
├── test/                         # Contains Jest test cases
│   └── stringCalculator.test.js   # Unit tests for the string calculator
├── index.js                      # Predefined test cases for testing
├── command.js                    # Command-line script for testing
├── package.json                  # Project configuration and dependencies


# Prerequisites

Node.js (v14+ recommended)
npm (v7+ recommended)

# Installation

1.Clone the repository:
git clone <https://github.com/catchuptarak/string-calculator-tdd.git>
cd string-calculator-tdd

2.Install dependencies:
`npm install`

# Scripts

1. Run Tests
   Execute all unit tests using Jest:

   `npm test`

![npm run test demo]('./assets/images/test.png')

2. Command-Line Input
   Test specific input directly using the command script:

`npm run command`

`npm run command -- "1,2,3"`

![npm run command demo]('./assets/images/command.png')


3. Start the App
   Run the index.js file to interact with the String Calculator manually:

`npm start`

![npm run start demo]('./assets/images/execution.png')