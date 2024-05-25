import React, { useState } from 'react';
import { register } from './api';
import './mystyle.css';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password2: ''
    });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log('Form Data:', formData); // Add this line to debug
            const data = await register(formData);
            console.log('Response Data:', data); // Add this line to debug
            setMessage('Registration successful.');
            
          
        } catch (error) {
            console.error('Error:', error.response ? error.response.data : error.message); // Add this line to debug
            setMessage('Registration failed. ' + (error.response ? error.response.data : error.message));
        }
    };

    return (
        <div className="registration-form">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder="Username" onChange={handleChange} required /><br></br>
                <input type="text" name="first_name" placeholder="First Name" onChange={handleChange} required /><br></br>
                <input type="text" name="last_name" placeholder="Last Name" onChange={handleChange} required /><br></br>
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required /><br></br>
                <input type="password" name="password" placeholder="Password" onChange={handleChange} required /><br></br>
                <input type="password" name="password2" placeholder="Confirm Password" onChange={handleChange} required /><br></br>
                <button type="submit">Register</button>
                <a href="http://localhost:3000/login">Already A User</a>
            
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Register;
