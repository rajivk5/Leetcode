/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {

    let arr = [...nums, ...nums]
    let ans = new Array(arr.length).fill(-1)
    let stack = [];
    stack.push(arr[arr.length - 1])

    for (let i = arr.length - 2; i >= 0; i--) {
        while (stack.length) {
            if (arr[i] < stack[stack.length - 1]) {
                ans[i] = stack[stack.length - 1];
                break;
            } else {
                stack.pop()
            }
        }
        stack.push(arr[i])
    }


    return ans.slice(0, arr.length / 2)
};