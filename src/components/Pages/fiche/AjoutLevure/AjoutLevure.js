import React from "react";
import { MDBCard, MDBCardHeader, MDBCardBody, MDBTableEditable } from "mdbreact";

const columns = ["Nom", "Quantité", "Compte de levures", "Note"];

const rows = [
  ["", "", "", ""]
];

const AjoutLevure = props => {
  return (
    <MDBCard style= {{ fontFamily: 'keto', marginTop: '3%'}}>
      <MDBCardHeader tag="h2" className="text-center text-uppercase py-2" style={{ backgroundColor:"rgb(217,140,7)"}}>
        Ajout de levure
      </MDBCardHeader>
      <MDBCardBody>

        <MDBTableEditable 
            data={rows} 
            columns={columns} 
            striped bordered />

      </MDBCardBody>
    </MDBCard>
  );
};

export default AjoutLevure;