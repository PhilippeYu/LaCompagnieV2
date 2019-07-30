import React from "react";
import { MDBCard, MDBCardHeader, MDBCardBody, MDBDataTable, MDBBtn } from "mdbreact";
//Ne pas oublier d'importer MDBInput si InputButton

class FicheBrassage extends React.Component {
  state = {
    columns: [
      {
        field: 'produit',
        label: 'Produit'
      },

      {
        field: 'date',
        label: 'Date'
      },
      {
        field: 'numerobrassins',
        label: 'N° Brassins'
      },
      {
        field: 'numerofermenteur',
        label: 'N° Fermenteur'
      },
      {
        field: 'delete',
        label: 'Delete',
      }
    ],
    
    rows: [],
    input: ''
  }
  
  componentDidMount() {
    this.getProduit();
  }

//GET DES PRODUITS
  getProduit = () => {
    fetch("http://localhost:3001/fiche_brassage", {
      method: "GET",
    })
      .then(res => res.json())
      .then(json => {
        let rows = [];
        json.data.forEach(item => rows.push({
          produit: item.nomProduit,
          date: item.dateBrassage,
          numerobrassins: item.numBrassins,
          numerofermenteur: item.numFermenteur,
          delete: <MDBBtn onClick={() => this.deleteProduit(item.nomProduit)}>Remove</MDBBtn>
        }));

        this.setState({ rows });
      })
      .catch(err => console.error(err));
  }

//ADD DES PRODUITS
    addProduit = () => {
    fetch("http://localhost:3001/fiche_brassage", {
      method: "POST",
      body: JSON.stringify({
        produit: this.state.input
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        if (res.ok) this.getProduit();
      })
      .catch(err => console.error(err));
  }

  updateInput = (value) => this.setState({ input: value });

//DELETE DES PRODUITS
  deleteProduit = (id) => {
    fetch(`https://man-movies-api.herokuapp.com/movies/${id}`, {
      method: "DELETE"
    })
      .then(res => {
        if (res.ok) this.getProduit();
      })
      .catch(err => console.error(err));
  }

  render () {
    return (
      <MDBCard style= {{fontFamily: 'keto', fontSize: '50px'}}>
        <MDBCardHeader tag="h2" className="text-center text-uppercase py-2" style={{ backgroundColor:"rgb(217,140,7)"}}>
          Fiche de Brassage
        </MDBCardHeader>
        
        <MDBCardBody>
        <MDBDataTable
          style= {{ textAlign: "center", }}
          paging={false}
          searching={false}
          bordered
          hover
          editable
          striped
          sortable={false}
          data={{ columns: this.state.columns, rows: this.state.rows }}
        />

{/*       <MDBInput value={this.state.input} getValue={this.updateInput} label="Ajout produit" />
          <MDBBtn onClick={this.addProduit} disabled={!this.state.input.length}>Add item</MDBBtn>
    */}
        </MDBCardBody>
      </MDBCard>
    );
  };
}

export default FicheBrassage;