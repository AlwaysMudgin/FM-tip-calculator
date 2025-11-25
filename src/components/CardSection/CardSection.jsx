import React from 'react';

function CardSection({ name, children }) {
  return <section className={`card-section ${name}`}>{children}</section>;
}

export default CardSection;
