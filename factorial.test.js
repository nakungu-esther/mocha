// Factorial.test.js
const assert = require('assert');
const { factorial } = require('./Factorial');

try {
    // Test  factorial(0)
    assert.strictEqual(factorial(0), 1, 'factorial(0) should return 1');
    
    // Test  factorial(1)
    assert.strictEqual(factorial(1), 1, 'factorial(1) should return 1');

    // Test  factorial(2)
    assert.strictEqual(factorial(2), 2, 'factorial(2) should return 2');

    // Test  factorial(3)
    assert.strictEqual(factorial(3), 6, 'factorial(3) should return 6');

    // Test  factorial(5)
    assert.strictEqual(factorial(5), 120, 'factorial(5) should return 120');

    // Test  factorial(10)
    assert.strictEqual(factorial(10), 3628800, 'factorial(10) should return 3628800');

    

    console.log('All tests passed!');
} catch (error) {
    console.error('Test failed:', error.message);
}
