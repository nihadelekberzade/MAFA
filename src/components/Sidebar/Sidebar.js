/* eslint-disable jsx-a11y/anchor-is-valid */
import './sidebar.css'
import React, { useState } from 'react'
import NavList from '../NavList/NavList';



export default function Sidebar() {
    const [isActive, setActive] = useState(false);
    let toggleSidebar = () => {
        setActive(!isActive);
    }



    return (
        <div className={`sidebar ${isActive ? 'active' : ''}`}>
            <header
                className={`header ${isActive ? 'black' : 'white'}`} >
                <a className={`logo ${isActive ? 'black' : 'white'}`}>
                    <img
                        alt='logo'
                        src={require(isActive ? '../../img/logo_black.svg' : '../../img/logo_white.svg')}
                    />
                </a>

                <a className={`menu-link ${isActive ? 'black' : 'white'}`}
                    onClick={() => toggleSidebar()}>
                    menu
            </a>
            </header>
            <NavList
            isActive={isActive}
            onClick={toggleSidebar}
            />
            
        </div>
    )
}
