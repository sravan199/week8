import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErrorComponent } from './error/error.component';
import { BookingComponent } from './booking/booking.component';
import { MovieListComponent } from './movie-list/movie-list.component';


const routes: Routes = [
  {path:"",redirectTo:"/movies",pathMatch:"full"},
  {path:"movies",component:MovieListComponent},
  {path:"booking/:movie",component:BookingComponent},
  {path:"**",component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
