import React from 'react'
import github from '../../images/github.png'
import openArrow from '../../images/open_arrow.png'
import folder from '../../images/folder.png'

export default function Projects() {

  return (
    <div className="bg-gradient-to-r from-black to-grey">

      <span className="pb-14 pt-44 bg-inherit flex justify-center text-5xl text-yellow">PROJECTS</span>

      <div class="grid grid-cols-1 md:grid-cols-2
    xl:grid-cols-3
    p-4
    bg-gradient-to-r from-black to-grey
    justify-items-center gap-2.5" id="projects">
        {/* first card */}
        <div class="w-wide h-tall py-8 rounded-lg p-8 bg-zinc-900">
          <div class="flex justify-between ml-6 pb-6">
            <img src={folder} alt="folder icon" className=" space-between h-11 w-11" />
            <section class="flex">
              {/* github link */}
              <a href="https://github.com/bannersamuelson/Life-After-General-Assembly"
                target="_blank" rel="noreferrer">
                <img src={github} alt="github" className="mx-4 h-6 w-6" />
              </a>
              <a href="https://lifeafterga.netlify.app/" target="_blank" rel="noreferrer">
                <img src={openArrow} alt="go to external site" className="h-6 w-6" />
              </a>
            </section>
          </div>
          <h2 class="text-xl pt-8 font-extrabold font-italic dark:text-white">
            Life After General Assembly
          </h2>
          <p class="dark:text-slate-200 py-4 text-md">
            Full stack application, that allows users to create, review, update and edit reviews and resource links for educational purposes.
          </p>
          <p
            className="text-slate-400 text-sm pb-6">Reactjs, MongoDB, Netlify, TailwindCSS, Heroku, HTML, CSS
          </p>
        </div>
        {/* second card */}
        <div class="w-wide h-tall py-8 rounded-lg p-8 bg-zinc-900">
          <div class="flex justify-between ml-6 pb-6">
            <img src={folder} alt="folder icon" className=" space-between h-11 w-11" />
            <section class="flex">
              <a href="https://github.com/bannersamuelson/Local-Store" target="_blank" rel="noferrer">

                <img src={github} alt="github" className="mx-4 h-6 w-6" />
              </a>

              <a href="https://pensive-stonebraker-9e126d.netlify.app/" target="_blank" rel="noreferrer">

                <img src={openArrow} alt="go to external site" className="h-6 w-6" />
              </a>
            </section>
          </div>
          <h2 class="text-xl pt-8 font-extrabold font-italic dark:text-white">
            Supporting Local </h2>
          <p class="dark:text-slate-200 py-4">
            Full Stack that allows users to explore the local area with suggestions and information on the DMV.
          </p>
          <p
            className="text-slate-400 text-sm pb-6">Netlify, MongoDB, MongoDB, Express, TailwindCSS
          </p>
        </div>
        {/* third card */}
        <div class="w-wide h-tall py-8 rounded-lg p-8 bg-zinc-900">
          <div class="flex justify-between ml-6 pb-6">
            <img src={folder} alt="folder icon" className=" space-between h-11 w-11" />
            <section class="flex">
              <a href="https://github.com/bannersamuelson/Cevap-Game-Finder" target="_blank" rel="noreferrer">
                <img src={github} alt="github" className="mx-4 h-6 w-6" />
              </a>

              <a href="https://bannersamuelson.github.io/Cevap-Game-Finder/" target="_blank" rel="noreferrer">
                <img src={openArrow} alt="go to external site" className="h-6 w-6" />
              </a>
            </section>
          </div>
          <h2 class="text-xl pt-8 font-extrabold font-italic dark:text-white">
            Cevap Game Finder
          </h2>
          <p class="dark:text-slate-200 py-4">
            Front-End app that helps users find computer and video game information. Full game API used for all your gaming favorites.
          </p>
          <p
            className="text-slate-400 text-sm pb-6">JavaScript, HTML5, CSS, Github, Api
          </p>

        </div>

      </div>
    </div>
  )
}
