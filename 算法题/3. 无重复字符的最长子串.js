/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let left = 0
  let max = 0
  const cache = new Map()
  const len = s.length
  for (let right = 0; right < len; right++) {
    const char = s[right]
    if (cache.has(char)) {
      left = cache.get(char) + 1
    }
    cache.set(char, right)
    max = Math.max(max, right - left + 1)
  }
  return max
};

console.log(lengthOfLongestSubstring('pwwkew'))