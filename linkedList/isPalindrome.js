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

var isPalindrome = function(head) {
  if(head === null || head.next === null){
      return true
  }

  let slow = head
  let fast = head
  while (fast.next && fast.next.next) {
    slow = slow.next
    fast = fast.next.next
  }

  let laterHead = slow.next
  slow.next = null

  let previous = laterHead
  let current = laterHead.next
  while (current) {
    let next = current.next
    current.next = previous
    previous = current
    current = next
  }
  laterHead.next = null
  while (head && previous) {
    if (head.val !== previous.val) return false
    head = head.next
    previous = previous.next
  }

  return true
}
