import React from 'react'
import github from '../../images/github.png'
import openArrow from '../../images/open_arrow.png'
import folder from '../../images/folder.png'
import figma from '../../images/figma.png'
import quill from '../../images/Quill.png'

// import { Link } from 'react-router-dom';


export default function Projects() {

  return (
    <div className="bg-blen">
      {/* <Link className="text-banner" to={'/plumbling'}>test
      </Link> */}
      <span className="pb-14 pt-72 bg-white flex justify-center text-5xl text-banner">WORK</span>


      <div class=" 
      pt-24
      pb-44
      px-14
      md:px-8
      xl:px-24
flex flex-wrap
justify-center
    bg-white
    justify-items-center gap-2.5" id="projects">
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src={quill} alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Quill.com</div>
    <p class="text-gray-700 text-base">
      Worked on rebranding and recreating webapges for the new Quill.com which launched in 2021.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">JavaScript</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">React</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">UX UI</span>
  </div>
</div>

        {/* coming soon card */}
        <div class="w-wide h-tall py-8 rounded-lg p-8 bg-blen">
          <div class="flex justify-between pb-6">
            <img src={folder} alt="folder icon" className=" space-between h-11 w-11" />
            <section class="flex">
              <img src={figma} alt="github" className="mx-4 h-6 w-6" />
            </section>
          </div>
          <h2 class="text-xl pt-8 font-extrabold font-italic text-banner">
            Plumbing Apps
          </h2>
          <p class="text-banner py-4 text-md">
            Application wireframe to help users schedule and track maintenace visits | complete with case study
          </p>
          <p
            className="text-black text-sm pb-6">Coming soon . . .
          </p>
        </div>
        {/* first card */}
        <div class="w-wide h-tall py-8 rounded-lg p-8 bg-blen">
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
          <h2 class="text-xl pt-8 font-extrabold font-italic text-banner">
            Life After General Assembly
          </h2>
          <p class="text-banner py-4 text-md">
            Full stack application, that allows users to create resources for educational purposes.
          </p>
          <p
            className="text-black text-sm pb-6">Reactjs, MongoDB, Netlify, TailwindCSS, Heroku, HTML, CSS
          </p>
        </div>
        {/* second card */}
        <div class="w-wide h-tall py-8 rounded-lg p-8 bg-blen">
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
          <h2 class="text-xl pt-8 font-extrabold font-italic text-banner">
            Supporting Local </h2>
          <p class="text-banner py-4">
            Full Stack that allows users to explore the local area with suggestions and information on the DMV.
          </p>
          <p
            className="text-black text-sm pb-6">Netlify, MongoDB, MongoDB, Express, TailwindCSS
          </p>
        </div>
        {/* third card */}
        <div class="w-wide h-tall py-8 rounded-lg p-8 bg-blen">
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
          <h2 class="text-xl pt-8 font-extrabold font-italic text-banner">
            Cevap Game Finder
          </h2>
          <p class="text-banner py-4">
            Front-End app that helps users find computer and video game information. Full game API used for all your gaming favorites.
          </p>
          <p
            className="text-black text-sm pb-6">JavaScript, HTML5, CSS, Github, Api
          </p>

        </div>

      </div>
    </div>
  )
}
