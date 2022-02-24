import { useRef } from 'react'

export default function Projects() {
  const scollToRef = useRef();
  return (
    <div id="projects" className="bg-slate-700">
      <div className="text-4xl">Projects</div>
      <div>Projects</div>
      <div>Projects</div>
      <div>Projects</div>
      <div>Projects</div>
      <div>Projects</div>
      <div>Projects</div>
      <div>Projects</div>
      <div ref={scollToRef}>Projects</div>
      <div >Projects</div>
    </div>
  )
}
