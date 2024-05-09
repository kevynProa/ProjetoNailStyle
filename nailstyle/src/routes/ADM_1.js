import React from 'react';
import ReactDOM from 'react-dom/client';
import '../admin.css';
import Navbar from '../components/Navbar.js';
import Main from '../components/Main.js'
import reportWebVitals from '../reportWebVitals.js';


function ADM_1() {
  return (
    <>
      <Navbar nome_do_usuario="Gabriel Ferreira Amorim" />
      <Main />
    </>
  )
}

export default ADM_1
