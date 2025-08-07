function Union(arr1, arr2) {
  let set = new Set(arr1);
  for (let item of arr2) {
    set.add(item);
  }
  return Array.from(set);
}

function Union2(arr1, arr2) {
  const map = new Map();
  const result = [];
  for (const item of arr1) {
    if (!map.has(item)) {
      map.set(item, true);
      result.push(item);
    }
  }
  for (const item of arr2) {
    if (!map.has(item)) {
      map.set(item, true);
      result.push(item);
    }
  }
  return result;
}