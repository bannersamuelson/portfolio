import './Home.css'
import Nav from '../components/Nav/Nav'


export default function Home() {

  return (
    <div id="home" className="bg-waves bg-cover">
      <Nav />
      <div className="w-full">
        <div className="grid grid-columns-1 justify-center text-center pt-56 md:pt-72 pb-24">
          <h3 id="name" className="text-6xl lg:text-6xl animate-charcter text-slate-50">BANNER <span className="block md:inline-block">  SAMUELSON</span></h3>

          <div id="soft" className="quantify flex justify-center fade-in-text text-slate-400 text-3xl">Software Engineer
          </div >
        </div>
      </div>
      <div className="curved-div">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#0099ff" fill-opacity="1" d="M0,128L48,106.7C96,85,192,43,288,69.3C384,96,480,192,576,224C672,256,768,224,864,202.7C960,181,1056,171,1152,181.3C1248,192,1344,224,1392,240L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </div >
  )
}
