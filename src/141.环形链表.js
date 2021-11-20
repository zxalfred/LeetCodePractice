/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
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
 * @return {boolean}
 */
const hasCycle = function (head) {
  if (!head || !head.next) return false
  let fast = head.next
  let slow = head

  while (fast.next && fast.next.next) {
    if (fast === slow) return true

    slow = slow.next
    fast = fast.next.next
  }

  return false
}
// @lc code=end
