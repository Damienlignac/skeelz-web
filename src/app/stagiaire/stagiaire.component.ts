import { Component, OnInit } from '@angular/core';
import {StagiaireService} from './stagiaire.service';
import {Stagiaire} from '../model/stagiaire';
import {Adresse} from '../model/adresse';

@Component({
  selector: 'stagiaire',
  templateUrl: './stagiaire.component.html',
  styleUrls: ['./stagiaire.component.css']
})
export class StagiaireComponent implements OnInit {

  stagiaire: Stagiaire = null;
  adresse: Adresse = null;

  constructor(private stagiaireService: StagiaireService) { }

  ngOnInit() {
  }

  list(): Array<Stagiaire> {
    return this.stagiaireService.findAll();
  }

  add() {
    this.stagiaire = new Stagiaire();
    this.stagiaire.adresse = new Adresse();
  }
  edit(id:number){
    this.stagiaire = this.stagiaireService.findById(id)


  }
cancel(){
    this.stagiaire=null;
}

  delete(id: number){
    this.stagiaireService.deleteBydId(id);
  }
}
