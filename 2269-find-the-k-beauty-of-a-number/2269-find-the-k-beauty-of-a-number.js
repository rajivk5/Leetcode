/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function (num, k) {
    let arr = num.toString().split('')
    let i = 0;
    let j = k - 1;
    let count = 0;
    while (j < arr.length) {
         let sub = Number(arr.slice(i, j + 1).join(''));

        if (sub !== 0 && num % sub === 0) {
            count++;
        }
        j++
        i++
    }

    return count;
};