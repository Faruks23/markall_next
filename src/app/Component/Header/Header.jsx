import Link from 'next/link';
import React from 'react';

const Header = () => {

  return (
    <>
      <div className="navbar bg-[#000000] md:px-[41px] md:py-[15px]  sticky top-0 z-50 text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className=" lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>

            {/* mobile menu */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#000000] hover:text-white rounded-box w-52 h-[300px]"
            >
              <li>
                <Link href="/">Services</Link>
              </li>
              <li>
                <Link href="/">Pricing</Link>
              </li>
              <li>
                <Link href="/">About Us</Link>
              </li>
            </ul>
          </div>

          {/* desktop menu */}
          <a className="normal-case text-xl text-white">
            MARKALL
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 hover:text-white">
            <li>
              <Link href="/">Services</Link>
            </li>
            <li>
              <Link href="/">Pricing</Link>
            </li>
            <li>
              <Link href="/">About Us</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className=" bg-[#7CEDA1] font-[Montserrat] text-[20px] font-[700]  px-[19px] py-[10px] rounded-[10px] text-black">
            Get Start
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;