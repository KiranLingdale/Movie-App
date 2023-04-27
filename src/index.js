import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Body from "./components/Body";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Error from "./Error";
import MovieDetails from './components/MovieDetails';

const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    errorElement: <Error/>,
    children:[
      {
        path: '/',
        element: <Body/>
      },
      {
        path: '/MovieDetails/:id',
        element:<MovieDetails/>
      }
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={appRouter} />
);


reportWebVitals();
