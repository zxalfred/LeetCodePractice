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
var reverseList = function(head) {
  let current = head
  let previous = null
  
  while (current) {
    const next = current.next
    current.next = previous
    previous = current
    current = next
  }

  return previous
};