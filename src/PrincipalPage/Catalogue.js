import NavbarColor from "components/Navbars/NavbarSolid.js";
import React from "react";
 import CardCalogue from "components/Items/Card/CardCatalogue.js";
import DarkFooter from "components/Footers/DarkFooter.js";
import {
  
  Container
} from "reactstrap";

 
 export default function Contact() {
 
 var json=[
   {
     nombre: "producto1",
     descripcion: "lorem ipsum njfdbfjnbvd jhfbg jdfhjdfhvjdfh   vbdjfhvbdj fhbvdjfhvbdfj hbfd",
     precio: 100

   },
   {
    nombre: "producto2",
    descripcion: "lorem ipsum njfdbfjnbvd jhfbg jdfhjdfhvjdfh   vbdjfhvbdj fhbvdjfhvbdfj hbfd",
    precio: 100

  },
  {
    nombre: "producto3",
    descripcion: "lorem ipsum njfdbfjnbvd jhfbg jdfhjdfhvjdfh   vbdjfhvbdj fhbvdjfhvbdfj hbfd",
    precio: 100

  },
  {
    nombre: "producto4",
    descripcion: "lorem ipsum njfdbfjnbvd jhfbg jdfhjdfhvjdfh   vbdjfhvbdj fhbvdjfhvbdfj hbfd",
    precio: 100

  },
  {
    nombre: "producto1",
    descripcion: "lorem ipsum njfdbfjnbvd jhfbg jdfhjdfhvjdfh   vbdjfhvbdj fhbvdjfhvbdfj hbfd",
    precio: 100

  },
  {
   nombre: "producto2",
   descripcion: "lorem ipsum njfdbfjnbvd jhfbg jdfhjdfhvjdfh   vbdjfhvbdj fhbvdjfhvbdfj hbfd",
   precio: 100

 },
 {
   nombre: "producto3",
   descripcion: "lorem ipsum njfdbfjnbvd jhfbg jdfhjdfhvjdfh   vbdjfhvbdj fhbvdjfhvbdfj hbfd",
   precio: 100

 },
 {
   nombre: "producto4",
   descripcion: "lorem ipsum njfdbfjnbvd jhfbg jdfhjdfhvjdfh   vbdjfhvbdj fhbvdjfhvbdfj hbfd",
   precio: 100

 }
 ]

  React.useEffect(() => {
    document.body.classList.add("Catalogue");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("Catalogue");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);

  return (
    <>
      <NavbarColor />
      <Container style={{paddingTop: "80px"}}>
    <CardCalogue data={json}/>
    </Container>
       <DarkFooter />
    </>
  );
}
