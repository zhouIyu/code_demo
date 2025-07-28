function reduce(nums, fn, init) {
  if (nums.length === 0) return init
  nums.forEach(num => {
    init  = fn(init, num)
  });
  return init
}