import React from "react";
import { MDBCard, MDBCardHeader, MDBCardBody, MDBDataTable, MDBBtn, MDBInput } from "mdbreact";
//import axios from 'axios';


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
        field: 'year',
        label: 'Year'
      },
      {
        field: 'genre',
        label: 'Genre'
      },
      {
        field: 'delete',
        label: 'Delete',
        width: 50
      }
    ],
    rows: [],
    input: ''
  }
  
  componentDidMount() {
    this.getMovies();
  }

  getMovies = () => {
    fetch("https://man-movies-api.herokuapp.com/movies", {
      method: "GET",
    })
      .then(res => res.json())
      .then(json => {
        let rows = [];
        json.movies.forEach(item => rows.push({
          id: item._id,
          title: item.title,
          year: item.year,
          genre: item.genre,
          delete: <MDBBtn onClick={() => this.deleteMovie(item._id)}>Remove</MDBBtn>
        }));

        this.setState({ rows });
      })
      .catch(err => console.error(err));
  }

  addMovie = () => {
    fetch("https://man-movies-api.herokuapp.com/movies", {
      method: "POST",
      body: JSON.stringify({
        title: this.state.input
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        if (res.ok) this.getMovies();
      })
      .catch(err => console.error(err));
  }

  updateInput = (value) => this.setState({ input: value });

  deleteMovie = (id) => {
    fetch(`https://man-movies-api.herokuapp.com/movies/${id}`, {
      method: "DELETE"
    })
      .then(res => {
        if (res.ok) this.getMovies();
      })
      .catch(err => console.error(err));
  }

  render () {
    return (
      <MDBCard style= {{fontFamily: 'keto'}}>
        <MDBCardHeader tag="h2" className="text-center text-uppercase py-2" style={{ backgroundColor:"rgb(217,140,7)"}}>
          Fiche de Brassage
        </MDBCardHeader>
        <MDBCardBody>
        <MDBDataTable
          paging={false}
          searching={false}
          bordered
          hover
          data={{ columns: this.state.columns, rows: this.state.rows }}
        />

        <MDBInput value={this.state.input} getValue={this.updateInput} label="Insert movie title" />
        <MDBBtn onClick={this.addMovie} disabled={!this.state.input.length}>Add item</MDBBtn>

        </MDBCardBody>
      </MDBCard>
    );
  };
}

export default FicheBrassage;