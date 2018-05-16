import data from '../data.json';

export const salonListAll = () => {
  return {
    type: 'GET_SALONS_ALL',
    payload: data.salons
  }
}

export const salonList = (val) => {
  const filtered = data.salons.filter(el => el.filter.toLowerCase().indexOf(val.toLowerCase()) > -1);
  return {
    type: 'GET_SALONS',
    payload: filtered
  }
}

export const salonDetail = (id) => {
  const detail = data.salons.find(e => e.id.toString() === id.toString());
  return {
    type: 'GET_SALON_DETAIL',
    payload: detail
  }
}

export const resetSalonDetail = () => {
  return {
    type: 'RESET_SALON_DETAIL',
    payload: null
  }
}
