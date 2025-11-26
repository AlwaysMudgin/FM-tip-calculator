export default function getTotal(bill, tipPercent, numPeople) {
  if (bill === '' || tipPercent === '' || numPeople === '') {
    return {
      tipEach: '0.00',
      totalEach: '0.00',
    };
  }

  const tip = (bill * tipPercent) / 100;
  let tipEach = tip / numPeople;

  let totalEach = (bill + tip) / numPeople;

  return { tipEach: tipEach.toFixed(2), totalEach: totalEach.toFixed(2) };
}
