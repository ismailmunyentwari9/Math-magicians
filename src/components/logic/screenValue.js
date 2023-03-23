import React from 'react';
import PropTypes from 'prop-types';

function BottomValue({ result }) {
  return (
    <div>
      <span>{result}</span>
    </div>
  );
}

BottomValue.propTypes = {
  result: PropTypes.string.isRequired,
};

export default BottomValue;
