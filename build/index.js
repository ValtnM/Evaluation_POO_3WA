"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Bibliotheque_1 = require("./Bibliotheque");
const Emprunteur_1 = require("./Emprunteur");
const Livre_1 = require("./Livre");
const bibliotheque = new Bibliotheque_1.Bibliotheque();
// Ajout de livres
const livre1 = new Livre_1.Livre('Le petit prince', 'Antoine de Saint-Exupéry', 1943, true);
bibliotheque.ajouterLivre(livre1);
const livre2 = new Livre_1.Livre('Coder proprement', 'Robert C. Martin', 2008, true);
bibliotheque.ajouterLivre(livre2);
// Ajout d'emprunteurs
const emprunteur1 = new Emprunteur_1.Emprunteur("John Doe", "john.doe@gmail.com");
bibliotheque.ajouterEmprunteur(emprunteur1);
const emprunteur2 = new Emprunteur_1.Emprunteur("Michel Durand", "michel.durand@gmail.com");
bibliotheque.ajouterEmprunteur(emprunteur2);
// Création d'emprunts
bibliotheque.emprunter(livre1, emprunteur1);
bibliotheque.emprunter(livre2, emprunteur1);
// console.log(bibliotheque._emprunteurs);
// console.log(bibliotheque._emprunteurs[0]);
// console.log(bibliotheque._livres[0]);
// console.log(bibliotheque._transactionsEmprunt[0]);
// Retour d'un livre
bibliotheque.retourner(livre2);
// console.log(bibliotheque._transactionsEmprunt);
