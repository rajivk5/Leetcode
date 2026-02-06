/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (arr, t) {


    function findFirst() {
        let l = 0;
        let r = arr.length - 1;
        ans = -1;
        while (l <= r) {
            let m = Math.floor((l + r) / 2);
            if (arr[m] > t) {
                r = m - 1;
            } else if (arr[m] < t) {
                l = m + 1;
            } else if (arr[m] === t) {
                ans = m;
                r = m - 1
            }
        }

        return ans
    }

    function findSecond() {
        let l = 0;
        let r = arr.length - 1;
        ans = -1;
        while (l <= r) {
            let m = Math.floor((l + r) / 2);
            if (arr[m] > t) {
                r = m - 1;
            } else if (arr[m] < t) {
                l = m + 1;
            } else if (arr[m] === t) {
                ans = m;
                l = m + 1
            }
        }

        return ans;
    }
    return [findFirst(), findSecond()]
};