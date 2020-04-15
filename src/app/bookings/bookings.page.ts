import { Component, OnInit } from '@angular/core';
import { BookingService } from './booking.service';
import { Booking } from './booking.model';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {

  bookings: Booking[];

  constructor(private bookingService: BookingService) { }

  ngOnInit() {
    this.bookings = this.bookingService.bookings;
  }

  onDeleteBooking(bookingId: string){
    this.bookingService.deleteBooking(bookingId);
    this.bookings = this.bookingService.bookings;
  }
}
