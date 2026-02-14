import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoriesWallComponent } from './memories-wall-component';

describe('MemoriesWallComponent', () => {
  let component: MemoriesWallComponent;
  let fixture: ComponentFixture<MemoriesWallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemoriesWallComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemoriesWallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
