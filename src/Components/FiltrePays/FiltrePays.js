import React from "react";

const FiltrePays = (props) => {

  const mesCss = `btn ${props.color} `
  return (
    
      <button 
      style={props.active ? {background: "#333", border: "none"} : {opacity:1}}
      className={mesCss} 
      onClick={props.click}>
      {props.name} </button>
   
  );
};
export default FiltrePays;
