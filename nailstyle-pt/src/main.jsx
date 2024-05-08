import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import './index.css'
import NavBar from './routes/topbar/NavBar';
import Main from './routes/mainbody/Main'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// 1- configurando o router
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar/>,
  },{
    path: "main",
    element: <Main/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

