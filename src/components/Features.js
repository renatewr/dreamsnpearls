import React from 'react';

const FeatureGrid = ({ gridItems }) => (
  <section className="main special">
  <ul className="features">
    {gridItems.map(item => (
      <li key={item.image}>
          <p className="">
            <img alt="" src={item.image} />
          </p>
          <h3>{item.text}</h3>
          <p>{item.price}</p>        
      </li>
    ))}
    </ul>
    <footer className="major">
      <ul className="actions">
        <li>Something here?</li>
      </ul>
    </footer>
  </section>
);

export default FeatureGrid;
