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
