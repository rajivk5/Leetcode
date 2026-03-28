/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    let dummy = new ListNode(0);
    dummy.next = head;

    let prev = dummy;
    let curr = head;

    while (curr) {
        if (curr.next && curr.val === curr.next.val) {
            let dupVal = curr.val;

            while (curr && curr.val === dupVal) {
                curr = curr.next;
            }
            prev.next = curr;
        } else {
            prev = prev.next;
            curr = curr.next;
        }
    }

    return dummy.next;
};