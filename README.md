# fibonacci-sequence

### Instructions:

The Fibonacci Sequence is a numerical sequence where each number is the sum of the two numbers before it.

Eg. 0, 1, 1, 2, 3, 5, 8, 13 are the first eight digits in the sequence.

- [x] Using iteration, write a function `fibs` which takes a number and returns an array containing that many numbers from the Fibonacci sequence.

- [x] Using an example input of 8, this function should return the array [0, 1, 1, 2, 3, 5, 8, 13].

- [x] Now write another function `fibsRec` which solves the same problem recursively.

- [x] Test both versions of your functions by passing in various lengths as arguments.

---

### Test it Out

To showcase the recursive effect implemented in your Fibonacci function, do the following:

- [x] Add the following to the start of the function:

`console.log("This was printed recursively");`

- [x] Call the function with 8 as the argument.

If the function is implemented correctly, you should see that sentence printed around 8 times (keep in mind that, depending on the way you implemented the function, you may see 7 instead of 8. This isn’t a bug! It simply depends on how many times the function is actually repeated).

---

### Notes and Resources:

Run code in the terminal by using the following CLI command:

`node <filename.js>`

src: https://github.com/nodejs/nodejs.dev/blob/aa4239e87a5adc992fdb709c20aebb5f6da77f86/content/learn/command-line/node-run-cli.en.md

---

### Solutions:

Generate a Recursive Array of Fibonacci:
https://stackoverflow.com/questions/36415203/how-can-i-recursively-generate-an-array-of-the-fibonacci-sequence

How Recursive Fibonacci Works:
https://stackoverflow.com/questions/8845154/how-does-the-fibonacci-recursive-function-work

---

# merge-sort

### Instructions:

- [x] Build a function mergeSort that takes in an array and returns a sorted array, using a recursive merge sort methodology.

---

#### Test Examples:

`mergeSort([]) → []`\
`mergeSort([73]) → [73]`\
`mergeSort([1, 2, 3, 4, 5]) → [1, 2, 3, 4, 5]`\
`mergeSort([3, 2, 1, 13, 8, 5, 0, 1]) → [0, 1, 1, 2, 3, 5, 8, 13]`\
`mergeSort([105, 79, 100, 110] → [79, 100, 105, 110]`\

---

#### Tips:

Think about what the base case is and what behavior is happening again and again and can actually be delegated to someone else (e.g. that same function!).

It may be helpful to check out the background videos again if you don’t quite understand what should be going on.

---

#### Resources:

Splitting an array & splice vs. slice:
https://stackoverflow.com/questions/9181188/splice-an-array-in-half-no-matter-the-size

Merge 2 projects on Github:
https://stackoverflow.com/questions/1425892/how-do-you-merge-two-git-repositories

---

#### Solution:

Merge sort and comparison function:
https://youtu.be/IJDJ0kBx2LM?t=3383
