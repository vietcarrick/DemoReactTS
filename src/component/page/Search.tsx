import React from "react";
import { Link } from "react-router-dom";
import Right from "../layout/header/Right";

const Search = () => {
  return (
    <div>
      <div className="flex items-center px-9 py-4 justify-between  border-b border-[#ccc]">
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
        <Right></Right>
      </div>
      <div className="px-[50px] py-8">
        <p className="text-[14px] mb-8">
          Enter the nam of yor Youtube channel or its link
        </p>
        <div className="flex justify-between">
          <div className="max-w-[600px] relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 absolute top-[25%] left-[10px] text-[#ccc]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
              />
            </svg>
            <input
              type="text"
              placeholder="Search channel or Enter channel link"
              className="w-full py-3.5 pl-10 pr-[110px] border rounded "
            />
            <button className="bg-[#4f49f5] flex text-white py-3 pl-3 pr-4 rounded absolute top-[5%] right-[3px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
              Search
            </button>
          </div>
          <button className="flex bg-[#ccc] px-6 py-3 text-black opacity-40 items-center rounded">
            Promote
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="bg-[#E5E5E5] py-[65px]">
        <div>
            <img src="https://startravelnis.rs/wp-content/themes/itc-tourist-child/img/not_found.png" alt="" className="mx-auto" />
            <h3 className="font-semibold text-[22px] text-center mb-3">Select Your Channel</h3>
            <p className="text-center">Enter your channel link or search your channel to get started</p>
        </div>
      </div>
    </div>
  );
};

export default Search;
