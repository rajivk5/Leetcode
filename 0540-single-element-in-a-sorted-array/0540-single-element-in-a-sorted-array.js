/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (arr) {
    let i = 0;
    let j = 1;
    while (j) {
        if (arr[i] === arr[j]) {
            i += 2
            j += 2
        } else {
            return arr[i];
        }
    }
};





