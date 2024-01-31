import axios from 'axios';

const client = axios.create({
    withCredentials: true,
    baseURL: 'https://13.125.116.56:8080',
    headers : {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      }
})

export default client;