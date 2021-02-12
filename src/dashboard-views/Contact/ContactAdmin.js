import React from "react";
import { makeStyles } from "@material-ui/core/styles";
 import Card from "components/Items/Card/Card.js"
import CardHeader from "components/Items/Card/CardHeader.js"
import CardFooter from "components/Items/Card/CardFooter.js"
import Button from "components/Items/CustomButtons/Button.js"
import CardBody from "components/Items/Card/CardBody.js"
import GridItem from "components/Items/Grid/GridItem.js"
import CustomInput from "components/Items/CustomInput/CustomInput.js"

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

const useStyles = makeStyles(styles);
export default function ContactAdmin() {
  const classes = useStyles();

  return (

    <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="warning">
              <h4 className={classes.cardTitleWhite}>Soporte</h4>
              <p className={classes.cardCategoryWhite}>¿Necesitas ayuda?</p>
            </CardHeader>
            <CardBody>
              <GridContainer>
              <GridItem xs={12} sm={12} md={3}>
                   <CustomInput
                   style={{ color: "#000000" }}
                    labelText="Correo de contacto:"
                    id="email-disable"
                    formControlProps={{
                      fullWidth: false
                    }}
                    inputProps={{
                      disabled: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                   <CustomInput
                   
                    labelText=""
                    id="email-page"
                    formControlProps={{
                      fullWidth: true
                    }}
                   
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Usuario (Nombre)"
                    id="username"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Motivo de contacto"
                    id="Type-error"
                    formControlProps={{
                      fullWidth: true
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
                      fullWidth: true
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 5
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
  );
}
