import { Component, OnInit } from '@angular/core';
import { Order } from '../order';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Inject } from '@angular/core';
import { OrderInputComponent } from '../order-input/order-input.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent {

  constructor(public dialog: MatDialog) { }

  orders: Array<Order> = [
    new Order(1, 'B5 Enpitsu', 50),
    new Order(2, 'Keshigomu', 50),
    new Order(3, 'sankaku-jougi', 50)
  ];

  onEdit($event: Order) {

    this.orders.forEach(element => {
      if (element.id === $event.id) {
        element.itemName = $event.itemName;
        element.amount = $event.amount;
      }
    });
  }

  // tslint:disable-next-line:member-ordering
  name: string;
  // tslint:disable-next-line:member-ordering
  animal: string;

  openDialog(): void {
    const dialogRef = this.dialog.open(OrderInputComponent, {
      width: '250px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}

// @Component({
//   selector: 'dialog-overview-example-dialog',
//   templateUrl: '../order-input2/dialog-overview-example-dialog.html',
// })
// export class DialogOverviewExampleDialog {

//   constructor(
//     public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
//     @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

//   onNoClick(): void {
//     this.dialogRef.close();
//   }

// }

export interface DialogData {
  animal: string;
  name: string;
}
