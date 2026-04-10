/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let xCopy = x;
    x = Math.abs(x);
    let reversed = 0;
    while (x > 0) {
        let digit = x % 10;
        reversed = 10 * reversed + digit;
        x = Math.floor(x / 10);
    }
    let limit = Math.pow(2, 31);
    if (reversed < -limit || reversed > limit) return 0;
    return xCopy < 0 ? -reversed : reversed;

};