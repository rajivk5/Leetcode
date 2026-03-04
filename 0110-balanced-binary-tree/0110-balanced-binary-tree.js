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
 * @return {boolean}
 */
var isBalanced = function (root) {
    let ans = true;

    let heightTree = (curr) => {
        if (!curr) return 0;
        let leftHeight = heightTree(curr.left);
        let rightHeight = heightTree(curr.right);

        if (Math.abs(leftHeight - rightHeight) > 1) {
            ans = ans && false;
        }
        return 1 + Math.max(leftHeight, rightHeight)
    }

    heightTree(root);
    return ans;
};