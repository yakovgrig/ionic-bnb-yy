import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { Place } from './../place.model';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {

  constructor(private placesService: PlacesService, private MenuController: MenuController) { }

  loadedPlaces: Place [];
  
  ngOnInit() {
      this.loadedPlaces = this.placesService.places;
  }
  
  onOpenMenu(){
    this.MenuController.open("m1");

  }
}
