// test/test.js
const chai = require('chai');
const expect = chai.expect;
const multiply = require('../multiply');

describe('Multiply Function', () => {
    it('should return 1 when multiplying 1 and 1', () => {
        expect(multiply(1, 1)).to.equal(1);
    });
});
// test/test.js
it('should return 4 when multiplying 2 and 2', () => {
    expect(multiply(2, 2)).to.equal(4);
});
// test/test.js
it('should return 9 when multiplying 3 and 3', () => {
    expect(multiply(3, 3)).to.equal(9);
});
// test/test.js
it('should return 16 when multiplying 4 and 4', () => {
    expect(multiply(4, 4)).to.equal(16);
});
// test/test.js
it('should return 1035 when multiplying 23 and 45', () => {
    expect(multiply(23, 45)).to.equal(1035);
});

