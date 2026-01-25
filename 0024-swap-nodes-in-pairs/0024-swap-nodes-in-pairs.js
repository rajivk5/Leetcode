/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */


//1st solution-------------------------
/*   let dummy = new ListNode(0);
    dummy.next = head;

    let pre = dummy;
    let curr = pre.next;
    let n = curr.next;

    while (curr && n) {
        pre.next = n;
        curr.next = n.next
        n.next = curr;

        pre = curr;
        curr = pre.next
        n = curr && curr.next;
    }

    return dummy.next; */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

//2nd solutions-----

var swapPairs = function (head) {
    if (!head || !head.next) return head;

    let l = head;
    let r = head.next;

    l.next = swapPairs(r.next);
    r.next = l;

    return r

};