import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(restaurants: any[], searchText: string): any[] {
    if (!searchText) return restaurants;

    return restaurants.filter((restaurant) =>
      restaurant.Brand.toLowerCase().includes(searchText.toLowerCase())
    );
  }
}
