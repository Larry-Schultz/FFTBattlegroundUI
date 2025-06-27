import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingPhaseComponent } from './loading-phase.component';

describe('LoadingPhaseComponent', () => {
  let component: LoadingPhaseComponent;
  let fixture: ComponentFixture<LoadingPhaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadingPhaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadingPhaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
