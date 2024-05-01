import React from 'react'

export default function Contact() {



  return (
    <div className="z-2" id="contact">

      <div className="flex justify-center sm:items-center sm:pt-0 pb-44">
        <div className="w-11/12 max-w-6xl md:px-24 xl:pr-24">
          <div className="mt-8 overflow-hidden">
            <div className="grid grid-cols-1">

              <div className="rounded-2xl p-8 md:pt-4 mb-14 bg-gray-200">

                <h1 className="pt-4 text-4xl sm:text-4xl text-banner font-extrabold tracking-tight text-center">
                  Get in touch
                </h1>
                <div className="pt-8  text-center justify-center">
                  <a className="hover:text-zinc-500" target="_blank" href="mailto:bannersamuelson@gmail.com" rel="noreferrer">Bannersamuelson@gmail.com</a>

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
