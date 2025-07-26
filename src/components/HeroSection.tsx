import React from "react";
import { RainbowButton } from "./magicui/rainbow-button";

import forest from "./images/forest.jpg";

const Hero = () => {
  return (
    <div
      className="h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${forest.src})` }}
    >
      {/* className="h-screen w-full bg-gradient-to-br from-emerald-300 via-teal-400 to-cyan-500" */}
      <svg
        className="top-1/40 right-1/60"
        width="200"
        height="100"
        viewBox="0 0 200 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          // className="inclusive-sans"
          x="100"
          y="65"
          text-anchor="middle"
          font-family="inclusiveSans"
          font-size="24"
          font-weight="100"
          fill="#000"
          letter-spacing="-0.25em"
        >
          SS
        </text>
      </svg>
      <RainbowButton
        variant={"outline"}
        size={"lg"}
        className="border-2 rounded-full absolute top-1/40 right-1/60"
      >
        <p className="text-lg">Get In Touch</p>
      </RainbowButton>
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="rockhill-rough text-[10vw] font-thin scout-font mt-30 mb-10 text-gray-50 ">
          Hi, I&apos;m Suryansh Singh
        </h1>
        <p className="rockhill-regular text-5xl  text-gray-50">
          <span className="scout-font font-thin ">UI/UX Designer</span> and{" "}
          <span className="scout-font font-thin">
            <u>Web Developer</u>
          </span>
          , creating simple and useful experiences
        </p>
      </div>
    </div>
  );
};

export default Hero;
