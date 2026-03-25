/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
   if (num1 === "0" || num2 === "0") return "0";

    let arr1 = num1.split('');
    let arr2 = num2.split('');
    let mulArr = [];

    for (let i = arr2.length - 1; i >= 0; i--) {
        let carry = 0;
        let mulLevel = [];

        let zeros = arr2.length - 1 - i;
        for (let z = 0; z < zeros; z++) {
            mulLevel.push(0);
        }

        for (let j = arr1.length - 1; j >= 0; j--) {
            let mul = (arr2[i] - '0') * (arr1[j] - '0') + carry;

            let digit = mul % 10;
            carry = Math.floor(mul / 10);

            mulLevel.push(digit);
        }

        if (carry > 0) mulLevel.push(carry);
        mulLevel.reverse();

        mulArr.push(mulLevel);
    }

    return addtionArr(mulArr);
};


function addtionArr(arr) {
    let maxLen = Math.max(...arr.map(row => row.length));
    for (let row of arr) {
        while (row.length < maxLen) {
            row.unshift(0);
        }
    }

    let carry = 0;
    let result = [];
    for (let col = maxLen - 1; col >= 0; col--) {
        let sum = carry;

        for (let row = 0; row < arr.length; row++) {
            sum += arr[row][col];
        }

        result.push(sum % 10);
        carry = Math.floor(sum / 10);
    }

    if (carry > 0) result.push(carry);

    return result.reverse().join('');
};
