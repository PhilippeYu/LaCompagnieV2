import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { MDBSideNavCat, MDBSideNavNav, MDBSideNav, MDBSideNavLink, MDBContainer, MDBIcon, MDBBtn } from "mdbreact";

import logo_la_compagnie_black2 from '../../img/logo_la_compagnie_black2.png'



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
        <MDBContainer>

          <MDBBtn onClick={this.sidenavToggle("Left")}><MDBIcon size="lg" icon="bars" /></MDBBtn>

          {/* the left SideNav: */}
            <MDBSideNav
                logo={logo_la_compagnie_black2}
                hidden
                triggerOpening={this.state.sideNavLeft}
                breakWidth={1300}
                className=""
                style={{
                  backgroundColor: 'rgb(35,31,32)'
                }}
            >
                
                <MDBSideNavNav>
 
                  <MDBSideNavCat
                      name="Fiche de brassage"
                      id="Fiche de brassage"
                      icon="hand-pointer"
                      href="/fiche_globale"
                  >
                  </MDBSideNavCat>
                  <MDBSideNavCat
                      name="Fiche de fermentation"
                      id="Fiche de brassage"
                      icon="hand-pointer"
                      href="/fiche_fermentation"
                  >
                  </MDBSideNavCat>

                  <MDBSideNavCat name="About" id="about" icon="eye">
                      <MDBSideNavLink href="/fiche_fermentation">Fiche de fermentation</MDBSideNavLink>
                      <MDBSideNavLink>Monthly meetings</MDBSideNavLink>
                  </MDBSideNavCat>
                  
                  <MDBSideNavCat name="Contact me" id="contact-me" icon="envelope">
                      <MDBSideNavLink>FAQ</MDBSideNavLink>
                      <MDBSideNavLink>Write a message</MDBSideNavLink>
                  </MDBSideNavCat>
                </MDBSideNavNav>
            </MDBSideNav>
          </MDBContainer>
      </Router>
    );
  }
}

export default SideNav;