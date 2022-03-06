import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Imported the const routingLinks from routing module to have a cleaner module
import { AppRoutingModule, routingLinks } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FirstSwiperComponent } from './components/swipers/first-swiper/first-swiper.component';
import { SwiperModule } from 'swiper/angular';
import { SecondSwiperComponent } from './components/swipers/second-swiper/second-swiper.component';
import { ModelSwiperComponent } from './components/swipers/model-swiper/model-swiper.component';

@NgModule({
  declarations: [
    AppComponent,
    routingLinks,
    FirstSwiperComponent,
    SecondSwiperComponent,
    ModelSwiperComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    SwiperModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
