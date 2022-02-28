import laga from '../../images/laga.png'
import laga2 from '../../images/laga2.png'
import laga3 from '../../images/laga3.png'
import laga4 from '../../images/laga4.png'


export default function Projects() {

  return (
    <div id="projects" className="bg-blue-400">



      <div className="text-4xl ">Work</div>
      <div className="grid-cols-1 p-14 md:p-24 grid md:grid-cols-2">
        <div className="p-4">
          <span className="text-xl">Life After General Assembly<br /></span>
          Full stack application, that allows users to create, review, update and edit reviews and resource links for educational purposes. Created to help students communcaite and categorize resources to assist with software engineering jobs.
          <br />
          <br />Technology used: Reactjs, MongoDB, Netlify, TailwindCSS, Heroku, HTML, CSS
          <br /><a href="https://silly-kowalevski-1591fc.netlify.app/" target="_blank" rel="noreferrer">Deployed Site</a>
        </div>
        <div>
          <img alt=" laga project" src={laga} />
          <div className="align-center mx-auto grid grid-cols-1 md:grid-cols-2 pt-4">
            <img className="h-32 w-72 lg:pr-1" alt="laga project 2" src={laga2} />
            <img className="lg:px-1 w-72 h-32" alt="laga project 2" src={laga3} />
            <img className="h-32 w-72 lg:pl-1" alt="laga project 2" src={laga4} />
          </div>
        </div>
      </div>
      <div className="grid-cols-1 grid md:grid-cols-2">
        <div>Life After General Assembly</div>
        <div>Projects</div>
      </div>
      <div className="grid grid-cols-2">
        <div>Life After General Assembly</div>
        <div>Projects</div>
      </div>

    </div >
  )
}
