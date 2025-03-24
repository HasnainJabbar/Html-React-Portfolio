import React from 'react'
import ResumeEducation from '../components/resume-section/ResumeEducation'
import ResumeExperience from '../components/resume-section/ResumeExperience'
import Skills from '../components/skills/Skills'
const Resume = () => {
  return (
    <>
      <article class="resume  active" data-page="resume">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>
      <ResumeEducation />
      <ResumeExperience />
      <Skills/>
      </article>
    </>
  )
}

export default Resume
