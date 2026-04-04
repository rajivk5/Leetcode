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
            continue; 
        } else if (path[i] === '..') {
            if (stack.length > 0) {
                stack.pop(); 
            }
        } else {
            stack.push(path[i]);
        }
    }

    return '/' + stack.join('/');
};