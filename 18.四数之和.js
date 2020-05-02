/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  let res = []
  nums.sort((a,b) => a - b)
  let n = nums.length
  for(let i = 0;i < n - 3; i++){
      if(i > 0 && nums[i] === nums[i-1]) continue
      if(nums[i] + nums[i+1] + nums[i+2] + nums[i+3] > target) break
      if(nums[i] + nums[n-1] + nums[n-2] + nums[n-3] < target) continue
      for(let j = i + 1; j < n - 2; j++){
          if(j - i > 1 && nums[j] === nums[j-1]) continue
          if(nums[i] + nums[j] + nums[j+1] + nums[j+2] > target) break
          if(nums[i] + nums[j] + nums[n-1] + nums[n-2] < target) continue
          let left = j + 1
          let right = n - 1
          while(left < right){
              let tmpRes = nums[i] + nums[j] + nums[left] + nums[right]
              if(tmpRes === target){
                  res.push([nums[i],nums[j],nums[left],nums[right]])
                  while(left < right && nums[left] === nums[left + 1]) left++
                  while(left < right && nums[right] === nums[right - 1]) right--
                  left++
                  right--
              }else if(tmpRes > target){
                  right--
              }else{
                  left++
              }
          }
      }
  }
  return res
}
// @lc code=end

