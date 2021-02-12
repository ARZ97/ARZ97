/*eslint-disable*/
import React from "react";

// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";


function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black" style={{  padding: "15px 5px" }}>
      <Container>
      <Row className="justify-content-md-center ">
            <Col className="text-center" lg="8" md="12">
              <h3>Estamos a la orden</h3>
            </Col>
            <Col className="text-center" lg="8" md="12">
             
              
              <Button
                className="btn-neutral btn-icon btn-round"
                color="facebook"
                href="https://www.facebook.com/EMPLAO/"
                id="tooltip735272548"
                size="lg"
                target="_blank"
              >
                <i className="fab fa-facebook-square"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip735272548">
               Me gusta
              </UncontrolledTooltip>
              <Button
                className="btn-neutral btn-icon btn-round"
                color="Instagram"
                href="https://www.instagram.com/embalajesplasticos/"
                id="tooltip647117716"
                size="lg"
                target="_blank"
              >
                <i className="fab fa-instagram"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip647117716">
                Siguenos
              </UncontrolledTooltip>
             
            </Col>
          </Row>
        <nav style={{padding:" 10px "}}>
          <ul>
            <li>
              <a
               
              >
               EMPLAO SYSTEM
              </a>
            </li>
          
            <li>
              <a
                
              >
               Atencion Telefonica al 3318889318
              </a>
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright" style={{padding:" 10px "}}>
          © {new Date().getFullYear()}, Diseño Abraham R Z       
          
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
