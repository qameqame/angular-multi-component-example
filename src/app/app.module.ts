import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderEditComponent } from './order-edit/order-edit.component';
import { MatDialogModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { OrderInputComponent } from './order-input/order-input.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderListComponent,
    OrderEditComponent,
    OrderInputComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ],
  entryComponents: [
    OrderInputComponent
  ],
})
export class AppModule { }
