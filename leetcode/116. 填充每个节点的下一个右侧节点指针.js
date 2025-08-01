/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function (root) {
  if (!root) return root

  function dfs(node) {
    if (node.left === null && node.right === null) return
    node.left.next = node.right
    if (node.next) {
      node.right.next = node.next.left
    }

    dfs(node.left)
    dfs(node.right)
  }

  dfs(root)
  return root
};


var connect2 = function (root) {
  if (root === null) return root
  const queue = [root]
  while (queue.length) {
    const length = queue.length

    for (let i = 0; i < length; i++) {
      const node = queue.shift()
      if (i < length - 1) {
        node.next = queue[0]
      }
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
  }

  return root
}