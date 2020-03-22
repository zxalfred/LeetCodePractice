class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  add(val) {
    const node = new Node(val)
    if (!this.head) {
      this.head = node
    } else {
      let current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = node
    }
  }

  print() {
    let current = this.head
    let result = []
    while (current) {
      result.push(current.val)
      current = current.next
    }
    return result
  }
}

const list = new LinkedList()
list.add(1)
list.add(2)
list.add(3)
list.add(4)

var reverseList = function(head) {
  let current = head
  let previous = null
  
  while (current) {
    const next = current.next
    current.next = previous
    previous = current
    current = next
  }

  return previous
}

var reverseKGroup = function(head, k) {
  if (!head || !head.next) return head
  if (k === 1) return head
  
  
  let tail = head
  let m = k
  while (m > 1) {
    if (tail.next) {
      tail = tail.next
      m--
    } else {
      return head
    }
  }

  const next = tail.next
  tail.next = null
  const result = reverseList(head)
  head.next = reverseKGroup(next, k)

  return result
}

reverseKGroup(list.head, 2)
