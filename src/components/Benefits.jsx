const Benefits = () => {
  return (
    <>
      <div className="flex-col flex mt-3 overflow-x-hidden px-[5%] my-5 lg:mx-[10%] lg:grid lg:grid-cols-1 xl:grid-cols-2 lg:justify-center  lg:items-center">
        <div className=" rounded-md  mt-6 mr-2">
          <div className="xl:w-96  bg-slate-100 rounded-md flex flex-col justify-center items-center">
            <div className="p-4">
              <h1 className="font-bold text-2xl w-72 text-blue-950">
                The new way to find your new home
              </h1>
              <p className="text-sm font-semibold w-64 mt-4 text-blue-950">
                Find your dream place to live in with more than 10k+ properties
                listed.
              </p>
              <button className="btn mt-4">Browse Properties</button>
            </div>
            <div className="flex justify-center items-center">
              <img
                src="/images/Illustration.png"
                alt=""
                className="float-right w-80"
              />
            </div>
          </div>
        </div>
        <div className="mt-6  lg:flex lg:flex-col lg:justify-center lg:items-center">
          <div className="flex justify-center items-center mb-3">
            <div className="w-64 h-52 bg-slate-100 p-2 rounded-md mr-3">
              <img src="/images/Icon.png" alt="" className="w-11 mb-3" />
              <h1 className="font-bold mb-3 text-slate-800">
                Property Insurance
              </h1>
              <p className="text-sm text-slate-600 font-semibold text-justify">
                We offer our customer property protection of liability coverage
                and insurance for their better life.
              </p>
            </div>
            <div className="w-64 h-52 bg-slate-100 p-2 rounded-md">
              <img src="/images/Icon2.svg" alt="" className="w-11 mb-3" />
              <h1 className="font-bold mb-3 text-slate-800">Best Price</h1>
              <p className="text-sm text-slate-600 font-semibold text-justify">
                Not sure what you should be charging for your property? No need
                to worry, let us do the numbers for you.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-64 h-52 bg-slate-100 p-2 rounded-md mr-3">
              <img src="/images/Icon3.png" alt="" className="w-11 mb-3" />
              <h1 className="font-bold mb-3 text-slate-800 ">
                Lowest Commission
              </h1>
              <p className="text-sm text-slate-600 font-semibold text-justify">
                You no longer have to negotiate commissions and haggle with
                other agents it only cost 2%!
              </p>
            </div>
            <div className="w-64 h-52 bg-slate-100 p-2 rounded-md">
              <img src="/images/Icon4.svg" alt="" className="w-11 mb-3" />
              <h1 className="font-bold mb-3 text-slate-800">Overall Control</h1>
              <p className="text-sm text-slate-600 font-semibold text-justify">
                Get a virtual tour, and schedule visits before you rent or buy
                any properties.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Benefits;
