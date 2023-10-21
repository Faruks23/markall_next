import React from 'react';

const Review = () => {
  return (
    <div className="mt-[82px] bg-[#FFFBEE] md:pl-[37px] pt-[50px] px-3 md:px-0">
      <div className=" md:flex  justify-between ">
        <div className="">
          <h3 className="md:text-[25px] text-[22px]  font-[500] text-[#000]">
            OUR HAPPY CUSTOMERS
          </h3>
          <h1 className="md:text-[50px] font-[700] text-[#000] leading-normal text-[35px]">
            What our customers <br className=' hidden md:flex' /> say about us
          </h1>
          <hr className="md:w-[553px]   text-[#000]" />
        </div>
        <div className=" relative ">
          <div className="md:pt-[200px] ml-[-60px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="42"
              viewBox="0 0 50 42"
              fill="none"
            >
              <path
                d="M45.3125 21.1399H37.5V15.283C37.5 12.0526 40.3027 9.42611 43.75 9.42611H44.5312C45.8301 9.42611 46.875 8.44691 46.875 7.22977V2.83709C46.875 1.61995 45.8301 0.640747 44.5312 0.640747H43.75C35.1172 0.640747 28.125 7.19316 28.125 15.283V37.2464C28.125 39.6716 30.2246 41.6391 32.8125 41.6391H45.3125C47.9004 41.6391 50 39.6716 50 37.2464V25.5326C50 23.1075 47.9004 21.1399 45.3125 21.1399ZM17.1875 21.1399H9.375V15.283C9.375 12.0526 12.1777 9.42611 15.625 9.42611H16.4062C17.7051 9.42611 18.75 8.44691 18.75 7.22977V2.83709C18.75 1.61995 17.7051 0.640747 16.4062 0.640747H15.625C6.99219 0.640747 0 7.19316 0 15.283V37.2464C0 39.6716 2.09961 41.6391 4.6875 41.6391H17.1875C19.7754 41.6391 21.875 39.6716 21.875 37.2464V25.5326C21.875 23.1075 19.7754 21.1399 17.1875 21.1399Z"
                fill="#32584A"
                fillOpacity="0.35"
              />
            </svg>
          </div>
          <p className="md:w-[599px] text-[25px] font-[500]">
            Lorem ipsum dolor sit amet consectetur. In praesent ac sit
            scelerisque lacus. Faucibus tincidunt commodo mi.
          </p>
          <h1 className="text-[40px] font-[700] text-[#32584A] mt-[10px]">
            Jane Doe
          </h1>
          <h3 className="text-[#32584AB2] text-[30px] font-[500] pb-[50px]">
            Product Specialist, Lorem Co.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Review;