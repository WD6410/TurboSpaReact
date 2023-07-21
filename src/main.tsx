// import React from 'react';
import ReactDOM from 'react-dom/client';
import 'assets/fonts/index.css';
import { App, AppProviders } from 'app';
import { GlobalProvider } from 'shared/providers';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <GlobalProvider>
    <AppProviders>
      <App />
    </AppProviders>
  </GlobalProvider>,
  // </React.StrictMode>,
);
