import React from "react";
import {  Outlet } from "react-router";
import { Link } from "react-router-dom";
import MenuApp from "../components/MenuApp";
import { useLayout } from "../hooks/LayoutProvider";

const LayoutApp: React.FC = () => {
  const { isOpen, setIsOpen } = useLayout();
  return (
    <div>
      <nav className="fixed top-0 z-50 w-full shadow-md">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"

                className="inline-flex items-center p-2 text-sm text-white rounded-lg sm:hidden hover:bg-indigo-50 hover:text-gray-700 focus:bg-indigo-50 focus:text-gray-700"
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              <Link to={"/"} className="flex ms-2 md:me-24">
                <img
                  src="/images/avatar.jpg"
                  className="w-10 h-10 rounded-full mr-2"
                  alt="ChisThanh Logo"
                />
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap ">
                  ChisThanh
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <MenuApp />
      <div className="p-4 sm:ml-52">
        <div className="p-4 rounded-lg  mt-14">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default LayoutApp;
