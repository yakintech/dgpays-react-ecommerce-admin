import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import App from './App';
import { FavoritesProductProvider } from './contexts/favoritesProductContext';
import { todoReducer } from './redux/reducers/todo.reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = createStore(todoReducer);

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
