import React, { useState } from "react";
import { Link } from "react-router-dom";
import Full from "../../layout/Full";

type Props = {
  title: string;
  description?: string;
  image?: string;
  option?: React.ReactNode;
  style?: string;
  id?: string;
};

const Banner = ({ title, description, image, style, option, id }: Props) => {
  const [params, setParams] = useState("");
  return (
    <Full>
      <div className="py-[100px] bg-[#2E4494]" id={id}>
        <div className="max-w-[744px] mx-auto">
          <h1
            className={`w-full text-center text-white font-bold text-[55px] leading-[68px] ${style} mb-2.5`}
          >
            {title}
          </h1>
        </div>
        <div className="max-w-[603px] mx-auto">
          <p className="text-white opacity-80 text-center leading-[38px] mb-9">
            {description}
          </p>
        </div>
        <div className="max-w-[570px] mx-auto mb-[50px]">
          <form action="/search/channel" method="get">
            <input
              type="text"
              name="q"
              placeholder="Insert your YouTube channel name"
              className="w-full py-6 pl-7 relative rounded focus:outline-white]"
              onChange={(e) => {
                setParams(e.target.value);
              }}
            />
              <button type="submit" className="bg-[#F4B55E] py-[18px] px-5 text-white text-[17px] rounded absolute translate-x-[-102%] translate-y-[5px] ">
                Start my promotion
              </button>
          </form>
        </div>
        {image && (
          <div className="max-w-[404px] mx-auto">
            <a href="#">
              <img src={image} alt="" className="w-full" />
            </a>
          </div>
        )}
        {option && (
          <div className="flex gap-5 justify-center">
            <div className="flex gap-2">
              <img
                src="https://vrocket.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fchecked-gray.ce6239db.png&w=32&q=75"
                alt=""
              />
              <p className="text-base leading-5 text-white">Real People</p>
            </div>
            <div className="flex gap-2">
              <img
                src="https://vrocket.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fchecked-gray.ce6239db.png&w=32&q=75"
                alt=""
              />
              <p className="text-base leading-5 text-white">Starting at $30</p>
            </div>
            <div className="flex gap-2">
              <img
                src="https://vrocket.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fchecked-gray.ce6239db.png&w=32&q=75"
                alt=""
              />
              <p className="text-base leading-5 text-white">
                Get started in 2 minutes
              </p>
            </div>
          </div>
        )}
      </div>
    </Full>
  );
};

export default Banner;
