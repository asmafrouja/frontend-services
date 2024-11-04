import { API_ENDPOINTS, ApiMethod } from '../../core/shared/utils/const';
import { ApiHandlerService } from '../../core/shared/utils/api-handler.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: ApiHandlerService,private https:HttpClient) { }

  getAllUsers(): Observable<any> {
    return this.https.get<any>(`http://localhost:8022/api/v1/users/all`);
  }
  ge
  getUsers() {
    return this.http.requestCall(API_ENDPOINTS.users,ApiMethod.GET,'')
  }

  deleteUser(id:any): Observable<any> {
    return this.https.delete<any>(`http://localhost:8022/api/v1/users/${id}`);
  }

  /*deleteUser(i:any) {
    return this.http.requestCall(API_ENDPOINTS.deleteUser,ApiMethod.GET,i)
  }*/

  editUser(data:any) {
    return this.http.requestCall(API_ENDPOINTS.editUser,ApiMethod.PUT,'',data)
  }

  createUser(data:any) {
    return this.http.requestCall(API_ENDPOINTS.createUser,ApiMethod.POST,'',data)
  }
}
