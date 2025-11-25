import React from 'react';
import CardSection from '../CardSection/CardSection';

function Tip({ controls }) {
  const { tipPercent, setTipPercent } = controls;

  return (
    <CardSection name="tip">
      <p className="section-label">Select Tip %</p>
      <div className="radio-group">
        <input
          className="input tip"
          type="radio"
          name="tip"
          id={5}
          value={5}
          checked={tipPercent === 5}
          onChange={(event) => setTipPercent(Number(event.target.value))}
        />
        <label className="radio-label" htmlFor={5}>
          5%
        </label>
        <input
          className="input tip"
          type="radio"
          name="tip"
          id={10}
          value={10}
          checked={tipPercent === 10}
          onChange={(event) => setTipPercent(Number(event.target.value))}
        />
        <label className="radio-label" htmlFor={10}>
          10%
        </label>
        <input
          className="input tip"
          type="radio"
          name="tip"
          id={15}
          value={15}
          checked={tipPercent === 15}
          onChange={(event) => setTipPercent(Number(event.target.value))}
        />
        <label className="radio-label" htmlFor={15}>
          15%
        </label>
        <input
          className="input tip"
          type="radio"
          name="tip"
          id={25}
          value={25}
          checked={tipPercent === 25}
          onChange={(event) => setTipPercent(Number(event.target.value))}
        />
        <label className="radio-label" htmlFor={25}>
          25%
        </label>
        <input
          className="input tip"
          type="radio"
          name="tip"
          id={50}
          value={50}
          checked={tipPercent === 50}
          onChange={(event) => setTipPercent(Number(event.target.value))}
        />
        <label className="radio-label" htmlFor={50}>
          50%
        </label>
        <input
          className="input tip"
          type="radio"
          name="tip"
          id="custom"
          disabled
        />
        <label className="radio-label custom" htmlFor="custom">
          Custom
        </label>
      </div>
    </CardSection>
  );
}

export default Tip;
