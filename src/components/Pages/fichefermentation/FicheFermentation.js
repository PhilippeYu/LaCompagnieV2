import React from "react";
import { MDBCard, MDBCardHeader, MDBCardBody, MDBTableEditable } from "mdbreact";

const columns = ["Date", "Heure", "Plato", "Température", "pH", "Levure", "HLP", "Note"];

const data = [
  ["", "", "", "", "", "", "", ""],
];

const FicheFermentation = props => {
  return (
    <MDBCard style= {{fontFamily: 'keto', marginTop: '2%'}}>
      <MDBCardHeader tag="h2" className="text-center text-uppercase py-2" style={{ backgroundColor:"rgb(217,140,7)"}}>
        Fiche de Fermentation
      </MDBCardHeader>
      <MDBCardBody>
        <MDBTableEditable data={data} columns={columns} striped bordered />
      </MDBCardBody>
    </MDBCard>
  );
};

export default FicheFermentation;