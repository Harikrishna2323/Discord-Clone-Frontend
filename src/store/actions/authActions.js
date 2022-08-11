import * as api from '../../api';
import { openAlertMessage } from './alertActions';

export const authActions ={
  SET_USER_DETAILS: "AUTH.SET_USER_DETAILS"
}

export const getActions = (dispatch) =>{
  return{
    login: (userDetails, navigate) => dispatch(login(userDetails,navigate)),
    register: (userDetails, navigate) => dispatch(register(userDetails, navigate)),
    setUserDetails: (userDetails) => dispatch(setUserDetails(userDetails))
  }
}

const setUserDetails = (userDetails) =>{
  return {
    type: authActions.SET_USER_DETAILS,
    userDetails
  }
}

const login = (userDetails, navigate) =>{
  return async(dispatch) =>{
    const response = await api.login(userDetails);

    if(response.error){
      //show alert
      dispatch(openAlertMessage(response?.exception?.response?.data))
     
    } else{
      const { data } = response;
      console.log("response:",response)
      localStorage.setItem("user", JSON.stringify(data));

      dispatch(setUserDetails(userDetails));
      navigate("/");
      // const {data} = response;
      // console.log("userDetails", data);
      // localStorage.setItem("user", JSON.stringify(data));
      // dispatch(setUserDetails(userDetails));
      // navigate("/")
    }
  }
}

const register = (userDetails, navigate) =>{
  return async(dispatch) =>{
    const response = await api.register(userDetails);

    if(response.error){
      //show alert
      dispatch(openAlertMessage(response?.exception?.response?.data))
     
    } else{
      const { data } = response;
      console.log("response:",response)
      localStorage.setItem("user", JSON.stringify(data));

      dispatch(setUserDetails(data?.user));
      navigate("/login");
      // console.log(response);
      // const {data} = response;
      // console.log("userDetails", data);
      // localStorage.setItem("user", JSON.stringify(data));
      // dispatch(setUserDetails(userDetails));
      // navigate("/")
    }
  }
}