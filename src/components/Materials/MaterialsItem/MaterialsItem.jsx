import ScrollAnimation from "react-animate-on-scroll";
import "./MaterialsItem.scss";

const MaterialsItem = (props) => {
  let chanceElements = props.chanceData.map((p) => (
    <div className="materials__item-chance">
      <div>{p.name}</div>
      <div>{p.percent}</div>
    </div>
  ));

  return (
    <div className="materials__item">
      <img
        src={"images/materials/" + props.img}
        className="materials__item-img"
      />
      <div className="materials__item-title">
        {props.title}
        <span>{props.test}</span>
      </div>
      <div className="materials__item-subtitle">Drop-chance:</div>
      {chanceElements}
    </div>
  );
};

export default MaterialsItem;
