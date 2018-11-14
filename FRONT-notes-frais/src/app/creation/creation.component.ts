import { Component, OnInit, Input } from '@angular/core';
import { NoteFraisService } from '../notefrais.service';
import { NoteFrais } from '../note-frais';


@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.css']
})
export class CreationComponent implements OnInit {

  model = new NoteFrais()
  private devises = ['Euros','Marks','Dollars','Yens']

  constructor( 
    private notesfraisService : NoteFraisService) { }

  ngOnInit() {
  }

  refreshData() : void {
    //this.notesfraisService.getNotesFrais()
    console.log(this.model.nom);
  }

  testNom(): void {
    console.log(this.model.nom)
  }

  createNote() : void {
    this.model.statut = 0
    this.notesfraisService.createNoteFrais(this.model)
    .subscribe(() => this.refreshData())
  }
}
