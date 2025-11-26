import React from 'react';
import CardSection from '../CardSection/CardSection';

const TIP_BUTTONS = [5, 10, 15, 25, 50];

function Tip({ controls }) {
  const { tipPercent, setTipPercent, customTip, setCustomTip } = controls;

  function handleClick(event) {
    setTipPercent(Number(event.target.dataset.tipValue));
  }

  function handleCustomTip(event) {
    const input = event.target.value;
    if (input === '') {
      setCustomTip(input);
    } else {
      setCustomTip(Number(input));
      setTipPercent(Number(input));
    }
  }

  return (
    <CardSection name="tip">
      <h1 className="section-label">Select Tip %</h1>
      <div className="tip-btn-container">
        {TIP_BUTTONS.map((value) => {
          const classString =
            tipPercent === value ? 'tip-btn active' : 'tip-btn';
          return (
            <button
              key={value}
              className={classString}
              type="button"
              data-tip-value={value}
              onClick={handleClick}
            >
              {value}%
            </button>
          );
        })}
        <input
          className="input custom-tip"
          type="number"
          placeholder="Custom"
          value={customTip}
          onChange={handleCustomTip}
        />
      </div>
    </CardSection>
  );
}

export default Tip;
