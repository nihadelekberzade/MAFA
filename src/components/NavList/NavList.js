import './navList.css'
import React from 'react'
import { Link } from 'react-router-dom'



export default function NavList(props) {
    return (
        <ul
            onClick={props.onClick}
            className={`nav-list ${props.isActive ? 'active' : 'collapsed'}`}>
            <Link to='/home'>
                <li>
                    home
                </li>
            </Link>
            <Link to='/team'>
                <li>
                    team
                </li>
            </Link>
            <Link to='/contacts'>
                <li>
                    contact
                </li>
            </Link>
        </ul>
    )
}
