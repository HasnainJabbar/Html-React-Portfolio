import React from 'react'
import { portflioConstants } from '../Constants/BlogPortfolioConstants';
import { Link } from 'react-router';
const PortfolioCards = () => {
    return (
        <>
            <ul className="project-list">
                {
                    portflioConstants.map((item, index) => {
                        return (
                            <li key={index} className="project-item  active" data-filter-item data-category="web development">
                                <Link href="#">

                                    <figure className="project-img">
                                        <div className="project-item-icon-box">
                                            <ion-icon name="eye-outline"></ion-icon>
                                        </div>

                                        <img src={item.image} alt="finance" loading="lazy" />
                                    </figure>

                                    <h3 className="project-title">{item.title}</h3>

                                    <p className="project-category">{item.category}</p>

                                </Link>
                            </li>
                        )
                    })}
            </ul >
        </>
    )
}

export default PortfolioCards
