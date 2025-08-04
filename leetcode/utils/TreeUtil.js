function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

// 将树变成数组
function treeToArray(root) {
  if (!root) return []
  const result = []
  const queue = [root]
  while (queue.length) {
    const node = queue.shift()
    if (node) {
      result.push(node.val)
      queue.push(node.left)
      queue.push(node.right)
    } else {
      result.push(null)
    }
  }
  // 去除末尾的 null 值
  while (result.length && result[result.length - 1] === null) {
    result.pop()
  }
  return result
}

function createTreeNode(arr) {
  if (!arr || arr.length === 0) return null
  const root = new TreeNode(arr[0])
  const queue = [root]
  let i = 1 // 从第二个元素开始
  while (i < arr.length) {
    const node = queue.shift()
    if (arr[i] !== null) {
      node.left = new TreeNode(arr[i])
      queue.push(node.left)
    }
    i++
    if (i < arr.length && arr[i] !== null) {
      node.right = new TreeNode(arr[i])
      queue.push(node.right)
    }
    i++
  }
  return root
}


module.exports = {
  TreeNode,
  treeToArray,
  createTreeNode
}