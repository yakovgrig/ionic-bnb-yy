import { Injectable } from '@angular/core';
import { Booking } from './booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  _bookings: Booking [] = [
    {
      id: 'xyz',
      placeId: 'p1',
      placeTitle: 'Manhattan Mansion',
      guestNumber: 2,
      userId: 'abc'
    }
  ];

  constructor() { }

  get bookings(){

    return [...this._bookings];
  }

  deleteBooking(bookingId: string){
    
    this._bookings = this._bookings.filter(x => x.id != bookingId);

  }
}
