import './home.css'
import React, { useState } from 'react'
import Service from '../Service/Service'



export default function Home() {
    const [activeIndex, setActiveIndex] = useState(0);

    let clickHandler = (index) => {
        index === activeIndex ? setActiveIndex(null) : setActiveIndex(index);
    }



    return (
        <div className='home'>
            <ul className='home__service-list'>
                <li>
                    <Service
                        title='web-design'
                        subtitle1='
                Сайт — это не продукт ради продукта, а составляющая ва
                шего общего бизнес-концепта.
                '
                        subtitle2='
                Мы понимаем это и делаем такие сайты, 
                которые помогают сделать 
                ваш бизнес лучше.
                '
                        activeIndex={activeIndex}
                        index={0}
                        onClick={clickHandler}
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
                activeIndex={activeIndex}
                        index={1}
                        onClick={clickHandler}
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
                activeIndex={activeIndex}
                        index={2}
                        onClick={clickHandler}
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
                activeIndex={activeIndex}
                        index={3}
                        onClick={clickHandler}
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
                activeIndex={activeIndex}
                        index={4}
                        onClick={clickHandler}
                    />
                </li>
            </ul>
        </div>
    )
}
