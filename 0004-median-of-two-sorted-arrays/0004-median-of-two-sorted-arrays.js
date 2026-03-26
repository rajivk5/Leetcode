/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let arr = heapSort([...nums1, ...nums2])

    let l = 0;
    let r = arr.length - 1

    if (arr.length % 2 == 0) {
        let m1 = Math.floor((l + r) / 2);
        let m2 = m1 + 1
        let sum = arr[m1] + arr[m2]
        return sum / 2
    } else {
        let m = (l + r) / 2;
        return arr[m];
    }
};




function heapSort(arr) {
    let n = arr.length;

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapifyDown(arr, i, n)
    }

    for (let i = n - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapifyDown(arr, 0, i)
    }

    return arr;
}

function heapifyDown(arr, i, n) {
    let largest = i;
    let left = (2 * i) + 1;
    let right = (2 * i) + 2;

    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }
    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest != i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapifyDown(arr, largest, n)
    }

}