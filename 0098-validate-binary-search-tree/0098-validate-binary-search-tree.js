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
var isValidBST = function (curr, l = null, h = null) {

    if (!curr) return true;

    if ((l != null && curr.val <= l) || (h != null && curr.val >= h)) {
        return false;
    }

    let isLeftBST = isValidBST(curr.left, l, curr.val);
    let isRightBST = isValidBST(curr.right, curr.val, h);

    return isLeftBST && isRightBST;

};