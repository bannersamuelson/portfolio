import React from 'react'
import { HashLink } from 'react-router-hash-link';
import './Buttons.css'




export default function Buttons() {

  return (

    <nav className="z-10 bg-transparent dotstyle dotstyle-fillup hidden md:block p-1 fixed top-96 right-0">
      <ul className="m-3">
        <HashLink to="/#projects" className="hovertext" data-hover="Projects">
          <li className=" m-3 bg-slate-600 hover:bg-slate-500 p-1 border-1"></li></HashLink>
        <HashLink to="/#about" className="hovertext" data-hover="About">
          <li className=" m-3 bg-slate-600 hover:bg-slate-500 p-1 border-1"></li></HashLink>
        <HashLink to="/#contact" className="hovertext" data-hover="Contact">
          <li className=" m-3 bg-slate-600 hover:bg-slate-500 p-1 border-1"></li></HashLink>
      </ul>
    </nav>
  )
}
