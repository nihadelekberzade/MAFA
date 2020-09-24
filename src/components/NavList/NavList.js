import './navList.css'
import React from 'react'
import { Link } from 'react-router-dom'



export default function NavList(props) {

    const links = [
        {
            text: 'home',
            link: '/home'
        },
        {
            text: 'team',
            link: '/team'
        },
        {
            text: 'contact',
            link: '/contacts'
        }
    ]

    return (
        <ul onClick={props.onClick}
            className={`nav-list ${props.isActive ? 'active' : 'collapsed'}`}>
            {
                links.map(link => {
                    return (
                        <Link to={link.link}>
                            <li>
                                {link.text}
                            </li>
                        </Link>
                    )
                })
            }
        </ul>
    )
}
