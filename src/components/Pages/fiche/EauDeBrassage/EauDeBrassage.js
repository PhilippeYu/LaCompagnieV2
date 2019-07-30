import React from "react";
import { MDBCard, MDBCardHeader, MDBCardBody, MDBTableEditable } from "mdbreact";

class EauDeBrassage extends React.Component {
  state = {
    columns : 
    ["pH avant correction", 
    "Nom de l'acide", 
    "Ajout d'acide", 
    "pH après correction", 
    "Température"],
    
    data : [
      ["", "", "", "", ""]
    ]
  }


  render () {
    return (
      <MDBCard style= {{fontFamily: 'keto', marginTop: '3%'}}>
        <MDBCardHeader tag="h2" className="text-center text-uppercase py-2" style={{ backgroundColor:"rgb(217,140,7)"}}>
          Eau de Brassage
        </MDBCardHeader>
        <MDBCardBody>
          <MDBTableEditable data={this.state.data} columns={this.state.columns} striped bordered />
        </MDBCardBody>
      </MDBCard>
    );
  };
}
export default EauDeBrassage;