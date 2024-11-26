import { type RouteObject, createBrowserRouter } from 'react-router-dom';

import { HomePage } from '@pages/home';

import { Layout } from '@widgets/layout';

import { ROUTE } from '@shared/config';

const routes: RouteObject[] = [
  {
    path: ROUTE.HOME,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />
      }
    ]
  }
];

export const router = createBrowserRouter(routes);
