/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
    let str = '';

    while (columnNumber > 0) {
        columnNumber--; // shift to 0-based
        let remainder = columnNumber % 26;
        str = String.fromCharCode(65 + remainder) + str;
        columnNumber = Math.floor(columnNumber / 26);
    }

    return str;

};