/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let i = 0
  const len = nums.length
  const res = []
  while (i < len - k + 1) {
    const curr = Math.max(...nums.slice(i, i + k))
    res.push(curr)
    i++
  }
  return res
};

var maxSlidingWindow2 = function (nums, k) {
  const len = nums.length
  const deque = []; // 存储下标的双端队列
  const result = [];

  for (let i = 0; i < len; i++) {
    // 1. 移除不在窗口的元素
    while (deque.length && deque[0] < i - k + 1) {
      deque.shift()
    }

    // 2. 移除比当前元素小的元素，保持单调递减
    while (deque.length && nums[deque[deque.length - 1]] <= nums[i]) {
      deque.pop()
    }

    // 3. 将当前元素下标加入队尾
    deque.push(i)

    // 4. 如果窗口大小已经达到k, 记录结果
    if (i >= k - 1) {
      result.push(nums[deque[0]])
    }
  }

  return result
}


const nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3
console.log(maxSlidingWindow(nums, k))
console.log(maxSlidingWindow2(nums, k))