import React from "react";

const Pays = (props) => {

  return (
    <div className="container ">
      <div className="row border p-2 m-2">
        <div className="col-5">
          <div>
            <img src={props.drapeau.png} width="70%" alt="drapeau"/>
          </div>
        </div>
        <div className="col-7">
         <h6 className="text-danger"> Pays:  {props.nom.common} </h6>
          <div>
            <small className="text-primary"> capital: </small>
            {props.capital}
          </div>
          <div>
            <small className="text-success"> Continents: </small>
            {props.continents}
          </div>
          <div>
            <strong>Population: </strong> {props.population}
          </div>
          <div> Region: {props.region}</div>
        </div>
      </div>
    </div>
  );
};
export default Pays;
