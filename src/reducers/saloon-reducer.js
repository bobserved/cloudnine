export const saloons = (state = {}, action) => {
  switch(action.type) {
    case 'GET_SALOONS_ALL':
      return {
        ...state,
        saloonList: action.payload
      }
    case 'GET_SALOONS':
      return {
        ...state,
        saloonList: action.payload
      }
    case 'GET_SALOON_DETAIL':
      return {
        ...state,
        saloonData: action.payload
      }
    case 'RESET_SALOON_DETAIL':
      return {
        ...state,
        saloonData: action.payload
      }
    default:
      return state;
  }
}