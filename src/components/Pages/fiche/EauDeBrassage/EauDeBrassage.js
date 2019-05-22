import React from "react";
import { MDBCard, MDBCardHeader, MDBCardBody, MDBTableEditable } from "mdbreact";

const columns = ["Paramètre", "Data", "Comment"];

const data = [
  ["pH avant correction", "", ""],
  ["Nom de l'acide", "", ""],
  ["Ajout d'acide", "", ""],
  ["pH après correction", "", ""],
  ["Température", "", ""],
];

const EauDeBrassage = props => {
  return (
    <MDBCard style= {{fontFamily: 'keto', margin: '1%'}}>
      <MDBCardHeader tag="h2" className="text-center text-uppercase py-2" style={{ backgroundColor:"rgb(217,140,7)"}}>
        Eau de Brassage
      </MDBCardHeader>
      <MDBCardBody>
        <MDBTableEditable data={data} columns={columns} striped bordered />
      </MDBCardBody>
    </MDBCard>
  );
};

export default EauDeBrassage;