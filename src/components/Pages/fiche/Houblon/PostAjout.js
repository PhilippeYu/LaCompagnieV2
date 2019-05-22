import React from "react";
import { MDBCard, MDBCardHeader, MDBCardBody, MDBTableEditable } from "mdbreact";

const columns = ["Densité finale", "pH final", "Quantité", "Evaporation"];

const data = [
  ["", "", "", ""],
];

const PostAjout = props => {
  return (
    <MDBCard style= {{fontFamily: 'keto', marginTop: '1%'}}>
      <MDBCardHeader tag="h8" className="text-center text-uppercase py-1" color="green">
        Après ajout
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

export default PostAjout;