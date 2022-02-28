import React from 'react'
import profile from '../../images/profile.png'
import quotes from '../../images/quotes.png'
import quotes2 from '../../images/quotes2.png'

export default function About() {
  return (
    <div className="bg-blen pt-14">
      <img className="flex mx-auto justify-center rounded-full h-80" src={profile} alt=" banner samuelson profile" />
      <p className="mx-auto pt-24 px-24 text-slate-300">
        <img className="fill-slate-50 h-10 md:h-14 mx-auto" src={quotes} alt="quotes" /><br /> Software Engineer with a speciality in Front-End design and layout implementations. Love to code and make webpages that push the industry standard. My current skills include but are not limited to:

        <br />
        <br />
        Ruby | Rails | Tailwind CSS | Bootstrap | React.js | Mongoose | MongoDB | PostgreSQL | SQL | HTML | JSON | JavaScript | Bootstrap | Github | Git | Express.js | Heroku | Netlify | Node.js   <img className="fill-slate-50 h-10  md:h-14 mt-4 mx-auto" src={quotes2} alt="quotes" /></p>

    </div>

  )
}
