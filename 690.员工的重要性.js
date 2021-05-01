/*
 * @lc app=leetcode.cn id=690 lang=javascript
 *
 * [690] 员工的重要性
 */

// @lc code=start
/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function(employees, id) {
  const map = new Map()
  const l = employees.length
  for (let i = 0; i < l; i++) {
    map.set(employees[i].id, [employees[i].importance, employees[i].subordinates])
  }
  let result = 0
  const recursion = (id) => {
    const item = map.get(id)
    result += item[0]
    item[1].forEach(child => {
      recursion(child)
    })
  }
  recursion(id)
  return result
};

// @lc code=end

