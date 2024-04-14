import React from 'react'
import github from '../../images/github.png'
import openArrow from '../../images/open_arrow.png'
import folder from '../../images/folder.png'
import figma from '../../images/figma.png'
import { Link } from 'react-router-dom';


export default function Projects() {

  return (
    <div className="bg-gradient-to-r from-black to-grey">
      {/* <Link className="text-white" to={'/plumbling'}>test
      </Link> */}
      <span className="pb-14 pt-72 bg-inherit flex justify-center text-5xl text-white">PROJECTS</span>


      <div class=" 
      pt-24
      pb-44
      px-14
      md:px-8
      xl:px-24
flex flex-wrap
justify-center
    bg-gradient-to-r from-black to-grey
    justify-items-center gap-2.5" id="projects">
        {/* coming soon card */}
        <div class="w-wide h-tall py-8 rounded-lg p-8 bg-zinc-900">
          <div class="flex justify-between pb-6">
            <img src={folder} alt="folder icon" className=" space-between h-11 w-11" />
            <section class="flex">
              <img src={figma} alt="github" className="mx-4 h-6 w-6" />
            </section>
          </div>
          <h2 class="text-xl pt-8 font-extrabold font-italic text-white">
            Plumbing Apps
          </h2>
          <p class="text-white py-4 text-md">
            Application wireframe to help users schedule and track maintenace visits | complete with case study
          </p>
          <p
            className="text-slate-400 text-sm pb-6">Coming soon . . .
          </p>
        </div>
        {/* first card */}
        <div class="w-wide h-tall py-8 rounded-lg p-8 bg-zinc-900">
          <div class="flex justify-between pb-6">
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
          <h2 class="text-xl pt-8 font-extrabold font-italic text-white">
            Life After General Assembly
          </h2>
          <p class="text-white py-4 text-md">
            Full stack application, that allows users to create resources for educational purposes.
          </p>
          <p
            className="text-slate-400 text-sm pb-6">Reactjs, MongoDB, Netlify, TailwindCSS, Heroku, HTML, CSS
          </p>
        </div>
        {/* second card */}
        <div class="w-wide h-tall py-8 rounded-lg p-8 bg-zinc-900">
          <div class="flex justify-between pb-6">
            <img src={folder} alt="folder icon" className=" space-between h-11 w-11" />
            <section class="flex">
              <a href="https://github.com/bannersamuelson/Local-Store" target="_blank" rel="noreferrer">

                <img src={github} alt="github" className="mx-4 h-6 w-6" />
              </a>

              <a href="https://pensive-stonebraker-9e126d.netlify.app/" target="_blank" rel="noreferrer">

                <img src={openArrow} alt="go to external site" className="h-6 w-6" />
              </a>
            </section>
          </div>
          <h2 class="text-xl pt-8 font-extrabold font-italic text-white">
            Supporting Local </h2>
          <p class="text-white py-4">
            Full Stack that allows users to explore the local area with suggestions and information on the DMV.
          </p>
          <p
            className="text-slate-400 text-sm pb-6">Netlify, MongoDB, MongoDB, Express, TailwindCSS
          </p>
        </div>
        {/* third card */}
        <div class="w-wide h-tall py-8 rounded-lg p-8 bg-zinc-900">
          <div class="flex justify-between pb-6">
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
          <h2 class="text-xl pt-8 font-extrabold font-italic text-white">
            Cevap Game Finder
          </h2>
          <p class="text-white py-4">
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
