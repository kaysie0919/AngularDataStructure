import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VagetablelistComponent } from './vagetablelist.component';

describe('VagetablelistComponent', () => {
  let component: VagetablelistComponent;
  let fixture: ComponentFixture<VagetablelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VagetablelistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VagetablelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
