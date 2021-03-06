import React from "react";

export default function CardCalogue({ data }) {
  return (
    <>
      <div className="row">
      {data.map((producto) => (
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-3" style={{paddingBottom: "30px"}}>
          <div className="card" style={{ width: "15rem", margin: "0px",padding: "0px", lineHeight:" 0px"}}>
            <img
              className="card-img-top"
              src={producto.img}
              alt="producto"
            ></img>
            <div className="" style={{ paddingLeft: "20px",paddingRight: "20px",  lineHeight:" 0px"}}>
              <h5 className="card-title" style={{paddingTop: "10px"}}>{producto.Nombre}</h5>
              <p style={{lineHeight:"20px"}}>Pidelo a tu domicilio</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Menudeo {producto.Precio_Venta}</li>
              <li className="list-group-item">Mayoreo {producto.Precio_Mayoreo}</li>

            </ul>
            <div className="card-body">
              <a href="/#" class="card-link">
                Detalles
              </a>
            </div>
          </div>
        </div>
      ))}</div>
    </>
  );
}
 