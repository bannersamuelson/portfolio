import React from 'react'
import { send } from 'emailjs-com';
import { useState } from 'react';


export default function Contact() {

  const [buttonText, setButtonText] = useState("Send Email");
  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: 'Banner',
    message: '',
    reply_to: '',
  });

  const SERVICE_ID = process.env.REACT_APP_SERVICE_ID
  const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID
  const USER_ID = process.env.REACT_APP_USER_ID

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

    setToSend({
      from_name: '',
      to_name: 'Banner',
      message: '',
      reply_to: '',
    })

    setButtonText("Sent!")


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
                <h1 className="text-4xl sm:text-4xl text-rose-700 dark:text-white font-extrabold tracking-tight text-center">
                  Let's work together!
                </h1>
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
                      required
                      className="focus:placeholder-transparent block appearance-none bg-zinc-900 placeholder-slate-400 rounded-md w-full py-3 px-4 text-slate-50 leading-5 focus:outline-none" />
                  </div>

                  <div className="py-3">
                    <input
                      type='text'
                      name='reply_to'
                      placeholder='Your email'
                      value={toSend.reply_to}
                      onChange={handleChange}
                      required
                      className="focus:placeholder-transparent block appearance-none bg-zinc-900 placeholder-slate-400 rounded-md w-full py-3 px-4 text-slate-50 leading-5 focus:outline-none" />
                  </div>

                  <div className="py-3">

                    <textarea
                      type='text'
                      name='message'
                      placeholder='Message'
                      value={toSend.message}
                      onChange={handleChange}
                      required
                      className="bg-zinc-900 resize-none  block appearance-none placeholder-slate-400 placeholder-opacity-100 rounded-md w-full py-3 px-4 text-slate-50 leading-5 h-56 focus:outline-none focus:placeholder-transparent"></textarea>
                  </div>
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="mb-24 resize-none flex justify-center bg-rose-700 border-2 border-rose-700   hover:bg-rose-900 text-white font-bold py-2 px-4 rounded text-lg">
                      {buttonText}
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
