import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NotesfraisComponent } from './notesfrais/notesfrais.component';
import { AppRoutingModule } from './/app-routing.module';
import { NavigationComponent } from './navigation/navigation.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailnoteComponent } from './detailnote/detailnote.component';
import { CreationComponent } from './creation/creation.component';
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NotesfraisComponent,
    NavigationComponent,
    DetailnoteComponent,
    CreationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
