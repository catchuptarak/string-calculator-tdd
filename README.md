# String Calculator - Test Driven Development (TDD)

This project demonstrates the String Calculator implementation using Test-Driven Development (TDD) principles. It handles string inputs containing numbers, processes them according to specific rules, and returns the calculated sum. The project includes automated tests, command-line functionality, and customizable delimiters.

# Features

Basic Functionality: Returns the sum of comma-separated numbers in a string.
Newline Handling: Supports newlines (\n) as delimiters in addition to commas.
Custom Delimiters: Allows specifying custom delimiters.
Exception Handling: Throws exceptions for negative numbers, listing all invalid values.
Scalable Testing: Automated testing using Jest.

# Project Structure

├── functions/
│ └── stringCalculator.js # Core logic for the String Calculator
├── test/
│ └── stringCalculator.test.js # Unit tests for the String Calculator
├── index.js # Main entry point for testing and demonstration
├── command.js # Script for command-line testing
├── README.md # Project documentation
├── package.json # Project configuration

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

2. Start the App
   Run the index.js file to interact with the String Calculator manually:

`npm start`

3. Command-Line Input
   Test specific input directly using the command script:

`npm run command`

`npm run command -- "1,2,3"`
