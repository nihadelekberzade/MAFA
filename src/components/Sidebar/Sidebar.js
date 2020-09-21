/* eslint-disable jsx-a11y/anchor-is-valid */
import './sidebar.css'
import React, { useState } from 'react'
import NavList from '../NavList/NavList';



export default function Sidebar() {
    const [isActive, setActive] = useState(false);

    let toggleSidebar = () => {
        setActive(!isActive);
        console.log(isActive);
    }



    return (
        <div className={`sidebar ${isActive ? 'active' : ''}`}>

            <header
                className={`header ${isActive ? 'black' : 'white'}`} >
                <a href='#' className={`header__logo ${isActive ? 'black' : 'white'}`}>
                    <img
                        src={require(isActive ? '../../img/logo_black.svg' : '../../img/logo_white.svg')}
                        alt='logo'
                    />
                </a>

                <a

                    href='#'
                    className={`header__menu-link ${isActive ? 'black' : 'white'}`}
                    onClick={() => toggleSidebar()}
                >
                    menu
            </a>


            </header>

            <NavList
            isActive={isActive}
            />
            
        </div>
    )
}
