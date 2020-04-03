// input given data
let dataArray = [2,2,3,3,3,4,5,5,7,8,8,34,45,45,67,67,95,96,567,578];
  dataArray.total = 0;
for (var i=0; i<dataArray.length; i++) {
  dataArray.total += dataArray[i];
}
// calculate mean
dataArray.mean = dataArray.total / dataArray.length;
// calculate median position
dataArray.medianpos = ((dataArray.length + 1) / 2);
// calculate median
if (dataArray.medianpos === 0) {
  dataArray.median = dataArray[dataArray.medianpos];
}
else {
  dataArray.median = (dataArray[Math.floor(dataArray.medianpos)-1] + dataArray[Math.floor(dataArray.medianpos)]) / 2;
}
// calculating standard deviation
dataArray.numerator = 0;
for (var x=0;x<dataArray.length;x++) {
  dataArray.numerator += Math.pow((dataArray[x]-dataArray.mean),2);
}
dataArray.std = Math.pow((dataArray.numerator/dataArray.length),0.5);
console.log(`Mean: ${dataArray.mean}
  Median: ${dataArray.median}
  Standard deviation: ${dataArray.std}`);
