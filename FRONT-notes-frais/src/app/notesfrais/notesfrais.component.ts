import { Component, OnInit, APP_BOOTSTRAP_LISTENER, Input } from '@angular/core';
import { NoteFrais } from '../note-frais';
import { NoteFraisService } from '../notefrais.service';
import { NavigationComponent } from '../navigation/navigation.component'

@Component({
  selector: 'app-notesfrais',
  providers : [],
  templateUrl: './notesfrais.component.html',
  styleUrls: ['./notesfrais.component.css'],
})
export class NotesfraisComponent implements OnInit {

  notesfrais : NoteFrais[];

  statut : String;
  vartest : Boolean = true;

  constructor( public notefraisService : NoteFraisService) { 
  }

  ngOnInit() {
    this.getNotesFrais();
  }

  statutfonction(stat : Number) : String {
    if (stat == 0) {return("non validé")}
    if (stat == 1) {return("validé")}
  }

  getNotesFrais(): void {
    this.notefraisService.getNotesFrais()
    this.notesfrais=this.notefraisService.notesfrais;
  }



}
