import ScrollAnimation from "react-animate-on-scroll";
import "./RarityItem.scss";

const RarityItem = (props) => {
  return (
    <ScrollAnimation
      delay={props.animDelay}
      animateIn="animate__fadeInUp"
      offset={300}
      animateOnce={true}
      className="rarity__item"
      style={{
        backgroundImage: `url("images/${props.img}")`,
      }}
    >
      <div className="rarity__item-title">{props.title}</div>
      <div className="rarity__item-subtitle">{props.subtitle}</div>
      <div className="rarity__item-amount">
        <div className="rarity__item-amount__title">in collection:</div>
        <div className="rarity__item-amount__num">
          {props.amountNum + "/10.000"}
        </div>
      </div>
    </ScrollAnimation>
  );
};

export default RarityItem;
