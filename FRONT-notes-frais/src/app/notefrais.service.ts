import { Injectable } from '@angular/core';
import { NoteFrais } from './note-frais';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Response } from './response';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class NoteFraisService {
  private notesfraisUrl = 'http://localhost:3000/api/notes';
  notesfrais: NoteFrais[];
  notefrais: NoteFrais;


  constructor(
    private http: HttpClient,
) {}

  getNotesFrais(): void {
    this.http.get<Response>(this.notesfraisUrl).pipe(map(res => {return(res.data)} ))
    .subscribe(notesfrais => {this.notesfrais = notesfrais});
  }



  /**getRecette(id: string): Observable<Recette> {
    // TODO: send the message _after_ fetching the recette
    this.messageService.add(`RecetteService: fetched recette id=${id}`);
    /**return of(this.RECETTES.find(recette => recette._id == id ));
    return this.getRecettes()
      .pipe(map(recettes => recettes.find(recette => recette._id === id)));
}*/

getNoteFrais(id:string): Observable<NoteFrais> {
  return this.http.get<Response>((this.notesfraisUrl+'/'+id))
  .pipe(map(res => {return(res.data)}));
}

deleteNoteFrais(id:string): Observable<NoteFrais> {
  this.http.delete(this.notesfraisUrl+'/'+id);
  return this.http.delete<NoteFrais>(this.notesfraisUrl+'/'+id)
  .pipe(tap(_ => console.log(id,"bien effacé")))
}

/*
getOrigines(): Observable<Origine[]> {
  return this.http.get<Response>(this.originesUrl).pipe(map(res => {console.log(res); return(res.data)}))
}

/** GET hero by id. Will 404 if id not found 
  getRecette(id: number): Observable<Recette> {
    const url = `${this.recettesUrl}/${id}`;
    return this.http.get<Recette>(url).pipe(
      tap(_ => this.log(`fetched recette id=${id}`)),
      catchError(this.handleError<Hero>(`getRecette id=${id}`))
    );
  }*/

  createNoteFrais(note : NoteFrais) : Observable<NoteFrais> {
    return this.http.post<NoteFrais>(this.notesfraisUrl,note )
    .pipe(tap(_ => console.log('bien ajoutée')))
  }
}