/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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

class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

var addTwoNumbers = function(l1, l2) {
  let currL1 = l1
  let currL2 = l2
  
  const result = new Node(null)
  let currResult = result
  let prevResult = null
  let flag = 0

  while (currL1 || currL2 || flag) {
    const sum = (currL1 ? currL1.val : 0) + (currL2 ? currL2.val : 0) + flag
    flag = ~~(sum / 10)
    currResult.val = sum % 10

    currL1 = currL1 ? currL1.next : currL1
    currL2 = currL2 ? currL2.next : currL2
    currResult.next = new Node(null)
    prevResult = currResult
    currResult = currResult.next
  }

  if (!currResult.val) {
    prevResult.next = null
  }

  return result
};
// @lc code=end

