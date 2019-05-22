import React from "react";
import { MDBCard, MDBCardHeader, MDBCardBody, MDBTableEditable } from "mdbreact";

const columns = ["Nom", "Quantité", "Comment"];

const data = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

const MaltEtCereales = props => {
  return (
    <MDBCard style= {{fontFamily: 'keto'}}>
      <MDBCardHeader tag="h8" className="text-center text-uppercase py-1" color="green">
        Malt Et Ceréales
      </MDBCardHeader>
      <MDBCardBody>
        <MDBTableEditable data={data} sorting={false} columns={columns} striped bordered />
      </MDBCardBody>
    </MDBCard>
  );
};

export default MaltEtCereales;