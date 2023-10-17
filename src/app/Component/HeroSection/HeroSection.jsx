import React from 'react';
 import Image  from 'next/image';
const HeroSection = () => {


  return (
    <div className="  bg-[#000] w-full h-[1024px]   rounded-tl-[0px] rounded-tr-[0px] rounded-bl-[100px] rounded-br-[0px]">
      <div className="hr-content bg-white pt-[233px]">
        <div className="left-content">
          <h1>Reach your - audience & convert your leads </h1>
          <p>
            Get your customers with SEO, rank your business with email
            marketing, build sales leads
          </p>
          <div className="button">
            <button>get start</button>
            <button>Services</button>
          </div>
        </div>
        <div className="right-content">
          <Image
            src="https://i.ibb.co/fMfw5Kw/Marketing-1.png" // Replace with the actual image path
            alt="Hero image"
            width={578} // Set the desired width
            height={386} // Set the desired height
          />
        </div>
      </div>
    </div>
  );
  
};

export default HeroSection;