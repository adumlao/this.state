import axios from 'axios';

const BASE_URL = 'https://api.propublica.org/congress/';
const PROPUBLICA_API_KEY =  process.env.REACT_APP_API_KEY;


const api = axios.create({
  baseURL: BASE_URL,
  headers: {
      'X-API-Key': `${PROPUBLICA_API_KEY}`
  }
});
