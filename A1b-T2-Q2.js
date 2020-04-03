// repeating this for every integer from 2 to 100
for (var number = 2; number <= 100; number++) {
  // establishing variable which gives amount of divisors for 'number'
  var g = 0;
  // loop division to find factors until denominator is equal to 'number'
	for (var i = 1; i <= number; i++) {
    // if remainder is 0, 'i' is a divisor of 'number'
	   if ((number%i) === 0) {
       // hence increase tally of divisors of 'number' by 1.
	      g++;
      }
    }
    // if amount of divisors of 'number' were 2 (i.e. only 1 and itself)
    // print number, as it is by definition, prime.
if (g === 2)  {
  console.log(number);
  }
}
