/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string}
 */

var tree2str = function (root) {
    function traversal(curr) {
        if (!curr) return "";

        // leaf node
        if (!curr.left && !curr.right) {
            return String(curr.val);
        }

        // only left child
        if (curr.left && !curr.right) {
            return curr.val + "(" + traversal(curr.left) + ")";
        }

        // right child exists (left may or may not exist)
        return curr.val + "(" + traversal(curr.left) + ")(" + traversal(curr.right) + ")";
    }

    return traversal(root);
};
