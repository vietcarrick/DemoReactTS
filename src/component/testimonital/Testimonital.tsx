import React from "react";
import Full from "../layout/Full";
import Item from "./Item";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Props = {
  title?: string;
  image?: string;
};

const _data = [
  {
    avatar:
      "https://vrocket.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FRic-Eddins.8f49be4b.png&w=48&q=75",
    name: "Jonathan Taylor",
    comment:
      "OMG! I cannot believe that I have got a brand new landing page after getting this template we are able to use our most used e-commerce. It is great for creating with landing pages within minutes! It then actually takes less  time to develop the produce",
  },
  {
    avatar:
      "https://vrocket.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FRic-Eddins.8f49be4b.png&w=48&q=75",
    name: "Gavin Park",
    comment:
      "OMG! I cannot believe that I have got a brand new landing page after getting this template we are able to use our most used e-commerce. It is great for creating with landing pages within minutes! It then actually takes less  time to develop the produce",
  },
  {
    avatar:
      "https://vrocket.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FRic-Eddins.8f49be4b.png&w=48&q=75",
    name: "Jonathan Taylor",
    comment:
      "OMG! I cannot believe that I have got a brand new landing page after getting this template we are able to use our most used e-commerce. It is great for creating with landing pages within minutes! It then actually takes less  time to develop the produce",
  },
  {
    avatar:
      "https://vrocket.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FRic-Eddins.8f49be4b.png&w=48&q=75",
    name: "Betty Norton",
    comment:
      "OMG! I cannot believe that I have got a brand new landing page after getting this template we are able to use our most used e-commerce. It is great for creating with landing pages within minutes! It then actually takes less  time to develop the produce",
  },
  {
    avatar:
      "https://vrocket.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FRic-Eddins.8f49be4b.png&w=48&q=75",
    name: "Jonathan Taylor",
    comment:
      "OMG! I cannot believe that I have got a brand new landing page after getting this template we are able to use our most used e-commerce. It is great for creating with landing pages within minutes! It then actually takes less  time to develop the produce",
  },
];

const Testimonital = ({ title, image }: Props) => {
  return (
    <Full>
      <div className="py-4">
        <h4 className="text-[30px] leading-[42px] text-center mb-[70px]">
          {title}
        </h4>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={15}
          slidesPerView={4}
          onSlideChange={() => console.log("slide change")}
          autoplay={{ delay: 2000 }}
          loop={true}
        >
          {_data.map((item, index) => {
            return (
              <div className="bg-slate-50 py-4">
                <SwiperSlide>
                  <Item
                    avatar={item.avatar}
                    name={item.name}
                    comment={item.comment}
                  />
                </SwiperSlide>
              </div>
            );
          })}
        </Swiper>
        <div className="max-w-[445px] mx-auto mt-8">
          <img src={image} alt="" />
        </div>
      </div>
    </Full>
  );
};

export default Testimonital;
