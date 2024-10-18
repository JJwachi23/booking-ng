import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { RoomsService } from '../../services/rooms.service';
import { ResponeAPI } from '../../interfaces/responeAPI';
import { RoomModel } from '../../interfaces/room.model';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Time } from '../../interfaces/time';

@Component({
  selector: 'app-bookings',
  standalone: true,
  imports: [SharedModule, ReactiveFormsModule],
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.scss'
})
export class BookingsComponent implements OnInit {

  responseData: ResponeAPI<RoomModel[]> = {
    data: [],
    total: 0
  }
  selectRooms: string = '';

  form!: FormGroup;
  times: Time[] = [
    { timeStart: '07:00', timeEnd: '08:00' },
    { timeStart: '08:00', timeEnd: '09:00' },
    { timeStart: '09:00', timeEnd: '10:00' },
    { timeStart: '10:00', timeEnd: '11:00' },
    { timeStart: '11:00', timeEnd: '12:00' },
    { timeStart: '12:00', timeEnd: '13:00' },
    { timeStart: '13:00', timeEnd: '14:00' },
    { timeStart: '14:00', timeEnd: '15:00' },
    { timeStart: '15:00', timeEnd: '16:00' },
    { timeStart: '16:00', timeEnd: '17:00' },
  ];

  constructor(
    private _room: RoomsService,
    private _formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this._room.getRoomNumbers().subscribe((res: ResponeAPI<RoomModel[]>) => {
      this.responseData = res;
      console.log(res);
    })

    this.form = this._formBuilder.group({
      selectTimeStart: ['', Validators.required],
      selectRooms: ['', Validators.required],
      selectTimeEnd: ['', Validators.required],
      pickerStart: ['', Validators.required],
      pickerEnd: ['', Validators.required],
    })
  }

  onSubmit() {

    console.log(this.form.value);
    console.log(this.form.invalid);
    if (this.form.invalid) {
      this.form.markAllAsTouched();
    } else {

    }
  }

}
