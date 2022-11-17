import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Axios from "axios";
import { useDispatch } from 'react-redux'
import { setToken } from "../redux/authSlide";

const Login = () => {
  const dispatch = useDispatch()
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChangeName = (e) => {
    setFormData({
      ...formData,
      email: e.target.value,
    });
  };
  const handleChangePassword = (e) => {
    setFormData({
      ...formData,
      password: e.target.value,
    });
  };
  const login = (event) => {
    event.preventDefault();
    Axios.post("http://localhost:8081/auth/login", { formData })
      .then((res) => {
        const id = res.data.result.id;
        dispatch(setToken(res.data.result.token))
        navigate(`/profile/${id}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className={`background flex items-center justify-end pr-[10%]`}>
      <img
        src="https://d2sochvv0rudri.cloudfront.net/place_photos/17533/beer-world-kingston.png"
        alt=""
        className="absolute top-[] w-[300px] top-[5%] left-[5%]"
      />
      <div className="w-[35%] h-[90%] bg-black/70 rounded-md py-6 flex items-center">
        <div className="w-full">
          <h1 className="mx-auto text-center text-[#fff] text-4xl my-7 mb-7">
            Sign in your account
          </h1>
          <form action="" method="post" onSubmit={login}>
            <label
              htmlFor="email_address"
              className="text-[#fff] text-lg ml-[10%] my-3"
            >
              Email address :{" "}
            </label>
            <input
              type="email"
              name="email"
              className="w-[80%] mx-auto block px-7 py-4 rounded outline-none my-4"
              onChange={handleChangeName}
            />
            <label
              htmlFor="password"
              className="text-[#fff] text-lg ml-[10%] my-3"
            >
              Password :{" "}
            </label>
            <input
              type="password"
              name="password"
              className="w-[80%] mx-auto block px-7 py-4 rounded outline-none my-4"
              onChange={handleChangePassword}
            />
            <button
              type="submit"
              className="w-[80%] mx-auto block py-4 bg-amber-200 my-14 rounded text-[#000] font-bold"
              onClick={login}
            >
              SIGN IN
            </button>
          </form>
          <div>
            <p className="text-base text-gray-200 text-center">
              Not a member ?{" "}
              <NavLink to={"/register"}>
                <span className="text-amber-300 cursor-pointer hover:text-amber-600">
                  Sign up now
                </span>
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
