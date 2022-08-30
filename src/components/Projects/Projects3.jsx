import React from 'react'
import github from '../../images/github.png'
import openArrow from '../../images/open_arrow.png'

export default function Projects() {

  return (
    <div class="grid grid-cols-1 
    lg:grid-cols-2 xl:gird-cols-3
    p-8
    bg-gradient-to-r from-black to-grey
    justify-items-center">

      {/* first card */}
      <div class="w-96 h-96 py-8 rounded p-8 bg-red-500 border-2 border-yellow">
        <div class="flex pb-6 flex-row-reverse  ">
          <div class="h-8 w-8 flex mr-4">
            <img src={github} alt="github" />
            <img src={openArrow} alt="go to external site" className="mr-4" />
          </div>
          <div class="flex">
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

      {/* second card */}
      <div class="w-96 h-96 py-8 rounded p-8 bg-red-500 border-2 border-yellow">
        <div class="flex pb-6 flex-row-reverse  ">
          <div class="h-8 w-8 flex mr-4">
            <img src={github} alt="github" />
            <img src={openArrow} alt="go to external site" className="mr-4" />
          </div>
          <div class="flex">
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
