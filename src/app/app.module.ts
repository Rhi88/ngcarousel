import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';


@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()//metodo para declarar rutas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
