import React from "react";
import Amazon from "./../../assets/Amazon.jpg";
import Ecom from "./../../assets/Ecom.jpg";
import Trila from "./../../assets/Trila.jpg";
import { FaGithub } from "react-icons/fa6";

function Work() {
  return (
    <div className="border-t" id="work">
      <div>
        <p className="text-2xl font-bold text-slate-800 text-center my-6">
          My Project's
        </p>
      </div>
      <div className="flex justify-center items-center flex-col gap-4 px-4">
        <div className=" flex justify-between items-center flex-col sm:flex-row ">
          <figure>
            <img
              src={Amazon}
              className="w-80 hover:rounded-2xl rounded-lg hover:transition-transform"
              alt="Shoes"
            />
          </figure>
          <div className="card-body pl-4">
            <p className="text-lg font-semibold">Amazon UI Clone</p>
            <p className="text-base text-slate-900">
              This is a amazon ui clone site with add to cart functinality{" "}
              <br />
              and with authentication system with firebase{" "}
            </p>
            <div className="flex justify-around items-center gap-4">
            <a  target="_blank" className="btn w-40" href="https://amazon-clone-weld-gamma.vercel.app/">Live link</a>
            <a  target="_blank" className="btn" href="https://github.com/Svhodro/Amazon-Clone-"><FaGithub className="size-8"/></a>
            </div>
            <ol className="text-lg ">
              <li>1. Login system</li>
              <li>2. Add to cart system</li>
              <li>3. Product showing system</li>
            </ol>
            <ul className="flex gap-2 font-bold">
              <li>React js</li>
              <li>Tailwind</li>
              <li>firebase </li>
            </ul>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
        {/* second card */}
        <div className=" flex justify-between items-center flex-col sm:flex-row-reverse">
          <figure>
            <img
              src={Ecom}
              className="w-80  hover:rounded-2xl rounded-lg hover:transition-transform"
              alt="Shoes"
            />
          </figure>
          <div className="card-body pl-4">
            <p className="text-lg font-semibold">Ecom Ecommarce</p>
            <p className="text-base text-slate-900">
              This is a ecommarce website with add to cart functinality <br />
              and with authentication system with firebase{" "}
            </p>
            <div className="flex justify-around items-center gap-4">
            <a  target="_blank" className="btn w-40" href="https://ecom-lovat-three.vercel.app/">Live link</a>
            <a  target="_blank" className="btn" href="https://github.com/Svhodro/Ecom"><FaGithub className="size-8"/></a>
            </div>
            <ol className="text-base ">
              <li>1. Login system</li>
              <li>2. Add to cart system</li>
              <li>3. Product showing system</li>
            </ol>
            <ul className="flex gap-2 font-bold">
              <li>React js</li>
              <li>Tailwind</li>
              <li>firebase</li>
            </ul>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
        {/* third card */}      
        <div className=" flex justify-center items-center flex-col sm:flex-row">
          <figure>
            <img
              src={Trila}
              className="w-80  hover:rounded-2xl rounded-lg hover:transition-transform"
              alt="Shoes"
            />
          </figure>
          <div className="card-body ">
            <p className="text-lg font-semibold">Ecom Ecommarce</p>
            <p className="text-base text-slate-900">
              This is a realstate website with show prperty offer the prperty
              <br />
              admn system manger system and with authentication system.
            </p>
            <div className="flex justify-around items-center gap-4">
            <a  target="_blank" className="btn w-40" href="https://trila-real-estate.vercel.app/">Live link</a>
            <a  target="_blank" className="btn" href="https://github.com/Svhodro/Trila-Real-Estate"><FaGithub className="size-8"/></a>
            </div>
            <ol className="text-base ">
              <li>1. Login system</li>
              <li>2. wishlist system</li>
              <li>3. offer system from user</li>
              <li>4. Admin system</li>
            </ol>
            <ul className="flex gap-2 font-bold">
              <li>Mongodb</li>
              <li>Tailwind</li>
              <li>firebase</li>             
            </ul>
            <ul className="flex gap-2 font-bold">
              <li>Node js</li>
              <li>React js</li>
              <li>Express js</li>             
            </ul>
            
            <div className="card-actions justify-end"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
