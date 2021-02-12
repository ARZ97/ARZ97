import React from "react";

// reactstrap components
import { Container} from "reactstrap";

// core components

function VideosCom() {
  return (
    <>
      <div className="section">
        <Container> 
        <h1 className="text-center">DEMOSTRACION DE PRODUCTO</h1>

          <div className="row">
            <div className="col-lg-6">
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                title="FrameVideo"
                  className="embed-responsive-item"
                  src={"https://www.youtube.com/embed/37x-e1nZ4gA"}
                        
                ></iframe>
              </div>
            </div>
            <div className="col-lg-6">
                <h5 className="feature-title">Video del mes</h5>

                <p>En embalajes y plasticos de occidente no solo proveemos el material que requieras para tus envios, tambien buscamos soluciones y que nuestros clientas tengan la informacion necesaria de los productos que distribuimos.</p>
            </div>
          </div>
        </Container>
        <hr className="my-10"></hr>

      </div>
    </>
  );
}

export default VideosCom;
