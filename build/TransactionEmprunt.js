"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionEmprunt = void 0;
class TransactionEmprunt {
    constructor(_livre, _emprunteur, _date) {
        this._livre = _livre;
        this._emprunteur = _emprunteur;
        this._date = _date;
        this.dateRetour = new Date();
    }
    get emprunteur() {
        return this._emprunteur;
    }
    calculDateRetour() {
        const nouvelleDate = new Date(this._date);
        nouvelleDate.setMonth(nouvelleDate.getMonth() + 1);
        this.dateRetour = nouvelleDate;
    }
}
exports.TransactionEmprunt = TransactionEmprunt;
