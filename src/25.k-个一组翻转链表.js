/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const reverseList = (node) => {
  let prev = null
  let curr = node

  while (curr) {
    const { next } = curr
    curr.next = prev
    prev = curr
    curr = next
  }

  return prev
}

const reverseKGroup = function (head, k) {
  if (!head || !head.next || k === 1) return head

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

  const { next } = tail
  tail.next = null
  const result = reverseList(head)
  head.next = reverseKGroup(next, k)

  return result
}
// @lc code=end
