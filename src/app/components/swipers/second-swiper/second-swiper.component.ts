import { Component, ViewEncapsulation, ViewChild, OnInit } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';
// import Swiper core and required modules
import SwiperCore, {
  Pagination,
  Navigation,
  SwiperOptions,
  Swiper,
} from 'swiper';
import { HttpService } from 'src/app/service/http.service';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);
@Component({
  selector: 'app-second-swiper',
  templateUrl: './second-swiper.component.html',
  styleUrls: ['./second-swiper.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SecondSwiperComponent implements OnInit {
  carsD: any = [];
  config: SwiperOptions = {
    slidesPerView: 6,
    spaceBetween: 30,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };
  constructor(private api: HttpService) {}

  ngOnInit(): void {
    this.getCarDetail();
  }

  getCarDetail() {
    this.api.getCarDetails().subscribe((res) => {
      this.carsD = res;
    });
  }
}
