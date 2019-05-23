import React from "react";
import { MDBContainer, MDBTabPane,   MDBTabContent, MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";
import InfoFermentation from "../Pages/fichefermentation/InfoFermentation";

import './TabsFermentation.css'


class TabsFermentation extends React.Component {

    state = {
        activeItemPills: "1"
    }

    togglePills = tab => e => {
        if (this.state.activePills !== tab) {
        this.setState({
            activeItemPills: tab
        });
        }
    }

    render () {
        return (
            <MDBContainer>
                <MDBNav pills color="red" className="nav-justified ">
                <MDBNavItem>
                    <MDBNavLink
                    to="#"
                    className={this.state.activeItemPills === "1" ? "active" : ""}
                    onClick={this.togglePills("1")}
                    >
                    Cuve 1
                    </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                    <MDBNavLink
                    to="#"
                    className={this.state.activeItemPills === "2" ? "active" : ""}
                    onClick={this.togglePills("2")}
                    >
                    Cuve 2
                    </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                    <MDBNavLink
                    to="#"
                    className={this.state.activeItemPills === "3" ? "active" : ""}
                    onClick={this.togglePills("3")}
                    >
                    Cuve 3
                    </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                    <MDBNavLink
                    to="#"
                    className={this.state.activeItemPills === "4" ? "active" : ""}
                    onClick={this.togglePills("4")}
                    >
                    Cuve 4
                    </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                    <MDBNavLink
                    to="#"
                    className={this.state.activeItemPills === "5" ? "active" : ""}
                    onClick={this.togglePills("5")}
                    >
                    Cuve 5
                    </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                    <MDBNavLink
                    to="#"
                    className={this.state.activeItemPills === "6" ? "active" : ""}
                    onClick={this.togglePills("6")}
                    >
                    Cuve 6
                    </MDBNavLink>
                </MDBNavItem>
                </MDBNav>

{/* Add here the contents inside tabs */}

                <MDBTabContent activeItem={this.state.activeItemPills}>
                <MDBTabPane tabId="1">
                    <InfoFermentation />
                </MDBTabPane>
                <MDBTabPane tabId="2">
                    <InfoFermentation />
                </MDBTabPane>
                <MDBTabPane tabId="3">
                    <InfoFermentation />
                </MDBTabPane>
                <MDBTabPane tabId="4">
                    <InfoFermentation />
                </MDBTabPane>
                <MDBTabPane tabId="5">
                    <InfoFermentation />
                </MDBTabPane>
                <MDBTabPane tabId="6">
                    <InfoFermentation />
                </MDBTabPane>
                </MDBTabContent>
            </MDBContainer>
        );
    }
}

export default TabsFermentation;