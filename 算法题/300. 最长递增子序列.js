/**
 * 最长递增子序列，动态规划
 * @param {number[]} nums 
 */
function lengthOfLIS(nums) {
  const len = nums.length
  if (!len) return 0
  const dp = new Array(len).fill(1)
  let maxLen = 1
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
    maxLen = Math.max(maxLen, dp[i])
  }
  return maxLen
}


/**
 * 最长递增子序列，贪心算法
 * @param {number[]} nums
 */
function lengthOfLIS2(nums) {
  const len = nums.length
  if (!len) return 0
  const tails = [nums[0]]
  for (let i = 1; i < len; i++) {
    if (nums[i] > tails[tails.length - 1]) {
      tails.push(nums[i])
    } else {
      let left = 0;
      let right = tails.length - 1
      while (left < right) {
        const mid = Math.floor((left + right) / 2)
        if (tails[mid] < nums[i]) {
          left = mid + 1
        } else {
          right = mid - 1
        }
      }
      tails[left] = nums[i]
    }
  }

  return tails.length
}