import React from "react";

const Benefits = () => {
  return (
    <>
      <div className="flex-col flex mt-3 mx-[5%] my-5 lg:grid lg:grid-cols-2 lg:justify-center">
        <div className=" rounded-md  ">
          <div className="lg:w-96  bg-slate-100 rounded-md">
            <div className="p-4">
              <h1 className="font-bold text-2xl w-72">
                The new way to find your new home
              </h1>
              <p className="text-sm font-semibold w-64 mt-4">
                Find your dream place to live in with more than 10k+ properties
                listed.
              </p>
              <button>Browse Properties</button>
            </div>
            <div>
              <img
                src="../../public/images/Illustration.png"
                alt=""
                className="float-right w-80"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-center items-center mb-3">
            <div className="w-64 bg-slate-100 p-2 rounded-md mr-3">
              <img
                src="../../public/images/Icon.png"
                alt=""
                className="w-11 mb-3"
              />
              <h1 className="font-bold mb-3 text-slate-800">
                Property Insurance
              </h1>
              <p className="text-sm text-slate-600 font-semibold text-justify">
                We offer our customer property protection of liability coverage
                and insurance for their better life.
              </p>
            </div>
            <div className="w-64 bg-slate-100 p-2 rounded-md">
              <img
                src="../../public/images/Icon.png"
                alt=""
                className="w-11 mb-3"
              />
              <h1 className="font-bold mb-3 text-slate-800">
                Property Insurance
              </h1>
              <p className="text-sm text-slate-600 font-semibold text-justify">
                We offer our customer property protection of liability coverage
                and insurance for their better life.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-64 bg-slate-100 p-2 rounded-md mr-3">
              <img
                src="../../public/images/Icon.png"
                alt=""
                className="w-11 mb-3"
              />
              <h1 className="font-bold mb-3 text-slate-800">
                Property Insurance
              </h1>
              <p className="text-sm text-slate-600 font-semibold text-justify">
                We offer our customer property protection of liability coverage
                and insurance for their better life.
              </p>
            </div>
            <div className="w-64 bg-slate-100 p-2 rounded-md">
              <img
                src="../../public/images/Icon.png"
                alt=""
                className="w-11 mb-3"
              />
              <h1 className="font-bold mb-3 text-slate-800">
                Property Insurance
              </h1>
              <p className="text-sm text-slate-600 font-semibold text-justify">
                We offer our customer property protection of liability coverage
                and insurance for their better life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Benefits;
