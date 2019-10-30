import React from 'react';

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

export default CommandButton;
