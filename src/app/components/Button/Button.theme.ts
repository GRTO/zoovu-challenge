import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';

export const ButtonStyles = () => {
  const theme: ITheme = useTheme();
  const {
    colors: { secondary },
  } = theme;
  return {
    ButtonContainer: css`
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 2.5rem;
      min-width: 7.5rem;
      border: 0.125rem solid ${secondary['gray-2']};
      border-radius: 2.5rem;
      cursor: pointer;
      box-shadow: 2px 2px 2px 2px ${secondary['gray-2']}60;
      opacity: 70;
    `,
  };
};
