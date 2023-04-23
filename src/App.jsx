import "./scss/style.scss";
import "animate.css/animate.min.css";

import Model from "./components/Model/Model";
import Main from "./components/Main/Main";
import Info from "./components/Info/Info";
import Materials from "./components/Materials/Materials";
import WhichFox from "./components/WhichFox/WhichFox";
import Rarity from "./components/Rarity/Rarity";
import RoadMap from "./components/RoadMap/RoadMap";
import Team from "./components/Team/Team";
import WhiteListed from "./components/WhiteListed/WhiteListed";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <div className="download">
        <div className="download-box">
          <img src="images/whiteListed-item--1.jpg" alt="" />
          <svg class="spinner" viewBox="0 0 50 50">
            <circle
              class="path"
              cx="25"
              cy="25"
              r="20"
              fill="none"
              stroke-width="1"
            ></circle>
          </svg>
        </div>
        <div className="download__text">
          <div className="download__text-first">Загружаем сайт...</div>
          <div className="download__text-last">Уже почти...</div>
        </div>
      </div>

      <div className="present">
        <div className="present__title">
          <span>
            <img src="images/logo.png" />
            lemon on crypto-community
          </span>{" "}
          presents...
        </div>
      </div>

      <Model />

      <Main />
      <Info />
      <Materials />
      <WhichFox />
      <Rarity />
      <RoadMap />
      <Team />
      <WhiteListed />
      <Footer />
    </div>
  );
}

export default App;
