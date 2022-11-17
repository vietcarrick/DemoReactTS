import React, { useState } from "react";
import Axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState("");

  const user = {
	username: name,
	email: email,
	password: password,
	repassword: repassword,
  };
  const addUser = async (event) => {
    event.preventDefault();
    await Axios.post("http://localhost:8081/auth/register", { user })
	.then((res) => {
		setData(res.data.result);
    })
	.catch((err) => {
		console.log(err);
	})
	console.log(data)
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
            Sign up your account
          </h1>
          <form method="POST" action="#" onSubmit={addUser}>
            <label
              htmlFor="username"
              className="text-[#fff] text-lg ml-[10%] my-2"
            >
              Your name :{" "}
            </label>
            <input
              type="text"
              name="username"
              className="w-[80%] mx-auto block px-7 py-3 rounded outline-none my-3"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <label
              htmlFor="email_address"
              className="text-[#fff] text-lg ml-[10%] my-2"
            >
              Email address :{" "}
            </label>
            <input
              type="text"
              name="email"
              className="w-[80%] mx-auto block px-7 py-3 rounded outline-none my-3"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <label
              htmlFor="password"
              className="text-[#fff] text-lg ml-[10%] my-2"
            >
              Password :{" "}
            </label>
            <input
              type="password"
              name="password"
              className="w-[80%] mx-auto block px-7 py-3 rounded outline-none my-3"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <label
              htmlFor="repassword"
              className="text-[#fff] text-lg ml-[10%] my-2"
            >
              Repeat Password :{" "}
            </label>
            <input
              type="password"
              name="repassword"
              className="w-[80%] mx-auto block px-7 py-3 rounded outline-none my-3"
              onChange={(e) => {
                setRePassword(e.target.value);
              }}
            />
            <button
              type="submit"
              className="w-[80%] mx-auto block py-4 bg-amber-200 my-10 rounded text-[#000] font-bold"
              onClick={addUser}
            >
              SIGN UP
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Register);
