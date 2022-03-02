import React from 'react'
import profile from '../../images/profile.png'
import quotes from '../../images/quotes.png'
import quotes2 from '../../images/quotes2.png'

export default function About() {
  return (
    <div id="about" className="bg-blen pt-6">
      <span className="pb-14 pt-4 flex justify-center text-5xl text-rose-700">About</span>

      <img className="flex mb-14 mx-auto justify-center rounded-full h-80" src={profile} alt=" banner samuelson profile" />
      <img className="h-10 md:h-14 mx-auto flex" src={quotes} alt="quotes" />
      <p className="mx-auto flex px-24 text-slate-300">
        <br /> Software Engineer with a speciality in Front-End design and layout implementations. Love to code and make webpages that push the industry standard.

        <br />
        <br />My current skills include but are not limited to:

        <br />
        <br />
        Ruby | Rails | Tailwind CSS | Bootstrap | React.js | Mongoose | MongoDB | PostgreSQL | SQL | HTML | JSON | JavaScript | Bootstrap | Github | Git | Express.js | Heroku | Netlify | Node.js   </p>

      <img className="fill-slate-50 h-10  md:h-14 mt-4 mx-auto" src={quotes2} alt="quotes" />
    </div>

  )
}
