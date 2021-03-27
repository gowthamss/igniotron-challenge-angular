import { Component, OnInit } from '@angular/core';
import { RestaurantListServiceService } from '../services/card-list-service.service';
import { RestaurantConfig } from '../restaurant-interface';

@Component({
  selector: 'restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss'],
})
export class RestaurantListComponent implements OnInit {
  restaurantData: RestaurantConfig[] = [];
  imageData: any[] = [];
  searchText: string = '';

  constructor(private rServie: RestaurantListServiceService) {}

  ngOnInit(): void {
    this.rServie.getImageDeatails().subscribe(
      (response) => {
        this.imageData = response;
        console.log(this.imageData);
      },
      (error) => {
        console.log('Unable to fetch images: ', error);
      }
    );

    this.rServie.getRestaurantDeatils().subscribe(
      (response) => {
        this.restaurantData = response;
        this.addImagesToRestaurants();
        console.log(this.restaurantData);
      },
      (error) => {
        console.log('Unable to fetch restaurant data: ', error);
      }
    );
  }

  generateRandomImage(): any {
    const image = this.imageData[
      Math.floor(Math.random() * this.imageData.length)
    ];
    return image.Image;
  }

  addImagesToRestaurants() {
    for (let restaurant of this.restaurantData) {
      if (!restaurant['Image']) {
        restaurant['Image'] = this.generateRandomImage();
      }

      if (restaurant.Stars === 'NaN') {
        restaurant['Stars'] = 0;
      }
    }
  }
}
