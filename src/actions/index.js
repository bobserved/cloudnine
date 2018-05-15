import axios from 'axios';

const URL = 'http://localhost:3004';

export const saloonListAll = () => {
  const request = axios.get(`${URL}/saloons?_limit=6`)
                  .then(response => response.data);
  return {
    type: 'GET_SALOONS_ALL',
    payload: request
  }
}

export const saloonList = (keywords) => {
  const request = axios.get(`${URL}/saloons?q=${keywords}`)
                  .then(response => response.data)

  return {
    type: 'GET_SALOONS',
    payload: request
  }
}

export const saloonDetail = (id) => {
  const request = axios.get(`${URL}/saloons?id=${id}`)
                  .then(response => response.data)
  return {
    type: 'GET_SALOON_DETAIL',
    payload: request
  }
}

export const resetSaloonDetail = () => {
  return {
    type: 'RESET_SALOON_DETAIL',
    payload: null
  }
}
