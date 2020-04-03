var a = 5, b = 25, c = 20, root1 = "", root2="";
root1 = (-b - Math.pow(Math.pow(b,2)-4*a*c,0.5))/(2*a);
root2 = (-b + Math.pow(Math.pow(b,2)-4*a*c,0.5))/(2*a);
console.log(`Roots are ${root1} and ${root2}.`);