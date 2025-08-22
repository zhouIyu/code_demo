/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let res = []
  const last = nums.length - k + 1
  for (let i = 0; i < last; i++) {
    const list = nums.slice(i, i + k)
    res.push(Math.max(...list))
  }
  return res
};

var maxSlidingWindow2 = function (nums, k) {
  const length = nums.length
  let deQueen = []
  let res = []
  for (let i = 0; i < length; i++) {
    // 1. 移除不在窗口的下标
    while (deQueen.length && deQueen[0] < i - k + 1) {
      deQueen.shift()
    }

    // 2. 移除小于当前值的下标，保持单调递减
    while (deQueen.length && nums[deQueen[deQueen.length - 1]] <= nums[i]) {
      deQueen.pop()
    }

    // 3. 将当前下标加入队尾
    deQueen.push(i)

    // 4. 判断是否窗口大小是否已经到了K，记录最大值
    if (k - 1 <= i) { 
      res.push(nums[deQueen[0]])
    }
  }

  return res
}


const nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3
console.log(maxSlidingWindow(nums, k))
console.log(maxSlidingWindow2(nums, k))