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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  const res = []

  function dfs(node, level) {
    if (node === null) return
    if (!res[level]) {
      res[level] = []
    }


    if (level % 2 === 0) {
      res[level].push(node.val)
    } else {
      res[level].unshift(node.val)
    }

    level++

    dfs(node.left, level)
    dfs(node.right, level)
  }

  dfs(root, 0)

  return res
};