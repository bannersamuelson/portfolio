import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { HashLink } from 'react-router-hash-link';
import './Nav.css'

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-gray-300 transition ease transform duration-300`;


  return (
    <div className="z-10">
      <nav>
        <div className="px-4 pt-4 flex justify-between over:opacity-100 ">
          <div className="flex items-center">
            <HashLink to="/#home" className="text-slate-50 ml-2 text-4xl logo border-2 hover:border-rose-700 circle hover:text-rose-700 fixed">B</HashLink>
          </div>

          <div className="px-4 pt-1 hidden md:block align-center">
            <div className="align-center items-center ml-10 text-lg text-slate-50 space-x-4 flex">
              <HashLink to="/#home" className="focus:text-rose-500 hover:text-rose-700 border-2 border-transparent  hover:border-rose-700 m-1 px-2 py-1 rounded-md font-medium">Home</HashLink>
              <HashLink to="/#projects" className="  hover:text-rose-700 border-2 border-transparent focus:text-rose-500 hover:border-rose-700 m-1 px-2 py-1 rounded-md font-medium">Projects</HashLink>
              <HashLink to="/#about" className="  hover:text-rose-700 border-2 border-transparent focus:text-rose-500 hover:border-rose-700 m-1 px-2 py-1 rounded-md font-medium">About</HashLink>
              <HashLink to="/#contact" className="  hover:text-rose-700 border-2 border-transparent focus:text-rose-500 hover:border-rose-700 m-1 px-2 py-1 rounded-md font-medium">Contact</HashLink>
            </div>
          </div>



          <div className="px-4 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="flex flex-col h-12 w-12 border-2 border-transparent rounded justify-center items-center group border-opacity-100 hover:border-white hover:border-opacity-100" aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <div
                className={`${genericHamburgerLine} ${isOpen
                  ? "rotate-45 translate-y-3 opacity-75 group-hover:opacity-100"
                  : "opacity-75 group-hover:opacity-100"
                  }`}
              />
              <div
                className={`${genericHamburgerLine} ${isOpen ? "opacity-0" : "opacity-75 group-hover:opacity-100"
                  }`}
              />
              <div
                className={`${genericHamburgerLine} ${isOpen
                  ? "-rotate-45 -translate-y-3 opacity-75 group-hover:opacity-100"
                  : "opacity-75 group-hover:opacity-100"
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
              <div className="bg-slate-900 mt-4 p-3 space-y-1">
                <div id="icons" className="flex">
                  <div className="pl-2 px-1 hover:cursor-pointer text-slate-50 opacity-75 hover:opacity-100">
                    <a target="_blank" href="hhttps://www.linkedin.com/in/banner-samuelson/" rel="noreferrer">
                      <svg
                        class="w-5 h-5 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512">
                        <path
                          d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                        ></path>
                      </svg>
                    </a>
                  </div>
                  <div className="px-1 hover:cursor-pointer text-slate-50 opacity-75 hover:opacity-100">
                    <a target="_blank" href="https://www.facebook.com/banner.samuelson/" rel="noreferrer">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                    </a>
                  </div>
                  <div className="px-1 hover:cursor-pointer text-slate-50 opacity-75 hover:opacity-100">
                    <a href="https://www.instagram.com/itsbanner/" target="_blank" rel="noreferrer">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                    </a>
                  </div>
                  <div className="px-1 hover:cursor-pointer text-slate-50 opacity-75 hover:opacity-100">
                    <a href="https://github.com/bannersamuelson/" target="_blank" rel="noreferrer">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                    </a>
                  </div>
                </div>
                <HashLink
                  to="/#home"
                  className="text-slate-50 rounded-md  hover:bg-slate-800 hover:text-white block px-3 py-2 text-base font-medium"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Home
                </HashLink>

                <HashLink
                  to="/#projects"
                  className="text-slate-50 rounded-md hover:bg-slate-800 hover:text-white block px-3 py-2 text-base font-medium"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Projects
                </HashLink>

                <HashLink
                  to="/#about"
                  className="text-slate-50 rounded-md hover:bg-slate-800 hover:text-white block px-3 py-2 text-base font-medium"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  About
                </HashLink>

                <HashLink
                  to="/#contact"
                  className="text-slate-50 rounded-md hover:bg-slate-800 hover:text-white block px-3 py-2 text-base font-medium"
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