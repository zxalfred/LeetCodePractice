var swapPairs1 = function(head) {
  if (!head || !head.next) return head
  const next = head.next
  head.next = swapPairs1(head.next.next)
  next.next = head
  return next
}

var swapPairs2 = function(head) {
  let prev = null
  prev.next = head
  const result = head.next

  while (prev.next && prev.next.next) {
    const temp = prev.next.next
    prev.next.next = prev.next.next.next
    temp.next = prev.next
    prev.next = temp
    
    prev = prev.next.next
  }

  return result
}
