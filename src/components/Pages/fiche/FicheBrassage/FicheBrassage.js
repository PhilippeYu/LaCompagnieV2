import React from "react";
import { MDBCard, MDBCardHeader, MDBCardBody, MDBTableEditable } from "mdbreact";

const columns = ["Produit", "Date du brassage", "Numéro brassins", " Numéro du fermenteur"];

const data = [
  ["", "", "", ""],
];

const FicheBrassage = props => {
  return (
    <MDBCard style= {{fontFamily: 'keto', margin: '1%'}}>
      <MDBCardHeader tag="h2" className="text-center text-uppercase py-2" style={{ backgroundColor:"rgb(217,140,7)"}}>
        Fiche de Brassage
      </MDBCardHeader>
      <MDBCardBody>
        <MDBTableEditable data={data} columns={columns} striped bordered />
      </MDBCardBody>
    </MDBCard>
  );
};

export default FicheBrassage;