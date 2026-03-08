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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
    let hashRoot = serialize(root);
    let hashSubRoot = serialize(subRoot);

    return hashRoot.includes(hashSubRoot);
};

let serialize = function (root) {
    let hash = "";
    let traverser = (curr) => {
        if (!curr) {
            hash += "-#";
            return;
        }
        hash += '-' + curr.val;
        traverser(curr.left)
        traverser(curr.right)
    }

    traverser(root);
    return hash;
}