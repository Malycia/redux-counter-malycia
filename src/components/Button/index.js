import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, nbVote, vote }) => (
  <button
    className="app-button"
    onClick={vote}
  >
    {name} ({nbVote})
  </button>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  nbVote: PropTypes.number.isRequired,
  vote: PropTypes.func.isRequired,
};

export default Button;
