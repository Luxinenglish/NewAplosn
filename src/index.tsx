import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import NavBar from './components/footer-navbar/navbar';
import Footer from './components/footer-navbar/footer';
import Login from './components/dashboard/login';
import Dashboard from './components/dashboard/App';
import Wazuh from './components/dashboard/Wazuh';
import Register from './components/dashboard/Register';
import AuthWrapper from './components/AuthWrapper';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <Router>
            <AuthWrapper>
                <NavBar />
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<><Register /></>} />
                    <Route path="/dashboard" element={<><Dashboard /><Wazuh /></>} />
                </Routes>
                <Footer />
            </AuthWrapper>
        </Router>
    </React.StrictMode>
);

reportWebVitals();