import { Injectable } from '@angular/core';
import { ApiHandlerService } from 'src/app/core/shared/utils/api-handler.service';
import { API_ENDPOINTS, ApiMethod } from 'src/app/core/shared/utils/const';

@Injectable({
  providedIn: 'root'
})
export class SettingService {
userInfo:any;
  constructor(private http: ApiHandlerService) {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
  }

  getAllCoutriesList() {
    return this.http.requestCall(API_ENDPOINTS.getAllCountriesList,ApiMethod.GET,'');
  }

  getCountryById(id:any) {
    return this.http.requestCall(API_ENDPOINTS.getCountryById,ApiMethod.GET,id);
  }

  createCountry(data:any) {
    return this.http.requestCall(API_ENDPOINTS.createCountry,ApiMethod.POST,'', data);
  }

}
