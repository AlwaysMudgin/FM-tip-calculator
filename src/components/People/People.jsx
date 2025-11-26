import React from 'react';
import CardSection from '../CardSection/CardSection';

function People({ controls }) {
  const { numPeople, setNumPeople } = controls;

  return (
    <CardSection name="people">
      <label className="section-label" htmlFor="people">
        Number of People
      </label>
      <input
        className="input people"
        name="people"
        id="people"
        type="number"
        placeholder={0}
        min={1}
        step={1}
        value={numPeople}
        onChange={(event) => setNumPeople(Number(event.target.value))}
      />
    </CardSection>
  );
}

export default People;
