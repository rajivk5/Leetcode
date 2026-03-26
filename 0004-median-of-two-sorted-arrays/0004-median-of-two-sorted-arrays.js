/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */


var findMedianSortedArrays = function (nums1, nums2) {
    let n = nums1.length;
    let m = nums2.length;

    let total = n + m;
    let mid1 = Math.floor((total - 1) / 2);
    let mid2 = Math.floor(total / 2);

    let i = 0, j = 0;
    let count = 0;
    let curr = 0, prev = 0;

    while (count <= mid2) {
        prev = curr;

        if (i < n && (j >= m || nums1[i] <= nums2[j])) {
            curr = nums1[i++];
        } else {
            curr = nums2[j++];
        }

        count++;
    }

    if (total % 2 === 0) {
        return (prev + curr) / 2;
    } else {
        return curr;
    }
};