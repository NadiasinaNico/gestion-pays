import React from "react";
import PayListe from "./Components/PayListe/PayListe";
import Erreur from "./Components/Erreur/Erreur";

import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<PayListe />} />
          <Route path="/pays" exact element={<PayListe />} />
           <Route  element={<Erreur />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
export default App;
