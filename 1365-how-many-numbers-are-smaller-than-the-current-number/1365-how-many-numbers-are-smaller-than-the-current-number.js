/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (arr) {
    let count = new Array(101).fill(0);

    for (let num of arr) {
        count[num]++;
    }
    
    for (let i = 1; i < 101; i++) {
        count[i] += count[i - 1];
    }
    return arr.map(num => num === 0 ? 0 : count[num - 1]);
};