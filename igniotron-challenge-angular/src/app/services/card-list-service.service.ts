import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestaurantConfig } from '../restaurant-interface';

@Injectable({
  providedIn: 'root',
})
export class RestaurantListServiceService {
  restaurantAPI: string = `https://s3-ap-southeast-1.amazonaws.com/he-public-data/TopRamen8d30951.json`;
  imagesAPI: string = `https://s3-ap-southeast-1.amazonaws.com/he-public-data/noodlesec253ad.json`;

  constructor(private http: HttpClient) {}

  getRestaurantDeatils(): any {
    return this.http.get<RestaurantConfig>(this.restaurantAPI);
  }

  getImageDeatails() {
    return this.http.get<any>(this.imagesAPI);
  }
}
