import ScrollAnimation from "react-animate-on-scroll";
import "./WhiteListed.scss";

const WhiteListed = (props) => {
  setTimeout(() => {
    document.querySelector(".download__text-first").classList.add("active");
  }, 4000);
  setTimeout(() => {
    document.querySelector(".download__text-last").classList.add("active");
  }, 8000);
  setTimeout(() => {
    document.querySelector(".download__text").classList.add("active");
  }, 8500);

  function downloadFinished() {
    document.querySelector(".download").classList.add("active");
    document.querySelector("html").classList.add("active");

    setTimeout(() => {
      document.querySelector(".present").classList.add("active");
    }, 200);

    setTimeout(() => {
      document.querySelector(".present").classList.remove("active");
      document.querySelector(".model").classList.add("active");
    }, 3200);
  }

  return (
    <section className="whiteListed" id="whiteListed">
      <div className="container">
        <div className="whiteListed__title default-title">
          Как попасть в white-LIST
        </div>
        <div className="whiteListed-box">
          <ScrollAnimation
            delay={200}
            offset={600}
            animateIn="animate__fadeInUp"
            animateOnce={true}
            className="whiteListed__item"
          >
            <img
              className="whiteListed__item-img"
              src="images/whiteListed-item--1.jpg"
            />
            <div className="whiteListed__item-title">Fox</div>
            <div className="whiteListed__item-text">
              Это твой стартовый статус. Ты можешь получить его сразу же после
              входа в проект
            </div>
          </ScrollAnimation>

          <ScrollAnimation
            delay={400}
            offset={600}
            animateIn="animate__fadeIn"
            animateOnce={true}
            className="whiteListed__arrow"
          >
            <img
              className="whiteListed__arrow-1"
              src="images/whiteListed-arrow--1.png"
              alt=""
            />
            <img
              className="whiteListed__arrow-2"
              src="images/whiteListed-arrow--2.png"
              alt=""
            />
            <img
              className="whiteListed__arrow-3"
              src="images/whiteListed-arrow--3.png"
              alt=""
            />
            <img
              className="whiteListed__arrow-4"
              src="images/whiteListed-arrow--4.png"
              alt=""
            />
          </ScrollAnimation>

          <ScrollAnimation
            delay={600}
            offset={600}
            animateIn="animate__fadeInUp"
            animateOnce={true}
            className="whiteListed__item"
          >
            <img
              className="whiteListed__item-img"
              src="images/whiteListed-item--2.jpg"
            />
            <div className="whiteListed__item-title">White-listed Fox</div>
            <div className="whiteListed__item-text">
              После выполнения определенных условий проекта, тебе будет присвоен
              данный статус и возможность приобретения NFT
            </div>
          </ScrollAnimation>
        </div>
        <ScrollAnimation
          delay={100}
          offset={600}
          animateIn="animate__fadeIn"
          animateOnce={true}
          className="whiteListed__conditions"
        >
          <div className="whiteListed__conditions-title">1.</div>
          <div className="whiteListed__conditions-subtitle">
            Переходи в наш Discord и изучай условия
          </div>
          <a
            href="https://discord.gg/Z7wbrFmM26"
            className="whiteListed__conditions-button"
          >
            <img
              onLoad={downloadFinished}
              src="images/discord-btn.png"
              alt=""
            />
          </a>
          <div className="whiteListed__conditions-title">...</div>
          <div className="whiteListed__conditions-subtitle">Что дальше?</div>
          <div className="whiteListed__conditions-text">
            Другие правила ты увидишь в Дискорде
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default WhiteListed;
