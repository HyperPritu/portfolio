import React from 'react'
import Backend from './Backend'
import Frontend from './Frontend'
import Others from './Others'
import './skills.css'

const Skills = () => {
  return (
    <div className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>

      <div className="skills__container container grid">
        <Frontend />
        <Backend />
        <Others />
      </div>
    </div>
  )
}

export default Skills
