import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { HashLink } from 'react-router-hash-link';
import Logo from '../../images/Logo.png'
import mail from '../../images/mail.png'


function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-1 w-9 rounded-xl my-1 bg-black transition ease transform duration-300`;


  return (
    <div className="z-10">
      <nav>
        <div className="px-4 pt-4 flex justify-between over:opacity-100 ">
          <div className="flex items-center">
            <HashLink to="/#home" className="ml-1 w-bb text-4xl logo fixed"><img src={Logo} alt="logo" /></HashLink>
          </div>
          <div className="px-4 py-1 pt-1 hidden md:block align-center">
            <div className="align-center items-center ml-10 text-lg text-slate-50 space-x-4 flex">
              {/* <HashLink to="/#home" className="text-black hover:text-banner focus:text-slate-90 m-1 px-2 py-1 rounded-md font-medium">Home</HashLink> */}
              <HashLink to="/#projects" className="text-black hover:text-banner m-1 px-2 py-1 rounded-md font-medium">Work</HashLink>
              <HashLink to="/#about" className="text-black hover:text-banner m-1 px-2 py-1 rounded-md font-medium">About</HashLink>
              <HashLink to="/#contact" className="text-black hover:text-banner  m-1 px-2 py-1 rounded-md font-medium">Contact</HashLink>
            </div>
          </div>



          <div className="px-1 pt-1 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="flex flex-col h-12 w-12 border-2 border-transparent rounded justify-center items-center group " aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <div
                className={`${genericHamburgerLine} ${isOpen
                  ? "rotate-45 translate-y-3 opacity-75 group-hover:opacity-100"
                  : "group-hover:opacity-100"
                  }`}
              />
              <div
                className={`${genericHamburgerLine} ${isOpen ? "opacity-0" : " group-hover:opacity-100"
                  }`}
              />
              <div
                className={`${genericHamburgerLine} ${isOpen
                  ? "-rotate-45 -translate-y-3 opacity-75 group-hover:opacity-100"
                  : "group-hover:opacity-100"
                  }`}
              />
            </button>
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
              <div className="bg-white mt-4 p-3 space-y-1">
                <div id="icons" className="py-2 flex">
                  <div className="w-8 h-8 pl-2 px-1 width-bb hover:cursor-pointer text-black opacity-75 hover:opacity-100">
                    <a target="_blank" href="mailto:bannersamuelson@gmail.com" rel="noreferrer">
                      <img src={mail} alt="email to icon" />
                    </a>
                  </div>
                  <div className="pl-2 px-1 hover:cursor-pointer text-black opacity-75 hover:opacity-100">
                    <a target="_blank" href="https://www.linkedin.com/in/banner-samuelson/" rel="noreferrer">
                      <svg
                        className="w-5 h-5 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512">
                        <path
                          d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                        ></path>
                      </svg>
                    </a>
                  </div>

                  <div className="px-1 hover:cursor-pointer text-black opacity-75 hover:opacity-100">
                    <a href="https://github.com/bannersamuelson/" target="_blank" rel="noreferrer">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                    </a>
                  </div>
                </div>
                <HashLink
                  to="/#projects"
                  className="text-black rounded-md hover:bg-neutral-100 hover:text-black block px-3 py-2 text-base font-medium"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Work
                </HashLink>

                <HashLink
                  to="/#about"
                  className="text-black rounded-md hover:bg-neutral-100 hover:text-black block px-3 py-2 text-base font-medium"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  About
                </HashLink>

                <HashLink
                  to="/#contact"
                  className="text-black rounded-md hover:bg-neutral-100 hover:text-black block px-3 py-2 text-base font-medium"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Contact
                </HashLink>


              </div>
            </div>
          )}
        </Transition>
      </nav >
    </div >
  );
}

export default Nav;