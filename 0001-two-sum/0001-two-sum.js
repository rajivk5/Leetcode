/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (arr, t) {
    let map = {};

    for (let i = 0; i < arr.length; i++) {
        let compare = t - arr[i];

        if (map[compare] !== undefined) {
            return [map[compare], i];
        }

        map[arr[i]] = i;
    }
};