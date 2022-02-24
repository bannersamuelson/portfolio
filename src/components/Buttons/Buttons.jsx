import React from 'react'

export default function Buttons() {
  return (
    <div className="p-5 fixed top-72 right-0">
      <a href="#" class="cta">
        <span>Click me</span>
        <svg width="13px" height="10px" viewBox="0 0 13 10">
          <path d="M1,5 L11,5"></path>
          <polyline points="8 1 12 5 8 9"></polyline>
        </svg>
      </a>
      <div className="bg-blue-300 m-3 rounded-full">Projects</div>
      <div className="bg-blue-300 m-3 rounded-full">Contact</div>
    </div>
  )
}
