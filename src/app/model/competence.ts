export class Competence {

  id:number;
  version:number;
  intitule:string;
  ponderation:Ponderation;
  description:string;
  competenceSkeelz: Array<CompetenceSkeelz>= new Array<CompetenceSkeelz>();
  bilanCompetence: Array<BilanCompetence>=new Array<BilanCompetence>();


  constructor(id: number, version: number, intitule: string, ponderation: Ponderation, description: string, competenceSkeelz: Array<CompetenceSkeelz>, bilanCompetence: Array<BilanCompetence>) {
    this.id = id;
    this.version = version;
    this.intitule = intitule;
    this.ponderation = ponderation;
    this.description = description;
    this.competenceSkeelz = competenceSkeelz;
    this.bilanCompetence = bilanCompetence;
  }
