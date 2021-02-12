/*eslint-disable*/
import React from "react";
import Load from "@material-ui/icons/Loop";
import GridItem from "components/Items/Grid/GridItem.js";
import GridContainer from "components/Items/Grid/GridContainer.js";

import { Container } from "reactstrap";

export default function PortalCo() {
  return (
    <>
      <div class="mx-auto" style={{ width: "200px" }}>
        <span></span>
        <blockquote>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h2 className="blockquote blockquote-primary">
            En Construccion..
            <Load />
            <br></br>
          </h2>
        </blockquote>
      </div>
    </>
  );
}
