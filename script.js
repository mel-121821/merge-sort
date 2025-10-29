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
