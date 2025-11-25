import React from 'react';
import Bill from '../Bill/Bill';
import Tip from '../Tip/Tip';
import People from '../People/People';
import Results from '../Results/Results';

function MainCard() {
  const [bill, setBill] = React.useState();
  const [tipPercent, setTipPercent] = React.useState(15);
  const [numPeople, setNumPeople] = React.useState(1);

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

  const resultControls = {
    bill,
    tipPercent,
    numPeople,
  };

  return (
    <main className="main-card">
      <Bill controls={billControls} />
      <Tip controls={tipControls} />
      <People controls={peopleControls} />
      <Results controls={resultControls} />
    </main>
  );
}

export default MainCard;
