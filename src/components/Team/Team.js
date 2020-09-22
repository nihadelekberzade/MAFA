import './team.css'
import React from 'react'
import Developer from '../Developer/Developer'
import { images } from '../../img/images'




export default function Team() {

    // eslint-disable-next-line no-unused-vars
    const team = [
        {
            name: 'ДМИТРИЙ МУЗЫЧКА',
            profession: 'head of front end',
            src: images.dimaM,
            linkedin: 'https://www.linkedin.com/in/nihad-elekberzade-550959185/',
            email: 'elekberzadeh333@gmail.com'
        },
        {
            name: 'ДМИТРИЙ ЗАПИСОЧНЫЙ',
            profession: 'head of front end',
            src: images.dimaZ,
            linkedin: 'https://www.linkedin.com/in/nihad-elekberzade-550959185/',
            email: 'elekberzadeh333@gmail.com'
        },
        {
            name: 'ДМИТРИЙ ЗАПИСОЧНЫЙ',
            profession: 'head of front end',
            src: images.dimaM,
            linkedin: 'https://www.linkedin.com/in/nihad-elekberzade-550959185/',
            email: 'elekberzadeh333@gmail.com'
        },
    ]

    return (
        <div className='team'>
            <ul className='team-list'>
                <div className='column'>
                    <li className='item item-dimaZ'>
                        <Developer
                            name='ДМИТРИЙ ЗАПИСОЧНЫЙ'
                            profession='head of front end'
                            src={images.dimaM}
                            linkedin='https://www.linkedin.com/in/nihad-elekberzade-550959185/'
                            email='elekberzadeh333@gmail.com'
                        />
                    </li>
                    <li className='item item-dimaM'>
                        <Developer
                            name='ДМИТРИЙ ЗАПИСОЧНЫЙ'
                            profession='head of front end'
                            src={images.dimaZ}
                            linkedin='https://www.linkedin.com/in/nihad-elekberzade-550959185/'
                            email='elekberzadeh333@gmail.com'
                        />
                    </li>
                    <li className='item item-evgeniya'>
                        <Developer
                            name='ЕВГЕНИЯ КУКУШКИНА'
                            profession='head of front end'
                            src={images.evgeniya}
                            linkedin='https://www.linkedin.com/in/nihad-elekberzade-550959185/'
                            email='elekberzadeh333@gmail.com'
                        />
                    </li>
                </div>
            </ul>
        </div>
    )
}
