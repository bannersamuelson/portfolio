import { Suspense } from "react";
// import laga from '/laga.png'
import local from '../../images/local.png'
import cevap from '../../images/cevap.png'


export default function Projects() {

  return (
    <div className="bg-gradient-to-r from-black to-grey bg-cover ">
      <div id="projects" className="bg-gradient-to-r from-black to-grey bg-cover">
        <span className="pb-14 pt-14 flex justify-center text-5xl text-white">PROJECTS</span>

        <div className="bg-gradient-to-r from-black to-grey bg-cover flex justify-center">
          <div className="grid lg:grid-cols-2 m-auto p-4 text-white">


            {/* laga project */}
            <Suspense fallback={<div>...Loading</div>}>
              <div>
                <img src="/laga.png" alt="life after ga" className="mx-auto h-64 lg:h-auto" />
              </div>
            </Suspense>
            <div className="flex text-center lg:text-left">
              <div className="mt-8 lg:mt-16 xl:mt-24 flex items-center lg:items-start flex-col px-14 lg:px-0 md:px-14 lg:pr-36">
                <span className="text-4xl pb-1 text-slate-400">Life After General Assembly<br /></span>
                <span className="text-slate-400 text-lg pb-6">Reactjs, MongoDB, Netlify, TailwindCSS, Heroku, HTML, CSS</span>
                <span className="text-slate-50 flex items-center md:mx-24 lg:mx-auto">
                  Full stack application, that allows users to create, review, update and edit reviews and resource links for educational purposes. Created to help students communcaite and categorize resources to assist with software engineering jobs.
                </span>
                <br />
                <a className="text-slate-900 font-bold mb-14 rounded-md hover:bg-yellow2 p-2 w-36 lg:mt-8 lg:w-36 bg-yellow flex justify-center" href="https://silly-kowalevski-1591fc.netlify.app/" target="_blank" rel="noreferrer">VISIT SITE</a>
              </div>
            </div>

            {/* local store */}
            <Suspense fallback={<div>...Loading</div>}>

              <img src={local} alt="life after ga" className="mx-auto h-64 lg:h-auto" />

            </Suspense>

            <div className="text-center lg:text-left mt-8 lg:mt-16 xl:mt-24 flex items-center lg:items-start flex-col px-14 lg:px-0 md:px-14 lg:pr-36">
              <span className="text-4xl pb-1 text-slate-400">Supporting Local<br /></span>
              <span className="text-slate-400 text-lg pb-6">Netlify, MongoDB, MongoDB, Express, TailwindCSS </span>
              <span className="text-slate-50 flex items-center md:mx-24 lg:mx-auto">
                Full Stack that allows users to explore the local area with suggestions and information on the DMV.
                Used to find all the favorite spots in the DMV for the locals and tourists alike.
              </span>
              <br />
              <a className="text-slate-900 mb-14 rounded-md p-2 w-36 lg:mt-8 lg:w-36 bg-yellow flex font-bold justify-center" href="https://pensive-stonebraker-9e126d.netlify.app/" target="_blank" rel="noreferrer">VISIT SITE</a>
            </div>
            {/* Cevap */}
            {/* local store */}
            <img src={cevap} alt="life after ga" className="mx-auto h-64 lg:h-auto" />
            <div className="text-center lg:text-left mt-8 lg:mt-16 xl:mt-24 flex items-center lg:items-start flex-col px-14 lg:px-0 md:px-14 lg:pr-36">
              <span className="text-4xl pb-1 text-slate-400">Cevap Game Finder<br /></span>
              <span className="text-slate-400 text-lg pb-6">JavaScript, HTML5, CSS, Github, Api</span>
              <span className="text-slate-50 flex items-center md:mx-24 lg:mx-auto">
                Front-End app that helps users find computer and video game information. Full game API used for all your gaming favorites.
              </span>
              <br />
              <a className="text-slate-900 mb-14 rounded-md font-bold hover:bg-yellow2 p-2 w-36 lg:mt-8 lg:w-36 bg-yellow flex justify-center" href="https://bannersamuelson.github.io/Cevap-Game-Finder/" target="_blank" rel="noreferrer">VISIT SITE</a>
            </div>


          </div>
        </div >
      </div>

    </div>
  )
}
