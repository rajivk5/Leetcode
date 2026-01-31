/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let stack = []
    for (let i = 0; i < tokens.length; i++) {
        let t = tokens[i]
        if (!isNaN(t)) {
            stack.push(+t)

        } else {
            let b = stack.pop()
            let a = stack.pop()
            if (t === "+") stack.push(a + b);
            else if (t === "-") stack.push(a - b);
            else if (t === "*") stack.push(a * b);
            else if (t === "/") stack.push(Math.trunc(a / b));

        }
    }

    return stack[0]
};