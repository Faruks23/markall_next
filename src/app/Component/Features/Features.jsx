import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Features = () => {
  return (
    <div className="mt-[59px] container mx-auto">
      <div className=" md:flex  justify-between ">
        <div className=" md:mx-0 mx-3">
          <h3 className="text-[25px] font-[500] text-[#000]">OUR FEATURES</h3>
          <h1 className="md:text-[50px] text-[35px] font-[700] text-[#000] leading-normal">
            Know your audience and boost sales
          </h1>
          <hr className="w-[553px]   text-[#000]" />
        </div>
        <div className=" mx-3 md:mx-0 mt-2 md:mt-0">
          <p className="md:w-[599px] text-[25px] font-[500] md:pt-[248px]">
            Effective emails convey the most significant substance to a client
            at the proper time which is our marketing approaches include
            scheduled emails.
          </p>
        </div>
      </div>

      <div className="md:flex bg-[#F1F1F1] justify-between items-center w-full md:h-[488px] rounded-[20px] md:pl-[48px] md:pr-[42px] mt-[72px] mx-3 md:mx-0 ">
        <div className="left-content">
          <h1 className="text-[35px] font-[700]">
            Save precious time <br className='hidden md:flex' /> with automation
          </h1>
          <p className="md:text-[30px] text-[22px] font-[400] w-[475px] mt-[29px] leading-normal mb-5">
            Lorem ipsum dolor sit amet consectetur. Sed id luctus posuere massa
            leo purus cras commodo. Volutpat massa fusce sit libero ut mollis
            risus.
          </p>
          <div className='flex gap-3 items-center '>
            <Link href="/" className="text-[#000] text-[30px] font-[500] mb-5 md:mb-0  ">
              Learn More{" "}
            </Link>{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="13"
              viewBox="0 0 26 13"
              fill="none"
            >
              <path
                d="M18.2198 4.06867H0.696427C0.311825 4.06867 0 4.3805 0 4.7651V8.01509C0 8.39969 0.311825 8.71152 0.696427 8.71152H18.2198V11.3846C18.2198 12.6255 19.72 13.2469 20.5975 12.3695L25.592 7.37502C26.136 6.83105 26.136 5.94914 25.592 5.40523L20.5975 0.410743C19.7201 -0.466697 18.2198 0.154749 18.2198 1.39567V4.06867Z"
                fill="black"
              />
            </svg>
          </div>
        </div>

        <div className="right-content">
          <Image
            src="https://i.ibb.co/MSVR5c6/Automation-1.png"
            width={528}
            height={358}
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Features;