import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { MDBSideNavCat, MDBSideNavNav, MDBSideNav, MDBContainer, MDBIcon, MDBBtn } from "mdbreact";

import './SideNav.css'
//import logo_la_compagnie_black from '../../img/logo_la_compagnie_black.png'
import background_side_nav from '../../img/backsidenav2.jpg'



class SideNav extends Component {
  state = {
    sideNavLeft: false,
  }

  sidenavToggle = sidenavId => () => {
    const sidenavNr = `sideNav${sidenavId}`
    this.setState({
      [sidenavNr]: !this.state[sidenavNr]
    });
  };

  render() {
    return (
      <Router>
        <MDBContainer >

          <MDBBtn onClick={this.sidenavToggle("Left")} style={{backgroundColor:"rgb(217,140,7)"}}>
            <MDBIcon size="lg" icon="bars" />
          </MDBBtn>

          {/* the left SideNav: */}
            <MDBSideNav
                //logo={logo_la_compagnie_black}
                bg={background_side_nav}
                mask='strong'
                hidden
                triggerOpening={this.state.sideNavLeft}
                breakWidth={1300}
                style={{
                  backgroundColor: 'rgb(35,31,32)'
                }}
            >
                
                <MDBSideNavNav>
 
                  <MDBSideNavCat
                      name="Fiche de brassage"
                      id="fichebrassage"
                      icon="beer"
                      href="/fiche_globale"
                  >
                  </MDBSideNavCat>

                  <MDBSideNavCat
                      name="Fiche de fermentation"
                      id="fichefermentation"
                      icon="clipboard"
                      href="/fiche_fermentation"
                  >
                  </MDBSideNavCat>

                  <MDBSideNavCat
                      name="Historique"
                      id="historique"
                      icon="archive"
                      href="/fiche_fermentation"
                  >
                  </MDBSideNavCat>

                  <MDBSideNavCat
                      name="Réglages"
                      id="reglages"
                      icon="cog"
                      href="/fiche_fermentation"
                  >
                  </MDBSideNavCat>


                  
                </MDBSideNavNav>
            </MDBSideNav>
          </MDBContainer>
      </Router>
    );
  }
}

export default SideNav;