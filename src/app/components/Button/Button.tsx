import React from 'react';
import { ButtonStyles } from './Button.theme';

interface IButton {
  onClick: () => void;
}

export const Button: React.FC<IButton> = ({ onClick, children }) => {
  const buttonStyles = ButtonStyles();
  return (
    <div css={buttonStyles.ButtonContainer} onClick={onClick}>
      {children}
    </div>
  );
};
