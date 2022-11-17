/* eslint-disable jsx-a11y/alt-text */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [avatar, setAvatar] = useState({});
  const [address, setAddress] = useState("");
  const [isActive, setIsActive] = useState(false);

  const formData = new FormData();
  const handleFileSelected = (e) => {
    const files = Array.from(e.target.files);
    setAvatar(files[0]);
    formData.append("avatar", files[0]);
  };
  const params = useParams();
  const id = params.id;

  const [info, setInfo] = useState();
  useEffect(() => {
    axios
      .get(`http://localhost:8081/users/detail/${id}`)
      .then((res) => {
        setInfo(res.data.result);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const updateUser = (event) => {
    event.preventDefault();
    axios
      .put(
        `http://localhost:8081/users/update/${id}`,
        { name, phone, address, avatar },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      {info && (
        <div className="background flex items-center justify-center gap-[100px]">
          <div class="max-w-[30%] w-full h-[90%] flex items-center content-center bg-white opacity-90 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="w-full">
              <div className="mb-8">
                <img
                  className="h-[150px] object-cover z-10 mx-auto"
                  src={
                    info.user_img
                      ? require(`../../../Server/upload/${info.user_img}`)
                      : "https://d2sochvv0rudri.cloudfront.net/place_photos/17533/beer-world-kingston.png"
                  }
                  alt="logo"
                />
              </div>
              <div class="flex flex-col mx-auto w-[80%] pb-10">
                <h1 class="text-3xl text-gray-900 font-semibold">
                  {info.user_name}
                </h1>
                <div class="mb-2 mt-2">
                  <h1 class="text-base text-gray-300 font-semibold">
                    Contact Details
                  </h1>
                  <div class="mt-2 flex items-center">
                    <img
                      className="w-5"
                      src="https://www.linkpicture.com/q/image-13_16.png"
                    />
                    <h1 class="text-base text-gray-900 ml-5 font-semibold">
                      {info.user_phone}
                    </h1>
                  </div>
                  <div class="mt-2 flex items-center">
                    <img
                      class="w-5"
                      src="https://www.linkpicture.com/q/image-14_4.png"
                    />
                    <h1 class="text-base text-gray-900 ml-5 font-semibold">
                      {info.user_email}
                    </h1>
                  </div>
                  <div class="mt-2 flex items-center">
                    <img
                      class="w-5"
                      src="https://www.linkpicture.com/q/image-16_5.png"
                    />
                    <h1 class="text-base text-gray-900 ml-5 font-semibold">
                      {info.user_address}
                    </h1>
                  </div>
                </div>
              </div>
              <div
                className="w-[50%] text-center mx-auto block py-4 bg-amber-200 rounded text-[#000] font-bold"
                onClick={() => {
                  setIsActive(!isActive);
                }}
              >
                EDIT
              </div>
            </div>
          </div>
          {isActive && (
            <div className="max-w-[30%] w-full h-[90%] bg-black/70 rounded-md py-6 flex items-center">
              <div className="w-full">
                <form action="" method="post" onSubmit={updateUser}>
                  <label
                    htmlFor="username"
                    className="text-[#fff] text-lg ml-[10%] my-2"
                  >
                    Full name :{" "}
                  </label>
                  <input
                    type="text"
                    name="username"
                    className="w-[80%] mx-auto block px-7 py-2.5 rounded outline-none my-2.5"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                  <label
                    htmlFor="phone"
                    className="text-[#fff] text-lg ml-[10%] my-2"
                  >
                    Your phone :{" "}
                  </label>
                  <input
                    type="text"
                    name="phone"
                    className="w-[80%] mx-auto block px-7 py-2.5 rounded outline-none my-2.5"
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                  />
                  <label
                    htmlFor="avatar"
                    className="text-[#fff] text-lg ml-[10%] my-2"
                  >
                    Avatar :
                  </label>
                  <input
                    type="file"
                    name="avatar"
                    className="file-input file-input-bordered w-[80%] mx-auto block my-2.5"
                    onChange={handleFileSelected}
                  />
                  <label
                    htmlFor="address"
                    className="text-[#fff] text-lg ml-[10%] my-2"
                  >
                    Address :{" "}
                  </label>
                  <input
                    type="text"
                    name="address"
                    className="w-[80%] mx-auto block px-7 py-2.5 rounded outline-none my-2.5"
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                  />
                  <button
                    type="submit"
                    className="w-[80%] mx-auto block py-2.5 bg-amber-200 mt-12 rounded text-[#000] font-bold"
                    onClick={updateUser}
                  >
                    UPDATE
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Profile;
