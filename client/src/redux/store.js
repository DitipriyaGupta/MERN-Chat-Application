import { combineReducers, createStore,applyMiddleware } from "redux";
import {userLoginReducer,userRegisterReducer} from './reducers/userReducer'
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
const reducer=combineReducers({
    register:userRegisterReducer,
    login:userLoginReducer
})
const middleware=[thunk]
 const store=createStore(reducer,composeWithDevTools(applyMiddleware(...middleware)))
 export default store