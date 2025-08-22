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
var isSymmetric = function (root) {
  if (root === null) return true

  function isSame(left, right) {
    if (left === null && right === null) return true
    if (left && right && left.val === right.val) { 
      return isSame(left.left, right.right) && isSame(left.right, right.left)
    }
    return false
  }

  return isSame(root.left, root.right)
}