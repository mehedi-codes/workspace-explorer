import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import '@/styles/index.css';

import { Application } from './layouts/application';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Application />
  </StrictMode>,
);
