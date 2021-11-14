/*
 * @lc app=leetcode.cn id=147 lang=javascript
 *
 * [147] 对链表进行插入排序
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
const insertionSortList = function (head) {
  if (!head || !head.next) return head
  const start = new ListNode(-Infinity)
  start.next = head
  let beforeCur = head

  while (beforeCur.next) {
    let pre = start
    const nextBeforeCur = beforeCur.next
    if (beforeCur.next.val < beforeCur.val) {
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
    }
    beforeCur = nextBeforeCur
  }
  return start.next
}
// @lc code=end
