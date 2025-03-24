import React from 'react'
import { data,socials } from '../Constants/SidebarConstants'
const InfoTile = () => {
    return (
        <>
            <div className="sidebar-info_more">

                <div className="separator"></div>

                <ul className="contacts-list">

                    {data.map((item, index) => {
                        return (
                            <li key={index} className="contact-item">

                                <div className="icon-box">
                                    <ion-icon name={item.iconName}></ion-icon>
                                </div>

                                <div className="contact-info">
                                    <p className="contact-title">{item.title}</p>

                                    <a href={item.link} target='blank' className="contact-link">{item.linkTitle}</a>
                                </div>

                            </li>
                        )
                    })}

                </ul>

                <div className="separator"></div>

                <ul className="social-list">

                    {socials.map((item, index) => {
                        return (
                            <li key={index} className="social-item">
                                <a href="#" className="social-link">
                                    <ion-icon className="socials-icons" name={item}></ion-icon>
                                </a>
                            </li>
                        )
                    })}

                </ul>

            </div>
        </>
    )
}

export default InfoTile