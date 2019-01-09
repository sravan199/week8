import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute }from '@angular/router';

import {ApiGatewayService} from '../services/api-gateway.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})

export class BookingComponent implements OnInit {
 
  movie:any;
  movieShowDetails:any;
  done=false;
  theaterInfo:any;
  movieData:any;
  clicked=false;
  count=0;
  seatsAvailable:any;
 
  bokkedSeats:number=0;
  notBokkedSeats=true;

  constructor(private activatedRoute:ActivatedRoute,private router:Router,private apiGateway:ApiGatewayService) { }
  

  ngOnInit() {

    this.movie=this.activatedRoute.snapshot.paramMap.get("movie");
     this.apiGateway.fetchData('http://localhost:3000/bookmovie/'+this.movie).subscribe((res:any)=>{
      
      this.movieShowDetails=res;
      this.movieData=this.movieShowDetails[0].movie;
      this.theaterInfo=this.movieData.theaters
      console.log(this.movieData.theaters)
     
      if(this.movieShowDetails[1].success)
       { 
         this.done=true;
          this.movieData.backdrop_path = 'http://image.tmdb.org/t/p/w300_and_h450_bestv2/' + this.movieData.poster_path;
           console.log(this.movieData);
       }

    });

  }

  onclick(element,timing,i){
   
    this.clicked=true;
    this.seatsAvailable= element.seats[i];
    console.log("total seats ra " + this.seatsAvailable);
    
  }

  selctedSeats(i){
    this.bokkedSeats=i;
    this.notBokkedSeats=false;
  }

  gotoHomePage(){
    this.router.navigate(['/movies']);
  }
}
