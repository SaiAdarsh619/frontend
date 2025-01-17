import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8000/api/',
    timeout: 5000, // Adjust as needed
});

export default instance;
