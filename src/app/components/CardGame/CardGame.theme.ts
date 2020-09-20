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
      box-shadow: 3px 3px 3px 3px ${secondary['gray-2']}60;
      & > i {
        @media (min-width: 615px) {
          height: 7rem;
          width: 7rem;
        }
        height: 3rem;
        width: 3rem;
      }
    `,
    emptyCardGameContainer: css`
      display: flex;
      justify-content: center;
      border-radius: 10px;
      background-color: ${secondary['gray-2']};
      border: 2px dashed ${primary.green};
      height: 3rem;
      width: 3rem;
      @media (min-width: 615px) {
        height: 7rem;
        width: 7rem;
      }
    `,
  };
};
