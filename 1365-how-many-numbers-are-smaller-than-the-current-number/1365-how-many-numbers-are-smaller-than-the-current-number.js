/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(arr) {
      let ans = [];
    for (let j = 0; j < arr.length; j++) {
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[j] > arr[i]) {
                count++
            }
        }
        ans.push(count);
        count = 0;
    }
    return ans;
};