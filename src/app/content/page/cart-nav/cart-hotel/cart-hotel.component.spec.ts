import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartHotelComponent } from './cart-hotel.component';

describe('CartHotelComponent', () => {
  let component: CartHotelComponent;
  let fixture: ComponentFixture<CartHotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartHotelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
