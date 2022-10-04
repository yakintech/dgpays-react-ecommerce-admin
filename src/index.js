import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import App from './App';
import { FavoritesProductProvider } from './contexts/favoritesProductContext';
import { mainReducer } from './redux/reducers';

const root = ReactDOM.createRoot(document.getElementById('root'));

let initialState = { todoReducer: [{ id: '5', completed: false, title: 'Hello' }] }

const store = createStore(mainReducer, initialState);

root.render(
  <React.StrictMode>
    <BrowserRouter>

      <Provider store={store}>

        <FavoritesProductProvider>
          <App />
        </FavoritesProductProvider>

      </Provider>

    </BrowserRouter>
  </React.StrictMode>
);
