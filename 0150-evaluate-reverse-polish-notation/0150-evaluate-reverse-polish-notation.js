/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let stack = []
    const ops = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "*": (a, b) => a * b,
        "/": (a, b) => Math.trunc(a / b),
    };

    for (const t of tokens) {
        if (ops[t]) {
            const b = stack.pop();
            const a = stack.pop();
            stack.push(ops[t](a, b));
        } else {
            stack.push(+t);
        }
    }

    return stack[0];
};