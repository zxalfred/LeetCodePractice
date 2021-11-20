/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
const deleteDuplicates = function (head) {
  if (!head || !head.next) return head

  let prev = head
  let cur = head.next
  while (cur) {
    if (cur.val === prev.val) {
      cur = cur.next
      prev.next = cur
    } else {
      prev = cur
      cur = cur.next
    }
  }

  return head
}
// @lc code=end
