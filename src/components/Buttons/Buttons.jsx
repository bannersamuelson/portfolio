import React from 'react'
import { HashLink } from 'react-router-hash-link';
import './Buttons.css'
import './script'



export default function Buttons() {

  return (

    <nav className="bg-transparent dotstyle dotstyle-fillup hidden md:block p-5 fixed top-72 right-0">
      <ul className="m-4">
        <span className="hovertext" data-hover="Home"><li class=" m-4 bg-slate-50 hover:bg-slate-400 p-1 border-1"></li></span>
        <li class="m-4 bg-slate-50 hover:bg-slate-400" ></li>
        <li class="m-4 bg-slate-50 hover:bg-slate-400"></li>
        <li class="m-4 bg-slate-50 hover:bg-slate-400"></li>
      </ul>
    </nav>

    // <ul>
    //   <li class="current"><a href="#">Home</a></li>
    //   <li><HashLink to="/#home" className="w-12 h-12 bg-red-400 rounded-full">Home</HashLink></li>
    //   <li><HashLink to="/#projects" className="w-12 h-12 bg-red-400 rounded-full">Home</HashLink></li>
    //   <li><HashLink to="/#contact" className="w-12 h-12 bg-red-400 rounded-full">Home</HashLink></li>
    //   <li><HashLink to="/#home" className="w-12 h-12 bg-red-400 rounded-full">Home</HashLink></li>
    //   <li><HashLink to="/#home" className="w-12 h-12 bg-red-400 rounded-full">Home</HashLink></li>
    // </ul>

  )
}
