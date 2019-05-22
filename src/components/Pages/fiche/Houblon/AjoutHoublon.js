import React from "react";
import { MDBCard, MDBCardHeader, MDBCardBody, MDBTableEditable } from "mdbreact";

const columns = ["Nom", "Quantité", "Temps", "Note"];

const data = [
  ["", "", "", ""],
];

const AjoutHoublon = props => {
  return (
    <MDBCard style= {{fontFamily: 'keto'}}>
      <MDBCardHeader tag="h8" className="text-center text-uppercase py-1" color="green">
        Ajout houblons et additifs
      </MDBCardHeader>
      <MDBCardBody>

        <MDBTableEditable 
            data={data} 
            sorting={false} 
            columns={columns} 
            striped bordered />
      
      </MDBCardBody>
    </MDBCard>
  );
};

export default AjoutHoublon;