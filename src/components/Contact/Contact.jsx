import React from 'react'

export default function Contact() {



  return (
    <div className="z-2" id="contact">

      <div className="flex justify-center bg-cover sm:items-center sm:pt-0 pb-44">
        <div className="w-11/12 max-w-6xl md:px-24 xl:pr-24">
          <div className="mt-8 overflow-hidden">
            <div className="grid grid-cols-1">

              <div className="rounded-2xl p-14 md:pt-4 mb-14 bg-black">

                <h1 className="text-4xl sm:text-4xl text-banner font-extrabold tracking-tight text-center">
                  Get in touch
                </h1>
                <div className="text-zinc-400 pt-8  text-center justify-center">
                  <a className="hover:text-zinc-50" target="_blank" href="mailto:bannersamuelson@gmail.com" rel="noreferrer">Bannersamuelson@gmail.com</a>

                  <br />
                  Alexandria, VA
                  USA

                </div>


              </div>
            </div>
          </div>
        </div>
      </div >
    </div >
  )
}
