import React from 'react'
import './Home.css'
import Nav from '../components/Nav/Nav'

export default function Home() {
  return (
    <div className="bg-waves bg-cover">
      <Nav />

      <div className="w-full h-screen">
        <div className="flex justify-center text-center pt-72 pb-4">
          <h3 className="text-6xl md:text-8xl animate-charcter text-slate-50"> BANNER</h3>
        </div>
        <div className="fade-in-text text-purple-600 text-4xl">Software Developer
        </div >
      </div >
    </div>
  )
}
