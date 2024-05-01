import React from 'react'
import profile from '../../images/profile.png'
import pdf from '../../resume/BANNERSAMUELSON.pdf'
export default function About() {
  return (
    <div id="about" className="bg-cover bg-white  pt-7">
      <span className="pb-24 pt-4 flex justify-center text-5xl text-banner">About</span>

      <img className="flex mb-14 mx-auto justify-center rounded-full h-80" src={profile} alt=" banner samuelson profile" />

      <p className="text-center mx-auto flex px-20 lg:px-96 text-banner">
        <br /> My speciality is Front-End design and layout implementations. Google Ceritication in UX UI, General Assembly Bootcamp graudate. Pursuing Bachelors in Marketing. I currently reside in Alexandira, VA with my beautiful family and our dog.
      </p>


      <div id="icons" className="justify-center flex pt-8">
        <div className="pl-2 px-1 hover:cursor-pointer text-banner opacity-75 hover:opacity-100">
          <a target="_blank" href="https://www.linkedin.com/in/banner-samuelson/" rel="noreferrer">
            <svg
              className="w-5 h-5 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512">
              <path
                d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
              ></path>
            </svg>
          </a>
        </div>
        <div className="px-1 hover:cursor-pointer text-banner opacity-75 hover:opacity-100">
          <a href="https://github.com/bannersamuelson/" target="_blank" rel="noreferrer">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
          </a>
        </div>
        <div className="px-1 hover:cursor-pointer text-banner opacity-75 hover:opacity-100">
          <a href="mailto:bannersamuelson@gmail.com">
            <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />  <polyline points="22,6 12,13 2,6" /></svg>
          </a>
        </div>
      </div>
      <div className="flex justify-center pb-14 mx-14 lg:mx-4">
        <a className="w-44 md:w-60 my-4 mx-2 px-1 flex justify-center hover:text-banner text-banner0 font-bold rounded text-sm py-2
                 focus:text-banner"
          href={pdf} target="_blank" rel="noreferrer">
          DOWNLOAD RESUME
        </a>

      </div>


    </div>

  )
}
