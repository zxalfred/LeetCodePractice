/*
 * @lc app=leetcode.cn id=876 lang=javascript
 *
 * [876] 链表的中间结点
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
 * @return {ListNode}
 */
const middleNode = function (head) {
  let slow = head
  let fast = head

  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }

  return slow
}
// @lc code=end
