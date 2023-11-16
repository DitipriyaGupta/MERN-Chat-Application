import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  LOGOUT
  
} from "../constant/userConstant";
import axios from 'axios'
  const API_URL = "http://localhost:4000";
// login action
const userLoginAction = (email, password) => async (getState, dispatch) => {

  try {
    dispatch({ type: LOGIN_REQUEST });
    const { data } = await axios.post(API_URL + "/api/users/login", {
      email,
      password,
    });
    dispatch({ type: LOGIN_SUCCESS, payload: data });
    localStorage.getItem("UserInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({ type: LOGIN_FAILED, payload: error.message });
  }
};

// register action
const userRegisterAction =
  (name, email, password) => async (getState, dispatch) => {
    try {
      dispatch({ type: REGISTER_REQUEST });
      const { data } = await axios.post(API_URL + "/api/users", {
        name,
        email,
        password,
      });
      dispatch({ type: REGISTER_SUCCESS });
      localStorage.getItem("UserInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({ type: REGISTER_FAILED, payload: error.message });
    }
  };

  //logout action
  const userLogoutAction=()=>async(dispatch)=>{
    localStorage.removeItem("UserInfo")
    dispatch({type:LOGOUT})

  }
export {userLoginAction,userRegisterAction,userLogoutAction}