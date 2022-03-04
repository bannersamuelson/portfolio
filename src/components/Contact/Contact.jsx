import React from 'react'
import { send } from 'emailjs-com';
import { useState } from 'react';

export default function Contact() {

  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: 'Banner',
    message: '',
    reply_to: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_yzv3vun',
      'template_7u6dxso',
      toSend,
      'user_wC4T1nL4gVA5D7nHG5ttx'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };
  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div className="z-2" id="contact">

      <div className="flex justify-center bg-blen sm:items-center sm:pt-0 pb-44">

        <div className="w-11/12 max-w-6xl md:px-24 xl:pr-24">
          <div className="mt-8 overflow-hidden">
            <div className="grid grid-cols-1">

              <div className="rounded-2xl p-14 md:p-0 mb-14 bg-blen">
                <span className="pb-14 pt-4 flex justify-center text-5xl text-rose-700">Contact</span>
                <h1 className="text-4xl sm:text-4xl text-rose-700 dark:text-white font-extrabold tracking-tight">
                  Let's work together!
                </h1>

                <div className="flex items-center mt-8 text-gray-600 dark:text-gray-400">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div className="ml-4 text-md tracking-wide font-semibold w-40">
                    Washington, DC Metro-Area
                  </div>
                </div>

                <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w h-8 text-gray-500">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>

                  <div className="ml-4 hover:text-slate-50 text-md tracking-wide font-semibold">
                    <a href="mailto:bannersamuelson@gmail.com">bannersamuelson@gmail.com</a>
                  </div>
                </div>
                <div id="icons" className="flex pt-4">
                  <div className="pl-2 px-1 hover:cursor-pointer text-slate-50 opacity-75 hover:opacity-100">
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


                <form
                  onSubmit={onSubmit}
                  className="pt-14 justify-center items-center bg-blen">
                  <div className="py-3">
                    <input
                      type='text'
                      name='from_name'
                      placeholder='Full name'
                      value={toSend.from_name}
                      onChange={handleChange}
                      className="focus:placeholder-transparent block appearance-none bg-zinc-900 placeholder-slate-400 rounded-md w-full py-3 px-4 text-slate-50 leading-5 focus:outline-none" />
                  </div>

                  <div className="py-3">
                    <input
                      type='text'
                      name='reply_to'
                      placeholder='Your email'
                      value={toSend.reply_to}
                      onChange={handleChange}
                      className="focus:placeholder-transparent block appearance-none bg-zinc-900 placeholder-slate-400 rounded-md w-full py-3 px-4 text-slate-50 leading-5 focus:outline-none" />
                  </div>

                  <div className="py-3">

                    <textarea
                      type='text'
                      name='message'
                      placeholder='Message'
                      value={toSend.message}
                      onChange={handleChange}
                      className="bg-zinc-900 resize-none  block appearance-none placeholder-slate-400 placeholder-opacity-100 rounded-md w-full py-3 px-4 text-slate-50 leading-5 h-56 focus:outline-none focus:placeholder-transparent"></textarea>
                  </div>
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="resize-none flex justify-center bg-rose-700 border-2 border-rose-700   hover:bg-rose-900 text-white font-bold py-2 px-4 rounded text-lg">
                      Send email
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div >
    </div >
  )
}
