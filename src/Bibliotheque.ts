import { Emprunteur } from "./Emprunteur";
import { Livre } from "./Livre";
import { TransactionEmprunt } from "./TransactionEmprunt";

export class Bibliotheque {
  public _livres: Livre[] = [];
  public _emprunteurs: Emprunteur[] = [];
  public _transactionsEmprunt: TransactionEmprunt[] = [];

  get livres() {
    return this._livres;
  }
  get emprunteurs() {
    return this._emprunteurs;
  }
  get transactionsEmprunt() {
    return this._transactionsEmprunt;
  }
 

  ajouterLivre(livre: Livre) {
    this._livres.push(livre);
  }

  ajouterEmprunteur(emprunteur: Emprunteur) {
    this._emprunteurs.push(emprunteur);
  }

  ajouterTransactionEmprunt(transactionEmprunt: TransactionEmprunt) {
    transactionEmprunt.calculDateRetour();
    this._transactionsEmprunt.push(transactionEmprunt);
  }

  emprunter(livre: Livre, emprunteur: Emprunteur) {
    const disponibile = livre.verifierDisponibilite();
    if (!disponibile) {
      throw new Error("Livre indisponible");
    }
    if (emprunteur.compterLivres() >= 3) {
      throw new Error("L'emprunteur a déjà trop emprunté");
    }
    emprunteur.ajouterLivre(livre)
    livre.mettreEnIndisponible();
    const transaction = new TransactionEmprunt(livre, emprunteur, new Date());
    this.ajouterTransactionEmprunt(transaction);
  }

  retourner(livre: Livre) {
    // Récupération de la transaction associé au livre
    const transactionIndex = this.transactionsEmprunt.findIndex(
      (transaction) => transaction._livre.titre === livre.titre
    );

    // Récupération de l'emprunteur du livre + suppression du livre au niveau de l'entité de l'emprunteur
    const emprunteur = this.transactionsEmprunt[transactionIndex].emprunteur;
    emprunteur.retirerLivre(livre)

    // Suppression de la transaction
    this.transactionsEmprunt.splice(transactionIndex, 1);
    
    livre.mettreEnDisponible();
  }
}
