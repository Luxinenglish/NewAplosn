import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
// import App from './App';
import  NavBar from './components/footer-navbar/navbar';
import Footer from './components/footer-navbar/footer';
import Login from './components/dashboard/login';
import Dashboard from './components/dashboard/App';
import Wazuh from './components/dashboard/Wazuh';

import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);



root.render(
  <React.StrictMode>
      <Router>
          <NavBar />
          <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<><Dashboard /><Wazuh /></>} />

          </Routes>
          <Footer />
      </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
