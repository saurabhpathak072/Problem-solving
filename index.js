import { buildArray, finalValueAfterOperations, findWordsContaining, getConcatenation, numIdenticalPairs, shuffle } from "./Array/Concat.js";
import { findFactorialNumber } from "./Interview-problems/Factorial-program.js";
import { generateFibonacciSeries, printFibonacciSeries } from "./Interview-problems/fibonacii-series.js";



// --------------------------Array----------------
//1. Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).
// Specifically, ans is the concatenation of two nums arrays.
// Return the array ans.

// const concatResult = getConcatenation([1,2,3]);

// console.log('Concinnate array',concatResult);

// ----------------------------------------------

//2. Given a zero-based permutation nums (0-indexed), build an array ans of the same length where ans[i] = nums[nums[i]] for each 0 <= i < nums.length and return it.

// A zero-based permutation nums is an array of distinct integers from 0 to nums.length - 1 (inclusive).


// const PermutationResult = buildArray([5,0,1,2,3,4]);
// console.log('Array Permutation',PermutationResult);

// -----------------------------------------------

// 3. Number of Good Pairs


// Given an array of integers nums, return the number of good pairs.

// A pair (i, j) is called good if nums[i] == nums[j] and i < j.


// const numericalPairResult = numIdenticalPairs([1,2,3]);
// console.log('Array numericalPair',numericalPairResult);

// --------------------------------------------------

// 4. Final Value of Variable After Performing Operations

/* There is a programming language with only four operations and one variable X:

++X and X++ increments the value of the variable X by 1.
--X and X-- decrements the value of the variable X by 1.
Initially, the value of X is 0.

Given an array of strings operations containing a list of operations, return the final value of X after performing all the operations. 
*/

// const finalValueAfterOperationsResult = finalValueAfterOperations(["X++","++X","--X","X--"]);
// console.log('Array finalValueAfterOperations',finalValueAfterOperationsResult);

// ---------------------------------------------------------

// 5. Shuffle the Array

// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

// Return the array in the form [x1,y1,x2,y2,...,xn,yn].

// const shuffleResult = shuffle([2,5,1,3,4,7],3);
// console.log('Array shuffle',shuffleResult);

// ----------------------------------------------------------

// 6. Find Words Containing Character

/* You are given a 0-indexed array of strings words and a character x.

Return an array of indices representing the words that contain the character x.

Note that the returned array may be in any order.*/

// const findWordsResult = findWordsContaining(["leet","code"],"e");
// console.log('Array findWords',findWordsResult);


// -------------------------------------------------------------

// ---------------Fibonacci series-----------------------------

// Change the value of 'n' to control the length of the Fibonacci series
const n = 20;
const result = generateFibonacciSeries(n);

console.log(`Fibonacci Series of length ${n}:`);
console.log(result.join(', '));

// ------------------------------------------------------------

// ----------------------- Find Factorial --------------------

const factors = findFactorialNumber(5);
console.log(`Factorial of ${n}: ${factors}`);








