import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguagelsitComponent } from './languagelsit.component';

describe('LanguagelsitComponent', () => {
  let component: LanguagelsitComponent;
  let fixture: ComponentFixture<LanguagelsitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguagelsitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguagelsitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
