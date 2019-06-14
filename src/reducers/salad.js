export default function(state = {}, action) {
  switch (action.type) {
    case 'SET_SALAD': {
      return action.salad;
    }
    case 'DEL_SALAD': {
      return {};
    }
    default:
      return state;
  }
}
