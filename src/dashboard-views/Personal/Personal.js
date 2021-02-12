import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "components/Items/Card/Card.js";
import CardHeader from "components/Items/Card/CardHeader.js";
import CardFooter from "components/Items/Card/CardFooter.js";
import Button from "components/Items/CustomButtons/Button.js";
import CardBody from "components/Items/Card/CardBody.js";
import GridItem from "components/Items/Grid/GridItem.js";
import CustomInput from "components/Items/CustomInput/CustomInput.js";
import GridContainer from "components/Items/Grid/GridContainer.js";
import Table from "components/Items/Table/TableProducts.js";
import { Container } from "reactstrap";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
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

const useStyles = makeStyles(styles);

export default function Providers() {
  const classes = useStyles();
  return (
    <>
      <GridContainer>
     
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="info">
              <h4 className={classes.cardTitleWhite}>Personal </h4>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="info"
                tableHead={[
                  "Nombre",
                  "Telefono",
                  "Email",
                  "Status",
                  "Rol",
                ]}
                tableData={[
                  ["Dakota Rice", "Niger", "Oud-Turnhout", "$36,738", "Niger"],
                  [
                    "Minerva Hooper",
                    "Curaçao",
                    "Sinaai-Waas",
                    "$23,789",
                    "Niger",
                  ],
                  [
                    "Sage Rodriguez",
                    "Netherlands",
                    "Baileux",
                    "$56,142",
                    "Niger",
                  ],
                  [
                    "Philip Chaney",
                    "Korea, South",
                    "Overland Park",
                    "$38,735",
                    "Niger",
                  ],
                  [
                    "Doris Greene",
                    "Malawi",
                    "Feldkirchen in Kärnten",
                    "$63,542",
                    "Niger",
                  ],
                  ["Mason Porter", "Chile", "Gloucester", "$78,615", "Niger"],
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
      

          </GridContainer>
          <Container>
        
        <GridItem xs={10} sm={10} md={10}  >
          <Card >
            <CardHeader color="info">
              <h4 className={classes.cardTitleWhite}>Agregar usuario</h4>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={5}>
                  <CustomInput
                    labelText="Empresa"
                    id="empresa"
                    formControlProps={{
                      fullWidth: false,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={5}>
                  <CustomInput
                    labelText="Nombre"
                    id="nombre"
                    formControlProps={{
                      fullWidth: false,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={5}>
                  <CustomInput
                    labelText="Telefono"
                    id="telefono"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={5}>
                  <CustomInput
                    labelText="Email"
                    id="email"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={5}>
                  <CustomInput
                    labelText="Direccion"
                    id="Direccion"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button color="info">Agregar</Button>
            </CardFooter>
          </Card>
        </GridItem>
        </Container>
       
    </>
  );
}
