export default function(state = false, action) {
  switch (action.type) {
    case 'SET_START': {
      return true;
    }
    default:
      return state;
  }
}
