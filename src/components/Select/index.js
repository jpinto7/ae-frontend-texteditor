import React from 'react';
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

export default Select;
