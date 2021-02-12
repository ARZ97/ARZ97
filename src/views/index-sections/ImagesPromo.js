import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function ImagesPromo() {
  return (
    <>
      <div className="section section-images">
        <h1 className="text-center">BIENVENIDO</h1>
        <Container>
          <Row>
            <Col md="12">
              <div className="row align-items-start">
                <div className="col">
                  <img
                    alt="..."
                    src={require("../../assets/img/Cajas.gif")}
                    ></img>
                </div>
                <div className="col">
                  <img
                    alt="..."
                    src={require("../../assets/img/red.png")}
                    ></img>
                </div>
                <div className="col">
                  <img
                    alt="..."
                    src={require("../../assets/img/CAJAS PARA PIZZA.jpg")}
                    ></img>
                </div>
              </div>
              
            </Col>
          </Row>
        </Container>
      </div>
     </>
  );
}

export default ImagesPromo;
