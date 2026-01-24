/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function (head) {

    let curr = head;

    let arr = []
    while (curr) {
        arr.push(curr.val)
        curr = curr.next;
    }


    let binary = 0;
    let n = arr.length - 1;
    for (let i = 0; i < arr.length; i++) {
        binary += arr[i] * (2 ** (n - i))
    }

    return binary
};