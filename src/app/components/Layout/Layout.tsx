import React from 'react';
import { LayoutStyles } from './Layout.theme';

const Layout: React.FC = ({ children }: React.PropsWithChildren<{}>) => {
  return <div css={LayoutStyles.layoutContainer}>{children}</div>;
};

export default Layout;
