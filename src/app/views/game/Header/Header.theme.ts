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
      align-items: center;
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
    iconStyle: css`
      padding: 0 5px;
    `,
  };
};
