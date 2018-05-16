export const salons = (state = {}, action) => {
  switch(action.type) {
    case 'GET_SALONS_ALL':
      return {
        ...state,
        salonList: action.payload
      }
    case 'GET_SALONS':
      return {
        ...state,
        salonList: action.payload
      }
    case 'GET_SALON_DETAIL':
      return {
        ...state,
        salonData: action.payload
      }
    case 'RESET_SALON_DETAIL':
      return {
        ...state,
        salonData: action.payload
      }
    default:
      return state;
  }
}