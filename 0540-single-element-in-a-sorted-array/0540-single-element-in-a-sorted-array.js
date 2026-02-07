/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (arr) {
    let l = 0;
    let r = arr.length - 1;

    while (l < r) {
        let mid = Math.floor((l + r) / 2);
        if (mid % 2 === 1) mid--;

        if (arr[mid] === arr[mid + 1]) {
            l = mid + 2;  
        } else {
            r = mid;       
        }
    }
    return arr[l];
   
};





