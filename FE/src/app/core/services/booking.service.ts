import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class BookingService {
    getBookings() {
        return [{ id: 1, court: 'Court 1', date: '2025-03-01' }];
    }
}