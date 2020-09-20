import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';

export const HeaderStyles = () => {
  const theme: ITheme = useTheme();
  const {
    colors: { primary },
  } = theme;

  return {
    headerContainer: css`
      display: flex;
      justify-content: space-between;
      align-items: start;
      min-height: 60px;
    `,
    nameContainer: css`
      color: ${primary.black};
      font-weight: bold;
    `,
    timerContainer: css`
      display: flex;
      align-items: center;
      color: ${primary.purple};
      font-weight: bold;
    `,
    gameStatus: css`
      display: flex;
      color: ${primary.green};
      justify-content: end;
      font-weight: bold;
    `,
    iconStyle: css`
      padding: 0 5px;
    `,
    headerRight: css`
      display: flex;
      flex-direction: column;
      jusity-content: space-between;
    `,
  };
};
