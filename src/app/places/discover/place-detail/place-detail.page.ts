import { Component, OnInit } from '@angular/core';
import { Place } from '../../place.model';
import { ActivatedRoute } from '@angular/router';
import { PlacesService } from '../../places.service';
import { NavController, ModalController, ActionSheetController } from '@ionic/angular';
import { CreateBookingComponent } from 'src/app/bookings/create-booking/create-booking.component';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  place: Place;

  constructor(
    private route: ActivatedRoute, 
    private placesService: PlacesService, 
    private navController:NavController,
    private modalController: ModalController,
    private actionSheetController: ActionSheetController

  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {

      if (!paramMap.has("placeId")){

        this.navController.navigateBack('/places/tabs/offers');
        return;
      }

      this.place = this.placesService.getPlace(paramMap.get("placeId"));
    });
  }
  
  onBookPlace(){
    this.actionSheetController.create({
      header: "Choose an action",
      buttons: [
        {
          text: 'Select Date',
          handler: () => {this.openBookingModal('select');}  

        },
        {
          text: 'Random Date',
          handler: () => {this.openBookingModal('random');}  

        },  
        {
          text: 'Cancel',
          role: 'cancel'  
        }  
      ]

    }).then(el => {

      el.present();  
    })    

  }

  openBookingModal(mode: 'select' | 'random'){
    this.modalController.create({
      component: CreateBookingComponent
      , componentProps: { selectedPlace: this.place }
      , animated: true
      , swipeToClose: true
      }).then(modalEl => {

        modalEl.present();
        return modalEl.onDidDismiss();

      }).then(resultData =>{

        console.log(resultData);
        if (resultData.role === "confirm"){

          console.log("BOOKED!");
        }
      });
  }
}
