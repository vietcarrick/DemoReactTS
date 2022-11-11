import React, { useState } from "react";
import Checked from "../../Checked";
import CreatorsBusiness from "../../creatorBusiness/CreatorsBusiness";
import { _data } from "../../creatorBusiness/data";
import Item from "../../creatorBusiness/Item";
import { _dataFrequently } from "../../frequently/data";
import Frequently from "../../frequently/Frequently";
import FrequentlyItem from "../../frequently/FrequentlyItem";
import Banner from "../../home/banner/Banner";
import Brand from "../../home/brand/Brand";
import Left from "../../home/section/Left";
import Right from "../../home/section/Right";
import Section from "../../home/section/Section";
import OptionItem from "../../home/section/youtube/OptionItem";
import { _promote } from "../../promote/data";
import Promote from "../../promote/Promote";
import PromoteItem from "../../promote/PromoteItem";
import Testimonital from "../../testimonital/Testimonital";
import Container from "../Container";
import Full from "../Full";
import { _bestInClass, _getadson, _optimize, _promoteYoutube } from "./checkedData";

const _banner = {
  title: "The best way for YouTube channels to grow fast",
  description:
    "We advertise videos to real people directly on YouTube. Join 4,345 other creators and brands that are already using VRocket.",
};
const _sectionYoutube = {
  image:
    "https://vrocket.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsearch.1cf5dc7d.png&w=640&q=100",
  title: "Get your videos seen by real people on YouTube",
  description:
    "We run campaigns starting from only $30 and advertise across three different ad formats",
};

