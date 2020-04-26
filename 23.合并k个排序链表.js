/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个排序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
// 暴力法
// var quickSort = (nums) => {
//   const sort = (arr, left = 0, right = arr.length - 1) => {
//     if (left >= right) return
//     let i = 0
//     let j = right
//     const baseVal = arr[j]
//     while (i < j) {
//       while (i < j && arr[i] <= baseVal) {
//         i++
//       }
//       arr[j] = arr[i]
//       while (i < j && arr[j] >= baseVal) {
//         j--
//       }
//       arr[i] = arr[j]
//     }
//     arr[i] = baseVal
//     sort(arr, left, i - 1)
//     sort(arr, i + 1, right)
//   }
//   const arr = [...nums]
//   sort(arr)
//   return arr
// }

// var mergeKLists = function(lists) {
//   let arr = []

//   for (let i = 0; i < lists.length; i++) {
//     let current = lists[i]
//     while (current) {
//       arr.push(current.val)
//       current = current.next
//     }
//   }
//   arr = quickSort(arr)

//   let head = null
//   let current = null
//   for (const item of arr) {
//     if (!head) {
//       head = new ListNode(item)
//       current = head
//     } else {
//       current.next = new ListNode(item)
//       current = current.next
//     }
//   }

//   return head
// };
// 递归 + 分治
var mergeKLists = (lists) => {
  const len = lists.length
  if (len === 0) return null

  const mergeTwoList = (l1, l2) => {
    if (l1 === null) return l2
    if (l2 === null) return l1
    if (l1.val <= l2.val) {
      l1.next = mergeTwoList(l1.next, l2)
      return l1
    } else {
      l2.next = mergeTwoList(l1, l2.next)
      return l2
    }
  }

  const merge = (left, right) => {
    if (left === right) return lists[left]
    const mid = left + ((right - left) >> 1)
    return mergeTwoList(merge(left, mid), merge(mid + 1, right))
  }

  return merge(0, len - 1)
}
// @lc code=end

