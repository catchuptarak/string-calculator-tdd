const add = require('./functions/stringCalculator');

// Get input from the command line
const input = process.argv[2]; // The third argument is the user input

try {
  const result = add(input || ""); // Default to empty string if no input is provided
  console.log(`Result: ${result}`);
} catch (error) {
  console.error(`Error: ${error.message}`);
}
