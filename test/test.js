// test/test.js
const { assert } = require('chai'); // Import the assert function from chai
const multiply = require('../multiply'); // Import the multiply function

describe('Multiply Function', () => {
    it('should return 1 when multiplying 1 and 1', () => {
        assert.equal(multiply(1, 1), 1); // Test case 1
    });

    it('should return 4 when multiplying 2 and 2', () => {
        assert.equal(multiply(2, 2), 4); // Test case 2
    });

    it('should return 9 when multiplying 3 and 3', () => {
        assert.equal(multiply(3, 3), 9); // Test case 3
    });

    it('should return 16 when multiplying 4 and 4', () => {
        assert.equal(multiply(4, 4), 16); // Test case 4
    });

    it('should return 1035 when multiplying 23 and 45', () => {
        assert.equal(multiply(23, 45), 1035); // Test case 5
    });
});
