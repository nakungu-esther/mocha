// Iterative method to calculate factorial(loop method)
function factorialIterative(n) {
    if (n < 0 || !Number.isInteger(n)) {
        throw new Error("Input must be a non-negative integer");
    }

    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i; // Multiply result by the current number i
    }
    return result; // Return the final product
}

// Recursive method to calculate factorial
function factorialRecursive(n) {
    if (n < 0 || !Number.isInteger(n)) {
        throw new Error("Input must be a non-negative integer");
    }

    if (n === 0 || n === 1) return 1; // Base case: factorial(0) = 1 and factorial(1) = 1
    return n * factorialRecursive(n - 1); // Recursive call with n - 1
}

// Tail-recursive method to calculate factorial
function factorialTailRecursive(n, accumulator = 1) {
    if (n < 0 || !Number.isInteger(n)) {
        throw new Error("Input must be a non-negative integer");
    }

    if (n === 0 || n === 1) return accumulator; // Base case: return the accumulated result
    return factorialTailRecursive(n - 1, n * accumulator); // Recursive call with updated accumulator
}

// Factorial using Array.reduce()
function factorialReduce(n) {
    if (n < 0 || !Number.isInteger(n)) {
        throw new Error("Input must be a non-negative integer");
    }

    // If n is 0, return 1, otherwise use reduce to multiply numbers from 1 to n
    return n === 0 ? 1 : Array.from({ length: n }, (_, i) => i + 1)
                     .reduce((acc, curr) => acc * curr, 1); // Reduce the array by multiplying all elements
}

// Export all factorial methods for testing and use
module.exports = {
    factorialIterative,      
    factorialRecursive,      
    factorialTailRecursive,  
    factorialReduce 
}         
