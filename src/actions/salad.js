import SaladService from '../services/SaladService';

const salad = new SaladService();

export const getSaladAction = () => dispatch => {
  salad.getSalad().then(salad => {
    dispatch({ type: 'SET_SALAD', salad });
  });
};

export const setStartdAction = () => ({ type: 'SET_START' });
export const delSaladAction = () => ({ type: 'DEL_SALAD' });
