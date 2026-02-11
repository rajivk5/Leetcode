/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (str, g) {
    str = str.split('')
    for (let i = 0; i < str.length; i++) {
        str[str.length - 1] = str.shift()
        if (str.join('') === g) return true
    }
    return false
};

