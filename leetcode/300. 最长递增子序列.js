function lengthOfLIS(nums) {
  if (nums.length === 0) return 0
  const length = nums.length
  let max = 1
  let dp = new Array(length).fill(1)

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[j] + 1, dp[i])
      }
    }
    max = Math.max(dp[i], max)
  }
  return max
}

function longestIncreasingSubsequence(nums) {
  if (nums.length < 2) return nums
  const length = nums.length
  // dp数组记录最长的序列值
  const dp = new Array(length).fill(1)
  // pre数组记录上一次的最大序列值的下标
  const pre = new Array(length).fill(-1)
  // maxLen 记录最长的序列
  let maxLen = 1
  // maxIdx 记录最长序列的最后一个下标
  let maxIdx = 0

  for (let i = 1; i < length; i++) {
    // 判断 i 之前的元素是否有小于 i的
    // 有则dp[i] 加1，pre[i]记录该下标
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i] && dp[j] + 1 >= dp[i]) {
        dp[i] = dp[j] + 1
        pre[i] = j
      }
    }

    if (dp[i] > maxLen) {
      maxLen = dp[i]
      maxIdx = i
    }
  }

  // 回溯构建的序列
  const res = []
  let index = maxIdx

  while (index !== -1) {
    res.unshift(nums[index])
    index = pre[index]
  }
  return res
}

function lengthOfLIS2(nums) {
  if (nums.length === 0) return 0
  const tails = []
  for (let num of nums) {
    let left = 0, right = tails.length
    while (left < right) {
      let mid = Math.floor((left + right) / 2)
      if (tails[mid] < num) {
        left = mid + 1
      } else {
        right = mid
      }
    }
    tails[left] = num
  }
  return tails.length
}

// 返回最长递增子序列数组（O(nlogn) + 回溯）
function longestIncreasingSubsequence2(nums) {
  if (nums.length === 0) return []
  const tail = [nums[0]]
  const len = nums.length
  for (let i = 1; i < len; i++) {
    if (nums[i] > tail[tail.length - 1]) {
      tail.push(nums[i])
    } else {
      let left = 0;
      let right = tail.length - 1
      while (left < right) {
        const mid = Math.floor((left + right) / 2)
        if (tail[mid] < nums[i]) {
          left = mid + 1
        } else {
          right = mid
        }
      }
      tail[left] = nums[i]
    }
  }
  return tail
}


const nums = [10, 9, 2, 5, 3, 7, 101, 18]
console.log(lengthOfLIS(nums))
console.log(lengthOfLIS2(nums))
console.log(longestIncreasingSubsequence(nums)) // 输出最长递增子序列数组
console.log(longestIncreasingSubsequence2(nums)) // 输出最长递增子序列数组
