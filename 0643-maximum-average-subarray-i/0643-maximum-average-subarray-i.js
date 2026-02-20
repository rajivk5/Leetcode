/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(arr, k) {
     let i = 0;
    let sum = 0;
    let max = -Infinity;
    for (let j = 0; j < arr.length; j++) {
        sum += arr[j];

        if (j - i + 1 === k) {
            max = Math.max(max,sum)
            
            sum -= arr[i];
            i++;
        }

    }
    return max/k
};