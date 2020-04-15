import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private _places: Place[] = [

    new Place('p1', 'Manhattan Mansion', 'In the heart of New York City', 'https://r-cf.bstatic.com/images/hotel/max1024x768/145/145582152.jpg', 149.99),
    new Place('p2', 'L\'Amour Toujours', 'A romantic place in Paris', 'https://q-cf.bstatic.com/images/hotel/max1024x768/110/110240861.jpg', 189.99),
    new Place('p3', 'Foggy Palace', 'Not your everage city trip', 'https://r-cf.bstatic.com/images/hotel/max1024x768/448/44876613.jpg', 99.99)
  ];

  constructor() { }

  get places(): Place[] {

    return [...this._places];
  }

  getPlace(placeId: string): Place {
    
    return  {...this._places.find(x => x.id == placeId)};
  }

}
