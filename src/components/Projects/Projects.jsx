import { useRef } from 'react'

export default function Projects() {
  const scollToRef = useRef();
  return (
    <div id="projects">
      <div >You scrolled to me</div>
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
