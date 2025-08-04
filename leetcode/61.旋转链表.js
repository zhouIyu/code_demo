/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (k === 0) return head
  if (!head || !head.next) return head
  let cur = head
  let len = 1
  while (cur) {
    len++
    cur = cur.next
  }
  let moveLen = len - k % len
  cur.next = head
  while (moveLen) {
    cur = cur.next
    moveLen--
  }
  const ret = cur.next
  cur.next = null
  return ret
};