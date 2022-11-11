import React from "react";

type Props = {
  title?: string;
  content: string;
  style?: string;
};

const Checked: React.FC<Props> = ({content, title, style}) => {
  return (
    <div className="flex mb-2.5">
      <img
        className="object-cover w-5 h-5 mt-1.5 mr-2"
        src="https://vrocket.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fchecked.11a38593.png&w=32&q=75"
        alt=""
      />
      <p className={`text-[17px] leading-[34px] text-bold text-black ${style}`}>{title}<span className="text-black opacity-70">{content}</span></p>
    </div>
  );
};

export default Checked;
