import React from 'react'

export default function Loader() {
  return (
    <div className="h-screen">
      <div className="bg-blen h-screen items-center justify-center px-4 pt-24 over:opacity-100 ">
        <div className="align-items">
          <div className="text-slate-50 grid justify-center text-big ">
            <div className="loadingScreen">B</div>

            <div className="loadingLetter text-center text-2xl">
              <div className="justify-center text-2xl flex">
                Loading
                <div className="element">.</div>
                <div className="element2">.</div>
                <div className="element3">.</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
