import React from 'react'
import { resumeExperience } from '../Constants/ResumeConstants'
const ResumeExperience = () => {
    return (
        <>
            <section className="timeline">

                <div className="title-wrapper">
                    <div className="icon-box">
                        <ion-icon name="book-outline"></ion-icon>
                    </div>

                    <h3 className="h3">Experience</h3>
                </div>
                {resumeExperience.map((item, index) => {
                    return (
                        <ol key={index} className="timeline-list">

                            <li className="timeline-item">

                                <h4 className="h4 timeline-item-title">{item.institute}</h4>

                                <span>{item.duration}</span>

                                <p className="timeline-text"> {item.desc} </p>

                            </li>

                        </ol>)
                })}
            </section>
        </>
    )
}

export default ResumeExperience
