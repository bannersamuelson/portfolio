import laga from '../../images/laga.png'

export default function Projects() {

  return (
    <div id="projects" className="grid grid-cols-1 mx-auto justify-center bg-blen">
      <div className="text-4xl text-slate-50">Projects</div>
      <div className="p-4 text-slate-50">
        <img src={laga} alt="life after ga" className="h-96" />
        Life After General Assembly<br />
        Full stack application, that allows users to create, review, update and edit reviews and resource links for educational purposes. Created to help students communcaite and categorize resources to assist with software engineering jobs.
        <br />
        <br />Technology used: Reactjs, MongoDB, Netlify, TailwindCSS, Heroku, HTML, CSS
        <br /><a href="https://silly-kowalevski-1591fc.netlify.app/" target="_blank" rel="noreferrer">Deployed Site</a>


      </div>
    </div >
  )
}
