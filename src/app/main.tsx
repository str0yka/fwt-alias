import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './assets/fonts';
import './assets/styles';
import { RouterProvider } from './providers';

const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(
  <StrictMode>
    <RouterProvider />
  </StrictMode>
);
