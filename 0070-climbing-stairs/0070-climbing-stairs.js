/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    let pre = 1;
    let curr = 1;

    for (let i = 2; i <= n; i++) {
        let temp = pre + curr;
        pre = curr;
        curr = temp;
    }

    return curr;
};