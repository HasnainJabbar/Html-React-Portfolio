import React from 'react'
import LoadingBar from '../loading-bar/LoadingBar'
const Skills = () => {
    return (
        <>
            <section className="skill">

                <h3 className="h3 skills-title">My skills</h3>

                <ul className="skills-list content-card">

                    <LoadingBar/>

                </ul>

            </section>
        </>
    )
}

export default Skills
