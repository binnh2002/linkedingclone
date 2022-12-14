import React from 'react'
import Avatar from '@mui/material/Avatar';
import './Sidebar.css'


function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebar__top">
            <img src='https://images.alphacoders.com/546/546607.jpg' alt='background'/>
            <Avatar className='sidebar__avatar'/>
            <h2>John Doe</h2>
            <h4>Description</h4>
        </div>
        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>Who viewed you</p>
                <p className="sidebar__statNumber">2,543</p>
            </div>
            <div className="sidebar__stat">
                <p>Views on post</p>
                <p className="sidebar__statNumber">9,999</p>
            </div>
        </div>
    </div>
  )
}

export default Sidebar