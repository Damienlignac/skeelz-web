import {Injectable} from '@angular/core';
import {Stagiaire} from '../model/stagiaire';
import {Adresse} from '../model/adresse';
import {niveauEtude} from '../model/niveauEtude';

@Injectable({
  providedIn: 'root'
})
export class StagiaireService {
  stagiaires: Array<Stagiaire> = new Array<Stagiaire>();


  constructor() {
    this.stagiaires.push(new Stagiaire(1, 0, 'MICHEL', 'Arnaud', 'arnaud.lebo@gmail.com', '0606060606', new Adresse('4 rue de Paris', '1er étage', '33160', 'Saint-Médard-en-Jalles'), new Date('1996-11-11'), niveauEtude.BAC ));
    this.stagiaires.push(new Stagiaire(2, 0, 'DUCOS', 'Théo', 'theo.legros@gmail.com', '6666666666', new Adresse('28 rue de l\'enfer', '', '66666', 'Dante'), new Date('1991-09-07'),  niveauEtude.BAC_2 ));
    this.stagiaires.push(new Stagiaire(3, 0, 'GALMAR', 'Oriane', 'oriane@gmail.com', '8888888888', new Adresse('88 rue de l\'infini', '', '88888', 'Pluton'), new Date('1994-03-06'),niveauEtude.BAC_5));
  }

  findAll(): Array<Stagiaire> {
    return this.stagiaires;
  }

  findById(id: number): Stagiaire {
    for (let i = 0; i < this.stagiaires.length; i++) {
      if (this.stagiaires[i].id == id) {

        return this.stagiaires[i];
      }
    }
    return null;
  }

  add(stagiaire: Stagiaire) {
    let existe:boolean=false;

    for (let i = 0; i < this.stagiaires.length; i++) {
        if (this.stagiaires[i].id == stagiaire.id) {
          this.modify(stagiaire);
          existe =true;
        }
    }
    if(existe == false){
      this.stagiaires.push(stagiaire);

    }}

  modify(stagiaire: Stagiaire) {
    for (let i = 0; i < this.stagiaires.length; i++) {
      if (this.stagiaires[i].id == stagiaire.id) {
        this.stagiaires[i] = stagiaire;
      }
    }
  }
  deleteBydId(id: number) {
    for (let i = 0; i < this.stagiaires.length; i++) {
      if (this.stagiaires[i].id == id) {
        this.stagiaires.splice(id, 1);
      }
    }
  }
}
