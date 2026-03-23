/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (arr) {
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            [arr[i][j], arr[j][i]] = [arr[j][i], arr[i][j]];
        }
    }

    for (let i = 0; i < n; i++) {
        arr[i].reverse();
    }
    return arr;
};