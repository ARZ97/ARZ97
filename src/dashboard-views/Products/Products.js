import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "components/Items/Card/Card.js";
import CardHeader from "components/Items/Card/CardHeader.js";
import CardBody from "components/Items/Card/CardBody.js";
import GridItem from "components/Items/Grid/GridItem.js";
 import GridContainer from "components/Items/Grid/GridContainer.js";

import TableProduct from "components/Items/Table/TableProducts.js";

 
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

export default function Product() {
  const classes = useStyles();

  return (
    <>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="info">
              <h4 className={classes.cardTitleWhite}>Stock de Productos </h4>
            </CardHeader>
            <CardBody>
              <TableProduct
               
                tableHeaderColor="primary"
                tableHead={[
                  "Nombre",
                  "Categoria", 
                   "Stock",
                  "Precio",
                  "Mayoreo",
                  "Costo",
                ]}
                tableData={[
                  ["Dakota Rice", "Niger", "Niger","Oud-Turnhout", "$36,738", "$36,738"],
                  ["Minerva Hooper", "Curaçao", "Niger","Sinaai-Waas", "$23,789", "$36,738"],
                  ["Sage Rodriguez", "Netherlands","Niger", "Baileux", "$56,142", "$36,738"],
                  ["Philip Chaney", "Korea, South","Niger", "Overland Park", "$38,735", "$36,738"],
                  ["Doris Greene","Malawi","Niger","Feldkirchen in Kärnten","$63,542", "$36,738" ],
                  ["Mason Porter", "Chile","Niger", "Gloucester", "$78,615", "$36,738"],
                ]}
                
              />
              
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Administrar Promociones </h4>
            </CardHeader>
            <CardBody>
              <TableProduct      tableHeaderColor="primary"
                tableHead={[
                  "Producto",
                  "costo",
                  "Precio",
                  "Precio de promocion",
                  "Img ",
                ]}
                tableData={[
                  ["Dakota Rice", "Niger", "Oud-Turnhout", "$36,738", "Oud-Turnhout" ],
                  [
                    "Minerva Hooper",
                    "Curaçao",
                    "Sinaai-Waas",
                    "$23,789", "Oud-Turnhout"
                    
                  ],
                  [
                    "Sage Rodriguez",
                    "Netherlands",
                    "Baileux",
                    "$56,142", "Oud-Turnhout"
                    
                  ],
                  [
                    "Philip Chaney",
                    "Korea, South",
                    "Overland Park",
                    "$38,735", "Oud-Turnhout"
                    
                  ],
                  [
                    "Doris Greene",
                    "Malawi",
                    "Feldkirchen in Kärnten",
                    "$63,542", "Oud-Turnhout"
                    
                  ],
                  ["Mason Porter", "Chile", "Gloucester", "$78,615", "Oud-Turnhout"],
                ]
              }
                
              />
              
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={6} sm={6} md={6}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>
                Productos mas Vendidos{" "}
              </h4>
            </CardHeader>
            <CardBody>
              <TableProduct
                tableHeaderColor="primary"
                tableHead={["Nombre", "Promocion", "precio"]}
                tableData={[
                  ["Dakota Rice", "Niger", "Oud-Turnhout"],
                  ["Minerva Hooper", "Curaçao", "Sinaai-Waas"],
                  ["Sage Rodriguez", "Netherlands", "Baileux"],
                  ["Philip Chaney", "Korea, South", "Overland Park"],
                  ["Doris Greene","Malawi","Feldkirchen in Kärnten"],
                  ["Mason Porter", "Chile", "Gloucester"],
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={6} sm={6} md={6}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>
                Productos Menos Vendidos{" "}
              </h4>
            </CardHeader>
            <CardBody>
              <TableProduct
                tableHeaderColor="primary"
                tableHead={["Nombre", "Promocion", "Precio"]}
                tableData={[
                  ["Dakota Rice", "Niger", "Oud-Turnhout"],
                  ["Minerva Hooper", "Curaçao", "Sinaai-Waas"],
                  ["Sage Rodriguez", "Netherlands", "Baileux"],
                  ["Philip Chaney", "Korea, South", "Overland Park"],
                  ["Doris Greene","Malawi","Feldkirchen in Kärnten"],
                  ["Mason Porter", "Chile", "Gloucester"],
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </>
  );
}
