import { Input } from "postcss";
import React from "react";

const Contactform = () => {
  return (
    <div className="bg-white w-[900px] h-[700px] p-10 shadow-2xl rounded-2xl">
      <h1 className="font-bold text-[32px]">Contact us</h1>
      <div className="flex md:flex-row flex-col gap-4 mt-5">
        <div className="">
          <p>
            FirstName <span className="text-green-800">*</span>
          </p>
          <input
            type="text"
            placeholder="firstname"
            className="w-100 h-10 border border-gray-400 rounded-md px-4 mt-2"
          />
        </div>
        <div className="">
          <p>
            LastName <span className="text-green-800">*</span>
          </p>
          <input
            type="text"
            placeholder="lastname"
            className="w-100 h-10 border border-gray-400 rounded-md px-4 mt-2"
          />
        </div>
        
        </div>
        <div className="flex flex-col">
          <div className="mt-5">
            <p>
              Email <span className="text-green-800">*</span>
            </p>
            <input
              type="email"
              placeholder="email"
              className="w-full h-10 border border-gray-400 rounded-md px-4 mt-2"
            />
          </div>
      </div>
    </div>
  );
};

export default Contactform;
