import { useRef } from 'react'

export default function Projects() {
  const scollToRef = useRef();
  return (
    <div id="projects" className="bg-blue-400">
      <div className="text-4xl">Work</div>
      <div className="grid grid-cols-2">
        <div>Projects</div>
        <div>Projects</div>
        <div>Projects</div>
        <div>Projects</div>
        <div>Projects</div>
        <div>Projects</div>
      </div>
    </div>
  )
}
