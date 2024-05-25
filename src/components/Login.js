// src/components/Login.js
import React, { useState } from 'react';
import { login } from './api';

const Login = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

<a href="http://localhost:3000/content">Login successful go to content</a>
            

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(formData);
            setMessage(<a href="http://localhost:3000/content">Login successful go to content</a>
        );
        } catch (error) {
            setMessage('Login failed. ' + error.response.data.error);
        }
    };

    return (
        <div className='login-form'>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder="Username" onChange={handleChange} required /><br></br>
                <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
                <button type="submit">Login</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Login;
