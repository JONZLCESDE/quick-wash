import "./OurServices.css";

function OurServices() {
  return (
    <div id="tres" className="fondoSeccionTres">
      <h2 className="titulo-seccion">Nuestros Servicios</h2>
      <br />
      <br />
      <div className="contenedor-servicios">
        <div className="grid-servicios">
          <a href="#" className="grupo-servicio">
            <img src="/externo.webp" alt="" className="imagen-servicio" />
            <h3 className="titulo-servicio">Lavado externo</h3>
            <p className="precio-servicio">$60.000</p>
          </a>
          <a href="#" className="grupo-servicio">
            <img src="/interno.webp" alt="" className="imagen-servicio" />
            <h3 className="titulo-servicio">Lavado interno</h3>
            <p className="precio-servicio">$70.000</p>
          </a>
          <a href="#" className="grupo-servicio">
            <img src="/brillar.webp" alt="" className="imagen-servicio" />
            <h3 className="titulo-servicio">Brillado</h3>
            <p className="precio-servicio">$150.000</p>
          </a>
          <a href="#" className="grupo-servicio">
            <img src="/polichar.webp" alt="" className="imagen-servicio" />
            <h3 className="titulo-servicio">Polichado</h3>
            <p className="precio-servicio">$160.000</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default OurServices;

