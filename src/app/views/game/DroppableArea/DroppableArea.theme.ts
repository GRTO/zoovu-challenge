import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';

export const DroppableAreaStyles = () => {
  const theme: ITheme = useTheme();
  const {
    colors: { primary, secondary },
  } = theme;
  return {
    droppableAreaContainer: css`
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      margin: 80px 0;
    `,
    itemContainer: (noItems: boolean) => css`
      width: 7rem;
      display: flex;
      justify-content: center;
      border-radius: 10px;
      background-color: ${secondary['gray-2']};
      ${noItems ? `border: 2px dashed ${primary.green}` : ''};
      height: 7rem;
    `,
  };
};
