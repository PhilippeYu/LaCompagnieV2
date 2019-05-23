import React from "react";
import { MDBCard, MDBCardHeader, MDBCardBody, MDBTableEditable } from "mdbreact";

const columns = ["Ca", "Cl", "SO4", "HCO3", "Mg"];

const data = [
  ["", "", "", "", ""],

  
];

const Profil = props => {
  return (
    <MDBCard style= {{fontFamily: 'keto'}}>
      <MDBCardHeader tag="h2" className="text-center text-uppercase py-2" style={{ backgroundColor:"rgb(217,140,7)"}}> 
        Profil
      </MDBCardHeader>
      <MDBCardBody>
        <MDBTableEditable data={data} sorting={false} columns={columns} striped bordered />
      </MDBCardBody>
    </MDBCard>
  );
};

export default Profil;