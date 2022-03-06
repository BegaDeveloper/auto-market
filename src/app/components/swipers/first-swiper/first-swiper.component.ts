import { Component, ViewEncapsulation, ViewChild, OnInit } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';
import { HttpService } from 'src/app/service/http.service';
// import Swiper core and required modules
import SwiperCore, { Pagination } from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination]);
@Component({
  selector: 'app-first-swiper',
  templateUrl: './first-swiper.component.html',
  styleUrls: ['./first-swiper.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class FirstSwiperComponent implements OnInit {
  carDetails: any = [];
  constructor(private api: HttpService) {}

  ngOnInit(): void {
    this.getFirstDetails();
  }

  getFirstDetails() {
    this.api.getCarDetails().subscribe((res) => {
      console.log('ts', res);
      this.carDetails = res;
    });
  }
}
