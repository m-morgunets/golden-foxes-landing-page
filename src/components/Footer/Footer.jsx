import "./Footer.scss";

const Footer = (props) => {
  return (
    <section
      className="footer"
      style={{ backgroundImage: `url("images/footer-bg.png")` }}
    >
      <div className="container">
        <div className="footer__subtitle">
          <img src="images/footer-lemon.png" alt="" />
          LEMON ON CRYPTO. <span>PROJECT</span>
        </div>
        <div className="footer__title">
          Golden
          <img src="images/footer-fox.png" alt="" />
          <span>Foxes</span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
