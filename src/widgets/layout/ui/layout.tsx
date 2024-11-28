import { Outlet } from 'react-router-dom';

import { LayoutHeader } from './layout-header';

export const Layout = () => (
  <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', padding: '0 12px' }}>
    <LayoutHeader />
    <Outlet />
  </main>
);
