import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
// core components
import styles from "../../../assets/jss/material-dashboard-react/components/tableStyle.js";
import Card from "components/Items/Card/Card.js";
import CardHeader from "components/Items/Card/CardHeader.js";
import CardFooter from "components/Items/Card/CardFooter.js";
import Button from "components/Items/CustomButtons/Button.js";
import CardBody from "components/Items/Card/CardBody.js";
import GridItem from "components/Items/Grid/GridItem.js";
import CustomInput from "components/Items/CustomInput/CustomInput.js";
import GridContainer from "components/Items/Grid/GridContainer.js";
import { Delete } from "@material-ui/icons";
const useStyles = makeStyles(styles);
var v1,
  v2,
  v3,
  v4,
  v5 = null;
var h1,
  h2,
  h3,
  h4,
  h5 = null;

export default function CustomTable(props) {
  const classes = useStyles();
  const [showEdith, setShowEdith] = React.useState(false);

  const keyEdit = null;
  const { tableHead, tableData, tableHeaderColor } = props;
  const [dataTable, setData] = React.useState(tableData);

  function valores(tableData, keyEdit) {
    var p = tableData[keyEdit];
    v1 = p[0];
    v2 = p[2];
    v3 = p[1];
    v4 = p[3];
    v5 = p[4];
    console.log(tableHead);
    h1 = tableHead[0];
    h2 = tableHead[2];
    h3 = tableHead[1];
    h4 = tableHead[3];
    h5 = tableHead[4];
  }
  function eliminar( keyEdit) {
    var p = tableData[keyEdit];
   
     setData((i) =>
    tableData.filter((i, index) => index !== keyEdit) );
    console.log(dataTable);

  
  }
  return (
    <>
      <div className={classes.tableResponsive}>
        <Table className={classes.table}>
          {tableHead !== undefined ? (
            <TableHead className={classes[tableHeaderColor + "TableHeader"]}>
              <TableRow className={classes.tableHeadRow}>
                {tableHead.map((prop, key) => {
                  return (
                    <TableCell
                      className={
                        classes.tableCell + " " + classes.tableHeadCell
                      }
                      key={key}
                    >
                      {prop}
                    </TableCell>
                  );
                })}

                <TableCell className="text-info">Editar</TableCell>
                <TableCell className="text-info">Eliminar</TableCell>
              </TableRow>
            </TableHead>
          ) : null}
          <TableBody>
            {dataTable.map((prop, key) => {
              return (
                <TableRow key={key} className={classes.tableBodyRow}>
                  {prop.map((prop, key) => {
                    return (
                      <TableCell className={classes.tableCell} key={key}>
                        {prop}
                      </TableCell>
                    );
                  })}
                  <TableCell>
                    {
                      <button
                        type="button"
                        class="btn btn-info btn-xs"
                        onClick={() => {
                          setShowEdith(!showEdith);
                          valores(tableData, key);
                        }}
                      >
                        Editar
                      </button>
                    }
                  </TableCell>
                  <TableCell>
                    {
                      <button
                        type="button"
                        class="btn btn-danger btn-xs"
                        onClick={() => {
                          
                         eliminar(key);
                        }}
                      >
                        Eliminar
                      </button>
                    }
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>

      {showEdith ? (
        <GridItem xs={10} sm={10} md={10}>
          <Card>
            <CardHeader color="success">
              <h4 className={classes.cardTitleWhite}>Editar </h4>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={5}>
                  <label>
                    <strong>{h1}</strong>
                  </label>
                  <input
                    type="text"
                    defaultValue={v1}
                    className="form-control"
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={5}>
                  <label>
                    <strong>{h2}</strong>
                  </label>
                  <input
                    type="text"
                    defaultValue={v2}
                    className="form-control"
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={5}>
                  <label>
                    <strong>{h3}</strong>
                  </label>
                  <input
                    type="text"
                    defaultValue={v3}
                    className="form-control"
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={5}>
                  <label>
                    <strong>{h4}</strong>
                  </label>
                  <input
                    type="text"
                    defaultValue={v4}
                    className="form-control"
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={5}>
                  <label>
                    <strong>{h5}</strong>
                  </label>
                  <input
                    type="text"
                    defaultValue={v5}
                    className="form-control"
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button color="success">Aceptar</Button>
            </CardFooter>
          </Card>
        </GridItem>
      ) : null}
    </>
  );
}

CustomTable.defaultProps = {
  tableHeaderColor: "gray",
};

CustomTable.propTypes = {
  tableHeaderColor: PropTypes.oneOf([
    "warning",
    "primary",
    "danger",
    "success",
    "info",
    "rose",
    "gray",
  ]),
  tableHead: PropTypes.arrayOf(PropTypes.string),
  tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
};
