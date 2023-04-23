import ScrollAnimation from "react-animate-on-scroll";
import "./Rarity.scss";
import RarityItem from "./RarityItem/RarityItem";

const Rarity = (props) => {
  let RarityItemsInfo = [
    {
      img: "rarity-c.png",
      title: "C",
      subtitle: "common",
      amountNum: "-",
      animDelay: 0,
    },
    {
      img: "rarity-s.png",
      title: "S",
      subtitle: "scarse",
      amountNum: "-",
      animDelay: 100,
    },
    {
      img: "rarity-r.png",
      title: "R",
      subtitle: "rare",
      amountNum: "-",
      animDelay: 200,
    },
    {
      img: "rarity-rr.png",
      title: "RR",
      subtitle: "very rare",
      amountNum: "-",
      animDelay: 300,
    },
    {
      img: "rarity-l.png",
      title: "L",
      subtitle: "legendary",
      amountNum: "-",
      animDelay: 400,
    },
  ];

  let RarityItems = RarityItemsInfo.map((p) => (
    <RarityItem
      img={p.img}
      title={p.title}
      subtitle={p.subtitle}
      amountNum={p.amountNum}
      animDelay={p.animDelay}
    />
  ));
  return (
    <section className="rarity">
      <div className="container">
        <div className="rarity__title default-title">уровни редкости лисиц</div>
        <div className="rarity-box">{RarityItems}</div>
        <div className="rarity__inner adaptive">
          <div className="rarity__inner-item">
            <div className="rarity__inner-box">
              {RarityItems[0]}
              {RarityItems[1]}
            </div>
            <ScrollAnimation
              offset={300}
              animateOnce={true}
              animateIn="animate__fadeIn"
              className="rarity__inner-img"
            >
              <img src="images/lines-item--1.png" alt="" />
            </ScrollAnimation>
          </div>
          <div className="rarity__inner-item">
            <div className="rarity__inner-box">
              {RarityItems[2]}
              {RarityItems[3]}
            </div>
            <ScrollAnimation
              offset={300}
              animateOnce={true}
              animateIn="animate__fadeIn"
              className="rarity__inner-img"
            >
              <img src="images/lines-item--3.png" alt="" />
            </ScrollAnimation>
          </div>
          <div className="rarity__inner-item">
            <div className="rarity__inner-box">
              {RarityItems[4]}
              <div className="rarity__item"></div>
            </div>
            <ScrollAnimation
              offset={300}
              animateOnce={true}
              animateIn="animate__fadeIn"
              className="rarity__inner-img"
            >
              <img src="images/lines-item--5.png" alt="" />
            </ScrollAnimation>
          </div>
        </div>

        <div className="rarity__lines">
          <ScrollAnimation
            offset={300}
            animateOnce={true}
            animateIn="animate__fadeIn"
          >
            <img
              className="rarity__lines-line"
              src="images/rarity-lines--1.svg"
              alt=""
            />
          </ScrollAnimation>
          <ScrollAnimation
            offset={300}
            animateOnce={true}
            animateIn="animate__fadeIn"
            className="rarity__lines-text"
          >
            10% прибыли проекта отправляется владельцам токенов. Деньги приходят
            за каждую конкретную лису в зависимости от уровня ее редкости
          </ScrollAnimation>
          <ScrollAnimation
            offset={300}
            animateOnce={true}
            animateIn="animate__fadeIn"
          >
            <img
              className="rarity__lines-line"
              src="images/rarity-lines--2.svg"
              alt=""
            />
          </ScrollAnimation>
          <ScrollAnimation
            offset={300}
            animateOnce={true}
            animateIn="animate__fadeIn"
            className="rarity__lines-box"
          >
            <div className="rarity__lines-item">
              <img src="images/lines-item--1.png" alt="" />
            </div>
            <div className="rarity__lines-item">
              <img src="images/lines-item--2.png" alt="" />
            </div>
            <div className="rarity__lines-item">
              <img src="images/lines-item--3.png" alt="" />
            </div>
            <div className="rarity__lines-item">
              <img src="images/lines-item--4.png" alt="" />
            </div>
            <div className="rarity__lines-item">
              <img src="images/lines-item--5.png" alt="" />
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Rarity;
