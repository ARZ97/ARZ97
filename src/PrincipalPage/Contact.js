import NavbarColor from "components/Navbars/NavbarSolid.js";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "components/Items/Card/Card.js";
import CardHeader from "components/Items/Card/CardHeader.js";
  import CardBody from "components/Items/Card/CardBody.js";
import GridItem from "components/Items/Grid/GridItem.js";
import {Row, Col} from "reactstrap";
import Map from "components/Maps/Map.js";
import DarkFooter from "components/Footers/DarkFooter.js";
import GridContainer from "components/Items/Grid/GridContainer.js";
import emailjs from "emailjs-com";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "15px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "4px",
    textDecoration: "none",
  },
};
const mapURL = "https://maps.googleapis.com/maps/api/js?key=AIzaSyB3MydkVbi1Qecct75ePtDqVerNDszGJuQ&callback=initMap";

const useStyles = makeStyles(styles);
export default function Contact() {
  const classes = useStyles();
 

  React.useEffect(() => {
    document.body.classList.add("Contact");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("Contact");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "EmplaoService",
        "template_iwrj79q",
        e.target,
        "user_Ps7cjMlQH2YGa4kMNgZBV"
      )

      .then(
        (result) => {
          alert("Mensaje enviado! 👍");
        },
        (error) => {
          alert(error.message);
        }
      );
    e.target.reset();
  }
  return (
    <>
      <NavbarColor />
      <div className="row" style={{paddingTop: "80px"}} >
        <div className="col-lg-6"  >
          <div className="embed-responsive "style={{padding: "15px",paddingTop: "0px"}}>
            <GridContainer className="embed-responsive">
              <GridItem xs={12} sm={12} md={12}>
                <Card>
 
                  <CardHeader color="warning">
                    <h4 className={classes.cardTitleWhite}>Contactanos</h4>
                    <p className={classes.cardCategoryWhite}>
                      Pide tu cotizacion{" "}
                    </p>
                  </CardHeader>
                  <CardBody>
                  <form onSubmit={sendEmail}>
                      <Row lg="5">
                        <Col lg="12" sm="12" form-group="mx-auto">
                          <label>
                            <strong>Nombre:</strong>
                          </label>
                          <input
                            type="text"
                            autoFocus
                            className="form-control"
                            required
                            placeholder="nombre"
                            name="nombre"
                          />
                          <br />
                        </Col>
                        <Col lg="12" sm="12" form-group="mx-auto">
                          <label>
                            <strong>Motivo:</strong>
                          </label>
                          <input
                            type="text"
                            autoFocus
                            className="form-control"
                            required
                            placeholder="Motivo"
                            name="motivo"
                          />
                          <br />
                        </Col>
                        <Col lg="12" sm="12" form-group="mx-auto">
                          <label>
                            <strong>Correo:</strong>
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            required
                            placeholder="correo"
                            name="correoContact"
                          />
                          <br />
                        </Col>
                        <Col lg="12" sm="12" form-group="mx-auto">
                          <label>
                            <strong>Telefono:</strong>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            required
                            placeholder="Telefono"
                            name="telefono"
                          />
                          <br />
                        </Col>

                        <Col lg="12" sm="12" form-group="mx-auto">
                          <label>
                            <strong>Mensaje:</strong>
                          </label>
                          <textarea
                            className="form-control"
                            id=""
                            cols="30"
                            rows="8"
                            required
                            placeholder="Escribe aqui tu mensaje"
                            name="mensaje"
                          ></textarea>
                          <br />
                        </Col>
                        <Col lg="12" sm="12" form-group="mx-auto">
                          <input
                            type="submit"
                            className="btn btn-info"
                            value="Enviar"
                          ></input>
                        </Col>
                      </Row>
                    </form>
                  </CardBody>
                  
                 </Card>
              </GridItem>
            </GridContainer>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="typography-line" style={{ padding: "0%" }}>
            <p className="blockquote blockquote-primary">
              <bold>Sucursal Zapopan Centro</bold>
              <br></br>
              Calle 16 de Septiembre 213B, Zapopan, 45100 Zapopan, Jal.
              <br></br>
              Telefono: 3318889803
              <br></br>
              Horario de Atencion en Sucursal
              <br></br>
              Lunes-Sabado 9:00am-7:00pm
            </p>
          </div>
          <h3>Encuentranos en zapopan centro!</h3>
          <Map
            googleMapURL={mapURL}
            containerElement={<div style={{ height: "300px" }} />}
            markers={{ lat: 20.72367301111884, lng: -103.39318875275175 }}
            mapElement={<div style={{ height: "100%" }} />}
            loadingElement={<p>Cargando... </p>}
          />
        </div>
      </div>
      <br></br><br></br>
      <DarkFooter />
    </>
  );
}
