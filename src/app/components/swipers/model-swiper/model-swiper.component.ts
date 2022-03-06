import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';

// import Swiper core and required modules
import SwiperCore, { Grid, Pagination } from 'swiper';
import { HttpService } from 'src/app/service/http.service';

// install Swiper modules
SwiperCore.use([Grid, Pagination]);
@Component({
  selector: 'app-model-swiper',
  templateUrl: './model-swiper.component.html',
  styleUrls: ['./model-swiper.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ModelSwiperComponent implements OnInit {
  modelCars: any = [];
  constructor(private api: HttpService) {}

  ngOnInit(): void {
    this.getModelCars();
  }

  getModelCars() {
    this.api.getCarDetails().subscribe((res) => {
      this.modelCars = res;
    });
  }
}
