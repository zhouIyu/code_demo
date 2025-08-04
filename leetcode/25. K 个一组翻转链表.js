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
var reverseKGroup = function (head, k) {
  // 虚拟头节点
  const dummy = new ListNode(0, head)
  let prev = dummy
  while (true) {
    // 1. 当前组的尾节点
    let end = prev
    for (let i = 0; i < k; i++) {
      end = end.next
      if (!end) {
        return dummy.next
      }
    }

    // 2. 记录当前组的头节点和下一组的头节点
    const start = prev.next
    const nextGroupStart = end.next

    // 3. 翻转当前组的节点
    let curr = start
    let node = null
    while (node !== end) { 
      const next = curr.next
      curr.next = node
      node = curr
      curr = next
    }

    // 4. 链接各组
    prev.next = end
    start.next = nextGroupStart

    // 5.更新指针
    prev = start
  }
};