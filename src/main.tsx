import React from 'react';
import ReactDOM from 'react-dom/client';
import 'assets/fonts/index.css';
import 'assets/styles/_reset.scss';
import { App, AppProviders } from 'app';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </React.StrictMode>,
);
