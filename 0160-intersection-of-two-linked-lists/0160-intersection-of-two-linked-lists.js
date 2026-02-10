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


    let currA = headA;
    let lengthOflistA = 0;
    while (currA) {
        currA = currA.next
        lengthOflistA++
    }
    let currB = headB;
    let lengthOflistB = 0;
    while (currB) {
        currB = currB.next
        lengthOflistB++
    }

    let diff = Math.abs(lengthOflistA - lengthOflistB);

    if (lengthOflistA > lengthOflistB) {
        let temp = headA;
        headA = headB;
        headB = temp;
    }


    for (let i = 0; i < diff; i++) {
        headB = headB.next;
    }

    currA = headA;
    currB = headB;

    while (currA !== currB) {
        currA = currA.next;
        currB = currB.next;
    }

    return currA;
};