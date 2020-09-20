import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';

export const WelcomeStyles = () => {
  return {
    welcomeContainer: css`
      display: flex;
      flex: 1;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      & > div {
        padding: 15px 0;
      }
    `,
    welcomeTitle: css`
      font-size: 16px;
      font-weight: bold;
    `,
  };
};

export const ButtonGameStyles = () => {
  const theme: ITheme = useTheme();
  const {
    colors: { primary },
  } = theme;

  return {
    containerButton: css`
      display: flex;
      flex: 1;
      justify-content: space-evenly;
      align-items: center;
      margin: 0 10px;
    `,
    contentButton: css`
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${primary.purple};
      font-weight: bold;
    `,
  };
};
