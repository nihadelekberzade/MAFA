/* eslint-disable jsx-a11y/anchor-is-valid */
import './service.css'
import React, { useState } from 'react'




export default function Service(props) {
    const [isActive, setActive] = useState(false);



    return (
        <div className='service'>
            <a
                onClick={() => { setActive(!isActive) }}
                className={`service__title ${isActive ? "active" : ""}`}
            >
                {props.title}
            </a>


            <div
                className={`service__text ${isActive ? "active" : ""}`}
            >
                <span
                    className='service__subtitle-1'
                >
                    {props.subtitle1}
                </span>
                <br />
                <span className='service__subtitle-2'
                >
                    {props.subtitle2}
                </span>
            </div>

        </div>
    )
}
