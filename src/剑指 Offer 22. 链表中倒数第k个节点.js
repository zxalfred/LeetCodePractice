/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const getKthFromEnd = function (head, k) {
  let slow = head
  let fast = head
  while (k > 1) {
    fast = fast.next
    k--
  }
  while (fast.next) {
    slow = slow.next
    fast = fast.next
  }
  return slow
}
