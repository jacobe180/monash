// Init variables
var a = 15.5, b = 0, alphadeg = 34.5, alpharad = 0;
// Convert to radians
alpharad = alphadeg * (Math.PI/180);
// Calculate side b using trig
b = Math.tan(alpharad)*a;
// Round to two decimal places
b = (Math.round(b * 100))/100;
// Print answer
console.log("The length of side b is " + b +"cm");
