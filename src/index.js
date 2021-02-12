/*

=========================================================
* Now UI Kit React - v1.4.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-kit-react
* Copyright 2020 Creative Tim (http://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-kit-react/blob/master/LICENSE.md)

* Designed by www.invisionapp.com Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.4.0";
import "assets/demo/demo.css?v=1.4.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.4.0";
// pages for this kit
import Index from "views/Index.js";
 import LoginPage from "./PrincipalPage/LoginPage.js";
 import Contact from "./PrincipalPage/Contact.js";
import Admin from "layouts/Admin.js";
import Company from "./PrincipalPage/Company.js";
import Catalogue from "./PrincipalPage/Catalogue.js";


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Switch>
        <Route path="/index" render={(props) => <Index {...props} />} />
        <Route
          path="/Catalogue"
          render={(props) => <Catalogue {...props} />}
        />
        <Route
          path="/Company"
          render={(props) => <Company {...props} />}
        />
        <Route
          path="/Contact"
          render={(props) => <Contact {...props} />}
        />
        <Route
          path="/login"
          render={(props) => <LoginPage {...props} />}
        />
        <Route
          path="/admin"
          render={(props) => <Admin {...props} />}
        />

        <Redirect to="/index" />
        <Redirect from="/" to="/index" />
      </Switch>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);