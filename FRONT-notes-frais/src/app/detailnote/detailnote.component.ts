import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { NoteFrais } from  '../note-frais'
import { NoteFraisService } from '../notefrais.service'
import { Location } from '@angular/common';
import { NotesfraisComponent } from '../notesfrais/notesfrais.component';

@Component({
  selector: 'app-detailnote',
  templateUrl: './detailnote.component.html',
  styleUrls: ['./detailnote.component.css'],
  providers : [NotesfraisComponent]
})
export class DetailnoteComponent implements OnInit {
  notefrais : NoteFrais ;
  statut : String ; 
  

  constructor(
    private route: ActivatedRoute,
    private notefraisService: NoteFraisService,
    private notesfraisComponent: NotesfraisComponent,
  ) { }

  ngOnInit() {
    this.getNoteFrais()
    console.log("coucou c moi",this.notefrais)
  }

  getNoteFrais(): void {
      var id = this.route.snapshot.paramMap.get('id'); 
      this.notefraisService.getNoteFrais(id)
      .subscribe(notefrais => {console.log("test", notefrais), this.notefrais = notefrais;}) 
    }

  
  refreshData() : void {
    this.notefraisService.getNotesFrais()
  }

  deleteNoteFrais() : void {
    var id = this.route.snapshot.paramMap.get('id'); 
    /**this.notesfraisComponent.notesfrais = this.notesfraisComponent.notesfrais.filter(n => n._id !== id);*/
    this.notefraisService.deleteNoteFrais(id)
    .subscribe(() => this.refreshData())
  }

  statutfonction(stat : Number) : String {
    if (stat == 0) {return("non validé")}
    if (stat == 1) {return("validé")}
    }
  
  fonctiontest(): void {
    console.log(this.notesfraisComponent.notesfrais)
    this.notesfraisComponent.vartest = false;
  }

}
