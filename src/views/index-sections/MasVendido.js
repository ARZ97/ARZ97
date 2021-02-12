import React from "react";

// reactstrap components
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody,
  Container
} from "reactstrap";

// core components
function MasVendido() {

  return (
    <>
    <div className="container-fluid mt-5">
       

      <h1 className="text-center">PRODUCTOS MAS VENDIDOS</h1>
      <Container className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
      <CardDeck>
        <Card>
          <CardImg
            top
            width="250"
            src={require("assets/img/vitafilm.png")}
            height="300"
          />
          <CardBody>
            <CardTitle>Vitafilm</CardTitle>
            <CardSubtitle>30cm X 600mtrs</CardSubtitle>
            <CardText>
            <Button>Detalles</Button>

            </CardText>
           
          </CardBody>
        </Card>
        <Card className="card2">
          <CardImg
                    className="card2.2"

            top
            width="250"
            src={require("assets/img/Poliburbuja.jpg")}
            height="300"
          />
          <CardBody>
            <CardTitle>Poliburbuja</CardTitle>
            <CardSubtitle>
              Rollo de burbuja chica, mediana o grande{" "}
            </CardSubtitle>
            <CardText>
            <Button>Detalles</Button>

            </CardText>
           
          </CardBody>
        </Card>
        <Card >
          <CardImg
            top
            src={require("assets/img/EMPLAYE NEGRO.png")}
            width="250"
            height="300"
          />
          <CardBody>
            <CardTitle>Emplaye negro</CardTitle>
            <CardSubtitle>18 pulgadas por 800 pies</CardSubtitle>
            <CardText>
            <Button>Detalles</Button>

            </CardText>
          
          </CardBody>
        </Card>
      </CardDeck>
     </Container>
    </div>
    </>
  );
 
};
export default MasVendido;
