import laga from '../../images/laga.png'
import local from '../../images/local.png'
import cevap from '../../images/cevap.png'


export default function Projects() {

  return (
    <div id="projects" className="bg-blen">





      <span className="pb-14 pt-4 flex justify-center text-5xl text-rose-700">PROJECTS</span>

      <div className="bg-blen flex justify-center">
        <div className="grid lg:grid-cols-2 m-auto p-4 text-slate-50">
          {/* laga project */}
          {/* local store */}
          <img src={laga} alt="life after ga" className="mx-auto h-64 lg:h-max" />
          <div className="mt-8 lg:mt-16 xl:mt-24 flex items-center lg:items-start flex-col px-24 lg:px-0 md:px-14 lg:pr-36">
            <span className="text-4xl pb-1 text-slate-50">Life After General Assembly<br /></span>
            <span className="text-slate-400 text-lg pb-6">Reactjs, MongoDB, Netlify, TailwindCSS, Heroku, HTML, CSS</span>
            <span className="text-slate-50 grid-item">
              Full stack application, that allows users to create, review, update and edit reviews and resource links for educational purposes. Created to help students communcaite and categorize resources to assist with software engineering jobs.
            </span>
            <br />
            <a className="mb-14 rounded-md hover:bg-rose-900 p-2 w-36 lg:mt-8 lg:w-36 bg-rose-700 border-2 border-rose-700 flex justify-center" href="https://silly-kowalevski-1591fc.netlify.app/" target="_blank" rel="noreferrer">VISIT SITE</a>
          </div>

          {/* local store */}

          <img src={local} alt="life after ga" className="mx-auto h-64 lg:h-max" />
          <div className="mt-8 lg:mt-16 xl:mt-24 flex items-center lg:items-start flex-col px-24 lg:px-0 md:px-14 lg:pr-36">
            <span className="text-4xl pb-1 text-slate-50">Supporting Local<br /></span>
            <span className="text-slate-400 text-lg pb-6">Netlify, MongoDB, MongoDB, Express, TailwindCSS </span>
            <span className="text-slate-50 flex items-center mx-auto">
              Full Stack that allows users to explore the local area with suggestions and information on the DMV.<br />
              Used to find all the favorite spots in the DMV for the locals and tourists alike.
            </span>
            <br />
            <a className="mb-14 rounded-md hover:bg-rose-900 p-2 w-36 lg:mt-8 lg:w-36 bg-rose-700 border-2 border-rose-700 flex justify-center" href="https://silly-kowalevski-1591fc.netlify.app/" target="_blank" rel="noreferrer">VISIT SITE</a>
          </div>
          {/* Cevap */}
          {/* local store */}
          <img src={cevap} alt="life after ga" className="mx-auto h-64 lg:h-max" />
          <div className="mt-8 lg:mt-16 xl:mt-24 flex items-center lg:items-start flex-col px-24 lg:px-0 md:px-14 lg:pr-36">
            <span className="text-4xl pb-1 text-slate-50">Cevap Game Finder<br /></span>
            <span className="text-slate-400 text-lg pb-6">JavaScript, HTML5, CSS, Github, Api</span>
            <span>
              Front-End app that helps users find computer and video game information. Full game API used for all your gaming favorites.
            </span>
            <br />
            <a className="mb-14 rounded-md hover:bg-rose-900 p-2 w-36 lg:mt-8 lg:w-36 bg-rose-700 border-2 border-rose-700 flex justify-center" href="https://silly-kowalevski-1591fc.netlify.app/" target="_blank" rel="noreferrer">VISIT SITE</a>
          </div>


        </div>
      </div >
    </div>
  )
}
