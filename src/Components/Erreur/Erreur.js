import React from "react";
import Error from "../../Images/error404.png";

const Erreur = () => {
  return (
    <div className="alert alert-danger">
      <img src={Error} alt="erreur 404" />
      <div>La page demandée n'existe pas</div>
    </div>
  );
};
export default Erreur;
