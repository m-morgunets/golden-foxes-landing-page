import ScrollAnimation from "react-animate-on-scroll";
import "./Info.scss";

const Info = (props) => {
  return (
    <section className="info" id="info">
      <ScrollAnimation
        offset={500}
        animateOnce={true}
        animateIn="animate__fadeIn"
        className="container"
      >
        <div className="info-inner">
          {/* <div className="info__img"> */}
          <img className="info__img" src="images/info-img.jpg" alt="" />
          {/* </div> */}

          <div className="info__content">
            <div className="info__content-title default-title">
              про nft golden foxes
            </div>

            <div className="info__content-text">
              <span>Итак</span>
              <br />
              <br />
              Каждая лиса имеет свой уникальный вес, сплав и редкость. Чем более
              редкие материалы находится в составе лисы, тем большую ценность
              она имеет
              <br />
              <br />
              От редкости твоей лисы будет зависеть размер выплат, которые ты
              сможешь получать... стоп-стоп-стоооп, выплаты?
              <br />
              <br />
              Да. И это самая крутая часть нашего проекта. Владелец лисы каждый
              месяц <span>получает деньги с продаж новых коллекций</span>. Но
              обо всем по порядку... внутри NFT есть 3 меняющиеся части:
            </div>
            <div className="info__content-box">
              <div className="info__content-item">
                <img src="images/info-item--1.jpg" alt="" />
                <div className="info__content-item__title">body</div>
              </div>
              <div className="info__content-item">
                <img src="images/info-item--2.jpg" alt="" />
                <div className="info__content-item__title">belly</div>
              </div>
              <div className="info__content-item">
                <img src="images/info-item--3.jpg" alt="" />
                <div className="info__content-item__title">gem zones</div>
              </div>
            </div>
            <div className="info__content-text">
              <svg width="69px" height="9px">
                <path
                  fill-rule="evenodd"
                  fill="rgb(166, 166, 166)"
                  d="M67.000,9.000 L67.000,1.999 L-0.000,1.999 L-0.000,-0.000 L67.000,-0.000 L69.000,-0.000 L69.000,1.999 L69.000,9.000 L67.000,9.000 Z"
                />
              </svg>
              Материалы, которые могут выпасть:
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default Info;
