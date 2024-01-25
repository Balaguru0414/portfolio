import React from "react";
// import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";

const LeftBanner = () => {
  // const [text] = useTypewriter({
  //   words: ["Front End Developer."],
  //   loop: true,
  //   typeSpeed: 30,
  //   deleteSpeed: 30,
  //   delaySpeed: 2000,
  // });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Bala guru</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a{" "}
          <span>
            {/* {text} */}
            Front End Developer.
          </span>
          {/* <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          /> */}
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I'm a front-end web developer proficient in HTML, CSS, JavaScript, and
          React and I'm exploring the world of back-end development with basic
          knowledge in Node.js, Express, MongoDB, and Firebase to create
          full-stack web applications.
        </p>
      </div>
      {/* Media */}
      <Media />
    </div>
  );
};

export default LeftBanner;
