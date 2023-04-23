import ScrollAnimation from "react-animate-on-scroll";
import "./RoadMap.scss";

const RoadMap = (props) => {
  return (
    <section className="roadMap" id="roadMap">
      <div className="container">
        <div className="roadMap__title default-title">road-map</div>
        <div className="roadMap-box">
          <ScrollAnimation
            offset={300}
            animateOnce={true}
            animateIn="animate__fadeIn"
            className="roadMap__item"
          >
            <div
              className="roadMap__item-bg"
              style={{
                backgroundImage: `url("images/roadMap-bg.png")`,
              }}
            ></div>
            <div className="roadMap__item-title">PHASE #1</div>
            <div className="roadMap__item-subtitle">March</div>
            <div className="roadMap__item-text">
              <span className="title">Старт</span>
              <br />
              <br />
              Создаем 3D-модель, прорабатываем материалы, продумываем алгоритм
              генерации коллекции
              <br />
              <br />
              Собираем первоначальную аудиторию заинтересованных людей, проводим
              большую презентацию на тему NFT Golden Foxes
            </div>
            <div className="roadMap__item-status">
              <img src="images/check.svg" alt="" />
            </div>
          </ScrollAnimation>

          <ScrollAnimation
            offset={300}
            animateOnce={true}
            animateIn="animate__fadeIn"
            className="roadMap__item"
          >
            <div
              className="roadMap__item-bg"
              style={{
                backgroundImage: `url("images/roadMap-bg.png")`,
              }}
            ></div>
            <div className="roadMap__item-title">PHASE #2</div>
            <div className="roadMap__item-subtitle">April</div>
            <div className="roadMap__item-text">
              <span className="title">Разработка и упаковка</span>
              <br />
              <br />
              Упаковываем наш проект, чтобы каждому участнику была понятна идея.
              Оформляем Дискорд-сервер, создаем сайт, на котором каждый владелец
              токена сможет изучить свою коллекцию, партнерские выплаты и свой
              рейтинг внутри проекта
            </div>
            <div className="roadMap__item-status">
              <img src="images/check.svg" alt="" />
            </div>
          </ScrollAnimation>

          <ScrollAnimation
            offset={300}
            animateOnce={true}
            animateIn="animate__fadeIn"
            className="roadMap__item"
          >
            <div className="roadMap__item-title">PHASE #3</div>
            <div className="roadMap__item-subtitle">May</div>
            <div className="roadMap__item-text">
              <span className="title">30 первых лисиц</span>
              <br />
              <br />
              Объявляем <span>набор в White-List</span>. Всего будет 30 мест.
              Почему так мало? Это нужно для того, чтобы каждый держатель лисы
              мог хорошо заработать, после того, как мы реализуем следующую
              коллекцию из большего количества NFT
              <br />
              <br />
              Мы не стремимся сделать много продаж на старте. Мы хотим, чтобы
              каждый владелец лисы получил максимальный профит
            </div>
            <div className="roadMap__item-status">
              <span>...</span>
            </div>
          </ScrollAnimation>

          <ScrollAnimation
            offset={300}
            animateOnce={true}
            animateIn="animate__fadeIn"
            className="roadMap__item"
          >
            <div className="roadMap__item-title">PHASE #4</div>
            <div className="roadMap__item-subtitle">May</div>
            <div className="roadMap__item-text">
              <span className="title">Новые горизонты</span>
              <br />
              <br />
              Происходит минт первой коллекции, проект набирает обороты... мы с
              головой уходим в его развитие, рекламу и коллаборации. Активно
              продвигаемся на зарубежных рынках, собираем все больше и больше
              аудитории в наше комьюнити
              <br />
              <br />А затем...
            </div>
          </ScrollAnimation>

          <ScrollAnimation
            offset={300}
            animateOnce={true}
            animateIn="animate__fadeIn"
            className="roadMap__item"
          >
            <div className="roadMap__item-title">PHASE #5</div>
            <div className="roadMap__item-subtitle">.///</div>
            <div className="roadMap__item-text">
              <span className="title">
                Коллекция из 100 лисиц и дальнеший рост проекта
              </span>
              <br />
              <br />
              Происходит все то же самое, что и две фазы назад. Мы объявляем
              набор в в White-List. На этот раз в нем будет 100 мест. Далее, мы
              выпускаем лисиц ограниченными партиями, пока общая коллекция не
              достигнет 10.000 NFT. Мы выходим на зарубежный рынок, захватываем
              все больше и больше территории... Также, развиваем комьюнити
              Lemon-on-Crypto, открываем платформу для поиска и реализации новых
              амбициозных идей
            </div>
            <div className="roadMap__item-img">
              <img src="images/roadMap-img.png" alt="" />
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default RoadMap;
