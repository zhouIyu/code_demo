/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const arr = [...nums1, ...nums2]
  arr.sort((a, b) => a - b)
  const left = 0
  const right = arr.length - 1
  const mid = Math.floor((left + right) / 2)
  console.log(mid)
  if (arr.length % 2 === 0) {
    return (arr[mid] + arr[mid + 1]) / 2
  }
  return arr[mid]
};

console.log(findMedianSortedArrays([1, 2], [3]))