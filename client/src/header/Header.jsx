import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImage"
        src="https://c8.alamy.com/compes/r2wke2/hojas-de-otono-sobre-un-fondo-de-textura-de-madera-otono-banner-plantilla-r2wke2.jpg"
        alt=""
      />
    </div>
  );
};

export default Header;
