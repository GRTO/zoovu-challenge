import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';

export const InputStyles = () => {
  const theme: ITheme = useTheme();
  const {
    colors: { secondary },
  } = theme;

  return {
    inputContainer: css`
      display: inline-block;
      outline: none;
      border: none;
      font-size: 16px;
      text-align: center;
      font-style: italic;

      &::placeholder {
        color: ${secondary['gray-1']};
      }
    `,
    inputWrapper: css`
      border-bottom: 2px solid ${secondary['gray-2']};
      padding: 10px 0;
    `,
  };
};
