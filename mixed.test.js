const assert = require('assert');
// Import
const {
    factorialIterative,     
    factorialRecursive,     
    factorialTailRecursive, 
    factorialReduce         
} = require('./mixed'); // Import all methods from the factorial.js file

// Define common test cases for factorial functions
const testCases = [
    { input: 0, expected: 1 },          
    { input: 1, expected: 1 },          
    { input: 5, expected: 120 },        
    { input: 10, expected: 3628800 }    
];

// Iterative Factorial Tests
describe('Factorial (Iterative Method)', () => {
    testCases.forEach(({ input, expected }) => {
        it(`should return ${expected} for factorialIterative(${input})`, () => {
            assert.strictEqual(factorialIterative(input), expected);
        });
    });

    // Test for negative input
    it('should throw an error for negative input', () => {
        assert.throws(() => factorialIterative(-1), /Input must be a non-negative integer/);
    });
});

// Recursive Factorial Tests
describe('Factorial (Recursive Method)', () => {
    testCases.forEach(({ input, expected }) => {
        it(`should return ${expected} for factorialRecursive(${input})`, () => {
            assert.strictEqual(factorialRecursive(input), expected);
        });
    });

    // Test for negative input
    it('should throw an error for negative input', () => {
        assert.throws(() => factorialRecursive(-1), /Input must be a non-negative integer/);
    });
});

// Tail-Recursive Factorial Tests
describe('Factorial (Tail-Recursive Method)', () => {
    testCases.forEach(({ input, expected }) => {
        it(`should return ${expected} for factorialTailRecursive(${input})`, () => {
            assert.strictEqual(factorialTailRecursive(input), expected);
        });
    });

    // Test for negative input
    it('should throw an error for negative input', () => {
        assert.throws(() => factorialTailRecursive(-1), /Input must be a non-negative integer/);
    });
});

// Reduce-based Factorial Tests
describe('Factorial (Reduce Method)', () => {
    testCases.forEach(({ input, expected }) => {
        it(`should return ${expected} for factorialReduce(${input})`, () => {
            assert.strictEqual(factorialReduce(input), expected);
        });
    });

    // Test for negative input
    it('should throw an error for negative input', () => {
        assert.throws(() => factorialReduce(-1), /Input must be a non-negative integer/);
    });
});
