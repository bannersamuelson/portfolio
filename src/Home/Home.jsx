import React from 'react'
import './Home.css'
import Nav from '../components/Nav/Nav'

export default function Home() {
  return (
    <div className="bg-waves bg-cover">
      <Nav />
      <div className="grid grid-cols-2">

        <div class="container">
          <div class="row">
            <div class="col-md-12 text-center">
              <h3 class="animate-charcter"> BANNER</h3>
            </div>
            <div className="fade-in-text pb-96 text-purple-600 text-4xl">
              Software Developer
            </div>
          </div>
        </div >
      </div >
    </div>
  )
}
