import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

const Header = () => {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <div className="bg-slate-50  py-4 px-2 lg:px-[10%] sticky top-0 z-10  ">
        <div className="flex justify-between items-center relative">
          <div className="flex items-center justify-start mr-2">
            <img src="/images/Frame.png" alt="" />
            <h1 className=" font-bold text-xl text-blue-950 flex items-center justify-start md:text-2xl lg:text-3xl">
              Estatery
            </h1>
          </div>
          <div className="hidden lg:block">
            <ul className="flex justify-center items-center gap-4 font-semibold  text-blue-950 md:text-lg ">
              <li>Rent</li>
              <li>Buy</li>
              <li>Sell</li>
            </ul>
          </div>
          <div className="hidden lg:block">
            <button className="border-gray-300 border-2 px-2 py-1 font-semibold rounded-md">
              Login
            </button>
            <button className="btn ml-2">Register</button>
          </div>

          <div className="lg:hidden" onClick={() => setMenu(!menu)}>
            {menu == false ? (
              <GiHamburgerMenu className="font-bold text-2xl flex justify-center items-center text-blue-950 lg:hidden" />
            ) : (
              <ImCross className="font-bold text-lg flex justify-center items-center text-blue-950 lg:hidden" />
            )}
          </div>

          {menu && (
            <div className="absolute right-0  top-12 bg-slate-200 rounded-md w-full p-4 transition-all will-change-transform duration-100 ease-in lg:hidden">
              <div>
                <ul className="flex flex-col justify-center items-center gap-4 font-semibold  text-blue-950 text-xl ">
                  <li>Rent</li>
                  <li>Buy</li>
                  <li>Sell</li>
                </ul>
              </div>
              <div className="flex flex-col justify-center items-center gap-3 mt-2 text-xl">
                <button className="border-gray-300 border-2 px-2 py-1 w-full font-semibold rounded-md">
                  Login
                </button>
                <button className="btn ml-2 w-full">Register</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
