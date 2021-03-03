import NavbarColor from "components/Navbars/NavbarSolid.js";
import React from "react";
 import CardCalogue from "components/Items/Card/CardCatalogue.js";
import DarkFooter from "components/Footers/DarkFooter.js";
import {inventario} from "data/inventario.js";
import {
  
  Container
} from "reactstrap";

 
 export default function Contact() {
 
 var json=[
   {
     nombre: "Aplicador De Pelicula",
     descripcion: "Aplicador De Pelicula 18¨ De Acero",
     img: "https://firebasestorage.googleapis.com/v0/b/emplaosystem-1b605.appspot.com/o/catalogo%2FAPLICADOR%20DE%20ACERO.png?alt=media&token=1be4ad56-d896-45e5-b09e-093e76eb2c5f",
     precio: "1150.00"

   },
   {
    nombre: "Despachador De Cinta Janel ",
    descripcion: "lorem ipsum njfdbfjnbvd jhfbg jdfhjdfhvjdfh   vbdjfhvbdj fhbvdjfhvbdfj hbfd",
    img: "https://firebasestorage.googleapis.com/v0/b/emplaosystem-1b605.appspot.com/o/catalogo%2FAplicador%20de%20Cinta%20Janel.png?alt=media&token=8216b242-f8b4-4fd9-80a0-3798479253e0",
    precio: 220
  },
  {
    nombre: "producto3",
    descripcion: "lorem ipsum njfdbfjnbvd jhfbg jdfhjdfhvjdfh   vbdjfhvbdj fhbvdjfhvbdfj hbfd",
    img: "https://firebasestorage.googleapis.com/v0/b/emplaosystem-1b605.appspot.com/o/catalogo%2FAPLICADOR%20DE%20ACERO.png?alt=media&token=1be4ad56-d896-45e5-b09e-093e76eb2c5f",
    precio: 100

  },
  {
    nombre: "producto4",
    descripcion: "lorem ipsum njfdbfjnbvd jhfbg jdfhjdfhvjdfh   vbdjfhvbdj fhbvdjfhvbdfj hbfd",
    img: "https://firebasestorage.googleapis.com/v0/b/emplaosystem-1b605.appspot.com/o/catalogo%2FAPLICADOR%20DE%20ACERO.png?alt=media&token=1be4ad56-d896-45e5-b09e-093e76eb2c5f",
    precio: 100

  },
  {
    nombre: "producto1",
    descripcion: "lorem ipsum njfdbfjnbvd jhfbg jdfhjdfhvjdfh   vbdjfhvbdj fhbvdjfhvbdfj hbfd",
    img: "https://firebasestorage.googleapis.com/v0/b/emplaosystem-1b605.appspot.com/o/catalogo%2FAPLICADOR%20DE%20ACERO.png?alt=media&token=1be4ad56-d896-45e5-b09e-093e76eb2c5f",
    precio: 100

  },
  {
   nombre: "producto2",
   descripcion: "lorem ipsum njfdbfjnbvd jhfbg jdfhjdfhvjdfh   vbdjfhvbdj fhbvdjfhvbdfj hbfd",
   img: "https://firebasestorage.googleapis.com/v0/b/emplaosystem-1b605.appspot.com/o/catalogo%2FAPLICADOR%20DE%20ACERO.png?alt=media&token=1be4ad56-d896-45e5-b09e-093e76eb2c5f",
   precio: 100

 },
 {
   nombre: "producto3",
   descripcion: "lorem ipsum njfdbfjnbvd jhfbg jdfhjdfhvjdfh   vbdjfhvbdj fhbvdjfhvbdfj hbfd",
   img: "https://firebasestorage.googleapis.com/v0/b/emplaosystem-1b605.appspot.com/o/catalogo%2FAPLICADOR%20DE%20ACERO.png?alt=media&token=1be4ad56-d896-45e5-b09e-093e76eb2c5f",
   precio: 100

 },
 {
   nombre: "producto4",
   descripcion: "lorem ipsum njfdbfjnbvd jhfbg jdfhjdfhvjdfh   vbdjfhvbdj fhbvdjfhvbdfj hbfd",
   img: "https://firebasestorage.googleapis.com/v0/b/emplaosystem-1b605.appspot.com/o/catalogo%2FAPLICADOR%20DE%20ACERO.png?alt=media&token=1be4ad56-d896-45e5-b09e-093e76eb2c5f",
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
    <CardCalogue data={inventario}/>
    </Container>
       <DarkFooter />
    </>
  );
}
