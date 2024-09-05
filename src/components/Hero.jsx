const Hero = () => {
  return (
    <div className=" w-full bg-slate-100 overflow-hidden">
      <div className="grid grid-cols-2">
        <div className="flex justify-center lg:justify-end items-center lg:mr-9">
          <div>
            <h1 className="lg:text-7xl font-bold text-slate-900 text-2xl">
              Buy,rent or sell <br className="lg:hidden" /> your{" "}
              <br className="hidden lg:block" /> property{" "}
              <br className="lg:hidden" />
              easily
            </h1>
            <p className="mt-4 lg:mt-10 text-sm text-justify w-40 lg:w-72 font-semibold text-slate-700">
              A great platform to buy, sell, or even rent your properties
              without any commisions.
            </p>
          </div>
        </div>
        <div className="relative ">
          <img src="/images/Image.png" alt="" className="object-cover " />
          <div>
            <img
              src="/images/Testimonial.png"
              alt=""
              className="absolute top-9 ml-2 lg:top-40 lg:left-4 shadow-lg w-20 object-cover lg:w-52"
            />
          </div>
          <img
            src="/images/Trustpilot.png"
            alt=""
            className="absolute bottom-3 w-20 right-0 lg:bottom-20 lg:right-36 lg:w-48"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
