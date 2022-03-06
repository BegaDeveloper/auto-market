import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  carHome: any = [];
  constructor(private api: HttpService) {}

  ngOnInit(): void {
    this.getHomeDetails();
  }

  getHomeDetails() {
    this.api.getCarDetails().subscribe((res) => {
      this.carHome = res;
    });
  }
}
