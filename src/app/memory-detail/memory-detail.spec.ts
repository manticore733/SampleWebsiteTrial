import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoryDetail } from './memory-detail';

describe('MemoryDetail', () => {
  let component: MemoryDetail;
  let fixture: ComponentFixture<MemoryDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemoryDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemoryDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
