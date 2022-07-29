import React from 'react';
import classNames from 'classnames';

const Button = ({ clickBtn, className, outline, children }) => {
  return (
    <button
      onClick={clickBtn}
      className={classNames('button', className, {
        'button-outline': outline,
      })}>
      {children}
    </button>
  );
};

export default Button;
