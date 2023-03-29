import axios from "axios";
export const  SIGNUP ="SIGNUP"
export const  LOGIN ="LOGIN"


export const Sign_up = (data) => {

    
    return (dispatch) => {
      axios
        .post("http://localhost:4000/signup",data)
        .then((res) => {
          dispatch({
            type: SIGNUP,
            payload: res.data.message,
          });
        })
        .catch((err) => console.log(err));
    };
  };


  export const login = (data) => {

    
    return (dispatch) => {
      axios
        .post("http://localhost:4000/login",data)
        .then((res) => {
          dispatch({
            type: LOGIN,
            payload: res.data,
          });
        })
        .catch((err) => console.log(err));
    };
  };