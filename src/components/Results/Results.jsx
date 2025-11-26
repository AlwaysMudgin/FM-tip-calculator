import React from 'react';

function Results({ results, reset, resetDisabled }) {
  return (
    <section className="results-card">
      <div className="results-content">
        <div className="result tip">
          <div className="result-text">
            <p className="result-label">Tip Amount</p>
            <p className="per-person">/ person</p>
          </div>
          <p className="result-value">{`$${results.tipEach}`}</p>
        </div>
        <div className="result total">
          <div className="result-text">
            <p className="result-label">Total</p>
            <p className="per-person">/ person</p>
          </div>
          <p className="result-value">{`$${results.totalEach}`}</p>
        </div>
      </div>
      <button
        className="btn reset"
        type="button"
        aria-label="reset values"
        disabled={resetDisabled}
        onClick={reset}
      >
        RESET
      </button>
    </section>
  );
}

export default Results;
