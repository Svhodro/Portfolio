import React from "react";
import img from "./../assets/Sporsho.png";
import Typewriter from 'typewriter-effect';
import cv from './../../public/cv.pdf'

function Banner() {
  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-full flex justify-center items-center gap-4 flex-col my-11">
        <div>
          <img src={img} alt="img" className="w-60" />
        </div>
        <h1 className="text-2xl font-bold uppercase text-slate-500 ">
          Sporsho Vhodro
        </h1>
        <div className="text-center">
          <h1 className="text-7xl pb-6">
           
            <Typewriter
              options={{
                strings: ["Junior Frontend Developer", "....!"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className="text-lg text-slate-600">
            I have a passion for web app's development. I enjoy creating web
            site's that make life easier for people.
          </p>
          <a href={cv} download={cv} className="btn bg-slate-800 border-slate-800 text-white hover:text-black hover:bg-slate-300 px-7 my-4">
            Download CV 
          </a>
        </div>
      </div>
    </div>
  );
}

export default Banner;
