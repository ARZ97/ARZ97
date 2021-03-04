import React from "react";
  import Card from "components/Items/Card/Card.js"
import CardHeader from "components/Items/Card/CardHeader.js"
 
import CardBody from "components/Items/Card/CardBody.js"
import GridItem from "components/Items/Grid/GridItem.js"
 import {Row, Col} from "reactstrap";
 import { makeStyles } from "@material-ui/core/styles";
 import emailjs from "emailjs-com";

import GridContainer from "components/Items/Grid/GridContainer.js"

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "4px",
    textDecoration: "none"
  }
};

 export default function ContactAdmin() {
  const useStyles = makeStyles(styles);

  const classes = useStyles();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "EmplaoService",
        "template_kpdp12s",
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

    <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="warning">
              <h4 className={classes.cardTitleWhite}>Soporte</h4>
              <p className={classes.cardCategoryWhite}>¿Necesitas ayuda?</p>
            </CardHeader>
            <CardBody>
            <form onSubmit={sendEmail}>
                      <Row lg="12">
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
  );
}
