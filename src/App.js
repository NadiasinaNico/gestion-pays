import React from "react";
import PayListe from "./Components/PayListe/PayListe";
import Erreur from "./Components/Erreur/Erreur";

import axios from "axios";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

class App extends React.Component {
 
  render() {
    return (
      <BrowserRouter>
      <Switch>
      <PayListe />
       <Route render={() =>  <Erreur />} />
      </Switch>
       {/* <Routes path="/" exact render={() =>  <h1> Page d'accueil </h1>} /> 
        <Routes path="/pays" exact component={PayListe} />   */}
        
      </BrowserRouter>
    );
  }
}
export default App;
