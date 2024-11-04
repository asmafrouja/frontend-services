import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl = 'http://localhost:8022/api/v1/experts/all';
  baseUrl1 = 'http://localhost:8022/api/v1/experts/create';
  baseUrl2 = 'http://localhost:8022/api/v1/experts'; // URL pour supprimer un expert
  baseUrl3 = 'https://jsonplaceholder.typicode.com/users';
  baseUrl4 = 'http://localhost:8022/api/v1/appointments'; // URL pour l'ajout de rendez-vous
  baseUrl5 = 'http://localhost:8022/api/v1/contacts/create'; // URL pour le contact
  baseUrl6 = 'http://localhost:8022/api/v1/clients/count';
  baseUrl61 ='http://localhost:8022/api/v1/experts/count ';
  baseUrl62="http://localhost:8022/api/v1/services/count";
  baseUrl7 = 'http://localhost:8022/api/v1/experts';
  baseUrlUsers ='http://localhost:8022/api/v1/users/countExpertPourcentage ';
  baseUrlVisitors='http://localhost:8022/api/v1/appointments/countAppointmentPourcentage';
  baseUrlNumbers1='http://localhost:8022/api/v1/users/countExpertPourcentage';
  constructor(private http: HttpClient) {}

  public getAllExperts(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }

  addExpert(expert: any): Observable<any> {
    return this.http.post<any>(this.baseUrl1, expert);
  }

  deleteExpert(id: any): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl2}/${id}`);
  }

  getOneExpert(id: any): Observable<any> {
    return this.http.get<any>(`${this.baseUrl3}/${id}`);
  }

  updateExpert(id: string, updatedProfile: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl7}/${id}`, updatedProfile)
      .pipe(catchError(this.handleError));
  }

  private mySendNameSubject = new Subject<string>();

  setName(name: string) {
    this.mySendNameSubject.next(name);
  }

  getName(): Observable<string> {
    return this.mySendNameSubject.asObservable();
  }

  appointment(appointment: any): Observable<any> {
    console.log('Helloo',appointment);
    return this.http.post<any>(this.baseUrl4+'/create', appointment)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error.message);
    return throwError('Something bad happened; please try again later.');
  }

  contact(body: any): Observable<any> {
    return this.http.post<any>(this.baseUrl5, body);
  }

  public getNumbers(): Observable<any> {
    return this.http.get<any>(this.baseUrl6);
  }
  public getExpertNumbers(): Observable<any> {
    return this.http.get<any>(this.baseUrl61);
  }
  public getServicesNumbers(): Observable<any> {
    return this.http.get<any>(this.baseUrl62);
  }
  public getUserRegistrations(): Observable<any> {
    return this.http.get<any>(this.baseUrlUsers);
  }

  public getUniqueVisitors(): Observable<any> {
    return this.http.get<any>(this.baseUrlVisitors);
  }

  public getNumbers1(): Observable<any> {
    return this.http.get<any>(this.baseUrlNumbers1);
  }
}
