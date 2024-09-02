import React from "react";

const Header = () => {
  return (
    <>
      <div className="bg-slate-50  py-4 px-2 lg:px-[10%]">
        <div className="flex justify-between items-center">
          <div className="flex items-center justify-start mr-2">
            <h1 className=" font-bold text-lg text-sky-500 flex items-center justify-start md:text-2xl lg:text-3xl">
              Estatery
            </h1>
          </div>
          <div>
            <ul className="flex justify-start items-center gap-4 font-semibold text-sm text-sky-500 md:text-lg ">
              <li>Rent</li>
              <li>Buy</li>
              <li>Sell</li>
            </ul>
          </div>
          <div>
            <button className="btn ">Login</button>
            <button className="btn">Register</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
