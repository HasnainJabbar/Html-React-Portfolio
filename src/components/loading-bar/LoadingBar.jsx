import React from 'react'
import { skillProgressBar } from '../Constants/ResumeConstants'
const LoadingBar = () => {
    return (
        <>
            {skillProgressBar.map((item, index) => {
                        return (
                            <li key={index} className="skills-item">

                                <div className="title-wrapper">
                                    <h5 className="h5">WordPress</h5>
                                    <data value={item.width}>{item.width}</data>
                                </div>

                                <div className="skill-progress-bg">
                                    <div className="skill-progress-fill" style={item}></div>
                                </div>

                            </li>
                        )
                    })}
        </>
    )
}

export default LoadingBar
