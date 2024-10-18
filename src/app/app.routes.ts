import { Routes } from '@angular/router';
import { RoomsComponent } from './components/rooms/rooms.component';
import { BookingDetailsComponent } from './components/booking-details/booking-details.component';
import { BookingsComponent } from './components/bookings/bookings.component';

export const routes: Routes = [
    { path: '', component: BookingsComponent, pathMatch: 'full' },
    { path: 'rooms', component: RoomsComponent },
    { path: 'booking-details', component: BookingDetailsComponent },
]; 
