import "./Model.scss";
import React from "react";

const Model = (props) => {
  let widthWindow = document.documentElement.clientWidth;
  let heightWindow = document.documentElement.clientHeight;

  // window.addEventListener(
  //   "resize",
  //   function (event) {
  //     widthWindow = document.documentElement.clientWidth;
  //     heightWindow = document.documentElement.clientHeight;
  //     let element = this.document.querySelector(".model__images");
  //     if (
  //       widthWindow < 1200 &&
  //       widthWindow > 700 &&
  //       !element.classList.contains("hight_1200") &&
  //       heightWindow * 1.45 <= element.offsetHeight
  //     ) {
  //       element.classList.add("hight_1200");
  //     } else {
  //       element.classList.remove("hight_1200");
  //     }
  //   },
  //   true
  // );

  let model_range = React.createRef();
  let imagesItem = React.createRef();

  const img = [];
  for (let i = 0; i <= 150; i++) {
    let num = i;
    if (String(i).length < 4) {
      let j = 0;
      while (j < 4 - String(i).length) {
        num = "0" + num;
        j++;
      }
    }
    img.push(<img src={"images/3dModel/" + num + ".png"} alt="" />);
  }

  // const [activeIndex, setActiveIndex] = useState(65);

  // // Хук Effect
  // useEffect(() => {
  //   // Меняем состояние
  //   setActiveIndex((current) => {});
  // }, []);

  // let imagesItem = document.querySelectorAll(".model img");
  function nextNum(num) {
    if (String(num).length < 4) {
      while (4 - String(num).length > 0) {
        num = "0" + num;
      }
    }
    return num;
  }

  let currentValue = 75;
  function func1() {
    currentValue =
      model_range.current.value + 1 == 150 ? 0 : model_range.current.value;
    imagesItem.current.src =
      "images/3dModel/" + String(nextNum(currentValue)) + ".png";
  }

  let mouseLastPosition, mouseFirstPosition;
  let clickStatus = false;
  function moveFunc(event) {
    mouseLastPosition =
      event.clientX == undefined
        ? event.changedTouches[0].clientX
        : event.clientX;
    if (clickStatus) {
      let position = mouseFirstPosition - mouseLastPosition;

      if (position < 0 && -position >= widthWindow / 500) {
        currentValue--;
        currentValue = currentValue == -1 ? 150 : currentValue;
        model_range.current.value = currentValue;
        imagesItem.current.src =
          "images/3dModel/" + String(nextNum(currentValue)) + ".png";
        mouseFirstPosition = mouseLastPosition;
      } else if (position > 0 && position >= widthWindow / 500) {
        currentValue++;
        currentValue = currentValue == 151 ? 0 : currentValue;
        model_range.current.value = currentValue;
        imagesItem.current.src =
          "images/3dModel/" + String(nextNum(currentValue)) + ".png";
        mouseFirstPosition = mouseLastPosition;
      }
    }
  }

  function mouseDownFunc(event) {
    clickStatus = true;
    mouseFirstPosition =
      event.clientX == undefined
        ? event.changedTouches[0].clientX
        : event.clientX;
    currentValue = model_range.current.value;
  }
  function mouseUpFunc() {
    clickStatus = false;
  }

  return (
    <section
      className="model"
      style={{ backgroundImage: `url("images/model-bg.jpg")` }}
    >
      <img
        className="model__images"
        ref={imagesItem}
        src="images/3dModel/0050.png"
        alt=""
      />
      <input
        type="range"
        name="model-range"
        id="model-range"
        min="0"
        max="150"
        step="1"
        ref={model_range}
        onChange={func1}
      />
      <div className="model__other">{img}</div>
      <div
        className="model__nav"
        onMouseDown={mouseDownFunc}
        onMouseUp={mouseUpFunc}
        onMouseMove={moveFunc}
        onTouchStart={mouseDownFunc}
        onTouchEnd={mouseUpFunc}
        onTouchMove={moveFunc}
      ></div>
      <img className="model__bottom" src="images/model-bottom.png" alt="" />
    </section>
  );
};

export default Model;
