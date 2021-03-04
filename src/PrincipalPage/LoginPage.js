import React,{useState}from "react";
import back from "assets/img/WEB.png";
import avatar from "assets/img/reactlogo.png";
  import { Switch, Route, BrowserRouter,Redirect, Link} from "react-router-dom";
import Admin from "./../layouts/Admin.js";
import {NavLink} from "reactstrap"

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
 
  Container,
  Col,
} from "reactstrap";

// core components
import Navbar from "../components/Navbars/IndexNavbar.js";
  

function LoginPage() {
  const [email, setEmail] =useState("");
  const [password, setPassword] =useState("");

  React.useEffect(() => {
    document.body.classList.add("login-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("login-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
 
  const submit = ()=>{
  if(password=="administrador2020"){
             return (    <NavLink to="/admin" tag={Link}> </NavLink>        
             );
  }return null;
  };

return (
    <>
      <Navbar />
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: back,
          }}
        ></div>
        <div className="content">
          <Container>
            <Col className="ml-auto mr-auto" md="4">
              <Card className="card-login card-plain">
                    <CardHeader className="text-center">
                    <div className="container">
                      <img
                        alt="..."
                        src={avatar}
                        width="170px"
                        height="150px"
                      ></img>
                    </div>
                  </CardHeader>
                  <CardBody>
                   
                        <label>
                            <strong>Correo:</strong>
                          </label>
                          <input
                            type="email"
                          id="email"
                          className="form-control"

                            placeholder="Correo"
                            name="email"
                            onChange={(e)=>setEmail(e.target.value)}
                          />
                      <br/>
                    
                   
                      <label>
                            <strong>Contraseña:</strong>
                          </label>
                          <input
                            type="password"
                            autoFocus
                            className="form-control"
                            required
                            placeholder="Contraseña"
                            name="password"
                            onChange={(e)=>setPassword(e.target.value)}

                          />
                   
                  </CardBody>
                  <CardFooter className="text-center">
                   
                  <NavLink to="/admin" tag={Link}> <button
                              type="submit"

                             className="btn btn-info"
                            onClick={submit}
                            > Iniciar Sesion</button> </NavLink>
                   </CardFooter>
                </Card>
            </Col>
          </Container>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
