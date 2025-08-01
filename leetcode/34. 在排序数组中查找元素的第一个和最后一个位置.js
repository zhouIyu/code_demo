/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let res = [-1, -1]
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (nums[mid] === target) {
      let i = j = mid
      while (i >= left) {
        if (nums[i] === target) {
          res[0] = i
        }
        i--
      }

      while (j <= right) {
        if (nums[j] === target) {
          res[1] = j
        }
        j++
      }
      return res
    } else if (nums[mid] < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return res
};

const nums = [5, 7, 7, 8, 8, 10], target = 8

console.log(searchRange(nums, target))