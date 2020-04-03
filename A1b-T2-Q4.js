let numArray = [-40,23,-15,4,7,18,-29,35,58,95,-167,678];
let positiveOddNumbers = [];
let negativeEvenNumbers = [];
for (var i=0;i<numArray.length;i++) {
  if (numArray[i]%2 !== 0 && Math.sign(numArray[i]) === 1) {
    positiveOddNumbers[positiveOddNumbers.length] = numArray[i];
  }
  else if (numArray[i]%2 === 0 && Math.sign(numArray[i]) === -1) {
    negativeEvenNumbers[negativeEvenNumbers.length] = numArray[i];
  }
}
console.log(`Positive odd numbers: ${positiveOddNumbers}`);
console.log(`Negative even numbers: ${negativeEvenNumbers}`);
