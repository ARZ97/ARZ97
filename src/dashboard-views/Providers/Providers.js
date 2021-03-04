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
import {proveedores} from "data/proveedores"

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
  const [showAdd,setShowAdd]=React.useState(false);
  const [showEdith]=React.useState(false);

  return (
    <>
      <GridContainer>
      <Container>
        <button 
        onClick={()=>setShowAdd(!showAdd)}
        >Agregar</button>
            {showAdd? 
            <GridItem xs={10} sm={10} md={10}  >
            <Card >
              <CardHeader color="info">
                <h4 className={classes.cardTitleWhite}>Agregar provedor</h4>
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
           :null}
            {showEdith?
            <GridItem xs={10} sm={10} md={10}  >
              <Card >
                <CardHeader color="success">
                  <h4 className={classes.cardTitleWhite}>Editar provedor</h4>
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
                  <Button color="success">Aceptar</Button>
                </CardFooter>
              </Card>
            </GridItem>
             :null}
            </Container>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Tabla de provedores </h4>
            </CardHeader>
            <CardBody>
              <Table
               showEdith={false}
               setShowEdith={React.useState()}
                tableHeaderColor="primary"
                tableHead={[
                  "Empresa",
                  "Nombre",
                  "Telefono",
                  "Email",
                  "Direccion",
                ]}
                tableData={proveedores}
              />
            </CardBody>
          </Card>
        </GridItem>
      

          </GridContainer>
       
    </>
  );
}
