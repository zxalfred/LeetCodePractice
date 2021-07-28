/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * @return {ListNode}
 */
// 1. traverse
var reverseList = function(head) {
  if (!head || !head.next) return head
  let cur = head
  let prev = null

  while (cur) {
    const next = cur.next 
    cur.next = prev
    prev = cur
    cur = next
  }

  return prev
};

// 2. recursion
var reverseList2 = function(head) {
  if (!head || !head.next) return head

  const newHead = reverseList2(head.next)
  head.next.next = head
  head.next = null
  return newHead
}

// @lc code=end

