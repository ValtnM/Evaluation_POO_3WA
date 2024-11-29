import { Emprunteur } from "./Emprunteur";
import { Livre } from "./Livre";

export class TransactionEmprunt {
  public dateRetour: Date = new Date();
  constructor(
    public _livre: Livre,
    public _emprunteur: Emprunteur,
    public _date: Date
  ) {}

  get emprunteur() {
    return this._emprunteur
  }

  calculDateRetour() {
    const nouvelleDate = new Date(this._date);
    nouvelleDate.setMonth(nouvelleDate.getMonth() + 1)
    this.dateRetour = nouvelleDate;
  }

  
}
