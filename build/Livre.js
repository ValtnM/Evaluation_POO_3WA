"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livre = void 0;
class Livre {
    constructor(titre, auteur, annee, disponible) {
        this.titre = titre;
        this.auteur = auteur;
        this.annee = annee;
        this.disponible = disponible;
    }
    mettreEnDisponible() {
        this.disponible = true;
    }
    mettreEnIndisponible() {
        this.disponible = false;
    }
    verifierDisponibilite() {
        if (!this.disponible) {
            return false;
        }
        return true;
    }
}
exports.Livre = Livre;
