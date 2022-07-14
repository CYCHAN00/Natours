import React from 'react';

const Button = ({ className, type, children }) => {
  const buttonClasses = 'btn ' + className;

  return (
    <button className={buttonClasses} type={type}>
      {children}
    </button>
  );
};

export default Button;
