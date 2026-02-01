/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, arr) {
    let map = {}
    let stack = [];

    stack.push(arr[arr.length - 1]);
    map[arr[arr.length - 1]] = -1;


    for (let i = arr.length - 2; i >= 0; i--) {

        while (stack.length) {
          if (stack[stack.length - 1] < arr[i]) {
                stack.pop();
            } else {
                map[arr[i]] = stack[stack.length - 1]
                break
            }
        }
        stack.length === 0?map[arr[i]] = -1:''
        stack.push(arr[i])

    }

    return nums1.map(x=>map[x])
};