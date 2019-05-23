import React from "react";
import { MDBCard, MDBCardHeader, MDBCardBody, MDBTableEditable } from "mdbreact";
import FicheFermentation from "./FicheFermentation";


const columns = ["Produit", "Date Brassage", "N° Brassins", "N° Fermenteur"];

const data = [
  ["", "", "", ""],
];

const InfoFermentation = props => {
  return (
    <div>
        <MDBCard style= {{fontFamily: 'keto'}}>
        <MDBCardHeader tag="h2" className="text-center text-uppercase py-2" style={{ backgroundColor:"rgb(217,140,7)"}}>
            Fiche de fermentation/conditionnement
        </MDBCardHeader>
        <MDBCardBody>
            <MDBTableEditable data={data} columns={columns} striped bordered />
        </MDBCardBody>

        <FicheFermentation />
        </MDBCard>
    </div>
  );
};

export default InfoFermentation;