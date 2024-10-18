import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MatSelectModule,
        MatFormFieldModule,
        FormsModule,
        MatInputModule,
        MatCardModule,
        MatDatepickerModule,
        MatButtonModule,
    ],
    providers: [
        provideNativeDateAdapter(),
    ],
    exports: [
        CommonModule,
        RouterModule,
        MatSelectModule,
        MatFormFieldModule,
        FormsModule,
        MatInputModule,
        MatCardModule,
        MatDatepickerModule,
        MatButtonModule,
    ]
})
export class SharedModule { }