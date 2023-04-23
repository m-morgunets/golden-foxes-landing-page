import "./Main.scss";

const Main = (props) => {
  return (
    <section className="main">
      <div className="container">
        <header className="header">
          <div className="header__logo">
            <img src="images/logo.png" alt="" />
            LEMON ON CRYPTO.<span>PROJECT</span>
          </div>
          <div className="header__lang">
            EN
            <div className="header__lang-radio"></div>
            RU
          </div>
          <a href="https://discord.gg/Z7wbrFmM26" className="header__link">
            <img src="images/discord.png" alt="" />
            DISCORD
          </a>
          <div className="header-box adaptive">
            <div className="header__logo">
              <img src="images/logo.png" alt="" />
              LEMON ON CRYPTO.<span>PROJECT</span>
            </div>
            <div className="header__lang">
              EN
              <div className="header__lang-radio"></div>
              RU
            </div>
          </div>
        </header>
        <div className="main__title">
          Golden
          <img src="images/title.png" alt="" />
          <span>Foxes</span>
        </div>
        <ul className="main__menu">
          <li>
            <a href="#info">About NFT</a>
          </li>
          <li>
            <a href="#roadMap">Road-map</a>
          </li>
          <li>
            <a href="#team">Team</a>
          </li>
          <li>
            <a href="#whiteListed">White List</a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Main;
