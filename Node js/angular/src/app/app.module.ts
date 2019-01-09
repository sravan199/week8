import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import { BookingComponent } from './booking/booking.component';
import { MovieListComponent } from './movie-list/movie-list.component';

import {ApiGatewayService} from './services/api-gateway.service';
import {BookingService}from "./guards/booking.service";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    BookingComponent,
    MovieListComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ApiGatewayService,BookingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
