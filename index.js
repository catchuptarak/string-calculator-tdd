const add = require('./functions/stringCalculator');

function performAdd(description, input, expectedOutput) {
  try {
    const result = add(input);
    if (result === expectedOutput) {
      console.log(`✅ ${description}: Passed`);
    } else {
      console.error(`❌ ${description}: Failed (Expected: ${expectedOutput}, Got: ${result})`);
    }
  } catch (error) {
    console.error(`❌ ${description}: Failed with error: ${error.message}`);
  }
}

// Executions
performAdd("Empty string returns 0", "", 0);
performAdd("Single number '1' returns 1", "1", 1);
performAdd("Two numbers '1,2' return 3", "1,2", 3);
performAdd("Multiple numbers '1,2,3,4' return 10", "1,2,3,4", 10);
performAdd("Handles new lines between numbers '1\\n2,3' returns 6", "1\n2,3", 6);
performAdd("Supports custom delimiter '//;\\n1;2' returns 3", "//;\n1;2", 3);
performAdd("Negative numbers throw error", "1,-2,3,-4", null);
