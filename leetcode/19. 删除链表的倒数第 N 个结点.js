/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let stack = []
  let dummyNode = new ListNode(0, head)
  let node = dummyNode
  while (node !== null) {
    stack.push(node)
    node = node.next
  }

  for (let i = 0; i < n; i++) {
    stack.pop()
  }
  let pre = stack.pop()
  pre.next = pre.next.next

  return dummyNode.next
};


var removeNthFromEnd2 = function (head, n) {
  let node = head
  let length = 0
  while (node) {
    length++
    node = node.next
  }

  const dummyNode = new ListNode()
  dummyNode.next = head

  let curNode = dummyNode
  let i = 0

  while (i < length - n && curNode.next) {
    curNode = curNode.next
    i++
  }
  curNode.next = curNode.next.next
  return dummyNode.next
}

var removeNthFromEnd3 = function (head, n) {
  const dummyNode = new ListNode()
  dummyNode.next = head

  let slow = dummyNode
  let fast = dummyNode.next

  for (let i = 0; i < n; i++) {
    if (fast === null) {
      return
    }
    fast = fast.next
  }

  while (fast) { 
    slow = slow.next
    fast = fast.next
  }

  slow.next = slow.next.next
  return dummyNode.next
}