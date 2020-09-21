/* eslint-disable jsx-a11y/anchor-is-valid */
import './contacts.css'
import React from 'react'

export default function Contacts() {
    return (
        <div className='contacts'>
            <div
                className='contacts__bg-img' />

            <div className='contacts__info'>
                <h1 className='contacts__info_title'>CONTACT</h1>
                <h3 className='contacts__info_country'>Azerbaijan</h3>
                <ul className='contacts__info_contact-list'>
                    <li>Baku,Hilton Business Center</li>
                    <li>1@mafactory.com.az</li>
                    <li>+994 51 314 14 41</li>
                </ul>

                <span className='btn contacts__info_btn'>
                    <span>contact us</span>
                </span>
            </div>
        </div>
    )
}
