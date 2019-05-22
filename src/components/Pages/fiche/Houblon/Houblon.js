import React from "react";
import { MDBCard, MDBCardHeader, MDBCardBody, MDBTableEditable } from "mdbreact";
import AjoutHoublon from "./AjoutHoublon";
import PostAjout from "./PostAjout";

const columns = ["Quantité moût", "densité plein", "pH plein", "ajout houblons et additifs"];

const data = [
  ["", "", "", ""]
];

const Houblon = props => {
  return (
    <MDBCard style= {{ margin: '1%', fontFamily: 'keto'}}>
      <MDBCardHeader tag="h2" className="text-center text-uppercase py-2" style={{ backgroundColor:"rgb(217,140,7)"}}>
        Bouilloire à houblonner
      </MDBCardHeader>
      <MDBCardBody>

        <MDBTableEditable 
            data={data} 
            sorting={false} 
            columns={columns} 
            striped bordered />

        <AjoutHoublon />

        <PostAjout />

      </MDBCardBody>
    </MDBCard>
  );
};

export default Houblon;