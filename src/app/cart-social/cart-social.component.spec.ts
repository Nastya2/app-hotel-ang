import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartSocialComponent } from './cart-social.component';

describe('CartSocialComponent', () => {
  let component: CartSocialComponent;
  let fixture: ComponentFixture<CartSocialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartSocialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
