import { Component, OnInit, Input } from '@angular/core';
import { Place } from 'src/app/places/place.model';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {

  @Input() selectedPlace: Place;
  
  constructor(private modalcontroller:ModalController) { }

  ngOnInit() {}

  onBookPlace(){

    this.modalcontroller.dismiss({message: 'this is a dummy mesasage!'}, "confirm");
  }

  onCancel(){

    this.modalcontroller.dismiss(null, "cancel");
  }
}
