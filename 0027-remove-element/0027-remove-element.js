/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(arr, val) {

   for (let i = 0; i < arr.length; i++) {
        if (arr[i] == val) {
            arr.splice(i, 1);
            i--
            
        }

    }

    return arr.length;
};