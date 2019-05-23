import React from "react";
import { MDBCard, MDBCardHeader, MDBCardBody, MDBTableEditable } from "mdbreact";
import Transfert from "./Transfert";

const columns = ["Date", "Heure", "Plato", "Température", "pH", "Levure", "HLP", "Note"];

const data = [
  ["", "", "", "°C", "", "", "", ""],
];

const FicheFermentation = props => {
  return (
    <MDBCard style= {{fontFamily: 'keto'}}>
      <MDBCardHeader tag="h2" className="text-center text-uppercase py-2" style={{ backgroundColor:"rgb(217,140,7)"}}>
        Relevé du contrôle
      </MDBCardHeader>
      <MDBCardBody>
        <MDBTableEditable data={data} columns={columns} striped bordered />
      </MDBCardBody>

      <Transfert />
    </MDBCard>
  );
};

export default FicheFermentation;