import React from "react";
import img1 from "../assets/Css.png";
import img2 from "../assets/html.png";
import img3 from "../assets/firebase.png";
import img4 from "../assets/mongodb.png";
import img5 from "../assets/nodejs.png";
import img6 from "../assets/tailwind.png";
import img7 from "../assets/react.png";
// import img8 from "../assets/next.png"

function Skill() {
  return (
    <div className="border-t py-20" id="skill">
      <div>
        <p className="text-2xl font-bold text-slate-800 text-center my-6">Familer with</p>
      </div>
      <div className="flex flex-wrap justify-center items-center my-8">
        <div>
          <img src={img2} alt="img" className="w-20" />
        </div>
        <div>
          <img src={img1} alt="img" className="w-28" />
        </div>
        <div>
          <img src={img6} alt="img" className="w-28" />
        </div>
        <div>
          <img src={img7} alt="img" className="w-24" />
        </div>
        <div>
          <img src={img3} alt="img" className="w-16" />
        </div>
        <div>
          <img src={img4} alt="img" className="w-24" />
        </div>
        <div>
          <img src={img5} alt="img" className="w-24" />
        </div>
      </div>
    </div>
  );
}

export default Skill;
