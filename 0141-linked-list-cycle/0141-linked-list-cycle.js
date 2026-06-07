/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    if (head == null || head.next == null) return false;
    let map = new Set()
    let curr = head;

    while (curr) {
        if (map.has(curr)) {
            return true
        }
        map.add(curr)
        curr = curr.next;
    }
    return false;
};