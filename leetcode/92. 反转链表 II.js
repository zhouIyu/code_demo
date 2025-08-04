/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  if (!head) return head
  if(left === right) return head
  let dummy = new ListNode(0, head)
  let pre = dummy
  // 找到头节点
  for (let i = 0; i < left - 1; i++) {
    pre = pre.next
  }
  let cur = pre.next
  let node = null
  // 记录反转区间的第一个节点，反转后它会变成尾部
  let tail = cur;
  for (let i = 0; i < right - left + 1; i++) {
    const next = cur.next;
    cur.next = node;
    node = cur;
    cur = next;
  }
  pre.next = node;
  tail.next = cur;
  return dummy.next
};

const { ListNode, arrayToList, listToArray } = require('./utils/ListNodeUtil');

let head = arrayToList([1, 2, 3, 4, 5]);
let result = reverseBetween(head, 2, 4);

console.log(listToArray(result))