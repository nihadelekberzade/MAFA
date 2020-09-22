import './home.css'
import { images } from '../../img/images'
import React, { useState } from 'react'
import Service from '../Service/Service'



export default function Home() {
    const [
        active = {
            activeIndex: 0,
            activeShapeImg: images.x,
            activeShapeName: 'x'
        },
        setActive
    ] = useState(
        {
            activeIndex: 0,
            activeShapeImg: images.x,
            activeShapeName: 'x'
        }
    );

    let getShape = (index) => {
        let shape;
        switch (index) {
            case 0:
                shape = {
                    shapeImg: images.x,
                    shapeName: 'x'
                }
                break;
            case 1:
                shape = {
                    shapeImg: images.o,
                    shapeName: 'o'
                }
                break;
            case 2:
                shape = {
                    shapeImg: images.cu,
                    shapeName: 'x'
                }
                break;
            case 3:
                shape = {
                    shapeImg: images.c,
                    shapeName: 'c'
                }
                break;
            default:
                break;
        }

        return shape;
    }

    let clickHandler = (index) => {
        const shape = getShape(index);

        if (index === active.activeIndex) {
            setActive({
                activeIndex: null,
                activeShapeImg: null,
                activeShapeName: null
            })
        } else {
            setActive({
                activeIndex: index,
                activeShapeImg: shape.shapeImg,
                activeShapeName: shape.shapeName
            })
        }
    }

    let tst = () => { console.log('salam') };

    return (
        <div className='home'>
            <div
                className={`shapes 
                ${active.activeIndex == null ? 'hidden' : 'show'}`}>
                <img
                    className='shape-1'
                    src={active.activeShapeImg}
                    alt='active shape'
                />
            </div>
            <ul className='home__service-list'>
                <li
                    onMouseOver={tst}
                >
                    <Service
                        title='web-design'
                        subtitle1='Сайт — это не продукт ради продукта, а составляющая ва
                шего общего бизнес-концепта.'
                        subtitle2='Мы понимаем это и делаем такие сайты, 
                которые помогают сделать ваш бизнес лучше.'
                        activeIndex={active.activeIndex}
                        index={0}
                        onClick={clickHandler}
                    />
                </li>
                <li>
                    <Service title='developing'
                        subtitle1='
                        Мы комплексно разрабатываем проекты с учетом особенностей вашего бизнеса. Фиксируем цены за каждый этап и не нарушаем логику разработки.
                '
                        subtitle2='
                        Если хотите получить качественный продукт — доверьтесь нам.
                '
                        activeIndex={active.activeIndex}
                        index={1}
                        onClick={clickHandler}
                    />
                </li>
                <li>
                    <Service title='branding'
                        subtitle1='
                        Есть бизнес-идея, но нет понимания что с ней делать дальше?
                '
                        subtitle2='
                        Мы разработаем такую бренд-стратегию и айдентику, которая сможет донести вашу концепцию до целевой аудитории.
                '
                        activeIndex={active.activeIndex}
                        index={2}
                        onClick={clickHandler}
                    />
                </li>
                <li>
                    <Service title='smm'
                        subtitle1='
                        Если вас нет в социальных сетях — вас не существует.
                        Мы знаем, как эффективно представить вас в Facebook и
                '
                        subtitle2='
                        Instagram, решая ваши задачи и достигая поставленных целей.
                '
                        activeIndex={active.activeIndex}
                        index={3}
                        onClick={clickHandler}
                    />
                </li>
            </ul>
            <div className='bg-img'></div>
        </div>
    )
}
