/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {

    let PA = headA;
    let PB = headB;

    while (PA !== PB) {
        PA = PA == null ? headB : PA.next;
        PB = PB == null ? headA : PB.next;
    }

    return PA;
};