import {environment} from 'src/environments/environment';

export const API_URL: string = environment.api_url;

export enum ApiMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
  PATCH = "PATCH"
}


export const API_ENDPOINTS = {
logIn:'http://localhost:8022/api/v1/auth/signin  ',
signUp:'http://localhost:8022/api/v1/auth/signup',
resetPassword:'users/resetPassword/',
forgetPassword:'users/forgotPassword',
users: 'users',
deleteUser: 'http://localhost:8022/api/v1/users/',
editUser: 'http://localhost:8022/api/v1/users/2',
createUser: 'users/createUser',
getRoles:'roles',
createRoles:'roles/createRole',
updateRoles:'roles/updateRole',
deleteRoles:'roles/deleteRole/',
getAllCountriesList:'countries',
getCountryById:'countries/',
createCountry:'countries/createCountry',
updateCountry:'countries/updateCountry',


}
