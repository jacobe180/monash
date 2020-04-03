var radius = 0, ratio = 0, area = 0, circumference = 0;
do {
  radius++;
  area = Math.PI * Math.pow(radius,2);
  circumference = 2 * Math.PI * radius;
  ratio = area / circumference;
  if (ratio < 30) {
    console.log(`Radius: ${radius}, ratio: ${ratio}`);
  }
} while (ratio < 30);
