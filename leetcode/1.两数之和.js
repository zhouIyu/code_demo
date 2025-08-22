/**
 * 
 * @param {number[]} nums 
 * @param {number} target
 * @return {number[]} 
 */
function twoSum(nums, target) {
  const len = nums.length
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
  return []
}

/**
 * 
 * @param {number[]} nums 
 * @param {number} target
 * @return {number[]} 
 */
function twoSum2(nums, target) {
  const len = nums.length
  const map = new Map()
  for (let i = 0; i < len; i++) {
    const num = target - nums[i]
    if (map.has(num)) {
      return [map.get(num), i]
    }
    map.set(nums[i], i)
  }
  return []
}

function twoSum3(nums, target) {
  let left = 0
  let right = nums.length - 1
  while (left < right) {
    const sum = nums[left] + nums[right]
    if (sum === target) {
      return [left, right]
    } else if (sum < target) { 
      left ++
    } else if(sum > target){
      right--
    }
  }
}



const nums = [2, 7, 11, 15], target = 9
console.log(twoSum(nums, target))
console.log(twoSum2(nums, target))
console.log(twoSum3(nums, target))