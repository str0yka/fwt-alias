import { Outlet } from 'react-router-dom';

import { LayoutHeader } from './layout-header';

export const Layout = () => (
  <main>
    <LayoutHeader />
    <Outlet />
  </main>
);
