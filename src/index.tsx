import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { HomePage } from './pages/home';

import reportWebVitals from './reportWebVitals';

import './styles/index.scss';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <HomePage />
  </StrictMode>,
);

reportWebVitals();
