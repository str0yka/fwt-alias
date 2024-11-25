import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import { Root } from './providers';

const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(
  <StrictMode>
    <Root />
  </StrictMode>
);
