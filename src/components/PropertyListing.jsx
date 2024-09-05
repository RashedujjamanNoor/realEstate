import { FaKey } from "react-icons/fa";
import { RiHomeLine } from "react-icons/ri";
import { FaSnowman } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { IoBedOutline } from "react-icons/io5";
import { MdOutlineBathroom } from "react-icons/md";
import { CgSize } from "react-icons/cg";
import { MdFavoriteBorder } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PropertyListing = () => {
  const data = [
    {
      img: "/images/palm harbor.svg",
      title: "Palm Harbor",
      location: "2699 Green Valley, Highland Lake, FL",
      beds: "3",
      bathrooms: "2",
      size: "6*8",
      rent: "2095",
    },
    {
      img: "/images/Mask Group.svg",
      title: "Beverly Springfield",
      location: "2821 Lake Sevilla, Palm Harbor, TX",
      beds: "4",
      bathrooms: "2",
      size: "6*7.5",
      rent: "2700",
    },
    {
      img: "/images/Mask Group 2.svg",
      title: "Faulkner Ave",
      location: "909 Woodland St, Michigan, IN",
      beds: "3",
      bathrooms: "2",
      size: "6*8",
      rent: "2095",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="mt-3 overflow-x-hidden px-[5%] lg:mx-[10%] ">
        <div className="text-center">
          <h1 className="font-bold text-3xl text-blue-950 lg:text-3xl">
            Populer properties
          </h1>
          <p className="text-sm mt-3 text-gray-600 font-semibold">
            Some of our picked properties near you location.
          </p>
        </div>
        <div className="flex flex-col justify-between items-center gap-4 mt-3 lg:flex lg:flex-row lg:justify-between lg:items-center">
          <div className="themecolor flex justify-center items-center gap-8 font-semibold">
            <h1 className="flex justify-center items-center gap-1">
              <FaKey />
              Rent
            </h1>
            <h1 className="flex justify-center items-center gap-1">
              <FaSnowman />
              Buy
            </h1>
            <h1 className="flex justify-center items-center gap-1">
              <RiHomeLine />
              Sell
            </h1>
          </div>
          <div className="flex justify-center items-center font-semibold  border-gray-400 border-2 rounded px-2 py-1 bg-gray-100">
            <IoSearch className="themecolor text-lg font-bold" />
            <input
              type="search"
              placeholder="Search.."
              className=" px-2 py-1 text-sm outline-none bg-gray-100 text-gray-700"
            />
          </div>
        </div>
        <div className="mt-4 ">
          <div className="hidden md:grid md:grid-cols-2 lg:grid xl:grid-cols-3 lg:justify-center justify-items-center">
            {data.map((curElem, index) => (
              <div
                key={index}
                className="rounded overflow-hidden bg-gray-100 shadow-md my-2 md:w-80 "
              >
                <img
                  src={curElem.img}
                  alt=""
                  className="object-cover w-full lg:w-96"
                />
                <div className="mx-2 my-2">
                  <div className="flex justify-between items-center">
                    <p>
                      <span className="themecolor font-bold text-lg">
                        ${curElem.rent}
                      </span>
                      <span className="text-sm text-gray-700">/month</span>
                    </p>
                    <div className="border-2 border-slate-300 rounded-full p-1 ">
                      <MdFavoriteBorder className="themecolor font-bold text-xl" />
                    </div>
                  </div>
                  <div>
                    <h1 className="font-bold text-blue-950 text-2xl">
                      {curElem.title}
                    </h1>
                  </div>
                  <p className="text-sm opacity-90">{curElem.location}</p>

                  <div className="flex justify-evenly items-center py-3 mt-5">
                    <p className="flex justify-center items-center gap-1 text-sm font-semibold">
                      <IoBedOutline className="themecolor" />
                      <p className="text-gray-600">{curElem.beds} Beds</p>
                    </p>
                    <p className="flex justify-center items-center gap-1 text-sm font-semibold">
                      <MdOutlineBathroom className="themecolor" />
                      <p className="text-gray-600">
                        {curElem.bathrooms} Bathrooms
                      </p>
                    </p>
                    <p className="flex justify-center items-center gap-1 text-sm font-semibold">
                      <CgSize className="themecolor" />
                      <p className="text-gray-600">
                        {curElem.size} m<sup>2</sup>
                      </p>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="lg:hidden md:hidden">
            <Slider {...settings}>
              {data.map((curElem, index) => (
                <div
                  key={index}
                  className="rounded overflow-hidden bg-gray-100 shadow-md my-2 md:w-96"
                >
                  <img src={curElem.img} alt="" className="object-cover w-96" />
                  <div className="mx-2 my-2">
                    <div className="flex justify-between items-center">
                      <p>
                        <span className="themecolor font-bold text-lg">
                          ${curElem.rent}
                        </span>
                        <span className="text-sm text-gray-700">/month</span>
                      </p>
                      <div className="border-2 border-slate-300 rounded-full p-1 ">
                        <MdFavoriteBorder className="themecolor font-bold text-xl" />
                      </div>
                    </div>
                    <div>
                      <h1 className="font-bold text-blue-950 text-2xl">
                        {curElem.title}
                      </h1>
                    </div>
                    <p className="text-sm opacity-90">{curElem.location}</p>

                    <div className="flex justify-evenly items-center py-3 mt-5">
                      <p className="flex justify-center items-center gap-1 text-sm font-semibold">
                        <IoBedOutline className="themecolor" />
                        <p className="text-gray-600">{curElem.beds} Beds</p>
                      </p>
                      <p className="flex justify-center items-center gap-1 text-sm font-semibold">
                        <MdOutlineBathroom className="themecolor" />
                        <p className="text-gray-600">
                          {curElem.bathrooms} Bathrooms
                        </p>
                      </p>
                      <p className="flex justify-center items-center gap-1 text-sm font-semibold">
                        <CgSize className="themecolor" />
                        <p className="text-gray-600">
                          {curElem.size} m<sup>2</sup>
                        </p>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className="flex justify-center items-center mt-8">
            <button className="btn">Browse more properties</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyListing;
