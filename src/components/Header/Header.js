import React, { Component } from "react";

import './Header.css';

import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

import logo_la_compagnie from '../../img/logo_la_compagnie_black.png';

import SideNav from "../SideNav/SideNav";

class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
        <MDBContainer 
        style= {{
            backgroundColor:"rgb(35,31,32)",
            maxWidth:"100%",
            margin: '0%',
        }}>
            <MDBRow>
            
                <MDBCol
                style={{
                    marginTop:'auto',
                    marginBottom:'auto'
                }}>
                    <SideNav />
                </MDBCol>
                
                <MDBCol>
                    <img className="logo-lacompagnie" src={logo_la_compagnie} alt='logo compagnie'/>
                </MDBCol>

                <MDBCol>

                </MDBCol>

            </MDBRow>
        </MDBContainer>
    );
  }
}

export default NavbarPage;