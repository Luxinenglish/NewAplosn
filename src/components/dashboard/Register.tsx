import React, { useState } from 'react';
import Cookies from 'js-cookie';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

const Register: React.FC = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        const createdAt = new Date().toISOString(); // Generate timestamp

        console.log('Username:', username);
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Created At:', createdAt);

        // Simulate storing user data
        Cookies.set('newUser', JSON.stringify({ username, email, createdAt }), { expires: 7 });
        alert('Registration successful!');
        navigate('/login'); // Redirect to login page
    };

    return (
        <div className="bg-white rounded-lg shadow-sm m-4 dark:bg-gray-800 register">
            <form onSubmit={handleSubmit}>
                <MDBContainer fluid>
                    <MDBRow className="d-flex justify-content-center align-items-center h-100">
                        <MDBCol col="12">
                            <MDBCard
                                className="bg-dark text-white my-5 mx-auto"
                                style={{ borderRadius: '1rem', maxWidth: '400px' }}
                            >
                                <MDBCardBody className="p-5 d-flex flex-column align-items-center mx-auto w-100">
                                    <h2 className="fw-bold mb-2 text-uppercase">Register</h2>
                                    <p className="text-white-50 mb-5">Please enter your details to create an account!</p>
                                    <p>Username:</p>
                                    <MDBInput
                                        wrapperClass="mb-4 mx-5 w-100"
                                        labelClass="text-white"
                                        id="formControlLg"
                                        type="text"
                                        size="lg"
                                        style={{
                                            backgroundColor: '#131a22',
                                            border: '1px solid black',
                                            borderRadius: '8px',
                                        }}
                                        value={username}
                                        onChange={handleUsernameChange}
                                    />
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
                                    <p>Confirm Password:</p>
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
                                        value={confirmPassword}
                                        onChange={handleConfirmPasswordChange}
                                    />
                                    <MDBBtn outline className="mx-2 px-5" color="white" size="lg" type="submit">
                                        Register
                                    </MDBBtn>
                                    <div>
                                        <p className="mb-0">
                                            Already have an account?{' '}
                                            <a href="/login" className="text-white-50 fw-bold">
                                                Login
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

export default Register;