import { Injectable } from '@angular/core';
import { ApiHandlerService } from '../../../core/shared/utils/api-handler.service';
import { API_ENDPOINTS, ApiMethod } from '../../../core/shared/utils/const';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'http://localhost:8022/api/v1/experts/all';

  admin = false;
  suser = false;
  islogin = false;

  constructor(private http: ApiHandlerService,private https:HttpClient) { }

  login(email: string, password: string) {
    // Assuming you need to send the email and password in the request body
    const data = { email, password };
    return this.http.requestCall(API_ENDPOINTS.logIn, ApiMethod.POST, '', data);
  }

  signIn(data: any) {
    return this.http.requestCall(API_ENDPOINTS.logIn, ApiMethod.POST, '', data);
  }

  resetPassword(data: any, token: any) {
    return this.http.requestCall(API_ENDPOINTS.resetPassword, ApiMethod.POST, token, data);
  }

  forgetPassword(data: any) {
    return this.http.requestCall(API_ENDPOINTS.forgetPassword, ApiMethod.POST, '', data);
  }

  signUp(data: any) {
     return this.https.post<any>(`http://localhost:8022/api/v1/auth/signup`,data);
    //return this.http.requestCall(API_ENDPOINTS.signUp, ApiMethod.POST, '', data);
  }

  logout() {
    localStorage.clear();
  }

  getUserById(id: number): Observable<any> {
    return this.https.get<any>(`http://localhost:8022/api/v1/users/${id}`);
  }
}
