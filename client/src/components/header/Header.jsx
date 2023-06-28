import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://img.freepik.com/fotos-premium/primer-plano-hermosa-vista-naturaleza-hoja-verde-sobre-fondo-verde-borroso-jardin-espacio-copia-utilizando-como-concepto-pagina-portada-fondo_105035-2134.jpg?w=2000"
        alt=""
      />
    </div>
  );
};

export default Header;
