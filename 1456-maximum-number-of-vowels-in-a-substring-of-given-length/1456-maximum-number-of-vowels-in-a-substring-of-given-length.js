/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(arr, k) {
     let i = 0;
    let count = 0;
    let maxCount = 0;
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    for (let j = 0; j < arr.length; j++) {
        if (vowels.has(arr[j])) count++

        if (j - i + 1 == k) {
            maxCount = Math.max(count, maxCount)

            if (vowels.has(arr[i])) count--
            i++
        }

    }

    return maxCount;
};