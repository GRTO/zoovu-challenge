import React from 'react';
import { InputStyles } from './Input.theme';

interface IInput {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}
// display: inline-block;
export const Input: React.FC<IInput> = ({ placeholder, onChange }) => {
  const inputStyles = InputStyles();
  return (
    <div css={inputStyles.inputWrapper}>
      <input css={inputStyles.inputContainer} placeholder={placeholder} onChange={onChange} maxLength={15} />
    </div>
  );
};
