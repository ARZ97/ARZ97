import React, {useState, useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "components/Items/Card/Card.js";
import CardHeader from "components/Items/Card/CardHeader.js";
import CardBody from "components/Items/Card/CardBody.js";
import GridItem from "components/Items/Grid/GridItem.js";
import GridContainer from "components/Items/Grid/GridContainer.js";
import Table from "components/Items/Table/Table.js";
import TableBot from "components/Items/Table/TableDAProd.js";
import TableMns from "components/Items/Table/TableMns.js";
import {inventarioData} from "data/inventarioData"

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

export default function Dashboard() {
  const classes = useStyles();
  return (
    <>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="success">
              <h4 className={classes.cardTitleWhite}>Stock de Productos </h4>
            </CardHeader>
            <CardBody>
              <TableBot
               
                tableHeaderColor="success"
                tableHead={[
                  "Nombre",
                  "Descripcion", 
                  "Provedor",
                  "Stock",
                  "Editar",
                ]}
                tableData={inventarioData}
                
              />
              
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="info">
              <h4 className={classes.cardTitleWhite}>Lista de interesados </h4>
            </CardHeader>
            <CardBody>
              <TableMns
                tableHeaderColor="info"
                tableHead={[
                  "Nombre",
                  "Asunto",
                  "Mensaje",
                  "Telefono",
                ]}
                tableData={[
                  ["Dakota Rice", "Niger", "Oud-Turnhout", "$36,738" ],
                  [
                    "Minerva Hooper",
                    "Curaçao",
                    "Sinaai-Waas",
                    "$23,789",
                    
                  ],
                  [
                    "Sage Rodriguez",
                    "Netherlands",
                    "Baileux",
                    "$56,142",
                    
                  ],
                  [
                    "Philip Chaney",
                    "Korea, South",
                    "Overland Park",
                    "$38,735",
                    
                  ],
                  [
                    "Doris Greene",
                    "Malawi",
                    "Feldkirchen in Kärnten",
                    "$63,542",
                    
                  ],
                  ["Mason Porter", "Chile", "Gloucester", "$78,615",],
                ]
              }
                
              />
              
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={6} sm={6} md={6}>
          <Card>
            <CardHeader color="warning">
              <h4 className={classes.cardTitleWhite}>
                Productos mas Vendidos{" "}
              </h4>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="warning"
                tableHead={["Nombre", "Descripcion", "Provedor", "Stock"]}
                tableData={[
                  ["Dakota Rice", "Niger", "Oud-Turnhout", "$36,738"],
                  ["Minerva Hooper", "Curaçao", "Sinaai-Waas", "$23,789"],
                  ["Sage Rodriguez", "Netherlands", "Baileux", "$56,142"],
                  ["Philip Chaney", "Korea, South", "Overland Park", "$38,735"],
                  [
                    "Doris Greene",
                    "Malawi",
                    "Feldkirchen in Kärnten",
                    "$63,542",
                  ],
                  ["Mason Porter", "Chile", "Gloucester", "$78,615"],
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={6} sm={6} md={6}>
          <Card>
            <CardHeader color="danger">
              <h4 className={classes.cardTitleWhite}>
                Productos Menos Vendidos{" "}
              </h4>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="danger"
                tableHead={["Nombre", "Descripcion", "Provedor", "Stock"]}
                tableData={[
                  ["Dakota Rice", "Niger", "Oud-Turnhout", "$36,738"],
                  ["Minerva Hooper", "Curaçao", "Sinaai-Waas", "$23,789"],
                  ["Sage Rodriguez", "Netherlands", "Baileux", "$56,142"],
                  ["Philip Chaney", "Korea, South", "Overland Park", "$38,735"],
                  ["Doris Greene","Malawi","Feldkirchen in Kärnten","$63,542",],
                  ["Mason Porter", "Chile", "Gloucester", "$78,615"],
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </>
  );
}
