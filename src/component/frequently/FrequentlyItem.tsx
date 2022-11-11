import React, {useState} from "react";

type Props = {
  title: string;
  content: string;
};

const FrequentlyItem: React.FC<Props> = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  const handleActive = () => {
    setIsActive(!isActive)
  }
  return (
    <div className="w-full shadow shadow-[rgb(187 199 206 / 25%) 0px 2px 6px] py-6 px-6 rounded mt-4">
      <div className="flex justify-between items-center" onClick={handleActive}>
        <p className="font-medium text-[18px]">{title}</p>
        {!isActive ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 6v12m6-6H6"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
          </svg>
        )}
      </div>
      {isActive && (
        <div className="px-4 pt-3 text-[15px] leading-[30px] text-[#6B7280]">
          {content}
        </div>
      )}
    </div>
  );
};

export default FrequentlyItem;
