import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Order } from '../order';
import { Input } from '@angular/core';

@Component({
  selector: 'order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.css']
})
export class OrderEditComponent implements OnInit {
  @Input() item: Order;
  editItem: Order;
  display = false;
  @Output() edited = new EventEmitter<Order>();

  ngOnInit() {
    this.editItem = new Order(
      this.item.id, this.item.itemName, this.item.amount
    );
  }

  displaySwitch(s: boolean) {
    this.display = s;
  }

  onEdit($event) {
    $event.preventDefault();
    this.displaySwitch(false);
    this.edited.emit(this.editItem);
  }
}
