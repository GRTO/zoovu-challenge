import React from 'react';
import { ButtonStyles } from './Button.theme';

export interface IButtonProps {
  onClick: () => void;
}

export const Button: React.FC<IButtonProps> = ({ onClick, children }) => {
  const buttonStyles = ButtonStyles();
  return (
    <div css={buttonStyles.ButtonContainer} onClick={onClick}>
      {children}
    </div>
  );
};
