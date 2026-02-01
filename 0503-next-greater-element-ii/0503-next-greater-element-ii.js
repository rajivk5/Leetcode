/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (arr) {

    let n = arr.length;
    let ans = new Array(arr.length).fill(-1)
    let stack = [];
    stack.push(arr[n - 1])

    for (let i = (2 * n) - 2; i >= 0; i--) {
        while (stack.length) {
            if (arr[i % n] < stack[stack.length - 1]) {
                ans[i % n] = stack[stack.length - 1];
                break;
            } else {
                stack.pop()
            }
        }
        stack.push(arr[i % n])
    }


    return ans.slice(0, n)
};