import React from "react";

import BannerDownImg from "../assets/bannerdown.png";
import LogoImg from "../assets/logo.png"
import Container from "./Container";
const NavBanner = () => {
  return (
    <div
      className='w-full bg-[url(/banner.png)] relative bg-cover bg-center'
      >
      <Container>
        <div className="h-[554px]">
          <nav className="flex justify-between items-center py-6">
            <div className="">
              <img src={LogoImg} alt="" />
            </div>
            <div className="">
              <ul className="flex space-x-9 font-IBP">
                <li className="font-bold text-[18px] text-white hover:text-[#FF9600] capitalize cursor-pointer">Home</li>
                <li className="font-bold text-[18px] text-white hover:text-[#FF9600] capitalize cursor-pointer">About Us</li>
                <li className="font-bold text-[18px] text-white hover:text-[#FF9600] capitalize cursor-pointer">Activities</li>
                <li className="font-bold text-[18px] text-white hover:text-[#FF9600] capitalize cursor-pointer">Latest News</li>
                <li className="font-bold text-[18px] text-white hover:text-[#FF9600] capitalize cursor-pointer">Contact</li>
              </ul>
            </div>
          </nav>
          <div className="items-center">
            <h2 className="font-IBP font-bold text-[72px] text-white px-[220px] mt-[138px] mb-[257px] text-center ">
              Experience The Spirit Of
              Adventure Sports
            </h2>
          </div>
        </div>
      </Container>
      <img
        src={BannerDownImg}
        alt="Wave Shape"
        className="absolute bottom-[-25px] left-0 right-0 w-full"
      />
    </div>
  );
};
export default NavBanner;
