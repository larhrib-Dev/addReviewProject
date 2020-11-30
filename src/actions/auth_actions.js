import { AUTH_ATTEMPTING,
         AUTH_SUCCESS,
         AUTH_FAILED,
         SIGNUP_SUCCESS,
         SIGNUP_FAILD
} from './types';

import {apiLogin, apiSignUp} from '../api/user';

// const TOKEN_NAME = 'expense_app_token'; 

export const signIn = (request_data) => {
    return async (dispatch) => {
        dispatch({type: AUTH_ATTEMPTING});
        try {
            const data = await apiLogin(request_data);
            if (data.data === "Logged In Successfully")
            {
                dispatch({type: AUTH_SUCCESS, profile: request_data.username, isAuth: true, payload: null})
            }
            else {
                dispatch({type: AUTH_FAILED, payload: data.data})
            }
        } catch(e) {
            // console.log(e)
        }
    };
};

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