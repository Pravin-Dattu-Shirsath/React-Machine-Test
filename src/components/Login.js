import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const student=JSON.parse(localStorage.getItem("studentdata"))
  const [user,setUser]=useState(student)
   const navigate=useNavigate()
  const[email,setEmail]=useState()
  const[password,setPassword]=useState()
  
  //validation start
  const schema = yup.object({
      email: yup.string().email().required("email is mandotary"),
      password: yup.string().required("password is require"),
    })
    .required();

  const {register,handleSubmit, formState: { errors },} = useForm({ resolver: yupResolver(schema),});
  //validation end
    const filtered_arr=[]
  const onSubmit = () => {
    user.map((ele,i) => {
    if(ele.email === email){
    filtered_arr.push(ele)
    }
    })
    filtered_arr.map(ele => {
    if (password === ele.password){
    navigate("/home")
    
    }else {
    
    }
    })
    };
  
 const singup=()=>{
  navigate("/register")
 }

  return (
    <div>
      <div className="container w-40  shadow-lg  mb-5 bg-body rounded  mt-5 p-5 text-white">
        <h3 className="text-black">login form</h3>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              {...register("email")}
              
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="form-text">
              {" "}
              <p>{errors.email?.message}</p>
            </div>
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              {...register("password")}
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="form-text">
              {" "}
              <p>{errors.password?.message}</p>
            </div>
          </div>
          <button type="submit" className="btn btn-primary mx-3" >
            Login
          </button>
          <button type="submit" className="btn btn-primary" onClick={singup} >
           signup
          </button>
         
        </form>
      </div>
    </div>
  );
}
