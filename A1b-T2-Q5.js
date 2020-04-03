let income = 60000;
let taxDue = 0;
if (income >= 0 && income <= 18200)
{
taxDue = 0;
}
else if (income >= 18201 && income <= 37000)
  {
    taxDue = (income - 18200) * 0.19;
  }
else if (income >= 37001 && income <= 90000)
  {
    taxDue = 3572 + (income - 37000) * 0.325;
  }
else if (income >= 90001 && income <= 180000)
  {
    taxDue = 20797 + (income - 90000) * 0.37;

  }
else if (income >= 180001)
  {
    taxDue = 54097 + (income - 180000) * 0.45;
  }
console.log(`Based on the taxable income of $${income.toFixed(2)}, the total tax due is $${taxDue.toFixed(2)}.`);
