import { getAuthUserData } from './authReduer'

const INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS';

const initialState = {
  initialized: false,
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INITIALIZED-SUCCESS':
      return {
        ...state,
        initialized: true,
      }
    default:
      return state;
  }
}

export const initializedSuccess = () => (
  { type: INITIALIZED_SUCCESS }
);

export const initializeApp = () => (dispatch) => {
  console.log('here');
  //
  const promise = dispatch(getAuthUserData());

  Promise.all([promise])
  .then(() => {
    dispatch(initializedSuccess());
  });
}

export default appReducer; 