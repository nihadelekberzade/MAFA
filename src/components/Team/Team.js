import './team.css'
import React from 'react'
import Developer from '../Developer/Developer'
import { images } from '../../img/images'




export default function Team() {

    const team  = [
        {
            name:'ДМИТРИЙ МУЗЫЧКА',
            profession:'head of front end',
            src:images.dimaM,
            linkedin:'https://www.linkedin.com/in/nihad-elekberzade-550959185/',
            email:'elekberzadeh333@gmail.com'
        },
        {
            name:'ДМИТРИЙ ЗАПИСОЧНЫЙ',
            profession:'head of front end',
            src:images.dimaZ,
            linkedin:'https://www.linkedin.com/in/nihad-elekberzade-550959185/',
            email:'elekberzadeh333@gmail.com'
        },
        {
            name:'ДМИТРИЙ ЗАПИСОЧНЫЙ',
            profession:'head of front end',
            src:images.dimaM,
            linkedin:'https://www.linkedin.com/in/nihad-elekberzade-550959185/',
            email:'elekberzadeh333@gmail.com'
        },
    ]


    return (
        <div className='team'>
            <ul className='team-list'>
                <li className='team-item'>
                    <Developer
                        name='ДМИТРИЙ ЗАПИСОЧНЫЙ'
                        profession='head of front end'
                        src={images.dimaM}
                        linkedin='https://www.linkedin.com/in/nihad-elekberzade-550959185/'
                        email='elekberzadeh333@gmail.com'
                    />
                    <Developer
                        name='ДМИТРИЙ ЗАПИСОЧНЫЙ'
                        profession='head of front end'
                        src={images.dimaZ}
                        linkedin='https://www.linkedin.com/in/nihad-elekberzade-550959185/'
                        email='elekberzadeh333@gmail.com'
                    />
                    <Developer
                        name='ЕВГЕНИЯ КУКУШКИНА'
                        profession='head of front end'
                        src={images.evgeniya}
                        linkedin='https://www.linkedin.com/in/nihad-elekberzade-550959185/'
                        email='elekberzadeh333@gmail.com'
                    />
                </li>
            </ul>
        </div>
    )
}
