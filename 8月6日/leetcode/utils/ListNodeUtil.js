// 测试用例
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
// 辅助函数：根据数组生成链表
function arrayToList(arr) {
  let dummy = { next: null };
  let cur = dummy;
  for (let val of arr) {
    cur.next = new ListNode(val)
    cur = cur.next;
  }
  return dummy.next;
}

// 辅助函数：链表转数组
function listToArray(head) {
  let arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  return arr;
}

module.exports = {
  ListNode,
  arrayToList,
  listToArray
}