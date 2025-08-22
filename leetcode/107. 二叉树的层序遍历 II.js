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
var levelOrderBottom = function (root) {
  let res = []
  let queue = []
  if (root === null) {
    return res
  }
  queue.push(root)
  while (queue.length) {
    let currLevel = []
    let length = queue.length
    for (let i = 0; i < length; i++) {
      let node = queue.shift()
      if (node) {
        currLevel.push(node.val)
        node.left && queue.push(node.left)
        node.right && queue.push(node.right)
      }
    }
    res.unshift(currLevel)
  }

  return res
};

var levelOrderBottom = function (root) {
  let res = []

  function dfs(nodeArr) {
    const currLevel = []
    const arr = []
    const length = nodeArr.length
    for (let i = 0; i < length; i++) {
      const node = nodeArr[i]
      if (node) {
        currLevel.push(node.val)
        node.left && arr.push(node.left)
        node.right && arr.push(node.right)
      }
    }

    if (arr.length) {
      dfs(arr)
    }

    if (currLevel.length) {
      res.push(currLevel)
    }
  }

  dfs([root])
  return res
};