/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function findKthLargest(nums, k) {
  nums.sort((a, b) => b - a)
  return nums[k - 1]
}

function findKthLargest2(nums, k) {
  if (nums.length < k) {
    return
  }

  
}

const nums = [3, 2, 3, 1, 2, 4, 5, 5, 6], k = 4
console.log(findKthLargest(nums, k))


