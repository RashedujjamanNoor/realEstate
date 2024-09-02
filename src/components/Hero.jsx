import React from "react";

const Hero = () => {
  return (
    <div className="h-screen w-full bg-slate-100 overflow-hidden">
      <div className="grid grid-cols-2">
        <div className="flex justify-center lg:justify-end items-center lg:mr-9">
          <div>
            <h1 className="lg:text-5xl font-bold text-slate-900">
              Buy,rent or sell <br /> your property <br />
              easily
            </h1>
            <p className="mt-4 lg:mt-10 text-sm text-justify w-32 lg:w-72 font-semibold text-slate-700">
              A great platform to buy, sell, or even rent your properties
              without any commisions.
            </p>
          </div>
        </div>
        <div className="relative ">
          <img
            src="../../public/images/Image.png"
            alt=""
            className="object-cover "
          />
          <div>
            <img
              src="../../public/images/Testimonial.png"
              alt=""
              className="absolute top-9 ml-2 lg:top-40 lg:left-4 shadow-lg w-20 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
