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
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0
  const L = maxDepth(root.left)
  const R = maxDepth(root.right)
  return Math.max(L, R) + 1
};

var maxDepth2 = function (root) {
  let max = 0

  function dfs(node, depth) {
    if (node === null) return
    depth++
    max = Math.max(max, depth)
    dfs(node.left, depth)
    dfs(node.right, depth)
  }

  dfs(root, 0)
  return max
};
