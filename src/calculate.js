export default function getTotal(bill, tipPercent, numPeople) {
  const tip = Math.ceil(bill * (tipPercent / 100) * 100) / 100;
  const billEach = Math.ceil((bill / numPeople) * 100) / 100;

  let tipEach = Math.ceil((tip / numPeople) * 100) / 100;
  tipEach = tipEach.toFixed(2);
  if (isNaN(tipEach)) {
    tipEach = '0.00';
  }
  let totalEach = billEach + Number(tipEach);
  totalEach = totalEach.toFixed(2);
  if (isNaN(totalEach)) {
    totalEach = '0.00';
  }

  return { tipEach, totalEach };
}
