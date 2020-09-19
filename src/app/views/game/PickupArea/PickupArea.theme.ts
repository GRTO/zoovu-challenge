import { css } from '@emotion/core';
import ImageZoovuPNG from 'assets/images/image_opacity.png';
import { useTheme } from 'emotion-theming';

export const PickupAreaStyles = () => {
  const theme: ITheme = useTheme();
  const {
    colors: { primary },
  } = theme;
  return {
    pickAreaContainer: css`
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      margin: 80px 0;
    `,
    itemContainer: (noItems: boolean) => css`
      height: 7rem;
      width: 7rem;
      border-radius: 10px;
      background-repeat: no-repeat;
      background-size: cover;
      background-image: url(${ImageZoovuPNG});
      ${noItems ? `border: 2px dashed ${primary.green}` : ''};
    `,
  };
};
