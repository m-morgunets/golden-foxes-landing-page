import ScrollAnimation from "react-animate-on-scroll";
import "./WhichFox.scss";

const WhichFox = (props) => {
  return (
    <section className="whichFox">
      <div className="container">
        <div className="whichFox-inner">
          <ScrollAnimation
            offset={500}
            animateOnce={true}
            animateIn="animate__fadeIn"
            className="whichFox__box"
          >
            <div className="whichFox__box-title default-title">
              Какая лиса достанется тебе?
            </div>
            <div className="whichFox__box-text">
              В зависимости от редкости, алгоритм случайным образом соединяет
              компоненты между собой. Попалась паладиевая лиса с алмазными
              ушками и кристалом в хвосте?
              <br />
              <br />
              Тебе крупно повезло... ведь шанс ее генерации составляет меньше
              0.0000000001%, а общая редкость компонентов - 0.5, что делает ее
              легендарной внутри коллекции и принесет тебе самые большие выплаты
            </div>
          </ScrollAnimation>
          <div className="whichFox__images">
            <img src="images/whichFox-img.png" alt="" />
          </div>

          <div className="whichFox__box adaptive">
            <div className="whichFox__box-title default-title">
              Какая лиса достанется тебе?
            </div>
            <div className="whichFox__box-text">
              В зависимости от редкости, алгоритм случайным образом соединяет
              компоненты между собой. Попалась паладиевая лиса с алмазными
              ушками и кристалом в хвосте?
              <br />
              <br />
              Тебе крупно повезло... ведь шанс ее генерации составляет меньше
              0.0000000001%, а общая редкость компонентов - 0.5, что делает ее
              легендарной внутри коллекции и принесет тебе самые большие выплаты
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhichFox;
