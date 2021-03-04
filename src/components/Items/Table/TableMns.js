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
import {Row, Col} from "reactstrap";
import GridContainer from "components/Items/Grid/GridContainer.js";
import emailjs from "emailjs-com";

const useStyles = makeStyles(styles);

var v1 ,
  v2,
  v3,
  v4,
  v5 = null;
  var h1 ,
  h2,
  h3,
  h4,
  h5 = null;
export default function CustomTable(props ) {
  const classes = useStyles();
  const [showContest, setContest] = React.useState(false);
  function valores(tableData, keyEdit) {
    var p = tableData[keyEdit];
    v1 = p[0];
    v2 = p[2];
    v3 = p[1];
    v4 = p[3];
    v5 = p[4];
    console.log(tableHead)
h1=tableHead[0];
h2=tableHead[2];
h3=tableHead[1];
h4=tableHead[3];
h5=tableHead[4];
  }
  const { tableHead, tableData, tableHeaderColor } = props;
  
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
  return (<>
    <div className={classes.tableResponsive}>
      <Table className={classes.table}>
        {tableHead !== undefined ? (
          <TableHead className={classes[tableHeaderColor + "TableHeader"]}>
            <TableRow className={classes.tableHeadRow}>
              {tableHead.map((prop, key) => {
                return (
                  <TableCell
                    className={classes.tableCell + " " + classes.tableHeadCell}
                    key={key}
                  >
                    {prop}
                  </TableCell>
                 
                );
               
              }  )}

              <TableCell className="text-info"
               onClick={() => {
                setContest(!showContest);
                valores(tableData);
              }}
              >Contestar</TableCell>
              <TableCell  className="text-info" >Eliminar</TableCell>
            
            </TableRow>
          </TableHead>
        ) : null}
        <TableBody>
          {tableData.map((prop, key) => {
            return (
              <TableRow key={key} className={classes.tableBodyRow}>
                {prop.map((prop, key) => {
                  return (
                    <TableCell className={classes.tableCell} key={key}>
                      {prop}
                    </TableCell>
                  );
                })}
             <TableCell  >{ <button type="button"  onClick={() => {
                          setContest(!showContest);
                          valores(tableData, key);
                        }}class="btn btn-success btn-xs">Contestar</button>}</TableCell>
             <TableCell  >{ <button type="button" class="btn btn-danger btn-xs">Eliminar</button>}</TableCell>

              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
    {showContest ? (
        <GridItem xs={10} sm={10} md={10}>
          <Card>
            <CardHeader color="info">
              <h4 className={classes.cardTitleWhite}>               
                   <strong>Envio de correo para{v1}</strong>
 </h4>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={5}>
                <form onSubmit={sendEmail}>
                      <Row lg="12">
                        <Col lg="12" sm="12" form-group="mx-auto">
                          <label>
                            <strong>Nombre:</strong>
                          </label>
                          <input
                            type="text"
                            autoFocus
                            value={v1}
                            className="form-control"
                            required
                            placeholder="nombre"
                            name="nombre"
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
                            defaultValue={v2}
                            placeholder="correo"
                            name="correoContact"
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
                </GridItem>
              </GridContainer>
            </CardBody>
             
          </Card>
        </GridItem>
      ) : null}
    </>
  );
}

CustomTable.defaultProps = {
  tableHeaderColor: "gray"
};

CustomTable.propTypes = {
  tableHeaderColor: PropTypes.oneOf([
    "warning",
    "primary",
    "danger",
    "success",
    "info",
    "rose",
    "gray"
  ]),
  tableHead: PropTypes.arrayOf(PropTypes.string),
  tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
};
