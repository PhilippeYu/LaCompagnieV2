import React from "react";
import { Route, Switch } from "react-router-dom";
import FicheGlobale from "./components/Pages/fiche/FicheGlobale";
import FicheFermentation from "./components/Pages/fichefermentation/FicheFermentation";



class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/fiche_globale" component={FicheGlobale} />
                <Route exact path="/fiche_fermentation" component={FicheFermentation} />
                <Route render={function () {
                    return <h1>Not Found</h1>
                }} />
            </Switch>

        );
    }
}

export default Routes;