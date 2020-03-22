var detectCycle = function (head) {
  if (!head) return null
  
  let slow = head
  let fast = head

  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next

    if (fast === slow) {
      while (head !== slow) {
        slow = slow.next
        head = head.next
      }
      return head
    }
  }

  return null
}