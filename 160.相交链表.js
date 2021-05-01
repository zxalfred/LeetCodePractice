/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  let p1 = headA
  let p2 = headB
  let resetCount = 0
  while (resetCount < 3) {
    if (p1 === p2) return p1
    if (p1.next) {
      p1 = p1.next
    } else {
      p1 = headB
      resetCount++
    }
    if (p2.next) {
      p2 = p2.next
    } else {
      p2 = headA
      resetCount++
    }
  }
  return null
};
// @lc code=end
