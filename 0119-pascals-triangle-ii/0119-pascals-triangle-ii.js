/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    let row = [];
    let value = 1;

    for (let k = 0; k <= rowIndex; k++) {
        row.push(value);
        value = value * (rowIndex - k) / (k + 1);
    }

    return row;
};