import React from 'react';
import Bill from '../Bill/Bill';
import Tip from '../Tip/Tip';
import People from '../People/People';
import Results from '../Results/Results';
import getTotal from '../../calculate';

function MainCard() {
  const [bill, setBill] = React.useState('');
  const [tipPercent, setTipPercent] = React.useState('');
  const [customTip, setCustomTip] = React.useState('');
  const [numPeople, setNumPeople] = React.useState('');

  const resetDisabled = bill === '' && tipPercent === '' && numPeople === '';

  function resetAll() {
    setBill('');
    setTipPercent('');
    setCustomTip('');
    setNumPeople('');
  }

  const billControls = {
    bill,
    setBill,
  };

  const tipControls = {
    tipPercent,
    setTipPercent,
    customTip,
    setCustomTip,
  };

  const peopleControls = {
    numPeople,
    setNumPeople,
  };

  return (
    <main className="main-card">
      <Bill controls={billControls} />
      <Tip controls={tipControls} />
      <People controls={peopleControls} />
      <Results
        results={getTotal(bill, tipPercent, numPeople)}
        resetDisabled={resetDisabled}
        reset={resetAll}
      />
    </main>
  );
}

export default MainCard;
