import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderInputComponent } from './order-input.component';
// tslint:disable-next-line:max-line-length
import { MatDialogModule, MatDialogRef, MatFormFieldModule, MAT_DIALOG_DATA, MatInputModule } from '../../../node_modules/@angular/material';
import { FormsModule } from '../../../node_modules/@angular/forms';
import { BrowserAnimationsModule } from '../../../node_modules/@angular/platform-browser/animations';

describe('OrderInputComponent', () => {
  let component: OrderInputComponent;
  let fixture: ComponentFixture<OrderInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatDialogModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule
      ],
      declarations: [OrderInputComponent],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
