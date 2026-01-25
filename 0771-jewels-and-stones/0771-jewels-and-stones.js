/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {

    let map = new Map();
    let count = 0;

    for (let ch of stones) {
        map.set(ch, (map.get(ch) || 0) + 1);
    }


    for (let j of jewels) {
        count += map.get(j) || 0;
    }

    return count

};