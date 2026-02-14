import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoveCouponsComponent } from './love-coupons-component';

describe('LoveCouponsComponent', () => {
  let component: LoveCouponsComponent;
  let fixture: ComponentFixture<LoveCouponsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoveCouponsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoveCouponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
