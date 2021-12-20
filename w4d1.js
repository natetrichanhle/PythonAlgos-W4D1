


// need a base case
// termination condition
/* 
  Recursively sum an arr of ints
*/

const nums1 = [1, 2, 3];
const expected1 = 6;

/**
 * Add params if needed for recursion
 * Recursively sums the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} The sum of the given nums.
 */
sum = 0;
function sumArr(nums, i=0) {
    if(i > nums.length - 1){
      return sum;
    }
    else{
        sum += nums[i];
        return sumArr(nums, i += 1);
        
    }
}
console.log(sumArr(nums1))


module.exports = { sumArr };

/*****************************************************************************/


/* 
Recursive Sigma
Input: integer
Output: sum of integers from 1 to Input integer
*/

const num1 = 5;
const expected1 = 15;
// Explanation: (1+2+3+4+5)

const num2 = 2.5;
const expected2 = 3;
// Explanation: (1+2)

const num3 = -1;
const expected3 = 0;

/**
 * Recursively sum the given int and every previous positive int.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} num
 * @returns {number}
 */
sum = 0;
function recursiveSigma(num) {
    sum += num;
    if (num == 0){
        return sum
    }
    else {
        return recursiveSigma(num - 1)
    }
}
console.log(recursiveSigma(num1))
console.log(recursiveSigma(num2))
console.log(recursiveSigma(num3))
console.log(recursiveSigma(num4))
module.exports = { recursiveSigma };

/*****************************************************************************/