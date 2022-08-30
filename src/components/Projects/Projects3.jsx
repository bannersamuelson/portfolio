import React from 'react'
import github from '../../images/github.png'
import openArrow from '../../images/open_arrow.png'

export default function Projects() {

  return (
    <div class="grid grid-cols-1 justify-center p-8 m-0 bg-gradient-to-r from-black to-grey">
      <div class="w-96 rounded p-8 bg-red-500 border-2 border-yellow">
        <div class="flex pb-6 flex-row-reverse items-center justify-between">
          <div class="h-8 w-8 flex mr-4">
            <img src={github} alt="github" />
            <img src={openArrow} alt="go to external site" className="mr-4" />
          </div>
          <div class="flex">
            <a class="inline-block mr-4" href="#">
              <img class="rounded-full max-w-none w-12 h-12" src="https://randomuser.me/api/portraits/men/35.jpg" />
            </a>
            <div class="flex flex-col">

            </div>
          </div>
        </div>
        <h2 class="text-3xl font-extrabold font-italic dark:text-white">
          Life After General Assembly
        </h2>
        <div class="py-4">
          <div class="flex justify-between gap-1 mb-1">


          </div>
        </div>
        <p class="dark:text-slate-200">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>

  )
}
