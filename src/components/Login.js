import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch} from "react-redux"
import { login } from "../actions/userAction";


const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState('');



  const dispatch=useDispatch()

  useEffect(() => {
   
  }, []);





  const handleSubmit = () => {
 const data ={
    email:email,
    password:pwd
 }

 dispatch(login(data))
//  console.log("here data login",data);
  };


  return (
    <div className="contact-form spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="contact__form__title">
              <h2>Login </h2>
            </div>
          </div>
        </div>
        <form action="#">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <input
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Product name"
                value={email}
              />
            </div>
            <div className="col-lg-6 col-md-6">
              <input
                type="password"
                onChange={(e) => setPwd(e.target.value)}
                placeholder="Price"
                value={pwd}
              />
            </div>
         

          



            <div className="col-lg-12 text-center">
              <button
                type="button"
                onClick={() => handleSubmit()}
                className="site-btn"
              >
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

function dispatchStateToProps(dispatch) {
  // return { addProduct :(data)=>dispatch({type:"ADD_PRODUCT",payload:data})}
}
export default Login;
