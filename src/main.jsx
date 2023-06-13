import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import store from './store/store.js';
import { Provider } from 'react-redux';

import App from './App.jsx';
import Catalog from './views/Catalog.jsx';
import BeerCard from './views/BeerCard.jsx';

import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Catalog />,
      },
      { path: '/beers/:id', element: <BeerCard /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
