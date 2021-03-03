import React,{useState}from "react";
import back from "assets/img/WEB.png";
import avatar from "assets/img/reactlogo.png";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col,
} from "reactstrap";

// core components
import Navbar from "../components/Navbars/IndexNavbar.js";
import firebase from "firebase";

function defaulvalue() {
  return { email: "", password: "" };
}

function LoginPage() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  const [Formdata, setFormdata] = useState(defaulvalue());
  const onSutmit = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(Formdata.email, Formdata.password)
      .then((response) => {        alert(" enviado! 👍");
    })
      .catch(() => { alert("error");});
  }
  const onChange=(e, type)=>{
    setFormdata({...Formdata,[type]:(e) => e.preventDefault.text})
  }
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
                <Form action="" className="form" method="">
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
                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (firstFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons users_circle-08"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="CORREO DE USUARIO"
                        type="text"
                        onFocus={() => setFirstFocus(true)}
                        onBlur={() => setFirstFocus(false)}
                        onChange={(e)=>onChange(e,"email")}

                      ></Input>
                    </InputGroup>
                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (lastFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                         </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="CONTRASEÑA"
                        type="password"
                        onFocus={() => setLastFocus(true)}
                        onBlur={() => setLastFocus(false)}
                        onChange={(e)=>onChange(e,"password")}
                      ></Input>
                    </InputGroup>
                  </CardBody>
                  <CardFooter className="text-center">
                  <input
                            type="submit"
                            className="btn btn-info"
                            value="Enviar"
                            onClick={onSutmit}
                          ></input>
                    <div className="pull-right">
                      <h6>
                        <a
                          className="link"
                          href="CONTACTO"
                          onClick={(e) => e.preventDefault()}
                        >
                          AYUDA?
                        </a>
                      </h6>
                    </div>
                  </CardFooter>
                </Form>
              </Card>
            </Col>
          </Container>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
