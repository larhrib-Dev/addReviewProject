import { AUTH_ATTEMPTING,
         AUTH_SUCCESS,
         AUTH_FAILED,
         SIGNUP_SUCCESS,
         SIGNUP_FAILD
} from '../actions/types';

const INITIAL_STATE = {
    attempting: false,
    isAuth: false,
    profile: {},
    error: null,
    signedUp: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case AUTH_ATTEMPTING:
            return {...state, attempting: true, isAuth: false, error: null}
        case AUTH_SUCCESS:
            return {...state, attempting: false, profile: action.profile ,isAuth: action.isAuth, error: action.payload}
        case AUTH_FAILED:
            return {...state, attempting: false, isAuth: false, error: action.payload}
        default:
            return state
    }
}