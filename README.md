# fibonacci-sequence

### Instructions:

The Fibonacci Sequence is a numerical sequence where each number is the sum of the two numbers before it.

Eg. 0, 1, 1, 2, 3, 5, 8, 13 are the first eight digits in the sequence.

- [x] Using iteration, write a function `fibs` which takes a number and returns an array containing that many numbers from the Fibonacci sequence.

- [x] Using an example input of 8, this function should return the array [0, 1, 1, 2, 3, 5, 8, 13].

- [] Now write another function `fibsRec` which solves the same problem recursively.

- [] Test both versions of your functions by passing in various lengths as arguments.

---

### Test it Out

To showcase the recursive effect implemented in your Fibonacci function, do the following:

- [] Add the following to the start of the function:

`console.log("This was printed recursively");`

- [] Call the function with 8 as the argument.

If the function is implemented correctly, you should see that sentence printed around 8 times (keep in mind that, depending on the way you implemented the function, you may see 7 instead of 8. This isn’t a bug! It simply depends on how many times the function is actually repeated).

---

### Notes and Resources:

Run code in the terminal by using the following CLI command:

`node <filename.js>`

src: https://github.com/nodejs/nodejs.dev/blob/aa4239e87a5adc992fdb709c20aebb5f6da77f86/content/learn/command-line/node-run-cli.en.md
