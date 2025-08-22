/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let dummy = new ListNode(-1, head)
  let temp = dummy
  let cur = head
  while (cur && cur.next) {
    if (cur.val === cur.next.val) {
      while (cur.next && cur.next.val === cur.val) { 
        cur = cur.next
      }
      temp.next = cur.next
    } else {
      temp = temp.next
    }
    cur = cur.next
  }

  return dummy.next
};