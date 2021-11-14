/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const rotateRight = function (head, k) {
  if (!head) return null
  let curr = head
  let tail = null
  let len = 0

  while (curr) {
    len++
    tail = curr
    curr = curr.next
  }
  k %= len
  if (k === 0) return head

  tail.next = head
  let count = len - k
  let prev = head
  while (count - 1) {
    prev = head.next
    count--
  }
  const result = prev.next
  prev.next = null

  return result
}
// @lc code=end
