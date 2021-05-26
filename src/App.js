import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.componet";
import ShopPage from "./pages/shop/shop.componet";
import Header from "./components/header/header.component";
import SignInAndSignPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        {" "}
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignPage} />
      </Switch>
    </div>
  );
}

export default App;
