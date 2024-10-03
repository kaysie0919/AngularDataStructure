import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenlistComponent } from './evenlist.component';

describe('EvenlistComponent', () => {
  let component: EvenlistComponent;
  let fixture: ComponentFixture<EvenlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvenlistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvenlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
