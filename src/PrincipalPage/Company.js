import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import Footer from "components/Footers/DarkFooter.js";
import Nav from "components/Navbars/IndexNavbar.js";

function Company() {
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <Nav />
      <div className="wrapper">
        <LandingPageHeader />
        <Container>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title">¿QUIENES SOMOS?</h2>
              <h5 className="description">
                <strong>
                  Embalajes y plasticos de Occidente fue fundada en el 2020 por
                  el joven emprendedor Alid Salvador Rosas Zepeda con el
                  objetivo de ser una opcion mas accesible para el consumidor,
                  creciendo dentro del mercado como una fuerte empresa dedicada
                  a la atencion al cliente y una entrega rapida de nuestros
                  productos de calidad.
                </strong>
              </h5>
            </Col>
          </Row>
          <div className="separator separator-primary"></div>
          <div className="section-story-overview">
            <Row>
              <Col md="6">
                <div
                  className="image-container "
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/material.jpg") + ")",
                  }}
                >
                  {" "}
                </div>

                <div>
                  {" "}
                  <p className="text-info">
                    <br></br>
                    "El embalaje es todo aquello necesario en el proceso de
                    acondicionar los productos para protegerlos, y/o agruparlos
                    de manera temporal pensando en su manipulación, transporte y
                    almacenamiento."
                    <br></br>
                    <small>-EMBALAJE</small>
                  </p>
                </div>
              </Col>
              <Col md="5">
                <h3>MISION</h3>
                <p>
                  Ser uno de los principales distribuidores de suministros para
                  empaque y embalajes, satisfaciendo las necesidades de nuestros
                  clientes con productos de alta calidad cumpliendo sus
                  expectativas en términos de calidad, precio y oportunidad de
                  entrega logrando así una permanencia en el mercado.
                </p>
                <h3>VISION</h3>
                <p>
                  Brindar a nuestros clientes soluciones de calidad para sus
                  necesidades de envios, siendo cada vez más eficientes en la
                  incorporación de tecnologías y productos, con mayor
                  capacitación al personal y mejorando la experiencia del
                  Usuario a traves de herramientas .
                </p>
              </Col>
            </Row>
          </div>
        </Container>

        <div className="section section-team text-center">
          <Container>
            <h2 className="title">Así de facil es conseguir tus productos</h2>
            <div className="team">
              <Row>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/coti.jpg")}
                    ></img>
                    <h4 className="title">Pide tu cotizacion</h4>
                    <p className="description"><strong>
                      Pregunta por los productos que necesitas relizaremos tu
                      cotizacion sin compromiso una vez que lo apruebes lo
                      podras recoger en sucursal o te lo podemos llevar a tu
                      domicilio en caso que te enuentres en ZMG en caso que tu
                      pedido sea de otra localidad se ajustara tu cotizacion
                      conforme a los gastos de envio.</strong>
                    </p>
                  </div>
                </Col>

                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/envio.jpg")}
                    ></img>
                    <h4 className="title">Envio a domicilio </h4>
                    <p className="description"><strong>
                      Si te encuentras en la Zona Metropolitan de Guadalajara y
                      tu pedido es de mas de $500 pesos nosotros te lo podemos
                      llevar el costo de envio sera segun la distancia de envio
                      y puedes realizar tu pago a contraentrega Si te encuentras
                      en otra localidad sin problema te los enviamos, detallando
                      los costos en tu cotizacion y el pago se efectuara por
                      medio de transferencia.</strong>
                    </p>
                  </div>
                </Col>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/pago.jpg")}
                    ></img>
                    <h4 className="title">Metodo de pago </h4>
                    <p className="description"><strong>
                      Manejamos dos tipos de metodo de pago, puede ser en
                      efectivo a contra entrega o puedes realizar transferencia
                      de fondos.</strong>
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Nuestra Prioridad</h2>
                <h5 className="description text-primary">
                  <strong>
                    La satisfaccion de nuestros clientes es primordial,
                    acompañarlos y asesorarlos hasta el punto de entrega de
                    nuestro productos, uno de los puntos importantes es realizar
                    la entrega de su pedido lo antes posible contando con
                    material de calidad para convertirnos en los probedores de
                    material para empaque de su preferencia.
                  </strong>
                </h5>
              </Col>
            </Row>
          </Container>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Company;
