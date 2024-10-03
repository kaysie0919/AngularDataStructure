import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopspeclistComponent } from './laptopspeclist.component';

describe('LaptopspeclistComponent', () => {
  let component: LaptopspeclistComponent;
  let fixture: ComponentFixture<LaptopspeclistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaptopspeclistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaptopspeclistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
