/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
    path = path.split("/");
    let stack = [];

    let n = path.length;
    for (let i = 0; i < n; i++) {
        if (path[i] === '' || path[i] === '.') {
            continue; // ignore empty and current dir
        } else if (path[i] === '..') {
            if (stack.length > 0) {
                stack.pop(); // go back only if possible
            }
        } else {
            stack.push(path[i]); // valid directory
        }
    }

    return '/' + stack.join('/');
};