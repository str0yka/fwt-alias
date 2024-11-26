import { RouterProvider as ReactRouterProvider } from 'react-router-dom';

import { router } from '../config';

export const RouterProvider = () => <ReactRouterProvider router={router} />;
