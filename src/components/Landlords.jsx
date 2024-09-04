const Landlords = () => {
  const data = [
    {
      img: "/images/virtual homer tour.svg",
      title: "Virtual home tour",
      description:
        "You can communicate directly with landlords and we provide you with virtual tour before you buy or rent the property.",
    },
    {
      img: "/images/best-deal.svg",
      title: "Find the best deal",
      description:
        "Browse thousands of properties, save your favorites and set up search alerts so you don’t miss the best home deal!",
    },
    {
      img: "/images/apply.svg",
      title: "Get ready to apply",
      description:
        "Find your dream house? You just need to do a little to no effort and you can start move in to your new dream home!",
    },
  ];
  return (
    <>
      <div className="bg-blue-950 mt-3 p-6">
        <div className="text-white text-center py-8 px-6 lg:grid lg:grid-cols-2 lg:justify-items-center lg:justify-center">
          <div>
            <h1 className="text-4xl font-bold">
              We make it easy for <br />{" "}
              <span className="themecolor">tenants</span> and{" "}
              <span className="themecolor">landlords.</span>
            </h1>
          </div>
          <div>
            <p className="text-justify text-sm text-gray-300 lg:w-96">
              Whether it’s selling your current home, getting financing, or
              buying a new home, we make it easy and efficient. The best part?
              you’ll save a bunch of money and time with our services.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-7 py-2   lg:flex-row">
          {data.map((item, index) => (
            <div
              key={index}
              className="text-white h-80 p-5 w-96 mx-7 bgtheme rounded-md  "
            >
              <img src={item.img} alt="" className="w-16" />
              <h1 className="text-2xl font-bold py-6">{item.title}</h1>
              <p className="text-justify text-lg text-gray-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <br />
        <div className="text-center mt-5 border-t-2 border-gray-500 lg:grid lg:grid-cols-3 lg:justify-center lg:justify-items-center  lg:pb-8">
          <div className="  mt-8 pb-8 w-full lg:border-r-2 lg:flex lg:flex-col lg:justify-center lg:items-center">
            <h1 className="text-white font-bold text-5xl mb-2">7.4%</h1>
            <p className="font-semibold text-lg text-gray-300">
              Property Return Rate
            </p>
            <div className="lg:hidden border-b-2 border-gray-500 mx-[40%] mt-8"></div>
          </div>
          <div className="mt-8 pb-8 w-full  lg:border-r-2 lg:flex lg:flex-col lg:justify-center lg:items-center">
            <h1 className="text-white font-bold text-5xl mb-2">7.4%</h1>
            <p className="font-semibold text-lg text-gray-300">
              Property Return Rate
            </p>
            <div className="lg:hidden border-b-2 border-gray-500 mx-[40%] mt-8"></div>
          </div>
          <div className="  mt-8 pb-8 w-full  lg:flex lg:flex-col lg:justify-center lg:items-center">
            <h1 className="text-white font-bold text-5xl mb-2">7.4%</h1>
            <p className="font-semibold text-lg text-gray-300">
              Property Return Rate
            </p>
            <div className="lg:hidden border-b-2 border-gray-500 mx-[40%] mt-8"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landlords;
