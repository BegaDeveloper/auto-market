import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  base_url = 'http://almond-platform.com:7015/auto-market/landing-page/public';

  constructor(private http: HttpClient) {}

  getCarDetails() {
    return this.http.get(this.base_url).pipe(
      map((res) => {
        console.log('service', res);
        return res;
      })
    );
  }
}
