/*
 * @lc app=leetcode.cn id=445 lang=javascript
 *
 * [445] 两数相加 II
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
  const stack1 = []
  const stack2 = []
  const resultStack = []
  let current = null
  let head = null
  while (l1) {
    stack1.push(l1.val)
    l1 = l1.next
  }
  while (l2) {
    stack2.push(l2.val)
    l2 = l2.next
  }

  let flag = 0

  while (stack1.length || stack2.length || flag) {
    const item1 = stack1.pop() || 0
    const item2 = stack2.pop() || 0
    const sum = item1 + item2 + flag
    flag = ~~(sum / 10)
    const val = sum % 10
    resultStack.push(val)
  }

  while (resultStack.length) {
    const val = resultStack.pop()
    if (!head) {
      head = new ListNode(val)
      current = head
    } else {
      current.next = new ListNode(val)
      current = current.next
    }
  }

  return head
}
// @lc code=end
