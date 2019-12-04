import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Stagiaire} from '../model/stagiaire';
import {StagiaireService} from '../stagiaire/stagiaire.service';
import {niveauEtude} from '../model/niveauEtude';

@Component({
  selector: 'stagiaire-form',
  templateUrl: './stagiaire-form.component.html',
  styleUrls: ['./stagiaire-form.component.css']
})
export class StagiaireFormComponent implements OnInit {
  @Input("current")
  stagiaire: Stagiaire;
  @Output()
  childEvent = new EventEmitter();
  niveauEtude: niveauEtude;

  constructor(private stagiaireService: StagiaireService) { }

  ngOnInit() {
  }

  save(stagiaire){
    stagiaire.dtNaissance = new Date(stagiaire.dtNaissance)
    this.stagiaire = stagiaire;
    this.stagiaireService.add(stagiaire)
    this.cancel();
  }


  cancel(){
    this.childEvent.emit();
  }



}
