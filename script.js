// Merge Sort - Recursive Function

const arr = [3, 2, 1, 13, 8, 5, 0, 1];

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const midPoint = Math.floor(arr.length / 2);
  const leftArr = mergeSort(arr.slice(0, midPoint));
  const rightArr = mergeSort(arr.slice(midPoint, arr.length));
  return compare(leftArr, rightArr);
}

function compare(a, b) {
  const sortedArr = [];
  let i = 0;
  let j = 0;
  while (i < a.length && j < b.length) {
    if (a[i] <= b[j]) {
      sortedArr.push(a[i]);
      i++;
    }
    if (a[i] > b[j]) {
      sortedArr.push(b[j]);
      j++;
    }
  }
  while (i < a.length) {
    sortedArr.push(a[i]);
    i++;
  }
  while (j < b.length) {
    sortedArr.push(b[j]);
    j++;
  }
  return sortedArr;
}

console.log(mergeSort(arr));
