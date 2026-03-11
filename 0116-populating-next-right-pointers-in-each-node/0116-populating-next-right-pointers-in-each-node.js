/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function (root) {
    if (!root) return root;
    let q = [root];
    while (q.length) {
        let size = q.length;
        for (let i = 0; i < size; i++) {
            let node = q.shift();
            if (i < size - 1) {
                node.next = q[0]
            }

            node.left && q.push(node.left);
            node.right && q.push(node.right);
        }
    }

    return root;
};