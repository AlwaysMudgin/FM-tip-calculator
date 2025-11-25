import React from 'react';
import CardSection from '../CardSection/CardSection';

function Bill({ controls }) {
  const { bill, setBill } = controls;

  return (
    <CardSection name="bill">
      <label className="section-label" htmlFor="bill">
        Bill
      </label>
      <input
        className="input bill"
        name="bill"
        id="bill"
        type="number"
        placeholder="0"
        value={bill}
        onChange={(event) => setBill(event.target.value)}
      />
    </CardSection>
  );
}

export default Bill;
