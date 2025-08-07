function lengthOfLIS(nums) {
  const length = nums.length
  if (length === 0) return []
  const dp = new Array(length).fill(1)
  const prev = new Array(length).fill(-1)
  let maxLen = 1
  let maxIdx = 0
  for (let i = 1; i < length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i] && dp[j] + 1 >= dp[i]) {
        dp[i] = dp[j] + 1
        prev[i] = j
      }
    }

    if (dp[i] > maxLen) {
      maxLen = dp[i]
      maxIdx = i
    }
  }

  let index = maxIdx
  const res = []
  while (index !== -1) {
    res.unshift(nums[index])
    index = prev[index]
  }

  return res
}


console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]))
console.log(lengthOfLIS([1, 2, 3, 4, 5]))
console.log(lengthOfLIS([5, 4, 3, 2, 1]))
console.log(lengthOfLIS([]))

function lengthOfLIS2(nums) {
  const length = nums.length
  if (length === 0) return []
  const tail = [nums[0]]
  for (let i = 1; i < length; i++) {
    if (nums[i] > tail[tail.length - 1]) {
      tail.push(nums[i])
    } else {
      let left = 0
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



console.log(lengthOfLIS2([10, 9, 2, 5, 3, 7, 101, 18]))
console.log(lengthOfLIS2([1, 2, 3, 4, 5]))
console.log(lengthOfLIS2([5, 4, 3, 2, 1]))
console.log(lengthOfLIS2([]))


