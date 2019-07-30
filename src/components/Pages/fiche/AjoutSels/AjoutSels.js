import React from "react";
import { MDBCard, MDBCardHeader, MDBCardBody, MDBTableEditable } from "mdbreact";

const columns = ["Nom du sel", "Quantité", "Comment"];

const data = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
  
];

const AjoutSels = props => {
  return (
    <MDBCard style= {{fontFamily: 'keto', marginTop: '3%'}}>
      <MDBCardHeader tag="h2" className="text-center text-uppercase py-2" style={{ backgroundColor:"rgb(217,140,7)"}}>
        Ajout des sels
      </MDBCardHeader>
      <MDBCardBody>
        <MDBTableEditable data={data} columns={columns} striped bordered />
      </MDBCardBody>
    </MDBCard>
  );
};

export default AjoutSels;