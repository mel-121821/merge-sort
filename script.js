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

// Pseudocode:

// start with empty arr and num, ex. 8
// reduce the num by 1 and 2 for each iteration and use result fo calculate next val in array
// push new val to array

// changed to reduce the num by 1 for each iteration after re-reading instructions
// fn() should only need to run 8 times, so only count down by 1

// base case: hit zero
// when you reach num == 0 push num at index 0
// when you reach num == 1 push num at index 1

// Thoughts
// should be thinking in indexes rather then sum
// as the stack is traversed back up, use num for index

// 1st few attempts:
// function fibsRec(num, arr = []) {
//   console.log("this was printed recursively");
//   if (num == 0 || num == 1) {
//     return arr.push(num);
//   } else {
//     arr.push(fibsRec(num - 2) + fibsRec(num - 1));
//     //arr.push( // result ot fibsRec returning arr.index(num-2) + result of sibsRec returning arr.index(num-1))
//     // let value = fibsRec(num - 2, arr) + fibsRec(num - 1, arr);
//     // arr.push(value);
//   }
// }
