import './Home.css'
import Nav from '../Nav/Nav'


export default function Home() {

  return (
    <div id="home" className="bg-gradient-to-r from-black to-grey bg-cover">
      <Nav />
      <div className="w-full px-24 pt-4 pb-44">
        <div className="grid grid-columns-3 justify-left pt-72">
          <h3 id="name" className="text-5xl lg:text-9xl animate-charcter text-slate-50">Hello.
          </h3>


        </div>
        <div className="pb-24 grid grid-columns-3 justify-left">
          <h1 className="text-slate-50 text-3xl
           lg:text-6xl">
            I am
            <span className="px-4 text-3xl text-yellow lg:text-6xl"></span></h1>
        </div>
      </div>


    </div >
  )
}
