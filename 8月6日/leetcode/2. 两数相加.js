/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const head = new ListNode()
  let l = head
  let flag = 0
  while (l1 !== null || l2 !== null || flag !== 0) {
    let val1 = l1 ? l1.val : 0
    let val2 = l2 ? l2.val : 0

    let sum = val1 + val2 + flag
    flag = Math.floor(sum / 10)
    l.next = new ListNode(sum % 10)

    l = l.next
    l1 && (l1 = l1.next)
    l2 && (l2 = l2.next)
  }
  return head.next
};