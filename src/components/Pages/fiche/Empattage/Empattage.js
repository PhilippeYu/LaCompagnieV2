import React from "react";
import { MDBCard, MDBCardHeader, MDBCardBody, MDBTableEditable } from "mdbreact";
import MaltEtCereales from "./MaltEtCereales";

const columns = ["Quantité d'eau", "Ratio eau/matière", "T°", "pH avant conversion"];

const data = [
  ["", "", "", ""],

  
];

const Empattage = props => {
  return (
    <MDBCard style= {{fontFamily: 'keto'}}>
      <MDBCardHeader tag="h2" className="text-center text-uppercase py-2" style={{ backgroundColor:"rgb(217,140,7)"}}>
        Empattage
      </MDBCardHeader>
      <MDBCardBody>
        
        <MDBTableEditable 
            data={data} 
            sorting={false} 
            columns={columns} 
            striped bordered />
        
        <MaltEtCereales />
      
      </MDBCardBody>
      
    </MDBCard>
  );
};

export default Empattage;