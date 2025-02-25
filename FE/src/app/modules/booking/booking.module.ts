import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BookingRoutingModule } from './booking-routing.module';
import { BookingComponent } from './booking.component';

@NgModule({
    imports: [CommonModule, BookingRoutingModule, RouterModule, BookingComponent],
    exports: [BookingComponent]
})
export class BookingModule {}