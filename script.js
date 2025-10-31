// Merge Sort - Recursive Function

// take an array:

const arr = [3, 2, 1, 13, 8, 5, 0, 1];

// arr split tests
// const midPoint = Math.floor(arr.length / 2);
// console.log(arr);
// console.log(midPoint);
// console.log(arr.slice(0, midPoint));
// console.log(arr.slice(midPoint, arr.length));

// use Math.floor to handle arrs with an odd # of values
// remember that splice mutates the original arr, but slice does not
// using arr.slice(midPoint, -1) would remove the last element of the arr, so I used arr.lenght instead

// Pseudocode:

// base case: arr <= 1

// split arr > arr.length / 2
// if arr <= 1 return
// else split again

// with returned arrs, compare
// add smallest value first to new arr, then largest
// when one list becomes empty, copy all values from the remaining arr into the sorted arr

function mergeSort(arr) {
  console.log(`This function was called recursively with ${arr}`);
  if (arr.length <= 1) {
    return arr;
  }
  const midPoint = Math.floor(arr.length / 2);
  console.log(`leftArr sliced at midpoint: ${arr.slice(0, midPoint)}`);
  const leftArr = mergeSort(arr.slice(0, midPoint));
  console.log(
    `rightArr sliced at midpoint: ${arr.slice(midPoint, arr.length)}`
  );
  const rightArr = mergeSort(arr.slice(midPoint, arr.length));
  return compare(leftArr, rightArr);
}

mergeSort(arr);

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
  console.log(`Values compared and placed in sorted order: ${sortedArr}`);
  return sortedArr;
}

// const arr2 = [2, 4, 5, 7];
// const arr3 = [1, 6, 4];

// compare(arr2, arr3);

// Steps (left side):
// 1: Take arr: [3, 2, 1, 13, 8, 5, 0, 1], divide by 2 and get vals from 0 to midpoint > arr is now [3, 2, 1, 13]
// 2: arr.length is not <= 1 > skip
// 3: call again with arr = [3, 2, 1, 13]

// 1: Take arr: [3, 2, 1, 13], divide by 2 and get vals from 0 to midpoint > arr is now [3, 2]
// 2: arr.length is not <= 1 > skip
// 3: call again with arr = [3, 2]

// 1: Take arr: [3, 2] , divide by 2 and get vals from 0 to midpoint > arr is now [3]
// 2: arr.length is <= 1 > return [3]

// Steps (right side):
// 1: call mergeSort on r side of arr (starting at bottom of recursive depth) > arr is now [2]
// 2: arr.length is <= 1 > return [2]

// 4: take return statements from l and r side arrays > [3] and [2]
// 5: do a linear comparison 3 > 2
// 6: push compared values into new arr [2, 3]
// 7: return arr = [2, 3] > this is resolved to the left side, 1 level back up on recursion stack

// right side
//
