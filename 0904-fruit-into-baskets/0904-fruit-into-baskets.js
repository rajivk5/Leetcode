/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
    let i = 0;
    let maxLen = 0;
    let map = new Map();

    for (let j = 0; j < fruits.length; j++) {

        map.set(fruits[j], (map.get(fruits[j]) || 0) + 1);

        while (map.size > 2) {

            map.set(fruits[i], map.get(fruits[i]) - 1);

            if (map.get(fruits[i]) === 0) {
                map.delete(fruits[i]);
            }

            i++;
        }

        maxLen = Math.max(maxLen, j - i + 1);
    }

    return maxLen;
};