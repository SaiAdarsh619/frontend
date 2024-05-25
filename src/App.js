// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Content from './components/content';



const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    {/* <Route path="/register" element={<Register />} /> */}
                    <Route path="" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/content" element={<Content/>} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
