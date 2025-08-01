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
var minDepth = function (root) {
  let min = Infinity

  function dfs(node, depth) {
    if (node === null) return
    depth++
    if (node.left === null && node.right === null) {
      min = Math.min(min, depth)
      return
    }

    dfs(node.left, depth)
    dfs(node.right, depth)
  }
  dfs(root, 0)
  return root ? min : 0
};

var minDepth2 = function (root) {
  if (root === null) return 0
  const queue = [root]
  let min = 0
  while (queue.length) {
    const length = queue.length
    min++
    for (let i = 0; i < length; i++) { 
      const node = queue.shift()
      if(node.left === null && node.right === null){
        return min
      }
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
  }
  return min
}