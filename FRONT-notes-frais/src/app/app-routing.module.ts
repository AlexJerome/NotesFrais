import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesfraisComponent } from './notesfrais/notesfrais.component';
import { DetailnoteComponent } from './detailnote/detailnote.component';
import { CreationComponent } from './creation/creation.component';


const routes : Routes = [
  { path : 'liste-notes', component : NotesfraisComponent },
  { path : 'detail/:id', component : DetailnoteComponent },
  { path : 'create', component : CreationComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
}) 


export class AppRoutingModule {

}