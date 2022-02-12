import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Transition } from "@headlessui/react";
import icon from '../../images/icon.png'

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-gray-300 transition ease transform duration-300`;

  return (
    <div>
      <nav className="bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-8 w-8"
                  src={icon}
                  alt="temp"
                />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a href="#" className=" hover:bg-gray-700 text-purple-400 px-3 py-2 rounded-md text-sm font-medium">Home</a>
                  <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</a>
                  <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>


                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="flex flex-col h-12 w-12 border-2 border-transparent rounded justify-center items-center group border-opacity-100 hover:border-white hover:border-opacity-100 hover:text-white" aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <div
                  className={`${genericHamburgerLine} ${isOpen
                    ? "rotate-45 translate-y-3 opacity-75 group-hover:opacity-100"
                    : "opacity-50 group-hover:opacity-100"
                    }`}
                />
                <div
                  className={`${genericHamburgerLine} ${isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
                    }`}
                />
                <div
                  className={`${genericHamburgerLine} ${isOpen
                    ? "-rotate-45 -translate-y-3 opacity-75 group-hover:opacity-100"
                    : "opacity-50 group-hover:opacity-100"
                    }`}
                />
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="#"
                  className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Dashboard
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Team
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Projects
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Calendar
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Reports
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Nav;