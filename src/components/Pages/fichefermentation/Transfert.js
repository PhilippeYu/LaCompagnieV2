import React from "react";
import { MDBCard, MDBCardHeader, MDBCardBody, MDBTableEditable } from "mdbreact";

const columns = ["Date", "Heure", "Plato", "Température", "pH", "Quantité", "Alcool", "Note"];

const data = [
  ["", "", "", "°C", "", "", "%", ""],
];

const Transfert = props => {
  return (
    <MDBCard style= {{fontFamily: 'keto'}}>
      <MDBCardHeader tag="h2" className="text-center text-uppercase py-2" style={{ backgroundColor:"rgb(217,140,7)"}}>
        Transfert
      </MDBCardHeader>
      <MDBCardBody>
        <MDBTableEditable data={data} columns={columns} striped bordered />
      </MDBCardBody>
    </MDBCard>
  );
};

export default Transfert;