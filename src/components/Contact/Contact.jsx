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
    <div className="z-0" id="contact">

      <div className="flex items-top justify-center min-h-screen bg-blen sm:items-center sm:pt-0">
        <div className="w-10/12 md:w-7/12 lg:w-6/12 max-w-6xl mx-auto sm:px-6 lg:px-8">
          <div className="mt-8 overflow-hidden">
            <div className="grid grid-cols-1">
              <div className="rounded-2xl p-14 mb-14 bg-slate-900">
                <h1 className="text-4xl sm:text-4xl text-gray-800 dark:text-white font-extrabold tracking-tight">
                  Let's work together!
                </h1>

                <div className="flex items-center mt-8 text-gray-600 dark:text-gray-400">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div className="ml-4 text-md tracking-wide font-semibold w-40">
                    Washington, DC Metro-Area
                  </div>
                </div>

                <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>

                  <div className="ml-4 hover:text-slate-50 text-md tracking-wide font-semibold">
                    <a href="mailto:bannersamuelson@gmail.com">bannersamuelson@gmail.com</a>
                  </div>
                </div>


                <form
                  onSubmit={onSubmit}
                  className="pt-14 justify-center items-center h-screen bg-slate-900">
                  <div className="py-3">
                    <input
                      type='text'
                      name='from_name'
                      placeholder='Full name'
                      value={toSend.from_name}
                      onChange={handleChange}
                      className="focus:placeholder-transparent block appearance-none bg-slate-700 placeholder-slate-400 rounded-md w-full py-3 px-4 text-slate-50 leading-5 focus:outline-none" />
                  </div>

                  <div className="py-3">
                    <input
                      type='text'
                      name='reply_to'
                      placeholder='Your email'
                      value={toSend.reply_to}
                      onChange={handleChange}
                      className="focus:placeholder-transparent block appearance-none bg-slate-700 placeholder-slate-400 rounded-md w-full py-3 px-4 text-slate-50 leading-5 focus:outline-none" />
                  </div>

                  <div className="py-3">

                    <textarea
                      type='text'
                      name='message'
                      placeholder='Message'
                      value={toSend.message}
                      onChange={handleChange}
                      className="bg-slate-700 resize-none  block appearance-none placeholder-slate-400 placeholder-opacity-100 rounded-md w-full py-3 px-4 text-slate-50 leading-5 h-56 focus:outline-none"></textarea>
                  </div>
                  <div className="p-3 pt-4">
                    <button
                      type="submit"
                      className="resize-none flex justify-center bg-rose-700
                       hover:bg-rose-800 text-white font-bold py-2 px-4 rounded text-lg">
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
