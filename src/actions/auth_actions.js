import { AUTH_ATTEMPTING,
         AUTH_SUCCESS,
         AUTH_FAILED,
         SIGNUP_SUCCESS,
         SIGNUP_FAILD,
         USER_LOGOUT
} from './types';

import {apiLogin, apiSignUp} from '../api/user';

const TOKEN_NAME = '12114.gw2.5jfdhghfsl-sahasjkhjbhdskdslkhjrfhkjdslk'; 

export const signIn = (request_data) => {
    return async (dispatch) => {
        dispatch({type: AUTH_ATTEMPTING});
        try {
            const data = await apiLogin(request_data);
            if (data.data === "Logged In Successfully")
            {
                const token = TOKEN_NAME;
                dispatch(success(token, request_data.username));
            }
            else {
                dispatch(error(data.data))
            }
        } catch(e) {
            console.log(e)
        }
    };
};


export const onLogingSignIn = () => {
  return dispatch => {
    try {
      const token = localStorage.getItem(TOKEN_NAME);
      if (token === null || token === 'undefined') {
        dispatch(error('You need to login'));
      } else {
        localStorage.setItem('cars_app_token', token);
        dispatch({type: AUTH_SUCCESS})
      }
    } catch(e) {
      // console.log(e);
    }
  }
}

export const logUserOut = () => {
   localStorage.clear();
   return {type: USER_LOGOUT}
}


const success = (token, request_data) => {
  localStorage.setItem('cars_app_token', token);
  return {type: AUTH_SUCCESS, profile: request_data, isAuth: true, payload: null};
}

const error = (error) => {
  return { type: AUTH_FAILED, payload: error}
}


export const signUp = (request_data )=> {
  return async (dispatch) => {
    try {
      await apiSignUp(request_data);
      dispatch({ type: SIGNUP_SUCCESS });
    } catch (e) {
      dispatch({type: SIGNUP_FAILD, payload: e.response });
    }
  };
};