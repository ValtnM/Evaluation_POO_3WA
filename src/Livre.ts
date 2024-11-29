export class Livre {
  constructor(
    public titre: string,
    public auteur: string,
    public annee: number,
    public disponible: boolean
  ) {}

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
