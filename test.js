function ListNode(val) {
  this.val = val
  this.next = null
}

var insertionSortList = function(head) {
  if (!head || !head.next) return head
  const start = new ListNode(-Infinity)
  start.next = head
  let beforeCur = head

  while (beforeCur.next) {
    let pre = start
    const nextBeforeCur = beforeCur.next
    while (pre.next !== beforeCur.next) {
      if (pre.next.val <= beforeCur.next.val) {
        pre = pre.next
      } else {
        const cur = beforeCur.next
        beforeCur.next = beforeCur.next.next
        cur.next = pre.next
        pre.next = cur
        break
      }
    }
    beforeCur = nextBeforeCur
  }
  return start.next
};
console.log(insertionSortList({val:5000, next: {val: 4999, next: {val:4998, next: {val: 4997, next: null}}}}))

