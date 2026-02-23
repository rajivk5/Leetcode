/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function (num, k) {
   let divisor = 10 ** k;
    let temp = num;
    let count = 0;

    while (temp >= 10 ** (k - 1)) {
        let sub = temp % divisor;

        if (sub !== 0 && num % sub === 0) {
            count++;
        }

        temp = Math.floor(temp / 10);
    }

    return count;
};