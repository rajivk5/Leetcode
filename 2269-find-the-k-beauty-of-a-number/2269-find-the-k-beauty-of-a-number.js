/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function (num, k) {
     let str = num.toString();
    let count = 0;
    
    for (let i = 0; i <= str.length-k; i++) {
      
        let sub = Number(str.substring(i, i + k));

        if (sub !== 0 && num % sub === 0) {
            count++;
        }
    }

    return count;
};