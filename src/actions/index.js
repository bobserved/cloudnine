import data from '../data.json';

export const saloonListAll = () => {
  return {
    type: 'GET_SALOONS_ALL',
    payload: data.saloons
  }
}

export const saloonList = (val) => {
  const filtered = data.saloons.filter(el => el.filter.toLowerCase().indexOf(val.toLowerCase()) > -1)
  return {
    type: 'GET_SALOONS',
    payload: filtered
  }
}

export const saloonDetail = (id) => {
  const detail = data.saloons.find(e => e.id.toString() === id.toString());
  return {
    type: 'GET_SALOON_DETAIL',
    payload: detail
  }
}

export const resetSaloonDetail = () => {
  return {
    type: 'RESET_SALOON_DETAIL',
    payload: null
  }
}
