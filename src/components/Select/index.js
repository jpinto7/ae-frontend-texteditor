import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Select = ({ options, onChange, value, disabled }) => {
  const handleOnChange = event => {
    const { value } = event.target;
    document.execCommand('insertText', false, value);
    onChange(value);
  };

  return (
    <select id="select-list" onChange={handleOnChange} value={value} disabled={disabled}>
      <option value="">CHOOSE A SYNONYM</option>
      {options.map(option => <option key={option} value={option}>{option}</option>)}
    </select>
  );
};

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired
};

export default Select;
