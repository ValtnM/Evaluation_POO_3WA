"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Emprunteur = void 0;
class Emprunteur {
    constructor(nom, email) {
        this.nom = nom;
        this.email = email;
        this.livres = [];
    }
    ajouterLivre(livre) {
        this.livres.push(livre);
    }
    retirerLivre(livre) {
        const livreIndex = this.livres.findIndex(livreDetails => livreDetails.titre === livre.titre);
        this.livres.splice(livreIndex, 1);
    }
    compterLivres() {
        return this.livres.length;
    }
}
exports.Emprunteur = Emprunteur;
