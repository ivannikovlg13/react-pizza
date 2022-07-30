import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

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

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;
