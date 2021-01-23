// 1->2->3->4->5->NULL

// 1->2->3->4->5->NULL

var reverseList = function(head) {
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