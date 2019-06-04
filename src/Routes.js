import React from "react";
import { Route, Switch } from "react-router-dom";

import TabsFermentation from "./components/Tabs/TabsFermentation";
import TabsBrassage from "./components/Tabs/TabsBrassage";



class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/fiche_globale" component={TabsBrassage} />
                <Route exact path="/fiche_fermentation" component={TabsFermentation} />
                <Route render={function () {
                    return <h1>Not Found</h1>
                }} />
            </Switch>

        );
    }
}

export default Routes;