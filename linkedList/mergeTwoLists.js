var mergeTwoLists = function(l1, l2) {
  let p1 = l1
  let p2 = l2
  const fn = new ListNode(-1)
  let current = fn

  while (p1 && p2) {
    if (p1.val >= p2.val) {
      current.next = p2
      p2 = p2.next
    } else {
      current.next = p1
      p1 = p1.next
    }
    current = current.next
  }

  if (p1) {
    current.next = p1
  } else {
    current.next = p2
  }

  return fn.next
};