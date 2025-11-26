import React from 'react';
import CardSection from '../CardSection/CardSection';

function Bill({ controls }) {
  const { bill, setBill } = controls;

  return (
    <CardSection name="bill">
      <h1 className="section-label" htmlFor="bill">
        Bill
      </h1>
      <input
        className="input bill"
        name="bill"
        id="bill"
        type="number"
        placeholder={0}
        min={0}
        step={0.01}
        value={bill}
        onChange={(event) => setBill(Number(event.target.value))}
      />
    </CardSection>
  );
}

export default Bill;
