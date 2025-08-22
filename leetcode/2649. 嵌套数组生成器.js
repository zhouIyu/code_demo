function* inorderTraversal(arr) {
  if (arr.length === 0) {
    return []
  }
  const len = arr.length
  for (let i = 0; i < len; i++) {
    const item = arr[i]
    if (Array.isArray(item)) { 
      yield* inorderTraversal(item)
    } else {
      yield item
    }
  }
};