import { images } from "../img/images";
import React, { useState } from "react";
import Service from "./Service";

export default function Home() {
  const [
    active = {
      activeIndex: 0,
      activeShapeImg: images.x,
      activeShapeName: "x",
    },
    setActive,
  ] = useState({
    activeIndex: null,
    activeShapeImg: null,
    activeShapeName: "",
  });

  let getShape = (index) => {
    let shape;
    switch (index) {
      case 0:
        shape = {
          shapeImg: images.x,
          shapeName: "x",
        };
        break;
      case 1:
        shape = {
          shapeImg: images.o,
          shapeName: "o",
        };
        break;
      case 2:
        shape = {
          shapeImg: images.cu,
          shapeName: "x",
        };
        break;
      case 3:
        shape = {
          shapeImg: images.c,
          shapeName: "c",
        };
        break;
      default:
        break;
    }
    return shape;
  };

  let clickHandler = (index) => {
    if (index === active.activeIndex) {
      setActive({
        activeIndex: null,
        activeShapeImg: active.activeShapeImg,
        activeShapeName: null,
      });
    } else {
      const shape = getShape(index);
      setActive({
        activeIndex: index,
        activeShapeImg: shape.shapeImg,
        activeShapeName: shape.shapeName,
      });
    }
  };

  // list of services
  const services = [
    {
      title: "web-design",
      subtitle1: `Сайт — это не продукт ради продукта, а составляющая ва
            шего общего бизнес-концепта.`,
      subtitle2: `Мы понимаем это и делаем такие сайты, 
            которые помогают сделать ваш бизнес лучше.`,
    },
    {
      title: "developing",
      subtitle1: `Мы комплексно разрабатываем проекты с учетом особенностей вашего бизнеса. Фиксируем цены за каждый этап и не нарушаем логику разработки.`,
      subtitle2: `Если хотите получить качественный продукт — доверьтесь нам.`,
    },
    {
      title: "branding",
      subtitle1: `Есть бизнес-идея, но нет понимания что с ней делать дальше?`,
      subtitle2: `Мы разработаем такую бренд-стратегию и айдентику, которая сможет донести вашу концепцию до целевой аудитории.`,
    },
    {
      title: "smm",
      subtitle1: `Если вас нет в социальных сетях — вас не существует.
            Мы знаем, как эффективно представить вас в Facebook и`,
      subtitle2: `Instagram, решая ваши задачи и достигая поставленных целей.`,
    },
  ];

  return (
    <section className="home">
      <div
        className={`home__shapes ${
          active.activeIndex == null
            ? "home__shapes--hidden"
            : "home__shapes--show"
        }`}
      >
        <img
          className="home__shape home__shape--1"
          src={active.activeShapeImg}
          alt="active shape"
        />
        <img
          className="home__shape home__shape--2"
          src={active.activeShapeImg}
          alt="active shape"
        />
        <img
          className="home__shape home__shape--3"
          src={active.activeShapeImg}
          alt="active shape"
        />
        <img
          className="home__shape home__shape--4"
          src={active.activeShapeImg}
          alt="active shape"
        />
        <img
          className="home__shape home__shape--5"
          src={active.activeShapeImg}
          alt="active shape"
        />
        <img
          className="home__shape home__shape--6"
          src={active.activeShapeImg}
          alt="active shape"
        />
      </div>

      <ul className="home__service-list">
        {services.map((item, i) => {
          return (
            <li className="home__service-item" key={i}>
              <Service
                title={item.title}
                subtitle1={item.subtitle1}
                subtitle2={item.subtitle2}
                activeIndex={active.activeIndex}
                index={i}
                onClick={clickHandler}
              />
            </li>
          );
        })}
      </ul>
      <div className="home__bg-img" />
    </section>
  );
}
