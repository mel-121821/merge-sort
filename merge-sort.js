// Fibonacci Sequence - Iterative Version

function fibs(num) {
  const arr = [];
  for (let i = 1; i <= num; i++) {
    if (arr.length == 0) {
      arr.push(0);
    } else if (arr.length == 1) {
      arr.push(1);
    } else {
      arr.push(arr.at(-1) + arr.at(-2));
    }
  }
  console.log(arr);
}

fibs(8);

// Fibonacci Sequence - Recursive Version

function fibsRec(num) {
  console.log("This was printed recursively");
  if (num == 0) {
    return [0];
  }
  if (num == 1) {
    return [0, 1];
  } else {
    const arr = fibsRec(num - 1);
    arr.push(arr[num - 1] + arr[num - 2]);
    return arr;
  }
}

console.log(fibsRec(5));
console.log(fibsRec(8));

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
