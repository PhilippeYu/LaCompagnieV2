import React from "react";
import { MDBCard, MDBCardHeader, MDBCardBody, MDBTableEditable } from "mdbreact";

const columns = ["Paramètres", "Data", "Note"];

const data = [
  ["Quantité d'eau", "", ""],
  ["Première densité", "", ""],
  ["Premier pH", "", ""],
  ["Dernière densité", "", ""],
  ["Dernier pH", "", ""],
  ["Durée filtration", "", ""],
];

const EauAspersion = props => {
  return (
    <MDBCard style= {{fontFamily: 'keto'}}>
      <MDBCardHeader tag="h2" className="text-center text-uppercase py-2" style={{ backgroundColor:"rgb(217,140,7)"}}>
        Eau d'aspersion
      </MDBCardHeader>
      <MDBCardBody>
        <MDBTableEditable data={data} sorting={false} columns={columns} striped bordered />
      </MDBCardBody>
    </MDBCard>
  );
};

export default EauAspersion;