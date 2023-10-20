import React from 'react';
import Image from 'next/image';

const HeroSection = () => {


  return (
    <div className="  bg-[#000] w-full h-[1024px]   rounded-tl-[0px] rounded-tr-[0px] rounded-bl-[100px] rounded-br-[0px] flex items-center">
      <div className="hr-content w-full md:flex container mx-auto">
        <div className="left-content w-[700px]">
          <h1 className="text-[70px] font-[700] text-[#FFF] leading-normal">
            Reach your - <br /> audience & convert bg your leads{" "}
          </h1>
          <p className=" text-[25px] text-[#FFF] font-[400] mt-[48px]">
            Get your customers with SEO, rank your business with <br />
            email marketing, build sales leads
          </p>
          <div className="button flex gap-[44px] items-center mt-[40px]">
            <button className=" bg-[#7CEDA1] font-[Montserrat] text-[20px] font-[700]  px-[19px] py-[10px] rounded-[10px] text-black capitalize">
              get start
            </button>
            <button className=" border font-[Montserrat] text-[20px] font-[700]  px-[19px] py-[10px] rounded-[10px] text-white flex gap-3 justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="17"
                viewBox="0 0 13 17"
                fill="none"
              >
                <path
                  d="M12.3155 7.12736L2.10095 0.218067C1.27102 -0.343043 0 0.201467 0 1.5893V15.4046C0 16.6496 1.18106 17.4 2.10095 16.7758L12.3155 9.86983C13.2267 9.25559 13.2296 7.74159 12.3155 7.12736Z"
                  fill="white"
                />
              </svg>{" "}
              Watch Demo
            </button>
          </div>
        </div>
        <div className="right-content relative  ">
          <div className="border w-[552px] h-[371px]  relative  z-10  right-[-26px] rounded"></div>
          <div className="pt-[30px] z-20  absolute top-0">
            <Image
              src="https://i.ibb.co/fMfw5Kw/Marketing-1.png" // Replace with the actual image path
              alt="Hero image"
              width={578} // Set the desired width
              height={386}
              className=" z-20 rounded "
              // Set the desired height
            />
          </div>
        </div>
      </div>
    </div>
  );
  
};

export default HeroSection;