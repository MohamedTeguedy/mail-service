import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import {useDispatch} from "react-redux"
import { Sign_up } from "../actions/userAction";



const schema = yup.object({
  firstName: yup.string().required("first name is req").min(3," first name Min len 3"),
  lastName: yup.string().required("last name is req").max(3," first name Max len 3"),
  email: yup.string().email("email not valid"),
  password: yup.string().required("pwd is req").min(3," first name Min len 3"),
  cpassword: yup.string().required("pwd is req").min(3," first name Min len 3").oneOf([yup.ref("password")],"must match"),
}).required();


export default function Signup() {
  const [msgErr,setMsgERR]=useState('')
  const dispatch =useDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    console.log(data);
    dispatch(Sign_up(data))
    
    //  axios.post("http://localhost:4000/signup",data).then((res)=>{
    //   console.log("signup",res.data.message);
    //   if (res.data.message==="0") {
    //     setMsgERR("e-mail deja existe")
    //   } else {
    //     setMsgERR("")

    //   }
    //  })
  };

  return (
    <div className="contact-form spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="contact__form__title">
              <h2>Signup</h2>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <input
                type="text"
                placeholder="First Name"
                {...register("firstName")}
              />

<span className="text-danger">{errors?.firstName?.message}</span>
             

            </div>
            <div className="col-lg-6 col-md-6">
              <input type="text" placeholder="Last Name" {...register("lastName")} />
              <span className="text-danger">{errors?.lastName?.message}</span>

            </div>
            <div className="col-lg-6 col-md-6">
              <input type="email" placeholder="email"  {...register("email")} />
              <span className="text-danger">{errors?.email?.message}</span>

            </div>
            <div className="col-lg-6 col-md-6">
              <input type="password" placeholder="password"  {...register("password")} />
              <span className="text-danger">{errors?.password?.message}</span>

            </div>
            <div className="col-lg-6 col-md-6">
              <input type="password" placeholder="cpassword"  {...register("cpassword")} />
              <span className="text-danger">{errors?.cpassword?.message}</span>

            </div>

            <div className="col-lg-12 text-center">
              <button type="submit" className="site-btn">
                Sign up
              </button>
            </div>

            <span className="text-danger">{msgErr}</span>
          </div>
        </form>
      </div>
    </div>
  );
}
