import axios from 'axios';

const client = axios.create({
    // baseURL: 'http://13.125.116.56:8080',
    baseURL: 'http://localhost:8080',
    headers : {
        'Content-Type': 'application/json',
      }
})

export default client;