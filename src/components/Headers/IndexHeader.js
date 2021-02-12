/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/header.jpg") + ")",
          }}
          ref={pageHeader}
        ></div>
        <Container>
      
        <div class="container h-100">
        <div class="row justify-content-center h-75">
            <div class="col-sm-8 align-self-center text-center">
         
            <img
              alt="..."
              
              className="img-fluid"
              width="500" 
              height="500"
              src={require("assets/img/now-logo.png")}
            ></img>
            </div>
            </div>
            </div>

          </Container>
      </div>
    </>
  );
}

export default IndexHeader;
