// Factorial.js
// Paired with: [Shanitah,Esther,]
function factorial(n) {
    if (n < 0 || !Number.isInteger(n)) {
        throw new error(("Input must be a non-negative integer"));
        
    }
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

module.exports = { factorial };
