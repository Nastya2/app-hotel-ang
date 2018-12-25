import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartDegreeComponent } from './cart-degree.component';

describe('CartDegreeComponent', () => {
  let component: CartDegreeComponent;
  let fixture: ComponentFixture<CartDegreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartDegreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartDegreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
