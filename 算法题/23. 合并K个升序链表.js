
function mergeLists(lists) {
  function mergeTwoList(l1, l2) {
    const dummy = new ListNode()
    let head = dummy
    while (l1 && l2) {
      if (l1.val <= l2.val) {
        head.next = l1
        l1 = l1.next
      } else {
        head.next = l2
        l2 = l2.next
      }
      head = head.next
    }
    head.next = l1 || l2
    return dummy
  }
  let l = lists[0]
  for (let i = 1; i < lists.length; i++) { 
    l = mergeLists(l, lists[i])
  }
  return l
}