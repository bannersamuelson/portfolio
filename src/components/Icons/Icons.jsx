import React from 'react'
import github from '../../images/github.png'

export default function Icons() {
  return (
    <div id="skills" className="bg-white bg-cover pb-44">
      <span className="min-w-full pb-4 pt-24 flex justify-center text-5xl text-banner">Tech Stack</span>
      <div className="flex items-center xl:px-72">
        <div className="justify-center min-w-full grid grid-cols-2 md:grid-cols-4 p-14">

          <img className="mx-auto my-4 h-14 w-14" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="javascript" />
          <img className="mx-auto my-4 h-14 w-14" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" alt="css3" />
          <img className="mx-auto my-4 h-14 w-14" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg" alt="mongoDB" />
          <img className="mx-auto my-4 h-14 w-14" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" alt="html5" />
          <img className="mx-auto my-4 h-14 w-14" src={github} alt="gitHub" />
          <img className="mx-auto my-4 h-14 w-14" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="react" />
          <img className="mx-auto my-4 h-14 w-14" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain-wordmark.svg" alt="postgresql" />
          <img className="mx-auto my-4 h-14 w-14" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-plain-wordmark.svg" alt="ruby" />
          <img className="mx-auto my-4 h-14 w-14" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain.svg" alt="heroku" />
          <img className="mx-auto my-4 h-14 w-14" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="figma" />
        </div>
      </div>
    </div>
  )

} 
