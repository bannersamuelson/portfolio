import React from 'react'
import quill from '../../images/Quill.png'
import cdc from '../../images/cdc.png'
import staging from '../../images/stagingdesign.png'

// import { Link } from 'react-router-dom';


export default function Projects() {

  return (
    <div className="bg-gray-200">
      {/* <Link className="text-banner" to={'/plumbling'}>test
      </Link> */}
      <span className="pb-14 pt-40 bg-white flex justify-center text-5xl text-banner">Work</span>


      <div class=" 
      pt-24
      pb-44
      px-14
      md:px-8
      xl:px-24
flex flex-wrap
justify-center
    bg-white
    justify-items-center gap-2.5" id="projects">
      {/* CDC logo */}
      <div class="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer">
  <img class="w-full" src={cdc} alt="cdc.com logo"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2"><a href="https://www.cdc.gov">Centers for Disease Control and Prevention</a></div>
    <p class="text-gray-700 text-base">
Worked with the leader in healthcare to update graphics and styles, as well as implemnting changes to relaunch website in 2024.</p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">WordPress</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Bootstrap 5</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">UX UI</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">JavaScript</span>
  </div>
</div>
      {/* Quill logo */}
      <div class="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer">
  <img class="w-full" src={quill} alt="Quill.com logo"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2"><a href="https://quill.com">Quill.com</a></div>
    <p class="text-gray-700 text-base">
      Worked on rebranding and recreating webapges for the new Quill.com which launched in 2021.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">JavaScript</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">React</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">UX UI</span>
  </div>
</div>
      
      {/* Staging logo */}
      <div class="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer">
  <img class="w-full" src={staging} alt="Quill.com logo"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2"><a href="https://www.stagingdesigndc.com/">Stagingdesigndc.com</a></div>
    <p class="text-gray-700 text-base">
Asisted in creating layout and UX design for new website. Involved direct communication to head of marketing.</p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Wordpress</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Bootstrap 5</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">UX UI</span>
  </div>
</div>
      

      </div>
    </div>
  )
}
