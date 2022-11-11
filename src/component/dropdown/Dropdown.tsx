import React, { useState } from "react";
import { _Currency, _Language } from "../layout/header/Header";

const Dropdown = () => {
  const [language, setLanguage] = useState({
    image: "https://cdn-icons-png.flaticon.com/512/555/555526.png",
    name: "English",
  });
  const [currency, setCurrency] = useState("VND");
  const [isDropLanguage, setIsDropLanguage] = useState(false);
  const [isDropCurrency, setIsDropCurrency] = useState(false);
  const [languageData, setLanguageData] = useState(_Language);
  const [currencyData, setCurrencyData] = useState(_Currency);
  const hanleDropLanguage = () => {
    setIsDropLanguage(!isDropLanguage);
  }
  const hanleDropCurrency = () => {
    setIsDropCurrency(!isDropCurrency);
  }
  const hanldeChangeLanguage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const dataFilter = _Language.filter((item) =>
      item.name.toLowerCase().includes(value)
    );
    console.log(dataFilter)
    setLanguageData(dataFilter);
  };
  const handleChangeCurrency = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toUpperCase();
    const dataFilter = _Currency.filter((item) => item.includes(value));
    setCurrencyData(dataFilter);
  };
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="flex items-center">
        <img src={language.image} alt="" className="h-[18px] rounded-full" />
        <p className="ml-1">{language.name}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content p-4 shadow bg-base-100 rounded w-72 mt-3"
      >
        <li className="mb-3 relative">
          <h4 className="font-medium mb-2.5">Language</h4>
          <div className="flex items-center justify-between border px-2 py-1 rounded" onClick={hanleDropLanguage}>
            <div className="flex items-center">
              <img
                src={language.image}
                alt=""
                className="h-[18px] rounded-full"
              />
              <p className="ml-1">{language.name}</p>
            </div>
            {!isDropLanguage ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 15.75l7.5-7.5 7.5 7.5"
                />
              </svg>
            )}
          </div>
          {isDropLanguage && (
            <div className="absolute w-full bg-white z-50">
              <input
                type="text"
                placeholder="Type here"
                className="px-2 py-1 w-full outline-none rounded border border-[#ccc] bg-white"
                onChange={hanldeChangeLanguage}
              />
              {languageData.map((item, index) => (
                <div className="flex items-center px-2 py-1 border bg-white" onClick={() => (
                  setLanguage(item)
                )}>
                  <img
                    src={item.image}
                    alt=""
                    className="h-[18px] rounded-full"
                  />
                  <p className="ml-1">{item.name}</p>
                </div>
              ))}
            </div>
          )}
        </li>
        <li className="mb-3 relative z-40">
          <h4 className="font-medium mb-2.5">Currency</h4>
          <div className="flex items-center justify-between border px-2 py-1 rounded" onClick={hanleDropCurrency}>
            <div className="flex items-center">
              <p className="ml-1">{currency}</p>
            </div>
            {!isDropCurrency ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 15.75l7.5-7.5 7.5 7.5"
                />
              </svg>
            )}
          </div>
          {isDropCurrency && (
            <div className="absolute w-full bg-white z-50" >
              <input
                type="text"
                placeholder="Type here"
                className="px-2 py-1 w-full outline-none rounded border border-[#ccc]  bg-white"
                onChange={handleChangeCurrency}
              />
              {currencyData.map((item, index) => (
                <div className="flex items-center px-2 py-1 border" onClick={() => {
                  setCurrency(item)
                }}>
                  <p className="ml-1">{item}</p>
                </div>
              ))}
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
