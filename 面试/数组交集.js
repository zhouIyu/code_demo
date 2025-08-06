function intersection(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  const result = [...set1].filter(item => set2.has(item));
  return result;
}

function intersection2(arr1, arr2) {
  const map = new Map();
  const result = [];
  for (const item of arr1) {
    map.set(item, true);
  }
  for (const item of arr2) {
    if (map.has(item)) {
      result.push(item);
    }
  }
  return result;
}

