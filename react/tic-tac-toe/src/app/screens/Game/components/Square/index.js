import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

function Square(props) {
  const { value, onClick } = props;
  return (
    <button
      type="button"
      className={styles.square}
      onClick={onClick}
    >
      {value}
    </button>
  );
}

Square.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Square;
