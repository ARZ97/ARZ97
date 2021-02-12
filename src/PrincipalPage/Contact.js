import NavbarColor from "components/Navbars/NavbarSolid.js";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "components/Items/Card/Card.js";
import CardHeader from "components/Items/Card/CardHeader.js";
import CardFooter from "components/Items/Card/CardFooter.js";
import Button from "components/Items/CustomButtons/Button.js";
import CardBody from "components/Items/Card/CardBody.js";
import GridItem from "components/Items/Grid/GridItem.js";
import CustomInput from "components/Items/CustomInput/CustomInput.js";
import Map from "components/Maps/Map.js";
import DarkFooter from "components/Footers/DarkFooter.js";
import GridContainer from "components/Items/Grid/GridContainer.js";
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
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={5}>
                        <CustomInput
                          style={{ color: "#000000" }}
                          labelText="Correo de contacto"
                          id="email-disable"
                          formControlProps={{
                            fullWidth: true,
                          }}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={5}>
                        <CustomInput
                          labelText="Telefono"
                          id="telfono"
                          formControlProps={{
                            fullWidth: true,
                          }}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={5}>
                        <CustomInput
                          labelText="Nombre"
                          id="username"
                          formControlProps={{
                            fullWidth: true,
                          }}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={6}>
                        <CustomInput
                          labelText="Motivo de contacto ( Cotizacion, Otro)"
                          id="Type-error"
                          formControlProps={{
                            fullWidth: true,
                          }}
                        />
                      </GridItem>
                    </GridContainer>

                    <GridContainer>
                      <GridItem xs={12} sm={12} md={12}>
                        <CustomInput
                          labelText="Mensaje"
                          id="mensaje"
                          formControlProps={{
                            fullWidth: true,
                          }}
                          inputProps={{
                            multiline: true,
                            rows: 5,
                          }}
                        />
                      </GridItem>
                    </GridContainer>
                  </CardBody>
                  <CardFooter>
                    <Button color="warning">Enviar</Button>
                  </CardFooter>
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
