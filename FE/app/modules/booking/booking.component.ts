import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-booking',
    templateUrl: './booking.component.html',
    styleUrls: ['./booking.component.scss']
})
export class BookingComponent {
    
    title: string = 'Book Your Padel Court';
    courtImage: string = 'assets/images/court.png';
    constructor(private router: Router) {}

    confirmBooking() {
        // Simulating booking confirmation logic
        this.router.navigate(['/booking/confirmation']);
    }
}