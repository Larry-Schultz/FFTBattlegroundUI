import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsPhaseComponent } from './results-phase.component';

describe('ResultsPhaseComponent', () => {
  let component: ResultsPhaseComponent;
  let fixture: ComponentFixture<ResultsPhaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultsPhaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultsPhaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
