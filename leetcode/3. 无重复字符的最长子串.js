/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let left = 0, right = 0
  let max = 0
  const len = s.length
  const cache = []
  while (right < len) {
    const cur = s[right]
    let index = cache.indexOf(cur)
    if (index > -1) {
      max = Math.max(cache.length, max)
      while (index >= 0) {
        cache.shift()
        left++
        index--
      }
    }

    cache.push(cur)
    right++
  }

  return Math.max(cache.length, max)
};

console.log(lengthOfLongestSubstring('pwwkew'))