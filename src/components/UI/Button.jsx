import React, { memo } from 'react';
import { Button as BButton } from 'react-bootstrap';
import './Button.css';

export const Button = memo(({ onClick, children, ...props }) => {
  return (
    <BButton className={'custom-button'} onClick={onClick} {...props}>
      {children}
    </BButton>
  );
});
