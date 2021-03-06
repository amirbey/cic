import React from 'react';

/*
  This will be displayed on the homepage. Ideally, you want to highlight key goals of the website
*/

const Hero = () => (
  <section className="usa-hero">
    <div className="grid-container">
      <div className="usa-hero__callout">
        <h2 className="usa-hero__heading">
          <span className="usa-hero__heading--alt">Note:</span>This site is under development.
        </h2>
        <p>
          We are working on the new Cloud Information Center home.  Until then, please visit the production Cloud Information Center here:</p>
        <a className="usa-button" href="https://www.gsa.gov/cic">CIC Production Site</a>
      </div>
    </div>
  </section>
);

export default Hero;
