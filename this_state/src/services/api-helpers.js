import axios from 'axios';

const BASE_URL = 'https://api.propublica.org/congress/v1';
const PROPUBLICA_API_KEY =  process.env.REACT_APP_API_KEY;


const api = axios.create({
  baseURL: BASE_URL,
  headers: {
      'X-API-Key': `${PROPUBLICA_API_KEY}`
  }
});

const fetchVote = async () => {
  const resp = await api('/house/votes/recent.json')
  return resp.data.results.votes;
}


const fetchBill = async (keyword) => {
  const resp = await api(`/bills/search.json?query='${keyword}'`)
  return resp.data.results[0].bills
}

const fetchSenator = async () => {
  const resp = await api(`/115/senate/members.json`)
  return resp.data.results[0].members;
}

const fetchHouseRep = async () => {
  const resp = await api(`/115/house/members.json`)
  return resp.data.results[0].members;
}

const pressRelease = async () => {
  const resp = await api(`/statements/latest.json`)
  return resp.data.results;
}

const fetchSenatorbyState = async (state) => {
  const resp = await api(`/members/senate/${state}/current.json`)
  return resp.data.results;
}

const fetchHouseRepbyState = async (state) => {
  const resp = await api(`/members/house/${state}/current.json`)
  return resp.data.results;
}

export{
  fetchHouseRepbyState,
  fetchSenatorbyState,
  pressRelease,
  fetchHouseRep,
  fetchSenator,
  fetchVote,
  fetchBill
}
