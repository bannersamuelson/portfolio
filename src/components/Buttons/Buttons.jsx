import React from 'react'
import { HashLink } from 'react-router-hash-link';
import './Buttons.css'




export default function Buttons() {

  return (

    <nav className="bg-transparent dotstyle dotstyle-fillup hidden md:block p-5 fixed top-72 right-0">
      <ul className="m-3">
        <HashLink to="/#home" className="hovertext" data-hover="Home">
          <li className="hover:outline-offset-4
          hover:shadow-2xl hover:shadow-slate-50 m-3 bg-slate-50 hover:bg-slate-400 margin-0 p-1 border-1"></li></HashLink>
        <HashLink to="/#projects" className="hovertext" data-hover="Projects">
          <li className=" m-3 bg-slate-50 hover:bg-slate-400 p-1 border-1"></li></HashLink>
        <HashLink to="/#contact" className="hovertext" data-hover="Contact">
          <li className=" m-3 bg-slate-50 hover:bg-slate-400 p-1 border-1"></li></HashLink>
      </ul>
    </nav>
  )
}
