import { Component, OnInit } from '@angular/core';

import {ApiGatewayService} from '../services/api-gateway.service';

import {Router }from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  receivedData:any;
  done:boolean=false;
  name:any="";
  theaterList:any;

  constructor(private apiGateway:ApiGatewayService,private router:Router) { }

  ngOnInit() {

    this.apiGateway.fetchData('http://localhost:3000').subscribe((res:any)=>{
          this. receivedData= res;
          console.log("data received from localhost 3000");
          console.log(this.receivedData);
          this.done=true;
          res.forEach(element => {
            if (element.poster_path) {
              element.backdrop_path = 'http://image.tmdb.org/t/p/w300_and_h450_bestv2/' + element.poster_path;
            } 
          });
         this. theaterList=this.receivedData.theaters;

             }); 
  }

  onclick(movieName){
      this.router.navigate(['/booking',movieName]);
  }
}
