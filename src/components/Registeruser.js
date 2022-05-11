import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Navigate, useNavigate } from "react-router-dom";

export default function Registeruser() {
  const navigate = useNavigate();
 
  const[fname,setFname]=useState()
  const[email,setEmail]=useState()
  const[password,setPassword]=useState()
  const[user,setUser]=useState([])
  //validation start
  const schema = yup
    .object({
      fname: yup.string().required("name is require "),
      email: yup.string().email().required("email is require"),
      password: yup
        .string()
        .required("password is require")
        .matches( /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,"Stuname@123 its type write password" )
        .min(8, "Password is min 8 character"),
    })
    .required();

  const {register,handleSubmit,formState: { errors },} = useForm({resolver: yupResolver(schema), });
  //validation end

  const onSubmit = (data) => {
  localStorage.setItem("studentdata",JSON.stringify([data]))
  navigate("/")
  };
console.log(user)
  const login = () => {
    navigate("/");
  };
  return (
    <div>
      <div className="container w-40  shadow-lg  mb-5 bg-body rounded  mt-5 p-5 text-white">
        <h3 className="text-black">Registration form</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              {...register("fname")}
              onChange={(e) => setFname(e.target.value)}
              placeholder="first name"
              
            />

            <div className="form-text">
              {" "}
              <p>{errors.fname?.message}</p>
            </div>
          </div>
          <div className="mb-3">
            <input type="email" className="form-control"
              {...register("email")} onChange={(e) => setEmail(e.target.value)} placeholder="email"
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
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
            />

            <div className="form-text">
              {" "}
              <p>{errors.password?.message}</p>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <button
            type="submit"
            className="btn btn-primary mx-5"
            onClick={login}
          >
            {" "}
            login
          </button>
        </form>
      </div>
    </div>
  );
}
