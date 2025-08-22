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
var swapPairs = function (head) {
  let dummy = new ListNode(0, head)
  let curNode = dummy
  while (curNode) { 
    let prev = curNode.next
    let cur = curNode.next.next

    // 交换
    prev.next = cur.next
    cur.next = prev
    curNode.next = cur

    // 更新指针
    curNode = prev
  }

  return dummy.next
};