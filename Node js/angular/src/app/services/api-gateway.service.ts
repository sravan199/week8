import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiGatewayService {

  constructor(private http:HttpClient) { }

 fetchData(ApiUrl:string){
  return this.http.get(ApiUrl);
 }
 



}
