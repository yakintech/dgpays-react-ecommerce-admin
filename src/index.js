import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { FavoritesProductProvider } from './contexts/favoritesProductContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <FavoritesProductProvider>
          <App />
    </FavoritesProductProvider>
    </BrowserRouter>
  </React.StrictMode>
);
