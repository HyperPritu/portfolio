import React, { useState } from 'react'
import './qualification.css'

const Qualification = () => {
  const [toggle, setToggle] = useState(1)

  const toggleTab = (index) => {
    setToggle(index)
  }

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className={toggle === 1 ? 'qualification__button qualification__active button__flex' : 'qualification__button button__flex'} onClick={()=>{toggleTab(1)}}>
            <i className="uil uil-graduation-cap qualification__icon"></i> Education
          </div>

          <div className={toggle === 2 ? 'qualification__button qualification__active button__flex' : 'qualification__button button__flex'} onClick={()=>{toggleTab(2)}}>
            <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div className={toggle === 1 ? 'qualification__content qualification__content-active' : 'qualification__content'}>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">B. Tech - CSE</h3>
                <span className="qualification__subtitle">JIS College of Engineering</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2020 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Higher Secondary Education</h3>
                <span className="qualification__subtitle">Sudhir Memorial Institute</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2018 - 2020
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Secondary Education</h3>
                <span className="qualification__subtitle">Sudhir Memorial Institute</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2013 - 2018
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          <div className={toggle === 2 ? 'qualification__content qualification__content-active' : 'qualification__content'}>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Fresher</h3>
                <span className="qualification__subtitle">I am a fresher</span>
                <div className="qualification__calendar qualification__calendar-empty">
                  <i className="uil uil-calendar-alt"></i>
                  <span className="qualification__empty"></span>
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Qualification
