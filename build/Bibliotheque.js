"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bibliotheque = void 0;
const TransactionEmprunt_1 = require("./TransactionEmprunt");
class Bibliotheque {
    constructor() {
        this._livres = [];
        this._emprunteurs = [];
        this._transactionsEmprunt = [];
    }
    get livres() {
        return this._livres;
    }
    get emprunteurs() {
        return this._emprunteurs;
    }
    get transactionsEmprunt() {
        return this._transactionsEmprunt;
    }
    ajouterLivre(livre) {
        this._livres.push(livre);
    }
    ajouterEmprunteur(emprunteur) {
        this._emprunteurs.push(emprunteur);
    }
    ajouterTransactionEmprunt(transactionEmprunt) {
        transactionEmprunt.calculDateRetour();
        this._transactionsEmprunt.push(transactionEmprunt);
    }
    emprunter(livre, emprunteur) {
        const disponibile = livre.verifierDisponibilite();
        if (!disponibile) {
            throw new Error("Livre indisponible");
        }
        if (emprunteur.compterLivres() >= 3) {
            throw new Error("L'emprunteur a déjà trop emprunté");
        }
        emprunteur.ajouterLivre(livre);
        livre.mettreEnIndisponible();
        const transaction = new TransactionEmprunt_1.TransactionEmprunt(livre, emprunteur, new Date());
        this.ajouterTransactionEmprunt(transaction);
    }
    retourner(livre) {
        // Récupération de la transaction associé au livre
        const transactionIndex = this.transactionsEmprunt.findIndex((transaction) => transaction._livre.titre === livre.titre);
        // Récupération de l'emprunteur du livre + suppression du livre au niveau de l'entité de l'emprunteur
        const emprunteur = this.transactionsEmprunt[transactionIndex].emprunteur;
        emprunteur.retirerLivre(livre);
        // Suppression de la transaction
        this.transactionsEmprunt.splice(transactionIndex, 1);
        livre.mettreEnDisponible();
    }
}
exports.Bibliotheque = Bibliotheque;