const Main = () => {
  const [state, setState] = useState({
    offset: 0,
    data: [
      {
        title: "YouTube Search (Discovery Ads)",
        content:
          "Promote your video to relevant people on the top of YouTube search results",
        image:
          "https://vrocket.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsearch.1cf5dc7d.png&w=640&q=100",
      },
      {
        title: "YouTube Related (Discovery Ads)",
        content:
          "Promote your video to relevant people on the top of YouTube search results",
        image:
          "https://vrocket.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frelated.8dcff0e8.png&w=640&q=100",
      },
      {
        title: "Commercial (In-stream Ads)",
        content:
          "Promote your video to relevant people on the top of YouTube search results",
        image:
          "https://vrocket.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcommercial-desktop.09f5d2fe.png&w=640&q=75",
      },
    ],
  });
  console.log(state.offset, state.data);
  const _handleActiveDropDown = (_index: number) => {
    setState((prevData) => {
      return {
        ...prevData,
        offset: _index,
      };
    });
  };
  return (
    <div className="mx-[-16px] pt-20">
      <Banner
        title={_banner.title}
        description={_banner.description}
        image="https://vrocket.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnew-trustpilot.ad354290.png&w=640&q=100"
      />
      <Brand title={"As Seen On"} />
      <Container style={"mx-auto"}>
        <Section style={"py-8"}>
          <Left image={state.data?.[state.offset].image} />
          <Right
            title={_sectionYoutube.title}
            description={_sectionYoutube.description}
            style="max-w-[426px]"
          >
            {state.data?.map((item, index) => {
              return (
                <OptionItem
                  key={index}
                  title={item.title}
                  onclick={() =>
                    index !== state.offset && _handleActiveDropDown(index)
                  }
                  content={item.content}
                  isActive={index === state.offset}
                />
              );
            })}
          </Right>
        </Section>
        <Section style="py-[130px]">
          <Right
            title={"Setup in minutes. Choose your own audience."}
            description={
              "Get started fast with our user friendly setup. Tell us the demographics, keywords or channels you want to target and we setup your campaign."
            }
            style={"max-w-[450px]"}
          >
            {
              <button className="px-[17px] py-[14px] bg-[#4F49F5] text-white rounded">
                Learn More
              </button>
            }
          </Right>
          <Left image="https://vrocket.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsetup-in-minutes.61d20fe2.png&w=640&q=100" />
        </Section>
      </Container>
      <Testimonital
        title="Over 4,435 YouTube channels worldwide rely on VRocket"
        image="https://vrocket.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftrustpilot-black.58bf8303.png&w=384&q=100"
      />
      <Container style="mx-auto">
        <Section style="py-[130px]">
          <Left image="https://vrocket.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbest-in-class.c484496b.png&w=640&q=100" />
          <Right title="Best-in class campaign optimisation and support">
            {_bestInClass.map((item, index) => {
              return <Checked content={item} key={item} />;
            })}
            <button className="py-[14px] px-[17px] bg-[#4F49F5] rounded text-white mt-6">
              Learn More
            </button>
          </Right>
        </Section>
      </Container>
      <Banner
        title="Real YouTube Marketing by real people. Oh, and no $2,495 agency fees!"
        image="https://vrocket.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnew-trustpilot.ad354290.png&w=640&q=100"
        style={"text-[38px]"}
      />
      <Container>
        <Section style="py-[130px]">
          <Right
            style="[&>p]:text-[16px]"
            title="Let us manage your YouTube video promotion"
            description="We receive emails from creators on a daily basis, asking the same question: How to promote my YouTube channel? There are many ways to create buzz for your channel but at VRocket, we promote YouTube videos using the latest YouTube Promotion strategies in advertising. VRocket is the ideal solution for anyone that is asking themselves how to get ads on YouTube. Instead of doing it yourelft, you can work with an entire team of specialists that will do the  work for you.
            Unlike other providers, we only promote YouTube videos directly on YouTube. All views are generated using Google Ads and your ad campaigns are optimized by our experienced management team. So, if you have been wondering how to get more views on YouTube, let us help you promote you YouTube channel and increate YouTube views."
          ></Right>
          <Left image="https://vrocket.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmanager-video.7298dc48.png&w=1920&q=100" />
        </Section>
      </Container>
      <Full style="bg-[#F8F8FB]">
        <CreatorsBusiness
          title="Creators and Businesses use VRocket to increase YouTube subscribers"
          description="We advertise your YouTube videos to increase YouTube views and grow your Youtube channel. For those who don’t know how to get ads on YouTube or how to promote videos on Youtube, you’re at the right spot! Use VRocket to get ads on YouTube fast."
        >
          {_data.map((item, index) => {
            return (
              <Item
                image={item.image}
                title={item.title}
                description={item.description}
              />
            );
          })}
        </CreatorsBusiness>
      </Full>
      <Container>
        <Promote
          increase="Increase real youtube views and get real subscribers"
          title="Wondering how to get ads on YouTube? Promote your YouTube videos with VRocket"
          description="If you are asking yourself how to get more views on YouTube or how to get ads on your YouTube videos, You are at the right place. VRocket is used by musicians, vloggers, brands, and businesses to promote YouTube videos from around the world."
        >
          {_promote.map((item, index) => {
            return (
              <PromoteItem
                title={item.title}
                content={item.description}
                image={item.image}
              ></PromoteItem>
            );
          })}
        </Promote>
        <Promote
          increase="Increase real youtube views and get real subscribers"
          title="Expert Tips On How To Promote Your YouTube Channel"
        />
        <Section style="mb-[110px]">
          <Left
            image={
              "https://vrocket.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.763506ba.jpg&w=1920&q=100"
            }
          />
          <Right
            style={"[&>h1]:text-[25px] [&>h1]:leading-[35px] [&>p]:text-[15px]"}
            number={"01"}
            title="Optimize and Promote Your YouTube Videos"
            description="Promoting YouTube videos is not a big deal, but it's crucial to ensure that your videos are polished to perfection. It not only includes making a high-quality and well-produced video but also involves video optimization for search. Video optimization involves:"
          >
            {_optimize.map((item, index) => {
              return <Checked style="text-[15px]" content={item} key={item} />;
            })}
          </Right>
        </Section>
        <Section style="mb-[110px]">
          <Right
            style={"[&>h1]:text-[25px] [&>h1]:leading-[35px] [&>p]:text-[15px]"}
            number={"02"}
            title="Promote Your YouTube Channel"
            description="Apart from working out on your individual videos, make sure you promote your YouTube channel as a whole. Organizing and optimizing your videos for search is the one thing, but taking an additional step to optimize your channel will help you grow your YouTube channel and its overall presence on the platform. How to promote my YouTube channel? If this is your question, here's our answer!"
          >
            {_promoteYoutube.map((item, index) => {
              return <Checked style="text-[15px]" content={item} key={item} />;
            })}
          </Right>
          <Left image="https://vrocket.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.20703552.jpg&w=1920&q=100" />
        </Section>
        <Section>
          <Left image="https://vrocket.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.f38c6fa3.jpg&w=1920&q=100" />
          <Right
            style={"[&>h1]:text-[25px] [&>h1]:leading-[35px] [&>p]:text-[15px]"}
            number="03"
            title="Get ads on your YouTube channel"
            description="If you are wondering how to get ads on youtube, VRocket is here to help you understand how to get ads on your YouTube videos. In marketing, you always have the option to get more visibility through paid YouTube ads. But the best part is that you don't have to spend a huge amount to run YouTube ads. VRocket can help you promote your YouTube channel using YouTube ads starting at only $30. We offer the best price for high-quality,100% real YouTube views. You can see the ad campaign results, data, and statistics in your VRocket dashboard. All you need to do is create a YouTube video and optimize it; leave the rest to us. We know how to get ads on your YouTube videos and promote them on YouTube so that your videos reach your target audience. You can choose from a variety of ads, such as:"
          >
            {_getadson.map((item, index) => {
              return <Checked style="text-[15px] leading-[30px]" title={item.title} content={item.content} key={item.title} />;
            })}
          </Right>
        </Section>
        <Frequently title={"Frequently Ask Quesiton"}>
            {_dataFrequently.map((item, index) => {
              return (
                <FrequentlyItem title={item.title} content={item.content}/>
              )
            })}
        </Frequently>
      </Container>
      <Banner title="Promoting your YouTube videos to real people has never been easier" style="text-[38px] leading-[58px]" option={true}/>
    </div>
  );
};

export default Main;
