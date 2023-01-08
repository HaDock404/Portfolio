import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import GlobalStyle from './styles/createGlobalStyle.jsx'
import './styles/normalize.css';
import reportWebVitals from './reportWebVitals';

import Home from './components/Home';
import Header from './components/Header.jsx';
import Project from './components/Projects.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <GlobalStyle/>
        <Routes>
          <Route path="/" element={<><Header/><Home/></>}/>
          <Route path="/projets" element={<><Header/><Project/></>}/>
          <Route path="/apropos" element={<><Header/></>}/>
          <Route path="/contact" element={<><Header/></>}/>
        </Routes>
  </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
