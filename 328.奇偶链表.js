/*
 * @lc app=leetcode.cn id=328 lang=javascript
 *
 * [328] 奇偶链表
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
var oddEvenList = function(head) {
  if (!head || !head.next) return head

  let oddTail = head
  let evenTail = head.next

  while (evenTail && evenTail.next) {
    const nextOddTail = evenTail.next
    const evenHead = oddTail.next

    evenTail.next = nextOddTail.next
    evenTail = evenTail.next
    oddTail.next = nextOddTail
    nextOddTail.next = evenHead
    oddTail = nextOddTail
  }

  return head
};
// @lc code=end

