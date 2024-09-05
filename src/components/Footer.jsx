import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";

const Footer = () => {
  return (
    <>
      <div className="overflow-x-hidden">
        <div className="mt-10 px-[5%] pb-8 lg:grid lg:grid-cols-4 lg:justify-center lg:justify-items-center ">
          <div className="flex justify-start items-center  lg:w-full">
            <img src="/images/Frame.png" alt="" />
            <h1 className="text-2xl font-bold text-blue-950">Estatery</h1>
          </div>
          <div className="grid grid-cols-2 justify-center justify-items-start mt-10 gap-3 lg:grid lg:grid-cols-3 lg:col-span-3 lg:w-full">
            <div>
              <h1 className="font-bold text-sm">SELL A HOME</h1>
              <ul className="text-sm leading-7">
                <li>Request an offer</li>
                <li>Pricing</li>
                <li>Reviews</li>
                <li>Stories</li>
              </ul>
            </div>
            <div>
              <h1 className="font-bold text-sm">TERMS & PRIVACY</h1>
              <ul className="text-sm leading-7">
                <li>Trust & Safety</li>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div>
              <h1 className="font-bold text-sm">BUY A HOME</h1>
              <ul className="text-sm leading-7">
                <li>Buy</li>
                <li>Finance</li>
              </ul>
            </div>
            <div>
              <h1 className="font-bold text-sm">ABOUT</h1>
              <ul className="text-sm leading-7">
                <li>Company</li>
                <li>How it works</li>
                <li>Contact</li>
                <li>Investors</li>
              </ul>
            </div>
            <div>
              <h1 className="font-bold text-sm">BUY, RENT AND SELL</h1>
              <ul className="text-sm leading-7">
                <li>Buy & sell properties</li>
                <li>Rent home</li>
                <li>Builder trade-up</li>
              </ul>
            </div>
            <div>
              <h1 className="font-bold text-sm">RESOURCES</h1>
              <ul className="text-sm leading-7">
                <li>Blog</li>
                <li>Guides</li>
                <li>FAQ</li>
                <li>Help Center</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t-2 pt-6 lg:grid lg:grid-cols-2 lg:justify-center lg:justify-items-center lg:items-center">
          <h1 className="font-bold text-center text-blue-950 text-lg">
            ©2021 Estatery. All rights reserved
          </h1>
          <div>
            <ul className="flex justify-center items-center gap-9 text-gray-500 text-4xl py-8">
              <li>
                <TiSocialFacebook />
              </li>
              <li>
                <TiSocialInstagram />
              </li>
              <li>
                <TiSocialTwitter />
              </li>
              <li>
                <TiSocialLinkedin />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
