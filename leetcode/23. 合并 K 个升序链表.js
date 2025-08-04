/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  const merge = function (l1, l2) {
    const dummy = new ListNode()
    let curNode = dummy
    while (l1 && l2) {
      if (l1.val <= l2.val) {
        curNode.next = l1
        l1 = l1.next
      } else {
        curNode.next = l2
        l2 = l2.next
      }
      curNode = curNode.next
    }
    curNode.next = l1 || l2
    return dummy.next
  }
  let l = null
  for (let i = 0; i < lists.length; i++) { 
    l = merge(l, lists[i])
  }
  return l
};