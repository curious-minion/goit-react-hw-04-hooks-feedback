import React from 'react';
import PropTypes from 'prop-types';

const Section = ({ children, title }) => (
  <section>
    <h2>{title}</h2>
    {children}
  </section>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
