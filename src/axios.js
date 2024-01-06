// axios.js

import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3001', // Set your API base URL
  timeout: 5000, // Set timeout for requests
  headers: {
    'Content-Type': 'application/json',
    // Add any other headers you need
  },
});

export default instance;
