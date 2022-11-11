import React from "react";
import { Link  } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="flex items-center px-9 py-4 justify-between">
        <Link to="/" className="w-[25%]">
          <div className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 text-[#ccc]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
            <p>Back</p>
          </div>
        </Link>
        <div className="">
          <img
            src="https://vrocket.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvrocket.cd8816fb.png&w=128&q=75"
            alt=""
          />
        </div>
        <div className="w-[25%]"></div>
      </div>
      <div className="bg-[#E5E5E5]">
        <div className="max-w-[840px] mx-auto">
          <div className="flex py-6">
            <div className="w-[50%] bg-[#0057FF] relative">
              <div className="absolute bottom-[65px] left-[25px]">
                <h2 className="text-[45px] font-bold leading-[50px] text-white opacity-30 pb-3">
                  WELCOME BACK
                </h2>
                <p className="text-[17px] leading-[26px] text-white opactity-80">
                  Signup to finalise yor promotion
                </p>
              </div>
            </div>
            <div className="w-[50%] bg-white px-[50px]">
              <h5 className="text-center font-bold pt-[60px] pb-6">
                Welcome back!
              </h5>
              <div className="flex items-centes bg-[#468FFE] py-[1px] rounded mb-4">
                <div className="bg-white ml-[1px] py-5 px-5 rounded-sm">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png"
                    alt=""
                    className="w-4 h-4 object-cover"
                  />
                </div>
                <p className="py-[17px] mx-auto text-white text-[14px]">
                  Sign in with Google
                </p>
              </div>
              <div className="flex items-centes bg-[#4c69ba] py-[1px] rounded mb-4">
                <p className="py-[17px] mx-auto text-white text-[14px]">
                  SIGN IN WITH FACEBOOK
                </p>
              </div>
              <p className="text-[#ccc] text-center mb-4">OR</p>
              <div className="w-full mb-4 relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-7 h-7 absolute text-[#ccc] top-[25%] left-[15px]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                <input
                  type="text"
                  className="py-4 border-2 pl-[60px] w-full rounded"
                  placeholder="Email address"
                />
              </div>
              <div className="w-full mb-4 relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-7 h-7 absolute text-[#ccc] top-[25%] left-[15px]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>

                <input
                  type="text"
                  className="py-4 border-2 pl-[60px] w-full rounded"
                  placeholder="Password"
                />
              </div>
              <button className="bg-[#6610f2] text-white font-medium w-full py-4 rounded mb-4">
                Sign In
              </button>
              <p className="text-[#6610f2] text-center font-medium">
                Forgot password?
              </p>
              <p className="text-center font-medium mb-5">
                Don't have an account yet?{" "}
                <span className="text-[#6610f2]">Sign up</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
