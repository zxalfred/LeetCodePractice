var mergeKLists = (lists) => {
  const len = lists.length
  if (len === 0) return null

  const mergeTwoList = (l1, l2) => {
    if (l1 === null) return l2
    if (l2 === null) return l1
    if (l1.val <= l2.val) {
      l1.next = mergeTwoList(l1.next, l2)
      return l1
    } else {
      l2.next = mergeTwoList(l1, l2.next)
      return l2
    }
  }

  const merge = (left, right) => {
    if (left === right) return lists[left]
    const mid = left + ((right - left) >> 1)
    return mergeTwoList(merge(left, mid), merge(mid + 1, right))
  }

  return merge(0, len - 1)
}