import React from "react";
import { MDBContainer, MDBTabPane,   MDBTabContent, MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";
import FicheGlobale from "../Pages/fiche/FicheGlobale";

import './TabsBrassage.css'


class TabsBrassage extends React.Component {

    state = {
        items:{
            pills : "1",
            tabs: "1"
        }
    }

    togglePills = (type, tab) => e => {
        const items = { ...this.state.items };

        if (items[type] !== tab) {
            items[type] = tab;

            this.setState({
                items
            });
        }
    };

    render () {
        return (
            <MDBContainer>
                <MDBNav pills color="red" className="nav-justified ">
                    <MDBNavItem>
                        <MDBNavLink
                        to="#1"
                        className={this.state.items.pills === "1" ? "active" : ""}
                        onClick={this.togglePills("pills", "1")}
                        >
                        Cuve 1
                        </MDBNavLink>
                    </MDBNavItem>

                    <MDBNavItem>
                        <MDBNavLink
                        to="#2"
                        className={this.state.items.pills === "2" ? "active" : ""}
                        onClick={this.togglePills("pills", "2")}
                        >
                        Cuve 2
                        </MDBNavLink>
                    </MDBNavItem>

                    <MDBNavItem>
                        <MDBNavLink
                        to="#3"
                        className={this.state.items.pills === "3" ? "active" : ""}
                        onClick={this.togglePills("pills", "3")}
                        >
                        Cuve 3
                        </MDBNavLink>
                    </MDBNavItem>

                    <MDBNavItem>
                        <MDBNavLink
                        to="#4"
                        className={this.state.items.pills === "4" ? "active" : ""}
                        onClick={this.togglePills("pills", "4")}
                        >
                        Cuve 4
                        </MDBNavLink>
                    </MDBNavItem>

                    <MDBNavItem>
                        <MDBNavLink
                        to="#5"
                        className={this.state.items.pills === "5" ? "active" : ""}
                        onClick={this.togglePills("pills", "5")}
                        >
                        Cuve 5
                        </MDBNavLink>
                    </MDBNavItem>

                    <MDBNavItem>
                        <MDBNavLink
                        to="#6"
                        className={this.state.items.pills === "6" ? "active" : ""}
                        onClick={this.togglePills("pills", "6")}
                        >
                        Cuve 6
                        </MDBNavLink>
                    </MDBNavItem>
                </MDBNav>

{/* Add here the contents inside tabs */}

                <MDBTabContent activeItem={this.state.items.tabs}>
                    <MDBTabPane tabId="1">
                        <FicheGlobale />
                    </MDBTabPane>

                    <MDBTabPane tabId="2">
                        <FicheGlobale />
                    </MDBTabPane>

                    <MDBTabPane tabId="3">
                        <FicheGlobale />
                    </MDBTabPane>

                    <MDBTabPane tabId="4">
                        <FicheGlobale />
                    </MDBTabPane>

                    <MDBTabPane tabId="5">
                        <FicheGlobale />
                    </MDBTabPane>

                    <MDBTabPane tabId="6">
                        <FicheGlobale />
                    </MDBTabPane>
                </MDBTabContent>
            </MDBContainer>
        );
    }
}

export default TabsBrassage;