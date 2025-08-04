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
  while (curNode.next && curNode.next.next) {
    let cur = curNode.next.next
    let pre = curNode.next
    
    // 交换
    pre.next = cur.next
    cur.next = pre
    curNode.next = cur

    // 更新指针
    curNode = pre
  }
  return dummy.next
};