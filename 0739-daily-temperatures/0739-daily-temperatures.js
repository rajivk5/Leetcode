/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(arr) {
     const n = arr.length;
    const ans = new Array(n).fill(0);
    const stack = []; 

    for (let i = n - 1; i >= 0; i--) {

        while (stack.length && arr[stack[stack.length - 1]] <= arr[i]) {
            stack.pop()
        }

        ans[i] = stack.length ? stack[stack.length - 1] - i : 0;
        stack.push(i)
    }

    return ans;
};