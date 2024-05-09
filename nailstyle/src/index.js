import React from 'react';
import ReactDOM from 'react-dom/client';
import './admin.css';
import ADM_1 from './routes/ADM_1.js';
import Mensagens from './routes/Mensagens.js'
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ADM_1 />
  },
  {
    path: "/Mensagens",
    element: <Mensagens />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
