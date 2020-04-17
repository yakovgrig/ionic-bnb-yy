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

  featuredPlace: Place;
  loadedPlaces: Place [];
  
  ngOnInit() {
  }
  
  ionViewDidEnter(){

    let places = this.placesService.places;
    this.featuredPlace = places[0];  
    this.loadedPlaces = places.slice(1);
  } 
  
  onOpenMenu(){
    this.MenuController.open("m1");

  }

  onFilterUpdateEvent(event: CustomEvent<any>){

    console.log(event);
  }
}
