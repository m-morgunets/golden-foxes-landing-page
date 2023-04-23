import ScrollAnimation from "react-animate-on-scroll";
import "./Team.scss";

const Team = (props) => {
  return (
    <section className="team" id="team">
      <div className="container">
        <div className="team__title default-title">our golden team:</div>
        <div className="team-inner">
          <div className="team__box">
            <div className="team__box-title">
              <img src="images/founder-icon.png" alt="" />
              founders
            </div>
            <div className="team__box-wrapper">
              <ScrollAnimation
                delay={0}
                animateIn="animate__fadeInUp"
                offset={300}
                animateOnce={true}
                className="team__box-item"
                style={{ backgroundImage: `url("images/team-item--1.png")` }}
              >
                <div className="team__item-title">yalano</div>
              </ScrollAnimation>
              <ScrollAnimation
                delay={100}
                animateIn="animate__fadeInUp"
                offset={300}
                animateOnce={true}
                className="team__box-item"
                style={{ backgroundImage: `url("images/team-item--2.png")` }}
              >
                <div className="team__item-title">michael</div>
              </ScrollAnimation>
            </div>
            <div className="team__box-title adaptive">
              <img src="images/founder-icon.png" alt="" />
              founders
            </div>
          </div>

          <div className="team__box">
            <div className="team__box-title">
              <img src="images/painter-icon.png" alt="" />
              Painters
            </div>
            <div className="team__box-wrapper">
              <ScrollAnimation
                delay={200}
                animateIn="animate__fadeInUp"
                offset={300}
                animateOnce={true}
                className="team__box-item"
                style={{ backgroundImage: `url("images/team-item--3.png")` }}
              >
                <div className="team__item-title">ann</div>
              </ScrollAnimation>
              <ScrollAnimation
                delay={300}
                animateIn="animate__fadeInUp"
                offset={300}
                animateOnce={true}
                className="team__box-item"
                style={{ backgroundImage: `url("images/team-item--4.png")` }}
              >
                <div className="team__item-title">dusty</div>
              </ScrollAnimation>
            </div>
            <div className="team__box-title adaptive">
              <img src="images/painter-icon.png" alt="" />
              Painters
            </div>
          </div>

          {/* <div className="team__box">
            <div className="team__box-title">
              <img src="images/admin-icon.png" alt="" />
              server admin
            </div>
            <div className="team__box-wrapper">
              <ScrollAnimation
                delay={400}
                animateIn="animate__fadeInUp"
                offset={300}
                animateOnce={true}
                className="team__box-item"
                style={{ backgroundImage: `url("images/team-item--5.png")` }}
              >
                <div className="team__item-title">kimber</div>
              </ScrollAnimation>
              <div className="team__box-item"></div>
            </div>
            <div className="team__box-title adaptive">
              <img src="images/admin-icon.png" alt="" />
              server admin
            </div>
          </div> */}

          <div className="team__box">
            <div className="team__box-title">
              <img src="images/moder-icon.png" alt="" />
              moderators
            </div>
            <div className="team__box-wrapper">
              <ScrollAnimation
                delay={500}
                animateIn="animate__fadeInUp"
                offset={300}
                animateOnce={true}
                className="team__box-item"
                style={{ backgroundImage: `url("images/team-item--5.png")` }}
              >
                <div className="team__item-title">kimber</div>
              </ScrollAnimation>
              <ScrollAnimation
                delay={600}
                animateIn="animate__fadeInUp"
                offset={300}
                animateOnce={true}
                className="team__box-item"
                style={{ backgroundImage: `url("images/team-item--6.png")` }}
              >
                <div className="team__item-title">nord</div>
              </ScrollAnimation>
            </div>
            <div className="team__box-title adaptive">
              <img src="images/moder-icon.png" alt="" />
              moderators
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
