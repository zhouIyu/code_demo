const obj = {
  a: {
    b: {
      d: 1
    },
    c: {
      e: {
        f: 2
      }
    }
  },
  x: {
    y: 3
  }
}

function dfs(obj, n) {
  const result = []
  const helper = function (data, n) {
    if (n === 0) return
    for (const key in data) {
      result.push(key)
      console.log(result)
      if (obj[key] && typeof obj[key] === 'object') {
        helper(obj[key], n - 1)
      }
    }
  }
  helper(obj, n)
  return result
}

console.log(dfs(obj, 2))