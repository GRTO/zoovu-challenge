import { css } from '@emotion/core';
import BackgroundJPG from 'assets/images/background.jpg';

export const LayoutStyles = {
  layoutContainer: css`
    display: flex;
    flex: 1;
    flex-direction: column;
    @media (min-width: 615px) {
      padding: 5rem;
    }
    padding: 1rem;
    background-image: url(${BackgroundJPG});
  `,
};
