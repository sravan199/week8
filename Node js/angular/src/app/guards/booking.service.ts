import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http:HttpClient) { }

  fetchData2(ApiUrl:string){
    return this.http.get(ApiUrl);
   }
}
