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
var hasCycle = function(head) {
  if (!head) {
    return false
  }
  
  let node1 = head
  let node2 = head.next

  while (node1 && node2) {
    if (node1 === node2) return true

    node1 = node1.next
    node2 = node2.next

    if (node2) {
      node2 = node2.next
    }
  }

  return false
};