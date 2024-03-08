/**
 * @param {number[]} nums
 * @return {number[]}
 */
export const getConcatenation = function (nums) {
  return [...nums, ...nums];
};

// ---------------------------------------------------

// Input: nums = [0,2,1,5,3,4]
// Output: [0,1,2,4,5,3]
// Explanation: The array ans is built as follows:
// ans = [nums[nums[0]], nums[nums[1]], nums[nums[2]], nums[nums[3]], nums[nums[4]], nums[nums[5]]]
//     = [nums[0], nums[2], nums[1], nums[5], nums[3], nums[4]]
//     = [0,1,2,4,5,3]
/**
 * @param {number[]} nums
 * @return {number[]}
 */
export const buildArray = function (nums) {
  return nums.map((val) => nums[val]);
};

// ---------------------------------------------------

// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

/**
 * @param {number[]} nums
 * @return {number}
 */
export const numIdenticalPairs = function (nums) {
  let numberOfPairs = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        ++numberOfPairs;
      }
    }
  }
  return numberOfPairs;
};

// --------------------------------------------------------

/* Input: operations = ["--X","X++","X++"]
Output: 1
Explanation: The operations are performed as follows:
Initially, X = 0.
--X: X is decremented by 1, X =  0 - 1 = -1.
X++: X is incremented by 1, X = -1 + 1 =  0.
X++: X is incremented by 1, X =  0 + 1 =  1.
*/

/**
 * @param {string[]} operations
 * @return {number}
 */
export const finalValueAfterOperations = function (operations) {
  return operations.reduce(
    (res, curr) => (curr.includes('++') ? res + 1 : res - 1),
    0
  );
};

// ------------------------------------------------------------

/* Input: nums = [2,5,1,3,4,7], n = 3
Output: [2,3,5,4,1,7] 
Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].
*/

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
export const shuffle = function (nums, n) {
    const result = [];
    for (let i = 0; i < n; i++) {
        result.push(nums[i], nums[i + n]);
    }
    return result;
};


// -------------------------------------------------------------------

/* Input: words = ["leet","code"], x = "e"
Output: [0,1]
Explanation: "e" occurs in both words: "leet", and "code". Hence, we return indices 0 and 1.
*/

/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
export const findWordsContaining = function(words, x) {
    const result = [];
    words.forEach((word,index)=>{
        if(word.indexOf(x) >= 0){
            result.push(index);
        }
    });
    return result;
};

// -----------------------------------------------------------

