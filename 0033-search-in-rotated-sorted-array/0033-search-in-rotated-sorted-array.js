/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(arr, t) {
      let l = 0;
    let r = arr.length - 1;



    while (l <= r) {
       let m = Math.floor((l + r) / 2);

        if (arr[m] === t) return m;

        if (arr[l] <= arr[m]) {
            if (t >= arr[l] && t < arr[m]) {
                r = m - 1;
            } else {
                l = m + 1
            }
        } else {
            if (t > arr[m] && t <= arr[r]) {
                l = m + 1
            } else {
                r = m - 1;
            }
        }
    }


    return -1;
};