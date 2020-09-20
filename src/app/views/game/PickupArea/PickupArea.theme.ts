import { css } from '@emotion/core';
import ImageZoovuPNG from 'assets/images/image_opacity.png';
import { useTheme } from 'emotion-theming';

export const PickupAreaStyles = () => {
  const theme: ITheme = useTheme();
  const {
    colors: { primary, secondary },
  } = theme;
  return {
    pickAreaContainer: css`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin: 1.5rem 0;
      @media (min-width: 615px) {
        margin: 5rem 0;
      }
    `,
    pickupLabel: css`
      display: flex;
      justify-content: space-between;
      color: ${secondary['gray-1']};
      margin: 1.5rem 0 0.75rem 0;
      @media (min-width: 615px) {
        margin: 2rem 0;
      }
    `,
    itemContainer: (noItems: boolean) => css`
      border-radius: 10px;
      background-repeat: no-repeat;
      background-size: cover;
      background-image: url(${ImageZoovuPNG});
      ${noItems ? `border: 2px dashed ${primary.green}` : ''};
      height: 3rem;
      width: 3rem;
      @media (min-width: 615px) {
        height: 7rem;
        width: 7rem;
      }
    `,
  };
};
