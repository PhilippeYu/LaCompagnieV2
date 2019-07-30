import React from "react";
import { MDBCard, MDBCardHeader, MDBCardBody, MDBTableEditable } from "mdbreact";

const columns = ["Température", "Durée", "Test Iode"];

const data = [
  ["", "", ""],
];

const Conversion = props => {
  return (
    <MDBCard style= {{ fontFamily: 'keto', marginTop: '3%'}}>
      <MDBCardHeader tag="h2" className="text-center text-uppercase py-2" style={{ backgroundColor:"rgb(217,140,7)"}}>
        Conversion
      </MDBCardHeader>
      <MDBCardBody>
        <MDBTableEditable data={data} sorting={false} columns={columns} striped bordered />
      </MDBCardBody>
    </MDBCard>
  );
};

export default Conversion;