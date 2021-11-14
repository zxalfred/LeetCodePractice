// 1->2->3->4->5->NULL

var reverseList = function(head) {
  if (!head) return null
  let prev = head
  let curr = head.next
  prev.next = null
  while (curr) {
    const next = curr.next
    curr.next = prev
  
    prev = curr
    curr = next
  }
  return prev
}

var reverseList2 = function(head) {
  if (!head || !head.next) return head
  const newHead = reverseList2(head.next)
  head.next.next = head
  head.next = null
  return newHead
}