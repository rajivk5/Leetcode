/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function (words, x) {
    let store = []
    for (let i = 0; i < words.length; i++) {

        for (let j = 0; j < words[i].length; j++) {
            if (words[i][j] === x) {
                store[store.length] = i
                break;
            }
        }

    }

    return store;

};