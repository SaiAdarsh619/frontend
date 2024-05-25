// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Content from './components/content';
import 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js'




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
