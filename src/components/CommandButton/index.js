import React from 'react';
import PropTypes from 'prop-types';

const CommandButton = ({ cmd, arg, children, onClick, ...buttonProps }) => {
  const handleOnMouseDown = event => {
    event.preventDefault();
    document.execCommand(cmd, false, arg);
    onClick(cmd);
  };

  return (
    <button
      {...buttonProps}
      key={cmd}
      onMouseDown={handleOnMouseDown}
    >
      {children}
    </button>
  );
};

CommandButton.propTypes = {
  cmd: PropTypes.string.isRequired,
  arg: PropTypes.any,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default CommandButton;
