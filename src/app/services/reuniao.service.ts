import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs';
import { Reuniao } from '../models/reuniao';

@Injectable({
  providedIn: 'root',
})
export class ReuniaoService {
  url = 'http://localhost:8080/reuniao';

  constructor(private httpClient: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getReunioes(): Observable<Reuniao[]> {
    return this.httpClient.get<Reuniao[]>(this.url).pipe(retry(2), catchError(this.handleError));
  }

  getReunioesById(id: number): Observable<Reuniao> {
    return this.httpClient.get<Reuniao>(this.url + '/' + id).pipe(retry(2), catchError(this.handleError));
  }

  saveReuniao(reuniao: Reuniao): Observable<Reuniao> {
    return this.httpClient
      .post<Reuniao>(this.url, JSON.stringify(reuniao), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  updateReuniao(reuniao: Reuniao): Observable<Reuniao> {
    return this.httpClient
      .put<Reuniao>(
        this.url + '/' + reuniao.idReuniao,
        JSON.stringify(reuniao),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  deleteReuniao(reuniao: Reuniao) {
    return this.httpClient
      .delete(this.url + '/' + reuniao.idReuniao, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Codigo do erro: ${error.status},` + `mensagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
