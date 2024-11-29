import { Livre } from "./Livre";

export class Emprunteur {
  public livres: Livre[] = [];
  constructor(public nom: string, public email: string) {}

  ajouterLivre(livre: Livre) {
    this.livres.push(livre);
  }

  retirerLivre(livre: Livre) {
    const livreIndex = this.livres.findIndex(livreDetails => livreDetails.titre === livre.titre);
    this.livres.splice(livreIndex, 1);
  }

  compterLivres() {
    return this.livres.length;
  }
}
