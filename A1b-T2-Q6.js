// input given variables
var taxi = {
  totalDistance:57.2,
  timeTaken:45,
  avgSpeed:80,
  timeStart:22.30,
  timeWait:2.09,
};
// adding some properties to object to be used in calcuations
taxi.taxiFare = 0;
taxi.timeMeterStart = 0;
taxi.minutesElapsed = 0;
// calculating basic flag rate between 5am and 9pm
if (taxi.timeStart >= 5 && taxi.timeStart <= 21)
{
  taxi.taxiFare += 4.20 + (taxi.timeWait * 0.70);
}
// calculating basic flag rate between 9pm and 5am,
// accounting for nature of 24-hour time
else if (taxi.timeStart > 21 && taxi.timeStart < 24 ||
		 taxi.timeStart > 0 && taxi.timeStart < 5)
{
  taxi.taxiFare += 5.20 + taxi.timeWait * 0.70;
}
// calculating what time during the day/night the taxi begins driving (in seconds)
taxi.timeMeterStart = (Math.floor(taxi.timeStart)*60 +
					   (taxi.timeStart - Math.floor(taxi.timeStart))*100 +
					   taxi.timeWait)*60;
// calculating how long since taxi was called (in seconds)
taxi.minutesElapsed += taxi.timeWait*60;
// calculating how long, in seconds, the trip lasts for (based on input data)
taxi.timeTaken *= 60;
//
for (taxi.minutesElapsed;taxi.minutesElapsed <=
	 taxi.timeTaken;taxi.minutesElapsed++) {
  // between 5am and 9pm
  if (taxi.timeMeterStart >= 18000 && taxi.timeMeterStart <= 75600)
  {
    taxi.timeMeterStart += 1;
    taxi.taxiFare += 1.62*((taxi.avgSpeed/60)/60);
  }
	// between 9pm and 5am
  else if ((taxi.timeMeterStart >= 75660 && taxi.timeMeterStart <= 86340) ||
  taxi.timeMeterStart >= 0 && taxi.timeMeterStart < 18000)
  {
    taxi.timeMeterStart += 1;
    taxi.taxiFare += 1.80*((taxi.avgSpeed/60)/60);
  }
  // resetting to reflect properties of 24-hour time
  else if (taxi.timeMeterStart === 86400)
  {
	  taxi.timeMeterStart = 0;
	}
}
// output calculated taxi fare
console.log("$"+taxi.taxiFare.toFixed(2));
