import React from 'react';
import Bill from '../Bill/Bill';
import Tip from '../Tip/Tip';
import People from '../People/People';
import Results from '../Results/Results';
import getTotal from '../../calculate';

function MainCard() {
  const [bill, setBill] = React.useState(0);
  const [tipPercent, setTipPercent] = React.useState();
  const [numPeople, setNumPeople] = React.useState(1);

  function resetAll() {
    setBill(0);
    setTipPercent();
    setNumPeople(1);
  }

  const billControls = {
    bill,
    setBill,
  };

  const tipControls = {
    tipPercent,
    setTipPercent,
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
        reset={resetAll}
      />
    </main>
  );
}

export default MainCard;
