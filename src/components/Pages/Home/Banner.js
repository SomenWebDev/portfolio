import React from "react";
import { Link } from "react-router-dom";
import pic from "../../../assets/WhatsApp Image 2022-06-08 at 7.41.03 PM.jpeg";

const Banner = () => {
  return (
    <div class="hero h-screen bg-[#0a192f]">
      <div class="hero-content flex-col lg:flex-row">
        <div>
          <p className="text-pink-600">Hi, my name is</p>
          <h1 className="text-4xl  text-[#ccd6f6]">Somen Singha</h1>
          <h2 className="text-4xl  font-bold text-[#8892b0]">
            I'm a Front End Developer
          </h2>

          <p className="py-6 text-[#8892b0]  max-w-xl">
            I am a front end developer specializing in building and designing
            your digital experience.Currently I am focused on building
            responsive website .
          </p>
          <button class="btn btn-primary hover:bg-pink-600 hover:border-pink-600">
            <a
              download
              as={Link}
              href="https://drive.google.com/file/d/1ZTOzTO_-inIoQxl1sohtayUg4UbI8Kwz/view?usp=sharing"
              target="_blank"
            >
              Download Resume
            </a>
          </button>
        </div>
        {/* h-[60vh] w-6/12 */}
        <div className="h-[60vh] shrink-0">
          <img src={pic} class="max-w-full h-full   shadow-2xl" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
