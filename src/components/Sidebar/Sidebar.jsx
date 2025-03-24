import React from 'react'
import { UserAvatar } from '../Constants/SidebarConstants'
import InfoTile from '../info-tile/InfoTile'
const Sidebar = () => {
    return (
        <>
            <aside className="sidebar" data-sidebar>

                <div className="sidebar-info">

                    <figure className="avatar-box">
                        <img src={UserAvatar} alt="Richard hanrick" width="80" />
                    </figure>

                    <div className="info-content">
                        <h1 className="name" title="Richard hanrick">Richard hanrick</h1>

                        <p className="title">Web developer</p>
                    </div>

                    <button className="info_more-btn" data-sidebar-btn>
                        <span>Show Contacts</span>

                        <ion-icon name="chevron-down"></ion-icon>
                    </button>

                </div>

                <InfoTile/>

            </aside>
        </>
    )
}

export default Sidebar
