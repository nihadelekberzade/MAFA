import './navList.css'
import React from 'react'

export default function NavList(props) {
    return (
        <ul 
        className={`nav-list ${props.isActive ? 'active':'collapsed'}`}>
            <li>
                home
                </li>
            <li>
                team
                </li>
            <li>
                contact
                </li>
        </ul>
    )
}
