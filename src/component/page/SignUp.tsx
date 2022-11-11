import React from "react";
import { Link  } from "react-router-dom";

const SignUp = () => {
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
          <div className="flex py-[50px]">
            <div className="w-[50%] bg-[#0057FF] relative">
              <div className="absolute bottom-[65px] left-[35px]">
                <h2 className="text-[45px] font-bold leading-[50px] text-white opacity-30 mb-3">
                You’re almost there!
                </h2>
                <p className="text-[17px] leading-[26px] text-white opactity-80">
                  Signup to finalise yor promotion
                </p>
              </div>
            </div>
            <div className="w-[50%] bg-white px-[50px]">
              <h5 className="text-center font-bold pt-[100px] pb-10">
              Sign up to launch your promotion
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
              <p className="text-[#ccc] text-center mb-4">OR</p>
              <div className="flex items-centes bg-[#ccc] py-[1px] rounded mb-4">
                <p className="py-[17px] mx-auto text-white text-[14px]">
                  SIGN UP WITH EMAIL
                </p>
              </div>
              <p className="text-center font-medium mb-5">
                Already have an accout?
                <span className="text-[#6610f2]">Get login</span>
              </p>
            </div>
          </div>
        </div>
        <p className="text-[12px text-black opacity-50 py-10 text-center">Copyright 2021 Ignite ROI Co. Ltd</p>
      </div>
    </div>
  );
};

export default SignUp;
