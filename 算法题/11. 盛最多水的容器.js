/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0
  let right = height.length - 1
  let maxArea = 0
  while (left < right) {
    const w = right - left
    const h = Math.min(height[left], height[right])
    const area = w * h
    maxArea = Math.max(maxArea, area)
    if (height[left] < height[right]) {
      left++
    } else {
      right--
    }
  }

  return maxArea
};