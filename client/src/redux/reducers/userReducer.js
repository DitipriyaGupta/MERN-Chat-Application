import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  LOGOUT
} from "../constant/userConstant";
const initialState = {
  isLoading: false,
  error: null,
  userInfo: null,
};

// login reducer

const userLoginReducer = (state =initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, isLoading: true };
    case LOGIN_SUCCESS:
      return {...state,  isLoading: false, userInfo: action.payload };
    case LOGIN_FAILED:
      return { ...state, error: action.payload };
    case LOGOUT:
      return {};
    default:
      return state;
  }
};

// register reducer

const userRegisterReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return { ...state, isLoading: true };
    case REGISTER_SUCCESS:
      return { ...state, isLoading: false, userInfo: action.payload };
    case REGISTER_FAILED:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export  { userLoginReducer, userRegisterReducer };
