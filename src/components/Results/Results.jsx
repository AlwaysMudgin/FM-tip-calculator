import React from 'react';

function Results() {
  return (
    <section className="results-card">
      <div className="results-content">
        <div className="result tip">
          <div className="result-text">
            <p className="result-label">Tip Amount</p>
            <p className="per-person">/ person</p>
          </div>
          <p className="result-value">$4.27</p>
        </div>
        <div className="result total">
          <div className="result-text">
            <p className="result-label">Total</p>
            <p className="per-person">/ person</p>
          </div>
          <p className="result-value">$32.79</p>
        </div>
      </div>
      <button className="btn reset" type="button" aria-label="reset values">
        RESET
      </button>
    </section>
  );
}

export default Results;
