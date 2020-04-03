// import given data
let studentRecord = {
    ENG1002:75,
    ENG1003:80,
    ENG1021:98,
    ENG1051:55
};
// define variables used to access/store data in array
var x, mark, code;
for (x in studentRecord) {
		mark = studentRecord[x];
// assign grade codes to respective mark
		if (mark >= 80 && mark <= 100) {
			 code = "HD";
		 }
	else if (mark >= 70 && mark <= 79) {
			 code = "D";
		 }
	else if (mark >= 60 && mark <= 69) {
			 code = "C";
		 }
	else if (mark >= 50 && mark <= 59) {
			 code = "P";
		 }
	else if (mark >= 0 && mark <= 49 && mark != 45) {
			 code = "N";
		 }
  // all other possibilities (i.e. 45) will return hurdle fail
	else {
			 code = "NH";
		 }
	console.log(`${x}: ${studentRecord[x]}` + ` (${code})`);
}
