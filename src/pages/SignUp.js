import React from 'react';
import '../Styles/SignUp.css';
import { Link } from 'react-router-dom';
import { users } from '../Data/Data';
import { useState } from 'react';
import { EmailExists } from '../Data/Data';
function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    function Add() {
        users.push({
            email: email,
            password: password
        });
    }

    const exists = EmailExists(email);

    const canSignUp = email !== '' && password !== '' && !exists;

 
    function ShowError() {
        if (email === '' || password === '') {
            setMessage('Please fill in both fields.');
        } else if(exists){
            setMessage('This email already exists.');
        }
    }

    return (
        <div className='signup__overlay'>
            <div className='signup'>

                <Link to='/' className='signup__close'>X</Link>

                <h1 className='signup__title'>Create your account</h1>
                <p className='signup__subtitle'>
                    Enter your email and a password to get started.
                </p>

                <div className='signup__form'>

                    <label className='signup__label'>Email address</label>
                    <div className='signup__field'>
                        <input
                            className='signup__input'
                            type='email'
                            placeholder='Enter email'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <label className='signup__label'>Password</label>
                    <div className='signup__field'>
                        <input
                            className='signup__input'
                            type='password'
                            placeholder='Enter password'
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    {canSignUp ? (
                        <Link to='/Dashboard' className='signup__submit' onClick={Add}>
                            Sign Up
                        </Link>
                    ) : (
                        <button className='signup__submit' onClick={ShowError}>
                            Sign Up
                        </button>
                    )}

                    <p className='signup__message'>{message}</p>

                </div>
            </div>
        </div>
    );
}

export default SignUp;