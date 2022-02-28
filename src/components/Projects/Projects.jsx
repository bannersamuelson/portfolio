import laga from '../../images/laga.png'
import local from '../../images/local.png'
import cevap from '../../images/cevap.png'

export default function Projects() {

  return (
    <div id="projects" className="grid justify-center bg-blen">
      <span className="pb-14 pt-4 flex justify-center text-5xl text-rose-700">PROJECTS</span>

      <div className="grid grid-cols-1 lg:grid-cols-2 p-4 text-slate-50">
        {/* laga project */}
        <div>
          <img src={laga} alt="life after ga" className="mx-auto h-64 lg:h-max" />
        </div>
        <div className="md:mt-14 justify-center align-center flex flex-col pr-36">
          <span className="text-4xl pb-1 text-slate-50">Life After General Assembly<br /></span>
          <span className="text-slate-400 text-lg pb-6">Reactjs, MongoDB, Netlify, TailwindCSS, Heroku, HTML, CSS</span>
          <span className=" text-slate-50">
            Full stack application, that allows users to create, review, update and edit reviews and resource links for educational purposes. Created to help students communcaite and categorize resources to assist with software engineering jobs.
          </span>
          <br />
          <a className="rounded-md hover:bg-rose-700 p-2 w-14 lg:mt-8 lg:w-36 bg-transparent border-2 border-rose-700 flex justify-center" href="https://silly-kowalevski-1591fc.netlify.app/" target="_blank" rel="noreferrer">VISIT SITE</a>
        </div>

        {/* local store */}
        <div>
          <img src={local} alt="life after ga" className="mx-auto h-64 lg:h-max" />
        </div>
        <div className="md:mt-14 justify-center align-center flex flex-col pr-36">
          <span className="text-4xl pb-1 text-slate-50">Supporting Local<br /></span>
          <span className="text-slate-400 text-lg pb-6">Reactjs, MongoDB, Netlify, TailwindCSS, Heroku, HTML, CSS</span>
          <span className="text-slate-50">
            Full stack application, that allows users to create, review, update and edit reviews and resource links for educational purposes. Created to help students communcaite and categorize resources to assist with software engineering jobs.
          </span>
          <br />
          <a className="rounded-md hover:bg-rose-700 p-2 w-14 lg:mt-8 lg:w-36 bg-transparent border-2 border-rose-700 flex justify-center" href="https://silly-kowalevski-1591fc.netlify.app/" target="_blank" rel="noreferrer">VISIT SITE</a>
        </div>
        {/* Cevap */}
        <div>
          <img src={cevap} alt="life after ga" className="mx-auto h-64 lg:h-max" />
        </div>
        <div className="md:mt-14 justify-center align-center flex flex-col pr-36">
          <span className="text-4xl pb-1 text-slate-50">CEVAP Game Finder<br /></span>
          <span className="text-slate-400 text-lg pb-6">Reactjs, MongoDB, Netlify, TailwindCSS, Heroku, HTML, CSS</span>
          <span className="text-slate-50">
            Full stack application, that allows users to create, review, update and edit reviews and resource links for educational purposes. Created to help students communcaite and categorize resources to assist with software engineering jobs.
          </span>
          <br />
          <a className="rounded-md hover:bg-rose-700 p-2 w-14 lg:mt-8 lg:w-36 bg-transparent border-2 border-rose-700 flex justify-center" href="https://silly-kowalevski-1591fc.netlify.app/" target="_blank" rel="noreferrer">VISIT SITE</a>
        </div>


      </div>
    </div >
  )
}
