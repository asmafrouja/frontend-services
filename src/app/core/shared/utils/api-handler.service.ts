import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiHandlerService {

  constructor(private http: HttpClient) { }

  requestCall(api: string, method: string, params?: string, data?: any) {
    let response;

    params = params || '';

    switch (method) {
      case 'GET':
        if (params === '') {
          response = this.http.get(api).pipe(
            catchError(err => this.handleError(err))
          );
        } else {
          response = this.http.get(`${api}${params}`).pipe(
            catchError(err => this.handleError(err))
          );
        }
        break;
      case 'POST':
        response = this.http.post(`${api}${params}`, data).pipe(
          catchError(err => this.handleError(err))
        );
        break;
      case 'PUT':
        response = this.http.put(`${api}${params}`, data).pipe(
          catchError(err => this.handleError(err))
        );
        break;
      case 'DELETE':
        response = this.http.delete(`${api}${params}`).pipe(
          catchError(err => this.handleError(err))
        );
        break;
      default:
        break;
    }

    return response;
  }

  handleError(error: any) {
    console.error('API Error:', error);
    return throwError('Something bad happened; please try again later.');
  }
}
