/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  const length = nums.length
  const dfs = function (left, right) {
    if (left > right) {
      return null
    }
    const m = Math.floor((left + right) / 2)
    const root = new TreeNode(nums[m])
    root.left = dfs(left, m - 1)
    root.right = dfs(m + 1, right)
    return root
  }

  return dfs(0, length - 1)
};