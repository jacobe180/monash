console.log("Odd numbers between 0-50");
// use loop to parse numbers from 0 to 50
for (var num = 0; num <= 50; num++) {
  // odd numbers cannot be divided by 2
  if (num % 2 !== 0) {
    // print the number if it is odd
    console.log(num);
  }
}
console.log("\nEven numbers between 51-100");
// use loop to parse numbers from 51 to 100
for (var num = 51; num <= 100; num++) {
  // even numbers can be divided by 2
  if (num % 2 === 0) {
    // print the number if it is even
    console.log(num);
  }
}
