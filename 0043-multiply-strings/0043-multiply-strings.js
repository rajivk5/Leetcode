/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
    if (num1 === "0" || num2 === "0") return "0";

    let n = num1.length;
    let m = num2.length;

    let res = new Array(n + m).fill(0);

    // right → left
    for (let i = n - 1; i >= 0; i--) {
        for (let j = m - 1; j >= 0; j--) {

            let mul = (num1[i] - '0') * (num2[j] - '0');

            let pos1 = i + j;
            let pos2 = i + j + 1;

            let sum = mul + res[pos2];

            res[pos2] = sum % 10;                  // digit
            res[pos1] += Math.floor(sum / 10);     // carry
        }
    }

    // remove leading zeros
    while (res[0] === 0) {
        res.shift();
    }

    return res.join('');
}