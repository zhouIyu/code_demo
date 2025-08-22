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
var levelOrder = function (root) {
  let res = []
  function dfs(node, level) {
    if (node === null) return
    if (!res[level]) {
      res[level] = []
    }
    res[level].push(node.val)
    dfs(node.left, level + 1)
    dfs(node.right, level + 1)
  }

  dfs(root, 0)
  return res
};

var levelOrder2 = function (root) {
  if (!root) return []
  let res = []
  const queen = [root]
  while (queen.length > 0) {
    let levelSize = queen.length
    let curLevel = []
    for (let i = 0; i < levelSize; i++) {
      const node = queen.shift()
      curLevel.push(node.val)
      if (node.left) queen.push(node.left)
      if (node.right) queen.push(node.right)
    }
    res.push(curLevel)
  }
  return res
};