import React from 'react'
import { HashLink } from 'react-router-hash-link';
import './Buttons.css'
import './script'



export default function Buttons() {

  return (

    <nav className="bg-transparent dotstyle dotstyle-fillup hidden md:block p-5 fixed top-72 right-0">
      <ul className="m-3">
        <HashLink to="/#home" className="hovertext" data-hover="home">
          <li class="m-3 bg-slate-50 hover:bg-slate-400 p-1 border-1"></li></HashLink>
        <HashLink to="/#projects" className="hovertext" data-hover="projects">
          <li class=" m-3 bg-slate-50 hover:bg-slate-400 p-1 border-1"></li></HashLink>
        <HashLink to="/#contact" className="hovertext" data-hover="contact">
          <li class=" m-3 bg-slate-50 hover:bg-slate-400 p-1 border-1"></li></HashLink>
      </ul>
    </nav>
  )
}
