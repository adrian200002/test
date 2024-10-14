import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <div className="header__logo-gradient"></div>
        <img className="header__logo-bg" src="icons/logo-bg.svg" alt="" />
        <img className="header__logo-dash" src="icons/logo-dash.svg" alt="" />
        <img
          className="header__logo-letter"
          src="icons/logo-letter.svg"
          alt=""
        />
      </div>
      <div className="header__text">
        <h1 className="header__title">17 MOVEMENT</h1>
        <h2 className="header__subtitle">Development tool</h2>
      </div>
      <div className="header__icons">
        <a href="#">
          <img src="icons/world.svg" alt="" />
        </a>
        <a href="https://discord.com/invite/cbdkQfseH3" target="_blank">
          <img src="icons/discord.svg" alt="" />
        </a>
      </div>
    </div>
  );
};

export default Header;
