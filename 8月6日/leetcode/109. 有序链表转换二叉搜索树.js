/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
  if (!head) return null
  if (!head.next) return new TreeNode(head.val)
  let slow = head, fast = head, pre = null;
  while (fast && fast.next) {
    fast = fast.next.next
    pre = slow
    slow = slow.next
  }
  const root = new TreeNode(slow.val)
  root.right = sortedListToBST(slow.next)
  slow.next = null
  if (pre) { 
    pre.next = null
  }
  root.left = sortedListToBST(head)
  return root
};

