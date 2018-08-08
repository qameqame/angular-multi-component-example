import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Inject } from '@angular/core';
import { DialogData } from '../order-list/order-list.component';

@Component({
  selector: 'app-order-input',
  templateUrl: './order-input.component.html',
  styleUrls: ['./order-input.component.css']
})
export class OrderInputComponent implements OnInit {

  // constructor() { }

  constructor(
    public dialogRef: MatDialogRef<OrderInputComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    console.log('hello from orderInputComponent');
  }

}
