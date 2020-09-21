import './home.css'
import React from 'react'
import Service from '../Service/Service'

export default function Home() {



    return (
        <div className='home'>
            <div className='container home__container'>
                <ul className='service-list'>
                    <li>
                        <Service
                            title='web-design'
                            subtitle1='
                Сайт — это не продукт ради продукта, а составляющая ва
                шего общего бизнес-концепта.
                '
                            subtitle2='
                Мы понимаем это и делаем так
                е сайты, 
                которые помогают сделать ваш бизнес лучше.
                '
                        />
                    </li>
                    <li>
                        <Service title='web-design'
                            subtitle1='
                Сайт — это не продукт ради продукта, а составляющая вашего общего бизнес-концепта.
                '
                            subtitle2='
                Мы понимаем это и делаем такие сайты, которые помогают сделать ваш бизнес лучше.
                '
                        />
                    </li>
                    <li>
                        <Service title='web-design'
                            subtitle1='
                Сайт — это не продукт ради продукта, а составляющая вашего общего бизнес-концепта.
                '
                            subtitle2='
                Мы понимаем это и делаем такие сайты, которые помогают сделать ваш бизнес лучше.
                '
                        />
                    </li>
                    <li>
                        <Service title='web-design'
                            subtitle1='
                Сайт — это не продукт ради продукта, а составляющая вашего общего бизнес-концепта.
                '
                            subtitle2='
                Мы понимаем это и делаем такие сайты, которые помогают сделать ваш бизнес лучше.
                '
                        />
                    </li>
                    <li>
                        <Service title='web-design'
                            subtitle1='
                Сайт — это не продукт ради продукта, а составляющая вашего общего бизнес-концепта.
                '
                            subtitle2='
                Мы понимаем это и делаем такие сайты, которые помогают сделать ваш бизнес лучше.
                '
                        />
                    </li>
                </ul>
            </div>
        </div>
    )
}
