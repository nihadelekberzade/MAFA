/* eslint-disable jsx-a11y/alt-text */
import './developer.css'
import React from 'react'


export default function Developer(props) {
    return (
        <div className='developer'>
            
            <img 
            src={props.src}
            className='developer__img'>

            </img>

            <div className='developer__info'>
                <div className='name'>{props.name}</div>

                <footer>
                    <span className='profession'>{props.profession}</span>

                    <div className='social-links'>
                        <i className="fab fa-linkedin-in developer__linkedin-icon"></i>
                        <i className="far fa-envelope developer__email-icon"></i>
                    </div>
                </footer>



            </div>
        </div>
    )
}
