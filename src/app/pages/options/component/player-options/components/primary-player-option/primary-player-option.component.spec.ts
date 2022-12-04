import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryPlayerOptionComponent } from './primary-player-option.component';

describe('PrimaryPlayerOptionComponent', () => {
  let component: PrimaryPlayerOptionComponent;
  let fixture: ComponentFixture<PrimaryPlayerOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimaryPlayerOptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimaryPlayerOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
