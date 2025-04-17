import React, { useState, useEffect } from 'react';
import dotenv from 'dotenv';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
    };

    useEffect(() => {
        const isSessionValid = () => {
            const session = localStorage.getItem('userSession');
            return session !== null;
        };

        if (isSessionValid()) {
            navigate('/dashboard');
        }
    }, [navigate]);

    const dbHost = process.env.REACT_APP_DB_HOST;
    const dbUser = process.env.REACT_APP_DB_USER;
    const dbPassword = process.env.REACT_APP_DB_PASSWORD;
    const dbName = process.env.REACT_APP_DB_NAME;

    console.log('Database Host:', dbHost);
    console.log('Database User:', dbUser);

    return (
        <div className="bg-white rounded-lg shadow-sm m-4 dark:bg-gray-800 login">
            <form onSubmit={handleSubmit}>
                <MDBContainer fluid>
                    <MDBRow className="d-flex justify-content-center align-items-center h-100">
                        <MDBCol col="12">
                            <MDBCard
                                className="bg-dark text-white my-5 mx-auto"
                                style={{ borderRadius: '1rem', maxWidth: '400px' }}
                            >
                                <MDBCardBody className="p-5 d-flex flex-column align-items-center mx-auto w-100">
                                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                                    <p className="text-white-50 mb-5">Please enter your login and password!</p>
                                    <p>Email address:</p>
                                    <MDBInput
                                        wrapperClass="mb-4 mx-5 w-100"
                                        labelClass="text-white"
                                        id="formControlLg"
                                        type="email"
                                        size="lg"
                                        style={{
                                            backgroundColor: '#131a22',
                                            border: '1px solid black',
                                            borderRadius: '8px',
                                        }}
                                        value={email}
                                        onChange={handleEmailChange}
                                    />
                                    <p>Password:</p>
                                    <MDBInput
                                        wrapperClass="mb-4 mx-5 w-100"
                                        labelClass="text-white"
                                        id="formControlLg"
                                        type="password"
                                        size="lg"
                                        style={{
                                            backgroundColor: '#131a22',
                                            border: '1px solid black',
                                            borderRadius: '8px',
                                        }}
                                        value={password}
                                        onChange={handlePasswordChange}
                                    />
                                    <p className="small mb-3 pb-lg-2">
                                        <a className="text-white-50" href="#!">
                                            Forgot password?
                                        </a>
                                    </p>
                                    <MDBBtn outline className="mx-2 px-5" color="white" size="lg" type="submit">
                                        Login
                                    </MDBBtn>
                                    <div>
                                        <p className="mb-0">
                                            Don't have an account?{' '}
                                            <a href="#!" className="text-white-50 fw-bold">
                                                Sign Up
                                            </a>
                                        </p>
                                    </div>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </form>
        </div>
    );
};

export default Login;