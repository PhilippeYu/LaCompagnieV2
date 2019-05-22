import React, { Component } from 'react';

//import des components de la fiche de brassage
import FicheBrassage from './FicheBrassage/FicheBrassage';
import EauDeBrassage from './EauDeBrassage/EauDeBrassage';
import AjoutSels from './AjoutSels/AjoutSels';
import Profil from './Profil/Profil';
import Empattage from './Empattage/Empattage';
import Conversion from './Conversion/Conversion';
import EauAspersion from './EauAspersion/EauAspersion';
import Houblon from './Houblon/Houblon';
import Refroidissement from './Refroidissement/Refroidissement';
import AjoutLevure from './AjoutLevure/AjoutLevure';

class FicheGlobale extends Component {
    render() {
        return (
            <div>
                <FicheBrassage />
                <EauDeBrassage />
                <AjoutSels />
                <Profil />
                <Empattage />
                <Conversion />
                <EauAspersion />
                <Houblon />
                <Refroidissement />
                <AjoutLevure />
            </div>
        );
    }
}

export default FicheGlobale;