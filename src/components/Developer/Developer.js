/* eslint-disable jsx-a11y/alt-text */
import './developer.css'
import React from 'react'


export default function Developer(props) {
    return (
        <div className='developer'>
            <img
                src={props.src}
                className='img'>
            </img>

            <div className='info'>
                <header>
                    <span className='name'>{props.name}</span>
                </header>
                <footer>

                    <span className='profession'>{props.profession}</span>
                    <div className='social-links'>
                        <a href={props.linkedin}>
                            <i className="fab fa-linkedin-in linkedin icon"></i>
                        </a>
                        <a href={props.email}>
                            <i className="far fa-envelope email icon"></i>
                        </a>
                    </div>
                </footer>
            </div>
        </div>
    )
}
