import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';

export const CardGameStyles = () => {
  const theme: ITheme = useTheme();
  const {
    colors: { secondary, primary },
  } = theme;
  return {
    cardGameContainer: css`
      display: flex;
      justify-content: center;
      border-radius: 10px;
      background-color: ${secondary.white};
    `,
    emptyCardGameContainer: css`
      display: flex;
      justify-content: center;
      border-radius: 10px;
      background-color: ${secondary['gray-2']};
      border: 2px dashed ${primary.green};
      height: 7rem;
    `,
  };
};
